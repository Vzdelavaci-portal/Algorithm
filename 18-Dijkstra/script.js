const graphEl = document.getElementById("graph");
const edgesSvg = document.getElementById("edgesSvg");

const priorityQueueEl = document.getElementById("priorityQueue");
const distanceTableEl = document.getElementById("distanceTable");
const pathResultEl = document.getElementById("pathResult");

const statusText = document.getElementById("statusText");
const descriptionText = document.getElementById("descriptionText");

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const slowBtn = document.getElementById("slowBtn");
const fastBtn = document.getElementById("fastBtn");

const selectStartBtn = document.getElementById("selectStartBtn");
const selectTargetBtn = document.getElementById("selectTargetBtn");

const czBtn = document.getElementById("czBtn");
const enBtn = document.getElementById("enBtn");

const startNodeValue = document.getElementById("startNodeValue");
const targetNodeValue = document.getElementById("targetNodeValue");
const selectionModeValue = document.getElementById("selectionModeValue");

const currentNodeValue = document.getElementById("currentNodeValue");
const visitedCount = document.getElementById("visitedCount");
const relaxationsCount = document.getElementById("relaxationsCount");
const shortestDistanceValue = document.getElementById(
  "shortestDistanceValue"
);

const nodePositions = {
  A: { x: 12, y: 20 },
  B: { x: 42, y: 12 },
  C: { x: 72, y: 22 },
  D: { x: 24, y: 58 },
  E: { x: 58, y: 52 },
  F: { x: 86, y: 72 }
};

const weightedEdges = [
  { from: "A", to: "B", weight: 4 },
  { from: "A", to: "D", weight: 7 },
  { from: "A", to: "E", weight: 10 },
  { from: "B", to: "C", weight: 3 },
  { from: "B", to: "D", weight: 2 },
  { from: "B", to: "E", weight: 6 },
  { from: "C", to: "E", weight: 2 },
  { from: "C", to: "F", weight: 8 },
  { from: "D", to: "E", weight: 3 },
  { from: "D", to: "F", weight: 9 },
  { from: "E", to: "F", weight: 2 }
];

const adjacencyList = createAdjacencyList();

let currentLang = "cs";
let delay = 850;
let running = false;

let selectionMode = "start";
let selectedStart = "A";
let selectedTarget = "F";

let distances = {};
let previous = {};
let settled = [];
let priorityQueue = [];

let currentNode = null;
let inspectedEdge = null;
let relaxedEdge = null;
let updatedNode = null;

let shortestPath = [];
let shortestPathEdges = [];

let relaxations = 0;

