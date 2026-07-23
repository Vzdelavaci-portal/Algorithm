# 🌳 Kruskal's Algorithm Visualization

Interactive visualization of Kruskal’s Minimum Spanning Tree algorithm built with HTML, CSS and JavaScript.

This project is part of the **Algorithm Lab** series focused on modern, interactive and educational algorithm visualizations.

---

# 🇬🇧 About

Kruskal’s Algorithm finds a **Minimum Spanning Tree**, also called an MST, in a connected weighted undirected graph.

A spanning tree connects all vertices while containing no cycles.

A minimum spanning tree is the spanning tree with the smallest possible total edge weight.

Kruskal’s Algorithm works by:

1. Sorting all edges by weight.
2. Selecting the cheapest remaining edge.
3. Checking whether the edge would create a cycle.
4. Adding the edge only when it connects two different components.
5. Continuing until the tree contains `V - 1` edges.

This visualization helps users understand:

- minimum spanning trees
- greedy algorithms
- edge sorting
- cycle prevention
- connected components
- Union-Find
- Disjoint Set Union
- path compression
- union by rank
- total MST weight

---

# ✨ Features

- 🌳 Interactive Minimum Spanning Tree visualization
- 🔗 Weighted undirected graph
- 📋 Sorted edge list
- ▶ Automatic animation
- ⏸ Pause and continue controls
- ⏭ Step-by-step execution
- ↻ Algorithm reset
- 🎲 Random graph generation
- ⚡ Adjustable animation speed
- 🌍 CZ / EN language support
- 🟨 Current-edge highlighting
- 🟩 Accepted MST edges
- 🟥 Rejected cycle-producing edges
- 🔗 Live Union-Find component visualization
- ⚖️ Live edge decision panel
- 📊 Algorithm statistics
- 📈 Progress indicator
- 🧮 Live total MST weight
- 🌲 Minimum spanning forest detection
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
22-Kruskal/
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

https://vzdelavaci-portal.github.io/Algorithm/22-Kruskal/

💻 Source Code:

https://github.com/Vzdelavaci-Portal/Algorithm/tree/main/22-Kruskal

---

# 🧠 How Kruskal's Algorithm Works

Kruskal’s Algorithm processes graph edges in ascending order of weight.

For each edge:

```txt
u — v
```

the algorithm checks whether vertices `u` and `v` already belong to the same connected component.

If they belong to different components:

```txt
Find(u) != Find(v)
```

the edge is accepted.

The components are then merged:

```txt
Union(u, v)
```

If both vertices already belong to the same component:

```txt
Find(u) == Find(v)
```

adding the edge would create a cycle, so the edge is rejected.

---

# 🌳 What Is a Spanning Tree?

A spanning tree is a subset of graph edges that:

- connects every vertex
- contains no cycles
- contains exactly `V - 1` edges

For a graph containing six vertices:

```txt
V = 6
```

a spanning tree must contain:

```txt
V - 1 = 5 edges
```

Removing any selected edge would disconnect the tree.

Adding another edge would create a cycle.

---

# ⚖️ What Is a Minimum Spanning Tree?

A graph may contain many different spanning trees.

A Minimum Spanning Tree is the spanning tree with the lowest total edge weight.

Example spanning-tree weights:

```txt
Tree 1 = 24
Tree 2 = 17
Tree 3 = 20
```

The minimum spanning tree is:

```txt
Tree 2 = 17
```

There may be more than one valid MST when several edges have equal weights.

---

# 🔢 Sorting the Edges

Before building the MST, Kruskal’s Algorithm sorts all edges by weight.

Example:

```txt
D — E   weight 1
A — F   weight 2
B — E   weight 3
A — B   weight 4
C — D   weight 4
B — F   weight 5
B — C   weight 6
E — F   weight 6
A — E   weight 7
C — E   weight 8
```

The algorithm always processes the lowest remaining edge first.

