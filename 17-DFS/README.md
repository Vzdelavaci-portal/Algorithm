# 🌲 Depth-First Search (DFS) Visualization

Interactive visualization of the Depth-First Search (DFS) algorithm built with HTML, CSS and JavaScript.

This project is part of the **Algorithm Lab** series focused on creating modern and educational algorithm visualizations.

---

# 🇬🇧 About

Depth-First Search (DFS) is one of the fundamental graph traversal algorithms.

Instead of exploring all neighbouring nodes first, DFS follows one path as deep as possible before returning (backtracking) to explore the remaining branches.

This visualization helps users understand:

- how DFS traverses a graph
- how a stack controls the traversal
- how backtracking works
- how visited nodes are tracked
- why DFS explores one branch before another

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
- 📚 Live Stack visualization
- ✅ Visited nodes panel
- 🟨 Current node highlighting
- 🟩 Visited node highlighting
- ↩️ Backtracking visualization
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
17-DFS/
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

https://stefantusjak.cz/algorithms/depth-first-search/

🌍 GitHub Pages:

https://vzdelavaci-portal.github.io/Algorithm/

---

# 🧠 How Depth-First Search Works

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

Starting from node **A**, DFS explores the graph like this:

```txt
A
↓
B
↓
D
↩
E
↓
H
↩
I
↩
C
↓
F
↩
G
```

Instead of visiting every neighbour immediately, DFS follows one branch until it reaches the end.

Only then does it return and continue exploring other paths.

---

# 📚 Stack

The key data structure used by DFS is a **Stack (LIFO)**.

Example:

```txt
Stack

A
```

↓

```txt
B
A
```

↓

```txt
D
B
A
```

↓

```txt
E
B
A
```

The last inserted node is always processed first.

---

# 🚀 Why Use DFS?

Depth-First Search is commonly used for:

- maze solving
- topological sorting
- cycle detection
- graph traversal
- puzzle solving
- artificial intelligence
- tree traversal

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

🟦 Node in the stack

🟨 Current node

🟩 Visited node

🟧 Backtracking

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

Depth-First Search is one of the most important graph algorithms.

It forms the basis for many advanced algorithms including Topological Sort, Tarjan's Algorithm, Kosaraju's Algorithm and numerous graph-based problem-solving techniques.

---

---

# 🇨🇿 O projektu

Interaktivní vizualizace algoritmu Depth-First Search (DFS) vytvořená pomocí HTML, CSS a JavaScriptu.

Tento projekt je součástí série **Algorithm Lab**, zaměřené na moderní a edukativní vizualizace algoritmů.

---

# 🇨🇿 Jak funguje Depth-First Search?

Depth-First Search (DFS) je jeden ze základních algoritmů pro procházení grafů.

Na rozdíl od BFS nejprve pokračuje co nejhlouběji jednou větví grafu.

Teprve když narazí na konec cesty, začne se vracet zpět (backtracking) a pokračuje dalšími větvemi.

Vizualizace pomáhá pochopit:

- jak DFS prochází graf
- proč používá zásobník
- jak funguje backtracking
- jak si pamatuje navštívené uzly
- proč vždy dokončí jednu větev před přechodem na další

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
- 📚 Vizualizace zásobníku
- ✅ Panel navštívených uzlů
- 🟨 Zvýraznění aktuálního uzlu
- 🟩 Zvýraznění navštívených uzlů
- ↩️ Vizualizace návratu (backtracking)
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

https://stefantusjak.cz/algorithms/depth-first-search/

🌍 GitHub Pages:

https://vzdelavaci-portal.github.io/Algorithm/

---

# 🧠 Jak Depth-First Search pracuje?

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

Pokud začneme v uzlu **A**, DFS bude postupovat takto:

```txt
A
↓
B
↓
D
↩
E
↓
H
↩
I
↩
C
↓
F
↩
G
```

Algoritmus vždy pokračuje co nejhlouběji.

Jakmile už není kam pokračovat, začne se vracet zpět a hledá další neprozkoumané větve.

---

# 📚 Zásobník

DFS používá datovou strukturu **Zásobník (LIFO)**.

Například:

```txt
Zásobník

A
```

↓

```txt
B
A
```

↓

```txt
D
B
A
```

↓

```txt
E
B
A
```

Poslední vložený uzel je vždy zpracován jako první.

---

# 🚀 Kde se DFS používá?

Depth-First Search se používá například pro:

- řešení bludišť
- topologické třídění
- detekci cyklů
- procházení grafů
- logické a kombinatorické úlohy
- umělou inteligenci
- procházení stromových struktur

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

🟦 Uzel v zásobníku

🟨 Aktuálně zpracovávaný uzel

🟩 Navštívený uzel

🟧 Návrat zpět (backtracking)

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

Depth-First Search je jedním z nejdůležitějších algoritmů pro práci s grafy.

Jeho pochopení otevírá cestu k pokročilým algoritmům, jako jsou Topological Sort, Tarjanův algoritmus, Kosarajuův algoritmus nebo hledání silně souvislých komponent.