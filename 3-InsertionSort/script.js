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
    badge:"Algoritmus #3",
    subtitle:"Postupné vkládání hodnot na správné místo",
    start:"▶ Start",
    reset:"⟳ Reset",
    slower:"🐢 Pomaleji",
    faster:"⚡ Rychleji",
    statusTitle:"📌 Co se právě děje?",
    explanationTitle:"🧠 Jak Insertion Sort funguje?",
    ready:"Připraveno ke spuštění...",
    comparing:"🔍 Porovnávám",
    moving:"↪ Posouvám hodnotu",
    inserting:"📥 Vkládám hodnotu",
    done:"✅ Hotovo! Pole je seřazené.",
    resetStatus:"🔄 Nové náhodné hodnoty připraveny.",
    speed:"Rychlost animace",

    description:`
      Insertion Sort postupně vytváří
      <span class="highlight">seřazenou část pole</span>.

      <br><br>

      Každá nová hodnota se vloží
      na správné místo.

      <br><br>

      Funguje podobně jako řazení karet v ruce.
    `
  },

  en: {
    badge:"Algorithm #3",
    subtitle:"Insert values into the correct position",
    start:"▶ Start",
    reset:"⟳ Reset",
    slower:"🐢 Slower",
    faster:"⚡ Faster",
    statusTitle:"📌 Current Action",
    explanationTitle:"🧠 How does Insertion Sort work?",
    ready:"Ready to start...",
    comparing:"🔍 Comparing",
    moving:"↪ Moving value",
    inserting:"📥 Inserting value",
    done:"✅ Done! The array is sorted.",
    resetStatus:"🔄 New random values generated.",
    speed:"Animation speed",

    description:`
      Insertion Sort gradually builds
      a <span class="highlight">sorted part of the array</span>.

      <br><br>

      Each new value is inserted
      into the correct position.

      <br><br>

      It works similarly to sorting cards in your hand.
    `
  }

};

function t(key){
  return translations[currentLang][key];
}

function updateLanguage(){

  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach(element => {

    const key = element.dataset.i18n;
    element.innerHTML = t(key);

  });

  descriptionText.innerHTML = t("description");
  statusText.innerHTML = t("ready");

}

function setLanguage(lang){

  currentLang = lang;

  if(lang === "cs"){
    czBtn.classList.add("active");
    enBtn.classList.remove("active");
  }else{
    enBtn.classList.add("active");
    czBtn.classList.remove("active");
  }

  updateLanguage();

}

function generateValues(){

  values = [];

  for(let i = 0; i < 15; i++){
    values.push(Math.floor(Math.random() * 300) + 40);
  }

  renderBars();

}

function renderBars(active=-1, compare=-1, sorted=[]){

  visualization.innerHTML = "";

  values.forEach((value,index) => {

    const bar = document.createElement("div");
    bar.classList.add("bar");

    if(index === active){
      bar.classList.add("active");
    }

    if(index === compare){
      bar.classList.add("compare");
    }

    if(sorted.includes(index)){
      bar.classList.add("sorted");
    }

    bar.style.height = `${value}px`;

    const label = document.createElement("span");
    label.innerText = value;

    bar.appendChild(label);

    visualization.appendChild(bar);

  });

}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function insertionSort(){

  if(sorting) return;

  sorting = true;

  for(let i = 1; i < values.length; i++){

    let key = values[i];
    let j = i - 1;

    renderBars(i, j, Array.from({length:i},(_,k)=>k));

    statusText.innerHTML =
      `${t("comparing")} <b>${key}</b>`;

    await sleep(delay);

    while(j >= 0 && values[j] > key){

      statusText.innerHTML =
        `${t("moving")} <b>${values[j]}</b>`;

      values[j + 1] = values[j];

      renderBars(j, j + 1);

      await sleep(delay);

      j--;

    }

    values[j + 1] = key;

    statusText.innerHTML =
      `${t("inserting")} <b>${key}</b>`;

    renderBars(j + 1);

    await sleep(delay);

  }

  renderBars(
    -1,
    -1,
    Array.from({length:values.length},(_,k)=>k)
  );

  statusText.innerHTML = t("done");

  sorting = false;

}

startBtn.addEventListener("click", insertionSort);

resetBtn.addEventListener("click", () => {

  if(sorting) return;

  generateValues();

  statusText.innerHTML = t("resetStatus");

});

slowBtn.addEventListener("click", () => {

  delay += 100;

  statusText.innerHTML =
    `🐢 ${t("speed")}: ${delay} ms`;

});

fastBtn.addEventListener("click", () => {

  if(delay > 100){
    delay -= 100;
  }

  statusText.innerHTML =
    `⚡ ${t("speed")}: ${delay} ms`;

});

czBtn.addEventListener("click", () => {
  if(!sorting) setLanguage("cs");
});

enBtn.addEventListener("click", () => {
  if(!sorting) setLanguage("en");
});

generateValues();
updateLanguage();