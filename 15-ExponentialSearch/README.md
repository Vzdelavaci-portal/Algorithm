# 🚀 Exponential Search Visualization

Interactive visualization of the Exponential Search algorithm built with HTML, CSS and JavaScript.

This project is part of the **Algorithm Lab** series focused on creating modern and educational algorithm simulations.

---

# 🇬🇧 About

Exponential Search is an efficient searching algorithm designed for sorted arrays.

Instead of searching the entire array immediately, it first finds a range where the target value is likely to exist by doubling the search index.

Once the range is identified, it performs a Binary Search inside that range.

This visualization helps users understand:

- how Exponential Search works
- why exponential expansion is useful
- how the search range is determined
- how Binary Search completes the search
- why this approach is efficient for large sorted datasets

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
- 🚀 Exponential expansion visualization
- 📍 Search range highlighting
- 🎯 Binary Search phase
- 📊 Expansion step counter
- 📊 Binary Search step counter
- 🟩 Found value highlighting
- 🟥 Eliminated values highlighting

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
15-ExponentialSearch/
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

https://stefantusjak.cz/algorithms/exponential-search/

🌍 GitHub Pages:

https://vzdelavaci-portal.github.io/Algorithm/

---

# 🧠 How Exponential Search Works

Imagine we have a sorted array:

```txt
5 10 15 20 25 30 35 40
45 50 55 60 65 70 75 80
```

Target value:

```txt
70
```

---

## Phase 1 — Exponential Expansion

The algorithm quickly expands the search range.

Instead of checking every value, it doubles the index:

```txt
1
2
4
8
```

Eventually it finds a range containing the target.

For example:

```txt
40 < 70 ≤ 80
```

The target must be inside that interval.

---

## Phase 2 — Binary Search

Now Binary Search starts only inside the detected range.

```txt
45 50 55 60 65 70 75 80
```

This dramatically reduces the number of comparisons.

---

# 🚀 Why Use Exponential Search?

Exponential Search is especially useful when:

- the data is sorted
- the array is very large
- the array size is unknown
- searching starts near the beginning

---

# 📊 Time Complexity

Best Case:

```txt
O(1)
```

Average Case:

```txt
O(log n)
```

Worst Case:

```txt
O(log n)
```

---

# 🎨 Color Legend

🟦 Normal values

🟧 Exponential expansion

🟪 Active search range

🟨 Binary Search pointer

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

Exponential Search combines two powerful ideas:

- fast range discovery
- Binary Search inside the discovered range

This makes it an elegant hybrid searching algorithm.

---

---

# 🇨🇿 O projektu

Interaktivní vizualizace algoritmu Exponential Search vytvořená pomocí HTML, CSS a JavaScriptu.

Tento projekt je součástí série **Algorithm Lab**, zaměřené na moderní a edukativní simulace algoritmů.

---

# 🇨🇿 Jak funguje Exponential Search?

Exponential Search je vyhledávací algoritmus určený pro seřazená data.

Nejdříve velmi rychle najde oblast, ve které se hledaná hodnota může nacházet.

Poté uvnitř této oblasti použije Binary Search.

Vizualizace pomáhá pochopit:

- jak funguje Exponential Search
- proč se index zdvojnásobuje
- jak se určuje rozsah hledání
- proč následuje Binary Search
- proč je algoritmus efektivní i pro velká pole

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
- 🚀 Vizualizace exponenciálních skoků
- 📍 Zvýraznění nalezeného rozsahu
- 🎯 Vizualizace Binary Search
- 📊 Počítadlo exponenciálních kroků
- 📊 Počítadlo kroků Binary Search
- 🟩 Zvýraznění nalezené hodnoty
- 🟥 Zvýraznění vyřazených hodnot

---

# 🛠 Technologie

- HTML5
- CSS3
- JavaScript

Frontend projekt bez frameworků.

---

# 🚀 Live Demo

🌐 Vizualizace:

https://stefantusjak.cz/algorithms/exponential-search/

🌍 GitHub Pages:

https://vzdelavaci-portal.github.io/Algorithm/

---

# 🧠 Jak Exponential Search pracuje?

Představme si seřazené pole:

```txt
5 10 15 20 25 30 35 40
45 50 55 60 65 70 75 80
```

Hledaná hodnota:

```txt
70
```

---

## Fáze 1 — Exponenciální rozšiřování

Algoritmus zdvojnásobuje index:

```txt
1
2
4
8
```

Dokud nenajde interval obsahující hledanou hodnotu.

Například:

```txt
40 < 70 ≤ 80
```

---

## Fáze 2 — Binary Search

Jakmile je rozsah známý, pokračuje Binary Search pouze uvnitř tohoto intervalu.

```txt
45 50 55 60 65 70 75 80
```

Díky tomu je počet porovnání výrazně menší.

---

# 🚀 Proč používat Exponential Search?

Exponential Search je vhodný zejména tehdy, když:

- jsou data seřazená
- pole je velmi rozsáhlé
- neznáme velikost pole
- hledaná hodnota bývá blízko začátku

---

# 📊 Časová složitost

Nejlepší případ:

```txt
O(1)
```

Průměrný případ:

```txt
O(log n)
```

Nejhorší případ:

```txt
O(log n)
```

---

# 🎨 Význam barev

🟦 Běžné hodnoty

🟧 Exponenciální skok

🟪 Aktivní rozsah hledání

🟨 Binary Search

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

Exponential Search je krásným příkladem kombinace dvou algoritmů.

Nejprve velmi rychle najde správný interval pomocí exponenciálních skoků a následně využije Binary Search pro efektivní nalezení hledané hodnoty.