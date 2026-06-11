# 🧮 Counting Sort Visualization

Interactive visualization of the Counting Sort algorithm built with HTML, CSS and JavaScript.

This project is part of the **Algorithm Lab** series focused on creating modern and educational algorithm simulations.

---

# 🇬🇧 About

Counting Sort is a unique sorting algorithm because it does **not compare values**.

Instead of comparing and swapping elements, it counts how many times each value appears and then reconstructs the sorted array.

This makes Counting Sort extremely fast for specific types of data.

This visualization helps users understand:

- how Counting Sort works
- how frequencies are counted
- how the Count Array is built
- how the final sorted array is created
- why Counting Sort differs from comparison-based algorithms

---

# ✨ Features

- 🎮 Interactive controls
- ⚡ Real-time animation
- 🌍 CZ / EN language support
- 🎨 Modern neon UI
- 📱 Responsive design
- 🧠 Educational explanations
- 🔄 Adjustable animation speed
- 📊 Count update counter
- 📈 Output value counter
- 🧮 Count Array visualization
- 📥 Input Array visualization
- 📤 Output Array visualization
- 🎯 Step-by-step counting process

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
8-CountingSort/
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
https://stefantusjak.cz/algorithms/counting-sort/

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

The Input → Count → Output flow makes Counting Sort much easier to understand than static diagrams.

---

# 🧠 How Counting Sort Works

Unlike Bubble Sort, Quick Sort or Merge Sort, Counting Sort does not compare values.

---

## Step 1 — Count Occurrences

Input array:

```txt
[4] [2] [2] [8] [3] [3] [1]
```

Count Array:

```txt
Value: 0 1 2 3 4 5 6 7 8

Count: 0 1 2 2 1 0 0 0 1
```

Each value increases its counter.

---

## Step 2 — Build the Output

The algorithm reads the Count Array and reconstructs the sorted sequence.

```txt
Count[1] = 1

↓

[1]

Count[2] = 2

↓

[1][2][2]

Count[3] = 2

↓

[1][2][2][3][3]
```

---

## Step 3 — Finished

```txt
[1] [2] [2] [3] [3] [4] [8]
```

The array is sorted.

---

# 🚀 Why Is Counting Sort Fast?

Counting Sort avoids comparisons entirely.

Traditional algorithms perform many comparisons:

```txt
5 > 3 ?
2 < 7 ?
```

Counting Sort simply counts occurrences:

```txt
count[3]++
count[5]++
count[2]++
```

For small ranges of values this can be extremely efficient.

---

# 🎨 Color Legend

🟦 Input Array

🟪 Count Array

🟧 Current value

🟩 Output Array

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

Counting Sort is one of the first algorithms that shows there are ways to sort data without comparing elements.

Understanding Counting Sort also helps when learning more advanced algorithms such as:

- Radix Sort
- Bucket Sort
- Distribution-based sorting algorithms

---

---

# 🇨🇿 O projektu

Interaktivní vizualizace algoritmu Counting Sort vytvořená pomocí HTML, CSS a JavaScriptu.

Tento projekt je součástí série **Algorithm Lab**, zaměřené na moderní a edukativní simulace algoritmů.

---

# 🇨🇿 Jak funguje Counting Sort?

Counting Sort je unikátní třídicí algoritmus, protože **neporovnává hodnoty**.

Místo porovnávání a prohazování prvků pouze počítá, kolikrát se jednotlivé hodnoty vyskytují.

Následně z těchto počtů vytvoří seřazené pole.

Vizualizace pomáhá pochopit:

- jak funguje Counting Sort
- jak se vytváří Count Array
- jak se počítají výskyty hodnot
- jak vzniká výstupní pole
- proč se Counting Sort liší od běžných třídicích algoritmů

---

# ✨ Funkce

- 🎮 Interaktivní ovládání
- ⚡ Animace v reálném čase
- 🌍 Podpora CZ / EN
- 🎨 Moderní neonový design
- 📱 Responzivní rozhraní
- 🧠 Edukativní vysvětlení
- 🔄 Nastavitelná rychlost animace
- 📊 Počítadlo aktualizací Count Array
- 📈 Počítadlo vytvořených výstupních hodnot
- 🧮 Vizualizace Count Array
- 📥 Vizualizace vstupního pole
- 📤 Vizualizace výstupního pole
- 🎯 Krokové vysvětlení algoritmu

---

# 🛠 Technologie

- HTML5
- CSS3
- JavaScript

Frontend projekt bez frameworků.

---

# 🚀 Live Demo

🌐 Vizualizace:  
https://stefantusjak.cz/algorithms/counting-sort/

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

Tok:

```txt
Input Array
↓
Count Array
↓
Output Array
```

krásně vysvětluje princip algoritmu i úplným začátečníkům.

---

# 🧠 Jak Counting Sort pracuje?

## Krok 1 — Počítání výskytů

Vstupní pole:

```txt
[4] [2] [2] [8] [3] [3] [1]
```

Počítací pole:

```txt
Hodnota: 0 1 2 3 4 5 6 7 8

Počet:   0 1 2 2 1 0 0 0 1
```

Každá hodnota zvýší svůj čítač.

---

## Krok 2 — Tvorba výsledku

Algoritmus projde Count Array a vytvoří nové pole.

```txt
Count[1] = 1

↓

[1]

Count[2] = 2

↓

[1][2][2]

Count[3] = 2

↓

[1][2][2][3][3]
```

---

## Krok 3 — Hotovo

```txt
[1] [2] [2] [3] [3] [4] [8]
```

Pole je seřazené.

---

# 🚀 Proč je Counting Sort rychlý?

Counting Sort neprovádí klasická porovnání.

Běžné algoritmy:

```txt
5 > 3 ?
2 < 7 ?
```

Counting Sort:

```txt
count[3]++
count[5]++
count[2]++
```

Pokud je rozsah hodnot malý, může být velmi rychlý.

---

# 🎨 Význam barev

🟦 Vstupní pole

🟪 Count Array

🟧 Aktuálně zpracovávaná hodnota

🟩 Výstupní pole

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

Counting Sort ukazuje, že ne všechny třídicí algoritmy fungují na principu porovnávání.

Je také výborným základem pro pochopení dalších algoritmů, například:

- Radix Sort
- Bucket Sort
- Distribučních třídicích algoritmů
