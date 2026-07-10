# ⭐ A* Search Visualization

Interactive visualization of the A* Search pathfinding algorithm built with HTML, CSS and JavaScript.

This project is part of the **Algorithm Lab** series focused on creating modern, interactive and educational algorithm visualizations.

---

# 🇬🇧 About

A* Search is one of the most widely used pathfinding algorithms.

It finds the shortest path between a start point and a goal by combining:

- the real path cost from the start
- an estimated distance to the goal

For every cell, the algorithm calculates:

```txt
f = g + h
```

Where:

- `g` = cost from the start
- `h` = heuristic estimate to the goal
- `f` = total estimated path cost

This visualization helps users understand:

- how A* Search works
- how the Open Set and Closed Set are used
- how the heuristic guides the search
- how `g`, `h` and `f` values are calculated
- how obstacles affect pathfinding
- how the final shortest path is reconstructed

---

# ✨ Features

- 🎮 Interactive controls
- 🖱 Click and drag to create walls
- 🟪 Movable start position
- 🎯 Movable goal position
- 🎲 Random obstacle generation
- 🧹 Clear all obstacles
- ⚡ Real-time animation
- 🌍 CZ / EN language support
- 🎨 Modern compact neon UI
- 🖥 Desktop-friendly one-screen layout
- 📱 Responsive design
- 🧠 Educational explanations
- 🔄 Adjustable animation speed
- 🟦 Live Open Set visualization
- 🟥 Live Closed Set visualization
- 🟨 Current cell highlighting
- 🧮 Live `g`, `h` and `f` values
- 🟩 Animated final path
- 📊 Pathfinding statistics

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
19-AStar/
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

https://stefantusjak.cz/algorithms/a-star-search/

🌍 GitHub Pages:

https://vzdelavaci-portal.github.io/Algorithm/

---

# 🧠 How A* Search Works

Imagine a grid containing:

- a start cell
- a goal cell
- walkable cells
- obstacles

Example:

```txt
S . . . . .
# # . # # .
. . . . # .
. # # . # .
. . . . . G
```

Legend:

```txt
S = Start
G = Goal
# = Wall
. = Walkable cell
```

The algorithm tries to reach the goal while avoiding walls.

---

# 🧮 The A* Formula

A* evaluates each candidate cell using:

```txt
f = g + h
```

## `g` — Path Cost

`g` represents the real cost from the start to the current cell.

Example:

```txt
Start → current cell = 8 steps
```

Therefore:

```txt
g = 8
```

---

## `h` — Heuristic

`h` estimates the remaining distance from the current cell to the goal.

This project uses the Manhattan distance:

```txt
h = |current row - goal row|
  + |current column - goal column|
```

The Manhattan heuristic is suitable because movement is allowed in four directions:

- up
- down
- left
- right

---

## `f` — Total Score

The final score combines both values:

```txt
f = g + h
```

Example:

```txt
g = 8
h = 5

f = 13
```

A* usually selects the cell with the lowest `f` score.

---

# 🟦 Open Set

The Open Set contains cells discovered by the algorithm but not yet fully processed.

Example:

```txt
(4, 6) f: 14
(5, 6) f: 14
(6, 5) f: 16
```

The most promising cell is selected from this set.

---

# 🟥 Closed Set

The Closed Set contains cells that have already been fully processed.

Once a cell is placed into the Closed Set, the algorithm normally does not need to evaluate it again.

Example:

```txt
(3, 3)
(3, 4)
(4, 4)
```

---

# 🧭 Search Process

## Step 1 — Initialize the Start

The start cell receives:

```txt
g = 0
```

Its heuristic is calculated:

```txt
h = distance to goal
```

Then:

```txt
f = g + h
```

The start cell is inserted into the Open Set.

---

## Step 2 — Select the Best Cell

The algorithm selects the cell with the lowest `f` value.

If several cells have the same `f`, the cell with the lower heuristic can be preferred.

---

## Step 3 — Check Neighbours

The algorithm checks all walkable neighbouring cells.

For each neighbour it calculates a possible new path cost:

```txt
tentative g = current g + movement cost
```

In this visualization, each move costs:

```txt
1
```

---

## Step 4 — Update Better Paths

If the new route is better than the previously known route, the neighbour is updated:

