const nodes = ["A", "B", "C", "D", "E", "F"];

const nodePositions = {
    A: { x: 110, y: 95 },
    B: { x: 375, y: 65 },
    C: { x: 650, y: 120 },
    D: { x: 630, y: 395 },
    E: { x: 365, y: 455 },
    F: { x: 105, y: 355 }
};

const defaultEdges = [
    { id: "A-B", from: "A", to: "B", weight: 4 },
    { id: "A-F", from: "A", to: "F", weight: 2 },
    { id: "A-E", from: "A", to: "E", weight: 7 },
    { id: "B-C", from: "B", to: "C", weight: 6 },
    { id: "B-F", from: "B", to: "F", weight: 5 },
    { id: "B-E", from: "B", to: "E", weight: 3 },
    { id: "C-D", from: "C", to: "D", weight: 4 },
    { id: "C-E", from: "C", to: "E", weight: 8 },
    { id: "D-E", from: "D", to: "E", weight: 1 },
    { id: "E-F", from: "E", to: "F", weight: 6 }
];

const translations = {
    cs: {
        algorithmNumber: "Algoritmus #22",
        subtitle:
            "Minimální kostra grafu pomocí třídění hran a Union-Find.",

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
        processedEdges: "Zpracované hrany",
        acceptedEdges: "Přidané hrany",
        rejectedEdges: "Odmítnuté hrany",
        mstWeight: "Váha MST",

        legendTitle: "Legenda",
        legendDefault: "Nezpracovaná hrana",
        legendCurrent: "Kontrolovaná hrana",
        legendAccepted: "Hrana v MST",
        legendRejected: "Odmítnutá hrana",

        eyebrow: "Minimum Spanning Tree",
        pageTitle: "Vizualizace Kruskalova algoritmu",

        graphTitle: "Ohodnocený neorientovaný graf",
        graphSubtitle:
            "Nejlevnější hrany se postupně přidávají do minimální kostry.",
        mstEdges: "Hrany MST",

        edgeListTitle: "Seřazené hrany",
        edgeListSubtitle:
            "Hrany jsou zpracovány od nejnižší váhy.",

        unionTitle: "Union-Find komponenty",
        unionSubtitle:
            "Uzly ve stejné skupině jsou již propojené.",
        component: "Komponenta",

        decisionTitle: "Rozhodnutí algoritmu",
        decisionSubtitle:
            "Kontrola, zda hrana vytvoří cyklus.",
        currentEdge: "Aktuální hrana",
        currentWeight: "Váha",
        componentA: "Komponenta 1",
        componentB: "Komponenta 2",

        statusTitle: "Co se právě děje?",
        statusSubtitle: "Aktuální krok algoritmu.",

        resultTitle: "Výsledek",
        resultSubtitle:
            "Aktuálně vybrané hrany minimální kostry.",
        totalWeight: "Celková váha MST",

        explanationTitle:
            "Jak Kruskalův algoritmus funguje?",

        readyState: "Připraveno",
        runningState: "Probíhá",
        pausedState: "Pozastaveno",
        doneState: "Dokončeno",
        disconnectedState: "Graf není souvislý",

        ready:
            "Spusť algoritmus a sleduj, jak vybírá nejlevnější hrany bez vytvoření cyklu.",

        checking:
            "Kontroluji hranu <span class='highlight'>{edge}</span> s váhou <span class='highlight'>{weight}</span>.",

        differentComponents:
            "Vrchol <span class='highlight'>{from}</span> a vrchol <span class='highlight'>{to}</span> jsou v různých komponentách.",

        sameComponent:
            "Oba vrcholy již patří do stejné komponenty. Přidáním hrany by vznikl cyklus.",

        accepted:
            "Hrana byla přijata a přidána do minimální kostry.",

        rejected:
            "Hrana byla odmítnuta, protože by vytvořila cyklus.",

        acceptedResult: "✓ Hrana přijata",
        rejectedResult: "✕ Hrana odmítnuta",

        waiting: "Čeká",
        acceptedStatus: "Přijata",
        rejectedStatus: "Odmítnuta",

        noEdges: "Zatím nebyla vybrána žádná hrana.",

        finished:
            "Minimální kostra je hotová. Obsahuje právě V − 1 hran.",

        disconnected:
            "Všechny hrany byly zpracovány, ale graf není souvislý. Výsledkem je minimální kostrový les.",

        explanation: `
            Kruskalův algoritmus vytváří
            <span class="highlight">minimální kostru grafu</span>.

            <br><br>

            Nejprve seřadí všechny hrany podle jejich váhy.
            Poté postupně vybírá nejlevnější hranu, která nevytvoří cyklus.

            <br><br>

            Datová struktura <span class="highlight">Union-Find</span>
            sleduje propojené komponenty a umožňuje rychle zjistit,
            zda dva vrcholy již patří do stejné skupiny.

            <br><br>

            Typická časová složitost je
            <span class="highlight">O(E log E)</span>.
        `
    },

    en: {
        algorithmNumber: "Algorithm #22",
        subtitle:
            "Minimum spanning tree using sorted edges and Union-Find.",

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
        processedEdges: "Processed Edges",
        acceptedEdges: "Accepted Edges",
        rejectedEdges: "Rejected Edges",
        mstWeight: "MST Weight",

        legendTitle: "Legend",
        legendDefault: "Unprocessed Edge",
        legendCurrent: "Current Edge",
        legendAccepted: "Edge in MST",
        legendRejected: "Rejected Edge",

        eyebrow: "Minimum Spanning Tree",
        pageTitle: "Kruskal's Algorithm Visualization",

        graphTitle: "Weighted Undirected Graph",
        graphSubtitle:
            "The cheapest edges are gradually added to the minimum spanning tree.",
        mstEdges: "MST Edges",

        edgeListTitle: "Sorted Edges",
        edgeListSubtitle:
            "Edges are processed from the lowest weight.",

        unionTitle: "Union-Find Components",
        unionSubtitle:
            "Nodes in the same set are already connected.",
        component: "Component",

        decisionTitle: "Algorithm Decision",
        decisionSubtitle:
            "Checking whether the edge creates a cycle.",
        currentEdge: "Current Edge",
        currentWeight: "Weight",
        componentA: "Component 1",
        componentB: "Component 2",

        statusTitle: "Current Action",
        statusSubtitle: "The current algorithm step.",

        resultTitle: "Result",
        resultSubtitle:
            "Currently selected minimum spanning tree edges.",
        totalWeight: "Total MST Weight",

        explanationTitle:
            "How does Kruskal's Algorithm work?",

        readyState: "Ready",
        runningState: "Running",
        pausedState: "Paused",
        doneState: "Completed",
        disconnectedState: "Disconnected Graph",

        ready:
            "Start the algorithm and watch it select the cheapest edges without creating a cycle.",

        checking:
            "Checking edge <span class='highlight'>{edge}</span> with weight <span class='highlight'>{weight}</span>.",

        differentComponents:
            "Vertex <span class='highlight'>{from}</span> and vertex <span class='highlight'>{to}</span> are in different components.",

        sameComponent:
            "Both vertices already belong to the same component. Adding the edge would create a cycle.",

        accepted:
            "The edge was accepted and added to the minimum spanning tree.",

        rejected:
            "The edge was rejected because it would create a cycle.",

        acceptedResult: "✓ Edge accepted",
        rejectedResult: "✕ Edge rejected",

        waiting: "Waiting",
        acceptedStatus: "Accepted",
        rejectedStatus: "Rejected",

        noEdges: "No edges have been selected yet.",

        finished:
            "The minimum spanning tree is complete. It contains exactly V − 1 edges.",

        disconnected:
            "All edges were processed, but the graph is disconnected. The result is a minimum spanning forest.",

        explanation: `
            Kruskal's Algorithm builds a
            <span class="highlight">minimum spanning tree</span>.

            <br><br>

            It first sorts all edges by weight.
            It then repeatedly selects the cheapest edge that does not create a cycle.

            <br><br>

            The <span class="highlight">Union-Find</span> data structure
            tracks connected components and quickly determines whether
            two vertices already belong to the same set.

            <br><br>

            The typical time complexity is
            <span class="highlight">O(E log E)</span>.
        `
    }
};

