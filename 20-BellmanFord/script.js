const graphEl = document.getElementById("graph");
const edgesSvg = document.getElementById("edgesSvg");

const distanceTableEl =
  document.getElementById("distanceTable");

const predecessorTableEl =
  document.getElementById("predecessorTable");

const edgeListEl =
  document.getElementById("edgeList");

const statusText =
  document.getElementById("statusText");

const descriptionText =
  document.getElementById("descriptionText");

const cycleCheckText =
  document.getElementById("cycleCheckText");

const cycleResult =
  document.getElementById("cycleResult");

const startBtn =
  document.getElementById("startBtn");

const resetBtn =
  document.getElementById("resetBtn");

const negativeCycleBtn =
  document.getElementById("negativeCycleBtn");

const slowBtn =
  document.getElementById("slowBtn");

const fastBtn =
  document.getElementById("fastBtn");

const czBtn =
  document.getElementById("czBtn");

const enBtn =
  document.getElementById("enBtn");

const startNodeValue =
  document.getElementById("startNodeValue");

const graphModeValue =
  document.getElementById("graphModeValue");

const iterationValue =
  document.getElementById("iterationValue");

const iterationBadgeValue =
  document.getElementById("iterationBadgeValue");

const currentEdgeValue =
  document.getElementById("currentEdgeValue");

const relaxationsValue =
  document.getElementById("relaxationsValue");

const updatesValue =
  document.getElementById("updatesValue");

const processedEdgesValue =
  document.getElementById("processedEdgesValue");

const negativeCycleValue =
  document.getElementById("negativeCycleValue");

const fromDistanceValue =
  document.getElementById("fromDistanceValue");

const edgeWeightValue =
  document.getElementById("edgeWeightValue");

const toDistanceValue =
  document.getElementById("toDistanceValue");

const candidateValue =
  document.getElementById("candidateValue");

const nodePositions = {
  A: { x: 12, y: 28 },
  B: { x: 36, y: 12 },
  C: { x: 68, y: 18 },
  D: { x: 88, y: 50 },
  E: { x: 58, y: 72 }
};

const normalEdges = [
  {
    from: "A",
    to: "B",
    weight: 4
  },
  {
    from: "A",
    to: "E",
    weight: 5
  },
  {
    from: "B",
    to: "C",
    weight: -2
  },
  {
    from: "B",
    to: "E",
    weight: 3
  },
  {
    from: "C",
    to: "D",
    weight: 3
  },
  {
    from: "C",
    to: "E",
    weight: 2
  },
  {
    from: "E",
    to: "D",
    weight: 4
  }
];

const negativeCycleEdges = [
  {
    from: "A",
    to: "B",
    weight: 4
  },
  {
    from: "A",
    to: "E",
    weight: 5
  },
  {
    from: "B",
    to: "C",
    weight: -2
  },
  {
    from: "B",
    to: "E",
    weight: 3
  },
  {
    from: "C",
    to: "D",
    weight: 3
  },
  {
    from: "C",
    to: "E",
    weight: 2
  },
  {
    from: "E",
    to: "B",
    weight: -4
  },
  {
    from: "E",
    to: "D",
    weight: 4
  }
];

let currentLang = "cs";
let delay = 750;

let running = false;
let negativeCycleEnabled = false;

let selectedStart = "A";

let distances = {};
let predecessors = {};

let currentIteration = 0;
let currentEdgeIndex = -1;

let processedEdges = 0;
let relaxations = 0;
let updates = 0;

let currentEdge = null;
let updatedEdge = null;
let updatedNode = null;

let checkedEdges = new Set();
let updatedEdges = new Set();

let detectedCycleEdges = [];
let detectedCycleNodes = [];

let negativeCycleDetected = false;