This greedy strategy chooses the best available local option at each step.

---

# 🟨 Current Edge

The edge currently being inspected is highlighted in yellow.

For example:

```txt
A — B
Weight = 4
```

The algorithm checks the connected component of both endpoints.

```txt
Component(A) = {A, F}
Component(B) = {B, D, E}
```

Because the components are different, the edge may safely be added.

---

# 🟩 Accepted Edge

An edge is accepted when its endpoints belong to different components.

Condition:

```txt
Find(u) != Find(v)
```

Example:

```txt
A — F
```

Initial components:

```txt
{A}
{F}
```

After accepting the edge:

```txt
{A, F}
```

The edge becomes part of the minimum spanning tree and remains highlighted in green.

---

# 🟥 Rejected Edge

An edge is rejected when both endpoints already belong to the same component.

Condition:

```txt
Find(u) == Find(v)
```

Example:

```txt
A — B
```

Suppose the current MST already contains:

```txt
A — F
F — E
E — B
```

There is already a path between `A` and `B`.

Adding:

```txt
A — B
```

would create a cycle:

```txt
A → F → E → B → A
```

The edge is therefore rejected and highlighted in red.

---

# 🔄 Cycle Prevention

Kruskal’s Algorithm does not explicitly search the graph for complete cycles.

Instead, it checks whether both endpoints of an edge are already connected.

If they have the same representative:

```txt
Find(u) == Find(v)
```

then a path already exists between them.

Adding another edge would close that path into a cycle.

Union-Find makes this check efficient.

---

# 🔗 Union-Find

Union-Find is also known as:

- Disjoint Set Union
- DSU
- Union-Find Set
- Disjoint Set data structure

It manages a collection of separate groups.

At the beginning, every vertex belongs to its own component:

```txt
{A}
{B}
{C}
{D}
{E}
{F}
```

After accepting an edge:

```txt
A — F
```

the components become:

```txt
{A, F}
{B}
{C}
{D}
{E}
```

After accepting:

```txt
D — E
```

the components become:

```txt
{A, F}
{B}
{C}
{D, E}
```

The visualization displays these changes after every accepted edge.

---

# 🔍 Find Operation

The `Find` operation returns the representative of the component containing a vertex.

Example:

```txt
Find(A)
Find(F)
```

If both operations return the same representative, the vertices belong to the same component.

Example:

```txt
Find(A) = A
Find(F) = A
```

This means:

```txt
A and F are connected
```

---

# 🔗 Union Operation

The `Union` operation merges two separate components.

Example:

```txt
Union(A, F)
```

Before:

```txt
{A}
{F}
```

After:

```txt
{A, F}
```

In Kruskal’s Algorithm, `Union` is called only after an edge has been accepted.

---

# ⚡ Path Compression

Path compression improves the `Find` operation.

Without path compression, the parent structure might look like:

```txt
F → E → B → A
```

After calling:

```txt
Find(F)
```

path compression can update the structure to:

```txt
F → A
E → A
B → A
```

Future lookups become much faster.

The implementation uses recursive path compression:

```javascript
function find(node) {
    if (parent[node] !== node) {
        parent[node] = find(parent[node]);
    }

    return parent[node];
}
```

---

# 📈 Union by Rank

Union by rank helps keep the Union-Find trees shallow.

When merging two components:

- the smaller-rank tree is attached below the larger-rank tree
- if both ranks are equal, one root becomes the parent
- the selected root rank increases

Example:

```txt
rank[A] = 2
rank[D] = 1
```

After:

```txt
Union(A, D)
```

the root of `D` is attached below `A`.

This improves the performance of future `Find` operations.

---

# 🧮 Example

Consider the following sorted edges:

```txt
D — E   1
A — F   2
B — E   3
A — B   4
C — D   4
B — F   5
```

## Step 1

```txt
D — E   weight 1
```

Different components:

```txt
{D}
{E}
```

Decision:

