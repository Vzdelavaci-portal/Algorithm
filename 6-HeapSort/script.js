const tree = document.getElementById("tree");
const array = document.getElementById("array");

const statusText = document.getElementById("statusText");
const descriptionText = document.getElementById("descriptionText");

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const slowBtn = document.getElementById("slowBtn");
const fastBtn = document.getElementById("fastBtn");

const czBtn = document.getElementById("czBtn");
const enBtn = document.getElementById("enBtn");

const phaseText = document.getElementById("phaseText");
const comparisonsCount = document.getElementById("comparisonsCount");
const swapsCount = document.getElementById("swapsCount");

let values = [];
let delay = 500;
let sorting = false;
let currentLang = "cs";

let comparisons = 0;
let swaps = 0;
let sortedIndexes = [];

const translations = {
  cs: {
    badge: "Algoritmus #6",
    subtitle: "Třídění pomocí binární haldy",
    start: "▶ Start",
    reset: "⟳ Reset",
    slower: "🐢 Pomaleji",
    faster: "⚡ Rychleji",
    phase: "Fáze",
    comparisons: "Porovnání",
    swaps: "Prohození",
    treeTitle: "🌳 Heap Tree",
    arrayTitle: "📊 Pole",
    statusTitle: "📌 Co se právě děje?",
    explanationTitle: "🧠 Jak Heap Sort funguje?",
    ready: "Připraveno ke spuštění...",
    resetStatus: "🔄 Nové hodnoty připraveny.",
    buildHeap: "Stavím Max Heap",
    heapify: "Upravuji haldu",
    compare: "Porovnávám hodnoty",
    swap: "Prohazuji hodnoty",
    moveMax: "Přesouvám největší hodnotu na konec",
    done: "✅ Hotovo! Pole je seřazené.",
    speed: "Rychlost animace",
    and: "a",
    phaseReady: "Připraveno",
    phaseBuild: "Build Heap",
    phaseSort: "Sorting",
    phaseHeapify: "Heapify",
    phaseDone: "Hotovo",
    description: `
      Heap Sort nejprve vytvoří
      <span class="highlight">Max Heap</span>.

      <br><br>

      Největší hodnota je vždy v kořeni stromu.

      <br><br>

      Poté ji algoritmus přesune na konec pole
      a znovu upraví haldu.
    `
  },

  en: {
    badge: "Algorithm #6",
    subtitle: "Sorting using a binary heap",
    start: "▶ Start",
    reset: "⟳ Reset",
    slower: "🐢 Slower",
    faster: "⚡ Faster",
    phase: "Phase",
    comparisons: "Comparisons",
    swaps: "Swaps",
    treeTitle: "🌳 Heap Tree",
    arrayTitle: "📊 Array",
    statusTitle: "📌 Current Action",
    explanationTitle: "🧠 How does Heap Sort work?",
    ready: "Ready to start...",
    resetStatus: "🔄 New values generated.",
    buildHeap: "Building Max Heap",
    heapify: "Restoring heap structure",
    compare: "Comparing values",
    swap: "Swapping values",
    moveMax: "Moving the largest value to the end",
    done: "✅ Done! The array is sorted.",
    speed: "Animation speed",
    and: "and",
    phaseReady: "Ready",
    phaseBuild: "Build Heap",
    phaseSort: "Sorting",
    phaseHeapify: "Heapify",
    phaseDone: "Done",
    description: `
      Heap Sort first builds a
      <span class="highlight">Max Heap</span>.

      <br><br>

      The largest value is always stored at the root.

      <br><br>

      Then the algorithm moves it to the end
      and rebuilds the heap.
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

  if (!sorting) {
    statusText.innerHTML = t("ready");
    phaseText.innerText = t("phaseReady");
  }
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

function generateValues() {
  values = [];

  comparisons = 0;
  swaps = 0;
  sortedIndexes = [];

  for (let i = 0; i < 15; i++) {
    values.push(Math.floor(Math.random() * 90) + 10);
  }

  updateStats(t("phaseReady"));
  render();
}

function updateStats(phase) {
  phaseText.innerText = phase;
  comparisonsCount.innerText = comparisons;
  swapsCount.innerText = swaps;
}

function getNodePosition(index) {
  const level = Math.floor(Math.log2(index + 1));
  const indexInLevel = index - (Math.pow(2, level) - 1);
  const nodesInLevel = Math.pow(2, level);

  const x = ((indexInLevel + 1) / (nodesInLevel + 1)) * 100;
  const y = 42 + level * 82;

  return { x, y };
}

function render(activeIndexes = [], rootIndex = -1, swapIndexes = []) {
  renderTree(activeIndexes, rootIndex, swapIndexes);
  renderArray(activeIndexes, rootIndex, swapIndexes);
}

function renderTree(activeIndexes = [], rootIndex = -1, swapIndexes = []) {
  tree.innerHTML = "";

  values.forEach((value, index) => {
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;

    if (leftChild < values.length) {
      drawEdge(index, leftChild);
    }

    if (rightChild < values.length) {
      drawEdge(index, rightChild);
    }
  });

  values.forEach((value, index) => {
    const pos = getNodePosition(index);

    const node = document.createElement("div");
    node.classList.add("node");
    node.innerText = value;

    if (index === rootIndex) {
      node.classList.add("root");
    }

    if (activeIndexes.includes(index)) {
      node.classList.add("compare");
    }

    if (swapIndexes.includes(index)) {
      node.classList.add("swap");
    }

    if (sortedIndexes.includes(index)) {
      node.classList.add("sorted");
    }

    node.style.left = `${pos.x}%`;
    node.style.top = `${pos.y}px`;

    tree.appendChild(node);
  });
}

function drawEdge(parentIndex, childIndex) {
  const parent = getNodePosition(parentIndex);
  const child = getNodePosition(childIndex);

  const treeWidth = tree.clientWidth;

  const x1 = (parent.x / 100) * treeWidth;
  const y1 = parent.y;
  const x2 = (child.x / 100) * treeWidth;
  const y2 = child.y;

  const length = Math.hypot(x2 - x1, y2 - y1);
  const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

  const edge = document.createElement("div");
  edge.classList.add("edge");

  edge.style.width = `${length}px`;
  edge.style.left = `${x1}px`;
  edge.style.top = `${y1}px`;
  edge.style.transform = `rotate(${angle}deg)`;

  tree.appendChild(edge);
}

function renderArray(activeIndexes = [], rootIndex = -1, swapIndexes = []) {
  array.innerHTML = "";

  values.forEach((value, index) => {
    const item = document.createElement("div");
    item.classList.add("array-item");
    item.innerText = value;

    if (index === rootIndex) {
      item.classList.add("root");
    }

    if (activeIndexes.includes(index)) {
      item.classList.add("compare");
    }

    if (swapIndexes.includes(index)) {
      item.classList.add("swap");
    }

    if (sortedIndexes.includes(index)) {
      item.classList.add("sorted");
    }

    array.appendChild(item);
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function heapify(n, i) {
  updateStats(t("phaseHeapify"));

  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  statusText.innerHTML = `${t("heapify")}: <b>${values[i]}</b>`;
  render([], i);
  await sleep(delay);

  if (left < n) {
    comparisons++;

    statusText.innerHTML =
      `${t("compare")} <b>${values[left]}</b> ${t("and")} <b>${values[largest]}</b>`;

    updateStats(t("phaseHeapify"));
    render([left, largest], i);

    await sleep(delay);

    if (values[left] > values[largest]) {
      largest = left;
    }
  }

  if (right < n) {
    comparisons++;

    statusText.innerHTML =
      `${t("compare")} <b>${values[right]}</b> ${t("and")} <b>${values[largest]}</b>`;

    updateStats(t("phaseHeapify"));
    render([right, largest], i);

    await sleep(delay);

    if (values[right] > values[largest]) {
      largest = right;
    }
  }

  if (largest !== i) {
    statusText.innerHTML =
      `${t("swap")} <b>${values[i]}</b> ${t("and")} <b>${values[largest]}</b>`;

    [values[i], values[largest]] = [values[largest], values[i]];
    swaps++;

    updateStats(t("phaseHeapify"));
    render([], i, [i, largest]);

    await sleep(delay);

    await heapify(n, largest);
  }
}

async function heapSort() {
  if (sorting) return;

  sorting = true;
  comparisons = 0;
  swaps = 0;
  sortedIndexes = [];

  updateStats(t("phaseBuild"));

  statusText.innerHTML = `🌳 ${t("buildHeap")}`;

  const n = values.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    updateStats(t("phaseSort"));

    statusText.innerHTML =
      `${t("moveMax")}: <b>${values[0]}</b>`;

    [values[0], values[i]] = [values[i], values[0]];
    swaps++;

    sortedIndexes.push(i);

    render([], 0, [0, i]);
    updateStats(t("phaseSort"));

    await sleep(delay);

    await heapify(i, 0);
  }

  sortedIndexes.push(0);

  updateStats(t("phaseDone"));
  render();
  statusText.innerHTML = t("done");

  sorting = false;
}

startBtn.addEventListener("click", heapSort);

resetBtn.addEventListener("click", () => {
  if (sorting) return;

  generateValues();
  statusText.innerHTML = t("resetStatus");
});

slowBtn.addEventListener("click", () => {
  delay += 100;
  statusText.innerHTML = `🐢 ${t("speed")}: ${delay} ms`;
});

fastBtn.addEventListener("click", () => {
  if (delay > 100) {
    delay -= 100;
  }

  statusText.innerHTML = `⚡ ${t("speed")}: ${delay} ms`;
});

czBtn.addEventListener("click", () => {
  if (!sorting) setLanguage("cs");
});

enBtn.addEventListener("click", () => {
  if (!sorting) setLanguage("en");
});

generateValues();
updateLanguage();