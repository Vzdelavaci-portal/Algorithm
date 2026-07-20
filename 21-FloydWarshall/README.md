# 📊 Floyd-Warshall Algorithm Visualization

Interactive visualization of the Floyd-Warshall all-pairs shortest-path algorithm built with HTML, CSS and JavaScript.

This project is part of the **Algorithm Lab** series focused on modern, interactive and educational algorithm visualizations.

---

# 🇬🇧 About

The Floyd-Warshall Algorithm calculates the shortest paths between every pair of vertices in a weighted graph.

Unlike Dijkstra or Bellman-Ford, which usually calculate paths from one selected source node, Floyd-Warshall processes the entire distance matrix.

The algorithm gradually allows each vertex to become an intermediate point between all other pairs of vertices.

This visualization helps users understand:

- all-pairs shortest paths
- distance matrices
- dynamic programming
- intermediate vertices
- matrix updates
- negative edge weights
- negative-cycle detection
- the `O(V³)` time complexity

---

# ✨ Features

- 📊 Interactive distance matrix
- 🔗 Directed weighted graph visualization
- ▶ Automatic animation
- ⏸ Pause and continue controls
- ⏭ Step-by-step execution
- ↻ Algorithm reset
- 🎲 Random graph generation
- ⚡ Adjustable animation speed
- 🌍 CZ / EN language support
- 🟨 Current matrix cell highlighting
- 🟦 Intermediate route highlighting
- 🟩 Shorter-path update animation
- 🟥 Negative-cycle detection
- 🧮 Live formula calculation
- 📈 Progress indicator
- 📋 Live statistics
- 👁 Initial-matrix preview
- 📱 Responsive layout
- 🎨 Modern neon interface

---

# 🛠 Technologies

- HTML5
- CSS3
- JavaScript

No frameworks or external libraries are required.

---

# 📂 Project Structure

```txt
21-FloydWarshall/
│
├── index.html
├── style.css
├── script.js
│
└── README.md
```

---

# 🚀 Live Demo

🌍 GitHub Pages:

https://vzdelavaci-portal.github.io/Algorithm/21-FloydWarshall/

💻 Source Code:

https://github.com/Vzdelavaci-Portal/Algorithm/tree/main/21-FloydWarshall

---

# 🧠 How Floyd-Warshall Works

Floyd-Warshall starts with an initial matrix containing the direct distances between vertices.

For every pair of vertices `i` and `j`, it checks whether using another vertex `k` as an intermediate point creates a shorter route.

The main formula is:

```txt
dist[i][j] = min(
    dist[i][j],
    dist[i][k] + dist[k][j]
)
```

Where:

- `i` is the starting vertex
- `j` is the destination vertex
- `k` is the currently allowed intermediate vertex

---

# 📊 Initial Distance Matrix

The initial matrix contains:

- `0` on the main diagonal
- the weight of a direct edge if one exists
- `∞` if no direct edge exists

Example:

```txt
      A   B   C   D   E

A     0   4   ∞   ∞   8
B     ∞   0   3   ∞   2
C     ∞   ∞   0  -2   ∞
D     ∞   1   ∞   0   ∞
E     ∞   ∞   4   7   0
```

The diagonal contains zero because the distance from a vertex to itself is initially zero.

---

# 🔁 Intermediate Vertices

The algorithm processes every vertex as a possible intermediate point.

For example:

```txt
k = A
k = B
k = C
k = D
k = E
```

During the iteration for vertex `B`, every possible route is checked to determine whether travelling through `B` improves the current distance.

Example:

```txt
A → D
```

is compared with:

```txt
A → B → D
```

---

# 🧮 Matrix Update Example

Suppose the current values are:

```txt
dist[A][C] = ∞
dist[A][B] = 4
dist[B][C] = 3
```

The candidate route through `B` is:

```txt
4 + 3 = 7
```

Because:

```txt
7 < ∞
```

the matrix value is updated:

```txt
dist[A][C]: ∞ → 7
```

---

# 🟦 Route Through `k`

For every currently processed cell, the algorithm compares three values:

```txt
dist[i][j]
dist[i][k]
dist[k][j]
```

The visualizer highlights:

- `dist[i][j]` as the currently inspected cell
- `dist[i][k]` as the first part of the indirect route
- `dist[k][j]` as the second part of the indirect route

This makes the dynamic-programming step easier to follow.

---

# 📐 Dynamic Programming Principle

Floyd-Warshall is based on dynamic programming.

At each stage, it reuses shortest-path information calculated during earlier iterations.

The algorithm can be described as:

```txt
D(k)[i][j] =
min(
    D(k - 1)[i][j],
    D(k - 1)[i][k] + D(k - 1)[k][j]
)
```

This means:

- keep the current best route
- or replace it with a route through vertex `k`

---

# ➖ Negative Edge Weights

Floyd-Warshall supports negative edge weights.

Example:

```txt
C → D = -2
```

A negative edge does not automatically mean that the graph contains a negative cycle.

It only means that using the edge reduces the total cost of a route.

---

# ⚠️ Negative Cycles

A negative cycle is a cycle whose total weight is less than zero.

If a graph contains a reachable negative cycle, the shortest path is not well-defined because the total route cost can be reduced repeatedly.

Example:

```txt
A → B = 2
B → C = -5
C → A = 1
```

Total cycle weight:

```txt
2 - 5 + 1 = -2
```

Repeated traversal keeps decreasing the route cost.

---

# 🔍 Negative-Cycle Detection

After Floyd-Warshall finishes, the main diagonal of the distance matrix is inspected.

If any value satisfies:

```txt
dist[i][i] < 0
```

then the graph contains a negative cycle involving or reachable from that vertex.

The visualizer highlights such diagonal cells in red.

---

# ⏭ Step Mode

The visualization supports manual execution.

Each press of the step button processes one matrix cell:

```txt
(i, j, k)
```

This mode is useful for closely examining:

- the current pair
- the intermediate vertex
- the direct distance
- the candidate distance
- the final decision

---

# 🎲 Random Graph

The random-graph button creates a new directed weighted graph.

The generator can include:

- positive edge weights
- negative edge weights
- different graph densities
- unreachable vertex pairs

Some generated graphs may also contain negative cycles.

---

# 👁 Initial Matrix Preview

The initial-matrix button temporarily displays the original matrix created from the graph edges.

This allows users to compare:

- the initial direct distances
- the current improved distances

The initial matrix is restored only for preview and does not reset the algorithm.

---

# 📈 Progress Tracking

For a graph with `V` vertices, Floyd-Warshall processes:

```txt
V × V × V
```

matrix checks.

The visualizer displays the completed percentage based on:

```txt
processed cells / V³
```

For five vertices:

```txt
5³ = 125 checks
```

---

# 📊 Statistics

The interface displays:

- current intermediate vertex `k`
- current pair `i → j`
- number of processed cells
- number of successful matrix updates
- total progress

---

# ⏱ Time Complexity

Floyd-Warshall uses three nested loops:

```txt
for k
    for i
        for j
```

Its time complexity is:

```txt
O(V³)
```

Where `V` is the number of vertices.

---

# 💾 Space Complexity

The algorithm stores a distance matrix containing one value for every pair of vertices.

The space complexity is:

```txt
O(V²)
```

---

# 🚀 Where Is Floyd-Warshall Used?

Floyd-Warshall is useful for:

- all-pairs shortest-path problems
- network routing analysis
- transportation networks
- dependency graphs
- game maps
- geographic information systems
- social-network analysis
- reachability calculations
- transitive closure
- small and medium dense graphs

---

# 🆚 Floyd-Warshall vs Dijkstra

## Floyd-Warshall

```txt
Paths: All pairs
Negative edges: Supported
Negative-cycle detection: Yes
Time complexity: O(V³)
Best for: Dense graphs and complete distance tables
```

## Dijkstra

```txt
Paths: One source
Negative edges: Not supported
Negative-cycle detection: No
Typical complexity: O((V + E) log V)
Best for: Single-source shortest paths
```

---

# 🆚 Floyd-Warshall vs Bellman-Ford

## Floyd-Warshall

```txt
Calculates paths between every pair
Uses a distance matrix
Time complexity: O(V³)
```

## Bellman-Ford

```txt
Calculates paths from one source
Repeatedly relaxes every edge
Time complexity: O(V × E)
```

