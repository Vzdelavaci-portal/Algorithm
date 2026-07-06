const graphEl = document.getElementById("graph");
const edgesSvg = document.getElementById("edges");

const stackEl = document.getElementById("stack");
const visitedListEl = document.getElementById("visitedList");

const statusText = document.getElementById("statusText");
const descriptionText = document.getElementById("descriptionText");

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const slowBtn = document.getElementById("slowBtn");
const fastBtn = document.getElementById("fastBtn");

const czBtn = document.getElementById("czBtn");
const enBtn = document.getElementById("enBtn");

const startNodeValue = document.getElementById("startNodeValue");
const currentNodeValue = document.getElementById("currentNodeValue");
const visitedCount = document.getElementById("visitedCount");
const stepsCount = document.getElementById("stepsCount");

let currentLang = "cs";
let delay = 750;
let running = false;

let selectedStart = "A";
let currentNode = "-";
let visited = [];
let stack = [];
let steps = 0;
let activeEdge = null;
let backtrackEdge = null;
let backtrackNode = null;

const nodes = {
  A: { x: 50, y: 12 },
  B: { x: 30, y: 30 },
  C: { x: 70, y: 30 },
  D: { x: 18, y: 52 },
  E: { x: 42, y: 52 },
  F: { x: 58, y: 52 },
  G: { x: 82, y: 52 },
  H: { x: 34, y: 76 },
  I: { x: 50, y: 76 }
};

const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F", "G"],
  D: [],
  E: ["H", "I"],
  F: [],
  G: [],
  H: [],
  I: []
};

const edges = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
  ["B", "E"],
  ["C", "F"],
  ["C", "G"],
  ["E", "H"],
  ["E", "I"]
];

const translations = {
  cs: {
    badge: "Algoritmus #17",
    subtitle: "Procházení grafu do hloubky pomocí zásobníku",
    start: "▶ Start",
    reset: "⟳ Reset",
    slower: "🐢 Pomaleji",
    faster: "⚡ Rychleji",
    startNode: "Startovní uzel",
    currentNode: "Aktuální uzel",
    visitedCount: "Navštíveno",
    steps: "Kroky",
    graphTitle: "🌲 Graf",
    stackTitle: "📚 Zásobník",
    visitedTitle: "✅ Navštívené uzly",
    statusTitle: "📌 Co se právě děje?",
    explanationTitle: "🧠 Jak DFS funguje?",
    ready: "Vyber startovní uzel kliknutím a spusť DFS.",
    selected: "Startovní uzel vybrán:",
    pushStart: "📚 Vkládám startovní uzel na zásobník:",
    popNode: "📤 Odebírám vrchol zásobníku a navštěvuji uzel:",
    checking: "🔎 Kontroluji sousedy uzlu:",
    pushNeighbour: "📚 Přidávám souseda na zásobník:",
    backtracking: "↩️ Vracím se zpět, tato větev je hotová:",
    alreadyVisited: "✅ Uzel už byl navštíven:",
    done: "✅ Hotovo! DFS prošel celý dostupný graf.",
    resetStatus: "🔄 Vizualizace byla resetována.",
    speed: "Rychlost animace",
    description: `
      Depth-First Search prochází graf
      <span class="highlight">co nejvíce do hloubky</span>.

      <br><br>

      Algoritmus pokračuje po jedné větvi,
      dokud to jde.

      <br><br>

      Když narazí na konec,
      začne se <span class="highlight">vracet zpět</span>.
    `
  },

  en: {
    badge: "Algorithm #17",
    subtitle: "Graph traversal by going deep using a stack",
    start: "▶ Start",
    reset: "⟳ Reset",
    slower: "🐢 Slower",
    faster: "⚡ Faster",
    startNode: "Start Node",
    currentNode: "Current Node",
    visitedCount: "Visited",
    steps: "Steps",
    graphTitle: "🌲 Graph",
    stackTitle: "📚 Stack",
    visitedTitle: "✅ Visited Nodes",
    statusTitle: "📌 Current Action",
    explanationTitle: "🧠 How does DFS work?",
    ready: "Select a start node by clicking it and run DFS.",
    selected: "Start node selected:",
    pushStart: "📚 Pushing start node onto the stack:",
    popNode: "📤 Popping the top of the stack and visiting node:",
    checking: "🔎 Checking neighbours of node:",
    pushNeighbour: "📚 Pushing neighbour onto the stack:",
    backtracking: "↩️ Backtracking, this branch is finished:",
    alreadyVisited: "✅ Node already visited:",
    done: "✅ Done! DFS visited the reachable graph.",
    resetStatus: "🔄 Visualization has been reset.",
    speed: "Animation speed",
    description: `
      Depth-First Search explores a graph
      <span class="highlight">as deep as possible</span>.

      <br><br>

      The algorithm follows one branch
      until it cannot continue.

      <br><br>

      Then it <span class="highlight">backtracks</span>
      and tries another path.
    `
  }
};

function t(key) {
  return translations[currentLang][key];
}

function updateLanguage() {
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    element.innerHTML = t(key);
  });

  descriptionText.innerHTML = t("description");

  if (!running) {
    statusText.innerHTML = t("ready");
  }

  updateStats();
}

function setLanguage(lang) {
  currentLang = lang;

  if (lang === "cs") {
    czBtn.classList.add("active");
    enBtn.classList.remove("active");
  } else {
    enBtn.classList.add("active");
    czBtn.classList.remove("active");
  }

  updateLanguage();
}

function updateStats() {
  startNodeValue.innerText = selectedStart;
  currentNodeValue.innerText = currentNode;
  visitedCount.innerText = visited.length;
  stepsCount.innerText = steps;
}

