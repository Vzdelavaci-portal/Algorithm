const inputArray = document.getElementById("inputArray");
const bucketsEl = document.getElementById("buckets");
const outputArray = document.getElementById("outputArray");

const statusText = document.getElementById("statusText");
const descriptionText = document.getElementById("descriptionText");

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const slowBtn = document.getElementById("slowBtn");
const fastBtn = document.getElementById("fastBtn");

const czBtn = document.getElementById("czBtn");
const enBtn = document.getElementById("enBtn");

const currentPassEl = document.getElementById("currentPass");
const currentDigitEl = document.getElementById("currentDigit");
const processedCountEl = document.getElementById("processedCount");

let values = [];
let buckets = [];
let output = [];

let delay = 550;
let sorting = false;
let currentLang = "cs";

let currentPass = 0;
let processedCount = 0;
let activeExp = 1;

const translations = {
  cs: {
    badge: "Algoritmus #9",
    subtitle: "Třídění čísel postupně podle jednotlivých číslic",
    start: "▶ Start",
    reset: "⟳ Reset",
    slower: "🐢 Pomaleji",
    faster: "⚡ Rychleji",
    currentPass: "Aktuální průchod",
    currentDigit: "Aktuální číslice",
    processed: "Zpracováno",
    inputTitle: "📥 Vstupní pole",
    bucketTitle: "🪣 Buckety 0–9",
    outputTitle: "📤 Nové pole po průchodu",
    statusTitle: "📌 Co se právě děje?",
    explanationTitle: "🧠 Jak Radix Sort funguje?",
    ready: "Připraveno ke spuštění...",
    resetStatus: "🔄 Nové hodnoty připraveny.",
    pass: "Průchod",
    units: "Jednotky",
    tens: "Desítky",
    hundreds: "Stovky",
    processing: "🔍 Zpracovávám hodnotu",
    digitIs: "Aktuální číslice je",
    goesToBucket: "jde do bucketu",
    collecting: "📤 Sbírám hodnoty z bucketů zpět do pole",
    done: "✅ Hotovo! Pole je seřazené.",
    speed: "Rychlost animace",
    description: `
      Radix Sort netřídí celé číslo najednou.

      <br><br>

      Postupně zpracovává jednotlivé číslice:
      <span class="highlight">jednotky</span>,
      <span class="highlight">desítky</span>
      a <span class="highlight">stovky</span>.

      <br><br>

      Hodnoty ukládá do bucketů podle aktuální číslice
      a po každém průchodu je znovu složí do pole.
    `
  },

  en: {
    badge: "Algorithm #9",
    subtitle: "Sorting numbers digit by digit",
    start: "▶ Start",
    reset: "⟳ Reset",
    slower: "🐢 Slower",
    faster: "⚡ Faster",
    currentPass: "Current Pass",
    currentDigit: "Current Digit",
    processed: "Processed",
    inputTitle: "📥 Input Array",
    bucketTitle: "🪣 Buckets 0–9",
    outputTitle: "📤 New Array After Pass",
    statusTitle: "📌 Current Action",
    explanationTitle: "🧠 How does Radix Sort work?",
    ready: "Ready to start...",
    resetStatus: "🔄 New values generated.",
    pass: "Pass",
    units: "Units",
    tens: "Tens",
    hundreds: "Hundreds",
    processing: "🔍 Processing value",
    digitIs: "Current digit is",
    goesToBucket: "goes to bucket",
    collecting: "📤 Collecting values from buckets back into the array",
    done: "✅ Done! The array is sorted.",
    speed: "Animation speed",
    description: `
      Radix Sort does not sort the whole number at once.

      <br><br>

      It processes digits step by step:
      <span class="highlight">units</span>,
      <span class="highlight">tens</span>
      and <span class="highlight">hundreds</span>.

      <br><br>

      Values are placed into buckets based on the current digit
      and collected back after each pass.
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
  output = [];
  buckets = createBuckets();

  currentPass = 0;
  processedCount = 0;
  activeExp = 1;

  for (let i = 0; i < 10; i++) {
    values.push(Math.floor(Math.random() * 900) + 1);
  }

  updateStats();
  renderAll();
}

function createBuckets() {
  return Array.from({ length: 10 }, () => []);
}

function getMaxValue() {
  return Math.max(...values);
}

function getDigitName(exp) {
  if (exp === 1) return t("units");
  if (exp === 10) return t("tens");
  if (exp === 100) return t("hundreds");
  return `${exp}`;
}

function getDigit(value, exp) {
  return Math.floor(value / exp) % 10;
}

function updateStats() {
  currentPassEl.innerText = currentPass === 0 ? "-" : `${t("pass")} ${currentPass}`;
  currentDigitEl.innerText = currentPass === 0 ? "-" : getDigitName(activeExp);
  processedCountEl.innerText = processedCount;
}

function renderAll(activeInput = -1, activeBucket = -1, activeOutput = -1) {
  renderInput(activeInput);
  renderBuckets(activeBucket);
  renderOutput(activeOutput);
}

function renderInput(activeIndex = -1) {
  inputArray.innerHTML = "";

  values.forEach((value, index) => {
    const item = document.createElement("div");
    item.classList.add("number-item");

    if (index === activeIndex) {
      item.classList.add("active");
    }

    item.innerHTML = formatNumber(value, activeExp);
    inputArray.appendChild(item);
  });
}

function formatNumber(value, exp) {
  const padded = String(value).padStart(3, "0");
  let activeIndex = 2;

  if (exp === 10) activeIndex = 1;
  if (exp === 100) activeIndex = 0;

  return padded
    .split("")
    .map((digit, index) => {
      const className = index === activeIndex ? "digit active-digit" : "digit";
      return `<span class="${className}">${digit}</span>`;
    })
    .join("");
}

function renderBuckets(activeBucket = -1) {
  bucketsEl.innerHTML = "";

  buckets.forEach((bucket, index) => {
    const bucketDiv = document.createElement("div");
    bucketDiv.classList.add("bucket");

    if (index === activeBucket) {
      bucketDiv.classList.add("active");
    }

    const header = document.createElement("div");
    header.classList.add("bucket-header");
    header.innerText = `Bucket ${index}`;

    const valuesDiv = document.createElement("div");
    valuesDiv.classList.add("bucket-values");

    bucket.forEach(value => {
      const item = document.createElement("div");
      item.classList.add("bucket-value");
      item.innerText = value;
      valuesDiv.appendChild(item);
    });

    bucketDiv.appendChild(header);
    bucketDiv.appendChild(valuesDiv);

    bucketsEl.appendChild(bucketDiv);
  });
}

function renderOutput(activeIndex = -1) {
  outputArray.innerHTML = "";

  output.forEach((value, index) => {
    const item = document.createElement("div");
    item.classList.add("number-item");
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

async function radixSort() {
  if (sorting) return;

  sorting = true;

  let max = getMaxValue();

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    activeExp = exp;
    currentPass++;
    processedCount = 0;
    buckets = createBuckets();
    output = [];

    updateStats();
    renderAll();

    await sleep(delay);

    for (let i = 0; i < values.length; i++) {
      const value = values[i];
      const digit = getDigit(value, exp);

      statusText.innerHTML =
        `${t("processing")} <b>${value}</b> — ${t("digitIs")} <b>${digit}</b>, ${t("goesToBucket")} <b>${digit}</b>`;

      renderAll(i, digit);

      await sleep(delay);

      buckets[digit].push(value);
      processedCount++;

      updateStats();
      renderAll(i, digit);

      await sleep(delay);
    }

    statusText.innerHTML = t("collecting");

    await sleep(delay);

    for (let b = 0; b < buckets.length; b++) {
      while (buckets[b].length > 0) {
        const value = buckets[b].shift();
        output.push(value);

        renderAll(-1, b, output.length - 1);

        await sleep(delay / 1.5);
      }
    }

    values = [...output];

    renderAll();

    await sleep(delay);
  }

  output = [...values];

  renderAll(-1, -1, -1);
  statusText.innerHTML = t("done");

  sorting = false;
}

startBtn.addEventListener("click", radixSort);

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