```txt
Accepted
```

MST weight:

```txt
1
```

## Step 2

```txt
A — F   weight 2
```

Different components:

```txt
{A}
{F}
```

Decision:

```txt
Accepted
```

MST weight:

```txt
3
```

## Step 3

```txt
B — E   weight 3
```

Different components:

```txt
{B}
{D, E}
```

Decision:

```txt
Accepted
```

MST weight:

```txt
6
```

## Step 4

```txt
A — B   weight 4
```

Different components:

```txt
{A, F}
{B, D, E}
```

Decision:

```txt
Accepted
```

MST weight:

```txt
10
```

## Step 5

```txt
C — D   weight 4
```

Different components:

```txt
{C}
{A, B, D, E, F}
```

Decision:

```txt
Accepted
```

The MST now contains:

```txt
V - 1 = 5 edges
```

The algorithm can stop.

---

# 🛑 Early Termination

A spanning tree for a graph with `V` vertices always contains:

```txt
V - 1
```

edges.

Therefore, Kruskal’s Algorithm can stop as soon as:

```txt
acceptedEdges.length == V - 1
```

It is not necessary to inspect the remaining heavier edges.

---

# 🌲 Disconnected Graphs

A disconnected graph does not contain a spanning tree connecting all vertices.

If Kruskal’s Algorithm processes every edge but selects fewer than:

```txt
V - 1
```

edges, the graph is disconnected.

The result is called a:

```txt
Minimum Spanning Forest
```

Each connected component receives its own minimum spanning tree.

---

# 🎲 Random Graph Generator

The visualization can generate a new random weighted graph.

The generator first creates enough edges to connect all vertices.

It then adds extra edges to create alternative routes and possible cycles.

Generated edge weights are positive integers.

Example:

```txt
1 to 9
```

The new graph can produce a different MST and a different total weight after each generation.

---

# ⏭ Step Mode

The step button processes one edge at a time.

Each step shows:

- the current edge
- the edge weight
- the component containing the first endpoint
- the component containing the second endpoint
- whether the edge is accepted
- whether the edge would create a cycle
- the updated Union-Find components
- the current MST weight

This mode is useful for examining every decision carefully.

---

# ▶ Automatic Mode

Automatic mode processes the sorted edges continuously.

The animation can be:

- paused
- resumed
- reset
- slowed down
- sped up

The current edge is highlighted in both the graph and the sorted edge list.

---

# 📊 Statistics

The interface displays:

- number of processed edges
- number of accepted edges
- number of rejected edges
- current MST weight
- current MST edge count
- total algorithm progress

Example:

```txt
Processed edges: 7
Accepted edges: 5
Rejected edges: 2
MST weight: 17
```

---

# 📈 Progress Calculation

Progress is based on the number of processed edges:

```txt
processed edges / total edges
```

Where:

```txt
processed edges =
accepted edges + rejected edges
```

The algorithm may finish before reaching `100%` of all edges because it stops after selecting `V - 1` edges.

---

# ⏱ Time Complexity

The most expensive step is sorting all edges.

Sorting requires:

```txt
O(E log E)
```

Union-Find operations are extremely efficient.

With path compression and union by rank, their amortized complexity is approximately:

```txt
O(α(V))
```

where `α` is the inverse Ackermann function, which grows extremely slowly.

The overall complexity is therefore:

```txt
O(E log E)
```

---

# 💾 Space Complexity

The algorithm stores:

- all graph edges
- the Union-Find parent array
- the rank array
- the selected MST edges

The space complexity is:

```txt
O(V + E)
```

---

# 🚀 Where Is Kruskal's Algorithm Used?

Kruskal’s Algorithm is useful in:

- computer-network design
- road construction
- electrical-grid planning
- pipeline networks
- telecommunications
- cable installation
- clustering
- image segmentation
- circuit design
- transportation systems
- infrastructure optimization

The common goal is to connect all required locations with the smallest total cost.

