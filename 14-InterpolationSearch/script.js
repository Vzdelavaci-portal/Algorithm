const arrayEl = document.getElementById("array");
const pointer = document.getElementById("pointer");

const statusText = document.getElementById("statusText");
const descriptionText = document.getElementById("descriptionText");
const formulaText = document.getElementById("formulaText");

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const targetBtn = document.getElementById("targetBtn");
const slowBtn = document.getElementById("slowBtn");
const fastBtn = document.getElementById("fastBtn");

const czBtn = document.getElementById("czBtn");
const enBtn = document.getElementById("enBtn");

const targetInput = document.getElementById("targetInput");
const targetValueEl = document.getElementById("targetValue");
const estimatedPositionEl = document.getElementById("estimatedPosition");
const comparisonsCountEl = document.getElementById("comparisonsCount");
const remainingCountEl = document.getElementById("remainingCount");
const spaceFill = document.getElementById("spaceFill");

const estimateTarget = document.getElementById("estimateTarget");
const estimateLow = document.getElementById("estimateLow");
const estimateHigh = document.getElementById("estimateHigh");
const estimateResult = document.getElementById("estimateResult");
const linePointer = document.getElementById("linePointer");

let values = [];
let targetValue = null;
let delay = 850;
let sorting = false;
let currentLang = "cs";

let comparisons = 0;
let estimatedPosition = "-";
let remaining = "-";
let discardedIndexes = [];
let foundIndex = -1;
let currentLow = 0;
let currentHigh = 0;
let currentPos = -1;