```txt
parent = current cell
g = new path cost
h = estimated distance
f = g + h
```

The parent reference is later used to reconstruct the final path.

---

## Step 5 — Repeat

The current cell is moved into the Closed Set.

The algorithm continues with the next cell having the lowest `f` score.

---

## Step 6 — Reach the Goal

When the goal cell is selected, the search is complete.

The algorithm follows the stored parent references backwards:

```txt
Goal ← previous ← previous ← Start
```

After reversing the order, the final route is displayed.

---

# 🟩 Path Reconstruction

Example:

```txt
Start
↓
(3, 4)
↓
(4, 4)
↓
(5, 4)
↓
Goal
```

The visualization reveals the final shortest path step by step in green.

---

# 🧱 Obstacles

Users can draw walls by clicking or dragging across the grid.

Walls cannot be crossed by the algorithm.

Changing the wall layout can completely alter:

- the explored area
- the number of processed cells
- the selected route
- the path length

This makes the visualizer useful for experimenting with different pathfinding situations.

---

# 🚀 Where Is A* Search Used?

A* is commonly used in:

- video game pathfinding
- robotics
- GPS navigation
- maze solving
- route planning
- artificial intelligence
- warehouse automation
- autonomous systems
- strategy games
- simulation software

---

# ⚠️ Heuristic Quality

The performance of A* depends heavily on the heuristic.

A good heuristic guides the algorithm toward the target and reduces unnecessary exploration.

For A* to guarantee the shortest path, the heuristic should be admissible, meaning that it must not overestimate the true remaining cost.

The Manhattan distance used in this project is admissible for four-directional movement with equal movement costs.

---

# 📊 Time and Space Complexity

The exact complexity depends on:

- graph structure
- number of cells
- obstacle layout
- quality of the heuristic

In the worst case, A* may explore a large portion of the search space.

Its memory usage can also be significant because it stores the Open Set, Closed Set and path information.

A strong heuristic often allows A* to explore far fewer nodes than Dijkstra's Algorithm.

---

# 🎨 Color Legend

🟪 Start cell

🎯 Goal cell

⬛ Wall

🟦 Open Set

🟥 Closed Set

🟨 Current cell

🟩 Final shortest path

---

# 🖥 Compact Layout

The visualizer uses a compact desktop layout:

```txt
┌───────────────┬───────────────────────────────┐
│ Controls      │ Main pathfinding grid         │
│ Edit modes    │                               │
│ g / h / f     │                               │
│ Statistics    │                               │
├───────────────┴───────────────────────────────┤
│ Status | Open Set | Closed Set | Result       │
└───────────────────────────────────────────────┘
```

This keeps the grid large and readable without requiring the page to be heavily zoomed out.

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
- experiment with different obstacle layouts
- create your own algorithm visualizations

---

# 🚀 Learn Algorithms Visually

A* Search connects several important computer science concepts:

- graph traversal
- pathfinding
- heuristics
- priority-based exploration
- distance calculation
- path reconstruction
- artificial intelligence

Understanding A* provides a strong foundation for:

- Dijkstra's Algorithm
- Greedy Best-First Search
- bidirectional search
- Jump Point Search
- game AI
- robotic navigation

---

---

# 🇨🇿 O projektu

Interaktivní vizualizace algoritmu A* Search vytvořená pomocí HTML, CSS a JavaScriptu.

Tento projekt je součástí série **Algorithm Lab**, zaměřené na moderní, interaktivní a edukativní vizualizace algoritmů.

---

# 🇨🇿 Jak funguje A* Search?

A* Search patří mezi nejznámější algoritmy pro hledání cest.

Hledá nejkratší cestu mezi startem a cílem pomocí kombinace:

- skutečné ceny cesty od startu
- odhadu zbývající vzdálenosti do cíle

Pro každé políčko vypočítává:

```txt
f = g + h
```

kde:

- `g` = cena cesty od startu
- `h` = heuristický odhad vzdálenosti do cíle
- `f` = celkové odhadované skóre cesty

Vizualizace pomáhá pochopit:

- jak A* Search pracuje
- jak fungují množiny Open Set a Closed Set
- jak heuristika směruje hledání
- jak se počítají hodnoty `g`, `h` a `f`
- jak překážky ovlivňují hledání cesty
- jak se sestavuje výsledná nejkratší cesta

