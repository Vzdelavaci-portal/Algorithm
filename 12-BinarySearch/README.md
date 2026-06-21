# 🎯 Binary Search Visualization

Interactive visualization of the Binary Search algorithm built with HTML, CSS and JavaScript.

This project is part of the **Algorithm Lab** series focused on creating modern and educational algorithm simulations.

---

# 🇬🇧 About

Binary Search is one of the fastest searching algorithms.

Unlike Linear Search, which checks values one by one, Binary Search repeatedly divides the search space in half.

This visualization helps users understand:

- how Binary Search works
- why sorted data is required
- how the search space shrinks
- how middle values are selected
- why Binary Search is dramatically faster than Linear Search

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
- 📊 Comparison counter
- 📉 Search space visualization
- 📦 Sorted array visualization
- 🟩 Found value highlighting
- 🟥 Eliminated values highlighting
- ⚖️ Linear Search vs Binary Search comparison

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
12-BinarySearch/
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

https://stefantusjak.cz/algorithms/binary-search/

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

The animated elimination of half the remaining values makes Binary Search easy to understand.

---

# 🧠 How Binary Search Works

Imagine we have a sorted array:

```txt
12 23 34 45 56 67 78 89
```

Target value:

```txt
78
```

---

## Step 1 — Check the Middle

```txt
12 23 34 [45] 56 67 78 89
```

Target:

```txt
78 > 45
```

Everything on the left can be discarded.

---

## Step 2 — Search the Right Half

```txt
56 [67] 78 89
```

Target:

```txt
78 > 67
```

Discard the left half again.

---

## Step 3 — Found

```txt
[78] 89
```

Target found.

---

# 🚀 Why Is Binary Search Fast?

Linear Search:

```txt
12 ❌
23 ❌
34 ❌
45 ❌
56 ❌
67 ❌
78 ✅
```

7 comparisons.

Binary Search:

```txt
45 ❌
67 ❌
78 ✅
```

Only 3 comparisons.

---

# 📊 Time Complexity

Best Case:

```txt
O(1)
```

Middle value is the target.

Worst Case:

```txt
O(log n)
```

Average Case:

```txt
O(log n)
```

This is significantly faster than Linear Search.

---

# 🎨 Color Legend

🟦 Active search range

🟧 Current middle value

🟥 Eliminated values

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

Binary Search is one of the most important algorithms in computer science.

Understanding it helps with:

- efficient searching
- database indexing
- search engines
- tree structures
- advanced graph algorithms

---

---

# 🇨🇿 O projektu

Interaktivní vizualizace algoritmu Binary Search vytvořená pomocí HTML, CSS a JavaScriptu.

Tento projekt je součástí série **Algorithm Lab**, zaměřené na moderní a edukativní simulace algoritmů.

---

# 🇨🇿 Jak funguje Binary Search?

Binary Search je jeden z nejrychlejších vyhledávacích algoritmů.

Na rozdíl od Linear Search neprochází všechny hodnoty postupně.

Místo toho v každém kroku zahodí polovinu hodnot, ve kterých hledaný prvek nemůže být.

Vizualizace pomáhá pochopit:

- jak funguje Binary Search
- proč musí být data seřazená
- jak se zmenšuje prostor pro hledání
- jak se vybírá prostřední hodnota
- proč je Binary Search výrazně rychlejší než Linear Search

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
- 📊 Počítadlo porovnání
- 📉 Vizualizace zmenšování prostoru hledání
- 📦 Vizualizace seřazeného pole
- 🟩 Zvýraznění nalezené hodnoty
- 🟥 Zvýraznění vyřazených hodnot
- ⚖️ Porovnání s Linear Search

---

# 🛠 Technologie

- HTML5
- CSS3
- JavaScript

Frontend projekt bez frameworků.

---

# 🚀 Live Demo

🌐 Vizualizace:

https://stefantusjak.cz/algorithms/binary-search/

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

Animované zahazování poloviny dat krásně ukazuje sílu Binary Search.

---

# 🧠 Jak Binary Search pracuje?

Pole:

```txt
12 23 34 45 56 67 78 89
```

Hledaná hodnota:

```txt
78
```

---

## Krok 1 — Prostřední hodnota

```txt
12 23 34 [45] 56 67 78 89
```

Protože:

```txt
78 > 45
```

levá polovina se zahodí.

---

## Krok 2 — Nový střed

```txt
56 [67] 78 89
```

Protože:

```txt
78 > 67
```

zahodí se další část pole.

---

## Krok 3 — Nalezení

```txt
[78] 89
```

Hledaná hodnota byla nalezena.

---

# 🚀 Proč používat Binary Search?

Binary Search:

✅ je extrémně rychlý

✅ funguje i pro velmi velká data

✅ využívá logaritmickou složitost

Nevýhodou je, že data musí být seřazená.

---

# 📊 Časová složitost

Nejlepší případ:

```txt
O(1)
```

Nejhorší případ:

```txt
O(log n)
```

Průměrný případ:

```txt
O(log n)
```

---

# 🎨 Význam barev

🟦 Aktivní oblast hledání

🟧 Aktuální střed

🟥 Vyřazené hodnoty

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

Binary Search je jeden z nejdůležitějších algoritmů informatiky.

Jeho princip se používá v:

- databázích
- vyhledávačích
- stromových strukturách
- indexech
- mnoha pokročilých algoritmech
