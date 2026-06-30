const graphEl = document.getElementById("graph");
const edgesSvg = document.getElementById("edges");

const queueEl = document.getElementById("queue");
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
let delay = 700;
let running = false;

let selectedStart = "A";
let currentNode = "-";
let visited = [];
let queue = [];
let steps = 0;
let activeEdge = null;
let neighbourNodes = [];

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
    badge: "Algoritmus #16",
    subtitle: "Procházení grafu po vrstvách pomocí fronty",
    start: "▶ Start",
    reset: "⟳ Reset",
    slower: "🐢 Pomaleji",
    faster: "⚡ Rychleji",
    startNode: "Startovní uzel",
    currentNode: "Aktuální uzel",
    visitedCount: "Navštíveno",
    steps: "Kroky",
    graphTitle: "🕸️ Graf",
    queueTitle: "📥 Fronta",
    visitedTitle: "✅ Navštívené uzly",
    statusTitle: "📌 Co se právě děje?",
    explanationTitle: "🧠 Jak BFS funguje?",
    ready: "Vyber startovní uzel kliknutím a spusť BFS.",
    selected: "Startovní uzel vybrán:",
    enqueueStart: "📥 Vkládám startovní uzel do fronty:",
    dequeue: "📤 Odebírám z fronty a navštěvuji uzel:",
    neighbours: "🔎 Kontroluji sousedy uzlu:",
    enqueueNeighbour: "📥 Přidávám souseda do fronty:",
    alreadyVisited: "✅ Uzel už byl navštíven nebo je ve frontě:",
    done: "✅ Hotovo! BFS prošel celý dostupný graf.",
    resetStatus: "🔄 Vizualizace byla resetována.",
    speed: "Rychlost animace",
    description: `
      Breadth-First Search prochází graf
      <span class="highlight">po vrstvách</span>.

      <br><br>

      Nejprve navštíví startovní uzel,
      potom všechny jeho sousedy.

      <br><br>

      K řízení pořadí používá
      <span class="highlight">frontu</span>.
    `
  },

  en: {
    badge: "Algorithm #16",
    subtitle: "Graph traversal level by level using a queue",
    start: "▶ Start",
    reset: "⟳ Reset",
    slower: "🐢 Slower",
    faster: "⚡ Faster",
    startNode: "Start Node",
    currentNode: "Current Node",
    visitedCount: "Visited",
    steps: "Steps",
    graphTitle: "🕸️ Graph",
    queueTitle: "📥 Queue",
    visitedTitle: "✅ Visited Nodes",
    statusTitle: "📌 Current Action",
    explanationTitle: "🧠 How does BFS work?",
    ready: "Select a start node by clicking it and run BFS.",
    selected: "Start node selected:",
    enqueueStart: "📥 Adding start node to the queue:",
    dequeue: "📤 Removing from queue and visiting node:",
    neighbours: "🔎 Checking neighbours of node:",
    enqueueNeighbour: "📥 Adding neighbour to the queue:",
    alreadyVisited: "✅ Node already visited or already in queue:",
    done: "✅ Done! BFS visited the reachable graph.",
    resetStatus: "🔄 Visualization has been reset.",
    speed: "Animation speed",
    description: `
      Breadth-First Search explores a graph
      <span class="highlight">level by level</span>.

      <br><br>

      It first visits the start node,
      then all of its neighbours.

      <br><br>

      It uses a <span class="highlight">queue</span>
      to control the order.
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
  queue = [];
  steps = 0;
  activeEdge = null;
  neighbourNodes = [];

  updateStats();
  renderAll();
}

function renderAll() {
  renderEdges();
  renderNodes();
  renderQueue();
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

    if (queue.includes(name)) {
      node.classList.add("queued");
    }

    if (visited.includes(name)) {
      node.classList.add("visited");
    }

    if (name === currentNode) {
      node.classList.add("current");
    }

    if (neighbourNodes.includes(name)) {
      node.classList.add("neighbour");
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

function renderQueue() {
  queueEl.innerHTML = "";

  queue.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("queue-item");
    div.innerText = item;
    queueEl.appendChild(div);
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

async function bfs() {
  if (running) return;

  resetState();

  running = true;

  queue.push(selectedStart);

  statusText.innerHTML =
    `${t("enqueueStart")} <b>${selectedStart}</b>`;

  renderAll();
  updateStats();

  await sleep(delay);

  while (queue.length > 0) {
    const node = queue.shift();

    if (visited.includes(node)) {
      continue;
    }

    currentNode = node;
    visited.push(node);
    steps++;

    statusText.innerHTML =
      `${t("dequeue")} <b>${node}</b>`;

    neighbourNodes = [];
    activeEdge = null;

    renderAll();
    updateStats();

    await sleep(delay);

    statusText.innerHTML =
      `${t("neighbours")} <b>${node}</b>`;

    neighbourNodes = graph[node];

    renderAll();

    await sleep(delay);

    for (const neighbour of graph[node]) {
      activeEdge = [node, neighbour];

      renderAll();

      await sleep(delay / 1.5);

      if (!visited.includes(neighbour) && !queue.includes(neighbour)) {
        queue.push(neighbour);

        statusText.innerHTML =
          `${t("enqueueNeighbour")} <b>${neighbour}</b>`;

        renderAll();
        updateStats();

        await sleep(delay);
      } else {
        statusText.innerHTML =
          `${t("alreadyVisited")} <b>${neighbour}</b>`;

        await sleep(delay / 1.5);
      }
    }

    neighbourNodes = [];
    activeEdge = null;
    currentNode = "-";

    renderAll();
    updateStats();

    await sleep(delay / 2);
  }

  statusText.innerHTML = t("done");

  running = false;
  currentNode = "-";

  updateStats();
  renderAll();
}

startBtn.addEventListener("click", bfs);

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