const elements = {
    graphSvg: document.getElementById("graphSvg"),
    edgeList: document.getElementById("edgeList"),
    setsContainer: document.getElementById("setsContainer"),

    startBtn: document.getElementById("startBtn"),
    pauseBtn: document.getElementById("pauseBtn"),
    stepBtn: document.getElementById("stepBtn"),
    resetBtn: document.getElementById("resetBtn"),
    randomBtn: document.getElementById("randomBtn"),

    czBtn: document.getElementById("czBtn"),
    enBtn: document.getElementById("enBtn"),

    speedRange: document.getElementById("speedRange"),
    speedValue: document.getElementById("speedValue"),

    processedValue: document.getElementById("processedValue"),
    acceptedValue: document.getElementById("acceptedValue"),
    rejectedValue: document.getElementById("rejectedValue"),
    weightValue: document.getElementById("weightValue"),

    mstEdgeCount: document.getElementById("mstEdgeCount"),

    currentEdgeValue: document.getElementById("currentEdgeValue"),
    currentWeightValue: document.getElementById("currentWeightValue"),
    componentAValue: document.getElementById("componentAValue"),
    componentBValue: document.getElementById("componentBValue"),
    decisionResult: document.getElementById("decisionResult"),

    runState: document.getElementById("runState"),
    statusText: document.getElementById("statusText"),

    progressBar: document.getElementById("progressBar"),
    progressValue: document.getElementById("progressValue"),

    mstResult: document.getElementById("mstResult"),
    totalWeightValue: document.getElementById("totalWeightValue"),

    explanationText: document.getElementById("explanationText")
};