const translations = {
  cs: {
    badge: "Algoritmus #20",

    subtitle:
      "Nejkratší cesty se zápornými hranami a detekcí záporných cyklů",

    start: "▶ Start",
    reset: "⟳ Reset",

    enableCycle:
      "🔁 Zapnout záporný cyklus",

    disableCycle:
      "⛔ Vypnout záporný cyklus",

    slower: "🐢 Pomaleji",
    faster: "⚡ Rychleji",

    startNode:
      "Startovní uzel",

    graphMode:
      "Režim grafu",

    iteration:
      "Iterace",

    currentEdge:
      "Aktuální hrana",

    modeNormal:
      "Bez záporného cyklu",

    modeCycle:
      "Se záporným cyklem",

    iterationLabel:
      "Iterace",

    relaxations:
      "Relaxace",

    updates:
      "Aktualizace",

    processedEdges:
      "Zkontrolované hrany",

    negativeCycle:
      "Záporný cyklus",

    yes:
      "Ano",

    no:
      "Ne",

    graphTitle:
      "🔁 Orientovaný ohodnocený graf",

    graphHint:
      "Kliknutím na uzel můžeš změnit startovní bod.",

    distanceTitle:
      "📏 Vzdálenosti",

    calculationTitle:
      "🧮 Výpočet relaxace",

    predecessorTitle:
      "🔗 Předchozí uzly",

    edgeListTitle:
      "🧾 Pořadí relaxace hran",

    cycleCheckTitle:
      "🔍 Kontrola záporného cyklu",

    statusTitle:
      "📌 Co se právě děje?",

    explanationTitle:
      "🧠 Jak Bellman-Ford funguje?",

    ready:
      "Vyber startovní uzel a spusť Bellman-Ford.",

    startSelected:
      "🟪 Nový startovní uzel:",

    cycleEnabled:
      "🔁 Graf nyní obsahuje záporný cyklus.",

    cycleDisabled:
      "✅ Záporný cyklus byl z grafu odstraněn.",

    initialize:
      "📏 Nastavuji vzdálenost startu na 0 a ostatních uzlů na ∞.",

    iterationStart:
      "🔁 Začíná iterace",

    inspectEdge:
      "🔎 Kontroluji hranu",

    calculation:
      "Počítám možnou novou vzdálenost:",

    updateDistance:
      "✅ Nalezena kratší cesta. Aktualizuji vzdálenost uzlu",

    noUpdate:
      "❌ Nová cesta není kratší. Vzdálenost zůstává beze změny.",

    earlyStop:
      "✅ V této iteraci se nic nezměnilo. Algoritmus může skončit dříve.",

    cycleCheck:
      "🔍 Provádím dodatečný průchod pro detekci záporného cyklu.",

    cycleFound:
      "⚠️ Další zlepšení je stále možné. Záporný cyklus byl detekován!",

    noCycle:
      "✅ Žádné další zlepšení není možné. Záporný cyklus neexistuje.",

    done:
      "✅ Hotovo! Nejkratší vzdálenosti byly vypočítány.",

    resetStatus:
      "🔄 Vizualizace byla resetována.",

    speed:
      "Rychlost animace",

    checkingCycle:
      "Probíhá kontrola, zda lze některou vzdálenost ještě zlepšit.",

    cycleSafe:
      "Graf neobsahuje dosažitelný záporný cyklus.",

    cycleDanger:
      "Graf obsahuje dosažitelný záporný cyklus.",

    description: `
      Bellman-Ford opakovaně prochází
      <span class="highlight">všechny hrany grafu</span>.

      <br><br>

      Po nejvýše <span class="highlight">V − 1 iteracích</span>
      zná nejkratší vzdálenosti, pokud graf neobsahuje
      dosažitelný záporný cyklus.

      <br><br>

      Jeden dodatečný průchod slouží
      k detekci <span class="highlight">záporného cyklu</span>.
    `
  },

  en: {
    badge: "Algorithm #20",

    subtitle:
      "Shortest paths with negative edges and negative-cycle detection",

    start: "▶ Start",
    reset: "⟳ Reset",

    enableCycle:
      "🔁 Enable Negative Cycle",

    disableCycle:
      "⛔ Disable Negative Cycle",

    slower: "🐢 Slower",
    faster: "⚡ Faster",

    startNode:
      "Start Node",

    graphMode:
      "Graph Mode",

    iteration:
      "Iteration",

    currentEdge:
      "Current Edge",

    modeNormal:
      "Without Negative Cycle",

    modeCycle:
      "With Negative Cycle",

    iterationLabel:
      "Iteration",

    relaxations:
      "Relaxations",

    updates:
      "Updates",

    processedEdges:
      "Processed Edges",

    negativeCycle:
      "Negative Cycle",

    yes:
      "Yes",

    no:
      "No",

    graphTitle:
      "🔁 Directed Weighted Graph",

    graphHint:
      "Click a node to change the starting point.",

    distanceTitle:
      "📏 Distances",

    calculationTitle:
      "🧮 Relaxation Calculation",

    predecessorTitle:
      "🔗 Predecessors",

    edgeListTitle:
      "🧾 Edge Relaxation Order",

    cycleCheckTitle:
      "🔍 Negative-Cycle Check",

    statusTitle:
      "📌 Current Action",

    explanationTitle:
      "🧠 How does Bellman-Ford work?",

    ready:
      "Choose a start node and run Bellman-Ford.",

    startSelected:
      "🟪 New start node:",

    cycleEnabled:
      "🔁 The graph now contains a negative cycle.",

    cycleDisabled:
      "✅ The negative cycle has been removed.",

    initialize:
      "📏 Setting the start distance to 0 and all other distances to ∞.",

    iterationStart:
      "🔁 Starting iteration",

    inspectEdge:
      "🔎 Inspecting edge",

    calculation:
      "Calculating a possible new distance:",

    updateDistance:
      "✅ A shorter path was found. Updating the distance of node",

    noUpdate:
      "❌ The new path is not shorter. Keeping the current distance.",

    earlyStop:
      "✅ Nothing changed during this iteration. The algorithm can stop early.",

    cycleCheck:
      "🔍 Performing one additional pass to detect a negative cycle.",

    cycleFound:
      "⚠️ Another improvement is still possible. A negative cycle was detected!",

    noCycle:
      "✅ No further improvement is possible. No negative cycle exists.",

    done:
      "✅ Done! The shortest distances have been calculated.",

    resetStatus:
      "🔄 The visualization has been reset.",

    speed:
      "Animation speed",

    checkingCycle:
      "Checking whether any distance can still be improved.",

    cycleSafe:
      "The graph contains no reachable negative cycle.",

    cycleDanger:
      "The graph contains a reachable negative cycle.",

    description: `
      Bellman-Ford repeatedly processes
      <span class="highlight">every edge in the graph</span>.

      <br><br>

      After at most <span class="highlight">V − 1 iterations</span>,
      all shortest distances are known if no reachable
      negative cycle exists.

      <br><br>

      One additional pass is used to detect
      a <span class="highlight">negative cycle</span>.
    `
  }
};