const translations = {
  cs: {
    badge: "Algoritmus #18",
    subtitle: "Hledání nejkratší cesty v ohodnoceném grafu",
    start: "▶ Start",
    reset: "⟳ Reset",
    slower: "🐢 Pomaleji",
    faster: "⚡ Rychleji",

    selectStart: "🟪 Vybrat start",
    selectTarget: "🎯 Vybrat cíl",

    startNode: "Startovní uzel",
    targetNode: "Cílový uzel",
    selectionMode: "Režim výběru",
    modeStart: "Start",
    modeTarget: "Cíl",

    currentNode: "Aktuální uzel",
    visitedNodes: "Dokončené uzly",
    relaxations: "Aktualizace vzdáleností",
    shortestDistance: "Nejkratší vzdálenost",

    graphTitle: "🛣️ Ohodnocený graf",
    graphHint:
      "Kliknutím na uzel nastav start nebo cíl podle zvoleného režimu.",

    queueTitle: "🏁 Prioritní fronta",
    distanceTitle: "📏 Vzdálenosti",
    pathTitle: "🟩 Nejkratší cesta",

    statusTitle: "📌 Co se právě děje?",
    explanationTitle: "🧠 Jak Dijkstrův algoritmus funguje?",

    ready:
      "Vyber startovní a cílový uzel. Potom spusť algoritmus.",

    selectedStart:
      "🟪 Nový startovní uzel:",

    selectedTarget:
      "🎯 Nový cílový uzel:",

    invalidSelection:
      "Startovní a cílový uzel musí být rozdílné.",

    initialize:
      "📏 Nastavuji vzdálenost startu na 0 a ostatních uzlů na ∞.",

    enqueueStart:
      "🏁 Vkládám startovní uzel do prioritní fronty:",

    extractMinimum:
      "📤 Vybírám uzel s nejmenší známou vzdáleností:",

    inspectEdge:
      "🔎 Kontroluji hranu",

    calculateDistance:
      "Počítám novou možnou vzdálenost:",

    betterPath:
      "✅ Našel jsem kratší cestu k uzlu",

    keepDistance:
      "❌ Nová cesta není kratší. Původní vzdálenost zůstává.",

    targetReached:
      "🎯 Cílový uzel má nejkratší vzdálenost potvrzenou.",

    buildPath:
      "🟩 Sestavuji nejkratší cestu pomocí předchozích uzlů.",

    done:
      "✅ Hotovo! Nejkratší cesta byla nalezena.",

    noPath:
      "❌ Mezi vybranými uzly neexistuje cesta.",

    resetStatus:
      "🔄 Vizualizace byla resetována.",

    speed:
      "Rychlost animace",

    emptyQueue:
      "Fronta je prázdná",

    distance:
      "Vzdálenost",

    total:
      "Celková délka",

    description: `
      Dijkstrův algoritmus hledá nejkratší cestu
      v grafu s <span class="highlight">nezápornými vahami hran</span>.

      <br><br>

      Vždy zpracuje uzel s nejmenší známou vzdáleností
      a zkouší zlepšit vzdálenosti jeho sousedů.

      <br><br>

      Tento proces se nazývá
      <span class="highlight">relaxace hran</span>.
    `
  },

  en: {
    badge: "Algorithm #18",
    subtitle: "Finding the shortest path in a weighted graph",
    start: "▶ Start",
    reset: "⟳ Reset",
    slower: "🐢 Slower",
    faster: "⚡ Faster",

    selectStart: "🟪 Select Start",
    selectTarget: "🎯 Select Target",

    startNode: "Start Node",
    targetNode: "Target Node",
    selectionMode: "Selection Mode",
    modeStart: "Start",
    modeTarget: "Target",

    currentNode: "Current Node",
    visitedNodes: "Settled Nodes",
    relaxations: "Distance Updates",
    shortestDistance: "Shortest Distance",

    graphTitle: "🛣️ Weighted Graph",
    graphHint:
      "Click a node to set the start or target according to the selected mode.",

    queueTitle: "🏁 Priority Queue",
    distanceTitle: "📏 Distances",
    pathTitle: "🟩 Shortest Path",

    statusTitle: "📌 Current Action",
    explanationTitle: "🧠 How does Dijkstra's Algorithm work?",

    ready:
      "Choose a start node and a target node, then run the algorithm.",

    selectedStart:
      "🟪 New start node:",

    selectedTarget:
      "🎯 New target node:",

    invalidSelection:
      "The start and target nodes must be different.",

    initialize:
      "📏 Setting the start distance to 0 and all other distances to ∞.",

    enqueueStart:
      "🏁 Adding the start node to the priority queue:",

    extractMinimum:
      "📤 Selecting the node with the smallest known distance:",

    inspectEdge:
      "🔎 Inspecting edge",

    calculateDistance:
      "Calculating a possible new distance:",

    betterPath:
      "✅ Found a shorter path to node",

    keepDistance:
      "❌ The new path is not shorter. Keeping the current distance.",

    targetReached:
      "🎯 The shortest distance to the target node is now confirmed.",

    buildPath:
      "🟩 Reconstructing the shortest path using previous nodes.",

    done:
      "✅ Done! The shortest path has been found.",

    noPath:
      "❌ No path exists between the selected nodes.",

    resetStatus:
      "🔄 The visualization has been reset.",

    speed:
      "Animation speed",

    emptyQueue:
      "The queue is empty",

    distance:
      "Distance",

    total:
      "Total distance",

    description: `
      Dijkstra's Algorithm finds the shortest path
      in a graph with <span class="highlight">non-negative edge weights</span>.

      <br><br>

      It repeatedly processes the node with the smallest known distance
      and tries to improve the distances of its neighbours.

      <br><br>

      This process is called
      <span class="highlight">edge relaxation</span>.
    `
  }
};

