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
const jumpSizeEl = document.getElementById("jumpSize");
const jumpsCountEl = document.getElementById("jumpsCount");
const linearChecksCountEl = document.getElementById("linearChecksCount");

let values = [];
let targetValue = null;
let delay = 550;
let sorting = false;
let currentLang = "cs";

let jumpSize = 0;
let jumps = 0;
let linearChecks = 0;

let skippedIndexes = [];
let blockIndexes = [];
let jumpIndex = -1;
let scanIndex = -1;
let foundIndex = -1;

const translations = {
  cs: {
    badge: "Algoritmus #13",
    subtitle: "Vyhledávání pomocí skoků v seřazeném poli",
    start: "▶ Start",
    reset: "⟳ Reset",
    newTarget: "🎯 Nový cíl",
    slower: "🐢 Pomaleji",
    faster: "⚡ Rychleji",
    targetLabel: "Hledaná hodnota",
    targetValue: "Hledaná hodnota",
    jumpSize: "Velikost skoku",
    jumps: "Skoky",
    linearChecks: "Lineární kontroly",
    arrayTitle: "📦 Seřazené pole",
    statusTitle: "📌 Co se právě děje?",
    explanationTitle: "🧠 Jak Jump Search funguje?",
    ready: "Připraveno ke spuštění...",
    resetStatus: "🔄 Nové seřazené pole připraveno.",
    targetStatus: "🎯 Nová hledaná hodnota připravena.",
    jumping: "🦘 Skáču na konec bloku",
    targetBigger: "➡️ Hledaná hodnota je větší, pokračuji dalším skokem.",
    blockFound: "🎯 Hodnota může být v tomto bloku.",
    scanning: "🔍 Procházím blok lineárně",
    match: "✅ Shoda! Hodnota byla nalezena na indexu",
    noMatch: "❌ Tato hodnota neodpovídá cíli.",
    notFound: "❌ Hodnota nebyla nalezena.",
    speed: "Rychlost animace",
    description: `
      Jump Search funguje nad
      <span class="highlight">seřazeným polem</span>.

      <br><br>

      Nejprve skáče po blocích o pevné velikosti.

      <br><br>

      Jakmile najde blok, kde by hodnota mohla být,
      provede krátké lineární hledání uvnitř tohoto bloku.
    `
  },

  en: {
    badge: "Algorithm #13",
    subtitle: "Searching by jumping through a sorted array",
    start: "▶ Start",
    reset: "⟳ Reset",
    newTarget: "🎯 New Target",
    slower: "🐢 Slower",
    faster: "⚡ Faster",
    targetLabel: "Target Value",
    targetValue: "Target Value",
    jumpSize: "Jump Size",
    jumps: "Jumps",
    linearChecks: "Linear Checks",
    arrayTitle: "📦 Sorted Array",
    statusTitle: "📌 Current Action",
    explanationTitle: "🧠 How does Jump Search work?",
    ready: "Ready to start...",
    resetStatus: "🔄 New sorted array generated.",
    targetStatus: "🎯 New target value selected.",
    jumping: "🦘 Jumping to the end of the block",
    targetBigger: "➡️ Target is greater, jumping to the next block.",
    blockFound: "🎯 The target may be inside this block.",
    scanning: "🔍 Scanning the block linearly",
    match: "✅ Match! Value found at index",
    noMatch: "❌ This value does not match the target.",
    notFound: "❌ Value was not found.",
    speed: "Animation speed",
    description: `
      Jump Search works on a
      <span class="highlight">sorted array</span>.

      <br><br>

      First, it jumps through fixed-size blocks.

      <br><br>

      Once it finds a block where the target may exist,
      it performs a short linear search inside that block.
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
  jumpSize = Math.floor(Math.sqrt(values.length));

  resetSearchState();
  generateTargetFromArray();

  updateStats();
  renderArray();
}

function resetSearchState() {
  jumps = 0;
  linearChecks = 0;

  skippedIndexes = [];
  blockIndexes = [];
  jumpIndex = -1;
  scanIndex = -1;
  foundIndex = -1;
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
  renderArray();
}

function updateStats() {
  targetValueEl.innerText = targetValue ?? "-";
  jumpSizeEl.innerText = jumpSize || "-";
  jumpsCountEl.innerText = jumps;
  linearChecksCountEl.innerText = linearChecks;
}

function getRange(start, end) {
  const result = [];

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}

function markSkipped(start, end) {
  for (let i = start; i <= end; i++) {
    if (!skippedIndexes.includes(i)) {
      skippedIndexes.push(i);
    }
  }
}

function renderArray() {
  arrayEl.innerHTML = "";

  values.forEach((value, index) => {
    const item = document.createElement("div");
    item.classList.add("array-item");
    item.innerText = value;
    item.dataset.index = `#${index}`;

    if (blockIndexes.includes(index)) {
      item.classList.add("block");
    }

    if (index === jumpIndex) {
      item.classList.add("jump");
    }

    if (index === scanIndex) {
      item.classList.add("scan");
    }

    if (skippedIndexes.includes(index)) {
      item.classList.add("skipped");
    }

    if (index === foundIndex) {
      item.classList.add("found");
    }

    arrayEl.appendChild(item);
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function jumpSearch() {
  if (sorting) return;

  updateTargetFromInput();

  sorting = true;

  let prev = 0;
  let step = jumpSize;
  const n = values.length;

  blockIndexes = getRange(prev, Math.min(step, n) - 1);

  while (prev < n && values[Math.min(step, n) - 1] < targetValue) {
    const endIndex = Math.min(step, n) - 1;

    jumpIndex = endIndex;
    jumps++;

    statusText.innerHTML =
      `${t("jumping")}: <b>${values[endIndex]}</b>`;

    updateStats();
    renderArray();

    await sleep(delay);

    statusText.innerHTML = t("targetBigger");

    markSkipped(prev, endIndex);

    prev = step;
    step += jumpSize;

    if (prev >= n) {
      statusText.innerHTML = t("notFound");
      sorting = false;
      return;
    }

    blockIndexes = getRange(prev, Math.min(step, n) - 1);
    jumpIndex = -1;

    renderArray();

    await sleep(delay);
  }

  blockIndexes = getRange(prev, Math.min(step, n) - 1);
  jumpIndex = Math.min(step, n) - 1;

  statusText.innerHTML = t("blockFound");

  renderArray();

  await sleep(delay);

  for (let i = prev; i < Math.min(step, n); i++) {
    scanIndex = i;
    linearChecks++;

    statusText.innerHTML =
      `${t("scanning")}: <b>${values[i]}</b>`;

    updateStats();
    renderArray();

    await sleep(delay);

    if (values[i] === targetValue) {
      foundIndex = i;

      statusText.innerHTML =
        `${t("match")} <b>${i}</b>.`;

      renderArray();

      sorting = false;
      return;
    }

    statusText.innerHTML = t("noMatch");

    await sleep(delay);
  }

  scanIndex = -1;
  jumpIndex = -1;

  statusText.innerHTML = t("notFound");

  renderArray();

  sorting = false;
}

startBtn.addEventListener("click", jumpSearch);

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