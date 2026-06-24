# 🦘 Jump Search Visualization

Interactive visualization of the Jump Search algorithm built with HTML, CSS and JavaScript.

This project is part of the **Algorithm Lab** series focused on creating modern and educational algorithm simulations.

---

# 🇬🇧 About

Jump Search is a searching algorithm designed for sorted arrays.

Instead of checking every value one by one, it jumps through the array in fixed-size blocks.

Once the correct block is found, a short linear search is performed inside that block.

This visualization helps users understand:

- how Jump Search works
- why sorted data is required
- how block jumping reduces comparisons
- how the final linear scan works
- how Jump Search differs from Linear Search

---

# ✨ Features

- 🎮 Interactive controls
- ⚡ Real-time animation
- 🌍 CZ / EN language support
- 🎨 Modern neon UI
- 📱 Responsive design
- 🧠 Educational explanations
- 🔄 Adjustable animation speed
- 🎯 Custom target value
- 📊 Jump counter
- 📊 Linear scan counter
- 📦 Sorted array visualization
- 🟪 Block highlighting
- 🟧 Active search highlighting
- 🟩 Found value highlighting

---

# 🛠 Technologies

- HTML5
- CSS3
- JavaScript

No frameworks.

Pure frontend project.

---

# 📂 Project Structure

```txt
13-JumpSearch/
│
├── index.html
├── style.css
├── script.js
│
└── assets/
    ├── cz.svg
    └── gb.svg
```

---

# 🚀 Live Demo

🌐 Live Visualization:

https://stefantusjak.cz/algorithms/jump-search/

🌍 GitHub Pages:

https://vzdelavaci-portal.github.io/Algorithm/

---

# 🎥 Social Media Friendly

This visualization is designed for:

- Instagram Reels
- TikTok
- YouTube Shorts
- educational content
- algorithm demonstrations

The jumping animation makes it easy to understand why Jump Search is faster than checking every value individually.

---

# 🧠 How Jump Search Works

Imagine we have a sorted array:

```txt
5 10 15 20 25 30 35 40
45 50 55 60 65 70 75 80
```

Target value:

```txt
75
```

---

## Step 1 — Jump Through Blocks

Jump Search does not check every value.

Instead, it jumps through blocks:

```txt
20
40
60
80
```

---

## Step 2 — Find the Correct Block

The algorithm notices:

```txt
60 < 75 < 80
```

The target must be inside that block.

```txt
65 70 75 80
```

---

## Step 3 — Linear Scan

Now a short linear search begins:

```txt
65 ❌
70 ❌
75 ✅
```

Target found.

---

# 🚀 Why Use Jump Search?

Jump Search is often faster than Linear Search because it skips large portions of the array.

Instead of checking every value:

```txt
5
10
15
20
...
75
```

it performs larger jumps first and only searches a small section at the end.

---

# 📊 Time Complexity

Best Case:

```txt
O(1)
```

Worst Case:

```txt
O(√n)
```

Average Case:

```txt
O(√n)
```

This makes Jump Search faster than Linear Search for larger sorted arrays.

---

# 🎨 Color Legend

🟦 Normal values

🟪 Active block

🟧 Current value

🟥 Skipped values

🟩 Found value

---

# 📌 Author

Štefan Tusjak

🌐 Personal website:

https://stefantusjak.cz

🌐 Educational portal:

https://vzdelavaci-portal.cz

---

# ⭐ Support

If you like this project:

- leave a star ⭐
- share it
- use it for learning
- create your own visualizations

---

# 🚀 Learn Algorithms Visually

Jump Search is a great bridge between:

- Linear Search
- Binary Search

It introduces the idea that searching can become faster by intelligently skipping parts of the data.

---

---

# 🇨🇿 O projektu

Interaktivní vizualizace algoritmu Jump Search vytvořená pomocí HTML, CSS a JavaScriptu.

Tento projekt je součástí série **Algorithm Lab**, zaměřené na moderní a edukativní simulace algoritmů.