function createAdjacencyList() {
  const adjacency = {};

  Object.keys(nodePositions).forEach(node => {
    adjacency[node] = [];
  });

  weightedEdges.forEach(edge => {
    adjacency[edge.from].push({
      node: edge.to,
      weight: edge.weight
    });

    adjacency[edge.to].push({
      node: edge.from,
      weight: edge.weight
    });
  });

  return adjacency;
}

function t(key) {
  return translations[currentLang][key];
}

function formatDistance(value) {
  return Number.isFinite(value) ? value : "∞";
}

function normalizedEdgeKey(nodeA, nodeB) {
  return [nodeA, nodeB].sort().join("-");
}

function updateLanguage() {
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;

    if (translations[currentLang][key] !== undefined) {
      element.innerHTML = t(key);
    }
  });

  descriptionText.innerHTML = t("description");

  if (!running) {
    statusText.innerHTML = t("ready");
  }

  updateSelectionInfo();
  updateStatistics();
  renderAll();
}

function setLanguage(lang) {
  if (running) {
    return;
  }

  currentLang = lang;

  czBtn.classList.toggle("active", lang === "cs");
  enBtn.classList.toggle("active", lang === "en");

  updateLanguage();
}

function initializeAlgorithmState() {
  distances = {};
  previous = {};

  Object.keys(nodePositions).forEach(node => {
    distances[node] = Infinity;
    previous[node] = null;
  });

  distances[selectedStart] = 0;

  settled = [];
  priorityQueue = [];

  currentNode = null;
  inspectedEdge = null;
  relaxedEdge = null;
  updatedNode = null;

  shortestPath = [];
  shortestPathEdges = [];

  relaxations = 0;
}

function resetVisualization() {
  running = false;

  initializeAlgorithmState();

  pathResultEl.classList.remove("success");
  pathResultEl.innerHTML = "-";

  setControlsDisabled(false);

  updateSelectionInfo();
  updateStatistics();
  renderAll();
}

function setControlsDisabled(disabled) {
  selectStartBtn.disabled = disabled;
  selectTargetBtn.disabled = disabled;

  czBtn.disabled = disabled;
  enBtn.disabled = disabled;
}

function setSelectionMode(mode) {
  if (running) {
    return;
  }

  selectionMode = mode;

  selectStartBtn.classList.toggle("active", mode === "start");
  selectTargetBtn.classList.toggle("active", mode === "target");

  updateSelectionInfo();
}

function updateSelectionInfo() {
  startNodeValue.innerText = selectedStart;
  targetNodeValue.innerText = selectedTarget;

  selectionModeValue.innerText =
    selectionMode === "start"
      ? t("modeStart")
      : t("modeTarget");
}

function updateStatistics() {
  currentNodeValue.innerText = currentNode ?? "-";
  visitedCount.innerText = settled.length;
  relaxationsCount.innerText = relaxations;

  const finalDistance = distances[selectedTarget];

  shortestDistanceValue.innerText =
    Number.isFinite(finalDistance)
      ? finalDistance
      : "∞";
}

