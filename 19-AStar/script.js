const gridEl = document.getElementById("grid");

const statusText = document.getElementById("statusText");
const descriptionText = document.getElementById("descriptionText");
const pathResult = document.getElementById("pathResult");

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const clearWallsBtn = document.getElementById("clearWallsBtn");
const randomWallsBtn = document.getElementById("randomWallsBtn");

const slowBtn = document.getElementById("slowBtn");
const fastBtn = document.getElementById("fastBtn");

const czBtn = document.getElementById("czBtn");
const enBtn = document.getElementById("enBtn");

const wallModeBtn = document.getElementById("wallModeBtn");
const startModeBtn = document.getElementById("startModeBtn");
const goalModeBtn = document.getElementById("goalModeBtn");

const startPositionValue = document.getElementById("startPositionValue");
const goalPositionValue = document.getElementById("goalPositionValue");

const currentCellValue = document.getElementById("currentCellValue");
const openSetSizeValue = document.getElementById("openSetSizeValue");
const closedSetSizeValue = document.getElementById("closedSetSizeValue");
const pathLengthValue = document.getElementById("pathLengthValue");
const stepsValue = document.getElementById("stepsValue");

const gValue = document.getElementById("gValue");
const hValue = document.getElementById("hValue");
const fValue = document.getElementById("fValue");

const openSetList = document.getElementById("openSetList");
const closedSetList = document.getElementById("closedSetList");

const ROWS = 15;
const COLS = 25;

let currentLang = "cs";
let delay = 110;

let running = false;
let editMode = "wall";

let mouseDown = false;
let drawWallValue = true;

let startCell = {
  row: 2,
  col: 2
};

let goalCell = {
  row: 12,
  col: 22
};

let walls = new Set();

let openSet = [];
let closedSet = new Set();

let currentNode = null;
let finalPath = [];

let steps = 0;