---

# 🌐 Network Design Example

Suppose several buildings need to be connected by network cables.

Each possible cable has a cost based on:

- cable length
- installation difficulty
- material cost
- terrain

Kruskal’s Algorithm selects the cheapest set of cables that connects every building without unnecessary loops.

The resulting network is a Minimum Spanning Tree.

---

# 🆚 Kruskal vs Prim

Both algorithms find a Minimum Spanning Tree.

## Kruskal

```txt
Processes edges globally
Sorts all edges
Uses Union-Find
Grows multiple components
Works well for sparse graphs
Typical complexity: O(E log E)
```

## Prim

```txt
Starts from one selected vertex
Grows one connected tree
Usually uses a priority queue
Works well for dense graphs
Typical complexity: O(E log V)
```

Kruskal chooses the cheapest available edge in the entire graph.

Prim chooses the cheapest edge leaving the current tree.

---

# 🆚 Kruskal vs Dijkstra

These algorithms solve different problems.

## Kruskal

```txt
Goal: Minimum Spanning Tree
Connects all vertices
Minimizes total tree weight
Does not calculate shortest routes
```

## Dijkstra

```txt
Goal: Shortest paths from one source
Calculates route distances
May not connect every vertex
Does not create an MST
```

A Minimum Spanning Tree does not guarantee the shortest path between every pair of vertices.

---

# 🎨 Color Legend

⚪ Unprocessed edge

🟨 Currently inspected edge

🟩 Edge accepted into the MST

🟥 Edge rejected because it would create a cycle

🟢 Vertex already included in the current forest

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
- compare Kruskal with Prim
- inspect how Union-Find components change

---

# 🚀 Learn Algorithms Visually

Kruskal’s Algorithm combines several important computer-science concepts:

- graph theory
- weighted undirected graphs
- minimum spanning trees
- greedy algorithms
- sorting
- cycle prevention
- connected components
- Union-Find
- path compression
- union by rank

Understanding Kruskal provides a strong foundation for studying:

- Prim’s Algorithm
- Borůvka’s Algorithm
- Disjoint Set Union
- graph clustering
- network optimization
- connectivity problems
- offline graph queries

---

---

# 🇨🇿 Kruskalův algoritmus – vizualizace

Interaktivní vizualizace Kruskalova algoritmu pro hledání minimální kostry vytvořená pomocí HTML, CSS a JavaScriptu.

Projekt je součástí série **Algorithm Lab**, která se zaměřuje na moderní, interaktivní a edukativní vizualizace algoritmů.

---

# 🇨🇿 O projektu

Kruskalův algoritmus hledá **minimální kostru**, označovanou také jako MST, v souvislém ohodnoceném neorientovaném grafu.

Kostra grafu propojuje všechny vrcholy a neobsahuje žádný cyklus.

Minimální kostra je taková kostra, jejíž celkový součet vah hran je nejnižší možný.

Kruskalův algoritmus funguje následovně:

1. Seřadí všechny hrany podle jejich váhy.
2. Vybere nejlevnější dosud nezpracovanou hranu.
3. Zkontroluje, zda by hrana vytvořila cyklus.
4. Přidá ji pouze tehdy, když spojuje dvě různé komponenty.
5. Pokračuje, dokud kostra neobsahuje `V - 1` hran.

Vizualizace pomáhá pochopit:

- minimální kostry grafu
- hladové algoritmy
- řazení hran
- předcházení cyklům
- propojené komponenty
- Union-Find
- Disjoint Set Union
- kompresi cest
- spojování podle ranku
- celkovou váhu MST

---

# ✨ Funkce

