# 🕸️ Breadth-First Search (BFS) Visualization

Interactive visualization of the Breadth-First Search (BFS) algorithm built with HTML, CSS and JavaScript.

This project is part of the **Algorithm Lab** series focused on creating modern and educational algorithm visualizations.

---

# 🇬🇧 About

Breadth-First Search (BFS) is one of the most fundamental graph traversal algorithms.

Instead of exploring one path as deeply as possible, BFS visits nodes **level by level**, ensuring that all neighbouring nodes are explored before moving deeper into the graph.

This visualization helps users understand:

- how BFS traverses a graph
- how a queue controls the traversal
- how neighbouring nodes are discovered
- how visited nodes are tracked
- why BFS explores graphs level by level

---

# ✨ Features

- 🎮 Interactive controls
- 🖱 Click any node to select the starting point
- ⚡ Real-time animation
- 🌍 CZ / EN language support
- 🎨 Modern neon UI
- 📱 Responsive design
- 🧠 Educational explanations
- 🔄 Adjustable animation speed
- 📥 Live Queue visualization
- ✅ Visited nodes panel
- 🟨 Current node highlighting
- 🟩 Visited node highlighting
- 🔗 Active edge highlighting
- 📊 Traversal statistics

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
16-BFS/
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

https://stefantusjak.cz/algorithms/breadth-first-search/

🌍 GitHub Pages:

https://vzdelavaci-portal.github.io/Algorithm/

---

# 🧠 How Breadth-First Search Works

Imagine the following graph:

```txt
        A
      /   \
     B     C
    / \   / \
   D   E F   G
      / \
     H   I
```

If we start from node **A**, BFS explores the graph like this:

```txt
Level 0

A
```

↓

```txt
Level 1

B   C
```

↓

```txt
Level 2

D   E   F   G
```

↓

```txt
Level 3

H   I
```

Each level is completely explored before moving to the next one.

---

# 📥 Queue

The key data structure used by BFS is a **Queue (FIFO)**.

Example:

```txt
Queue

[A]
```

↓

```txt
[B C]
```

↓

```txt
[C D E]
```

↓

```txt
[D E F G]
```

The first node added is always the first one processed.

---

# 🚀 Why Use BFS?

Breadth-First Search is commonly used for:

- shortest paths in unweighted graphs
- social network traversal
- web crawlers
- maze solving
- network discovery
- AI and game development

---

# 📊 Time Complexity

Traversal:

```txt
O(V + E)
```

Where:

- **V** = vertices (nodes)
- **E** = edges

---

# 🎨 Color Legend

⚪ Unvisited node

🟪 Selected start node

🟦 Node waiting in the queue

🟨 Current node

🟩 Visited node

🟨 Highlighted edge

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

Breadth-First Search is one of the most important graph algorithms.

Understanding BFS is the foundation for many more advanced algorithms such as Dijkstra's Algorithm, A*, Prim's Algorithm and many others.

---

---

# 🇨🇿 O projektu

Interaktivní vizualizace algoritmu Breadth-First Search (BFS) vytvořená pomocí HTML, CSS a JavaScriptu.

Tento projekt je součástí série **Algorithm Lab**, zaměřené na moderní a edukativní vizualizace algoritmů.

---

# 🇨🇿 Jak funguje Breadth-First Search?

Breadth-First Search (BFS) je jeden z nejzákladnějších algoritmů pro procházení grafů.

Na rozdíl od algoritmů, které jdou nejprve co nejhlouběji, BFS prochází graf **po jednotlivých vrstvách**.

Nejdříve navštíví všechny sousedy aktuálního uzlu a teprve poté pokračuje dál.

Vizualizace pomáhá pochopit:

- jak BFS prochází graf
- proč používá frontu
- jak objevuje sousední uzly
- jak si pamatuje navštívené uzly
- proč postupuje po vrstvách

---

# ✨ Funkce

- 🎮 Interaktivní ovládání
- 🖱 Výběr startovního uzlu kliknutím
- ⚡ Animace v reálném čase
- 🌍 Podpora CZ / EN
- 🎨 Moderní neonový design
- 📱 Responzivní rozhraní
- 🧠 Edukativní vysvětlení
- 🔄 Nastavitelná rychlost animace
- 📥 Vizualizace fronty
- ✅ Panel navštívených uzlů
- 🟨 Zvýraznění aktuálního uzlu
- 🟩 Zvýraznění navštívených uzlů
- 🔗 Zvýraznění právě procházené hrany
- 📊 Statistiky průchodu

---

# 🛠 Technologie

- HTML5
- CSS3
- JavaScript

Frontend projekt bez frameworků.

---

# 🚀 Live Demo

🌐 Vizualizace:

https://stefantusjak.cz/algorithms/breadth-first-search/

🌍 GitHub Pages:

https://vzdelavaci-portal.github.io/Algorithm/

---

# 🧠 Jak Breadth-First Search pracuje?

Představme si následující graf:

```txt
        A
      /   \
     B     C
    / \   / \
   D   E F   G
      / \
     H   I
```

Pokud začneme v uzlu **A**, BFS bude postupovat takto:

```txt
Vrstva 0

A
```

↓

```txt
Vrstva 1

B   C
```

↓

```txt
Vrstva 2

D   E   F   G
```

↓

```txt
Vrstva 3

H   I
```

Nejdříve projde celou jednu vrstvu a až potom pokračuje hlouběji.

---

# 📥 Fronta

BFS používá datovou strukturu **Fronta (FIFO)**.

Například:

```txt
Fronta

[A]
```

↓

```txt
[B C]
```

↓

```txt
[C D E]
```

↓

```txt
[D E F G]
```

První vložený uzel je vždy první zpracovaný.

---

# 🚀 Kde se BFS používá?

Breadth-First Search se používá například pro:

- hledání nejkratší cesty v neohodnocených grafech
- sociální sítě
- webové crawlery
- řešení bludišť
- analýzu počítačových sítí
- umělou inteligenci a hry

---

# 📊 Časová složitost

Průchod grafem:

```txt
O(V + E)
```

kde:

- **V** = počet vrcholů
- **E** = počet hran

---

# 🎨 Význam barev

⚪ Nenavštívený uzel

🟪 Startovní uzel

🟦 Uzel čekající ve frontě

🟨 Aktuálně zpracovávaný uzel

🟩 Navštívený uzel

🟨 Právě procházená hrana

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

Breadth-First Search je jedním z nejdůležitějších algoritmů pro práci s grafy.

Jeho pochopení je základem pro mnoho pokročilých algoritmů, jako jsou Dijkstrův algoritmus, A*, Primův algoritmus nebo Kruskalův algoritmus.