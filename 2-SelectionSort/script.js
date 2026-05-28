const visualization = document.getElementById("visualization");
const statusText = document.getElementById("statusText");
const descriptionText = document.getElementById("descriptionText");

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const slowBtn = document.getElementById("slowBtn");
const fastBtn = document.getElementById("fastBtn");

const czBtn = document.getElementById("czBtn");
const enBtn = document.getElementById("enBtn");

let values = [];
let delay = 400;
let sorting = false;
let currentLang = "cs";

const translations = {
  cs: {
    badge: "Algoritmus #2",
    subtitle: "Najdi nejmenší hodnotu a dej ji na správné místo",
    start: "▶ Start",
    reset: "⟳ Reset",
    slower: "🐢 Pomaleji",
    faster: "⚡ Rychleji",
    statusTitle: "📌 Co se právě děje?",
    explanationTitle: "🧠 Jak Selection Sort funguje?",
    ready: "Připraveno ke spuštění...",
    resetStatus: "🔄 Nové náhodné hodnoty připraveny.",
    comparing: "🔍 Porovnávám",
    withMinimum: "s aktuálním minimem",
    newMinimum: "🎯 Nové minimum nalezeno:",
    swapping: "🔄 Prohazuji",
    and: "a",
    done: "✅ Hotovo! Pole je seřazené.",
    speed: "Rychlost animace",
    description: `
      Selection Sort hledá
      <span class="highlight">nejmenší hodnotu</span>
      v neseřazené části pole.

      <br><br>

      Potom ji prohodí na správnou pozici.

      <br><br>

      Seřazená část postupně roste zleva doprava.
    `
  },

  en: {
    badge: "Algorithm #2",
    subtitle: "Find the smallest value and place it correctly",
    start: "▶ Start",
    reset: "⟳ Reset",
    slower: "🐢 Slower",
    faster: "⚡ Faster",
    statusTitle: "📌 Current Action",
    explanationTitle: "🧠 How does Selection Sort work?",
    ready: "Ready to start...",
    resetStatus: "🔄 New random values generated.",
    comparing: "🔍 Comparing",
    withMinimum: "with current minimum",
    newMinimum: "🎯 New minimum found:",
    swapping: "🔄 Swapping",
    and: "and",
    done: "✅ Done! The array is sorted.",
    speed: "Animation speed",
    description: `
      Selection Sort searches for the
      <span class="highlight">smallest value</span>
      in the unsorted part of the array.

      <br><br>

      Then it swaps that value into the correct position.

      <br><br>

      The sorted part grows step by step from left to right.
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

  for (let i = 0; i < 15; i++) {
    values.push(Math.floor(Math.random() * 300) + 40);
  }

  renderBars();
}

function renderBars(active = -1, minimum = -1, sorted = []) {
  visualization.innerHTML = "";

  values.forEach((value, index) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");

    if (index === active) {
      bar.classList.add("active");
    }

    if (index === minimum) {
      bar.classList.add("minimum");
    }

    if (sorted.includes(index)) {
      bar.classList.add("sorted");
    }

    bar.style.height = `${value}px`;

    const label = document.createElement("span");
    label.innerText = value;

    bar.appendChild(label);
    visualization.appendChild(bar);
  });
}

function getSortedIndexes(count) {
  return [...Array(count).keys()];
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function selectionSort() {
  if (sorting) return;

  sorting = true;

  let n = values.length;

  for (let i = 0; i < n; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      renderBars(j, minIndex, getSortedIndexes(i));

      statusText.innerHTML =
        `${t("comparing")} <b>${values[j]}</b> ${t("withMinimum")} <b>${values[minIndex]}</b>`;

      await sleep(delay);

      if (values[j] < values[minIndex]) {
        minIndex = j;

        renderBars(j, minIndex, getSortedIndexes(i));

        statusText.innerHTML =
          `${t("newMinimum")} <b>${values[minIndex]}</b>`;

        await sleep(delay);
      }
    }

    if (minIndex !== i) {
      statusText.innerHTML =
        `${t("swapping")} <b>${values[i]}</b> ${t("and")} <b>${values[minIndex]}</b>`;

      [values[i], values[minIndex]] = [values[minIndex], values[i]];

      renderBars(i, minIndex, getSortedIndexes(i + 1));

      await sleep(delay);
    }

    renderBars(-1, -1, getSortedIndexes(i + 1));
  }

  renderBars(-1, -1, getSortedIndexes(values.length));

  statusText.innerHTML = t("done");

  sorting = false;
}

startBtn.addEventListener("click", selectionSort);

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
  if (!sorting) {
    setLanguage("cs");
  }
});

enBtn.addEventListener("click", () => {
  if (!sorting) {
    setLanguage("en");
  }
});

generateValues();
updateLanguage();