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

const currentBucketEl = document.getElementById("currentBucket");
const processedCountEl = document.getElementById("processedCount");
const bucketsUsedEl = document.getElementById("bucketsUsed");

let values = [];
let buckets = [];
let output = [];

let delay = 550;
let sorting = false;
let currentLang = "cs";

let processedCount = 0;
let currentBucket = "-";
let sortedBuckets = [];

const bucketRanges = [
  { min: 0, max: 19 },
  { min: 20, max: 39 },
  { min: 40, max: 59 },
  { min: 60, max: 79 },
  { min: 80, max: 99 }
];

const translations = {
  cs: {
    badge: "Algoritmus #10",
    subtitle: "Třídění pomocí rozdělení hodnot do bucketů",
    start: "▶ Start",
    reset: "⟳ Reset",
    slower: "🐢 Pomaleji",
    faster: "⚡ Rychleji",
    currentBucket: "Aktuální bucket",
    processed: "Zpracováno",
    bucketsUsed: "Použité buckety",
    inputTitle: "📥 Vstupní pole",
    bucketTitle: "🪣 Buckety podle rozsahu",
    outputTitle: "📤 Výstupní pole",
    statusTitle: "📌 Co se právě děje?",
    explanationTitle: "🧠 Jak Bucket Sort funguje?",
    ready: "Připraveno ke spuštění...",
    resetStatus: "🔄 Nové hodnoty připraveny.",
    processing: "🔍 Zpracovávám hodnotu",
    goesToBucket: "jde do bucketu",
    sortingBucket: "🧹 Řadím hodnoty uvnitř bucketu",
    collecting: "📤 Skládám seřazené buckety do výsledného pole",
    done: "✅ Hotovo! Pole je seřazené.",
    speed: "Rychlost animace",
    description: `
      Bucket Sort rozdělí hodnoty
      do několika <span class="highlight">bucketů</span> podle rozsahu.

      <br><br>

      Každý bucket se seřadí samostatně.

      <br><br>

      Nakonec se všechny buckety spojí zpět
      do finálního seřazeného pole.
    `
  },

  en: {
    badge: "Algorithm #10",
    subtitle: "Sorting by distributing values into buckets",
    start: "▶ Start",
    reset: "⟳ Reset",
    slower: "🐢 Slower",
    faster: "⚡ Faster",
    currentBucket: "Current Bucket",
    processed: "Processed",
    bucketsUsed: "Buckets Used",
    inputTitle: "📥 Input Array",
    bucketTitle: "🪣 Buckets by Range",
    outputTitle: "📤 Output Array",
    statusTitle: "📌 Current Action",
    explanationTitle: "🧠 How does Bucket Sort work?",
    ready: "Ready to start...",
    resetStatus: "🔄 New values generated.",
    processing: "🔍 Processing value",
    goesToBucket: "goes to bucket",
    sortingBucket: "🧹 Sorting values inside bucket",
    collecting: "📤 Collecting sorted buckets into the output array",
    done: "✅ Done! The array is sorted.",
    speed: "Animation speed",
    description: `
      Bucket Sort distributes values
      into multiple <span class="highlight">buckets</span> based on their range.

      <br><br>

      Each bucket is sorted individually.

      <br><br>

      Finally, all buckets are merged back
      into the final sorted array.
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
  buckets = createBuckets();
  output = [];

  processedCount = 0;
  currentBucket = "-";
  sortedBuckets = [];

  for (let i = 0; i < 12; i++) {
    values.push(Math.floor(Math.random() * 100));
  }

  updateStats();
  renderAll();
}

function createBuckets() {
  return Array.from({ length: bucketRanges.length }, () => []);
}

function getBucketIndex(value) {
  return bucketRanges.findIndex(range => value >= range.min && value <= range.max);
}

function getBucketLabel(index) {
  const range = bucketRanges[index];
  return `${range.min}-${range.max}`;
}

function getBucketsUsedCount() {
  return buckets.filter(bucket => bucket.length > 0).length;
}

function updateStats() {
  currentBucketEl.innerText = currentBucket;
  processedCountEl.innerText = processedCount;
  bucketsUsedEl.innerText = getBucketsUsedCount();
}

function renderAll(activeInput = -1, activeBucket = -1, activeOutput = -1, activeBucketValue = null) {
  renderInput(activeInput);
  renderBuckets(activeBucket, activeBucketValue);
  renderOutput(activeOutput);
}

function renderInput(activeIndex = -1) {
  inputArray.innerHTML = "";

  values.forEach((value, index) => {
    const item = document.createElement("div");
    item.classList.add("number-item");
    item.innerText = value;

    if (index === activeIndex) {
      item.classList.add("active");
    }

    inputArray.appendChild(item);
  });
}

function renderBuckets(activeBucket = -1, activeBucketValue = null) {
  bucketsEl.innerHTML = "";

  buckets.forEach((bucket, index) => {
    const bucketDiv = document.createElement("div");
    bucketDiv.classList.add("bucket");

    if (index === activeBucket) {
      bucketDiv.classList.add("active");
    }

    if (sortedBuckets.includes(index)) {
      bucketDiv.classList.add("sorted");
    }

    const header = document.createElement("div");
    header.classList.add("bucket-header");
    header.innerText = `Bucket ${getBucketLabel(index)}`;

    const valuesDiv = document.createElement("div");
    valuesDiv.classList.add("bucket-values");

    bucket.forEach(value => {
      const item = document.createElement("div");
      item.classList.add("bucket-value");
      item.innerText = value;

      if (value === activeBucketValue) {
        item.classList.add("active");
      }

      if (sortedBuckets.includes(index)) {
        item.classList.add("sorted");
      }

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

async function bucketSort() {
  if (sorting) return;

  sorting = true;

  buckets = createBuckets();
  output = [];
  processedCount = 0;
  currentBucket = "-";
  sortedBuckets = [];

  updateStats();
  renderAll();

  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    const bucketIndex = getBucketIndex(value);

    currentBucket = getBucketLabel(bucketIndex);

    statusText.innerHTML =
      `${t("processing")} <b>${value}</b> — ${t("goesToBucket")} <b>${currentBucket}</b>`;

    updateStats();
    renderAll(i, bucketIndex);

    await sleep(delay);

    buckets[bucketIndex].push(value);
    processedCount++;

    updateStats();
    renderAll(i, bucketIndex, -1, value);

    await sleep(delay);
  }

  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i].length === 0) continue;

    currentBucket = getBucketLabel(i);

    statusText.innerHTML =
      `${t("sortingBucket")}: <b>${currentBucket}</b>`;

    updateStats();
    renderAll(-1, i);

    await sleep(delay);

    buckets[i].sort((a, b) => a - b);
    sortedBuckets.push(i);

    renderAll(-1, i);

    await sleep(delay);
  }

  statusText.innerHTML = t("collecting");

  await sleep(delay);

  for (let i = 0; i < buckets.length; i++) {
    for (const value of buckets[i]) {
      output.push(value);

      renderAll(-1, i, output.length - 1, value);

      await sleep(delay / 1.5);
    }
  }

  currentBucket = "-";
  updateStats();
  renderAll();

  statusText.innerHTML = t("done");

  sorting = false;
}

startBtn.addEventListener("click", bucketSort);

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