---

# ✨ Funkce

- 🎮 Interaktivní ovládání
- 🖱 Kreslení překážek kliknutím nebo tažením
- 🟪 Přesunutelná startovní pozice
- 🎯 Přesunutelná cílová pozice
- 🎲 Generování náhodných překážek
- 🧹 Odstranění všech překážek
- ⚡ Animace v reálném čase
- 🌍 Podpora CZ / EN
- 🎨 Moderní kompaktní neonový design
- 🖥 Rozložení optimalizované pro jednu obrazovku
- 📱 Responzivní rozhraní
- 🧠 Edukativní vysvětlení
- 🔄 Nastavitelná rychlost animace
- 🟦 Živá vizualizace Open Setu
- 🟥 Živá vizualizace Closed Setu
- 🟨 Zvýraznění aktuálního políčka
- 🧮 Aktuální hodnoty `g`, `h` a `f`
- 🟩 Animované zobrazení výsledné cesty
- 📊 Statistiky hledání

---

# 🛠 Technologie

- HTML5
- CSS3
- JavaScript

Frontend projekt bez frameworků.

---

# 📂 Struktura projektu

```txt
19-AStar/
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

https://stefantusjak.cz/algorithms/a-star-search/

🌍 GitHub Pages:

https://vzdelavaci-portal.github.io/Algorithm/

---

# 🧠 Základní princip

Představme si mřížku obsahující:

- start
- cíl
- průchozí políčka
- překážky

Například:

```txt
S . . . . .
# # . # # .
. . . . # .
. # # . # .
. . . . . G
```

Význam:

```txt
S = Start
G = Cíl
# = Překážka
. = Průchozí políčko
```

Algoritmus se snaží dostat ze startu do cíle a přitom se vyhnout překážkám.

---

# 🧮 Vzorec A*

A* hodnotí jednotlivá políčka pomocí vzorce:

```txt
f = g + h
```

## `g` — Cena cesty

Hodnota `g` představuje skutečnou cenu cesty ze startu do aktuálního políčka.

Například:

```txt
Start → aktuální políčko = 8 kroků
```

Potom:

```txt
g = 8
```

---

## `h` — Heuristika

Hodnota `h` odhaduje zbývající vzdálenost od aktuálního políčka do cíle.

Projekt používá Manhattanskou vzdálenost:

```txt
h = |aktuální řádek - řádek cíle|
  + |aktuální sloupec - sloupec cíle|
```

Tato heuristika je vhodná, protože je pohyb povolen ve čtyřech směrech:

- nahoru
- dolů
- doleva
- doprava

---

## `f` — Celkové skóre

Celkové skóre vznikne spojením obou hodnot:

```txt
f = g + h
```

Například:

```txt
g = 8
h = 5

