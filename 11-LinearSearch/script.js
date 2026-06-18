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
const currentIndexEl = document.getElementById("currentIndex");
const comparisonsCountEl = document.getElementById("comparisonsCount");

let values = [];
let targetValue = null;
let delay = 500;
let sorting = false;
let currentLang = "cs";

let comparisons = 0;
let currentIndex = "-";
let checkedIndexes = [];
let foundIndex = -1;

const translations = {
  cs: {
    badge: "Algoritmus #11",
    subtitle: "Jednoduché vyhledávání hodnoty krok za krokem",
    start: "▶ Start",
    reset: "⟳ Reset",
    newTarget: "🎯 Nový cíl",
    slower: "🐢 Pomaleji",
    faster: "⚡ Rychleji",
    targetLabel: "Hledaná hodnota",
    targetValue: "Hledaná hodnota",
    currentIndex: "Aktuální index",
    comparisons: "Porovnání",
    arrayTitle: "📦 Pole hodnot",
    statusTitle: "📌 Co se právě děje?",
    explanationTitle: "🧠 Jak Linear Search funguje?",
    ready: "Připraveno ke spuštění...",
    resetStatus: "🔄 Nové pole připraveno.",
    targetStatus: "🎯 Nová hledaná hodnota připravena.",
    checking: "🔍 Kontroluji hodnotu",
    match: "✅ Shoda! Hodnota byla nalezena na indexu",
    noMatch: "❌ Není to hledaná hodnota.",
    notFound: "❌ Hodnota nebyla v poli nalezena.",
    speed: "Rychlost animace",
    description: `
      Linear Search prochází prvky
      <span class="highlight">jeden po druhém</span>.

      <br><br>

      Každou hodnotu porovná s hledanou hodnotou.

      <br><br>

      Je velmi jednoduchý, ale u velkých dat může být pomalý.
    `
  },

  en: {
    badge: "Algorithm #11",
    subtitle: "Simple step-by-step value searching",
    start: "▶ Start",
    reset: "⟳ Reset",
    newTarget: "🎯 New Target",
    slower: "🐢 Slower",
    faster: "⚡ Faster",
    targetLabel: "Target Value",
    targetValue: "Target Value",
    currentIndex: "Current Index",
    comparisons: "Comparisons",
    arrayTitle: "📦 Value Array",
    statusTitle: "📌 Current Action",
    explanationTitle: "🧠 How does Linear Search work?",
    ready: "Ready to start...",
    resetStatus: "🔄 New array generated.",
    targetStatus: "🎯 New target value selected.",
    checking: "🔍 Checking value",
    match: "✅ Match! Value found at index",
    noMatch: "❌ Not the target value.",
    notFound: "❌ Value was not found in the array.",
    speed: "Animation speed",
    description: `
      Linear Search checks elements
      <span class="highlight">one by one</span>.

      <br><br>

      Each value is compared with the target value.

      <br><br>

      It is very simple, but it can be slow for large datasets.
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
  values = [];

  checkedIndexes = [];
  foundIndex = -1;
  comparisons = 0;
  currentIndex = "-";

  for (let i = 0; i < 12; i++) {
    values.push(Math.floor(Math.random() * 90) + 10);
  }

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

  checkedIndexes = [];
  foundIndex = -1;
  comparisons = 0;
  currentIndex = "-";

  updateStats();
  renderArray();
}

function updateStats() {
  targetValueEl.innerText = targetValue ?? "-";
  currentIndexEl.innerText = currentIndex;
  comparisonsCountEl.innerText = comparisons;
}

function renderArray(activeIndex = -1) {
  arrayEl.innerHTML = "";

  values.forEach((value, index) => {
    const item = document.createElement("div");
    item.classList.add("array-item");
    item.innerText = value;
    item.dataset.index = `#${index}`;

    if (index === activeIndex) {
      item.classList.add("active");
    }

    if (checkedIndexes.includes(index)) {
      item.classList.add("checked");
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

async function linearSearch() {
  if (sorting) return;

  updateTargetFromInput();

  sorting = true;

  for (let i = 0; i < values.length; i++) {
    currentIndex = i;
    comparisons++;

    statusText.innerHTML =
      `${t("checking")} <b>${values[i]}</b>`;

    updateStats();
    renderArray(i);

    await sleep(delay);

    if (values[i] === targetValue) {
      foundIndex = i;

      statusText.innerHTML =
        `${t("match")} <b>${i}</b>.`;

      renderArray(i);

      sorting = false;
      return;
    }

    checkedIndexes.push(i);

    statusText.innerHTML = t("noMatch");

    renderArray();

    await sleep(delay);
  }

  currentIndex = "-";
  updateStats();

  statusText.innerHTML = t("notFound");

  sorting = false;
}

startBtn.addEventListener("click", linearSearch);

resetBtn.addEventListener("click", () => {
  if (sorting) return;

  generateValues();
  statusText.innerHTML = t("resetStatus");
});

targetBtn.addEventListener("click", () => {
  if (sorting) return;

  generateTargetFromArray();

  checkedIndexes = [];
  foundIndex = -1;
  comparisons = 0;
  currentIndex = "-";

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