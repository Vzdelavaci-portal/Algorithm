# 🐚 Shell Sort Visualization

Interactive visualization of the Shell Sort algorithm built with HTML, CSS and JavaScript.

This project is part of the **Algorithm Lab** series focused on creating modern and educational algorithm simulations.

---

# 🇬🇧 About

Shell Sort is an improved version of Insertion Sort.

Instead of comparing only neighboring elements, it first compares elements that are farther apart using a value called the **Gap**.

As the algorithm progresses, the gap becomes smaller until it reaches 1, where the final pass behaves like a traditional Insertion Sort.

This visualization helps users understand:

- how Shell Sort works
- why Gap values matter
- how distant comparisons speed up sorting
- how Shell Sort improves upon Insertion Sort

---

# ✨ Features

- 🎮 Interactive controls
- ⚡ Real-time animation
- 🌍 CZ / EN language support
- 🎨 Modern neon UI
- 📱 Responsive design
- 🧠 Educational explanations
- 🔄 Adjustable animation speed
- 📊 Comparison counter
- 🔀 Move counter
- 🐚 Gap sequence visualization
- 🎯 Gap group highlighting
- 🟩 Final sorted array highlighting

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
7-ShellSort/
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
https://stefantusjak.cz/algorithms/shell-sort/

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

The animated Gap sequence makes Shell Sort much easier to understand than traditional static examples.

---

# 🧠 How Shell Sort Works

Shell Sort introduces a concept called **Gap**.

Instead of comparing neighboring values:

```txt
5 4 3 2 1
```

it first compares values that are farther apart.

Example:

```txt
Gap = 4

5 _ _ _ 2
8 _ _ _ 1
```

The gap is gradually reduced:

```txt
Gap = 7
↓
Gap = 3
↓
Gap = 1
```

When the gap reaches 1, the algorithm performs a final insertion-sort-like pass on an already partially sorted array.

---

# 🎨 Color Legend

🟦 Default values

🟪 Current Gap group

🟧 Compared values

🟥 Moved values

🟩 Sorted values

---

# 📌 Author

Štefan Tusjak

🌐 Personal website:  
[stefantusjak.cz](https://stefantusjak.cz)

🌐 Educational portal:  
[vzdelavaci-portal.cz](https://vzdelavaci-portal.cz)

---

# ⭐ Support

If you like this project:

- leave a star ⭐
- share it
- use it for learning
- create your own visualizations

---

# 🚀 Learn Algorithms Visually

Shell Sort demonstrates how a small optimization can significantly improve performance.

By moving values closer to their final positions before the final pass, it often performs much better than a standard Insertion Sort.

---

---

# 🇨🇿 O projektu

Interaktivní vizualizace algoritmu Shell Sort vytvořená pomocí HTML, CSS a JavaScriptu.

Tento projekt je součástí série **Algorithm Lab**, zaměřené na moderní a edukativní simulace algoritmů.

---

# 🇨🇿 Jak funguje Shell Sort?

Shell Sort je vylepšená verze algoritmu Insertion Sort.

Místo porovnávání pouze sousedních prvků nejprve porovnává prvky, které jsou od sebe vzdálené o určitou hodnotu nazývanou **Gap**.

Jak algoritmus postupuje, Gap se postupně zmenšuje až na hodnotu 1.

Vizualizace pomáhá pochopit:

- jak funguje Gap
- proč jsou vzdálená porovnání výhodná
- jak Shell Sort urychluje třídění
- v čem se liší od Insertion Sortu

---

# ✨ Funkce

- 🎮 Interaktivní ovládání
- ⚡ Animace v reálném čase
- 🌍 Podpora CZ / EN
- 🎨 Moderní neonový design
- 📱 Responzivní rozhraní
- 🧠 Edukativní vysvětlení
- 🔄 Nastavitelná rychlost animace
- 📊 Počítadlo porovnání
- 🔀 Počítadlo přesunů
- 🐚 Vizualizace Gap sekvence
- 🎯 Zvýraznění Gap skupin
- 🟩 Zvýraznění finálně seřazeného pole

---

# 🛠 Technologie

- HTML5
- CSS3
- JavaScript

Frontend projekt bez frameworků.

---

# 🚀 Live Demo

🌐 Vizualizace:  
https://stefantusjak.cz/algorithms/shell-sort/

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

Animovaná Gap sekvence pomáhá pochopit princip Shell Sortu mnohem lépe než běžné statické ukázky.

---

# 🧠 Jak Shell Sort pracuje?

Shell Sort zavádí pojem **Gap**.

Místo porovnávání sousedních hodnot:

```txt
5 4 3 2 1
```

nejprve porovnává prvky vzdálené o několik pozic.

Například:

```txt
Gap = 4

5 _ _ _ 2
8 _ _ _ 1
```

Gap se postupně zmenšuje:

```txt
Gap = 7
↓
Gap = 3
↓
Gap = 1
```

Když Gap dosáhne hodnoty 1, proběhne poslední průchod podobný algoritmu Insertion Sort.

---

# 🎨 Význam barev

🟦 Běžné hodnoty

🟪 Aktuální Gap skupina

🟧 Porovnávané hodnoty

🟥 Přesouvané hodnoty

🟩 Seřazené hodnoty

---

# 📌 Autor

Štefan Tusjak

🌐 Osobní web:  
[stefantusjak.cz](https://stefantusjak.cz)

🌐 Vzdělávací portál:  
[vzdelavaci-portal.cz](https://vzdelavaci-portal.cz)

---

# ⭐ Podpora projektu

Pokud se vám projekt líbí:

- dejte hvězdičku ⭐
- sdílejte projekt
- využijte ho pro vzdělávání
- vytvořte vlastní vizualizace

---

# 🚀 Nauč se algoritmy vizuálně

Shell Sort je skvělým příkladem toho, jak může jednoduchý nápad výrazně zrychlit třídění.

Díky postupnému zmenšování Gap hodnot přesouvá prvky blíže k jejich finální pozici ještě před závěrečným tříděním.