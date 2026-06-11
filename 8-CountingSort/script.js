const inputArray = document.getElementById("inputArray");
const countArray = document.getElementById("countArray");
const outputArray = document.getElementById("outputArray");

const statusText = document.getElementById("statusText");
const descriptionText = document.getElementById("descriptionText");

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const slowBtn = document.getElementById("slowBtn");
const fastBtn = document.getElementById("fastBtn");

const czBtn = document.getElementById("czBtn");
const enBtn = document.getElementById("enBtn");

const currentValueEl = document.getElementById("currentValue");
const countUpdatesEl = document.getElementById("countUpdates");
const outputValuesEl = document.getElementById("outputValues");

let values = [];
let counts = [];
let output = [];

let maxValue = 9;
let delay = 500;
let sorting = false;
let currentLang = "cs";

let countUpdates = 0;
let outputValues = 0;

const translations = {
  cs: {
    badge: "Algoritmus #8",
    subtitle: "Třídění pomocí počítání výskytů hodnot",
    start: "▶ Start",
    reset: "⟳ Reset",
    slower: "🐢 Pomaleji",
    faster: "⚡ Rychleji",
    currentValue: "Aktuální hodnota",
    countUpdates: "Aktualizace počtů",
    outputValues: "Výstupní hodnoty",
    inputTitle: "📥 Vstupní pole",
    countTitle: "🧮 Počítací pole",
    outputTitle: "📤 Výstupní pole",
    statusTitle: "📌 Co se právě děje?",
    explanationTitle: "🧠 Jak Counting Sort funguje?",
    ready: "Připraveno ke spuštění...",
    resetStatus: "🔄 Nové hodnoty připraveny.",
    counting: "🧮 Počítám výskyt hodnoty",
    increase: "Zvyšuji count",
    buildingOutput: "📤 Vytvářím výstupní pole z počtů",
    placing: "Vkládám hodnotu do výstupního pole",
    done: "✅ Hotovo! Pole je seřazené.",
    speed: "Rychlost animace",
    description: `
      Counting Sort <span class="highlight">neporovnává hodnoty</span>.

      <br><br>

      Místo toho spočítá, kolikrát se každé číslo vyskytuje.

      <br><br>

      Poté vytvoří seřazené pole na základě těchto počtů.
    `
  },

  en: {
    badge: "Algorithm #8",
    subtitle: "Sorting by counting value frequencies",
    start: "▶ Start",
    reset: "⟳ Reset",
    slower: "🐢 Slower",
    faster: "⚡ Faster",
    currentValue: "Current Value",
    countUpdates: "Count Updates",
    outputValues: "Output Values",
    inputTitle: "📥 Input Array",
    countTitle: "🧮 Count Array",
    outputTitle: "📤 Output Array",
    statusTitle: "📌 Current Action",
    explanationTitle: "🧠 How does Counting Sort work?",
    ready: "Ready to start...",
    resetStatus: "🔄 New values generated.",
    counting: "🧮 Counting occurrence of value",
    increase: "Increasing count",
    buildingOutput: "📤 Building output array from counts",
    placing: "Placing value into output array",
    done: "✅ Done! The array is sorted.",
    speed: "Animation speed",
    description: `
      Counting Sort <span class="highlight">does not compare values</span>.

      <br><br>

      Instead, it counts how many times each number appears.

      <br><br>

      Then it builds the sorted array based on those counts.
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
  output = [];
  counts = Array(maxValue + 1).fill(0);

  countUpdates = 0;
  outputValues = 0;

  for (let i = 0; i < 12; i++) {
    values.push(Math.floor(Math.random() * (maxValue + 1)));
  }

  updateStats("-");
  renderAll();
}

function updateStats(currentValue) {
  currentValueEl.innerText = currentValue;
  countUpdatesEl.innerText = countUpdates;
  outputValuesEl.innerText = outputValues;
}

function renderAll(activeInput = -1, activeCount = -1, activeOutput = -1) {
  renderInput(activeInput);
  renderCounts(activeCount);
  renderOutput(activeOutput);
}

function renderInput(activeIndex = -1) {
  inputArray.innerHTML = "";

  values.forEach((value, index) => {
    const item = document.createElement("div");
    item.classList.add("array-item");
    item.innerText = value;

    if (index === activeIndex) {
      item.classList.add("active");
    }

    inputArray.appendChild(item);
  });
}

function renderCounts(activeIndex = -1) {
  countArray.innerHTML = "";

  counts.forEach((count, index) => {
    const box = document.createElement("div");
    box.classList.add("count-box");

    if (index === activeIndex) {
      box.classList.add("active");
    }

    const countIndex = document.createElement("div");
    countIndex.classList.add("count-index");
    countIndex.innerText = `value ${index}`;

    const countValue = document.createElement("div");
    countValue.classList.add("count-value");
    countValue.innerText = count;

    box.appendChild(countIndex);
    box.appendChild(countValue);

    countArray.appendChild(box);
  });
}

function renderOutput(activeIndex = -1) {
  outputArray.innerHTML = "";

  output.forEach((value, index) => {
    const item = document.createElement("div");
    item.classList.add("array-item");
    item.innerText = value;

    if (index === activeIndex) {
      item.classList.add("active");
    } else {
      item.classList.add("done");
    }

    outputArray.appendChild(item);
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function countingSort() {
  if (sorting) return;

  sorting = true;

  counts = Array(maxValue + 1).fill(0);
  output = [];

  countUpdates = 0;
  outputValues = 0;

  updateStats("-");
  renderAll();

  for (let i = 0; i < values.length; i++) {
    const value = values[i];

    statusText.innerHTML =
      `${t("counting")}: <b>${value}</b>`;

    updateStats(value);
    renderAll(i, value);

    await sleep(delay);

    counts[value]++;
    countUpdates++;

    statusText.innerHTML =
      `${t("increase")} [${value}] → <b>${counts[value]}</b>`;

    updateStats(value);
    renderAll(i, value);

    await sleep(delay);
  }

  statusText.innerHTML = t("buildingOutput");
  renderAll();

  await sleep(delay);

  for (let value = 0; value < counts.length; value++) {
    while (counts[value] > 0) {
      output.push(value);
      counts[value]--;
      outputValues++;

      statusText.innerHTML =
        `${t("placing")}: <b>${value}</b>`;

      updateStats(value);
      renderAll(-1, value, output.length - 1);

      await sleep(delay);
    }
  }

  updateStats("-");
  renderAll();

  statusText.innerHTML = t("done");

  sorting = false;
}

startBtn.addEventListener("click", countingSort);

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