function t(key) {
  return translations[currentLang][key];
}

function getEdges() {
  return negativeCycleEnabled
    ? negativeCycleEdges
    : normalEdges;
}

function formatDistance(value) {
  return Number.isFinite(value)
    ? value
    : "∞";
}

function edgeKey(edge) {
  return `${edge.from}-${edge.to}`;
}

function updateLanguage() {
  document.documentElement.lang =
    currentLang;

  document
    .querySelectorAll("[data-i18n]")
    .forEach(element => {
      const key =
        element.dataset.i18n;

      if (
        translations[currentLang][key]
        !== undefined
      ) {
        element.innerHTML =
          t(key);
      }
    });

  descriptionText.innerHTML =
    t("description");

  negativeCycleBtn.innerHTML =
    negativeCycleEnabled
      ? t("disableCycle")
      : t("enableCycle");

  if (!running) {
    statusText.innerHTML =
      t("ready");
  }

  updateStatistics();
  updateModeDisplay();
  updateCyclePanel();
  renderAll();
}

function setLanguage(language) {
  if (running) {
    return;
  }

  currentLang = language;

  czBtn.classList.toggle(
    "active",
    language === "cs"
  );

  enBtn.classList.toggle(
    "active",
    language === "en"
  );

  updateLanguage();
}

function initializeState() {
  distances = {};
  predecessors = {};

  Object.keys(nodePositions)
    .forEach(node => {
      distances[node] = Infinity;
      predecessors[node] = null;
    });

  distances[selectedStart] = 0;

  currentIteration = 0;
  currentEdgeIndex = -1;

  processedEdges = 0;
  relaxations = 0;
  updates = 0;

  currentEdge = null;
  updatedEdge = null;
  updatedNode = null;

  checkedEdges = new Set();
  updatedEdges = new Set();

  detectedCycleEdges = [];
  detectedCycleNodes = [];

  negativeCycleDetected = false;

  resetCalculationPanel();

  cycleResult.className =
    "cycle-result neutral";

  cycleResult.innerText = "-";

  cycleCheckText.innerText =
    t("checkingCycle");
}