function resetState() {
  running = false;
  currentNode = "-";
  visited = [];
  stack = [];
  steps = 0;
  activeEdge = null;
  backtrackEdge = null;
  backtrackNode = null;

  updateStats();
  renderAll();
}

function renderAll() {
  renderEdges();
  renderNodes();
  renderStack();
  renderVisited();
}

function renderEdges() {
  edgesSvg.innerHTML = "";

  edges.forEach(([from, to]) => {
    const fromNode = nodes[from];
    const toNode = nodes[to];

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    line.setAttribute("x1", `${fromNode.x}%`);
    line.setAttribute("y1", `${fromNode.y}%`);
    line.setAttribute("x2", `${toNode.x}%`);
    line.setAttribute("y2", `${toNode.y}%`);

    line.classList.add("edge");

    if (
      activeEdge &&
      activeEdge[0] === from &&
      activeEdge[1] === to
    ) {
      line.classList.add("active");
    }

    if (
      backtrackEdge &&
      backtrackEdge[0] === from &&
      backtrackEdge[1] === to
    ) {
      line.classList.add("backtrack");
    }

    edgesSvg.appendChild(line);
  });
}

function renderNodes() {
  document.querySelectorAll(".node").forEach(node => node.remove());

  Object.keys(nodes).forEach(name => {
    const position = nodes[name];

    const node = document.createElement("div");
    node.classList.add("node");
    node.innerText = name;

    node.style.left = `${position.x}%`;
    node.style.top = `${position.y}%`;

    if (name === selectedStart) {
      node.classList.add("start-node");
    }

    if (stack.includes(name)) {
      node.classList.add("stack-node");
    }

    if (visited.includes(name)) {
      node.classList.add("visited");
    }

    if (name === currentNode) {
      node.classList.add("current");
    }

    if (name === backtrackNode) {
      node.classList.add("backtrack");
    }

    node.addEventListener("click", () => {
      if (running) return;

      selectedStart = name;
      statusText.innerHTML = `${t("selected")} <b>${name}</b>`;
      resetState();
      selectedStart = name;
      updateStats();
      renderAll();
    });

    graphEl.appendChild(node);
  });
}

function renderStack() {
  stackEl.innerHTML = "";

  [...stack].reverse().forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("stack-item");

    if (index === 0) {
      div.classList.add("top-item");
    }

    div.innerText = item;
    stackEl.appendChild(div);
  });
}

function renderVisited() {
  visitedListEl.innerHTML = "";

  visited.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("visited-item");
    div.innerText = item;
    visitedListEl.appendChild(div);
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function findParent(child) {
  for (const node in graph) {
    if (graph[node].includes(child)) {
      return node;
    }
  }

  return null;
}

async function dfs() {
  if (running) return;

  resetState();

  running = true;

  stack.push(selectedStart);

  statusText.innerHTML =
    `${t("pushStart")} <b>${selectedStart}</b>`;

  renderAll();
  updateStats();

  await sleep(delay);

  while (stack.length > 0) {
    const node = stack.pop();

    if (visited.includes(node)) {
      statusText.innerHTML =
        `${t("alreadyVisited")} <b>${node}</b>`;

      renderAll();
      await sleep(delay / 1.5);
      continue;
    }

    currentNode = node;
    visited.push(node);
    steps++;

    statusText.innerHTML =
      `${t("popNode")} <b>${node}</b>`;

    activeEdge = null;
    backtrackEdge = null;
    backtrackNode = null;

    renderAll();
    updateStats();

    await sleep(delay);

    statusText.innerHTML =
      `${t("checking")} <b>${node}</b>`;

    renderAll();

    await sleep(delay);

    const neighbours = [...graph[node]].reverse();

    if (neighbours.length === 0) {
      const parent = findParent(node);

      if (parent) {
        backtrackNode = parent;
        backtrackEdge = [parent, node];

        statusText.innerHTML =
          `${t("backtracking")} <b>${node}</b>`;

        renderAll();

        await sleep(delay);
      }
    }

    for (const neighbour of neighbours) {
      activeEdge = [node, neighbour];

      renderAll();

      await sleep(delay / 1.5);

      if (!visited.includes(neighbour) && !stack.includes(neighbour)) {
        stack.push(neighbour);

        statusText.innerHTML =
          `${t("pushNeighbour")} <b>${neighbour}</b>`;

        renderAll();
        updateStats();

        await sleep(delay);
      } else {
        statusText.innerHTML =
          `${t("alreadyVisited")} <b>${neighbour}</b>`;

        await sleep(delay / 1.5);
      }
    }

    currentNode = "-";
    activeEdge = null;

    renderAll();
    updateStats();

    await sleep(delay / 2);
  }

  statusText.innerHTML = t("done");

  running = false;
  currentNode = "-";
  activeEdge = null;
  backtrackEdge = null;
  backtrackNode = null;

  updateStats();
  renderAll();
}

startBtn.addEventListener("click", dfs);

resetBtn.addEventListener("click", () => {
  resetState();
  statusText.innerHTML = t("resetStatus");
});

slowBtn.addEventListener("click", () => {
  delay += 100;
  statusText.innerHTML = `🐢 ${t("speed")}: ${delay} ms`;
});

fastBtn.addEventListener("click", () => {
  if (delay > 150) {
    delay -= 100;
  }

  statusText.innerHTML = `⚡ ${t("speed")}: ${delay} ms`;
});

czBtn.addEventListener("click", () => {
  if (!running) setLanguage("cs");
});

enBtn.addEventListener("click", () => {
  if (!running) setLanguage("en");
});

resetState();
updateLanguage();