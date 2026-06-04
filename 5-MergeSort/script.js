const visualization = document.getElementById("visualization");
const tempArray = document.getElementById("tempArray");

const statusText = document.getElementById("statusText");
const descriptionText = document.getElementById("descriptionText");

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const slowBtn = document.getElementById("slowBtn");
const fastBtn = document.getElementById("fastBtn");

const czBtn = document.getElementById("czBtn");
const enBtn = document.getElementById("enBtn");

const phaseText = document.getElementById("phaseText");
const divisionsCount = document.getElementById("divisionsCount");
const mergesCount = document.getElementById("mergesCount");

let values = [];
let delay = 450;
let sorting = false;
let currentLang = "cs";

let divisions = 0;
let merges = 0;
let sortedIndexes = [];

const translations = {
  cs: {
    badge: "Algoritmus #5",
    subtitle: "Rozdělení pole na části a jejich postupné sloučení",
    start: "▶ Start",
    reset: "⟳ Reset",
    slower: "🐢 Pomaleji",
    faster: "⚡ Rychleji",
    phase: "Fáze",
    divisions: "Dělení",
    merges: "Sloučení",
    tempTitle: "🔀 Dočasné slučované pole",
    statusTitle: "📌 Co se právě děje?",
    explanationTitle: "🧠 Jak Merge Sort funguje?",
    ready: "Připraveno ke spuštění...",
    resetStatus: "🔄 Nové náhodné hodnoty připraveny.",
    dividing: "🔪 Rozděluji pole na menší části",
    merging: "🔀 Slučuji dvě seřazené části",
    comparing: "🔍 Porovnávám hodnoty",
    inserting: "📥 Vkládám menší hodnotu zpět do pole",
    done: "✅ Hotovo! Pole je seřazené.",
    speed: "Rychlost animace",
    phaseReady: "Připraveno",
    phaseDivide: "Dělení",
    phaseMerge: "Slučování",
    phaseDone: "Hotovo",
    and: "a",
    description: `
      Merge Sort používá princip
      <span class="highlight">rozděl a panuj</span>.

      <br><br>

      Pole se nejprve rozdělí na menší části.

      <br><br>

      Potom se tyto části postupně slučují
      zpět dohromady ve správném pořadí.
    `
  },

  en: {
    badge: "Algorithm #5",
    subtitle: "Divide the array into parts and merge them back together",
    start: "▶ Start",
    reset: "⟳ Reset",
    slower: "🐢 Slower",
    faster: "⚡ Faster",
    phase: "Phase",
    divisions: "Divisions",
    merges: "Merges",
    tempTitle: "🔀 Temporary merged array",
    statusTitle: "📌 Current Action",
    explanationTitle: "🧠 How does Merge Sort work?",
    ready: "Ready to start...",
    resetStatus: "🔄 New random values generated.",
    dividing: "🔪 Dividing the array into smaller parts",
    merging: "🔀 Merging two sorted parts",
    comparing: "🔍 Comparing values",
    inserting: "📥 Inserting the smaller value back into the array",
    done: "✅ Done! The array is sorted.",
    speed: "Animation speed",
    phaseReady: "Ready",
    phaseDivide: "Dividing",
    phaseMerge: "Merging",
    phaseDone: "Done",
    and: "and",
    description: `
      Merge Sort uses the
      <span class="highlight">divide and conquer</span> strategy.

      <br><br>

      First, the array is divided into smaller parts.

      <br><br>

      Then those parts are merged back together
      in the correct order.
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
    phaseText.innerText = t("phaseReady");
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
  sortedIndexes = [];
  divisions = 0;
  merges = 0;

  for (let i = 0; i < 15; i++) {
    values.push(Math.floor(Math.random() * 300) + 40);
  }

  updateStats(t("phaseReady"));
  renderBars();
  renderTempArray([]);
}

function updateStats(phase) {
  phaseText.innerText = phase;
  divisionsCount.innerText = divisions;
  mergesCount.innerText = merges;
}

function renderBars(activeRange = [], compareIndexes = [], mergeIndexes = []) {
  visualization.innerHTML = "";

  values.forEach((value, index) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");

    if (activeRange.includes(index)) {
      bar.classList.add("divide");
    }

    if (compareIndexes.includes(index)) {
      bar.classList.add("compare");
    }

    if (mergeIndexes.includes(index)) {
      bar.classList.add("merge");
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

function renderTempArray(items) {
  tempArray.innerHTML = "";

  items.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("temp-item");
    div.innerText = item;
    tempArray.appendChild(div);
  });
}

function range(start, end) {
  const result = [];

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function mergeSort(left, right) {
  if (left >= right) {
    return;
  }

  const mid = Math.floor((left + right) / 2);

  divisions++;
  updateStats(t("phaseDivide"));

  statusText.innerHTML =
    `${t("dividing")}: <b>${left}</b> - <b>${right}</b>`;

  renderBars(range(left, right));

  await sleep(delay);

  await mergeSort(left, mid);
  await mergeSort(mid + 1, right);

  await merge(left, mid, right);
}

async function merge(left, mid, right) {
  updateStats(t("phaseMerge"));

  statusText.innerHTML =
    `${t("merging")}: <b>${left}</b> - <b>${right}</b>`;

  const leftPart = values.slice(left, mid + 1);
  const rightPart = values.slice(mid + 1, right + 1);

  let i = 0;
  let j = 0;
  let k = left;

  const temp = [];

  renderBars([], range(left, right));
  renderTempArray(temp);

  await sleep(delay);

  while (i < leftPart.length && j < rightPart.length) {
    statusText.innerHTML =
      `${t("comparing")} <b>${leftPart[i]}</b> ${t("and")} <b>${rightPart[j]}</b>`;

    renderBars([], [left + i, mid + 1 + j]);

    await sleep(delay);

    if (leftPart[i] <= rightPart[j]) {
      values[k] = leftPart[i];
      temp.push(leftPart[i]);
      i++;
    } else {
      values[k] = rightPart[j];
      temp.push(rightPart[j]);
      j++;
    }

    statusText.innerHTML = t("inserting");

    renderTempArray(temp);
    renderBars([], [], range(left, k));

    await sleep(delay);

    k++;
  }

  while (i < leftPart.length) {
    values[k] = leftPart[i];
    temp.push(leftPart[i]);

    renderTempArray(temp);
    renderBars([], [], range(left, k));

    await sleep(delay);

    i++;
    k++;
  }

  while (j < rightPart.length) {
    values[k] = rightPart[j];
    temp.push(rightPart[j]);

    renderTempArray(temp);
    renderBars([], [], range(left, k));

    await sleep(delay);

    j++;
    k++;
  }

  merges++;
  updateStats(t("phaseMerge"));

  renderBars([], [], range(left, right));

  await sleep(delay);
}

async function startMergeSort() {
  if (sorting) return;

  sorting = true;

  sortedIndexes = [];
  divisions = 0;
  merges = 0;

  updateStats(t("phaseReady"));
  renderTempArray([]);

  await mergeSort(0, values.length - 1);

  sortedIndexes = Array.from({ length: values.length }, (_, index) => index);

  updateStats(t("phaseDone"));
  renderBars();
  renderTempArray(values);

  statusText.innerHTML = t("done");

  sorting = false;
}

startBtn.addEventListener("click", startMergeSort);

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