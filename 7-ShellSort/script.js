const visualization = document.getElementById("visualization");
const gapList = document.getElementById("gapList");

const statusText = document.getElementById("statusText");
const descriptionText = document.getElementById("descriptionText");

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const slowBtn = document.getElementById("slowBtn");
const fastBtn = document.getElementById("fastBtn");

const czBtn = document.getElementById("czBtn");
const enBtn = document.getElementById("enBtn");

const gapValue = document.getElementById("gapValue");
const comparisonsCount = document.getElementById("comparisonsCount");
const movesCount = document.getElementById("movesCount");

let values = [];
let delay = 450;
let sorting = false;
let currentLang = "cs";

let comparisons = 0;
let moves = 0;
let gaps = [];

const translations = {
  cs: {
    badge: "Algoritmus #7",
    subtitle: "Vylepšený Insertion Sort pomocí vzdálenosti Gap",
    start: "▶ Start",
    reset: "⟳ Reset",
    slower: "🐢 Pomaleji",
    faster: "⚡ Rychleji",
    gap: "Aktuální Gap",
    comparisons: "Porovnání",
    moves: "Přesuny",
    gapTitle: "🐚 Gap sekvence",
    statusTitle: "📌 Co se právě děje?",
    explanationTitle: "🧠 Jak Shell Sort funguje?",
    ready: "Připraveno ke spuštění...",
    resetStatus: "🔄 Nové náhodné hodnoty připraveny.",
    newGap: "🐚 Nastavuji nový Gap",
    group: "🟪 Pracuji se skupinou prvků podle aktuálního Gap",
    comparing: "🔍 Porovnávám hodnoty",
    moving: "↪ Přesouvám hodnotu",
    inserting: "📥 Vkládám hodnotu na správné místo",
    done: "✅ Hotovo! Pole je seřazené.",
    speed: "Rychlost animace",
    and: "a",
    description: `
      Shell Sort je vylepšená verze
      <span class="highlight">Insertion Sortu</span>.

      <br><br>

      Místo porovnávání pouze sousedních prvků
      nejprve porovnává hodnoty, které jsou dál od sebe.

      <br><br>

      Vzdálenost mezi prvky se nazývá <span class="highlight">Gap</span>
      a postupně se zmenšuje až na 1.
    `
  },

  en: {
    badge: "Algorithm #7",
    subtitle: "Improved Insertion Sort using a gap distance",
    start: "▶ Start",
    reset: "⟳ Reset",
    slower: "🐢 Slower",
    faster: "⚡ Faster",
    gap: "Current Gap",
    comparisons: "Comparisons",
    moves: "Moves",
    gapTitle: "🐚 Gap sequence",
    statusTitle: "📌 Current Action",
    explanationTitle: "🧠 How does Shell Sort work?",
    ready: "Ready to start...",
    resetStatus: "🔄 New random values generated.",
    newGap: "🐚 Setting new Gap",
    group: "🟪 Working with elements from the current gap group",
    comparing: "🔍 Comparing values",
    moving: "↪ Moving value",
    inserting: "📥 Inserting value into the correct position",
    done: "✅ Done! The array is sorted.",
    speed: "Animation speed",
    and: "and",
    description: `
      Shell Sort is an improved version of
      <span class="highlight">Insertion Sort</span>.

      <br><br>

      Instead of comparing only neighboring elements,
      it first compares values that are farther apart.

      <br><br>

      The distance between elements is called <span class="highlight">Gap</span>
      and gradually decreases until it becomes 1.
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
  comparisons = 0;
  moves = 0;

  for (let i = 0; i < 15; i++) {
    values.push(Math.floor(Math.random() * 300) + 40);
  }

  gaps = createGaps(values.length);

  updateStats("-");
  renderGapList();
  renderBars();
}

function createGaps(length) {
  const result = [];
  let gap = Math.floor(length / 2);

  while (gap > 0) {
    result.push(gap);
    gap = Math.floor(gap / 2);
  }

  return result;
}

function updateStats(gap) {
  gapValue.innerText = gap;
  comparisonsCount.innerText = comparisons;
  movesCount.innerText = moves;
}

function renderGapList(activeGap = null, doneGaps = []) {
  gapList.innerHTML = "";

  gaps.forEach(gap => {
    const item = document.createElement("div");
    item.classList.add("gap-item");
    item.innerText = `Gap ${gap}`;

    if (gap === activeGap) {
      item.classList.add("active");
    }

    if (doneGaps.includes(gap)) {
      item.classList.add("done");
    }

    gapList.appendChild(item);
  });
}

function renderBars(groupIndexes = [], compareIndexes = [], moveIndexes = [], sorted = false) {
  visualization.innerHTML = "";

  values.forEach((value, index) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");

    if (groupIndexes.includes(index)) {
      bar.classList.add("group");
    }

    if (compareIndexes.includes(index)) {
      bar.classList.add("compare");
    }

    if (moveIndexes.includes(index)) {
      bar.classList.add("move");
    }

    if (sorted) {
      bar.classList.add("sorted");
    }

    bar.style.height = `${value}px`;

    const label = document.createElement("span");
    label.innerText = value;

    bar.appendChild(label);
    visualization.appendChild(bar);
  });
}

function getGapGroup(start, gap) {
  const group = [];

  for (let i = start; i < values.length; i += gap) {
    group.push(i);
  }

  return group;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function shellSort() {
  if (sorting) return;

  sorting = true;

  comparisons = 0;
  moves = 0;

  const doneGaps = [];

  for (const gap of gaps) {
    updateStats(gap);
    renderGapList(gap, doneGaps);

    statusText.innerHTML = `${t("newGap")}: <b>${gap}</b>`;
    renderBars();

    await sleep(delay);

    for (let start = 0; start < gap; start++) {
      const group = getGapGroup(start, gap);

      statusText.innerHTML = t("group");
      renderBars(group);

      await sleep(delay / 1.5);
    }

    for (let i = gap; i < values.length; i++) {
      const temp = values[i];
      let j = i;

      statusText.innerHTML =
        `${t("inserting")}: <b>${temp}</b>`;

      renderBars(getGapGroup(i % gap, gap), [i]);

      await sleep(delay);

      while (j >= gap && values[j - gap] > temp) {
        comparisons++;

        statusText.innerHTML =
          `${t("comparing")} <b>${values[j - gap]}</b> ${t("and")} <b>${temp}</b>`;

        updateStats(gap);
        renderBars(getGapGroup(i % gap, gap), [j - gap, j]);

        await sleep(delay);

        statusText.innerHTML =
          `${t("moving")} <b>${values[j - gap]}</b>`;

        values[j] = values[j - gap];
        moves++;

        updateStats(gap);
        renderBars(getGapGroup(i % gap, gap), [], [j - gap, j]);

        await sleep(delay);

        j -= gap;
      }

      values[j] = temp;
      moves++;

      updateStats(gap);
      renderBars(getGapGroup(i % gap, gap), [], [j]);

      await sleep(delay / 1.5);
    }

    doneGaps.push(gap);
    renderGapList(null, doneGaps);
  }

  renderBars([], [], [], true);
  updateStats("-");
  statusText.innerHTML = t("done");

  sorting = false;
}

startBtn.addEventListener("click", shellSort);

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