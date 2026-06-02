const visualization = document.getElementById("visualization");
const statusText = document.getElementById("statusText");
const descriptionText = document.getElementById("descriptionText");

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const slowBtn = document.getElementById("slowBtn");
const fastBtn = document.getElementById("fastBtn");

const czBtn = document.getElementById("czBtn");
const enBtn = document.getElementById("enBtn");

const comparisonsCount = document.getElementById("comparisonsCount");
const swapsCount = document.getElementById("swapsCount");
const pivotValue = document.getElementById("pivotValue");

let values = [];
let delay = 400;
let sorting = false;
let currentLang = "cs";

let comparisons = 0;
let swaps = 0;
let sortedIndexes = [];

const translations = {
  cs: {
    badge: "Algoritmus #4",
    subtitle: "Rychlé třídění pomocí pivotu a rozdělení pole",
    start: "▶ Start",
    reset: "⟳ Reset",
    slower: "🐢 Pomaleji",
    faster: "⚡ Rychleji",
    comparisons: "Porovnání",
    swaps: "Prohození",
    pivot: "Pivot",
    statusTitle: "📌 Co se právě děje?",
    explanationTitle: "🧠 Jak Quick Sort funguje?",
    ready: "Připraveno ke spuštění...",
    resetStatus: "🔄 Nové náhodné hodnoty připraveny.",
    choosePivot: "🟪 Vybírám pivot",
    comparing: "🔍 Porovnávám",
    withPivot: "s pivotem",
    swapping: "🔄 Prohazuji",
    partitionDone: "✅ Část pole byla rozdělena podle pivotu.",
    done: "✅ Hotovo! Pole je seřazené.",
    speed: "Rychlost animace",
    and: "a",
    description: `
      Quick Sort vybere <span class="highlight">pivot</span>
      a rozdělí pole na dvě části.

      <br><br>

      Menší hodnoty přesune vlevo,
      větší hodnoty vpravo.

      <br><br>

      Poté stejný postup opakuje rekurzivně
      pro obě části pole.
    `
  },

  en: {
    badge: "Algorithm #4",
    subtitle: "Fast sorting using a pivot and partitioning",
    start: "▶ Start",
    reset: "⟳ Reset",
    slower: "🐢 Slower",
    faster: "⚡ Faster",
    comparisons: "Comparisons",
    swaps: "Swaps",
    pivot: "Pivot",
    statusTitle: "📌 Current Action",
    explanationTitle: "🧠 How does Quick Sort work?",
    ready: "Ready to start...",
    resetStatus: "🔄 New random values generated.",
    choosePivot: "🟪 Choosing pivot",
    comparing: "🔍 Comparing",
    withPivot: "with pivot",
    swapping: "🔄 Swapping",
    partitionDone: "✅ This part was partitioned around the pivot.",
    done: "✅ Done! The array is sorted.",
    speed: "Animation speed",
    and: "and",
    description: `
      Quick Sort selects a <span class="highlight">pivot</span>
      and partitions the array into two parts.

      <br><br>

      Smaller values move to the left,
      larger values move to the right.

      <br><br>

      Then the same process is repeated recursively
      for both parts of the array.
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
  statusText.innerHTML = t("ready");
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
  sortedIndexes = [];
  comparisons = 0;
  swaps = 0;

  for (let i = 0; i < 15; i++) {
    values.push(Math.floor(Math.random() * 300) + 40);
  }

  updateStats("-");
  renderBars();
}

function updateStats(pivot = "-") {
  comparisonsCount.innerText = comparisons;
  swapsCount.innerText = swaps;
  pivotValue.innerText = pivot;
}

function renderBars(active = -1, pivot = -1, swapA = -1, swapB = -1) {
  visualization.innerHTML = "";

  values.forEach((value, index) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");

    if (index === active) {
      bar.classList.add("active");
    }

    if (index === pivot) {
      bar.classList.add("pivot");
    }

    if (index === swapA || index === swapB) {
      bar.classList.add("swap");
    }

    if (sortedIndexes.includes(index)) {
      bar.classList.add("sorted");
    }

    bar.style.height = `${value}px`;

    const label = document.createElement("span");
    label.innerText = value;

    bar.appendChild(label);
    visualization.appendChild(bar);
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function partition(low, high) {
  const pivot = values[high];
  let i = low - 1;

  pivotValue.innerText = pivot;

  statusText.innerHTML = `${t("choosePivot")}: <b>${pivot}</b>`;
  renderBars(-1, high);
  await sleep(delay);

  for (let j = low; j < high; j++) {
    comparisons++;

    statusText.innerHTML =
      `${t("comparing")} <b>${values[j]}</b> ${t("withPivot")} <b>${pivot}</b>`;

    updateStats(pivot);
    renderBars(j, high);

    await sleep(delay);

    if (values[j] < pivot) {
      i++;

      statusText.innerHTML =
        `${t("swapping")} <b>${values[i]}</b> ${t("and")} <b>${values[j]}</b>`;

      [values[i], values[j]] = [values[j], values[i]];
      swaps++;

      updateStats(pivot);
      renderBars(-1, high, i, j);

      await sleep(delay);
    }
  }

  statusText.innerHTML =
    `${t("swapping")} <b>${values[i + 1]}</b> ${t("and")} <b>${values[high]}</b>`;

  [values[i + 1], values[high]] = [values[high], values[i + 1]];
  swaps++;

  updateStats(pivot);
  renderBars(-1, i + 1, i + 1, high);

  await sleep(delay);

  sortedIndexes.push(i + 1);

  statusText.innerHTML = t("partitionDone");
  renderBars(-1, i + 1);

  await sleep(delay);

  return i + 1;
}

async function quickSort(low, high) {
  if (low < high) {
    const pivotIndex = await partition(low, high);

    await quickSort(low, pivotIndex - 1);
    await quickSort(pivotIndex + 1, high);
  } else if (low === high) {
    if (!sortedIndexes.includes(low)) {
      sortedIndexes.push(low);
      renderBars();
      await sleep(delay / 2);
    }
  }
}

async function startQuickSort() {
  if (sorting) return;

  sorting = true;
  sortedIndexes = [];
  comparisons = 0;
  swaps = 0;

  updateStats("-");

  await quickSort(0, values.length - 1);

  sortedIndexes = Array.from({ length: values.length }, (_, index) => index);

  renderBars();
  updateStats("-");
  statusText.innerHTML = t("done");

  sorting = false;
}

startBtn.addEventListener("click", startQuickSort);

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