let language = "cs";
let delay = 800;

let edges = cloneEdges(defaultEdges);
let sortedEdges = [];

let parent = {};
let rank = {};

let currentIndex = 0;
let currentEdge = null;

let acceptedEdges = [];
let rejectedEdges = [];

let running = false;
let paused = false;
let finished = false;
let stepRequested = false;

function t(key) {
    return translations[language][key];
}

function cloneEdges(source) {
    return source.map(edge => ({ ...edge }));
}

function replaceVariables(text, variables) {
    return Object.entries(variables).reduce(
        (result, [key, value]) =>
            result.replaceAll(`{${key}}`, value),
        text
    );
}

function initializeUnionFind() {
    parent = {};
    rank = {};

    nodes.forEach(node => {
        parent[node] = node;
        rank[node] = 0;
    });
}

function find(node) {
    if (parent[node] !== node) {
        parent[node] = find(parent[node]);
    }

    return parent[node];
}

function union(first, second) {
    const rootFirst = find(first);
    const rootSecond = find(second);

    if (rootFirst === rootSecond) {
        return false;
    }

    if (rank[rootFirst] < rank[rootSecond]) {
        parent[rootFirst] = rootSecond;
    } else if (rank[rootFirst] > rank[rootSecond]) {
        parent[rootSecond] = rootFirst;
    } else {
        parent[rootSecond] = rootFirst;
        rank[rootFirst]++;
    }

    return true;
}

function getComponents() {
    const groups = {};

    nodes.forEach(node => {
        const root = find(node);

        if (!groups[root]) {
            groups[root] = [];
        }

        groups[root].push(node);
    });

    return Object.values(groups);
}

function getComponentLabel(node) {
    const root = find(node);

    return getComponents()
        .find(component => component.includes(root))
        ?.join(", ") ?? node;
}

