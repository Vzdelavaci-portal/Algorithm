const visualization = document.getElementById("visualization");
const statusText = document.getElementById("statusText");
const explanationText = document.getElementById("explanationText");

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const slowerBtn = document.getElementById("slowerBtn");
const fasterBtn = document.getElementById("fasterBtn");
const czBtn = document.getElementById("czBtn");
const enBtn = document.getElementById("enBtn");

let values = [];
let delay = 400;
let sorting = false;
let currentLang = "cs";

const translations = {
  cs: {
    badge: "Algoritmus #1",
    subtitle: "Jednoduchý algoritmus pro třídění čísel",
    start: "▶ Start",
    reset: "⟳ Reset",
    slower: "🐢 Pomaleji",
    faster: "⚡ Rychleji",
    statusTitle: "📌 Co se právě děje?",
    explanationTitle: "🧠 Jak Bubble Sort funguje?",
    ready: "Připraveno ke spuštění...",
    resetStatus: "🔄 Nová náhodná čísla připravena.",
    comparing: "🔍 Porovnávám čísla",
    swapping: "🔄 Prohazuji",
    done: "✅ Hotovo! Pole je seřazené.",
    speed: "Rychlost animace",
    explanation: `
      Bubble Sort porovnává dvě sousední čísla.
      Pokud je levé číslo větší než pravé,
      tak je mezi sebou <span class="highlight">prohodí</span>.

      <br><br>

      Největší čísla se postupně „vybublají“
      až na konec pole.
    `
  },

  en: {
    badge: "Algorithm #1",
    subtitle: "A simple algorithm for sorting numbers",
    start: "▶ Start",
    reset: "⟳ Reset",
    slower: "🐢 Slower",
    faster: "⚡ Faster",
    statusTitle: "📌 What is happening now?",
    explanationTitle: "🧠 How does Bubble Sort work?",
    ready: "Ready to start...",
    resetStatus: "🔄 New random numbers are ready.",
    comparing: "🔍 Comparing numbers",
    swapping: "🔄 Swapping",
    done: "✅ Done! The array is sorted.",
    speed: "Animation speed",
    explanation: `
      Bubble Sort compares two neighboring numbers.
      If the left number is greater than the right one,
      it <span class="highlight">swaps</span> them.

      <br><br>

      The largest numbers gradually “bubble up”
      to the end of the array.
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

  explanationText.innerHTML = t("explanation");
  statusText.innerHTML = t("ready");
}

function generateValues() {
  values = [];

  for (let i = 0; i < 15; i++) {
    values.push(Math.floor(Math.random() * 300) + 40);
  }

  renderBars();
}

function renderBars(activeIndex = -1, secondIndex = -1, sortedIndex = []) {
  visualization.innerHTML = "";

  values.forEach((value, index) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");

    if (index === activeIndex || index === secondIndex) {
      bar.classList.add("active");
    }

    if (sortedIndex.includes(index)) {
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

async function bubbleSort() {
  if (sorting) return;

  sorting = true;

  let n = values.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      renderBars(j, j + 1);

      statusText.innerHTML =
        `${t("comparing")} <b>${values[j]}</b> ${currentLang === "cs" ? "a" : "and"} <b>${values[j + 1]}</b>`;

      await sleep(delay);

      if (values[j] > values[j + 1]) {
        statusText.innerHTML =
          `${t("swapping")} ${values[j]} ${currentLang === "cs" ? "a" : "and"} ${values[j + 1]}`;

        [values[j], values[j + 1]] = [values[j + 1], values[j]];

        renderBars(j, j + 1);

        await sleep(delay);
      }
    }

    const sortedPart = [];

    for (let k = n - i - 1; k < n; k++) {
      sortedPart.push(k);
    }

    renderBars(-1, -1, sortedPart);
  }

  renderBars(-1, -1, [...Array(values.length).keys()]);

  statusText.innerHTML = t("done");

  sorting = false;
}

startBtn.addEventListener("click", bubbleSort);

resetBtn.addEventListener("click", () => {
  if (sorting) return;

  generateValues();
  statusText.innerHTML = t("resetStatus");
});

slowerBtn.addEventListener("click", () => {
  delay += 100;
  statusText.innerHTML = `🐢 ${t("speed")}: ${delay} ms`;
});

fasterBtn.addEventListener("click", () => {
  if (delay > 100) {
    delay -= 100;
  }

  statusText.innerHTML = `⚡ ${t("speed")}: ${delay} ms`;
});

czBtn.addEventListener("click", () => {
  currentLang = "cs";

  czBtn.classList.add("active");
  enBtn.classList.remove("active");

  updateLanguage();
});

enBtn.addEventListener("click", () => {
  currentLang = "en";

  enBtn.classList.add("active");
  czBtn.classList.remove("active");

  updateLanguage();
});

generateValues();
updateLanguage();