- 🌳 Interaktivní vizualizace minimální kostry
- 🔗 Ohodnocený neorientovaný graf
- 📋 Seřazený seznam hran
- ▶ Automatická animace
- ⏸ Pozastavení a pokračování
- ⏭ Procházení krok za krokem
- ↻ Reset algoritmu
- 🎲 Generování náhodného grafu
- ⚡ Nastavitelná rychlost animace
- 🌍 Podpora CZ / EN
- 🟨 Zvýraznění aktuální hrany
- 🟩 Přijaté hrany minimální kostry
- 🟥 Odmítnuté hrany vytvářející cyklus
- 🔗 Živá vizualizace Union-Find komponent
- ⚖️ Panel rozhodování algoritmu
- 📊 Statistiky
- 📈 Ukazatel průběhu
- 🧮 Průběžná celková váha MST
- 🌲 Detekce minimálního kostrového lesa
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
22-Kruskal/
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

https://vzdelavaci-portal.github.io/Algorithm/22-Kruskal/

💻 Zdrojový kód:

https://github.com/Vzdelavaci-Portal/Algorithm/tree/main/22-Kruskal

---

# 🧠 Jak Kruskalův algoritmus funguje?

Kruskalův algoritmus zpracovává hrany grafu vzestupně podle jejich váhy.

Pro každou hranu:

```txt
u — v
```

algoritmus kontroluje, zda vrcholy `u` a `v` již patří do stejné propojené komponenty.

Pokud patří do různých komponent:

```txt
Find(u) != Find(v)
```

hrana je přijata.

Komponenty se následně spojí:

```txt
Union(u, v)
```

Pokud oba vrcholy patří do stejné komponenty:

```txt
Find(u) == Find(v)
```

přidáním hrany by vznikl cyklus, a proto je hrana odmítnuta.

---

# 🌳 Co je kostra grafu?

Kostra je podmnožina hran grafu, která:

- propojuje všechny vrcholy
- neobsahuje žádný cyklus
- obsahuje přesně `V - 1` hran

Pro graf se šesti vrcholy:

```txt
V = 6
```

musí kostra obsahovat:

```txt
V - 1 = 5 hran
```

Odebráním libovolné vybrané hrany by se kostra rozpojila.

Přidáním další hrany by vznikl cyklus.

---

# ⚖️ Co je minimální kostra?

Jeden graf může obsahovat více různých koster.

Minimální kostra je ta kostra, která má nejnižší celkový součet vah hran.

Příklad vah jednotlivých koster:

```txt
Kostra 1 = 24
Kostra 2 = 17
Kostra 3 = 20
```

Minimální kostra je:

```txt
Kostra 2 = 17
```

Pokud mají některé hrany stejné váhy, může existovat více správných minimálních koster.

---

# 🔢 Seřazení hran

Před sestavením MST Kruskalův algoritmus seřadí všechny hrany podle váhy.

Příklad:

```txt
D — E   váha 1
A — F   váha 2
B — E   váha 3
A — B   váha 4
C — D   váha 4
B — F   váha 5
B — C   váha 6
E — F   váha 6
A — E   váha 7
C — E   váha 8
```

Algoritmus vždy nejprve zpracuje nejlevnější dosud nepoužitou hranu.

Tato hladová strategie volí v každém kroku nejlepší právě dostupnou možnost.

---

# 🟨 Aktuální hrana

Právě kontrolovaná hrana je zvýrazněna žlutě.

Například:

```txt
A — B
Váha = 4
```

Algoritmus zjistí propojené komponenty obou koncových vrcholů.

```txt
Komponenta(A) = {A, F}
Komponenta(B) = {B, D, E}
```

Protože jsou komponenty různé, lze hranu bezpečně přidat.

---

# 🟩 Přijatá hrana

Hrana je přijata, pokud její koncové vrcholy patří do různých komponent.

Podmínka:

```txt
Find(u) != Find(v)
```

Příklad:

```txt
A — F
```

Původní komponenty:

```txt
{A}
{F}
```

Po přijetí hrany:

```txt
{A, F}
```

Hrana se stane součástí minimální kostry a zůstane zvýrazněna zeleně.

---