const translations = {
  cs: {
    badge: "Algoritmus #19",
    subtitle:
      "Hledání nejkratší cesty pomocí ceny pohybu a heuristiky",

    start: "▶ Start",
    reset: "⟳ Reset",
    clearWalls: "🧹 Smazat překážky",
    randomWalls: "🎲 Náhodné překážky",
    slower: "🐢 Pomaleji",
    faster: "⚡ Rychleji",

    wallMode: "⬛ Překážky",
    startMode: "🟪 Start",
    goalMode: "🎯 Cíl",

    editMode: "Režim úprav",
    startPosition: "Start",
    goalPosition: "Cíl",

    modeWall: "Překážky",
    modeStart: "Start",
    modeGoal: "Cíl",

    currentCell: "Aktuální políčko",
    openSetSize: "Open Set",
    closedSetSize: "Closed Set",
    pathLength: "Délka cesty",
    steps: "Kroky",

    gridTitle: "⭐ Pathfinding Grid",
    gridHint:
      "Kliknutím nebo tažením vytvářej překážky. Start a cíl lze přesunout.",

    scoreTitle: "🧮 Aktuální skóre",
    gDescription: "Cena od startu",
    hDescription: "Odhad do cíle",
    fDescription: "Celkové skóre",

    openTitle: "🟦 Open Set",
    closedTitle: "🟥 Closed Set",

    legendStart: "Start",
    legendGoal: "Cíl",
    legendWall: "Překážka",
    legendOpen: "Open Set",
    legendClosed: "Closed Set",
    legendCurrent: "Aktuální",
    legendPath: "Nejkratší cesta",

    pathTitle: "🟩 Výsledná cesta",

    statusTitle: "📌 Co se právě děje?",
    explanationTitle: "🧠 Jak A* Search funguje?",

    ready:
      "Vytvoř překážky, nastav start a cíl a spusť A* Search.",

    startSelected:
      "🟪 Startovní pozice byla přesunuta.",

    goalSelected:
      "🎯 Cílová pozice byla přesunuta.",

    wallsCleared:
      "🧹 Všechny překážky byly odstraněny.",

    randomWallsCreated:
      "🎲 Bylo vytvořeno nové náhodné rozložení překážek.",

    initialization:
      "⭐ Přidávám startovní políčko do Open Setu.",

    selectLowest:
      "🟨 Vybírám políčko s nejnižší hodnotou f.",

    moveToClosed:
      "🟥 Přesouvám aktuální políčko do Closed Setu.",

    checkNeighbours:
      "🔎 Kontroluji sousední políčka.",

    discoverNeighbour:
      "🟦 Přidávám nové políčko do Open Setu.",

    improveNeighbour:
      "📉 Našel jsem lepší cestu k sousednímu políčku.",

    skipWall:
      "⬛ Překážku nelze projít.",

    skipClosed:
      "✅ Políčko už bylo kompletně zpracováno.",

    goalReached:
      "🎯 Cíl byl nalezen. Sestavuji nejkratší cestu.",

    pathFound:
      "✅ Hotovo! A* Search našel nejkratší cestu.",

    noPath:
      "❌ Mezi startem a cílem neexistuje průchozí cesta.",

    resetStatus:
      "🔄 Vizualizace byla resetována.",

    speed:
      "Rychlost animace",

    emptySet:
      "Množina je prázdná",

    totalCells:
      "políček",

    description: `
      A* Search kombinuje skutečnou cenu cesty
      <span class="highlight">g</span>
      s odhadem vzdálenosti do cíle
      <span class="highlight">h</span>.

      <br><br>

      Pro každé políčko vypočítá:

      <br>

      <span class="highlight">f = g + h</span>

      <br><br>

      Díky heuristice se algoritmus soustředí hlavně
      na směry, které vypadají nejvíce slibně.
    `
  },

  en: {
    badge: "Algorithm #19",
    subtitle:
      "Finding the shortest path using movement cost and heuristics",

    start: "▶ Start",
    reset: "⟳ Reset",
    clearWalls: "🧹 Clear Walls",
    randomWalls: "🎲 Random Walls",
    slower: "🐢 Slower",
    faster: "⚡ Faster",

    wallMode: "⬛ Walls",
    startMode: "🟪 Start",
    goalMode: "🎯 Goal",

    editMode: "Edit Mode",
    startPosition: "Start",
    goalPosition: "Goal",

    modeWall: "Walls",
    modeStart: "Start",
    modeGoal: "Goal",

    currentCell: "Current Cell",
    openSetSize: "Open Set",
    closedSetSize: "Closed Set",
    pathLength: "Path Length",
    steps: "Steps",

    gridTitle: "⭐ Pathfinding Grid",
    gridHint:
      "Click or drag to create walls. The start and goal can be moved.",

    scoreTitle: "🧮 Current Score",
    gDescription: "Cost from start",
    hDescription: "Estimate to goal",
    fDescription: "Total score",

    openTitle: "🟦 Open Set",
    closedTitle: "🟥 Closed Set",

    legendStart: "Start",
    legendGoal: "Goal",
    legendWall: "Wall",
    legendOpen: "Open Set",
    legendClosed: "Closed Set",
    legendCurrent: "Current",
    legendPath: "Shortest Path",

    pathTitle: "🟩 Resulting Path",

    statusTitle: "📌 Current Action",
    explanationTitle: "🧠 How does A* Search work?",

    ready:
      "Create walls, set the start and goal, then run A* Search.",

    startSelected:
      "🟪 The start position has been moved.",

    goalSelected:
      "🎯 The goal position has been moved.",

    wallsCleared:
      "🧹 All walls have been removed.",

    randomWallsCreated:
      "🎲 A new random wall layout has been generated.",

    initialization:
      "⭐ Adding the start cell to the Open Set.",

    selectLowest:
      "🟨 Selecting the cell with the lowest f score.",

    moveToClosed:
      "🟥 Moving the current cell into the Closed Set.",

    checkNeighbours:
      "🔎 Checking neighbouring cells.",

    discoverNeighbour:
      "🟦 Adding a new cell to the Open Set.",

    improveNeighbour:
      "📉 Found a better path to a neighbouring cell.",

    skipWall:
      "⬛ A wall cannot be crossed.",

    skipClosed:
      "✅ This cell has already been fully processed.",

    goalReached:
      "🎯 The goal has been reached. Reconstructing the shortest path.",

    pathFound:
      "✅ Done! A* Search found the shortest path.",

    noPath:
      "❌ No walkable path exists between the start and goal.",

    resetStatus:
      "🔄 The visualization has been reset.",

    speed:
      "Animation speed",

    emptySet:
      "The set is empty",

    totalCells:
      "cells",

    description: `
      A* Search combines the actual path cost
      <span class="highlight">g</span>
      with an estimated distance to the goal
      <span class="highlight">h</span>.

      <br><br>

      For every cell it calculates:

      <br>

      <span class="highlight">f = g + h</span>

      <br><br>

      The heuristic helps the algorithm focus on directions
      that appear most promising.
    `
  }
};

function t(key) {
  return translations[currentLang][key];
}

function cellKey(row, col) {
  return `${row}-${col}`;
}

function parseCellKey(key) {
  const [row, col] = key.split("-").map(Number);

  return {
    row,
    col
  };
}

