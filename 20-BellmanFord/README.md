# 🔁 Bellman-Ford Algorithm Visualization

Interactive visualization of the Bellman-Ford shortest-path algorithm built with HTML, CSS and JavaScript.

This project is part of the **Algorithm Lab** series focused on creating modern, interactive and educational algorithm visualizations.

---

# 🇬🇧 About

The Bellman-Ford Algorithm finds the shortest paths from one starting node to all other reachable nodes in a weighted directed graph.

Unlike Dijkstra's Algorithm, Bellman-Ford can work with negative edge weights.

It also provides an important additional feature: it can detect reachable negative-weight cycles.

This visualization helps users understand:

- how Bellman-Ford processes a directed weighted graph
- how every edge is relaxed repeatedly
- why the algorithm performs up to `V - 1` iterations
- how distances and predecessors are updated
- how negative edge weights affect shortest paths
- how an additional pass detects a negative cycle

---

# ✨ Features

- 🎮 Interactive controls
- 🖱 Click a node to select the starting point
- ⚡ Step-by-step animation
- 🌍 CZ / EN language support
- 🎨 Modern neon UI
- 📱 Responsive design
- 🧠 Educational explanations
- 🔄 Adjustable animation speed
- 🔁 Iteration tracking
- 🧾 Edge relaxation order
- 📏 Live distance table
- 🔗 Live predecessor table
- 🧮 Relaxation calculation panel
- 🟨 Current edge highlighting
- 🟩 Successful relaxation highlighting
- ➖ Support for negative edge weights
- ⚠️ Optional negative-cycle mode
- 🟥 Negative-cycle detection and highlighting
- 📊 Live algorithm statistics

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
20-BellmanFord/
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

https://stefantusjak.cz/algorithms/bellman-ford/

🌍 GitHub Pages:

https://vzdelavaci-portal.github.io/Algorithm/

---

# 🧠 How Bellman-Ford Works

Bellman-Ford repeatedly checks every edge in the graph.

For each directed edge:

```txt
u → v
```

with weight:

```txt
w
```

the algorithm tests whether travelling through `u` creates a shorter path to `v`.

The relaxation condition is:

```txt
distance[u] + w < distance[v]
```

If the condition is true, the distance is updated:

```txt
distance[v] = distance[u] + w
```

The predecessor is also stored:

```txt
previous[v] = u
```

---

# 📏 Distance Initialization

At the beginning, the selected start node receives distance `0`.

All other nodes begin with infinity:

```txt
A = 0
B = ∞
C = ∞
D = ∞
E = ∞
```

The infinity symbol means that no path to the node has been discovered yet.

---

# 🔁 Why `V - 1` Iterations?

If a graph contains `V` vertices, a shortest simple path can contain at most:

```txt
V - 1 edges
```

For this reason, Bellman-Ford relaxes every edge up to:

```txt
V - 1 times
```

Each complete pass can propagate improved distances one step farther through the graph.

---

# 🧮 Edge Relaxation Example

Imagine the following edge:

```txt
B → C
```

Its weight is:

```txt
-2
```

The current distance to `B` is:

```txt
4
```

The current distance to `C` is:

```txt
∞
```

Candidate distance:

```txt
4 + (-2) = 2
```

Because:

```txt
2 < ∞
```

the distance is updated:

```txt
C: ∞ → 2
```

And the predecessor becomes:

```txt
previous[C] = B
```

---

# ➖ Negative Edge Weights

Bellman-Ford supports negative edge weights.

For example:

```txt
B → C = -2
```

A negative edge does not automatically mean that the graph contains a negative cycle.

It simply means that travelling through that edge reduces the total path cost.

This is one of the main differences between Bellman-Ford and Dijkstra's Algorithm.

---

# ⚠️ Negative Cycles

A negative cycle is a directed cycle whose total weight is less than zero.

Example:

```txt
B → C = -2
C → E = 2
E → B = -4
```

Total cycle weight:

```txt
-2 + 2 - 4 = -4
```

Because the cycle reduces the path cost every time it is repeated, no finite shortest distance exists for nodes affected by the cycle.

The path cost can continue decreasing:

```txt
-4
-8
-12
-16
...
```

---

# 🔍 Negative-Cycle Detection

After completing the normal `V - 1` iterations, Bellman-Ford performs one additional pass over all edges.

If any edge can still improve a distance:

```txt
distance[u] + weight < distance[v]
```

then a reachable negative cycle exists.

The visualizer highlights affected edges and nodes in red.

---

# 🧾 Edge Relaxation Order

The visualization displays every directed edge in the order in which it is processed.

Example:

```txt
A → B (4)
A → E (5)
B → C (-2)
B → E (3)
C → D (3)
C → E (2)
E → D (4)
```

During each iteration:

- the current edge is highlighted
- successful updates are shown in green
- checked edges without an update become faded

This makes it easier to understand that Bellman-Ford processes all edges repeatedly.

---

# 🔗 Predecessors

Whenever a shorter path is found, the algorithm stores the node used to reach the destination.

Example:

```txt
previous[B] = A
previous[C] = B
previous[D] = C
```

These predecessor values can later be used to reconstruct shortest paths.

---

# 🚀 Early Termination

Bellman-Ford does not always need to complete all `V - 1` iterations.

If an entire iteration finishes without any distance update, then no further improvements are possible.

The algorithm can stop early.

This optimization is included in the visualization.

---

# 📊 Time Complexity

The standard time complexity is:

```txt
O(V × E)
```

Where:

- `V` = number of vertices
- `E` = number of edges

Every edge may be processed during each of the `V - 1` iterations.

---

# 💾 Space Complexity

The algorithm stores:

- one distance for each vertex
- one predecessor for each vertex

The space complexity is therefore:

```txt
O(V)
```

excluding the graph representation itself.

---

# 🚀 Where Is Bellman-Ford Used?

Bellman-Ford is commonly used in:

- network routing
- distance-vector routing protocols
- financial graph analysis
- currency-arbitrage detection
- graphs containing negative weights
- transportation and logistics models
- dependency systems
- theoretical graph analysis

A well-known networking application is the distance-vector routing approach used by protocols such as RIP.

---

# 🆚 Bellman-Ford vs Dijkstra

## Dijkstra's Algorithm

```txt
Supports negative edges: No
Detects negative cycles: No
Typical complexity: Faster
```

## Bellman-Ford Algorithm

```txt
Supports negative edges: Yes
Detects negative cycles: Yes
Typical complexity: O(V × E)
```

Dijkstra is usually faster, but Bellman-Ford is more flexible.

---

# 🎨 Color Legend

⚪ Unprocessed edge or node

🟪 Selected start node

🟨 Currently inspected edge

🟩 Successful distance update

🟥 Detected negative-cycle edge or node

🔴 Negative edge weight label

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
- experiment with both graph modes
- create your own algorithm visualizations

---

# 🚀 Learn Algorithms Visually

Bellman-Ford connects several important computer science concepts:

- directed graphs
- weighted edges
- shortest paths
- dynamic programming
- edge relaxation
- negative weights
- cycle detection
- predecessor tracking

Understanding it provides a strong foundation for algorithms such as:

- Dijkstra's Algorithm
- Floyd-Warshall
- Johnson's Algorithm
- SPFA
- currency-arbitrage detection

---

---

# 🇨🇿 O projektu

Interaktivní vizualizace Bellman-Fordova algoritmu vytvořená pomocí HTML, CSS a JavaScriptu.

Tento projekt je součástí série **Algorithm Lab**, zaměřené na moderní, interaktivní a edukativní vizualizace algoritmů.

---

# 🇨🇿 Jak funguje Bellman-Fordův algoritmus?

Bellman-Fordův algoritmus hledá nejkratší cesty z jednoho startovního uzlu do všech ostatních dosažitelných uzlů v orientovaném ohodnoceném grafu.

Na rozdíl od Dijkstrova algoritmu dokáže pracovat také se zápornými vahami hran.

Navíc umí zjistit, zda graf obsahuje dosažitelný záporný cyklus.

Vizualizace pomáhá pochopit:

- jak Bellman-Ford prochází orientovaný graf
- jak opakovaně relaxuje všechny hrany
- proč provádí nejvýše `V - 1` iterací
- jak se aktualizují vzdálenosti a předchozí uzly
- jak záporné hrany ovlivňují výsledné vzdálenosti
- jak dodatečný průchod odhalí záporný cyklus

---

# ✨ Funkce

- 🎮 Interaktivní ovládání
- 🖱 Výběr startovního uzlu kliknutím
- ⚡ Animace krok za krokem
- 🌍 Podpora CZ / EN
- 🎨 Moderní neonový design
- 📱 Responzivní rozhraní
- 🧠 Edukativní vysvětlení
- 🔄 Nastavitelná rychlost animace
- 🔁 Zobrazení aktuální iterace
- 🧾 Pořadí relaxace hran
- 📏 Živá tabulka vzdáleností
- 🔗 Tabulka předchozích uzlů
- 🧮 Panel výpočtu relaxace
- 🟨 Zvýraznění aktuální hrany
- 🟩 Zvýraznění úspěšné aktualizace
- ➖ Podpora záporných vah hran
- ⚠️ Volitelný režim se záporným cyklem
- 🟥 Detekce a zvýraznění záporného cyklu
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
20-BellmanFord/
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

https://stefantusjak.cz/algorithms/bellman-ford/

🌍 GitHub Pages:

https://vzdelavaci-portal.github.io/Algorithm/

---

# 🧠 Základní princip

Bellman-Ford opakovaně kontroluje všechny hrany grafu.

Pro každou orientovanou hranu:

```txt
u → v
```

s vahou:

```txt
w
```

zkoumá, zda cesta přes uzel `u` vytvoří kratší cestu do uzlu `v`.

Podmínka relaxace:

```txt
distance[u] + w < distance[v]
```

Pokud podmínka platí, vzdálenost se aktualizuje:

```txt
distance[v] = distance[u] + w
```

Současně se uloží předchozí uzel:

```txt
previous[v] = u
```

---

# 📏 Inicializace vzdáleností

Na začátku získá startovní uzel vzdálenost `0`.

Všechny ostatní uzly začínají s nekonečnem:

```txt
A = 0
B = ∞
C = ∞
D = ∞
E = ∞
```

Nekonečno znamená, že algoritmus zatím žádnou cestu k danému uzlu neobjevil.

---

# 🔁 Proč `V - 1` iterací?

Pokud graf obsahuje `V` vrcholů, nejkratší jednoduchá cesta může obsahovat maximálně:

```txt
V - 1 hran
```

Bellman-Ford proto relaxuje všechny hrany nejvýše:

```txt
V - 1krát
```

Každý celý průchod umožňuje rozšířit informace o lepších vzdálenostech o další část grafu.

---

# 🧮 Příklad relaxace hrany

Představme si hranu:

```txt
B → C
```

s vahou:

```txt
-2
```

Aktuální vzdálenost do uzlu `B`:

```txt
4
```

Aktuální vzdálenost do uzlu `C`:

```txt
∞
```

Kandidátní vzdálenost:

```txt
4 + (-2) = 2
```

Protože:

```txt
2 < ∞
```

vzdálenost uzlu `C` se aktualizuje:

```txt
C: ∞ → 2
```

A předchozím uzlem se stane:

```txt
previous[C] = B
```

---

# ➖ Záporné váhy hran

Bellman-Ford dokáže pracovat se zápornými vahami hran.

Například:

```txt
B → C = -2
```

Samotná záporná hrana automaticky neznamená, že graf obsahuje záporný cyklus.

Pouze znamená, že průchod touto hranou snižuje celkovou cenu cesty.

Právě v tom se Bellman-Ford výrazně liší od Dijkstrova algoritmu.

---

# ⚠️ Záporné cykly

Záporný cyklus je orientovaný cyklus, jehož celková váha je menší než nula.

Například:

```txt
B → C = -2
C → E = 2
E → B = -4
```

Celková váha cyklu:

```txt
-2 + 2 - 4 = -4
```

Protože každý další průchod cyklem znovu sníží cenu cesty, neexistuje pro ovlivněné uzly konečná nejkratší vzdálenost.