# 🟥 Odmítnutá hrana

Hrana je odmítnuta, pokud oba koncové vrcholy již patří do stejné komponenty.

Podmínka:

```txt
Find(u) == Find(v)
```

Příklad:

```txt
A — B
```

Předpokládejme, že MST již obsahuje:

```txt
A — F
F — E
E — B
```

Mezi vrcholy `A` a `B` již existuje cesta.

Přidáním:

```txt
A — B
```

by vznikl cyklus:

```txt
A → F → E → B → A
```

Hrana je proto odmítnuta a zvýrazněna červeně.

---

# 🔄 Předcházení cyklům

Kruskalův algoritmus nemusí hledat celý cyklus průchodem grafu.

Kontroluje pouze, zda jsou oba konce hrany již propojené.

Pokud mají stejného reprezentanta:

```txt
Find(u) == Find(v)
```

pak mezi nimi již cesta existuje.

Další hrana by tuto cestu uzavřela a vytvořila cyklus.

Datová struktura Union-Find umožňuje tuto kontrolu provést efektivně.

---

# 🔗 Union-Find

Union-Find se také označuje jako:

- Disjoint Set Union
- DSU
- Union-Find Set
- datová struktura disjunktních množin

Spravuje kolekci oddělených skupin.

Na začátku patří každý vrchol do vlastní komponenty:

```txt
{A}
{B}
{C}
{D}
{E}
{F}
```

Po přijetí hrany:

```txt
A — F
```

vzniknou komponenty:

```txt
{A, F}
{B}
{C}
{D}
{E}
```

Po přijetí:

```txt
D — E
```

jsou komponenty:

```txt
{A, F}
{B}
{C}
{D, E}
```

Vizualizace tyto změny zobrazuje po každé přijaté hraně.

---

# 🔍 Operace Find

Operace `Find` vrací reprezentanta komponenty, do které daný vrchol patří.

Příklad:

```txt
Find(A)
Find(F)
```

Pokud obě operace vrátí stejného reprezentanta, vrcholy patří do stejné komponenty.

Například:

```txt
Find(A) = A
Find(F) = A
```

To znamená:

```txt
A a F jsou propojené
```

---

# 🔗 Operace Union

Operace `Union` spojuje dvě samostatné komponenty.

Příklad:

```txt
Union(A, F)
```

Před spojením:

```txt
{A}
{F}
```

Po spojení:

```txt
{A, F}
```

V Kruskalově algoritmu se operace `Union` provede pouze po přijetí hrany.

---

# ⚡ Komprese cest

Komprese cest zrychluje operaci `Find`.

Bez komprese může rodičovská struktura vypadat:

```txt
F → E → B → A
```

Po zavolání:

```txt
Find(F)
```

může komprese cest strukturu upravit:

```txt
F → A
E → A
B → A
```

Budoucí hledání reprezentanta je díky tomu výrazně rychlejší.

Implementace používá rekurzivní kompresi cest:

```javascript
function find(node) {
    if (parent[node] !== node) {
        parent[node] = find(parent[node]);
    }

    return parent[node];
}
```

---

# 📈 Spojování podle ranku

Spojování podle ranku pomáhá udržovat Union-Find stromy nízké.

Při spojování dvou komponent:

- strom s nižším rankem se připojí pod strom s vyšším rankem
- pokud jsou ranky stejné, jeden kořen se stane rodičem
- rank vybraného kořene se zvýší

Příklad:

```txt
rank[A] = 2
rank[D] = 1
```

Po operaci:

```txt
Union(A, D)
```

se kořen `D` připojí pod kořen `A`.

Tím se zrychlí budoucí operace `Find`.

---

# 🧮 Příklad průběhu

Uvažujme seřazené hrany:

```txt
D — E   1
A — F   2
B — E   3
A — B   4
C — D   4
B — F   5
```

## Krok 1

```txt
D — E   váha 1
```

Různé komponenty:

```txt
{D}
{E}
```

Rozhodnutí:

```txt
Přijata
```

Váha MST:

```txt
1
```

## Krok 2

```txt
A — F   váha 2
```

Různé komponenty:

```txt
{A}
{F}
```

Rozhodnutí:

```txt
Přijata
```

Váha MST:

```txt
3
```

## Krok 3

```txt
B — E   váha 3
```

Různé komponenty:

```txt
{B}
{D, E}
```

Rozhodnutí:

```txt
Přijata
```

Váha MST:

```txt
6
```

## Krok 4

```txt
A — B   váha 4
```

Různé komponenty:

```txt
{A, F}
{B, D, E}
```

Rozhodnutí:

```txt
Přijata
```

Váha MST:

```txt
10
```

## Krok 5

```txt
C — D   váha 4
```

Různé komponenty:

```txt
{C}
{A, B, D, E, F}
```

Rozhodnutí:

```txt
Přijata
```

MST nyní obsahuje:

```txt
V - 1 = 5 hran
```

Algoritmus může skončit.

---

# 🛑 Předčasné ukončení

Kostra grafu s `V` vrcholy vždy obsahuje:

```txt
V - 1
```

hran.

Kruskalův algoritmus proto může skončit, jakmile platí:

```txt
acceptedEdges.length == V - 1
```

Zbývající těžší hrany již není nutné kontrolovat.

---

# 🌲 Nesouvislý graf

Nesouvislý graf neobsahuje kostru propojující všechny vrcholy.

Pokud Kruskalův algoritmus zpracuje všechny hrany, ale vybere méně než:

```txt
V - 1
```

hran, graf není souvislý.

Výsledek se označuje jako:

```txt
Minimální kostrový les
```

Každá propojená komponenta získá vlastní minimální kostru.

---

# 🎲 Generátor náhodného grafu

Vizualizace umožňuje vytvořit nový náhodný ohodnocený graf.

Generátor nejprve vytvoří dostatek hran pro propojení všech vrcholů.

Poté přidá další hrany, které vytvářejí alternativní cesty a možné cykly.

Váhy generovaných hran jsou kladná celá čísla.

Například:

```txt
1 až 9
```

Každý nový graf může mít jinou minimální kostru a jinou celkovou váhu.

---

# ⏭ Krokový režim

Tlačítko pro krok zpracuje vždy jednu hranu.

Každý krok zobrazí:

- aktuální hranu
- váhu hrany
- komponentu prvního vrcholu
- komponentu druhého vrcholu
- zda byla hrana přijata
- zda by hrana vytvořila cyklus
- aktualizované Union-Find komponenty
- aktuální váhu MST

Tento režim je vhodný pro podrobné sledování každého rozhodnutí.

---

# ▶ Automatický režim

Automatický režim zpracovává seřazené hrany postupně bez ručního ovládání.

Animaci lze:

- pozastavit
- znovu spustit
- resetovat
- zpomalit
- zrychlit

Aktuální hrana je zvýrazněna v grafu i v seřazeném seznamu hran.

---

# 📊 Statistiky

Rozhraní zobrazuje:

- počet zpracovaných hran
- počet přijatých hran
- počet odmítnutých hran
- aktuální váhu MST
- počet hran v MST
- celkový průběh algoritmu

Příklad:

```txt
Zpracované hrany: 7
Přijaté hrany: 5
Odmítnuté hrany: 2
Váha MST: 17
```

---

# 📈 Výpočet průběhu

Průběh se vypočítává podle počtu zpracovaných hran:

```txt
zpracované hrany / celkový počet hran
```

Kde:

```txt
zpracované hrany =
přijaté hrany + odmítnuté hrany
```

Algoritmus může skončit ještě před dosažením `100 %`, protože se zastaví po výběru `V - 1` hran.

---

# ⏱ Časová složitost

Nejnáročnější operací je seřazení všech hran.

