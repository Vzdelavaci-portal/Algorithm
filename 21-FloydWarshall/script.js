const nodes = ["A", "B", "C", "D", "E"];

const nodePositions = {
    A: { x: 95, y: 100 },
    B: { x: 340, y: 65 },
    C: { x: 610, y: 120 },
    D: { x: 560, y: 340 },
    E: { x: 210, y: 345 }
};

const defaultEdges = [
    { from: "A", to: "B", weight: 4 },
    { from: "A", to: "E", weight: 8 },
    { from: "B", to: "C", weight: 3 },
    { from: "B", to: "E", weight: 2 },
    { from: "C", to: "D", weight: -2 },
    { from: "D", to: "B", weight: 1 },
    { from: "E", to: "C", weight: 4 },
    { from: "E", to: "D", weight: 7 }
];

const translations = {
    cs: {
        algorithmNumber: "Algoritmus #21",
        subtitle: "Nejkratší cesty mezi všemi dvojicemi vrcholů.",
        controlsTitle: "Ovládání",
        start: "▶ Start",
        pause: "⏸ Pauza",
        continue: "▶ Pokračovat",
        step: "⏭ Krok",
        reset: "↻ Reset",
        randomGraph: "🎲 Náhodný graf",
        speedTitle: "Rychlost animace",
        fast: "Rychle",
        slow: "Pomalu",
        statisticsTitle: "Statistiky",
        currentK: "Mezivrchol k",
        currentPair: "Aktuální dvojice",
        processedCells: "Zpracované buňky",
        matrixUpdates: "Aktualizace",
        legendTitle: "Legenda",
        legendCurrent: "Kontrolovaná buňka",
        legendIntermediate: "Cesta přes k",
        legendUpdated: "Nová kratší cesta",
        legendNegative: "Záporný cyklus",
        eyebrow: "Nejkratší cesty mezi všemi dvojicemi",
        pageTitle: "Vizualizace Floyd-Warshallova algoritmu",
        graphTitle: "Orientovaný ohodnocený graf",
        graphSubtitle: "Hrany představují počáteční vzdálenosti.",
        matrixTitle: "Matice vzdáleností",
        matrixSubtitle: "Nejlepší známé vzdálenosti mezi všemi uzly.",
        showInitial: "Počáteční matice",
        calculationTitle: "Výpočet aktuální buňky",
        calculationSubtitle: "Porovnání přímé cesty a cesty přes mezivrchol.",
        candidate: "Kandidát",
        statusTitle: "Co se právě děje?",
        statusSubtitle: "Aktuální krok algoritmu.",
        explanationTitle: "Jak Floyd-Warshall funguje?",
        readyState: "Připraveno",
        runningState: "Probíhá",
        pausedState: "Pozastaveno",
        doneState: "Dokončeno",
        negativeState: "Záporný cyklus",
        ready:
            "Spusť algoritmus a sleduj, jak se postupně aktualizuje celá matice vzdáleností.",
        iterationStart:
            "Jako povolený mezivrchol nyní používáme uzel",
        checking:
            "Kontroluji cestu z uzlu <span class='highlight'>{i}</span> do uzlu <span class='highlight'>{j}</span> přes mezivrchol <span class='highlight'>{k}</span>.",
        updated:
            "Cesta přes uzel <span class='highlight'>{k}</span> je kratší. Hodnota se mění z <span class='highlight'>{old}</span> na <span class='highlight'>{value}</span>.",
        unchanged:
            "Původní cesta je stejně krátká nebo kratší. Hodnota zůstává <span class='highlight'>{value}</span>.",
        improvedResult: "Nalezena kratší cesta",
        unchangedResult: "Beze změny",
        finished:
            "Algoritmus dokončil všechny iterace. Matice nyní obsahuje nejkratší vzdálenosti mezi všemi dvojicemi uzlů.",
        negativeCycle:
            "Na diagonále matice se objevila záporná hodnota. Graf obsahuje záporný cyklus.",
        explanation: `
            Floyd-Warshall počítá nejkratší cesty
            <span class="highlight">mezi všemi dvojicemi vrcholů</span>.

            <br><br>

            V každé hlavní iteraci povolí jeden uzel jako nový mezivrchol
            <span class="highlight">k</span> a kontroluje vztah:

            <br><br>

            <strong>
                dist[i][j] = min(
                dist[i][j],
                dist[i][k] + dist[k][j]
                )
            </strong>

            <br><br>

            Algoritmus využívá dynamické programování a má časovou složitost
            <span class="highlight">O(V³)</span>.
        `
    },

    en: {
        algorithmNumber: "Algorithm #21",
        subtitle: "Shortest paths between every pair of vertices.",
        controlsTitle: "Controls",
        start: "▶ Start",
        pause: "⏸ Pause",
        continue: "▶ Continue",
        step: "⏭ Step",
        reset: "↻ Reset",
        randomGraph: "🎲 Random Graph",
        speedTitle: "Animation Speed",
        fast: "Fast",
        slow: "Slow",
        statisticsTitle: "Statistics",
        currentK: "Intermediate k",
        currentPair: "Current Pair",
        processedCells: "Processed Cells",
        matrixUpdates: "Updates",
        legendTitle: "Legend",
        legendCurrent: "Current Cell",
        legendIntermediate: "Route Through k",
        legendUpdated: "Shorter Path",
        legendNegative: "Negative Cycle",
        eyebrow: "All-Pairs Shortest Paths",
        pageTitle: "Floyd-Warshall Algorithm Visualization",
        graphTitle: "Directed Weighted Graph",
        graphSubtitle: "Edges represent the initial distances.",
        matrixTitle: "Distance Matrix",
        matrixSubtitle: "Best known distances between all nodes.",
        showInitial: "Initial Matrix",
        calculationTitle: "Current Cell Calculation",
        calculationSubtitle:
            "Comparing the direct route with the route through an intermediate node.",
        candidate: "Candidate",
        statusTitle: "Current Action",
        statusSubtitle: "The current algorithm step.",
        explanationTitle: "How does Floyd-Warshall work?",
        readyState: "Ready",
        runningState: "Running",
        pausedState: "Paused",
        doneState: "Completed",
        negativeState: "Negative Cycle",
        ready:
            "Start the algorithm and watch the entire distance matrix improve step by step.",
        iterationStart:
            "The currently allowed intermediate node is",
        checking:
            "Checking the route from <span class='highlight'>{i}</span> to <span class='highlight'>{j}</span> through intermediate node <span class='highlight'>{k}</span>.",
        updated:
            "The route through <span class='highlight'>{k}</span> is shorter. The value changes from <span class='highlight'>{old}</span> to <span class='highlight'>{value}</span>.",
        unchanged:
            "The original route is shorter or equal. The value remains <span class='highlight'>{value}</span>.",
        improvedResult: "Shorter path found",
        unchangedResult: "No change",
        finished:
            "All iterations are complete. The matrix now contains the shortest distances between every pair of nodes.",
        negativeCycle:
            "A negative value appeared on the matrix diagonal. The graph contains a negative cycle.",
        explanation: `
            Floyd-Warshall calculates the shortest paths
            <span class="highlight">between every pair of vertices</span>.

            <br><br>

            During each main iteration, one vertex is allowed as a new
            intermediate node <span class="highlight">k</span>:

            <br><br>

            <strong>
                dist[i][j] = min(
                dist[i][j],
                dist[i][k] + dist[k][j]
                )
            </strong>

            <br><br>

            The algorithm uses dynamic programming and has a time complexity of
            <span class="highlight">O(V³)</span>.
        `
    }
};

