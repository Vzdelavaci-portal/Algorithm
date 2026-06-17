# 🪣 Bucket Sort Visualization

Interactive visualization of the Bucket Sort algorithm built with HTML, CSS and JavaScript.

This project is part of the **Algorithm Lab** series focused on creating modern and educational algorithm simulations.

---

# 🇬🇧 About

Bucket Sort is a sorting algorithm that distributes values into multiple buckets based on predefined ranges.

Each bucket is then sorted individually before all buckets are merged together into the final sorted array.

This visualization helps users understand:

- how Bucket Sort works
- how values are distributed into buckets
- why buckets improve sorting efficiency
- how individual buckets are sorted
- how the final sorted array is constructed

---

# ✨ Features

- 🎮 Interactive controls
- ⚡ Real-time animation
- 🌍 CZ / EN language support
- 🎨 Modern neon UI
- 📱 Responsive design
- 🧠 Educational explanations
- 🔄 Adjustable animation speed
- 📊 Processed values counter
- 🪣 Bucket visualization
- 📥 Input array visualization
- 📤 Output array visualization
- 🎯 Range-based bucket grouping
- 🟩 Sorted bucket highlighting

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
10-BucketSort/
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

https://stefantusjak.cz/algorithms/bucket-sort/

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

The bucket-based animation clearly shows how values move through different ranges before becoming sorted.

---

# 🧠 How Bucket Sort Works

Bucket Sort divides values into groups called buckets.

Example input:

```txt
42 17 88 25 63 11 94 38
```

---

## Step 1 — Distribution

Values are distributed into buckets.

```txt
Bucket 0-19
17
11

Bucket 20-39
25
38

Bucket 40-59
42

Bucket 60-79
63

Bucket 80-99
88
94
```

---

## Step 2 — Sort Each Bucket

Each bucket is sorted separately.

Example:

```txt
Bucket 80-99

94
88

↓

88
94
```

---

## Step 3 — Merge Buckets

The buckets are merged in order.

```txt
11 17 25 38 42 63 88 94
```

The final array is sorted.

---

# 🚀 Why Use Bucket Sort?

Bucket Sort can be very efficient when values are evenly distributed.

Instead of sorting one large collection, it divides the work into smaller groups.

This often reduces the amount of sorting required inside each bucket.

---

# 🎨 Color Legend

🟦 Input values

🟧 Currently processed value

🟪 Bucket values

🟩 Sorted bucket

🟩 Final sorted output

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

Bucket Sort demonstrates an important concept:

Sometimes it is more efficient to divide data into groups before sorting.

This idea is used in many advanced algorithms and real-world systems.

---

---

# 🇨🇿 O projektu

Interaktivní vizualizace algoritmu Bucket Sort vytvořená pomocí HTML, CSS a JavaScriptu.

Tento projekt je součástí série **Algorithm Lab**, zaměřené na moderní a edukativní simulace algoritmů.

---

# 🇨🇿 Jak funguje Bucket Sort?

Bucket Sort rozděluje hodnoty do několika skupin nazývaných buckety.

Každý bucket obsahuje určitý rozsah hodnot.

Po rozdělení se každý bucket seřadí samostatně a následně se všechny buckety spojí do výsledného pole.

Vizualizace pomáhá pochopit:

- jak funguje Bucket Sort
- jak probíhá rozdělení do bucketů
- proč mohou buckety urychlit třídění
- jak se řadí jednotlivé buckety
- jak vzniká finální výsledek

---

# ✨ Funkce

- 🎮 Interaktivní ovládání
- ⚡ Animace v reálném čase
- 🌍 Podpora CZ / EN
- 🎨 Moderní neonový design
- 📱 Responzivní rozhraní
- 🧠 Edukativní vysvětlení
- 🔄 Nastavitelná rychlost animace
- 📊 Počítadlo zpracovaných hodnot
- 🪣 Vizualizace bucketů
- 📥 Vizualizace vstupního pole
- 📤 Vizualizace výstupního pole
- 🎯 Rozdělení podle rozsahů
- 🟩 Zvýraznění seřazených bucketů

---

# 🛠 Technologie

- HTML5
- CSS3
- JavaScript

Frontend projekt bez frameworků.

---

# 🚀 Live Demo

🌐 Vizualizace:

https://stefantusjak.cz/algorithms/bucket-sort/

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

Animace bucketů názorně ukazuje, jak se data nejprve rozdělí a teprve poté třídí.

---

# 🧠 Jak Bucket Sort pracuje?

## Krok 1 — Rozdělení hodnot

Vstup:

```txt
42 17 88 25 63 11 94 38
```

Rozdělení do bucketů:

```txt
Bucket 0-19
17
11

Bucket 20-39
25
38

Bucket 40-59
42

Bucket 60-79
63

Bucket 80-99
88
94
```

---

## Krok 2 — Seřazení bucketů

Každý bucket se seřadí zvlášť.

Například:

```txt
Bucket 80-99

94
88

↓

88
94
```

---

## Krok 3 — Spojení výsledků

Nakonec se všechny buckety spojí.

```txt
11 17 25 38 42 63 88 94
```

Pole je nyní seřazené.

---

# 🚀 Proč používat Bucket Sort?

Bucket Sort je velmi efektivní zejména tehdy, když jsou data rovnoměrně rozložena.

Místo řazení jednoho velkého pole rozdělí problém na několik menších částí.

Díky tomu může být třídění výrazně rychlejší.

---

# 🎨 Význam barev

🟦 Vstupní hodnoty

🟧 Právě zpracovávaná hodnota

🟪 Hodnoty v bucketu

🟩 Seřazený bucket

🟩 Finální seřazené pole

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

Bucket Sort ukazuje velmi důležitou myšlenku:

Ne vždy je nejlepší data rovnou řadit. Někdy je efektivnější je nejprve rozdělit do skupin a teprve potom zpracovat.

Právě tento princip využívá řada pokročilých algoritmů a datových struktur.