const translations = {
  cs: {
    badge: "Algoritmus #14",
    subtitle: "Vyhledávání pomocí odhadu pozice v seřazeném poli",
    start: "▶ Start",
    reset: "⟳ Reset",
    newTarget: "🎯 Nový cíl",
    slower: "🐢 Pomaleji",
    faster: "⚡ Rychleji",
    targetLabel: "Hledaná hodnota",
    targetValue: "Hledaná hodnota",
    estimatedPosition: "Odhadnutá pozice",
    comparisons: "Porovnání",
    remaining: "Zbývá hodnot",
    spaceLabel: "Search Space",
    arrayTitle: "📦 Seřazené pole",
    estimateTitle: "🧮 Jak algoritmus odhaduje pozici?",
    statusTitle: "📌 Co se právě děje?",
    explanationTitle: "🧠 Jak Interpolation Search funguje?",
    ready: "Připraveno ke spuštění...",
    resetStatus: "🔄 Nové seřazené pole připraveno.",
    targetStatus: "🎯 Nová hledaná hodnota připravena.",
    showRange: "📦 Nejprve označím aktuální oblast hledání.",
    calculating: "🧮 Počítám odhadovanou pozici podle hodnot low, high a target.",
    estimating: "📍 Odhadovaná pozice je",
    movePointer: "📍 Přesouvám ukazatel na odhadnutou pozici.",
    checking: "🔍 Kontroluji hodnotu na odhadnuté pozici",
    decision: "🤔 Rozhoduji, kterou část pole zahodit.",
    targetGreater: "➡️ Hledaná hodnota je větší. Posouvám spodní hranici.",
    targetSmaller: "⬅️ Hledaná hodnota je menší. Posouvám horní hranici.",
    match: "✅ Shoda! Hodnota byla nalezena na indexu",
    notFound: "❌ Hodnota nebyla nalezena.",
    speed: "Rychlost animace",
    waiting: "Čekám na výpočet...",
    noValid: "Nezbyla žádná platná pozice.",
    description: `
      Interpolation Search funguje nad
      <span class="highlight">seřazenými a rovnoměrně rozloženými daty</span>.

      <br><br>

      Místo kontroly středu odhadne,
      kde by hledaná hodnota pravděpodobně mohla být.

      <br><br>

      Pokud jsou data vhodná, může být rychlejší než Binary Search.
    `
  },

  en: {
    badge: "Algorithm #14",
    subtitle: "Searching by estimating the position in a sorted array",
    start: "▶ Start",
    reset: "⟳ Reset",
    newTarget: "🎯 New Target",
    slower: "🐢 Slower",
    faster: "⚡ Faster",
    targetLabel: "Target Value",
    targetValue: "Target Value",
    estimatedPosition: "Estimated Position",
    comparisons: "Comparisons",
    remaining: "Remaining Values",
    spaceLabel: "Search Space",
    arrayTitle: "📦 Sorted Array",
    estimateTitle: "🧮 How does the algorithm estimate the position?",
    statusTitle: "📌 Current Action",
    explanationTitle: "🧠 How does Interpolation Search work?",
    ready: "Ready to start...",
    resetStatus: "🔄 New sorted array generated.",
    targetStatus: "🎯 New target value selected.",
    showRange: "📦 First, I highlight the current search range.",
    calculating: "🧮 Calculating estimated position using low, high and target values.",
    estimating: "📍 Estimated position is",
    movePointer: "📍 Moving the pointer to the estimated position.",
    checking: "🔍 Checking value at estimated position",
    decision: "🤔 Deciding which part of the array can be discarded.",
    targetGreater: "➡️ Target is greater. Moving the lower boundary.",
    targetSmaller: "⬅️ Target is smaller. Moving the upper boundary.",
    match: "✅ Match! Value found at index",
    notFound: "❌ Value was not found.",
    speed: "Animation speed",
    waiting: "Waiting for calculation...",
    noValid: "No valid position left.",
    description: `
      Interpolation Search works on
      <span class="highlight">sorted and uniformly distributed data</span>.

      <br><br>

      Instead of checking the middle, it estimates
      where the target value is likely to be.

      <br><br>

      On suitable data, it can be faster than Binary Search.
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
    formulaText.innerHTML = t("waiting");
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
  values = [];

  const start = Math.floor(Math.random() * 10) + 5;

  for (let i = 0; i < 14; i++) {
    values.push(start + i * 7);
  }

  resetSearchState();
  generateTargetFromArray();

  updateStats();
  updateEstimatePanel();
  renderArray();
  movePointer(-1);
  moveLinePointer(0, values.length - 1, 0);
}

function resetSearchState() {
  comparisons = 0;
  estimatedPosition = "-";
  remaining = values.length;
  discardedIndexes = [];
  foundIndex = -1;
  currentLow = 0;
  currentHigh = values.length - 1;
  currentPos = -1;
  formulaText.innerHTML = t("waiting");
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
  updateEstimatePanel();
  renderArray();
  movePointer(-1);
  moveLinePointer(0, values.length - 1, 0);
}

function updateStats() {
  targetValueEl.innerText = targetValue ?? "-";
  estimatedPositionEl.innerText = estimatedPosition;
  comparisonsCountEl.innerText = comparisons;
  remainingCountEl.innerText = remaining;
}

function updateSearchSpace() {
  const activeCount = Math.max(0, currentHigh - currentLow + 1);
  const percent = (activeCount / values.length) * 100;
  spaceFill.style.width = `${percent}%`;
}

function updateEstimatePanel(low = "-", high = "-", pos = "-") {
  estimateTarget.innerText = targetValue ?? "-";
  estimateLow.innerText = low === "-" ? "-" : values[low];
  estimateHigh.innerText = high === "-" ? "-" : values[high];
  estimateResult.innerText = pos;
}

function moveLinePointer(low, high, pos) {
  if (pos === "-" || low === high) {
    linePointer.style.left = "0%";
    return;
  }

  const percent = ((pos - low) / (high - low)) * 100;
  linePointer.style.left = `${Math.max(0, Math.min(100, percent))}%`;
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

    if (index === currentPos) {
      item.classList.add("estimate");
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

function movePointer(index) {
  if (index < 0) {
    pointer.style.opacity = "0";
    return;
  }

  const items = arrayEl.querySelectorAll(".array-item");
  const item = items[index];

  if (!item) return;

  const wrapperRect = arrayEl.getBoundingClientRect();
  const itemRect = item.getBoundingClientRect();

  const center = itemRect.left - wrapperRect.left + itemRect.width / 2;

  pointer.style.opacity = "1";
  pointer.style.left = `${center}px`;
}

function markDiscarded(from, to) {
  for (let i = from; i <= to; i++) {
    if (!discardedIndexes.includes(i)) {
      discardedIndexes.push(i);
    }
  }
}

function calculatePosition(low, high) {
  if (values[high] === values[low]) {
    return low;
  }

  return Math.floor(
    low +
    ((targetValue - values[low]) * (high - low)) /
    (values[high] - values[low])
  );
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function interpolationSearch() {
  if (sorting) return;

  updateTargetFromInput();

  sorting = true;

  let low = 0;
  let high = values.length - 1;

  currentLow = low;
  currentHigh = high;

  updateEstimatePanel();
  moveLinePointer(0, values.length - 1, 0);

  while (
    low <= high &&
    targetValue >= values[low] &&
    targetValue <= values[high]
  ) {
    currentLow = low;
    currentHigh = high;
    currentPos = -1;
    remaining = high - low + 1;

    statusText.innerHTML = t("showRange");

    updateStats();
    updateSearchSpace();
    renderArray();
    movePointer(-1);

    await sleep(delay);

    const pos = calculatePosition(low, high);

    if (pos < low || pos > high) {
      break;
    }

    statusText.innerHTML = t("calculating");

    formulaText.innerHTML =
      `Target <b>${targetValue}</b> is between <b>${values[low]}</b> and <b>${values[high]}</b>.`;

    updateEstimatePanel(low, high, "-");

    await sleep(delay);

    estimatedPosition = pos;
    currentPos = pos;
    comparisons++;

    updateEstimatePanel(low, high, pos);
    moveLinePointer(low, high, pos);

    formulaText.innerHTML =
      `Estimated position: <b>${pos}</b>`;

    statusText.innerHTML =
      `${t("estimating")}: <b>${pos}</b>`;

    updateStats();
    renderArray();

    await sleep(delay);

    statusText.innerHTML = t("movePointer");

    movePointer(pos);

    await sleep(delay);

    statusText.innerHTML =
      `${t("checking")}: <b>${values[pos]}</b>`;

    renderArray();

    await sleep(delay);

    if (values[pos] === targetValue) {
      foundIndex = pos;

      statusText.innerHTML =
        `${t("match")} <b>${pos}</b>.`;

      formulaText.innerHTML =
        `✅ ${targetValue} = ${values[pos]}`;

      renderArray();
      movePointer(pos);

      sorting = false;
      return;
    }

    statusText.innerHTML = t("decision");

    await sleep(delay);

    if (values[pos] < targetValue) {
      statusText.innerHTML = t("targetGreater");

      markDiscarded(low, pos);

      low = pos + 1;
    } else {
      statusText.innerHTML = t("targetSmaller");

      markDiscarded(pos, high);

      high = pos - 1;
    }

    currentLow = low;
    currentHigh = high;
    currentPos = -1;
    remaining = Math.max(0, high - low + 1);

    updateStats();
    updateSearchSpace();
    renderArray();
    movePointer(-1);

    await sleep(delay);
  }

  currentPos = -1;
  estimatedPosition = "-";
  remaining = 0;

  updateStats();
  updateSearchSpace();
  renderArray();
  movePointer(-1);

  formulaText.innerHTML = t("noValid");
  statusText.innerHTML = t("notFound");

  sorting = false;
}

startBtn.addEventListener("click", interpolationSearch);

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
  updateEstimatePanel();
  renderArray();
  movePointer(-1);
  moveLinePointer(0, values.length - 1, 0);

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