const elements = {
    graphSvg: document.getElementById("graphSvg"),
    matrix: document.getElementById("distanceMatrix"),

    startBtn: document.getElementById("startBtn"),
    pauseBtn: document.getElementById("pauseBtn"),
    stepBtn: document.getElementById("stepBtn"),
    resetBtn: document.getElementById("resetBtn"),
    randomBtn: document.getElementById("randomBtn"),

    czBtn: document.getElementById("czBtn"),
    enBtn: document.getElementById("enBtn"),

    speedRange: document.getElementById("speedRange"),
    speedValue: document.getElementById("speedValue"),

    currentKValue: document.getElementById("currentKValue"),
    currentPairValue: document.getElementById("currentPairValue"),
    processedValue: document.getElementById("processedValue"),
    updatesValue: document.getElementById("updatesValue"),

    iterationNodeValue: document.getElementById("iterationNodeValue"),
    runState: document.getElementById("runState"),

    directValue: document.getElementById("directValue"),
    firstPartValue: document.getElementById("firstPartValue"),
    secondPartValue: document.getElementById("secondPartValue"),
    candidateValue: document.getElementById("candidateValue"),
    comparisonResult: document.getElementById("comparisonResult"),

    statusText: document.getElementById("statusText"),
    explanationText: document.getElementById("explanationText"),

    progressBar: document.getElementById("progressBar"),
    progressValue: document.getElementById("progressValue"),

    showInitialBtn: document.getElementById("showInitialBtn")
};