Both support negative edge weights and can detect negative cycles.

---

# 🎨 Color Legend

🟨 Currently inspected matrix cell

🟦 Values used for the route through `k`

🟩 Newly updated shorter distance

🟥 Negative value on the matrix diagonal

⚪ Unchanged matrix value

---

# 📌 Author

Štefan Tusjak

🌐 Educational portal:

https://vzdelavaci-portal.cz

🌐 GitHub organization:

https://github.com/Vzdelavaci-Portal

---

# ⭐ Support

If you like this project:

- leave a GitHub star ⭐
- share the visualization
- use it for learning or teaching
- experiment with random graphs
- compare it with other shortest-path algorithms

---

# 🚀 Learn Algorithms Visually

Floyd-Warshall combines several important computer-science concepts:

- graph theory
- weighted directed graphs
- shortest paths
- distance matrices
- dynamic programming
- negative edge weights
- negative-cycle detection
- cubic time complexity

Understanding Floyd-Warshall provides a strong foundation for studying:

- Bellman-Ford
- Dijkstra
- Johnson's Algorithm
- transitive closure
- Warshall's Algorithm
- graph optimization

---

---

# 🇨🇿 Floyd-Warshall – vizualizace algoritmu

Interaktivní vizualizace Floyd-Warshallova algoritmu vytvořená pomocí HTML, CSS a JavaScriptu.

Projekt je součástí série **Algorithm Lab**, která se zaměřuje na moderní, interaktivní a edukativní vizualizace algoritmů.

---

# 🇨🇿 O projektu

Floyd-Warshallův algoritmus počítá nejkratší cesty mezi všemi dvojicemi vrcholů v ohodnoceném grafu.

Na rozdíl od Dijkstrova nebo Bellman-Fordova algoritmu nepracuje pouze s jedním zvoleným startovním uzlem.

Místo toho postupně aktualizuje celou matici vzdáleností.

Vizualizace pomáhá pochopit:

- nejkratší cesty mezi všemi dvojicemi vrcholů
- matici vzdáleností
- dynamické programování
- využití mezivrcholů
- aktualizace hodnot v matici
- záporné váhy hran
- detekci záporných cyklů
- časovou složitost `O(V³)`

---

# ✨ Funkce

- 📊 Interaktivní matice vzdáleností
- 🔗 Vizualizace orientovaného ohodnoceného grafu
- ▶ Automatické spuštění
- ⏸ Pozastavení a pokračování
- ⏭ Procházení krok za krokem
- ↻ Reset algoritmu
- 🎲 Generování náhodného grafu
- ⚡ Nastavitelná rychlost animace
- 🌍 Podpora CZ / EN
- 🟨 Zvýraznění aktuální buňky
- 🟦 Zvýraznění cesty přes mezivrchol
- 🟩 Animace nalezení kratší cesty
- 🟥 Detekce záporného cyklu
- 🧮 Živý výpočet aktuální hodnoty
- 📈 Ukazatel průběhu
- 📋 Statistiky algoritmu
- 👁 Náhled počáteční matice
- 📱 Responzivní rozhraní
- 🎨 Moderní neonový design

---

# 🛠 Technologie

- HTML5
- CSS3
- JavaScript

Projekt nevyužívá žádný framework ani externí knihovnu.

---

# 📂 Struktura projektu

```txt
21-FloydWarshall/
│
├── index.html
├── style.css
├── script.js
│
└── README.md
```

---

# 🚀 Live demo

🌍 GitHub Pages:

https://vzdelavaci-portal.github.io/Algorithm/21-FloydWarshall/

💻 Zdrojový kód:

https://github.com/Vzdelavaci-Portal/Algorithm/tree/main/21-FloydWarshall

---

# 🧠 Jak Floyd-Warshall funguje?

Algoritmus začíná počáteční maticí, která obsahuje přímé vzdálenosti mezi vrcholy.

Pro každou dvojici vrcholů `i` a `j` kontroluje, zda cesta přes mezivrchol `k` není kratší než dosud známá cesta.

Základní vztah:

```txt
dist[i][j] = min(
    dist[i][j],
    dist[i][k] + dist[k][j]
)
```

