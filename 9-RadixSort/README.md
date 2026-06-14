# 🔢 Radix Sort Visualization

Interactive visualization of the Radix Sort algorithm built with HTML, CSS and JavaScript.

This project is part of the **Algorithm Lab** series focused on creating modern and educational algorithm simulations.

---

# 🇬🇧 About

Radix Sort is a non-comparison sorting algorithm that processes numbers digit by digit.

Instead of comparing entire values, Radix Sort sorts numbers based on individual digits:

- Units
- Tens
- Hundreds
- Thousands

This visualization helps users understand:

- how Radix Sort works
- how buckets are used
- how digits are processed
- how multiple passes gradually sort the array
- why Radix Sort can be very efficient

---

# ✨ Features

- 🎮 Interactive controls
- ⚡ Real-time animation
- 🌍 CZ / EN language support
- 🎨 Modern neon UI
- 📱 Responsive design
- 🧠 Educational explanations
- 🔄 Adjustable animation speed
- 📊 Current pass tracking
- 🔢 Active digit highlighting
- 🪣 Bucket visualization
- 📥 Input array visualization
- 📤 Output array visualization
- 🎯 Step-by-step digit processing

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
9-RadixSort/
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
https://stefantusjak.cz/algorithms/radix-sort/

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

The bucket animation makes Radix Sort easy to understand even for complete beginners.

---

# 🧠 How Radix Sort Works

Radix Sort processes one digit at a time.

Example:

```txt
170
045
075
090
802
024
002
066
```

---

## Step 1 — Units

The algorithm looks only at the last digit.

```txt
170 → 0
045 → 5
075 → 5
090 → 0
```

Numbers are distributed into buckets:

```txt
Bucket 0:
170
90

Bucket 2:
802
2

Bucket 5:
45
75
```

---

## Step 2 — Tens

The process repeats using the tens digit.

```txt
170 → 7
045 → 4
075 → 7
090 → 9
```

Numbers are redistributed into buckets.

---

## Step 3 — Hundreds

The algorithm processes the hundreds digit.

```txt
170 → 1
802 → 8
024 → 0
```

After the final pass, the array becomes fully sorted.

---

# 🚀 Why Is Radix Sort Fast?

Traditional algorithms compare values:

```txt
45 > 12 ?
170 < 802 ?
```

Radix Sort does not.

Instead it groups values by digits:

```txt
Bucket 0
Bucket 1
Bucket 2
...
Bucket 9
```

This allows Radix Sort to achieve excellent performance on many datasets.

---

# 🎨 Color Legend

🟦 Normal values

🟧 Currently processed value

🟨 Active digit

🟪 Bucket values

🟩 Final sorted values

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

Radix Sort demonstrates that sorting does not always require comparisons.

It is also a great stepping stone toward understanding:

- Counting Sort
- Bucket Sort
- Distribution-based algorithms

---

---

# 🇨🇿 O projektu

Interaktivní vizualizace algoritmu Radix Sort vytvořená pomocí HTML, CSS a JavaScriptu.

Tento projekt je součástí série **Algorithm Lab**, zaměřené na moderní a edukativní simulace algoritmů.

---

# 🇨🇿 Jak funguje Radix Sort?

Radix Sort je třídicí algoritmus, který neporovnává celá čísla mezi sebou.

Místo toho zpracovává jednotlivé číslice:

- jednotky
- desítky
- stovky
- tisíce

Vizualizace pomáhá pochopit:

- jak funguje Radix Sort
- jak fungují buckety
- jak probíhá třídění podle číslic
- proč je potřeba více průchodů
- proč může být Radix Sort velmi rychlý

---

# ✨ Funkce

- 🎮 Interaktivní ovládání
- ⚡ Animace v reálném čase
- 🌍 Podpora CZ / EN
- 🎨 Moderní neonový design
- 📱 Responzivní rozhraní
- 🧠 Edukativní vysvětlení
- 🔄 Nastavitelná rychlost animace
- 📊 Zobrazení aktuálního průchodu
- 🔢 Zvýraznění aktivní číslice
- 🪣 Vizualizace bucketů
- 📥 Vizualizace vstupního pole
- 📤 Vizualizace nového pole
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
https://stefantusjak.cz/algorithms/radix-sort/

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

Animované buckety pomáhají pochopit Radix Sort mnohem lépe než statické obrázky.

---

# 🧠 Jak Radix Sort pracuje?

## Krok 1 — Jednotky

Algoritmus zpracuje poslední číslici.

```txt
170 → 0
045 → 5
075 → 5
090 → 0
```

Čísla rozdělí do bucketů:

```txt
Bucket 0:
170
90

Bucket 2:
802
2

Bucket 5:
45
75
```

---

## Krok 2 — Desítky

Následuje třídění podle desítek.

```txt
170 → 7
045 → 4
075 → 7
090 → 9
```

---

## Krok 3 — Stovky

Nakonec se zpracují stovky.

```txt
170 → 1
802 → 8
024 → 0
```

Po posledním průchodu je pole seřazené.

---

# 🚀 Proč je Radix Sort rychlý?

Běžné algoritmy používají porovnávání:

```txt
45 > 12 ?
170 < 802 ?
```

Radix Sort ne.

Používá buckety:

```txt
Bucket 0
Bucket 1
Bucket 2
...
Bucket 9
```

a postupně třídí podle jednotlivých číslic.

---

# 🎨 Význam barev

🟦 Běžné hodnoty

🟧 Právě zpracovávaná hodnota

🟨 Aktivní číslice

🟪 Hodnoty v bucketu

🟩 Finálně seřazené hodnoty

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

Radix Sort krásně ukazuje, že třídění nemusí být založené na porovnávání hodnot.

Je také výborným krokem k pochopení dalších algoritmů jako:

- Counting Sort
- Bucket Sort
- Distribuční třídicí algoritmy