Řazení vyžaduje:

```txt
O(E log E)
```

Operace Union-Find jsou velmi efektivní.

S kompresí cest a spojováním podle ranku mají amortizovanou složitost přibližně:

```txt
O(α(V))
```

kde `α` je inverzní Ackermannova funkce, která roste extrémně pomalu.

Celková složitost algoritmu je proto:

```txt
O(E log E)
```

---

# 💾 Prostorová složitost

Algoritmus ukládá:

- všechny hrany grafu
- rodičovské hodnoty Union-Find
- rank jednotlivých kořenů
- vybrané hrany MST

Prostorová složitost je:

```txt
O(V + E)
```

---

# 🚀 Kde se Kruskalův algoritmus používá?

Kruskalův algoritmus se používá například při:

- návrhu počítačových sítí
- stavbě silničních sítí
- plánování elektrických rozvodů
- návrhu potrubních systémů
- telekomunikacích
- pokládání kabelů
- shlukování dat
- segmentaci obrazu
- návrhu elektrických obvodů
- plánování dopravy
- optimalizaci infrastruktury

Společným cílem je propojit všechna potřebná místa s co nejnižšími celkovými náklady.

---

# 🌐 Příklad návrhu sítě

Představme si několik budov, které je potřeba propojit síťovými kabely.

Každé možné propojení má cenu podle:

- délky kabelu
- složitosti instalace
- ceny materiálu
- typu terénu

Kruskalův algoritmus vybere nejlevnější sadu kabelů, která propojí všechny budovy bez zbytečných smyček.

Výsledná síť je minimální kostra.

---

# 🆚 Kruskal vs Prim

Oba algoritmy hledají minimální kostru.

## Kruskal

```txt
Zpracovává hrany globálně
Řadí všechny hrany
Používá Union-Find
Postupně spojuje více komponent
Vhodný pro řídké grafy
Typická složitost: O(E log E)
```

## Prim

```txt
Začíná v jednom vybraném vrcholu
Rozšiřuje jednu propojenou kostru
Obvykle používá prioritní frontu
Vhodný pro husté grafy
Typická složitost: O(E log V)
```

Kruskal vybírá nejlevnější dostupnou hranu v celém grafu.

Prim vybírá nejlevnější hranu vedoucí z aktuální kostry.

---

# 🆚 Kruskal vs Dijkstra

Tyto algoritmy řeší rozdílné problémy.

## Kruskal

```txt
Cíl: Minimální kostra
Propojí všechny vrcholy
Minimalizuje celkovou váhu stromu
Nehledá nejkratší trasy
```

## Dijkstra

```txt
Cíl: Nejkratší cesty z jednoho zdroje
Počítá vzdálenosti tras
Nemusí propojit všechny vrcholy
Nevytváří minimální kostru
```

Minimální kostra nezaručuje nejkratší cestu mezi každou dvojicí vrcholů.

---

# 🎨 Význam barev

⚪ Nezpracovaná hrana

🟨 Právě kontrolovaná hrana

🟩 Hrana přijatá do minimální kostry

🟥 Hrana odmítnutá kvůli vytvoření cyklu

🟢 Vrchol již zapojený do aktuálního lesa

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
- porovnejte Kruskalův algoritmus s Primovým
- sledujte změny Union-Find komponent

---

# 🚀 Nauč se algoritmy vizuálně

Kruskalův algoritmus propojuje několik důležitých informatických témat:

- teorii grafů
- ohodnocené neorientované grafy
- minimální kostry
- hladové algoritmy
- řazení
- předcházení cyklům
- propojené komponenty
- Union-Find
- kompresi cest
- spojování podle ranku

Jeho pochopení vytváří dobrý základ pro další témata:

- Primův algoritmus
- Borůvkův algoritmus
- Disjoint Set Union
- shlukování grafů
- optimalizaci sítí
- problémy propojenosti
- offline grafové dotazy