let language = "cs";
let edges = structuredClone(defaultEdges);

let initialMatrix = [];
let distanceMatrix = [];

let running = false;
let paused = false;
let finished = false;
let stepRequested = false;

let delay = 700;

let kIndex = 0;
let iIndex = 0;
let jIndex = 0;

let processedCells = 0;
let updates = 0;

let currentCell = null;
let routeCells = [];
let updatedCell = null;

function t(key) {
    return translations[language][key];
}

function replaceVariables(text, variables) {
    return Object.entries(variables).reduce(
        (result, [key, value]) =>
            result.replaceAll(`{${key}}`, value),
        text
    );
}

function formatValue(value) {
    return Number.isFinite(value) ? value : "∞";
}

function createInitialMatrix() {
    const matrix = Array.from(
        { length: nodes.length },
        () => Array(nodes.length).fill(Infinity)
    );

    nodes.forEach((_, index) => {
        matrix[index][index] = 0;
    });

    edges.forEach(edge => {
        const fromIndex = nodes.indexOf(edge.from);
        const toIndex = nodes.indexOf(edge.to);

        matrix[fromIndex][toIndex] = Math.min(
            matrix[fromIndex][toIndex],
            edge.weight
        );
    });

    return matrix;
}

function resetAlgorithm() {
    running = false;
    paused = false;
    finished = false;
    stepRequested = false;

    kIndex = 0;
    iIndex = 0;
    jIndex = 0;

    processedCells = 0;
    updates = 0;

    currentCell = null;
    routeCells = [];
    updatedCell = null;

    initialMatrix = createInitialMatrix();
    distanceMatrix = initialMatrix.map(row => [...row]);

    resetCalculation();
    updateStatus(t("ready"));
    setRunState("ready");

    updateButtons();
    updateStatistics();
    updateProgress();
    renderAll();
}

function resetCalculation() {
    elements.directValue.textContent = "-";
    elements.firstPartValue.textContent = "-";
    elements.secondPartValue.textContent = "-";
    elements.candidateValue.textContent = "-";

    elements.comparisonResult.className =
        "comparison-result neutral";

    elements.comparisonResult.textContent = "-";
}

function updateButtons() {
    elements.startBtn.disabled = running && !paused;
    elements.pauseBtn.disabled = !running || finished;
    elements.stepBtn.disabled = finished;

    elements.pauseBtn.textContent = paused
        ? t("continue")
        : t("pause");
}

function setRunState(state) {
    elements.runState.className = `run-state ${state}`;

    const labels = {
        ready: t("readyState"),
        running: t("runningState"),
        paused: t("pausedState"),
        done: t("doneState"),
        negative: t("negativeState")
    };

    elements.runState.textContent = labels[state];
}

function updateStatus(html) {
    elements.statusText.innerHTML = html;
}

function updateStatistics() {
    const kNode = nodes[kIndex] ?? "-";

    elements.currentKValue.textContent =
        finished ? "-" : kNode;

    elements.iterationNodeValue.textContent =
        finished ? "-" : kNode;

    elements.currentPairValue.textContent =
        currentCell
            ? `${nodes[currentCell.i]} → ${nodes[currentCell.j]}`
            : "-";

    elements.processedValue.textContent = processedCells;
    elements.updatesValue.textContent = updates;
}

function updateProgress() {
    const total = nodes.length ** 3;

    const percentage = Math.min(
        100,
        Math.round((processedCells / total) * 100)
    );

    elements.progressBar.style.width = `${percentage}%`;
    elements.progressValue.textContent = `${percentage} %`;
}