function coordinatesText(cell) {
  return `${cell.row + 1}, ${cell.col + 1}`;
}

function sameCell(first, second) {
  return (
    first.row === second.row &&
    first.col === second.col
  );
}

function manhattanDistance(first, second) {
  return (
    Math.abs(first.row - second.row) +
    Math.abs(first.col - second.col)
  );
}

function getNeighbours(node) {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];

  return directions
    .map(([rowOffset, colOffset]) => ({
      row: node.row + rowOffset,
      col: node.col + colOffset
    }))
    .filter(cell => (
      cell.row >= 0 &&
      cell.row < ROWS &&
      cell.col >= 0 &&
      cell.col < COLS
    ));
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

  updateEditInfo();
  updateStatistics();
  renderSetLists();
}

function setLanguage(language) {
  if (running) {
    return;
  }

  currentLang = language;

  czBtn.classList.toggle("active", language === "cs");
  enBtn.classList.toggle("active", language === "en");

  updateLanguage();
}

function setEditMode(mode) {
  if (running) {
    return;
  }

  editMode = mode;

  wallModeBtn.classList.toggle("active", mode === "wall");
  startModeBtn.classList.toggle("active", mode === "start");
  goalModeBtn.classList.toggle("active", mode === "goal");

  updateEditInfo();
}

function updateEditInfo() {
  startPositionValue.innerText = coordinatesText(startCell);
  goalPositionValue.innerText = coordinatesText(goalCell);
}

function createGrid() {
  gridEl.innerHTML = "";
  gridEl.style.setProperty("--columns", COLS);

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const cell = document.createElement("div");

      cell.classList.add("cell");
      cell.dataset.row = row;
      cell.dataset.col = col;

      cell.addEventListener("mousedown", event => {
        event.preventDefault();

        if (running) {
          return;
        }

        mouseDown = true;

        const key = cellKey(row, col);

        if (editMode === "wall") {
          drawWallValue = !walls.has(key);
        }

        editCell(row, col);
      });

      cell.addEventListener("mouseenter", () => {
        if (
          running ||
          !mouseDown ||
          editMode !== "wall"
        ) {
          return;
        }

        editCell(row, col);
      });

      cell.addEventListener("click", () => {
        if (
          running ||
          editMode === "wall"
        ) {
          return;
        }

        editCell(row, col);
      });

      gridEl.appendChild(cell);
    }
  }

  renderGrid();
}

function editCell(row, col) {
  const selectedCell = {
    row,
    col
  };

  const key = cellKey(row, col);

  if (editMode === "wall") {
    if (
      sameCell(selectedCell, startCell) ||
      sameCell(selectedCell, goalCell)
    ) {
      return;
    }

    if (drawWallValue) {
      walls.add(key);
    } else {
      walls.delete(key);
    }
  }

  if (editMode === "start") {
    if (sameCell(selectedCell, goalCell)) {
      return;
    }

    walls.delete(key);
    startCell = selectedCell;

    statusText.innerHTML = t("startSelected");
  }

  if (editMode === "goal") {
    if (sameCell(selectedCell, startCell)) {
      return;
    }

    walls.delete(key);
    goalCell = selectedCell;

    statusText.innerHTML = t("goalSelected");
  }

  clearSearchState();
  updateEditInfo();
  updateStatistics();
  renderAll();
}

function clearSearchState() {
  openSet = [];
  closedSet = new Set();

  currentNode = null;
  finalPath = [];

  steps = 0;

  pathResult.classList.remove("success", "failure");
  pathResult.innerHTML = "-";

  resetScores();
}

let nodesByKey = new Map();

function resetScores() {
  nodesByKey = new Map();

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const key = cellKey(row, col);

      nodesByKey.set(key, {
        row,
        col,
        key,
        g: Infinity,
        h: 0,
        f: Infinity,
        parent: null
      });
    }
  }
}

function renderAll() {
  renderGrid();
  renderSetLists();
  updateStatistics();
  updateScorePanel();
}

function renderGrid() {
  gridEl.querySelectorAll(".cell").forEach(cellEl => {
    const row = Number(cellEl.dataset.row);
    const col = Number(cellEl.dataset.col);

    const key = cellKey(row, col);
    const cell = {
      row,
      col
    };

    cellEl.className = "cell";

    if (walls.has(key)) {
      cellEl.classList.add("wall");
    }

    if (openSet.some(node => node.key === key)) {
      cellEl.classList.add("open-cell");
    }

    if (closedSet.has(key)) {
      cellEl.classList.add("closed-cell");
    }

    if (finalPath.some(node => node.key === key)) {
      cellEl.classList.add("path-cell");
    }

    if (currentNode && currentNode.key === key) {
      cellEl.classList.add("current-cell");
    }

    if (sameCell(cell, startCell)) {
      cellEl.classList.add("start-cell");
    }

    if (sameCell(cell, goalCell)) {
      cellEl.classList.add("goal-cell");
    }
  });
}

