# 🛣️ Dijkstra's Algorithm Visualization

Interactive visualization of Dijkstra's Algorithm built with HTML, CSS and JavaScript.

This project is part of the **Algorithm Lab** series focused on creating modern and educational algorithm visualizations.

---

# 🇬🇧 About

Dijkstra's Algorithm is one of the most important shortest-path algorithms in computer science.

It finds the shortest path between nodes in a weighted graph, as long as all edge weights are non-negative.

The algorithm repeatedly selects the node with the smallest known distance and tries to improve the distances of its neighbours.

This visualization helps users understand:

- how Dijkstra's Algorithm works
- how weighted graphs are processed
- how tentative distances are updated
- how edge relaxation works
- how a priority queue controls the search
- how the final shortest path is reconstructed

---

# ✨ Features

- 🎮 Interactive controls
- 🖱 Click nodes to select the start and target
- ⚡ Real-time animation
- 🌍 CZ / EN language support
- 🎨 Modern neon UI
- 📱 Responsive design
- 🧠 Educational explanations
- 🔄 Adjustable animation speed
- 🛣️ Weighted graph visualization
- 🏁 Live priority queue
- 📏 Live distance table
- 🔎 Active edge inspection
- 🟧 Distance update animation
- ✅ Settled node highlighting
- 🟩 Final shortest-path highlighting
- 📊 Algorithm statistics

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
18-Dijkstra/
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

https://stefantusjak.cz/algorithms/dijkstra/

🌍 GitHub Pages:

https://vzdelavaci-portal.github.io/Algorithm/

---

# 🧠 How Dijkstra's Algorithm Works

Imagine the following weighted graph:

```txt
        4
    A ------- B
    | \       | \
  7 |  \10  3 |  \6
    |   \     |   \
    D --- E -- C
     \ 3  |2   \8
      \   |     \
       \  |      F
        \-9------/
```

Each edge has a weight representing its cost, distance or travel time.

Suppose we want to find the shortest path from:

```txt
Start: A
Target: F
```

---

## Step 1 — Initialize Distances

The start node receives distance `0`.

All other nodes begin with infinity:

```txt
A = 0
B = ∞
C = ∞
D = ∞
E = ∞
F = ∞
```

The start node is inserted into the priority queue.

---

## Step 2 — Select the Closest Node

The algorithm removes the node with the smallest known distance from the priority queue.

At the beginning:

```txt
Priority Queue:

A (0)
```

Node `A` becomes the current node.

---

## Step 3 — Relax the Edges

The algorithm checks every neighbour of the current node.

For example:

```txt
A → B
```

Current distance to `A`:

```txt
0
```

Edge weight:

```txt
4
```

Possible new distance:

```txt
0 + 4 = 4
```

Because `4` is smaller than infinity, the distance to `B` is updated:

```txt
B: ∞ → 4
```

This operation is called **edge relaxation**.

---

## Step 4 — Continue With the Smallest Distance

The priority queue always keeps the most promising node first.

Example:

```txt
B (4)
D (7)
E (10)
```

The algorithm processes `B` because it currently has the smallest known distance.

---

## Step 5 — Improve Existing Distances

A node may already have a known distance, but a shorter path can still be discovered.

Example:

```txt
A → E = 10
```

Later, the algorithm may discover:

```txt
A → B → C → E = 9
```

The distance is updated:

```txt
E: 10 → 9
```

---

## Step 6 — Reconstruct the Shortest Path

The algorithm stores the previous node used for every successful distance update.

After reaching the target, it follows these links backwards.

Example:

```txt
F ← E ← C ← B ← A
```

Reversed path:

```txt
A → B → C → E → F
```

The final path is highlighted in green.

---

# 🏁 Priority Queue

Dijkstra's Algorithm uses a priority queue to process the node with the smallest known distance first.

Example:

```txt
B (4)
D (7)
E (10)
```

The node with the lowest distance is processed first:

```txt
B (4)
```

This is one of the main reasons the algorithm is efficient.

---

# 📏 Distance Table

During the algorithm, every node has a tentative distance.

Example:

```txt
A = 0
B = 4
C = 7
D = 6
E = 9
F = 11
```

A distance becomes final when the node is selected as the current minimum and marked as settled.

---

# 🚀 Where Is Dijkstra's Algorithm Used?