function resetAlgorithm() {
    running = false;
    paused = false;
    finished = false;
    stepRequested = false;

    currentIndex = 0;
    currentEdge = null;

    acceptedEdges = [];
    rejectedEdges = [];

    sortedEdges = cloneEdges(edges)
        .sort((first, second) => {
            if (first.weight !== second.weight) {
                return first.weight - second.weight;
            }

            return first.id.localeCompare(second.id);
        });

    initializeUnionFind();

    resetDecisionPanel();
    setRunState("ready");
    updateStatus(t("ready"));
    updateButtons();
    renderAll();
}

function resetDecisionPanel() {
    elements.currentEdgeValue.textContent = "-";
    elements.currentWeightValue.textContent = "-";
    elements.componentAValue.textContent = "-";
    elements.componentBValue.textContent = "-";

    elements.decisionResult.className =
        "decision-result neutral";

    elements.decisionResult.textContent = "-";
}

function setRunState(state) {
    elements.runState.className = `run-state ${state}`;

    const labels = {
        ready: t("readyState"),
        running: t("runningState"),
        paused: t("pausedState"),
        done: t("doneState"),
        disconnected: t("disconnectedState")
    };

    elements.runState.textContent = labels[state];
}

function updateButtons() {
    elements.startBtn.disabled = running && !paused;
    elements.pauseBtn.disabled = !running || finished;
    elements.stepBtn.disabled = finished;

    elements.randomBtn.disabled = running;

    elements.pauseBtn.textContent = paused
        ? t("continue")
        : t("pause");
}

function updateStatus(html) {
    elements.statusText.innerHTML = html;
}

function updateStatistics() {
    const processed =
        acceptedEdges.length + rejectedEdges.length;

    const totalWeight = acceptedEdges.reduce(
        (sum, edge) => sum + edge.weight,
        0
    );

    elements.processedValue.textContent = processed;
    elements.acceptedValue.textContent = acceptedEdges.length;
    elements.rejectedValue.textContent = rejectedEdges.length;
    elements.weightValue.textContent = totalWeight;

    elements.totalWeightValue.textContent = totalWeight;

    elements.mstEdgeCount.textContent =
        `${acceptedEdges.length} / ${nodes.length - 1}`;
}

function updateProgress() {
    const percentage = sortedEdges.length === 0
        ? 0
        : Math.round(
            (
                (
                    acceptedEdges.length +
                    rejectedEdges.length
                ) /
                sortedEdges.length
            ) * 100
        );

    elements.progressBar.style.width =
        `${Math.min(100, percentage)}%`;

    elements.progressValue.textContent =
        `${Math.min(100, percentage)} %`;
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

    sortedEdges.forEach(edge => {
        const from = nodePositions[edge.from];
        const to = nodePositions[edge.to];

        const line = createSvgElement("line", {
            x1: from.x,
            y1: from.y,
            x2: to.x,
            y2: to.y,
            class: "graph-edge"
        });

        if (
            currentEdge &&
            currentEdge.id === edge.id
        ) {
            line.classList.add("current");
        }

        if (
            acceptedEdges.some(
                accepted => accepted.id === edge.id
            )
        ) {
            line.classList.add("accepted");
        }

        if (
            rejectedEdges.some(
                rejected => rejected.id === edge.id
            )
        ) {
            line.classList.add("rejected");
        }

        elements.graphSvg.appendChild(line);

        const middleX = (from.x + to.x) / 2;
        const middleY = (from.y + to.y) / 2;

        const background = createSvgElement("circle", {
            cx: middleX,
            cy: middleY,
            r: 18,
            class: "edge-label-bg"
        });

        const label = createSvgElement("text", {
            x: middleX,
            y: middleY,
            class: "edge-label"
        });

        label.textContent = edge.weight;

        elements.graphSvg.appendChild(background);
        elements.graphSvg.appendChild(label);
    });

    nodes.forEach(node => {
        const position = nodePositions[node];

        const group = createSvgElement("g", {
            class: "graph-node"
        });

        if (
            currentEdge &&
            (
                currentEdge.from === node ||
                currentEdge.to === node
            )
        ) {
            group.classList.add("current");
        } else if (
            acceptedEdges.some(
                edge =>
                    edge.from === node ||
                    edge.to === node
            )
        ) {
            group.classList.add("connected");
        }

        const circle = createSvgElement("circle", {
            cx: position.x,
            cy: position.y,
            r: 39
        });

        const label = createSvgElement("text", {
            x: position.x,
            y: position.y
        });

        label.textContent = node;

        group.appendChild(circle);
        group.appendChild(label);

        elements.graphSvg.appendChild(group);
    });
}