function renderSetLists() {
  openSetList.innerHTML = "";
  closedSetList.innerHTML = "";

  const sortedOpenSet = [...openSet].sort((a, b) => (
    a.f - b.f ||
    a.h - b.h
  ));

  if (sortedOpenSet.length === 0) {
    const empty = document.createElement("div");

    empty.classList.add("empty-state");
    empty.innerText = t("emptySet");

    openSetList.appendChild(empty);
  } else {
    sortedOpenSet.slice(0, 28).forEach(node => {
      const item = document.createElement("div");

      item.classList.add("set-item", "open-item");
      item.innerText =
        `(${node.row + 1},${node.col + 1}) f:${node.f}`;

      openSetList.appendChild(item);
    });
  }

  const closedKeys = [...closedSet];

  if (closedKeys.length === 0) {
    const empty = document.createElement("div");

    empty.classList.add("empty-state");
    empty.innerText = t("emptySet");

    closedSetList.appendChild(empty);
  } else {
    closedKeys.slice(-28).forEach(key => {
      const node = parseCellKey(key);

      const item = document.createElement("div");

      item.classList.add("set-item", "closed-item");
      item.innerText =
        `(${node.row + 1},${node.col + 1})`;

      closedSetList.appendChild(item);
    });
  }
}

function updateStatistics() {
  currentCellValue.innerText = currentNode
    ? coordinatesText(currentNode)
    : "-";

  openSetSizeValue.innerText = openSet.length;
  closedSetSizeValue.innerText = closedSet.size;

  pathLengthValue.innerText = finalPath.length > 0
    ? Math.max(0, finalPath.length - 1)
    : "-";

  stepsValue.innerText = steps;
}

function updateScorePanel() {
  if (!currentNode) {
    gValue.innerText = "-";
    hValue.innerText = "-";
    fValue.innerText = "-";
    return;
  }

  gValue.innerText = currentNode.g;
  hValue.innerText = currentNode.h;
  fValue.innerText = currentNode.f;
}

function setControlsDisabled(disabled) {
  wallModeBtn.disabled = disabled;
  startModeBtn.disabled = disabled;
  goalModeBtn.disabled = disabled;

  clearWallsBtn.disabled = disabled;
  randomWallsBtn.disabled = disabled;

  czBtn.disabled = disabled;
  enBtn.disabled = disabled;
}

function clearWalls() {
  if (running) {
    return;
  }

  walls.clear();
  clearSearchState();

  statusText.innerHTML = t("wallsCleared");

  renderAll();
}

function createRandomWalls() {
  if (running) {
    return;
  }

  walls.clear();

  const wallProbability = 0.23;

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const cell = {
        row,
        col
      };

      if (
        sameCell(cell, startCell) ||
        sameCell(cell, goalCell)
      ) {
        continue;
      }

      if (Math.random() < wallProbability) {
        walls.add(cellKey(row, col));
      }
    }
  }

  clearAreaAround(startCell);
  clearAreaAround(goalCell);

  clearSearchState();

  statusText.innerHTML = t("randomWallsCreated");

  renderAll();
}

function clearAreaAround(center) {
  getNeighbours(center).forEach(cell => {
    walls.delete(cellKey(cell.row, cell.col));
  });

  walls.delete(cellKey(center.row, center.col));
}

function extractLowestScoreNode() {
  openSet.sort((first, second) => (
    first.f - second.f ||
    first.h - second.h
  ));

  return openSet.shift() ?? null;
}

function reconstructPath(goalNode) {
  const path = [];
  let node = goalNode;

  while (node) {
    path.unshift(node);
    node = node.parent;
  }

  return path;
}

function sleep(milliseconds) {
  return new Promise(resolve => {
    window.setTimeout(resolve, milliseconds);
  });
}

async function revealFinalPath(path) {
  finalPath = [];

  for (const node of path) {
    finalPath.push(node);
    renderGrid();

    await sleep(Math.max(25, delay * 0.45));
  }
}