function renderAll() {
    renderGraph();
    renderMatrix();
    updateStatistics();
    updateProgress();
}

function createSvgElement(name, attributes = {}) {
    const element = document.createElementNS(
        "http://www.w3.org/2000/svg",
        name
    );

    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });

    return element;
}

function renderGraph() {
    elements.graphSvg.innerHTML = "";

    const defs = createSvgElement("defs");

    const marker = createSvgElement("marker", {
        id: "arrow",
        markerWidth: "10",
        markerHeight: "10",
        refX: "8",
        refY: "3",
        orient: "auto",
        markerUnits: "strokeWidth"
    });

    const markerPath = createSvgElement("path", {
        d: "M0,0 L0,6 L9,3 z",
        fill: "#64748b"
    });

    marker.appendChild(markerPath);
    defs.appendChild(marker);
    elements.graphSvg.appendChild(defs);

    edges.forEach(edge => {
        const from = nodePositions[edge.from];
        const to = nodePositions[edge.to];

        const dx = to.x - from.x;
        const dy = to.y - from.y;
        const length = Math.sqrt(dx * dx + dy * dy);

        const offsetX = (dx / length) * 42;
        const offsetY = (dy / length) * 42;

        const line = createSvgElement("line", {
            x1: from.x + offsetX,
            y1: from.y + offsetY,
            x2: to.x - offsetX,
            y2: to.y - offsetY,
            class: "graph-edge",
            "marker-end": "url(#arrow)"
        });

        const activeRoute = currentCell
            ? [
                `${nodes[currentCell.i]}-${nodes[kIndex]}`,
                `${nodes[kIndex]}-${nodes[currentCell.j]}`
            ]
            : [];

        if (activeRoute.includes(`${edge.from}-${edge.to}`)) {
            line.classList.add("active");
        }

        if (
            updatedCell &&
            edge.from === nodes[updatedCell.i] &&
            edge.to === nodes[updatedCell.j]
        ) {
            line.classList.add("updated");
        }

        elements.graphSvg.appendChild(line);

        const middleX = (from.x + to.x) / 2;
        const middleY = (from.y + to.y) / 2;

        const labelBackground = createSvgElement("circle", {
            cx: middleX,
            cy: middleY,
            r: 17,
            class: "edge-label-bg"
        });

        const label = createSvgElement("text", {
            x: middleX,
            y: middleY,
            class: "edge-label"
        });

        label.textContent = edge.weight;

        elements.graphSvg.appendChild(labelBackground);
        elements.graphSvg.appendChild(label);
    });

    nodes.forEach(nodeName => {
        const position = nodePositions[nodeName];

        const group = createSvgElement("g", {
            class: "graph-node"
        });

        if (nodeName === nodes[kIndex] && !finished) {
            group.classList.add("intermediate");
        }

        if (
            currentCell &&
            (
                nodeName === nodes[currentCell.i] ||
                nodeName === nodes[currentCell.j]
            )
        ) {
            group.classList.add("current");
        }

        if (
            updatedCell &&
            (
                nodeName === nodes[updatedCell.i] ||
                nodeName === nodes[updatedCell.j]
            )
        ) {
            group.classList.add("updated");
        }

        const circle = createSvgElement("circle", {
            cx: position.x,
            cy: position.y,
            r: 38
        });

        const label = createSvgElement("text", {
            x: position.x,
            y: position.y
        });

        label.textContent = nodeName;

        group.appendChild(circle);
        group.appendChild(label);

        elements.graphSvg.appendChild(group);
    });
}