function renderEdgeList() {
    elements.edgeList.innerHTML = "";

    sortedEdges.forEach((edge, index) => {
        const row = document.createElement("div");

        row.className = "edge-row";

        const isCurrent =
            currentEdge?.id === edge.id;

        const isAccepted = acceptedEdges.some(
            accepted => accepted.id === edge.id
        );

        const isRejected = rejectedEdges.some(
            rejected => rejected.id === edge.id
        );

        if (isCurrent) {
            row.classList.add("current");
        }

        if (isAccepted) {
            row.classList.add("accepted");
        }

        if (isRejected) {
            row.classList.add("rejected");
        }

        let status = t("waiting");

        if (isAccepted) {
            status = t("acceptedStatus");
        }

        if (isRejected) {
            status = t("rejectedStatus");
        }

        row.innerHTML = `
            <div class="edge-position">
                ${index + 1}
            </div>

            <div>
                <div class="edge-name">
                    ${edge.from} — ${edge.to}
                </div>

                <div class="edge-status">
                    ${status}
                </div>
            </div>

            <div class="edge-weight">
                ${edge.weight}
            </div>
        `;

        elements.edgeList.appendChild(row);
    });
}

function renderSets() {
    elements.setsContainer.innerHTML = "";

    const components = getComponents()
        .sort((first, second) =>
            first[0].localeCompare(second[0])
        );

    components.forEach((component, index) => {
        const card = document.createElement("div");

        card.className = "set-card";

        card.innerHTML = `
            <span>
                ${t("component")} ${index + 1}
            </span>

            <div class="set-nodes">
                ${component
                    .map(
                        node => `
                            <div class="set-node">
                                ${node}
                            </div>
                        `
                    )
                    .join("")}
            </div>
        `;

        elements.setsContainer.appendChild(card);
    });
}

function renderMstResult() {
    elements.mstResult.innerHTML = "";

    if (acceptedEdges.length === 0) {
        elements.mstResult.innerHTML = `
            <span class="empty-result">
                ${t("noEdges")}
            </span>
        `;

        return;
    }

    acceptedEdges.forEach(edge => {
        const chip = document.createElement("div");

        chip.className = "mst-edge-chip";
        chip.textContent =
            `${edge.from} — ${edge.to} (${edge.weight})`;

        elements.mstResult.appendChild(chip);
    });
}

