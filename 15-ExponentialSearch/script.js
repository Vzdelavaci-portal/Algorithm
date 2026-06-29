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
const phaseText = document.getElementById("phaseText");
const targetValueEl = document.getElementById("targetValue");
const expStepsEl = document.getElementById("expSteps");
const binaryStepsEl = document.getElementById("binarySteps");
const rangeValue = document.getElementById("rangeValue");

let values = [];
let targetValue = null;
let delay = 650;
let sorting = false;
let currentLang = "cs";

let phase = "-";
let expSteps = 0;
let binarySteps = 0;

let expIndex = -1;
let middleIndex = -1;
let foundIndex = -1;
let rangeStart = -1;
let rangeEnd = -1;
let discardedIndexes = [];

const translations = {
  cs: {
    badge: "Algoritmus #15",
    subtitle: "Rychlé nalezení rozsahu a následný Binary Search",
    start: "▶ Start",
    reset: "⟳ Reset",
    newTarget: "🎯 Nový cíl",
    slower: "🐢 Pomaleji",
    faster: "⚡ Rychleji",
    targetLabel: "Hledaná hodnota",
    phase: "Fáze",
    targetValue: "Hledaná hodnota",
    expSteps: "Exponential kroky",
    binarySteps: "Binary kroky",
    rangeTitle: "📍 Nalezený rozsah",
    arrayTitle: "📦 Seřazené pole",
    statusTitle: "📌 Co se právě děje?",
    explanationTitle: "🧠 Jak Exponential Search funguje?",
    ready: "Připraveno ke spuštění...",
    resetStatus: "🔄 Nové seřazené pole připraveno.",
    targetStatus: "🎯 Nová hledaná hodnota připravena.",
    phaseExpansion: "Exponential Expansion",
    phaseBinary: "Binary Search",
    phaseDone: "Hotovo",
    checkingFirst: "🔍 Nejprve kontroluji první hodnotu.",
    expanding: "🚀 Zdvojnásobuji index a hledám vhodný rozsah.",
    rangeFound: "📍 Rozsah nalezen. Teď použiji Binary Search pouze uvnitř něj.",
    checkingMiddle: "🎯 Kontroluji prostřední hodnotu",
    targetGreater: "➡️ Hledaná hodnota je větší. Zahazuji levou část rozsahu.",
    targetSmaller: "⬅️ Hledaná hodnota je menší. Zahazuji pravou část rozsahu.",
    match: "✅ Shoda! Hodnota byla nalezena na indexu",
    notFound: "❌ Hodnota nebyla nalezena.",
    speed: "Rychlost animace",
    description: `
      Exponential Search nejprve
      <span class="highlight">rychle najde rozsah</span>,
      kde by se hodnota mohla nacházet.

      <br><br>

      Index se postupně zdvojnásobuje:
      1 → 2 → 4 → 8 → 16.

      <br><br>

      Jakmile je rozsah nalezen,
      algoritmus uvnitř něj spustí Binary Search.
    `
  },

  en: {
    badge: "Algorithm #15",
    subtitle: "Quickly finding a range and then using Binary Search",
    start: "▶ Start",
    reset: "⟳ Reset",
    newTarget: "🎯 New Target",
    slower: "🐢 Slower",
    faster: "⚡ Faster",
    targetLabel: "Target Value",
    phase: "Phase",
    targetValue: "Target Value",
    expSteps: "Expansion Steps",
    binarySteps: "Binary Steps",
    rangeTitle: "📍 Found Range",
    arrayTitle: "📦 Sorted Array",
    statusTitle: "📌 Current Action",
    explanationTitle: "🧠 How does Exponential Search work?",
    ready: "Ready to start...",
    resetStatus: "🔄 New sorted array generated.",
    targetStatus: "🎯 New target value selected.",
    phaseExpansion: "Exponential Expansion",
    phaseBinary: "Binary Search",
    phaseDone: "Done",
    checkingFirst: "🔍 First, checking the first value.",
    expanding: "🚀 Doubling the index to find the right range.",
    rangeFound: "📍 Range found. Now using Binary Search only inside this range.",
    checkingMiddle: "🎯 Checking middle value",
    targetGreater: "➡️ Target is greater. Discarding the left part of the range.",
    targetSmaller: "⬅️ Target is smaller. Discarding the right part of the range.",
    match: "✅ Match! Value found at index",
    notFound: "❌ Value was not found.",
    speed: "Animation speed",
    description: `
      Exponential Search first
      <span class="highlight">quickly finds the range</span>
      where the target may exist.

      <br><br>

      The index grows exponentially:
      1 → 2 → 4 → 8 → 16.

      <br><br>

      Once the range is found,
      Binary Search is performed inside it.
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

  while (set.size < 16) {
    set.add(Math.floor(Math.random() * 90) + 10);
  }

  values = Array.from(set).sort((a, b) => a - b);

  resetState();
  generateTargetFromArray();

  updateStats();
  renderArray();
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

  resetState();
  updateStats();
  renderArray();
}

function resetState() {
  phase = "-";
  expSteps = 0;
  binarySteps = 0;

  expIndex = -1;
  middleIndex = -1;
  foundIndex = -1;
  rangeStart = -1;
  rangeEnd = -1;
  discardedIndexes = [];

  rangeValue.innerText = "-";
}

function updateStats() {
  phaseText.innerText = phase;
  targetValueEl.innerText = targetValue ?? "-";
  expStepsEl.innerText = expSteps;
  binaryStepsEl.innerText = binarySteps;
}

function renderArray() {
  arrayEl.innerHTML = "";

  values.forEach((value, index) => {
    const item = document.createElement("div");
    item.classList.add("array-item");
    item.innerText = value;
    item.dataset.index = `#${index}`;

    if (index === expIndex) {
      item.classList.add("exp");
    }

    if (index >= rangeStart && index <= rangeEnd && rangeStart !== -1) {
      item.classList.add("range");
    }

    if (index === middleIndex) {
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

async function exponentialSearch() {
  if (sorting) return;

  updateTargetFromInput();

  sorting = true;

  phase = t("phaseExpansion");
  updateStats();

  statusText.innerHTML = t("checkingFirst");

  expIndex = 0;
  renderArray();

  await sleep(delay);

  if (values[0] === targetValue) {
    foundIndex = 0;
    statusText.innerHTML = `${t("match")} <b>0</b>.`;
    phase = t("phaseDone");
    updateStats();
    renderArray();
    sorting = false;
    return;
  }

  let i = 1;

  while (i < values.length && values[i] <= targetValue) {
    expIndex = i;
    expSteps++;

    statusText.innerHTML =
      `${t("expanding")} Index: <b>${i}</b>, Value: <b>${values[i]}</b>`;

    updateStats();
    renderArray();

    await sleep(delay);

    i *= 2;
  }

  rangeStart = Math.floor(i / 2);
  rangeEnd = Math.min(i, values.length - 1);

  rangeValue.innerText =
    `#${rangeStart} - #${rangeEnd}`;

  expIndex = -1;

  statusText.innerHTML = t("rangeFound");

  updateStats();
  renderArray();

  await sleep(delay);

  phase = t("phaseBinary");
  updateStats();

  let low = rangeStart;
  let high = rangeEnd;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    middleIndex = mid;
    binarySteps++;

    statusText.innerHTML =
      `${t("checkingMiddle")}: <b>${values[mid]}</b>`;

    updateStats();
    renderArray();

    await sleep(delay);

    if (values[mid] === targetValue) {
      foundIndex = mid;
      middleIndex = -1;

      statusText.innerHTML =
        `${t("match")} <b>${mid}</b>.`;

      phase = t("phaseDone");
      updateStats();
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

    middleIndex = -1;

    updateStats();
    renderArray();

    await sleep(delay);
  }

  phase = t("phaseDone");
  statusText.innerHTML = t("notFound");

  updateStats();
  renderArray();

  sorting = false;
}

startBtn.addEventListener("click", exponentialSearch);

resetBtn.addEventListener("click", () => {
  if (sorting) return;

  generateValues();
  statusText.innerHTML = t("resetStatus");
});

targetBtn.addEventListener("click", () => {
  if (sorting) return;

  generateTargetFromArray();
  resetState();

  updateStats();
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