function renderMatrix(matrix = distanceMatrix) {
    elements.matrix.innerHTML = "";

    const headerRow = document.createElement("tr");

    const corner = document.createElement("th");
    corner.textContent = "→";
    headerRow.appendChild(corner);

    nodes.forEach(node => {
        const th = document.createElement("th");
        th.textContent = node;
        headerRow.appendChild(th);
    });

    elements.matrix.appendChild(headerRow);

    matrix.forEach((row, rowIndex) => {
        const tr = document.createElement("tr");

        const rowHeader = document.createElement("th");
        rowHeader.textContent = nodes[rowIndex];
        tr.appendChild(rowHeader);

        row.forEach((value, columnIndex) => {
            const td = document.createElement("td");

            td.textContent = formatValue(value);

            if (!Number.isFinite(value)) {
                td.classList.add("infinity");
            }

            if (
                currentCell &&
                currentCell.i === rowIndex &&
                currentCell.j === columnIndex
            ) {
                td.classList.add("current-cell");
            }

            if (
                routeCells.some(
                    cell =>
                        cell.i === rowIndex &&
                        cell.j === columnIndex
                )
            ) {
                td.classList.add("route-cell");
            }

            if (
                updatedCell &&
                updatedCell.i === rowIndex &&
                updatedCell.j === columnIndex
            ) {
                td.classList.add("updated-cell");
            }

            if (
                rowIndex === columnIndex &&
                value < 0
            ) {
                td.classList.add("negative-cycle-cell");
            }

            tr.appendChild(td);
        });

        elements.matrix.appendChild(tr);
    });
}

function sleep(milliseconds) {
    return new Promise(resolve => {
        window.setTimeout(resolve, milliseconds);
    });
}

async function waitForPermission() {
    while (paused && !stepRequested) {
        await sleep(50);
    }

    if (stepRequested) {
        stepRequested = false;
    }
}

async function processCurrentCell() {
    await waitForPermission();

    currentCell = {
        i: iIndex,
        j: jIndex
    };

    routeCells = [
        { i: iIndex, j: kIndex },
        { i: kIndex, j: jIndex }
    ];

    updatedCell = null;

    const direct = distanceMatrix[iIndex][jIndex];
    const firstPart = distanceMatrix[iIndex][kIndex];
    const secondPart = distanceMatrix[kIndex][jIndex];

    const candidate =
        Number.isFinite(firstPart) &&
        Number.isFinite(secondPart)
            ? firstPart + secondPart
            : Infinity;

    elements.directValue.textContent = formatValue(direct);
    elements.firstPartValue.textContent = formatValue(firstPart);
    elements.secondPartValue.textContent = formatValue(secondPart);
    elements.candidateValue.textContent = formatValue(candidate);

    updateStatus(
        replaceVariables(
            t("checking"),
            {
                i: nodes[iIndex],
                j: nodes[jIndex],
                k: nodes[kIndex]
            }
        )
    );

    processedCells++;

    renderAll();

    if (!stepRequested) {
        await sleep(delay * 0.55);
    }

    if (candidate < direct) {
        distanceMatrix[iIndex][jIndex] = candidate;
        updates++;

        updatedCell = {
            i: iIndex,
            j: jIndex
        };

        elements.comparisonResult.className =
            "comparison-result success";

        elements.comparisonResult.textContent =
            t("improvedResult");

        updateStatus(
            replaceVariables(
                t("updated"),
                {
                    k: nodes[kIndex],
                    old: formatValue(direct),
                    value: formatValue(candidate)
                }
            )
        );
    } else {
        elements.comparisonResult.className =
            "comparison-result failure";

        elements.comparisonResult.textContent =
            t("unchangedResult");

        updateStatus(
            replaceVariables(
                t("unchanged"),
                {
                    value: formatValue(direct)
                }
            )
        );
    }

    renderAll();

    await sleep(delay);

    advanceIndices();
}

function advanceIndices() {
    jIndex++;

    if (jIndex >= nodes.length) {
        jIndex = 0;
        iIndex++;
    }

    if (iIndex >= nodes.length) {
        iIndex = 0;
        kIndex++;

        if (kIndex < nodes.length) {
            updateStatus(
                `${t("iterationStart")} ` +
                `<span class="highlight">${nodes[kIndex]}</span>.`
            );
        }
    }
}

async function runAlgorithm() {
    if (finished) {
        resetAlgorithm();
    }

    if (running && !paused) {
        return;
    }

    running = true;
    paused = false;

    setRunState("running");
    updateButtons();

    while (running && kIndex < nodes.length) {
        await processCurrentCell();
    }

    if (kIndex >= nodes.length) {
        finishAlgorithm();
    }
}