function resetCalculationPanel() {
  fromDistanceValue.innerText = "-";
  edgeWeightValue.innerText = "-";
  toDistanceValue.innerText = "-";
  candidateValue.innerText = "-";
}

function resetVisualization() {
  running = false;

  initializeState();

  setControlsDisabled(false);

  updateStatistics();
  updateModeDisplay();
  updateCyclePanel();
  renderAll();
}

function setControlsDisabled(disabled) {
  negativeCycleBtn.disabled = disabled;
  czBtn.disabled = disabled;
  enBtn.disabled = disabled;
}

function updateModeDisplay() {
  startNodeValue.innerText =
    selectedStart;

  graphModeValue.innerText =
    negativeCycleEnabled
      ? t("modeCycle")
      : t("modeNormal");

  negativeCycleBtn.classList.toggle(
    "enabled",
    negativeCycleEnabled
  );
}

function updateStatistics() {
  const maxIterations =
    Object.keys(nodePositions).length - 1;

  iterationValue.innerText =
    `${currentIteration} / ${maxIterations}`;

  iterationBadgeValue.innerText =
    `${currentIteration} / ${maxIterations}`;

  currentEdgeValue.innerText =
    currentEdge
      ? `${currentEdge.from} → ${currentEdge.to}`
      : "-";

  relaxationsValue.innerText =
    relaxations;

  updatesValue.innerText =
    updates;

  processedEdgesValue.innerText =
    processedEdges;

  negativeCycleValue.innerText =
    negativeCycleDetected
      ? t("yes")
      : t("no");
}

function updateCyclePanel() {
  if (negativeCycleDetected) {
    cycleResult.className =
      "cycle-result failure";

    cycleResult.innerText =
      t("cycleDanger");

    cycleCheckText.innerText =
      t("cycleFound");

    return;
  }

  if (
    !running &&
    processedEdges > 0
  ) {
    cycleResult.className =
      "cycle-result success";

    cycleResult.innerText =
      t("cycleSafe");

    cycleCheckText.innerText =
      t("noCycle");

    return;
  }

  cycleResult.className =
    "cycle-result neutral";

  cycleResult.innerText = "-";

  cycleCheckText.innerText =
    t("checkingCycle");
}

function renderAll() {
  renderEdges();
  renderNodes();
  renderDistanceTable();
  renderPredecessorTable();
  renderEdgeList();
}

function createArrowMarker(
  id,
  color
) {
  const marker =
    document.createElementNS(
      "http://www.w3.org/2000/svg",
      "marker"
    );

  marker.setAttribute("id", id);
  marker.setAttribute("markerWidth", "10");
  marker.setAttribute("markerHeight", "10");
  marker.setAttribute("refX", "8");
  marker.setAttribute("refY", "3");
  marker.setAttribute("orient", "auto");
  marker.setAttribute("markerUnits", "strokeWidth");

  const path =
    document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );

  path.setAttribute(
    "d",
    "M0,0 L0,6 L9,3 z"
  );

  path.setAttribute(
    "fill",
    color
  );

  marker.appendChild(path);

  return marker;
}