Kde:

- `i` je výchozí vrchol
- `j` je cílový vrchol
- `k` je aktuálně povolený mezivrchol

---

# 📊 Počáteční matice vzdáleností

Počáteční matice obsahuje:

- `0` na hlavní diagonále
- váhu přímé hrany, pokud existuje
- `∞`, pokud přímá hrana neexistuje

Příklad:

```txt
      A   B   C   D   E

A     0   4   ∞   ∞   8
B     ∞   0   3   ∞   2
C     ∞   ∞   0  -2   ∞
D     ∞   1   ∞   0   ∞
E     ∞   ∞   4   7   0
```

Na diagonále je nula, protože vzdálenost vrcholu k sobě samému je na začátku nulová.

---

# 🔁 Mezivrcholy

Algoritmus postupně povoluje každý vrchol jako možný mezivrchol.

Například:

```txt
k = A
k = B
k = C
k = D
k = E
```

Během iterace pro vrchol `B` se zkoumá, zda cesta přes `B` zlepší některou aktuální vzdálenost.

Například cesta:

```txt
A → D
```

se porovná s cestou:

```txt
A → B → D
```

---

# 🧮 Příklad aktualizace matice

Předpokládejme hodnoty:

```txt
dist[A][C] = ∞
dist[A][B] = 4
dist[B][C] = 3
```

Kandidátní cesta přes vrchol `B`:

```txt
4 + 3 = 7
```

Protože:

```txt
7 < ∞
```

hodnota se aktualizuje:

```txt
dist[A][C]: ∞ → 7
```

---

# 🟦 Cesta přes `k`

Pro každou aktuálně kontrolovanou buňku algoritmus porovnává:

```txt
dist[i][j]
dist[i][k]
dist[k][j]
```

Vizualizace zvýrazní:

- `dist[i][j]` jako aktuálně kontrolovanou buňku
- `dist[i][k]` jako první část nepřímé cesty
- `dist[k][j]` jako druhou část nepřímé cesty

Díky tomu je princip dynamického programování snadno sledovatelný.

---

# 📐 Princip dynamického programování

Floyd-Warshall využívá výsledky vypočítané v předchozích iteracích.

Matematicky lze algoritmus zapsat:

```txt
D(k)[i][j] =
min(
    D(k - 1)[i][j],
    D(k - 1)[i][k] + D(k - 1)[k][j]
)
```

V každém kroku se tedy rozhoduje:

- ponechat dosavadní nejlepší cestu
- nebo ji nahradit cestou přes mezivrchol `k`

---

# ➖ Záporné váhy hran

Floyd-Warshall dokáže pracovat se zápornými vahami hran.

Například:

```txt
C → D = -2
```

Samotná záporná hrana ještě neznamená přítomnost záporného cyklu.

Pouze snižuje celkovou cenu cesty, která ji využívá.

---

# ⚠️ Záporné cykly

Záporný cyklus je cyklus, jehož součet vah je menší než nula.

Například:

```txt
A → B = 2
B → C = -5
C → A = 1
```

Celková váha:

```txt
2 - 5 + 1 = -2
```

Opakovaným průchodem takového cyklu lze cenu cesty stále snižovat.

---

# 🔍 Detekce záporného cyklu

Po dokončení algoritmu se kontroluje hlavní diagonála matice.

Pokud platí:

```txt
dist[i][i] < 0
```

graf obsahuje záporný cyklus.

Vizualizace takové diagonální buňky zvýrazní červeně.

---

# ⏭ Krokový režim

Vizualizace umožňuje ruční procházení algoritmu.

Každým stisknutím tlačítka se zpracuje jedna kombinace:

```txt
(i, j, k)
```

Je tak možné podrobně sledovat:

- aktuální dvojici
- použitý mezivrchol
- přímou vzdálenost
- kandidátní vzdálenost
- rozhodnutí o aktualizaci

---

# 🎲 Náhodný graf

Tlačítko pro náhodný graf vytvoří novou sadu orientovaných hran.

Graf může obsahovat:

- kladné váhy
- záporné váhy
- různou hustotu hran
- nedosažitelné dvojice vrcholů

Některé náhodné grafy mohou obsahovat také záporný cyklus.