function handleNodeSelection(nodeName) {
  if (running) {
    return;
  }

  if (selectionMode === "start") {
    if (nodeName === selectedTarget) {
      statusText.innerHTML = t("invalidSelection");
      return;
    }

    selectedStart = nodeName;

    statusText.innerHTML =
      `${t("selectedStart")} <b>${nodeName}</b>`;
  } else {
    if (nodeName === selectedStart) {
      statusText.innerHTML = t("invalidSelection");
      return;
    }

    selectedTarget = nodeName;

    statusText.innerHTML =
      `${t("selectedTarget")} <b>${nodeName}</b>`;
  }

  initializeAlgorithmState();

  pathResultEl.classList.remove("success");
  pathResultEl.innerHTML = "-";

  updateSelectionInfo();
  updateStatistics();
  renderAll();
}

function renderAll() {
  renderEdges();
  renderNodes();
  renderPriorityQueue();
  renderDistanceTable();
}

function renderEdges() {
  edgesSvg.innerHTML = "";

  weightedEdges.forEach(edge => {
    const fromPosition = nodePositions[edge.from];
    const toPosition = nodePositions[edge.to];

    const line = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );

    line.setAttribute("x1", `${fromPosition.x}%`);
    line.setAttribute("y1", `${fromPosition.y}%`);
    line.setAttribute("x2", `${toPosition.x}%`);
    line.setAttribute("y2", `${toPosition.y}%`);
    line.classList.add("edge-line");

    const edgeKey = normalizedEdgeKey(edge.from, edge.to);

    if (
      inspectedEdge &&
      normalizedEdgeKey(
        inspectedEdge.from,
        inspectedEdge.to
      ) === edgeKey
    ) {
      line.classList.add("inspecting");
    }

    if (
      relaxedEdge &&
      normalizedEdgeKey(
        relaxedEdge.from,
        relaxedEdge.to
      ) === edgeKey
    ) {
      line.classList.add("relaxed");
    }

    if (shortestPathEdges.includes(edgeKey)) {
      line.classList.add("shortest-path");
    }

    edgesSvg.appendChild(line);

    const midpointX =
      (fromPosition.x + toPosition.x) / 2;

    const midpointY =
      (fromPosition.y + toPosition.y) / 2;

    const weightBackground =
      document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );

    weightBackground.setAttribute("cx", `${midpointX}%`);
    weightBackground.setAttribute("cy", `${midpointY}%`);
    weightBackground.setAttribute("r", "15");
    weightBackground.classList.add("edge-weight-bg");

    const weightText =
      document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );

    weightText.setAttribute("x", `${midpointX}%`);
    weightText.setAttribute("y", `${midpointY}%`);
    weightText.textContent = edge.weight;
    weightText.classList.add("edge-weight-text");

    edgesSvg.appendChild(weightBackground);
    edgesSvg.appendChild(weightText);
  });
}

function renderNodes() {
  graphEl
    .querySelectorAll(".node")
    .forEach(node => node.remove());

  Object.entries(nodePositions).forEach(
    ([nodeName, position]) => {
      const node = document.createElement("button");

      node.type = "button";
      node.classList.add("node");

      node.style.left = `${position.x}%`;
      node.style.top = `${position.y}%`;

      node.innerHTML = `
        <span class="node-label">${nodeName}</span>
        <span class="node-distance">
          ${formatDistance(distances[nodeName])}
        </span>
      `;

      if (nodeName === selectedStart) {
        node.classList.add("start-node");
      }

      if (nodeName === selectedTarget) {
        node.classList.add("target-node");
      }

      if (
        priorityQueue.some(
          item => item.node === nodeName
        ) &&
        !settled.includes(nodeName)
      ) {
        node.classList.add("in-queue");
      }

      if (nodeName === currentNode) {
        node.classList.add("current");
      }

      if (settled.includes(nodeName)) {
        node.classList.add("settled");
      }

      if (nodeName === updatedNode) {
        node.classList.add("updated");
      }

      if (shortestPath.includes(nodeName)) {
        node.classList.add("path-node");
      }

      node.addEventListener("click", () => {
        handleNodeSelection(nodeName);
      });

      graphEl.appendChild(node);
    }
  );
}