function renderEdges() {
  edgesSvg.innerHTML = "";

  const defs =
    document.createElementNS(
      "http://www.w3.org/2000/svg",
      "defs"
    );

  defs.appendChild(
    createArrowMarker(
      "arrowDefault",
      "#475569"
    )
  );

  defs.appendChild(
    createArrowMarker(
      "arrowCurrent",
      "#facc15"
    )
  );

  defs.appendChild(
    createArrowMarker(
      "arrowUpdated",
      "#22c55e"
    )
  );

  defs.appendChild(
    createArrowMarker(
      "arrowCycle",
      "#ef4444"
    )
  );

  edgesSvg.appendChild(defs);

  getEdges().forEach(edge => {
    const from =
      nodePositions[edge.from];

    const to =
      nodePositions[edge.to];

    const dx = to.x - from.x;
    const dy = to.y - from.y;

    const length =
      Math.sqrt(dx * dx + dy * dy);

    const offsetX =
      length === 0
        ? 0
        : (dx / length) * 5;

    const offsetY =
      length === 0
        ? 0
        : (dy / length) * 5;

    const line =
      document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );

    line.setAttribute(
      "x1",
      `${from.x + offsetX}%`
    );

    line.setAttribute(
      "y1",
      `${from.y + offsetY}%`
    );

    line.setAttribute(
      "x2",
      `${to.x - offsetX}%`
    );

    line.setAttribute(
      "y2",
      `${to.y - offsetY}%`
    );

    line.classList.add("edge-line");

    if (
      currentEdge &&
      edgeKey(currentEdge)
      === edgeKey(edge)
    ) {
      line.classList.add(
        "current-edge"
      );
    }

    if (
      updatedEdge &&
      edgeKey(updatedEdge)
      === edgeKey(edge)
    ) {
      line.classList.add(
        "updated-edge"
      );
    }

    if (
      detectedCycleEdges.includes(
        edgeKey(edge)
      )
    ) {
      line.classList.add(
        "cycle-edge"
      );
    }

    edgesSvg.appendChild(line);

    const midpointX =
      (from.x + to.x) / 2;

    const midpointY =
      (from.y + to.y) / 2;

    const weightBackground =
      document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );

    weightBackground.setAttribute(
      "cx",
      `${midpointX}%`
    );

    weightBackground.setAttribute(
      "cy",
      `${midpointY}%`
    );

    weightBackground.setAttribute(
      "r",
      "16"
    );

    weightBackground.classList.add(
      "edge-weight-bg"
    );

    if (edge.weight < 0) {
      weightBackground.classList.add(
        "negative"
      );
    }

    const weightText =
      document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );

    weightText.setAttribute(
      "x",
      `${midpointX}%`
    );

    weightText.setAttribute(
      "y",
      `${midpointY}%`
    );

    weightText.textContent =
      edge.weight;

    weightText.classList.add(
      "edge-weight-text"
    );

    if (edge.weight < 0) {
      weightText.classList.add(
        "negative"
      );
    }

    edgesSvg.appendChild(
      weightBackground
    );

    edgesSvg.appendChild(
      weightText
    );
  });
}

function renderNodes() {
  graphEl
    .querySelectorAll(".node")
    .forEach(node => node.remove());

  Object.entries(nodePositions)
    .forEach(
      ([name, position]) => {
        const node =
          document.createElement("button");

        node.type = "button";
        node.classList.add("node");

        node.style.left =
          `${position.x}%`;

        node.style.top =
          `${position.y}%`;

        node.innerHTML = `
          <span class="node-label">
            ${name}
          </span>

          <span class="node-distance">
            ${formatDistance(
              distances[name]
            )}
          </span>
        `;

        if (name === selectedStart) {
          node.classList.add(
            "start-node"
          );
        }

        if (
          currentEdge &&
          name === currentEdge.from
        ) {
          node.classList.add(
            "current-node"
          );
        }

        if (name === updatedNode) {
          node.classList.add(
            "updated-node"
          );
        }

        if (
          detectedCycleNodes.includes(
            name
          )
        ) {
          node.classList.add(
            "cycle-node"
          );
        }

        node.addEventListener(
          "click",
          () => {
            if (running) {
              return;
            }

            selectedStart = name;

            initializeState();

            statusText.innerHTML =
              `${t("startSelected")} ` +
              `<b>${name}</b>`;

            updateModeDisplay();
            updateStatistics();
            renderAll();
          }
        );

        graphEl.appendChild(node);
      }
    );
}

function renderDistanceTable() {
  distanceTableEl.innerHTML = "";

  Object.keys(nodePositions)
    .forEach(node => {
      const item =
        document.createElement("div");

      item.classList.add(
        "distance-item"
      );

      if (node === updatedNode) {
        item.classList.add(
          "updated-distance"
        );
      }

      item.innerHTML = `
        <span>${node}</span>

        <strong>
          ${formatDistance(
            distances[node]
          )}
        </strong>
      `;

      distanceTableEl.appendChild(
        item
      );
    });
}

