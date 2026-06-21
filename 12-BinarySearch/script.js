const arrayEl = document.getElementById("array");

const statusText = document.getElementById("statusText");
const descriptionText = document.getElementById("descriptionText");

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const targetBtn = document.getElementById("targetBtn");
const slowBtn = document.getElementById("slowBtn");
const fastBtn = document.getElementById("fastBtn");

const czBtn = document.getElementById("czBtn");
const enBtn = document.getElementById("enBtn");

const targetInput = document.getElementById("targetInput");
const targetValueEl = document.getElementById("targetValue");
const middleValueEl = document.getElementById("middleValue");
const comparisonsCountEl = document.getElementById("comparisonsCount");
const remainingCountEl = document.getElementById("remainingCount");
const spaceFill = document.getElementById("spaceFill");

const linearInfo = document.getElementById("linearInfo");
const binaryInfo = document.getElementById("binaryInfo");

let values = [];
let targetValue = null;
let delay = 600;
let sorting = false;
let currentLang = "cs";

let comparisons = 0;
let middleValue = "-";
let remaining = "-";
let discardedIndexes = [];
let foundIndex = -1;
let currentLow = 0;
let currentHigh = 0;
let currentMiddle = -1;

const translations = {
  cs: {
    badge: "Algoritmus #12",
    subtitle: "Rychlé vyhledávání půlením seřazeného pole",
    start: "▶ Start",
    reset: "⟳ Reset",
    newTarget: "🎯 Nový cíl",
    slower: "🐢 Pomaleji",
    faster: "⚡ Rychleji",
    targetLabel: "Hledaná hodnota",
    targetValue: "Hledaná hodnota",
    middleValue: "Aktuální střed",
    comparisons: "Porovnání",
    remaining: "Zbývá hodnot",
    spaceLabel: "Search Space",
    arrayTitle: "📦 Seřazené pole",
    linearLabel: "Linear Search",
    binaryLabel: "Binary Search",
    statusTitle: "📌 Co se právě děje?",
    explanationTitle: "🧠 Jak Binary Search funguje?",
    ready: "Připraveno ke spuštění...",
    resetStatus: "🔄 Nové seřazené pole připraveno.",
    targetStatus: "🎯 Nová hledaná hodnota připravena.",
    checkingMiddle: "🎯 Kontroluji prostřední hodnotu",
    targetGreater: "➡️ Hledaná hodnota je větší. Zahazuji levou polovinu.",
    targetSmaller: "⬅️ Hledaná hodnota je menší. Zahazuji pravou polovinu.",
    match: "✅ Shoda! Hodnota byla nalezena na indexu",
    notFound: "❌ Hodnota nebyla nalezena.",
    speed: "Rychlost animace",
    linear: "porovnání při Linear Search",
    binary: "porovnání při Binary Search",
    description: `
      Binary Search funguje pouze nad
      <span class="highlight">seřazenými daty</span>.

      <br><br>

      V každém kroku zkontroluje prostřední hodnotu.

      <br><br>

      Potom zahodí polovinu pole, ve které hledaná hodnota být nemůže.
    `
  },

  en: {
    badge: "Algorithm #12",
    subtitle: "Fast searching by repeatedly halving a sorted array",
    start: "▶ Start",
    reset: "⟳ Reset",
    newTarget: "🎯 New Target",
    slower: "🐢 Slower",
    faster: "⚡ Faster",
    targetLabel: "Target Value",
    targetValue: "Target Value",
    middleValue: "Current Middle",
    comparisons: "Comparisons",
    remaining: "Remaining Values",
    spaceLabel: "Search Space",
    arrayTitle: "📦 Sorted Array",
    linearLabel: "Linear Search",
    binaryLabel: "Binary Search",
    statusTitle: "📌 Current Action",
    explanationTitle: "🧠 How does Binary Search work?",
    ready: "Ready to start...",
    resetStatus: "🔄 New sorted array generated.",
    targetStatus: "🎯 New target value selected.",
    checkingMiddle: "🎯 Checking middle value",
    targetGreater: "➡️ Target is greater. Discarding the left half.",
    targetSmaller: "⬅️ Target is smaller. Discarding the right half.",
    match: "✅ Match! Value found at index",
    notFound: "❌ Value was not found.",
    speed: "Animation speed",
    linear: "comparisons with Linear Search",
    binary: "comparisons with Binary Search",
    description: `
      Binary Search works only on
      <span class="highlight">sorted data</span>.

      <br><br>

      In each step, it checks the middle value.

      <br><br>

      Then it eliminates half of the array where the target cannot be.
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
  }

  updateStats();
  updateCompareInfo();
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
  const set = new Set();

  while (set.size < 14) {
    set.add(Math.floor(Math.random() * 90) + 10);
  }

  values = Array.from(set).sort((a, b) => a - b);

  resetSearchState();
  generateTargetFromArray();

  updateStats();
  updateCompareInfo();
  renderArray();
}

function resetSearchState() {
  comparisons = 0;
  middleValue = "-";
  remaining = values.length;
  discardedIndexes = [];
  foundIndex = -1;
  currentLow = 0;
  currentHigh = values.length - 1;
  currentMiddle = -1;
  spaceFill.style.width = "100%";
}

function generateTargetFromArray() {
  const randomIndex = Math.floor(Math.random() * values.length);
  targetValue = values[randomIndex];
  targetInput.value = targetValue;
}

function updateTargetFromInput() {
  const value = Number(targetInput.value);

  if (!Number.isNaN(value)) {
    targetValue = value;
  }

  resetSearchState();
  updateStats();
  updateCompareInfo();
  renderArray();
}

function updateStats() {
  targetValueEl.innerText = targetValue ?? "-";
  middleValueEl.innerText = middleValue;
  comparisonsCountEl.innerText = comparisons;
  remainingCountEl.innerText = remaining;
}

function updateCompareInfo() {
  const linearComparisons = values.indexOf(targetValue) >= 0
    ? values.indexOf(targetValue) + 1
    : values.length;

  linearInfo.innerText = `${linearComparisons} ${t("linear")}`;
  binaryInfo.innerText = `${comparisons} ${t("binary")}`;
}

function updateSearchSpace() {
  const activeCount = Math.max(0, currentHigh - currentLow + 1);
  const percent = (activeCount / values.length) * 100;
  spaceFill.style.width = `${percent}%`;
}

function renderArray() {
  arrayEl.innerHTML = "";

  values.forEach((value, index) => {
    const item = document.createElement("div");
    item.classList.add("array-item");
    item.innerText = value;
    item.dataset.index = `#${index}`;

    if (index >= currentLow && index <= currentHigh && foundIndex === -1) {
      item.classList.add("active-range");
    }

    if (index === currentMiddle) {
      item.classList.add("middle");
    }

    if (discardedIndexes.includes(index)) {
      item.classList.add("discarded");
    }

    if (index === foundIndex) {
      item.classList.add("found");
    }

    arrayEl.appendChild(item);
  });
}