---

# 👁 Náhled počáteční matice

Tlačítko počáteční matice dočasně zobrazí původní hodnoty vytvořené přímo z hran grafu.

Uživatel tak může porovnat:

- počáteční přímé vzdálenosti
- aktuálně vypočítané nejkratší vzdálenosti

Náhled algoritmus neresetuje.

---

# 📈 Průběh algoritmu

Pro graf s `V` vrcholy algoritmus zkontroluje:

```txt
V × V × V
```

kombinací.

Pro pět vrcholů:

```txt
5³ = 125 kroků
```

Průběh se vypočítává jako:

```txt
zpracované buňky / V³
```

---

# 📊 Statistiky

Rozhraní zobrazuje:

- aktuální mezivrchol `k`
- aktuální dvojici `i → j`
- počet zpracovaných buněk
- počet úspěšných aktualizací
- celkové procento dokončení

---

# ⏱ Časová složitost

Floyd-Warshall obsahuje tři vnořené cykly:

```txt
for k
    for i
        for j
```

Časová složitost je:

```txt
O(V³)
```

Kde `V` představuje počet vrcholů.

---

# 💾 Prostorová složitost

Algoritmus ukládá hodnotu pro každou dvojici vrcholů.

Prostorová složitost je:

```txt
O(V²)
```

---

# 🚀 Kde se Floyd-Warshall používá?

Floyd-Warshallův algoritmus se používá například pro:

- nejkratší cesty mezi všemi dvojicemi
- analýzu počítačových sítí
- dopravní sítě
- grafy závislostí
- herní mapy
- geografické informační systémy
- analýzu sociálních sítí
- výpočet dosažitelnosti
- tranzitivní uzávěr
- menší a středně velké husté grafy

---

# 🆚 Floyd-Warshall vs Dijkstra

## Floyd-Warshall

```txt
Cesty: Mezi všemi dvojicemi
Záporné hrany: Ano
Detekce záporného cyklu: Ano
Složitost: O(V³)
Vhodný pro: Husté grafy a kompletní tabulku vzdáleností
```

## Dijkstra

```txt
Cesty: Z jednoho zdroje
Záporné hrany: Ne
Detekce záporného cyklu: Ne
Typická složitost: O((V + E) log V)
Vhodný pro: Nejkratší cesty z jednoho uzlu
```

---

# 🆚 Floyd-Warshall vs Bellman-Ford

## Floyd-Warshall

```txt
Počítá cesty mezi všemi dvojicemi
Používá matici vzdáleností
Časová složitost: O(V³)
```

## Bellman-Ford

```txt
Počítá cesty z jednoho zdroje
Opakovaně relaxuje všechny hrany
Časová složitost: O(V × E)
```

Oba algoritmy podporují záporné váhy a dokážou odhalit záporný cyklus.

---

# 🎨 Význam barev

🟨 Aktuálně kontrolovaná buňka

🟦 Hodnoty použité pro cestu přes `k`

🟩 Nově nalezená kratší vzdálenost

🟥 Záporná hodnota na hlavní diagonále

⚪ Nezměněná hodnota matice

---

# 📌 Autor

Štefan Tusjak

🌐 Vzdělávací portál:

https://vzdelavaci-portal.cz

🌐 GitHub organizace:

https://github.com/Vzdelavaci-Portal

---

# ⭐ Podpora projektu

Pokud se vám projekt líbí:

- přidejte hvězdičku ⭐
- sdílejte vizualizaci
- využijte ji při studiu nebo výuce
- experimentujte s náhodnými grafy
- porovnejte ji s dalšími algoritmy nejkratších cest

---

# 🚀 Nauč se algoritmy vizuálně

Floyd-Warshall propojuje důležité principy informatiky:

- teorii grafů
- orientované ohodnocené grafy
- nejkratší cesty
- matice vzdáleností
- dynamické programování
- záporné váhy
- detekci záporných cyklů
- kubickou časovou složitost

Jeho pochopení vytváří dobrý základ pro další témata:

- Bellman-Ford
- Dijkstra
- Johnsonův algoritmus
- tranzitivní uzávěr
- Warshallův algoritmus
- optimalizaci grafů