function renderPredecessorTable() {
  predecessorTableEl.innerHTML = "";

  Object.keys(nodePositions)
    .forEach(node => {
      const item =
        document.createElement("div");

      item.classList.add(
        "predecessor-item"
      );

      item.innerHTML = `
        <span>${node}</span>

        <strong>
          ${predecessors[node] ?? "-"}
        </strong>
      `;

      predecessorTableEl.appendChild(
        item
      );
    });
}

function renderEdgeList() {
  edgeListEl.innerHTML = "";

  getEdges().forEach(
    (edge, index) => {
      const item =
        document.createElement("div");

      item.classList.add(
        "edge-item"
      );

      item.innerText =
        `${edge.from} → ${edge.to} (${edge.weight})`;

      if (
        index === currentEdgeIndex
      ) {
        item.classList.add(
          "current"
        );
      }

      if (
        updatedEdges.has(
          `${currentIteration}-${index}`
        )
      ) {
        item.classList.add(
          "updated"
        );
      }

      if (
        checkedEdges.has(
          `${currentIteration}-${index}`
        )
      ) {
        item.classList.add(
          "checked"
        );
      }

      if (
        detectedCycleEdges.includes(
          edgeKey(edge)
        )
      ) {
        item.classList.add(
          "cycle"
        );
      }

      edgeListEl.appendChild(
        item
      );
    }
  );
}

function updateCalculationPanel(
  edge,
  candidate
) {
  fromDistanceValue.innerText =
    formatDistance(
      distances[edge.from]
    );

  edgeWeightValue.innerText =
    edge.weight;

  toDistanceValue.innerText =
    formatDistance(
      distances[edge.to]
    );

  candidateValue.innerText =
    formatDistance(candidate);
}

function sleep(milliseconds) {
  return new Promise(resolve => {
    window.setTimeout(
      resolve,
      milliseconds
    );
  });
}