function markDiscarded(from, to) {
  for (let i = from; i <= to; i++) {
    if (!discardedIndexes.includes(i)) {
      discardedIndexes.push(i);
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function binarySearch() {
  if (sorting) return;

  updateTargetFromInput();

  sorting = true;

  let low = 0;
  let high = values.length - 1;

  currentLow = low;
  currentHigh = high;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    currentLow = low;
    currentHigh = high;
    currentMiddle = mid;
    middleValue = values[mid];
    remaining = high - low + 1;
    comparisons++;

    statusText.innerHTML =
      `${t("checkingMiddle")}: <b>${values[mid]}</b>`;

    updateStats();
    updateCompareInfo();
    updateSearchSpace();
    renderArray();

    await sleep(delay);

    if (values[mid] === targetValue) {
      foundIndex = mid;

      statusText.innerHTML =
        `${t("match")} <b>${mid}</b>.`;

      renderArray();
      sorting = false;
      return;
    }

    if (values[mid] < targetValue) {
      statusText.innerHTML = t("targetGreater");

      markDiscarded(low, mid);

      low = mid + 1;
    } else {
      statusText.innerHTML = t("targetSmaller");

      markDiscarded(mid, high);

      high = mid - 1;
    }

    currentLow = low;
    currentHigh = high;
    currentMiddle = -1;
    remaining = Math.max(0, high - low + 1);

    updateStats();
    updateCompareInfo();
    updateSearchSpace();
    renderArray();

    await sleep(delay);
  }

  currentMiddle = -1;
  middleValue = "-";
  remaining = 0;

  updateStats();
  updateCompareInfo();
  updateSearchSpace();
  renderArray();

  statusText.innerHTML = t("notFound");

  sorting = false;
}

startBtn.addEventListener("click", binarySearch);

resetBtn.addEventListener("click", () => {
  if (sorting) return;

  generateValues();
  statusText.innerHTML = t("resetStatus");
});

targetBtn.addEventListener("click", () => {
  if (sorting) return;

  generateTargetFromArray();
  resetSearchState();

  updateStats();
  updateCompareInfo();
  renderArray();

  statusText.innerHTML = t("targetStatus");
});

targetInput.addEventListener("change", () => {
  if (sorting) return;

  updateTargetFromInput();
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