function renderPriorityQueue() {
  priorityQueueEl.innerHTML = "";

  const sortedQueue = [...priorityQueue]
    .sort((a, b) => a.distance - b.distance);

  if (sortedQueue.length === 0) {
    const empty = document.createElement("div");
    empty.classList.add("empty-state");
    empty.innerText = t("emptyQueue");

    priorityQueueEl.appendChild(empty);
    return;
  }

  sortedQueue.forEach(item => {
    const queueItem = document.createElement("div");

    queueItem.classList.add("queue-item");
    queueItem.innerText =
      `${item.node} (${formatDistance(item.distance)})`;

    priorityQueueEl.appendChild(queueItem);
  });
}

function renderDistanceTable() {
  distanceTableEl.innerHTML = "";

  Object.keys(nodePositions).forEach(nodeName => {
    const item = document.createElement("div");

    item.classList.add("distance-item");

    if (nodeName === currentNode) {
      item.classList.add("current-distance");
    }

    if (settled.includes(nodeName)) {
      item.classList.add("settled-distance");
    }

    item.innerHTML = `
      <span>${nodeName}</span>
      <strong>${formatDistance(distances[nodeName])}</strong>
    `;

    distanceTableEl.appendChild(item);
  });
}

function addToPriorityQueue(node, distance) {
  const existingIndex = priorityQueue.findIndex(
    item => item.node === node
  );

  if (existingIndex !== -1) {
    priorityQueue.splice(existingIndex, 1);
  }

  priorityQueue.push({
    node,
    distance
  });

  priorityQueue.sort(
    (a, b) => a.distance - b.distance
  );
}

function extractMinimum() {
  priorityQueue.sort(
    (a, b) => a.distance - b.distance
  );

  return priorityQueue.shift() ?? null;
}

function reconstructPath() {
  const path = [];
  let node = selectedTarget;

  while (node !== null) {
    path.unshift(node);

    if (node === selectedStart) {
      break;
    }

    node = previous[node];
  }

  if (path[0] !== selectedStart) {
    return [];
  }

  return path;
}

function buildPathEdges(path) {
  const result = [];

  for (let i = 0; i < path.length - 1; i++) {
    result.push(
      normalizedEdgeKey(path[i], path[i + 1])
    );
  }

  return result;
}

function showPathResult() {
  if (shortestPath.length === 0) {
    pathResultEl.classList.remove("success");
    pathResultEl.innerHTML = t("noPath");
    return;
  }

  pathResultEl.classList.add("success");

  pathResultEl.innerHTML = `
    ${shortestPath.join(" → ")}
    <br>
    ${t("total")}: <strong>
      ${formatDistance(distances[selectedTarget])}
    </strong>
  `;
}

function sleep(ms) {
  return new Promise(resolve => {
    window.setTimeout(resolve, ms);
  });
}