---

# 🇨🇿 Jak funguje Jump Search?

Jump Search je vyhledávací algoritmus určený pro seřazená data.

Místo postupného procházení všech hodnot skáče po blocích pevné velikosti.

Jakmile najde blok, kde by se mohla nacházet hledaná hodnota, provede krátké lineární hledání pouze uvnitř tohoto bloku.

Vizualizace pomáhá pochopit:

- jak funguje Jump Search
- proč musí být data seřazená
- jak fungují skoky po blocích
- proč je potřeba následné lineární hledání
- jak se liší od Linear Search

---

# ✨ Funkce

- 🎮 Interaktivní ovládání
- ⚡ Animace v reálném čase
- 🌍 Podpora CZ / EN
- 🎨 Moderní neonový design
- 📱 Responzivní rozhraní
- 🧠 Edukativní vysvětlení
- 🔄 Nastavitelná rychlost animace
- 🎯 Nastavitelná hledaná hodnota
- 📊 Počítadlo skoků
- 📊 Počítadlo lineárních kontrol
- 📦 Vizualizace seřazeného pole
- 🟪 Zvýraznění aktivního bloku
- 🟧 Zvýraznění aktuální hodnoty
- 🟩 Zvýraznění nalezené hodnoty

---

# 🛠 Technologie

- HTML5
- CSS3
- JavaScript

Frontend projekt bez frameworků.

---

# 🚀 Live Demo

🌐 Vizualizace:

https://stefantusjak.cz/algorithms/jump-search/

🌍 GitHub Pages:

https://vzdelavaci-portal.github.io/Algorithm/

---

# 🎥 Vhodné pro sociální sítě

Vizualizace je navržena také pro:

- Instagram Reels
- TikTok
- YouTube Shorts
- edukativní videa
- prezentaci algoritmů

Animované skoky mezi bloky krásně ukazují princip algoritmu.

---

# 🧠 Jak Jump Search pracuje?

Pole:

```txt
5 10 15 20 25 30 35 40
45 50 55 60 65 70 75 80
```

Hledaná hodnota:

```txt
75
```

---

## Krok 1 — Skoky

Algoritmus skáče po blocích:

```txt
20
40
60
80
```

---

## Krok 2 — Nalezení bloku

Protože:

```txt
60 < 75 < 80
```

hledaná hodnota musí být v bloku:

```txt
65 70 75 80
```

---

## Krok 3 — Lineární hledání

Uvnitř bloku:

```txt
65 ❌
70 ❌
75 ✅
```

Hodnota byla nalezena.

---

# 🚀 Proč používat Jump Search?

Jump Search:

✅ je rychlejší než Linear Search

✅ snadno se implementuje

✅ využívá skoky pro omezení počtu kontrol

Nevýhodou je, že vyžaduje seřazená data.

---

# 📊 Časová složitost

Nejlepší případ:

```txt
O(1)
```

Nejhorší případ:

```txt
O(√n)
```

Průměrný případ:

```txt
O(√n)
```

---

# 🎨 Význam barev

🟦 Běžné hodnoty

🟪 Aktivní blok

🟧 Aktuálně kontrolovaná hodnota

🟥 Přeskočené hodnoty

🟩 Nalezená hodnota

---

# 📌 Autor

Štefan Tusjak

🌐 Osobní web:

https://stefantusjak.cz

🌐 Vzdělávací portál:

https://vzdelavaci-portal.cz

---

# ⭐ Podpora projektu

Pokud se vám projekt líbí:

- dejte hvězdičku ⭐
- sdílejte projekt
- využijte ho pro vzdělávání
- vytvořte vlastní vizualizace

---

# 🚀 Nauč se algoritmy vizuálně

Jump Search je skvělým mezikrokem mezi jednoduchým Linear Search a velmi efektivním Binary Search.

Ukazuje, že někdy není potřeba kontrolovat každou hodnotu, ale stačí chytře přeskakovat části dat.