async function runBellmanFord() {
  if (running) {
    return;
  }

  initializeState();

  running = true;
  setControlsDisabled(true);

  const nodes =
    Object.keys(nodePositions);

  const edges =
    getEdges();

  const maxIterations =
    nodes.length - 1;

  statusText.innerHTML =
    t("initialize");

  updateStatistics();
  renderAll();

  await sleep(delay);

  for (
    let iteration = 1;
    iteration <= maxIterations;
    iteration++
  ) {
    currentIteration = iteration;

    let changedInIteration = false;

    checkedEdges = new Set();
    updatedEdges = new Set();

    statusText.innerHTML =
      `${t("iterationStart")} ` +
      `<b>${iteration} / ${maxIterations}</b>`;

    updateStatistics();
    renderAll();

    await sleep(delay);

    for (
      let index = 0;
      index < edges.length;
      index++
    ) {
      const edge = edges[index];

      currentEdgeIndex = index;
      currentEdge = edge;
      updatedEdge = null;
      updatedNode = null;

      processedEdges++;
      relaxations++;

      statusText.innerHTML =
        `${t("inspectEdge")} ` +
        `<b>${edge.from} → ${edge.to}</b> ` +
        `(w = ${edge.weight})`;

      updateStatistics();
      renderAll();

      await sleep(delay);

      const fromDistance =
        distances[edge.from];

      const candidate =
        Number.isFinite(fromDistance)
          ? fromDistance + edge.weight
          : Infinity;

      updateCalculationPanel(
        edge,
        candidate
      );

      statusText.innerHTML =
        `${t("calculation")} ` +
        `<b>${formatDistance(fromDistance)}</b> + ` +
        `<b>${edge.weight}</b> = ` +
        `<b>${formatDistance(candidate)}</b>`;

      await sleep(delay);

      if (
        Number.isFinite(fromDistance) &&
        candidate < distances[edge.to]
      ) {
        distances[edge.to] =
          candidate;

        predecessors[edge.to] =
          edge.from;

        updates++;
        changedInIteration = true;

        updatedEdge = edge;
        updatedNode = edge.to;

        updatedEdges.add(
          `${currentIteration}-${index}`
        );

        statusText.innerHTML =
          `${t("updateDistance")} ` +
          `<b>${edge.to}</b>: ` +
          `<b>${candidate}</b>`;

        updateStatistics();
        renderAll();

        await sleep(delay);
      } else {
        checkedEdges.add(
          `${currentIteration}-${index}`
        );

        statusText.innerHTML =
          t("noUpdate");

        renderAll();

        await sleep(delay * 0.75);
      }

      currentEdge = null;
      updatedEdge = null;
      updatedNode = null;

      renderAll();

      await sleep(delay * 0.25);
    }

    currentEdgeIndex = -1;

    if (!changedInIteration) {
      statusText.innerHTML =
        t("earlyStop");

      renderAll();

      await sleep(delay);

      break;
    }
  }

  statusText.innerHTML =
    t("cycleCheck");

  cycleCheckText.innerText =
    t("checkingCycle");

  currentIteration =
    Object.keys(nodePositions).length;

  updateStatistics();
  renderAll();

  await sleep(delay);

  const cycleEdges = [];
  const cycleNodes = new Set();

  for (
    let index = 0;
    index < edges.length;
    index++
  ) {
    const edge = edges[index];

    currentEdgeIndex = index;
    currentEdge = edge;

    const fromDistance =
      distances[edge.from];

    const candidate =
      Number.isFinite(fromDistance)
        ? fromDistance + edge.weight
        : Infinity;

    updateCalculationPanel(
      edge,
      candidate
    );

    statusText.innerHTML =
      `${t("inspectEdge")} ` +
      `<b>${edge.from} → ${edge.to}</b>`;

    updateStatistics();
    renderAll();

    await sleep(delay * 0.8);

    if (
      Number.isFinite(fromDistance) &&
      candidate < distances[edge.to]
    ) {
      negativeCycleDetected = true;

      cycleEdges.push(
        edgeKey(edge)
      );

      cycleNodes.add(edge.from);
      cycleNodes.add(edge.to);
    }
  }

  currentEdge = null;
  currentEdgeIndex = -1;

  detectedCycleEdges =
    cycleEdges;

  detectedCycleNodes =
    [...cycleNodes];

  if (negativeCycleDetected) {
    statusText.innerHTML =
      t("cycleFound");

    cycleResult.className =
      "cycle-result failure";

    cycleResult.innerText =
      t("cycleDanger");

    cycleCheckText.innerText =
      t("cycleFound");
  } else {
    statusText.innerHTML =
      t("done");

    cycleResult.className =
      "cycle-result success";

    cycleResult.innerText =
      t("cycleSafe");

    cycleCheckText.innerText =
      t("noCycle");
  }

  running = false;
  setControlsDisabled(false);

  updateStatistics();
  renderAll();
}

function toggleNegativeCycle() {
  if (running) {
    return;
  }

  negativeCycleEnabled =
    !negativeCycleEnabled;

  negativeCycleBtn.innerHTML =
    negativeCycleEnabled
      ? t("disableCycle")
      : t("enableCycle");

  negativeCycleBtn.classList.toggle(
    "enabled",
    negativeCycleEnabled
  );

  initializeState();

  statusText.innerHTML =
    negativeCycleEnabled
      ? t("cycleEnabled")
      : t("cycleDisabled");

  updateModeDisplay();
  updateStatistics();
  updateCyclePanel();
  renderAll();
}

startBtn.addEventListener(
  "click",
  runBellmanFord
);

resetBtn.addEventListener(
  "click",
  () => {
    resetVisualization();

    statusText.innerHTML =
      t("resetStatus");
  }
);

negativeCycleBtn.addEventListener(
  "click",
  toggleNegativeCycle
);

slowBtn.addEventListener(
  "click",
  () => {
    delay += 100;

    statusText.innerHTML =
      `🐢 ${t("speed")}: ` +
      `${delay} ms`;
  }
);

fastBtn.addEventListener(
  "click",
  () => {
    delay =
      Math.max(
        150,
        delay - 100
      );

    statusText.innerHTML =
      `⚡ ${t("speed")}: ` +
      `${delay} ms`;
  }
);

czBtn.addEventListener(
  "click",
  () => {
    setLanguage("cs");
  }
);

enBtn.addEventListener(
  "click",
  () => {
    setLanguage("en");
  }
);

initializeState();
updateLanguage();
updateModeDisplay();
updateStatistics();
updateCyclePanel();
renderAll();