async function dijkstra() {
  if (running) {
    return;
  }

  if (selectedStart === selectedTarget) {
    statusText.innerHTML = t("invalidSelection");
    return;
  }

  initializeAlgorithmState();

  running = true;
  setControlsDisabled(true);

  pathResultEl.classList.remove("success");
  pathResultEl.innerHTML = "-";

  statusText.innerHTML = t("initialize");

  updateStatistics();
  renderAll();

  await sleep(delay);

  addToPriorityQueue(selectedStart, 0);

  statusText.innerHTML =
    `${t("enqueueStart")} <b>${selectedStart}</b>`;

  renderAll();

  await sleep(delay);

  while (priorityQueue.length > 0) {
    const queueItem = extractMinimum();

    if (!queueItem) {
      break;
    }

    const node = queueItem.node;

    if (settled.includes(node)) {
      continue;
    }

    if (queueItem.distance !== distances[node]) {
      continue;
    }

    currentNode = node;

    statusText.innerHTML =
      `${t("extractMinimum")} <b>${node}</b> ` +
      `(${t("distance")}: ` +
      `<b>${formatDistance(distances[node])}</b>)`;

    updateStatistics();
    renderAll();

    await sleep(delay);

    settled.push(node);

    if (node === selectedTarget) {
      statusText.innerHTML = t("targetReached");

      updateStatistics();
      renderAll();

      await sleep(delay);
      break;
    }

    for (const neighbour of adjacencyList[node]) {
      if (settled.includes(neighbour.node)) {
        continue;
      }

      inspectedEdge = {
        from: node,
        to: neighbour.node
      };

      relaxedEdge = null;
      updatedNode = null;

      statusText.innerHTML =
        `${t("inspectEdge")} ` +
        `<b>${node} → ${neighbour.node}</b> ` +
        `(w = ${neighbour.weight})`;

      renderAll();

      await sleep(delay);

      const newDistance =
        distances[node] + neighbour.weight;

      statusText.innerHTML =
        `${t("calculateDistance")} ` +
        `<b>${formatDistance(distances[node])}</b> + ` +
        `<b>${neighbour.weight}</b> = ` +
        `<b>${newDistance}</b>`;

      await sleep(delay);

      if (newDistance < distances[neighbour.node]) {
        distances[neighbour.node] = newDistance;
        previous[neighbour.node] = node;

        relaxations++;

        relaxedEdge = {
          from: node,
          to: neighbour.node
        };

        updatedNode = neighbour.node;

        addToPriorityQueue(
          neighbour.node,
          newDistance
        );

        statusText.innerHTML =
          `${t("betterPath")} ` +
          `<b>${neighbour.node}</b>: ` +
          `<b>${newDistance}</b>`;

        updateStatistics();
        renderAll();

        await sleep(delay);
      } else {
        statusText.innerHTML = t("keepDistance");

        renderAll();

        await sleep(delay * 0.8);
      }

      inspectedEdge = null;
      relaxedEdge = null;
      updatedNode = null;

      renderAll();

      await sleep(delay * 0.35);
    }

    currentNode = null;

    updateStatistics();
    renderAll();

    await sleep(delay * 0.4);
  }

  currentNode = null;
  inspectedEdge = null;
  relaxedEdge = null;
  updatedNode = null;

  if (Number.isFinite(distances[selectedTarget])) {
    statusText.innerHTML = t("buildPath");

    updateStatistics();
    renderAll();

    await sleep(delay);

    shortestPath = reconstructPath();
    shortestPathEdges = buildPathEdges(shortestPath);

    showPathResult();

    statusText.innerHTML = t("done");
  } else {
    shortestPath = [];
    shortestPathEdges = [];

    showPathResult();

    statusText.innerHTML = t("noPath");
  }

  running = false;
  setControlsDisabled(false);

  updateStatistics();
  renderAll();
}

startBtn.addEventListener("click", dijkstra);

resetBtn.addEventListener("click", () => {
  resetVisualization();
  statusText.innerHTML = t("resetStatus");
});

slowBtn.addEventListener("click", () => {
  delay += 100;

  statusText.innerHTML =
    `🐢 ${t("speed")}: ${delay} ms`;
});

fastBtn.addEventListener("click", () => {
  delay = Math.max(150, delay - 100);

  statusText.innerHTML =
    `⚡ ${t("speed")}: ${delay} ms`;
});

selectStartBtn.addEventListener("click", () => {
  setSelectionMode("start");
});

selectTargetBtn.addEventListener("click", () => {
  setSelectionMode("target");
});

czBtn.addEventListener("click", () => {
  setLanguage("cs");
});

enBtn.addEventListener("click", () => {
  setLanguage("en");
});

initializeAlgorithmState();
updateLanguage();
updateSelectionInfo();
updateStatistics();
renderAll();