function renderAll() {
    renderGraph();
    renderEdgeList();
    renderSets();
    renderMstResult();

    updateStatistics();
    updateProgress();
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

async function processCurrentEdge() {
    if (currentIndex >= sortedEdges.length) {
        finishAlgorithm();
        return;
    }

    await waitForPermission();

    currentEdge = sortedEdges[currentIndex];

    const firstRoot = find(currentEdge.from);
    const secondRoot = find(currentEdge.to);

    const firstComponent = getComponents()
        .find(component =>
            component.includes(currentEdge.from)
        );

    const secondComponent = getComponents()
        .find(component =>
            component.includes(currentEdge.to)
        );

    elements.currentEdgeValue.textContent =
        `${currentEdge.from} — ${currentEdge.to}`;

    elements.currentWeightValue.textContent =
        currentEdge.weight;

    elements.componentAValue.textContent =
        firstComponent?.join(", ") ?? currentEdge.from;

    elements.componentBValue.textContent =
        secondComponent?.join(", ") ?? currentEdge.to;

    elements.decisionResult.className =
        "decision-result neutral";

    elements.decisionResult.textContent = "-";

    updateStatus(
        replaceVariables(
            t("checking"),
            {
                edge:
                    `${currentEdge.from} — ${currentEdge.to}`,
                weight: currentEdge.weight
            }
        )
    );

    renderAll();

    await sleep(delay * 0.55);

    if (firstRoot !== secondRoot) {
        updateStatus(
            replaceVariables(
                t("differentComponents"),
                {
                    from: currentEdge.from,
                    to: currentEdge.to
                }
            )
        );

        await sleep(delay * 0.55);

        union(currentEdge.from, currentEdge.to);
        acceptedEdges.push(currentEdge);

        elements.decisionResult.className =
            "decision-result accepted";

        elements.decisionResult.textContent =
            t("acceptedResult");

        updateStatus(t("accepted"));
    } else {
        rejectedEdges.push(currentEdge);

        elements.decisionResult.className =
            "decision-result rejected";

        elements.decisionResult.textContent =
            t("rejectedResult");

        updateStatus(
            `${t("sameComponent")}<br><br>${t("rejected")}`
        );
    }

    renderAll();

    await sleep(delay);

    currentIndex++;

    if (
        acceptedEdges.length === nodes.length - 1 ||
        currentIndex >= sortedEdges.length
    ) {
        finishAlgorithm();
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

    while (
        running &&
        !finished &&
        currentIndex < sortedEdges.length
    ) {
        await processCurrentEdge();
    }
}

function togglePause() {
    if (!running || finished) {
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

    await processCurrentEdge();

    if (!finished) {
        paused = true;
        setRunState("paused");
        updateButtons();
    }
}

function finishAlgorithm() {
    if (finished) {
        return;
    }

    running = false;
    paused = false;
    finished = true;
    currentEdge = null;

    if (acceptedEdges.length === nodes.length - 1) {
        setRunState("done");
        updateStatus(t("finished"));
    } else {
        setRunState("disconnected");
        updateStatus(t("disconnected"));
    }

    resetDecisionPanel();
    updateButtons();
    renderAll();
}

function generateRandomGraph() {
    if (running) {
        return;
    }

    const generated = [];
    const usedPairs = new Set();

    function addEdge(from, to, weight) {
        const pair = [from, to].sort().join("-");

        if (usedPairs.has(pair)) {
            return;
        }

        usedPairs.add(pair);

        generated.push({
            id: pair,
            from,
            to,
            weight
        });
    }

    for (let index = 1; index < nodes.length; index++) {
        const previousIndex =
            Math.floor(Math.random() * index);

        addEdge(
            nodes[previousIndex],
            nodes[index],
            randomWeight()
        );
    }

    const extraEdges = 4 + Math.floor(Math.random() * 3);

    while (generated.length < nodes.length - 1 + extraEdges) {
        const from =
            nodes[Math.floor(Math.random() * nodes.length)];

        const to =
            nodes[Math.floor(Math.random() * nodes.length)];

        if (from === to) {
            continue;
        }

        addEdge(from, to, randomWeight());
    }

    edges = generated;
    resetAlgorithm();
}

function randomWeight() {
    return 1 + Math.floor(Math.random() * 9);
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

            if (
                translations[language][key] !== undefined
            ) {
                element.textContent = t(key);
            }
        });

    elements.explanationText.innerHTML =
        t("explanation");

    if (!running && !finished) {
        setRunState("ready");
        updateStatus(t("ready"));
    } else if (finished) {
        if (acceptedEdges.length === nodes.length - 1) {
            setRunState("done");
            updateStatus(t("finished"));
        } else {
            setRunState("disconnected");
            updateStatus(t("disconnected"));
        }
    } else {
        setRunState(
            paused
                ? "paused"
                : "running"
        );
    }

    updateButtons();
    renderAll();
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

elements.explanationText.innerHTML =
    t("explanation");

resetAlgorithm();