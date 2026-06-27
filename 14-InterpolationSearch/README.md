# 📍 Interpolation Search Visualization

Interactive visualization of the Interpolation Search algorithm built with HTML, CSS and JavaScript.

This project is part of the **Algorithm Lab** series focused on creating modern and educational algorithm simulations.

---

# 🇬🇧 About

Interpolation Search is a searching algorithm designed for sorted and uniformly distributed data.

Unlike Binary Search, which always checks the middle element, Interpolation Search estimates where the target value is likely to be.

This visualization helps users understand:

- how Interpolation Search works
- how the estimated position is calculated
- why sorted data is required
- why uniform distribution matters
- how the search range changes step by step

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
- 📍 Estimated position marker
- 📉 Search space visualization
- 🧮 Estimation panel
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
14-InterpolationSearch/
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

https://stefantusjak.cz/algorithms/interpolation-search/

🌍 GitHub Pages:

https://vzdelavaci-portal.github.io/Algorithm/

---

# 🧠 How Interpolation Search Works

Interpolation Search does not simply jump to the middle.

It estimates the position using the value distribution.

Example sorted array:

```txt
10 20 30 40 50 60 70 80 90 100
```

Target value:

```txt
90
```

Instead of checking the middle first, the algorithm estimates that `90` is closer to the end of the array.

---

# 📊 Basic Idea

```txt
Estimated Position =
low + ((target - value[low]) × (high - low)) / (value[high] - value[low])
```

The closer the target is to the high value, the closer the estimated position will be to the end of the array.

---

# 🎨 Color Legend

🟦 Active search range

🟧 Estimated position

🟥 Eliminated values

🟩 Found value

📍 Current estimate marker

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

---

# 🇨🇿 O projektu

Interaktivní vizualizace algoritmu Interpolation Search vytvořená pomocí HTML, CSS a JavaScriptu.

Tento projekt je součástí série **Algorithm Lab**, zaměřené na moderní a edukativní simulace algoritmů.

---

# 🇨🇿 Jak funguje Interpolation Search?

Interpolation Search je vyhledávací algoritmus určený pro seřazená a rovnoměrně rozložená data.

Na rozdíl od Binary Search nekontroluje vždy prostřední prvek.

Místo toho odhaduje, kde by se hledaná hodnota mohla pravděpodobně nacházet.

Vizualizace pomáhá pochopit:

- jak funguje Interpolation Search
- jak se počítá odhadnutá pozice
- proč musí být data seřazená
- proč záleží na rovnoměrném rozložení hodnot
- jak se postupně zmenšuje oblast hledání

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
- 📍 Ukazatel odhadnuté pozice
- 📉 Vizualizace prostoru hledání
- 🧮 Panel odhadu pozice
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

https://stefantusjak.cz/algorithms/interpolation-search/

🌍 GitHub Pages:

https://vzdelavaci-portal.github.io/Algorithm/

---

# 🧠 Jak Interpolation Search pracuje?

Interpolation Search neskočí automaticky doprostřed pole.

Odhadne pozici podle rozložení hodnot.

Příklad seřazeného pole:

```txt
10 20 30 40 50 60 70 80 90 100
```

Hledaná hodnota:

```txt
90
```

Protože je `90` blízko konce rozsahu, algoritmus odhadne pozici blíže ke konci pole.

---

# 📊 Základní myšlenka

```txt
Odhadnutá pozice =
low + ((target - value[low]) × (high - low)) / (value[high] - value[low])
```

Čím blíže je hledaná hodnota k horní hranici, tím blíže ke konci pole bude odhadnutá pozice.

---

# 🎨 Význam barev

🟦 Aktivní oblast hledání

🟧 Odhadnutá pozice

🟥 Vyřazené hodnoty

🟩 Nalezená hodnota

📍 Aktuální ukazatel odhadu

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

Interpolation Search krásně ukazuje, že hledání nemusí vždy znamenat kontrolu středu pole.

Pokud jsou data rovnoměrně rozložená, může algoritmus odhadnout správné místo velmi rychle.