Dijkstra's Algorithm is commonly used in:

- GPS navigation
- route planning
- network routing
- robotics
- game development
- logistics systems
- infrastructure planning
- geographic information systems
- communication networks

---

# ⚠️ Important Limitation

Dijkstra's Algorithm requires non-negative edge weights.

It does not work correctly when the graph contains negative-weight edges.

For graphs with negative weights, algorithms such as Bellman-Ford are more suitable.

---

# 📊 Time Complexity

With a priority queue:

```txt
O((V + E) log V)
```

Often written as:

```txt
O(E log V)
```

for connected sparse graphs.

Where:

- **V** = number of vertices
- **E** = number of edges

A simpler implementation without an efficient priority queue may take:

```txt
O(V²)
```

---

# 🎨 Color Legend

⚪ Unvisited node

🟪 Selected start node

🎯 Selected target node

🟦 Node waiting in the priority queue

🟨 Current node

🟧 Recently updated node or edge

🟩 Settled node

🟩 Final shortest path

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
- share the project
- use it for learning
- create your own visualizations

---

# 🚀 Learn Algorithms Visually

Dijkstra's Algorithm connects several important computer science concepts:

- graphs
- weighted edges
- priority queues
- greedy algorithms
- distance relaxation
- path reconstruction

Understanding it provides a strong foundation for more advanced pathfinding algorithms such as:

- A*
- Bellman-Ford
- Floyd-Warshall
- Johnson's Algorithm

---

---

# 🇨🇿 O projektu

Interaktivní vizualizace Dijkstrova algoritmu vytvořená pomocí HTML, CSS a JavaScriptu.

Tento projekt je součástí série **Algorithm Lab**, zaměřené na moderní a edukativní vizualizace algoritmů.

---

# 🇨🇿 Jak funguje Dijkstrův algoritmus?

Dijkstrův algoritmus patří mezi nejdůležitější algoritmy pro hledání nejkratších cest.

Dokáže najít nejkratší cestu mezi uzly v ohodnoceném grafu, pokud jsou všechny váhy hran nezáporné.

Algoritmus opakovaně vybírá uzel s nejmenší známou vzdáleností a pokouší se zlepšit vzdálenosti jeho sousedů.

Vizualizace pomáhá pochopit:

- jak funguje Dijkstrův algoritmus
- jak se pracuje s ohodnoceným grafem
- jak se aktualizují vzdálenosti
- co znamená relaxace hran
- jak algoritmus používá prioritní frontu
- jak se sestavuje výsledná nejkratší cesta

---

# ✨ Funkce

- 🎮 Interaktivní ovládání
- 🖱 Výběr startovního a cílového uzlu kliknutím
- ⚡ Animace v reálném čase
- 🌍 Podpora CZ / EN
- 🎨 Moderní neonový design
- 📱 Responzivní rozhraní
- 🧠 Edukativní vysvětlení
- 🔄 Nastavitelná rychlost animace
- 🛣️ Vizualizace ohodnoceného grafu
- 🏁 Živá prioritní fronta
- 📏 Tabulka aktuálních vzdáleností
- 🔎 Zvýraznění právě kontrolované hrany
- 🟧 Animace aktualizace vzdálenosti
- ✅ Zvýraznění dokončených uzlů
- 🟩 Zvýraznění výsledné nejkratší cesty
- 📊 Statistiky algoritmu

---

# 🛠 Technologie

- HTML5
- CSS3
- JavaScript

Frontend projekt bez frameworků.

---

# 📂 Struktura projektu

```txt
18-Dijkstra/
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

🌐 Vizualizace:

https://stefantusjak.cz/algorithms/dijkstra/

🌍 GitHub Pages:

https://vzdelavaci-portal.github.io/Algorithm/

---

# 🧠 Jak Dijkstrův algoritmus pracuje?

Představme si ohodnocený graf, ve kterém mají jednotlivé hrany určitou cenu, vzdálenost nebo čas.

Chceme najít nejkratší cestu:

```txt
Start: A
Cíl: F
```

---

## Krok 1 — Inicializace vzdáleností

Startovní uzel dostane vzdálenost `0`.

Všechny ostatní uzly začínají s nekonečnem:

```txt
A = 0
B = ∞
C = ∞
D = ∞
E = ∞
F = ∞
```

Startovní uzel se vloží do prioritní fronty.

---

## Krok 2 — Výběr nejbližšího uzlu

Algoritmus vždy vybere uzel s nejmenší známou vzdáleností.

Na začátku:

```txt
Prioritní fronta:

A (0)
```

Uzel `A` se stane aktuálně zpracovávaným uzlem.

---

## Krok 3 — Relaxace hran

Algoritmus zkontroluje všechny sousedy aktuálního uzlu.

Například:

```txt
A → B
```

Vzdálenost do uzlu `A`:

```txt
0
```

Váha hrany:

```txt
4
```

Možná nová vzdálenost:

```txt
0 + 4 = 4
```

Protože je hodnota `4` menší než nekonečno, vzdálenost uzlu `B` se aktualizuje:

```txt
B: ∞ → 4
```

Tento proces se nazývá **relaxace hrany**.

---

## Krok 4 — Pokračování nejkratší známou cestou

Prioritní fronta obsahuje uzly seřazené podle vzdálenosti.

Například:

```txt
B (4)
D (7)
E (10)
```

Jako další se zpracuje uzel `B`, protože má nejmenší známou vzdálenost.

---

## Krok 5 — Zlepšování vzdáleností

Uzel již může mít známou vzdálenost, ale algoritmus k němu může později najít kratší cestu.

Například:

```txt
A → E = 10
```

Později může být nalezena cesta:

```txt
A → B → C → E = 9
```

Vzdálenost se proto změní:

```txt
E: 10 → 9
```

---

## Krok 6 — Sestavení nejkratší cesty

Při každém úspěšném zlepšení vzdálenosti si algoritmus zapamatuje předchozí uzel.

Po nalezení cíle lze postupovat zpětně:

```txt
F ← E ← C ← B ← A
```

Po obrácení pořadí získáme:

```txt
A → B → C → E → F
```

Výsledná cesta se ve vizualizaci zvýrazní zeleně.

---

# 🏁 Prioritní fronta

Dijkstrův algoritmus používá prioritní frontu, aby vždy zpracoval uzel s nejmenší známou vzdáleností.

Například:

```txt
B (4)
D (7)
E (10)
```

Jako první se zpracuje:

```txt
B (4)
```

---

# 📏 Tabulka vzdáleností

Během algoritmu má každý uzel aktuální odhad vzdálenosti.

Například:

```txt
A = 0
B = 4
C = 7
D = 6
E = 9
F = 11
```

Vzdálenost se stane definitivní ve chvíli, kdy je uzel vybrán jako nejbližší a označen jako dokončený.

---

# 🚀 Kde se Dijkstrův algoritmus používá?

Dijkstrův algoritmus se používá například pro:

- GPS navigaci
- plánování tras
- směrování v počítačových sítích
- robotiku
- vývoj her
- logistické systémy
- plánování infrastruktury
- geografické informační systémy
- komunikační sítě

---

# ⚠️ Důležité omezení

Dijkstrův algoritmus vyžaduje nezáporné váhy hran.

Pokud graf obsahuje záporné váhy, nemusí algoritmus vrátit správný výsledek.

Pro takové grafy se používá například Bellman-Fordův algoritmus.

---

# 📊 Časová složitost

Při použití prioritní fronty:

```txt
O((V + E) log V)
```

Pro řídké souvislé grafy se často zapisuje:

```txt
O(E log V)
```

kde:

- **V** = počet vrcholů
- **E** = počet hran

Jednodušší implementace bez efektivní prioritní fronty může mít složitost:

```txt
O(V²)
```

---

# 🎨 Význam barev

⚪ Nenavštívený uzel

🟪 Vybraný startovní uzel

🎯 Vybraný cílový uzel

🟦 Uzel čekající v prioritní frontě

🟨 Aktuálně zpracovávaný uzel

🟧 Právě aktualizovaný uzel nebo hrana

🟩 Dokončený uzel

🟩 Výsledná nejkratší cesta

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

Dijkstrův algoritmus propojuje několik zásadních principů informatiky:

- grafy
- ohodnocené hrany
- prioritní fronty
- hladové algoritmy
- relaxaci vzdáleností
- rekonstrukci cesty

Jeho pochopení vytváří pevný základ pro další algoritmy hledání cest:

- A*
- Bellman-Ford
- Floyd-Warshall
- Johnsonův algoritmus