async function aStarSearch() {
  if (running) {
    return;
  }

  clearSearchState();

  running = true;
  setControlsDisabled(true);

  const startKey = cellKey(
    startCell.row,
    startCell.col
  );

  const goalKey = cellKey(
    goalCell.row,
    goalCell.col
  );

  const startNode = nodesByKey.get(startKey);

  startNode.g = 0;
  startNode.h = manhattanDistance(
    startCell,
    goalCell
  );
  startNode.f = startNode.g + startNode.h;

  openSet.push(startNode);

  statusText.innerHTML = t("initialization");

  renderAll();

  await sleep(delay);

  while (openSet.length > 0) {
    currentNode = extractLowestScoreNode();

    if (!currentNode) {
      break;
    }

    steps++;

    statusText.innerHTML =
      `${t("selectLowest")} ` +
      `<b>(${currentNode.row + 1}, ${currentNode.col + 1})</b> ` +
      `f = <b>${currentNode.f}</b>`;

    renderAll();

    await sleep(delay);

    if (currentNode.key === goalKey) {
      statusText.innerHTML = t("goalReached");

      renderAll();

      await sleep(delay);

      const path = reconstructPath(currentNode);

      await revealFinalPath(path);

      pathResult.classList.remove("failure");
      pathResult.classList.add("success");

      pathResult.innerHTML =
        `${path
          .map(node => `(${node.row + 1}, ${node.col + 1})`)
          .join(" → ")}
        <br>
        ${Math.max(0, path.length - 1)} ${t("totalCells")}`;

      statusText.innerHTML = t("pathFound");

      running = false;
      setControlsDisabled(false);

      renderAll();
      return;
    }

    closedSet.add(currentNode.key);

    statusText.innerHTML = t("moveToClosed");

    renderAll();

    await sleep(delay * 0.65);

    statusText.innerHTML = t("checkNeighbours");

    await sleep(delay * 0.55);

    const neighbours = getNeighbours(currentNode);

    for (const neighbourPosition of neighbours) {
      const neighbourKey = cellKey(
        neighbourPosition.row,
        neighbourPosition.col
      );

      if (walls.has(neighbourKey)) {
        continue;
      }

      if (closedSet.has(neighbourKey)) {
        continue;
      }

      const neighbour = nodesByKey.get(neighbourKey);

      const tentativeG = currentNode.g + 1;

      const alreadyOpen = openSet.some(
        node => node.key === neighbourKey
      );

      if (
        !alreadyOpen ||
        tentativeG < neighbour.g
      ) {
        neighbour.parent = currentNode;
        neighbour.g = tentativeG;

        neighbour.h = manhattanDistance(
          neighbourPosition,
          goalCell
        );

        neighbour.f = neighbour.g + neighbour.h;

        if (!alreadyOpen) {
          openSet.push(neighbour);

          statusText.innerHTML =
            `${t("discoverNeighbour")} ` +
            `<b>(${neighbour.row + 1}, ${neighbour.col + 1})</b>`;
        } else {
          statusText.innerHTML =
            `${t("improveNeighbour")} ` +
            `<b>(${neighbour.row + 1}, ${neighbour.col + 1})</b>`;
        }

        renderAll();

        await sleep(delay * 0.55);
      }
    }

    currentNode = null;

    renderAll();

    await sleep(delay * 0.25);
  }

  currentNode = null;

  pathResult.classList.remove("success");
  pathResult.classList.add("failure");
  pathResult.innerHTML = t("noPath");

  statusText.innerHTML = t("noPath");

  running = false;
  setControlsDisabled(false);

  renderAll();
}

function resetVisualization() {
  running = false;

  clearSearchState();

  setControlsDisabled(false);

  statusText.innerHTML = t("resetStatus");

  renderAll();
}

document.addEventListener("mouseup", () => {
  mouseDown = false;
});

startBtn.addEventListener("click", aStarSearch);

resetBtn.addEventListener("click", resetVisualization);

clearWallsBtn.addEventListener("click", clearWalls);

randomWallsBtn.addEventListener(
  "click",
  createRandomWalls
);

wallModeBtn.addEventListener("click", () => {
  setEditMode("wall");
});

startModeBtn.addEventListener("click", () => {
  setEditMode("start");
});

goalModeBtn.addEventListener("click", () => {
  setEditMode("goal");
});

slowBtn.addEventListener("click", () => {
  delay += 30;

  statusText.innerHTML =
    `🐢 ${t("speed")}: ${delay} ms`;
});

fastBtn.addEventListener("click", () => {
  delay = Math.max(20, delay - 30);

  statusText.innerHTML =
    `⚡ ${t("speed")}: ${delay} ms`;
});

czBtn.addEventListener("click", () => {
  setLanguage("cs");
});

enBtn.addEventListener("click", () => {
  setLanguage("en");
});

resetScores();
createGrid();
updateLanguage();
updateEditInfo();
updateStatistics();
renderAll();