function finishAlgorithm() {
    running = false;
    paused = false;
    finished = true;

    currentCell = null;
    routeCells = [];
    updatedCell = null;

    const negativeCycleDetected =
        distanceMatrix.some(
            (row, index) => row[index] < 0
        );

    if (negativeCycleDetected) {
        setRunState("negative");
        updateStatus(t("negativeCycle"));
    } else {
        setRunState("done");
        updateStatus(t("finished"));
    }

    updateButtons();
    updateStatistics();
    updateProgress();
    renderAll();
}

function togglePause() {
    if (!running) {
        return;
    }

    paused = !paused;

    setRunState(
        paused
            ? "paused"
            : "running"
    );

    updateButtons();
}

async function runSingleStep() {
    if (finished) {
        return;
    }

    if (!running) {
        running = true;
        paused = true;
    }

    stepRequested = true;

    setRunState("paused");
    updateButtons();

    await processCurrentCell();

    if (kIndex >= nodes.length) {
        finishAlgorithm();
    }
}

function generateRandomGraph() {
    if (running) {
        return;
    }

    const randomEdges = [];

    nodes.forEach((from, fromIndex) => {
        nodes.forEach((to, toIndex) => {
            if (fromIndex === toIndex) {
                return;
            }

            if (Math.random() < 0.35) {
                randomEdges.push({
                    from,
                    to,
                    weight: randomWeight()
                });
            }
        });
    });

    if (randomEdges.length < 6) {
        edges = structuredClone(defaultEdges);
    } else {
        edges = randomEdges.slice(0, 10);
    }

    resetAlgorithm();
}

function randomWeight() {
    const values = [
        -3, -2, 1, 2, 3, 4, 5, 6, 7, 8
    ];

    return values[
        Math.floor(Math.random() * values.length)
    ];
}

function changeLanguage(newLanguage) {
    language = newLanguage;

    document.documentElement.lang =
        newLanguage === "cs" ? "cs" : "en";

    elements.czBtn.classList.toggle(
        "active",
        newLanguage === "cs"
    );

    elements.enBtn.classList.toggle(
        "active",
        newLanguage === "en"
    );

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {
            const key = element.dataset.i18n;

            if (translations[language][key] !== undefined) {
                element.textContent = t(key);
            }
        });

    elements.explanationText.innerHTML =
        t("explanation");

    if (!running && !finished) {
        updateStatus(t("ready"));
        setRunState("ready");
    } else if (finished) {
        const negativeCycleDetected =
            distanceMatrix.some(
                (row, index) => row[index] < 0
            );

        if (negativeCycleDetected) {
            setRunState("negative");
            updateStatus(t("negativeCycle"));
        } else {
            setRunState("done");
            updateStatus(t("finished"));
        }
    } else {
        setRunState(paused ? "paused" : "running");
    }

    updateButtons();
}

elements.startBtn.addEventListener(
    "click",
    runAlgorithm
);

elements.pauseBtn.addEventListener(
    "click",
    togglePause
);

elements.stepBtn.addEventListener(
    "click",
    runSingleStep
);

elements.resetBtn.addEventListener(
    "click",
    resetAlgorithm
);

elements.randomBtn.addEventListener(
    "click",
    generateRandomGraph
);

elements.speedRange.addEventListener(
    "input",
    event => {
        delay = Number(event.target.value);

        elements.speedValue.textContent =
            `${delay} ms`;
    }
);

elements.czBtn.addEventListener(
    "click",
    () => changeLanguage("cs")
);

elements.enBtn.addEventListener(
    "click",
    () => changeLanguage("en")
);

elements.showInitialBtn.addEventListener(
    "mousedown",
    () => {
        renderMatrix(initialMatrix);
    }
);

elements.showInitialBtn.addEventListener(
    "mouseup",
    () => {
        renderMatrix(distanceMatrix);
    }
);

elements.showInitialBtn.addEventListener(
    "mouseleave",
    () => {
        renderMatrix(distanceMatrix);
    }
);

elements.showInitialBtn.addEventListener(
    "touchstart",
    event => {
        event.preventDefault();
        renderMatrix(initialMatrix);
    }
);

elements.showInitialBtn.addEventListener(
    "touchend",
    () => {
        renderMatrix(distanceMatrix);
    }
);

elements.explanationText.innerHTML =
    t("explanation");

resetAlgorithm();