Cena může klesat neomezeně:

```txt
-4
-8
-12
-16
...
```

---

# 🔍 Detekce záporného cyklu

Po dokončení běžných `V - 1` iterací provede Bellman-Ford ještě jeden dodatečný průchod všemi hranami.

Pokud lze některou vzdálenost stále zlepšit:

```txt
distance[u] + weight < distance[v]
```

existuje dosažitelný záporný cyklus.

Vizualizace zvýrazní dotčené hrany a uzly červeně.

---

# 🧾 Pořadí relaxace hran

Vizualizace zobrazuje všechny orientované hrany v pořadí, ve kterém jsou kontrolovány.

Například:

```txt
A → B (4)
A → E (5)
B → C (-2)
B → E (3)
C → D (3)
C → E (2)
E → D (4)
```

V průběhu každé iterace:

- aktuální hrana se zvýrazní
- úspěšná aktualizace se zobrazí zeleně
- zkontrolované hrany bez změny se zeslabí

Díky tomu je jasně vidět, že Bellman-Ford opakovaně zpracovává všechny hrany.

---

# 🔗 Předchozí uzly

Při každém nalezení kratší cesty si algoritmus uloží uzel, přes který byla nová cesta nalezena.

Například:

```txt
previous[B] = A
previous[C] = B
previous[D] = C
```

Tyto informace lze následně použít pro sestavení nejkratší cesty.

---

# 🚀 Předčasné ukončení

Bellman-Ford nemusí vždy provést všech `V - 1` iterací.

Pokud během celé iterace nedojde k žádné aktualizaci vzdálenosti, žádné další zlepšení už není možné.

Algoritmus může skončit předčasně.

Tato optimalizace je součástí vizualizace.

---

# 📊 Časová složitost

Standardní časová složitost je:

```txt
O(V × E)
```

kde:

- `V` = počet vrcholů
- `E` = počet hran

Každá hrana může být zkontrolována během každé z `V - 1` iterací.

---

# 💾 Prostorová složitost

Algoritmus ukládá:

- jednu vzdálenost pro každý vrchol
- jeden předchozí uzel pro každý vrchol

Prostorová složitost je proto:

```txt
O(V)
```

bez započítání samotné reprezentace grafu.

---

# 🚀 Kde se Bellman-Ford používá?

Bellman-Fordův algoritmus se používá například pro:

- směrování v počítačových sítích
- distance-vector routing
- analýzu finančních grafů
- detekci měnové arbitráže
- grafy se zápornými vahami
- dopravní a logistické modely
- systémy závislostí
- teoretickou analýzu grafů

Známým využitím je princip distance-vector směrování používaný například protokolem RIP.

---

# 🆚 Bellman-Ford vs Dijkstra

## Dijkstrův algoritmus

```txt
Podpora záporných hran: Ne
Detekce záporných cyklů: Ne
Typická rychlost: Vyšší
```

## Bellman-Fordův algoritmus

```txt
Podpora záporných hran: Ano
Detekce záporných cyklů: Ano
Typická složitost: O(V × E)
```

Dijkstra bývá rychlejší, Bellman-Ford je však univerzálnější.

---

# 🎨 Význam barev

⚪ Nezpracovaná hrana nebo uzel

🟪 Vybraný startovní uzel

🟨 Aktuálně kontrolovaná hrana

🟩 Úspěšná aktualizace vzdálenosti

🟥 Detekovaný záporný cyklus

🔴 Záporná váha hrany

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
- vyzkoušejte oba režimy grafu
- vytvořte vlastní vizualizace algoritmů

---

# 🚀 Nauč se algoritmy vizuálně

Bellman-Ford propojuje několik důležitých principů informatiky:

- orientované grafy
- ohodnocené hrany
- nejkratší cesty
- dynamické programování
- relaxaci hran
- záporné váhy
- detekci cyklů
- ukládání předchozích uzlů

Jeho pochopení vytváří základ pro další algoritmy:

- Dijkstrův algoritmus
- Floyd-Warshall
- Johnsonův algoritmus
- SPFA
- detekci měnové arbitráže