f = 13
```

A* obvykle vybere políčko s nejnižší hodnotou `f`.

---

# 🟦 Open Set

Open Set obsahuje políčka, která algoritmus objevil, ale ještě je kompletně nezpracoval.

Například:

```txt
(4, 6) f: 14
(5, 6) f: 14
(6, 5) f: 16
```

Z této množiny se vybírá nejslibnější další políčko.

---

# 🟥 Closed Set

Closed Set obsahuje políčka, která již byla kompletně zpracována.

Jakmile se políčko přesune do Closed Setu, algoritmus ho za běžných podmínek nemusí znovu zpracovávat.

Například:

```txt
(3, 3)
(3, 4)
(4, 4)
```

---

# 🧭 Průběh hledání

## Krok 1 — Inicializace startu

Startovní políčko získá:

```txt
g = 0
```

Následně se vypočítá jeho heuristika:

```txt
h = vzdálenost do cíle
```

A poté:

```txt
f = g + h
```

Start se vloží do Open Setu.

---

## Krok 2 — Výběr nejlepšího políčka

Algoritmus vybere políčko s nejnižší hodnotou `f`.

Pokud má více políček stejné `f`, může upřednostnit políčko s nižší heuristikou.

---

## Krok 3 — Kontrola sousedů

Algoritmus zkontroluje všechna průchozí sousední políčka.

Pro každého souseda vypočítá možnou novou cenu cesty:

```txt
nové g = g aktuálního políčka + cena pohybu
```

V této vizualizaci stojí každý pohyb:

```txt
1
```

---

## Krok 4 — Aktualizace lepší cesty

Pokud nová cesta vychází lépe než dříve známá cesta, sousední políčko se aktualizuje:

```txt
parent = aktuální políčko
g = nová cena cesty
h = odhad vzdálenosti
f = g + h
```

Odkaz na předchozí políčko se později používá pro sestavení výsledné cesty.

---

## Krok 5 — Pokračování

Aktuální políčko se přesune do Closed Setu.

Algoritmus pokračuje dalším políčkem s nejnižším `f`.

---

## Krok 6 — Nalezení cíle

Jakmile je vybráno cílové políčko, hledání končí.

Algoritmus postupuje zpětně pomocí uložených rodičů:

```txt
Cíl ← předchozí ← předchozí ← Start
```

Po obrácení pořadí získáme výslednou cestu.

---

# 🟩 Sestavení cesty

Například:

```txt
Start
↓
(3, 4)
↓
(4, 4)
↓
(5, 4)
↓
Cíl
```

Vizualizace výslednou nejkratší cestu postupně zvýrazní zeleně.

---

# 🧱 Překážky

Uživatel může kreslit překážky kliknutím nebo tažením myši přes mřížku.

Přes překážky algoritmus nemůže projít.

Změna rozložení překážek může výrazně změnit:

- množství prozkoumaných políček
- počet kroků algoritmu
- výslednou trasu
- délku cesty

Vizualizace je proto vhodná pro experimentování s různými situacemi.

---

# 🚀 Kde se A* Search používá?

A* se používá například pro:

- hledání cest ve videohrách
- robotiku
- GPS navigaci
- řešení bludišť
- plánování tras
- umělou inteligenci
- automatizované sklady
- autonomní systémy
- strategické hry
- simulační software

---

# ⚠️ Kvalita heuristiky

Výkon algoritmu A* výrazně závisí na kvalitě heuristiky.

Dobrá heuristika směruje hledání k cíli a omezuje zbytečné prozkoumávání okolí.

Aby A* zaručil nejkratší cestu, měla by být heuristika přípustná, tedy nesmí nadhodnocovat skutečnou zbývající cenu.

Manhattanská vzdálenost použitá v projektu je přípustná pro pohyb ve čtyřech směrech se stejnou cenou každého kroku.

---

# 📊 Časová a prostorová složitost

Přesná složitost závisí na:

- struktuře prohledávaného prostoru
- počtu políček
- rozložení překážek
- kvalitě heuristiky

V nejhorším případě může A* prozkoumat velkou část dostupného prostoru.

Paměťová náročnost může být také značná, protože algoritmus uchovává Open Set, Closed Set a informace potřebné pro sestavení cesty.

Dobrá heuristika však často umožní prozkoumat výrazně méně uzlů než Dijkstrův algoritmus.

---

# 🎨 Význam barev

🟪 Startovní políčko

🎯 Cílové políčko

⬛ Překážka

🟦 Open Set

🟥 Closed Set

🟨 Aktuální políčko

🟩 Výsledná nejkratší cesta

---

# 🖥 Kompaktní rozložení

Vizualizace používá kompaktní rozložení optimalizované pro počítač:

```txt
┌───────────────┬───────────────────────────────┐
│ Ovládání      │ Hlavní pathfinding mřížka     │
│ Režimy úprav  │                               │
│ g / h / f     │                               │
│ Statistiky    │                               │
├───────────────┴───────────────────────────────┤
│ Stav | Open Set | Closed Set | Výsledek       │
└───────────────────────────────────────────────┘
```

Mřížka tak zůstává dostatečně velká a čitelná bez nutnosti výrazného oddalování stránky.

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
- experimentujte s různými překážkami
- vytvořte vlastní vizualizace algoritmů

---

# 🚀 Nauč se algoritmy vizuálně

A* Search propojuje několik důležitých principů informatiky:

- procházení grafu
- hledání cest
- heuristiky
- prioritní výběr
- výpočet vzdáleností
- rekonstrukci cesty
- umělou inteligenci

Jeho pochopení vytváří pevný základ pro další témata:

- Dijkstrův algoritmus
- Greedy Best-First Search
- obousměrné vyhledávání
- Jump Point Search
- herní AI
- navigaci robotů