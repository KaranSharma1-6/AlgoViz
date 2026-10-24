// ==========================================
// ALGOVIZ // TRACER, COLOR, SPEED, CASE & GRAPH ENGINE
// ==========================================

const categoriesData = {
    sorting: {
        title: "Sorting",
        desc: "Watch sorting algorithms run step by step. Compare, swap, and place elements until the array is ordered.",
        tableHeaders: ["Algorithm", "Best", "Average", "Worst", "Space", "Stable"],
        tableRows: [
            ["Insertion Sort", "O(n)", "O(n²)", "O(n²)", "O(1)", "Yes"],
            ["Selection Sort", "O(n²)", "O(n²)", "O(n²)", "O(1)", "No"],
            ["Merge Sort", "O(n log n)", "O(n log n)", "O(n log n)", "O(n)", "Yes"],
            ["Bubble Sort", "O(n)", "O(n²)", "O(n²)", "O(1)", "Yes"],
            ["Quick Sort", "O(n log n)", "O(n log n)", "O(n²)", "O(log n)", "No"]
        ],
        algorithms: [
            { id: "insertion", name: "Insertion Sort", endpoint: "insertion", desc: "Watch insertion sort build a sorted section one element at a time." },
            { id: "selection", name: "Selection Sort", endpoint: "selection", desc: "See selection sort repeatedly pick the smallest element and place it." },
            { id: "merge", name: "Merge Sort", endpoint: "merge", desc: "Watch merge sort divide the array and merge the pieces back in order." },
            { id: "bubble", name: "Bubble Sort", endpoint: "bubble", desc: "See adjacent elements compared and swapped until the array is sorted." },
            { id: "quick", name: "Quick Sort", endpoint: "quick", desc: "Watch quick sort partition around a pivot and recurse on each side." }
        ]
    },
    graph: {
        title: "Graph Algorithms",
        desc: "Step through graph algorithms and watch how they traverse nodes and edges.",
        tableHeaders: ["Algorithm", "Time", "Space", "Solves", "Weighted"],
        tableRows: [
            ["Depth-First Search", "O(V + E)", "O(V)", "Traversal", "No"],
            ["Breadth-First Search", "O(V + E)", "O(V)", "Traversal / shortest path", "No"],
            ["Topological Sort", "O(V + E)", "O(V)", "Dependency ordering", "No"],
            ["Dijkstra's Algorithm", "O((V + E) log V)", "O(V)", "Shortest path", "Yes (non-negative)"],
            ["Bellman-Ford Algorithm", "O(V · E)", "O(V)", "Shortest path", "Yes (± weights)"],
            ["Kruskal's Algorithm", "O(E log E)", "O(V)", "Minimum spanning tree", "Yes"],
            ["Prim's Algorithm", "O(E log V)", "O(V)", "Minimum spanning tree", "Yes"]
        ],
        algorithms: [
            { id: "dfs", name: "Depth-First Search", endpoint: "dfs", desc: "Watch DFS dive as deep as it can down each branch before backtracking." },
            { id: "bfs", name: "Breadth-First Search", endpoint: "bfs", desc: "See BFS explore a graph level by level, nearest nodes first." },
            { id: "topo", name: "Topological Sort", endpoint: "topo", desc: "Order directed acyclic graph nodes by dependencies." },
            { id: "dijkstra", name: "Dijkstra's Algorithm", endpoint: "dijkstra", desc: "See Dijkstra settle the nearest node each step to find shortest paths." },
            { id: "bellman", name: "Bellman-Ford Algorithm", endpoint: "bellman", desc: "See Bellman-Ford relax every edge each pass to find shortest paths." },
            { id: "kruskal", name: "Kruskal's Algorithm", endpoint: "kruskal", desc: "Watch Kruskal add the cheapest edges that never form a cycle." },
            { id: "prim", name: "Prim's Algorithm", endpoint: "prim", desc: "See Prim grow a spanning tree by adding the cheapest crossing edge." }
        ]
    },
    searching: {
        title: "Searching",
        desc: "Watch linear and binary search hunt for a target value step by step.",
        tableHeaders: ["Algorithm", "Best", "Average", "Worst", "Space", "Needs sorted data?"],
        tableRows: [
            ["Linear Search", "O(1)", "O(n)", "O(n)", "O(1)", "No"],
            ["Binary Search", "O(1)", "O(log n)", "O(log n)", "O(1)", "Yes"]
        ],
        algorithms: [
            { id: "linear", name: "Linear Search", endpoint: "linear", desc: "Scan the array one element at a time until the target appears." },
            { id: "binary", name: "Binary Search", endpoint: "binary", desc: "Halve the search window each step until the target is found." }
        ]
    },
    core: {
        title: "Core Concepts",
        desc: "Step through the core ideas behind algorithms like recursion and stack frames.",
        tableHeaders: ["Concept", "Time", "Space", "Primary Use"],
        tableRows: [
            ["Recursion", "O(n)", "O(n)", "Divide and conquer problems, tree traversal"]
        ],
        algorithms: [
            { id: "recursion", name: "Recursion", endpoint: "recursion", desc: "Watch recursive calls branch out, hit base cases, and unwind the call stack." }
        ]
    }
};

const algoDetails = {
    insertion: {
        codeLines: [
            "def insertion_sort(a):",
            "    for i in range(1, len(a)):",
            "        key = a[i]",
            "        j = i - 1",
            "        while j >= 0 and a[j] > key:",
            "            a[j + 1] = a[j]",
            "            j -= 1",
            "        a[j + 1] = key",
            "    return a"
        ],
        complexity: [["Best case", "O(n)", "Sorted data"], ["Average", "O(n²)", "Random order"], ["Space", "O(1)", "In-place"]],
        steps: ["Treat first element as sorted.", "Take next element as key.", "Shift larger elements right.", "Insert key."],
        example: `
            <table style="width:100%; border-collapse:collapse; font-size:0.75rem; text-align:left;">
                <thead><tr style="border-bottom:1px solid #374151; color:#38bdf8;"><th style="padding:3px;">Pass</th><th style="padding:3px;">Array</th><th style="padding:3px;">Action</th></tr></thead>
                <tbody>
                    <tr><td style="padding:3px;">0</td><td style="padding:3px;">[9, 6, 4, 2]</td><td style="padding:3px;">Initial state</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">1</td><td style="padding:3px;">[6, 9, 4, 2]</td><td style="padding:3px;">Insert 6 before 9</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">2</td><td style="padding:3px;">[4, 6, 9, 2]</td><td style="padding:3px;">Insert 4 at start</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">3</td><td style="padding:3px;">[2, 4, 6, 9]</td><td style="padding:3px;">Insert 2 (Sorted)</td></tr>
                </tbody>
            </table>`,
        legend: `<span style="color:#d97706">■</span> Comparing &nbsp;&nbsp; <span style="color:#38bdf8">■</span> Swapping &nbsp;&nbsp; <span style="color:#f97316">■</span> Key &nbsp;&nbsp; <span style="color:#059669">■</span> Sorted`
    },
    selection: {
        codeLines: [
            "def selection_sort(a):",
            "    n = len(a)",
            "    for i in range(n - 1):",
            "        m = i",
            "        for j in range(i + 1, n):",
            "            if a[j] < a[m]:",
            "                m = j",
            "        a[i], a[m] = a[m], a[i]",
            "    return a"
        ],
        complexity: [["Best case", "O(n²)", "Full scan"], ["Average", "O(n²)", "Unordered"], ["Space", "O(1)", "In-place"]],
        steps: ["Find minimum element.", "Swap with first unsorted position."],
        example: `
            <table style="width:100%; border-collapse:collapse; font-size:0.75rem; text-align:left;">
                <thead><tr style="border-bottom:1px solid #374151; color:#38bdf8;"><th style="padding:3px;">Pass</th><th style="padding:3px;">Array</th><th style="padding:3px;">Action</th></tr></thead>
                <tbody>
                    <tr><td style="padding:3px;">0</td><td style="padding:3px;">[9, 6, 4, 2]</td><td style="padding:3px;">Initial state</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">1</td><td style="padding:3px;">[2, 6, 4, 9]</td><td style="padding:3px;">Min is 2, swap with 9</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">2</td><td style="padding:3px;">[2, 4, 6, 9]</td><td style="padding:3px;">Min is 4, swap with 6</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">3</td><td style="padding:3px;">[2, 4, 6, 9]</td><td style="padding:3px;">Min is 6 (Sorted)</td></tr>
                </tbody>
            </table>`,
        legend: `<span style="color:#d97706">■</span> Comparing &nbsp;&nbsp; <span style="color:#38bdf8">■</span> Swapping &nbsp;&nbsp; <span style="color:#059669">■</span> Sorted`
    },
    merge: {
        codeLines: [
            "def merge(a, lo, mid, hi):",
            "    aux = a[lo:hi + 1]",
            "    i, j, k = lo, mid + 1, lo",
            "    while k <= hi:",
            "        if j > hi or (i <= mid and",
            "                    aux[i-lo] <= aux[j-lo]):",
            "            a[k] = aux[i - lo]; i += 1",
            "        else:",
            "            a[k] = aux[j - lo]; j += 1",
            "        k += 1"
        ],
        complexity: [["Best case", "O(n log n)", "Splitting"], ["Average", "O(n log n)", "Merging"], ["Space", "O(n)", "Buffer storage"]],
        steps: ["Divide array into halves.", "Recursively sort halves.", "Merge sorted lists."],
        example: `
            <table style="width:100%; border-collapse:collapse; font-size:0.75rem; text-align:left;">
                <thead><tr style="border-bottom:1px solid #374151; color:#38bdf8;"><th style="padding:3px;">Pass</th><th style="padding:3px;">Array</th><th style="padding:3px;">Action</th></tr></thead>
                <tbody>
                    <tr><td style="padding:3px;">0</td><td style="padding:3px;">[9, 6, 4, 2]</td><td style="padding:3px;">Initial state</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">1</td><td style="padding:3px;">[6, 9], [2, 4]</td><td style="padding:3px;">Divide & sort halves</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">2</td><td style="padding:3px;">[2, 4, 6, 9]</td><td style="padding:3px;">Merge sorted halves</td></tr>
                </tbody>
            </table>`,
        legend: `<span style="color:#d97706">■</span> Comparing &nbsp;&nbsp; <span style="color:#38bdf8">■</span> Merging &nbsp;&nbsp; <span style="color:#059669">■</span> Sorted`
    },
    bubble: {
        codeLines: [
            "def bubble_sort(a):",
            "    n = len(a)",
            "    for i in range(n - 1):",
            "        for j in range(n - 1 - i):",
            "            if a[j] > a[j + 1]:",
            "                a[j], a[j+1] = a[j+1], a[j]",
            "    # a[n-1-i] is now in place",
            "    return a"
        ],
        complexity: [["Best case", "O(n)", "Already sorted"], ["Average", "O(n²)", "Random"], ["Space", "O(1)", "In-place"]],
        steps: ["Compare adjacent pairs.", "Swap if left > right."],
        example: `
            <table style="width:100%; border-collapse:collapse; font-size:0.75rem; text-align:left;">
                <thead><tr style="border-bottom:1px solid #374151; color:#38bdf8;"><th style="padding:3px;">Pass</th><th style="padding:3px;">Array</th><th style="padding:3px;">Action</th></tr></thead>
                <tbody>
                    <tr><td style="padding:3px;">0</td><td style="padding:3px;">[9, 6, 4, 2]</td><td style="padding:3px;">Initial state</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">1</td><td style="padding:3px;">[6, 4, 2, 9]</td><td style="padding:3px;">Bubble 9 to end</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">2</td><td style="padding:3px;">[4, 2, 6, 9]</td><td style="padding:3px;">Bubble 6 into place</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">3</td><td style="padding:3px;">[2, 4, 6, 9]</td><td style="padding:3px;">Swap 4 & 2 (Sorted)</td></tr>
                </tbody>
            </table>`,
        legend: `<span style="color:#d97706">■</span> Comparing &nbsp;&nbsp; <span style="color:#38bdf8">■</span> Swapping &nbsp;&nbsp; <span style="color:#059669">■</span> Sorted`
    },
    quick: {
        codeLines: [
            "def quicksort(a, lo, hi):",
            "    if lo >= hi: return",
            "    pivot = a[hi]",
            "    i = lo",
            "    for j in range(lo, hi):",
            "        if a[j] < pivot:",
            "            a[i], a[j] = a[j], a[i]",
            "            i += 1",
            "    a[i], a[hi] = a[hi], a[hi]",
            "    quicksort(a, lo, i-1); quicksort(a, i+1, hi)"
        ],
        complexity: [["Best case", "O(n log n)", "Balanced"], ["Average", "O(n log n)", "Random"], ["Space", "O(log n)", "Stack"]],
        steps: ["Pick pivot.", "Partition around pivot.", "Recursively sort sides."],
        example: `
            <table style="width:100%; border-collapse:collapse; font-size:0.75rem; text-align:left;">
                <thead><tr style="border-bottom:1px solid #374151; color:#38bdf8;"><th style="padding:3px;">Pass</th><th style="padding:3px;">Array</th><th style="padding:3px;">Action</th></tr></thead>
                <tbody>
                    <tr><td style="padding:3px;">0</td><td style="padding:3px;">[9, 6, 4, 2]</td><td style="padding:3px;">Initial (Pivot: 2)</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">1</td><td style="padding:3px;">[2, 9, 6, 4]</td><td style="padding:3px;">Partition around 2</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">2</td><td style="padding:3px;">[2, 4, 6, 9]</td><td style="padding:3px;">Partition sub-array</td></tr>
                </tbody>
            </table>`,
        legend: `<span style="color:#d97706">■</span> Comparing &nbsp;&nbsp; <span style="color:#38bdf8">■</span> Swapping &nbsp;&nbsp; <span style="color:#8b5cf6">■</span> Pivot &nbsp;&nbsp; <span style="color:#059669">■</span> Sorted`
    },
    dfs: {
        codeLines: [
            "def dfs(graph, src):",
            "    visited = set()",
            "    stack = [src]",
            "    while stack:",
            "        u = stack.pop()",
            "        visited.add(u)",
            "        for v in graph[u]:",
            "            if v not in visited:",
            "                stack.append(v)"
        ],
        complexity: [["Time", "O(V + E)", "Vertices & Edges"], ["Space", "O(V)", "Stack"], ["Solves", "Traversal", "Graph exploration"]],
        steps: ["Mark start node visited.", "Explore unvisited adjacent neighbor recursively."],
        example: `
            <div style="font-size:0.75rem; color:#9ca3af; margin-bottom:6px;">Iterative DFS from A on the graph A → [B, C], B → [D], C → [E], pushing neighbors in listed order (LIFO stack pops the last-pushed first):</div>
            <table style="width:100%; border-collapse:collapse; font-size:0.75rem; text-align:left;">
                <thead><tr style="border-bottom:1px solid #374151; color:#38bdf8;"><th style="padding:3px;">Step</th><th style="padding:3px;">Stack (top on right)</th><th style="padding:3px;">Visited</th><th style="padding:3px;">Action</th></tr></thead>
                <tbody>
                    <tr><td style="padding:3px;">1</td><td style="padding:3px;">[A]</td><td style="padding:3px;">{}</td><td style="padding:3px;">Push source A.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">2</td><td style="padding:3px;">[B, C]</td><td style="padding:3px;">{A}</td><td style="padding:3px;">Pop A, mark visited, push neighbors B then C.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">3</td><td style="padding:3px;">[B, E]</td><td style="padding:3px;">{A, C}</td><td style="padding:3px;">Pop C, mark visited, push neighbor E.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">4</td><td style="padding:3px;">[B]</td><td style="padding:3px;">{A, C, E}</td><td style="padding:3px;">Pop E, mark visited, no neighbors.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">5</td><td style="padding:3px;">[D]</td><td style="padding:3px;">{A, C, E, B}</td><td style="padding:3px;">Pop B, mark visited, push neighbor D.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">6</td><td style="padding:3px;">[]</td><td style="padding:3px;">{A, C, E, B, D}</td><td style="padding:3px;">Pop D, mark visited, stack empty - done.</td></tr>
                </tbody>
            </table>`,
        legend: `<span style="color:#38bdf8">■</span> Current &nbsp;&nbsp; <span style="color:#d97706">■</span> Frontier &nbsp;&nbsp; <span style="color:#059669">■</span> Visited &nbsp;&nbsp; <span style="color:#059669">■</span> Result edge`
    },
    bfs: {
        codeLines: [
            "def bfs(graph, src):",
            "    visited = set()",
            "    queue = deque([src])",
            "    while queue:",
            "        u = queue.popleft()",
            "        for v in graph[u]:",
            "            if v not in visited and v not in queue:",
            "                queue.append(v)"
        ],
        complexity: [["Time", "O(V + E)", "Vertices & Edges"], ["Space", "O(V)", "Queue"], ["Solves", "Shortest path", "Level-order"]],
        steps: ["Enqueue start node.", "Explore neighbors level by level."],
        example: `
            <div style="font-size:0.75rem; color:#9ca3af; margin-bottom:6px;">Traversing this graph from node 0, where 0-1, 0-2, 1-3, 2-3, 2-4 are edges:</div>
            <table style="width:100%; border-collapse:collapse; font-size:0.75rem; text-align:left;">
                <thead><tr style="border-bottom:1px solid #374151; color:#38bdf8;"><th style="padding:3px;">Step</th><th style="padding:3px;">Visited</th><th style="padding:3px;">Queue (frontier)</th></tr></thead>
                <tbody>
                    <tr><td style="padding:3px;">Start</td><td style="padding:3px;">{}</td><td style="padding:3px;">[0]</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">Dequeue 0</td><td style="padding:3px;">{0}</td><td style="padding:3px;">[1, 2]</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">Dequeue 1</td><td style="padding:3px;">{0, 1}</td><td style="padding:3px;">[2, 3]</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">Dequeue 2</td><td style="padding:3px;">{0, 1, 2}</td><td style="padding:3px;">[3, 4]</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">Dequeue 3</td><td style="padding:3px;">{0, 1, 2, 3}</td><td style="padding:3px;">[4]</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">Dequeue 4</td><td style="padding:3px;">{0, 1, 2, 3, 4}</td><td style="padding:3px;">[] (done)</td></tr>
                </tbody>
            </table>`,
        legend: `<span style="color:#38bdf8">■</span> Current &nbsp;&nbsp; <span style="color:#d97706">■</span> Frontier &nbsp;&nbsp; <span style="color:#059669">■</span> Visited &nbsp;&nbsp; <span style="color:#059669">■</span> Result edge`
    },
    topo: {
        codeLines: [
            "def topo_sort(graph):",
            "    indeg = compute_indegrees(graph)",
            "    ready = [v for v in graph if indeg[v] == 0]",
            "    order = []",
            "    while ready:",
            "        u = ready.pop(0); order.append(u)",
            "        for v in graph[u]:",
            "            indeg[v] -= 1",
            "            if indeg[v] == 0: ready.append(v)",
            "    return order"
        ],
        complexity: [["Time", "O(V + E)", "Vertices & Edges"], ["Space", "O(V)", "Queue"], ["Solves", "Ordering", "Dependencies"]],
        steps: ["Compute in-degrees.", "Enqueue zero in-degree nodes.", "Process queue."],
        example: `
            <div style="font-size:0.75rem; color:#9ca3af; margin-bottom:6px;">Sorting the DAG with edges A→C, B→C, C→D, C→E, D→F, E→F (starting indegrees A:0 B:0 C:2 D:1 E:1 F:2):</div>
            <table style="width:100%; border-collapse:collapse; font-size:0.75rem; text-align:left;">
                <thead><tr style="border-bottom:1px solid #374151; color:#38bdf8;"><th style="padding:3px;">Step</th><th style="padding:3px;">Ready set</th><th style="padding:3px;">Order</th><th style="padding:3px;">Action</th></tr></thead>
                <tbody>
                    <tr><td style="padding:3px;">0</td><td style="padding:3px;">{A, B}</td><td style="padding:3px;">[]</td><td style="padding:3px;">A and B start with indegree 0, so both are ready.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">1</td><td style="padding:3px;">{B}</td><td style="padding:3px;">[A]</td><td style="padding:3px;">Emit A; its edge A→C drops C's indegree 2 → 1.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">2</td><td style="padding:3px;">{C}</td><td style="padding:3px;">[A, B]</td><td style="padding:3px;">Emit B; its edge B→C drops C 1 → 0, so C becomes ready.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">3</td><td style="padding:3px;">{D, E}</td><td style="padding:3px;">[A, B, C]</td><td style="padding:3px;">Emit C; edges C→D and C→E drop D and E to 0, both become ready.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">4</td><td style="padding:3px;">{E}</td><td style="padding:3px;">[A, B, C, D]</td><td style="padding:3px;">Emit D; its edge D→F drops F's indegree 2 → 1.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">5</td><td style="padding:3px;">{F}</td><td style="padding:3px;">[A, B, C, D, E]</td><td style="padding:3px;">Emit E; its edge E→F drops F 1 → 0, so F becomes ready.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">6</td><td style="padding:3px;">{}</td><td style="padding:3px;">[A, B, C, D, E, F]</td><td style="padding:3px;">Emit F; ready set is empty and all 6 nodes are ordered - done.</td></tr>
                </tbody>
            </table>`,
        legend: `<span style="color:#38bdf8">■</span> Current &nbsp;&nbsp; <span style="color:#d97706">■</span> Frontier &nbsp;&nbsp; <span style="color:#059669">■</span> Visited &nbsp;&nbsp; <span style="color:#059669">■</span> Result edge`
    },
    dijkstra: {
        codeLines: [
            "def dijkstra(graph, src):",
            "    dist = {v: inf for v in graph}",
            "    dist[src] = 0",
            "    while unvisited:",
            "        u = min(unvisited, key=dist.get)",
            "        for v, w in graph[u]:",
            "            if dist[u] + w < dist[v]:",
            "                dist[v] = dist[u] + w"
        ],
        complexity: [["Time", "O((V+E) log V)", "Priority Queue"], ["Space", "O(V)", "Distances"], ["Solves", "Shortest path", "Non-negative weights"]],
        steps: ["Initialize distances to infinity.", "Pick nearest unvisited node and relax edges."],
        example: `
            <div style="font-size:0.75rem; color:#9ca3af; margin-bottom:6px;">Shortest paths from source A on the graph with edges A-B=4, A-C=1, C-B=2, C-D=5, B-D=1:</div>
            <table style="width:100%; border-collapse:collapse; font-size:0.75rem; text-align:left;">
                <thead><tr style="border-bottom:1px solid #374151; color:#38bdf8;"><th style="padding:3px;">Step</th><th style="padding:3px;">Settle</th><th style="padding:3px;">Distances</th><th style="padding:3px;">Action</th></tr></thead>
                <tbody>
                    <tr><td style="padding:3px;">0</td><td style="padding:3px;">-</td><td style="padding:3px;">A=0, B=∞, C=∞, D=∞</td><td style="padding:3px;">Initialize: source A=0, all others infinity.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">1</td><td style="padding:3px;">A (0)</td><td style="padding:3px;">B=4, C=1, D=∞</td><td style="padding:3px;">Relax edges from A: set B=4, C=1.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">2</td><td style="padding:3px;">C (1)</td><td style="padding:3px;">B=3, D=6</td><td style="padding:3px;">Through C: B=1+2=3 beats 4; D=1+5=6.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">3</td><td style="padding:3px;">B (3)</td><td style="padding:3px;">D=4</td><td style="padding:3px;">Through B: D=3+1=4 beats 6.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">4</td><td style="padding:3px;">D (4)</td><td style="padding:3px;">A=0, C=1, B=3, D=4</td><td style="padding:3px;">Settle D; nothing left to relax. Done.</td></tr>
                </tbody>
            </table>`,
        legend: `<span style="color:#38bdf8">■</span> Current &nbsp;&nbsp; <span style="color:#d97706">■</span> Frontier &nbsp;&nbsp; <span style="color:#059669">■</span> Visited &nbsp;&nbsp; <span style="color:#059669">■</span> Result edge`
    },
    bellman: {
        codeLines: [
            "def bellman_ford(edges, src, n):",
            "    dist = {v: inf for v in range(n)}",
            "    dist[src] = 0",
            "    for _ in range(n - 1):",
            "        for u, v, w in edges:",
            "            if dist[u] + w < dist[v]:",
            "                dist[v] = dist[u] + w"
        ],
        complexity: [["Time", "O(V · E)", "Relaxing edges"], ["Space", "O(V)", "Table"], ["Solves", "Shortest path", "Negative weights"]],
        steps: ["Relax all edges V-1 times.", "Check for negative cycles."],
        example: `
            <div style="font-size:0.75rem; color:#9ca3af; margin-bottom:6px;">Source s on 4 nodes s, A, B, C with edges s→A (4), s→B (5), A→C (3), B→A (-3), relaxed in that order. Distances start at s=0 and everything else ∞:</div>
            <table style="width:100%; border-collapse:collapse; font-size:0.75rem; text-align:left;">
                <thead><tr style="border-bottom:1px solid #374151; color:#38bdf8;"><th style="padding:3px;">Pass</th><th style="padding:3px;">Distances [s, A, B, C]</th><th style="padding:3px;">Action</th></tr></thead>
                <tbody>
                    <tr><td style="padding:3px;">Init</td><td style="padding:3px;">[0, ∞, ∞, ∞]</td><td style="padding:3px;">Source distance is 0, all others infinity.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">1</td><td style="padding:3px;">[0, 2, 5, 7]</td><td style="padding:3px;">Relax s→A to 4, s→B to 5, A→C to 7, then B→A lowers A to 5 + (-3) = 2.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">2</td><td style="padding:3px;">[0, 2, 5, 5]</td><td style="padding:3px;">A→C now improves C to 2 + 3 = 5; no other edge relaxes.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">3</td><td style="padding:3px;">[0, 2, 5, 5]</td><td style="padding:3px;">No edge relaxes, so distances are final: A costs 2 via s→B→A.</td></tr>
                </tbody>
            </table>`,
        legend: `<span style="color:#38bdf8">■</span> Current &nbsp;&nbsp; <span style="color:#d97706">■</span> Frontier &nbsp;&nbsp; <span style="color:#059669">■</span> Visited &nbsp;&nbsp; <span style="color:#059669">■</span> Result edge`
    },
    kruskal: {
        codeLines: [
            "def kruskal(nodes, edges):",
            "    edges.sort(key=lambda e: e.weight)",
            "    dsu = DSU(nodes)",
            "    tree = []",
            "    for e in edges:",
            "        if dsu.union(e.u, e.v):",
            "            tree.append(e)",
            "    return tree"
        ],
        complexity: [["Time", "O(E log E)", "Sorting edges"], ["Space", "O(V)", "Disjoint set"], ["Solves", "MST", "Greedy approach"]],
        steps: ["Sort edges by weight.", "Add edges that form no cycles."],
        example: `
            <div style="font-size:0.75rem; color:#9ca3af; margin-bottom:6px;">Graph with nodes A, B, C, D and edges A-B(1), B-C(2), A-C(3), C-D(4), B-D(5). Sorted edges: A-B(1), B-C(2), A-C(3), C-D(4), B-D(5):</div>
            <table style="width:100%; border-collapse:collapse; font-size:0.75rem; text-align:left;">
                <thead><tr style="border-bottom:1px solid #374151; color:#38bdf8;"><th style="padding:3px;">Edge (weight)</th><th style="padding:3px;">Components before</th><th style="padding:3px;">Action</th></tr></thead>
                <tbody>
                    <tr><td style="padding:3px;">A-B(1)</td><td style="padding:3px;">{A} {B} {C} {D}</td><td style="padding:3px;">Different components - add to MST, union to {A, B}.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">B-C(2)</td><td style="padding:3px;">{A, B} {C} {D}</td><td style="padding:3px;">Different components - add to MST, union to {A, B, C}.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">A-C(3)</td><td style="padding:3px;">{A, B, C} {D}</td><td style="padding:3px;">A and C already together - skip (would form a cycle).</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">C-D(4)</td><td style="padding:3px;">{A, B, C} {D}</td><td style="padding:3px;">Different components - add to MST, union to {A, B, C, D}.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">Stop</td><td style="padding:3px;">{A, B, C, D}</td><td style="padding:3px;">Tree has V - 1 = 3 edges. MST = A-B, B-C, C-D, total weight 7.</td></tr>
                </tbody>
            </table>`,
        legend: `<span style="color:#38bdf8">■</span> Current &nbsp;&nbsp; <span style="color:#d97706">■</span> Frontier &nbsp;&nbsp; <span style="color:#059669">■</span> Visited &nbsp;&nbsp; <span style="color:#059669">■</span> Result edge`
    },
    prim: {
        codeLines: [
            "def prim(graph, src):",
            "    in_tree = {src}",
            "    tree = []",
            "    while len(in_tree) < len(graph):",
            "        cheapest = min_crossing_edge(graph, in_tree)",
            "        in_tree.add(cheapest.v)",
            "        tree.append(cheapest)",
            "    return tree"
        ],
        complexity: [["Time", "O(E log V)", "Priority Queue"], ["Space", "O(V)", "Tree"], ["Solves", "MST", "Vertex expansion"]],
        steps: ["Start with single vertex.", "Grow tree by adding cheapest crossing edge."],
        example: `
            <div style="font-size:0.75rem; color:#9ca3af; margin-bottom:6px;">Building the MST of a 4-node graph with edges A-B=1, A-C=3, B-C=2, B-D=4, C-D=5, starting from A:</div>
            <table style="width:100%; border-collapse:collapse; font-size:0.75rem; text-align:left;">
                <thead><tr style="border-bottom:1px solid #374151; color:#38bdf8;"><th style="padding:3px;">Step</th><th style="padding:3px;">Tree</th><th style="padding:3px;">Crossing edges</th><th style="padding:3px;">Chosen edge</th></tr></thead>
                <tbody>
                    <tr><td style="padding:3px;">1</td><td style="padding:3px;">{A}</td><td style="padding:3px;">A-B=1, A-C=3</td><td style="padding:3px;">A-B (weight 1)</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">2</td><td style="padding:3px;">{A, B}</td><td style="padding:3px;">A-C=3, B-C=2, B-D=4</td><td style="padding:3px;">B-C (weight 2)</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">3</td><td style="padding:3px;">{A, B, C}</td><td style="padding:3px;">B-D=4, C-D=5</td><td style="padding:3px;">B-D (weight 4)</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">4</td><td style="padding:3px;">{A, B, C, D}</td><td style="padding:3px;">none - all nodes in tree</td><td style="padding:3px;">done: MST weight 1+2+4 = 7</td></tr>
                </tbody>
            </table>`,
        legend: `<span style="color:#38bdf8">■</span> Current &nbsp;&nbsp; <span style="color:#d97706">■</span> Frontier &nbsp;&nbsp; <span style="color:#059669">■</span> Visited &nbsp;&nbsp; <span style="color:#059669">■</span> Result edge`
    },
    linear: {
        codeLines: [
            "def linear_search(a, target):",
            "    for i in range(len(a)):",
            "        if a[i] == target:",
            "            return i",
            "    return -1"
        ],
        complexity: [["Best case", "O(1)", "First index"], ["Average", "O(n)", "Linear scan"], ["Space", "O(1)", "Constant"]],
        steps: [
            "Start at index 0, the first element of the array.",
            "Compare the current element with the target value.",
            "If they are equal, return the current index (found).",
            "Otherwise move one position to the right and repeat.",
            "If the end of the array is reached without a match, the target is not present (return -1)."
        ],
        example: `
            <div style="font-size:0.85rem; color:#9ca3af; margin-bottom:6px;">Searching for 5 in [7, 3, 9, 1, 5, 8, 2]:</div>
            <table style="width:100%; border-collapse:collapse; font-size:0.75rem; text-align:left;">
                <thead><tr style="border-bottom:1px solid #374151; color:#38bdf8;"><th style="padding:3px;">Comparison</th><th style="padding:3px;">Index</th><th style="padding:3px;">Element</th><th style="padding:3px;">Result</th></tr></thead>
                <tbody>
                    <tr><td style="padding:3px;">1</td><td style="padding:3px;">0</td><td style="padding:3px;">7</td><td style="padding:3px;">7 ≠ 5: keep scanning.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">2</td><td style="padding:3px;">1</td><td style="padding:3px;">3</td><td style="padding:3px;">3 ≠ 5: keep scanning.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">3</td><td style="padding:3px;">2</td><td style="padding:3px;">9</td><td style="padding:3px;">9 ≠ 5: keep scanning.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">4</td><td style="padding:3px;">3</td><td style="padding:3px;">1</td><td style="padding:3px;">1 ≠ 5: keep scanning.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">5</td><td style="padding:3px;">4</td><td style="padding:3px;">5</td><td style="padding:3px;">5 = 5: found at index 4.</td></tr>
                </tbody>
            </table>`,
        legend: `<span style="color:#38bdf8">■</span> Comparing &nbsp;&nbsp; <span style="color:#6b7280">■</span> Target missing &nbsp;&nbsp; <span style="color:#10b981">■</span> Target present`
    },
    binary: {
        codeLines: [
            "def binary_search(a, target):",
            "    lo, hi = 0, len(a) - 1",
            "    while lo <= hi:",
            "        mid = (lo + hi) // 2",
            "        if a[mid] == target:",
            "            return mid",
            "        if a[mid] < target:",
            "            lo = mid + 1",
            "        else:",
            "            hi = mid - 1",
            "    return -1"
        ],
        complexity: [["Best case", "O(1)", "Midpoint"], ["Average", "O(log n)", "Halving window"], ["Space", "O(1)", "Constant"]],
        steps: [
            "Set lo to the first index and hi to the last index of the sorted array.",
            "Compute the middle index: mid = (lo + hi) // 2.",
            "If a[mid] equals the target, return mid (found).",
            "If a[mid] is **less** than the target, the target can only be in the right half: set lo = mid + 1.",
            "If a[mid] is **greater** than the target, search the left half: set hi = mid - 1.",
            "Repeat from step 2 while lo <= hi; if the window empties, the target is not in the array."
        ],
        example: `
            <div style="font-size:0.85rem; color:#9ca3af; margin-bottom:6px;">Searching for 5 in [1, 2, 3, 5, 7, 8, 9]:</div>
            <table style="width:100%; border-collapse:collapse; font-size:0.75rem; text-align:left; margin-bottom:16px;">
                <thead><tr style="border-bottom:1px solid #374151; color:#38bdf8;"><th style="padding:3px;">Pass</th><th style="padding:3px;">Window (lo..hi)</th><th style="padding:3px;">mid</th><th style="padding:3px;">a[mid]</th><th style="padding:3px;">Action</th></tr></thead>
                <tbody>
                    <tr><td style="padding:3px;">1</td><td style="padding:3px;">[1, 2, 3, 5, 7, 8, 9] (0..6)</td><td style="padding:3px;">3</td><td style="padding:3px;">5</td><td style="padding:3px;">a[3] = 5: target found at index 3.</td></tr>
                </tbody>
            </table>
            <h4 style="color:#f3f4f6; margin:16px 0 8px 0; font-size:1rem;">A miss, step by step</h4>
            <div style="font-size:0.85rem; color:#9ca3af; margin-bottom:6px;">Searching for 4 in the same array shows how the window empties:</div>
            <table style="width:100%; border-collapse:collapse; font-size:0.75rem; text-align:left;">
                <thead><tr style="border-bottom:1px solid #374151; color:#38bdf8;"><th style="padding:3px;">Pass</th><th style="padding:3px;">Window (lo..hi)</th><th style="padding:3px;">mid</th><th style="padding:3px;">a[mid]</th><th style="padding:3px;">Action</th></tr></thead>
                <tbody>
                    <tr><td style="padding:3px;">1</td><td style="padding:3px;">0..6</td><td style="padding:3px;">3</td><td style="padding:3px;">5</td><td style="padding:3px;">5 > 4: search the left half, hi = 2.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">2</td><td style="padding:3px;">0..2</td><td style="padding:3px;">1</td><td style="padding:3px;">2</td><td style="padding:3px;">2 < 4: search the right half, lo = 2.</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">3</td><td style="padding:3px;">2..2</td><td style="padding:3px;">2</td><td style="padding:3px;">3</td><td style="padding:3px;">3 < 4, so lo becomes 3 and the window empties: not found.</td></tr>
                </tbody>
            </table>`,
        legend: `<span style="color:#38bdf8">■</span> Comparing &nbsp;&nbsp; <span style="color:#6b7280">■</span> Target missing &nbsp;&nbsp; <span style="color:#10b981">■</span> Target present`
    },
    recursion: {
        codeLines: [
            "def fib(n):",
            "    if n <= 1:",
            "        return n",
            "    left = fib(n - 1)",
            "    right = fib(n - 2)",
            "    return left + right"
        ],
        complexity: [["Time", "O(n)", "Linear steps"], ["Space", "O(n)", "Call stack"], ["Use", "Divide & Conquer", "Branching"]],
        steps: [
            "The first call fib(n) goes on the call stack.",
            "It needs fib(n - 1), so that call goes on the stack too; the parent waits.",
            "Calls keep nesting until one asks about n <= 1: the base case answers immediately, no deeper call.",
            "The base case's value returns to its parent, which may now start its second call, fib(n - 2).",
            "When both children have returned, the parent adds them and returns too; its frame leaves the stack.",
            "Returning repeats up the tree until the first call's frame pops with the final answer and the stack is empty."
        ],
        example: `
            <div style="font-size:0.85rem; color:#9ca3af; margin-bottom:6px;">Evaluating fib(4) in exact call order, as the animation plays it:</div>
            <table style="width:100%; border-collapse:collapse; font-size:0.75rem; text-align:left;">
                <thead><tr style="border-bottom:1px solid #374151; color:#38bdf8;"><th style="padding:3px;">Call</th><th style="padding:3px;">Stack at that moment</th><th style="padding:3px;">Returns</th></tr></thead>
                <tbody>
                    <tr><td style="padding:3px;">fib(4)</td><td style="padding:3px;">fib(4)</td><td style="padding:3px;">waits for children</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">fib(3)</td><td style="padding:3px;">fib(4) > fib(3)</td><td style="padding:3px;">waits for children</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">fib(2)</td><td style="padding:3px;">fib(4) > fib(3) > fib(2)</td><td style="padding:3px;">waits for children</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">fib(1)</td><td style="padding:3px;">fib(4) > fib(3) > fib(2) > fib(1)</td><td style="padding:3px;">1 (base case)</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">fib(0)</td><td style="padding:3px;">fib(4) > fib(3) > fib(2) > fib(0)</td><td style="padding:3px;">0 (base case)</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">fib(2) combines</td><td style="padding:3px;">fib(4) > fib(3) > fib(2)</td><td style="padding:3px;">1 + 0 = 1</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">fib(1)</td><td style="padding:3px;">fib(4) > fib(3) > fib(1)</td><td style="padding:3px;">1 (base case)</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">fib(3) combines</td><td style="padding:3px;">fib(4) > fib(3)</td><td style="padding:3px;">1 + 1 = 2</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">fib(2) again</td><td style="padding:3px;">fib(4) > fib(2)</td><td style="padding:3px;">1, recomputed from scratch</td></tr>
                    <tr style="border-top:1px solid #1f2937;"><td style="padding:3px;">fib(4) combines</td><td style="padding:3px;">fib(4)</td><td style="padding:3px;">2 + 1 = 3</td></tr>
                </tbody>
            </table>`,
        legend: `<span style="border:1px dashed #a855f7; border-radius:50%; padding:0 4px; color:#d8b4fe; background:#111827;">■</span> On the call stack &nbsp;&nbsp; <span style="background:#a855f7; border-radius:50%; padding:0 4px; color:white;">■</span> Evaluating &nbsp;&nbsp; <span style="border:1px solid #a855f7; border-radius:50%; padding:0 4px; color:#d8b4fe; background:#111827;">■</span> Returned`
    }
};

let currentCategory = 'sorting';
let currentAlgoId = 'insertion';
let array = [];
let history = [];
let currentStepIndex = 0;
let isAnimating = false;
let animationTimer = null;
let graphSeed = 1;
let searchTargetMode = 'present';
let searchTarget = 4;

const speedMultipliers = [0.5, 1, 2, 3, 4, 5];

function showPage(pageId) {
    stopAnimation();
    document.getElementById('hubView').classList.remove('active');
    document.getElementById('categoryView').classList.remove('active');
    document.getElementById('visualizerView').classList.remove('active');

    if (pageId === 'hub') {
        document.getElementById('hubView').classList.add('active');
    }
}

function showCategory(categoryId) {
    stopAnimation();
    currentCategory = categoryId;
    document.getElementById('hubView').classList.remove('active');
    document.getElementById('visualizerView').classList.remove('active');
    document.getElementById('categoryView').classList.add('active');

    const cat = categoriesData[categoryId];
    if (!cat) return;

    document.getElementById('categoryTitle').textContent = cat.title;
    document.getElementById('categoryDesc').textContent = cat.desc;

    const grid = document.getElementById('categoryGrid');
    grid.innerHTML = '';
    cat.algorithms.forEach(algo => {
        const card = document.createElement('div');
        card.className = 'cyber-card';
        card.innerHTML = `
            <div class="card-icon neon-green">⚡</div>
            <h3>${algo.name}</h3>
            <p>${algo.desc}</p>
            <span class="card-tag">LAUNCH MODULE</span>
        `;
        card.addEventListener('click', () => loadVisualizer(categoryId, algo.id));
        grid.appendChild(card);
    });

    const tableWrapper = document.getElementById('comparisonTableWrapper');
    let tableHTML = `<table class="cyber-table"><thead><tr>`;
    cat.tableHeaders.forEach(h => tableHTML += `<th>${h}</th>`);
    tableHTML += `</tr></thead><tbody>`;
    cat.tableRows.forEach(row => {
        tableHTML += `<tr>`;
        row.forEach(cell => tableHTML += `<td>${cell}</td>`);
        tableHTML += `</tr>`;
    });
    tableHTML += `</tbody></table>`;
    tableWrapper.innerHTML = tableHTML;
}

function loadVisualizer(categoryId, algoId) {
    stopAnimation();
    currentCategory = categoryId;
    currentAlgoId = algoId;
    document.getElementById('hubView').classList.remove('active');
    document.getElementById('categoryView').classList.remove('active');
    document.getElementById('visualizerView').classList.add('active');

    const cat = categoriesData[categoryId];
    const algo = cat.algorithms.find(a => a.id === algoId);
    if (!cat || !algo) return;

    document.getElementById('sidebarCategoryTitle').textContent = cat.title.toUpperCase();
    document.getElementById('algoName').textContent = algo.name;

    const sidebarList = document.getElementById('sidebarList');
    sidebarList.innerHTML = '';
    cat.algorithms.forEach(a => {
        const li = document.createElement('li');
        li.textContent = a.name;
        if (a.id === algoId) li.classList.add('active');
        li.addEventListener('click', () => loadVisualizer(categoryId, a.id));
        sidebarList.appendChild(li);
    });

    const details = algoDetails[algoId] || algoDetails['insertion'];
    renderCodeBlock(details.codeLines || []);
    document.getElementById('legendContainer').innerHTML = details.legend || '';

    const compBody = document.getElementById('complexityTableBody');
    compBody.innerHTML = '';
    details.complexity.forEach(row => {
        compBody.innerHTML += `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`;
    });

    const stepList = document.getElementById('stepByStepList');
    stepList.innerHTML = '';
    details.steps.forEach(step => {
        stepList.innerHTML += `<li>${step}</li>`;
    });

    document.getElementById('workedExampleText').innerHTML = details.example;

    setupCategoryControls(categoryId);
    generateNewCanvasData('random');
}

function renderCodeBlock(lines) {
    const codeBox = document.getElementById('codeSnippetBox');
    codeBox.innerHTML = '';
    lines.forEach((lineText, idx) => {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'code-line';
        lineDiv.id = `codeLine-${idx + 1}`;
        lineDiv.innerHTML = `
            <span class="line-num">${idx + 1}</span>
            <span class="line-content">${lineText}</span>
        `;
        codeBox.appendChild(lineDiv);
    });
}

function highlightCodeLine(lineNum) {
    document.querySelectorAll('.code-line').forEach(el => el.classList.remove('active-line'));
    if (lineNum) {
        const activeEl = document.getElementById(`codeLine-${lineNum}`);
        if (activeEl) activeEl.classList.add('active-line');
    }
}

function setupCategoryControls(categoryId) {
    const btnGroup = document.getElementById('controlBtnGroup');
    const customInputBox = document.getElementById('customInputBoxWrapper');
    const sliderLabel = document.getElementById('dynamicSliderLabel');
    const sizeSlider = document.getElementById('sizeSlider');

    if (categoryId === 'graph') {
        btnGroup.innerHTML = `
            <button id="playBtn" class="cyber-btn primary">Play</button>
            <button id="prevBtn" class="cyber-btn secondary">&lt;</button>
            <button id="nextBtn" class="cyber-btn secondary">&gt;</button>
            <button id="newGraphBtn" class="cyber-btn secondary">New graph</button>
            <button id="resetBtn" class="cyber-btn secondary">Reset</button>
        `;
        customInputBox.style.display = 'none';
        sliderLabel.innerHTML = `Nodes (<span id="sizeDisplay">5</span>)`;
        sizeSlider.min = 4;
        sizeSlider.max = 6;
        sizeSlider.value = 5;
    } else if (categoryId === 'sorting') {
        btnGroup.innerHTML = `
            <button id="playBtn" class="cyber-btn primary">PLAY</button>
            <button id="stepBtn" class="cyber-btn secondary">STEP</button>
            <button id="randomBtn" class="cyber-btn secondary">Random</button>
            <button id="bestCaseBtn" class="cyber-btn secondary">Best Case</button>
            <button id="worstCaseBtn" class="cyber-btn secondary">Worst Case</button>
            <button id="resetBtn" class="cyber-btn secondary">Reset</button>
        `;
        customInputBox.style.display = 'block';
        sliderLabel.innerHTML = `SIZE (<span id="sizeDisplay">15</span>)`;
        sizeSlider.min = 5;
        sizeSlider.max = 30;
        sizeSlider.value = 15;
    } else if (categoryId === 'searching') {
        btnGroup.innerHTML = `
            <button id="playBtn" class="cyber-btn primary">Play</button>
            <button id="prevBtn" class="cyber-btn secondary">&lt;</button>
            <button id="nextBtn" class="cyber-btn secondary">&gt;</button>
            <button id="shuffleBtn" class="cyber-btn secondary">Shuffle</button>
            <button id="targetPresentBtn" class="cyber-btn secondary">Target present</button>
            <button id="targetMissingBtn" class="cyber-btn secondary">Target missing</button>
            <button id="resetBtn" class="cyber-btn secondary">Reset</button>
        `;
        customInputBox.style.display = 'none';
        sliderLabel.innerHTML = `Size (<span id="sizeDisplay">14</span>)`;
        sizeSlider.min = 5;
        sizeSlider.max = 20;
        sizeSlider.value = 14;
    } else {
        // core category (Recursion)
        btnGroup.innerHTML = `
            <button id="playBtn" class="cyber-btn primary">Play</button>
            <button id="prevBtn" class="cyber-btn secondary">&lt;</button>
            <button id="nextBtn" class="cyber-btn secondary">&gt;</button>
            <button id="resetBtn" class="cyber-btn secondary">Reset</button>
        `;
        customInputBox.style.display = 'none';
        sliderLabel.innerHTML = `Size (<span id="sizeDisplay">n = 7</span>)`;
        sizeSlider.min = 2;
        sizeSlider.max = 7;
        sizeSlider.value = 7;
    }

    bindDynamicButtons();
    if (categoryId === 'searching') {
        syncSearchTargetButtons();
    }
}

function syncSearchTargetButtons() {
    const pBtn = document.getElementById('targetPresentBtn');
    const mBtn = document.getElementById('targetMissingBtn');
    if (pBtn && mBtn) {
        if (searchTargetMode === 'present') {
            pBtn.style.borderColor = '#38bdf8';
            pBtn.style.color = '#38bdf8';
            pBtn.style.boxShadow = '0 0 8px rgba(56, 189, 248, 0.5)';

            mBtn.style.borderColor = '#374151'; // default secondary state
            mBtn.style.color = '#9ca3af';
            mBtn.style.boxShadow = 'none';
        } else {
            mBtn.style.borderColor = '#38bdf8';
            mBtn.style.color = '#38bdf8';
            mBtn.style.boxShadow = '0 0 8px rgba(56, 189, 248, 0.5)';

            pBtn.style.borderColor = '#374151';
            pBtn.style.color = '#9ca3af';
            pBtn.style.boxShadow = 'none';
        }
    }
}

function generateNewCanvasData(mode = 'random') {
    stopAnimation();
    const sizeVal = parseInt(document.getElementById('sizeSlider').value);
    document.getElementById('sizeDisplay').textContent = sizeVal;

    if (currentCategory === 'sorting') {
        array = [];
        if (mode === 'best') {
            for (let i = 1; i <= sizeVal; i++) {
                array.push(i * 4 + 10);
            }
        } else if (mode === 'worst') {
            for (let i = sizeVal; i >= 1; i--) {
                array.push(i * 4 + 10);
            }
        } else {
            for (let i = 0; i < sizeVal; i++) {
                array.push(Math.floor(Math.random() * 85) + 5);
            }
        }
    } else if (currentCategory === 'searching') {
        array = [];
        if (currentAlgoId === 'linear') {
            for (let i = 0; i < sizeVal; i++) {
                array.push(Math.floor(Math.random() * 90) + 4);
            }
        } else {
            let baseNums = [4, 15, 23, 35, 47, 50, 51, 56, 58, 59, 60, 79, 96, 98, 105, 112, 120, 135, 142, 150];
            let shuffledBase = [...baseNums].sort(() => Math.random() - 0.5);
            array = shuffledBase.slice(0, sizeVal).sort((a, b) => a - b);
        }

        if (searchTargetMode === 'present') {
            searchTarget = array[Math.floor(Math.random() * array.length)];
        } else {
            let min = Math.min(...array);
            let max = Math.max(...array);
            // Pick a random candidate securely within the bounds of the array elements
            let candidate = Math.floor(Math.random() * (max - min + 1)) + min;
            while (array.includes(candidate)) {
                candidate++;
                if (candidate > max + 5) candidate = min - 5; // wrap around gracefully
            }
            searchTarget = candidate;
        }
    }

    fetchBackendHistory().then(() => {
        currentStepIndex = 0;
        renderCanvasFrame(history[0], 0);
        document.getElementById('runtimeStatus').textContent = `Step 0 / ${history.length - 1}`;
        document.getElementById('runtimeStatus').style.color = '#34d399';
    });
}

function updateSearchTargetSetting() {
    stopAnimation();
    if (array.length === 0) {
        generateNewCanvasData('random');
        return;
    }

    if (searchTargetMode === 'present') {
        searchTarget = array[Math.floor(Math.random() * array.length)];
    } else {
        let min = Math.min(...array);
        let max = Math.max(...array);
        let candidate = Math.floor(Math.random() * (max - min + 1)) + min;
        while (array.includes(candidate)) {
            candidate++;
            if (candidate > max + 5) candidate = min - 5;
        }
        searchTarget = candidate;
    }

    fetchBackendHistory().then(() => {
        currentStepIndex = 0;
        renderCanvasFrame(history[0], 0);
        document.getElementById('runtimeStatus').textContent = `Step 0 / ${history.length - 1}`;
        document.getElementById('runtimeStatus').style.color = '#34d399';
    });
}

// ==========================================
// TRUE CODE-TRACED STEP SIMULATOR
// ==========================================
async function fetchBackendHistory() {
    history = [];

    if (currentCategory === 'sorting') {
        let a = [...array];

        if (currentAlgoId === 'insertion') {
            let n = a.length;
            history.push({ array: [...a], pointers: {}, sortedIndices: [], lineNum: 1 });
            for (let i = 1; i < n; i++) {
                history.push({ array: [...a], pointers: { [i]: { label: 'key', color: '#f97316' } }, sortedIndices: Array.from({ length: i }, (_, idx) => idx), lineNum: 2 });
                let key = a[i];
                history.push({ array: [...a], pointers: { [i]: { label: 'key', color: '#f97316' } }, sortedIndices: Array.from({ length: i }, (_, idx) => idx), lineNum: 3 });
                let j = i - 1;
                history.push({ array: [...a], pointers: { [i]: { label: 'key', color: '#f97316' }, [j]: { label: 'j', color: '#38bdf8' } }, sortedIndices: Array.from({ length: i }, (_, idx) => idx), lineNum: 4 });

                while (j >= 0 && a[j] > key) {
                    history.push({ array: [...a], pointers: { [i]: { label: 'key', color: '#f97316' }, [j]: { label: 'j', color: '#d97706' } }, sortedIndices: Array.from({ length: i }, (_, idx) => idx), lineNum: 5 });
                    a[j + 1] = a[j];
                    history.push({ array: [...a], pointers: { [j + 1]: { label: 'j+1', color: '#38bdf8' }, [j]: { label: 'j', color: '#d97706' } }, sortedIndices: Array.from({ length: i }, (_, idx) => idx), lineNum: 6 });
                    j -= 1;
                    history.push({ array: [...a], pointers: { [j + 1]: { label: 'j', color: '#38bdf8' } }, sortedIndices: Array.from({ length: i }, (_, idx) => idx), lineNum: 7 });
                }
                a[j + 1] = key;
                history.push({ array: [...a], pointers: { [j + 1]: { label: 'key', color: '#f97316' } }, sortedIndices: Array.from({ length: i + 1 }, (_, idx) => idx), lineNum: 8 });
            }
            history.push({ array: [...a], pointers: {}, sortedIndices: Array.from({ length: n }, (_, idx) => idx), lineNum: 9 });

        } else if (currentAlgoId === 'bubble') {
            let n = a.length;
            history.push({ array: [...a], pointers: {}, sortedIndices: [], lineNum: 2 });
            for (let i = 0; i < n - 1; i++) {
                history.push({ array: [...a], pointers: {}, sortedIndices: Array.from({ length: i }, (_, idx) => n - 1 - idx), lineNum: 3 });
                for (let j = 0; j < n - 1 - i; j++) {
                    history.push({ array: [...a], pointers: { [j]: { label: 'j', color: '#d97706' }, [j + 1]: { label: 'j+1', color: '#d97706' } }, sortedIndices: Array.from({ length: i }, (_, idx) => n - 1 - idx), lineNum: 4 });
                    history.push({ array: [...a], pointers: { [j]: { label: 'j', color: '#d97706' }, [j + 1]: { label: 'j+1', color: '#d97706' } }, sortedIndices: Array.from({ length: i }, (_, idx) => n - 1 - idx), lineNum: 5 });
                    if (a[j] > a[j + 1]) {
                        let temp = a[j]; a[j] = a[j + 1]; a[j + 1] = temp;
                        history.push({ array: [...a], pointers: { [j]: { label: 'j', color: '#38bdf8' }, [j + 1]: { label: 'j+1', color: '#38bdf8' } }, sortedIndices: Array.from({ length: i }, (_, idx) => n - 1 - idx), lineNum: 6 });
                    }
                }
            }
            history.push({ array: [...a], pointers: {}, sortedIndices: Array.from({ length: n }, (_, idx) => idx), lineNum: 8 });

        } else if (currentAlgoId === 'selection') {
            let n = a.length;
            history.push({ array: [...a], pointers: {}, sortedIndices: [], lineNum: 2 });
            for (let i = 0; i < n - 1; i++) {
                history.push({ array: [...a], pointers: { [i]: { label: 'i', color: '#d97706' } }, sortedIndices: Array.from({ length: i }, (_, idx) => idx), lineNum: 3 });
                let m = i;
                history.push({ array: [...a], pointers: { [i]: { label: 'i', color: '#d97706' }, [m]: { label: 'm', color: '#38bdf8' } }, sortedIndices: Array.from({ length: i }, (_, idx) => idx), lineNum: 4 });
                for (let j = i + 1; j < n; j++) {
                    history.push({ array: [...a], pointers: { [j]: { label: 'j', color: '#d97706' }, [m]: { label: 'm', color: '#38bdf8' } }, sortedIndices: Array.from({ length: i }, (_, idx) => idx), lineNum: 5 });
                    history.push({ array: [...a], pointers: { [j]: { label: 'j', color: '#d97706' }, [m]: { label: 'm', color: '#38bdf8' } }, sortedIndices: Array.from({ length: i }, (_, idx) => idx), lineNum: 6 });
                    if (a[j] < a[m]) {
                        m = j;
                        history.push({ array: [...a], pointers: { [m]: { label: 'm', color: '#38bdf8' } }, sortedIndices: Array.from({ length: i }, (_, idx) => idx), lineNum: 7 });
                    }
                }
                let temp = a[i]; a[i] = a[m]; a[m] = temp;
                history.push({ array: [...a], pointers: { [i]: { label: 'i', color: '#38bdf8' }, [m]: { label: 'm', color: '#38bdf8' } }, sortedIndices: Array.from({ length: i + 1 }, (_, idx) => idx), lineNum: 8 });
            }
            history.push({ array: [...a], pointers: {}, sortedIndices: Array.from({ length: n }, (_, idx) => idx), lineNum: 9 });

        } else if (currentAlgoId === 'quick') {
            function quickSortHelper(arr, lo, hi) {
                history.push({ array: [...arr], pointers: { [lo]: { label: 'lo', color: '#38bdf8' }, [hi]: { label: 'hi', color: '#38bdf8' } }, sortedIndices: [], lineNum: 1 });
                if (lo >= hi) {
                    history.push({ array: [...arr], pointers: {}, sortedIndices: [], lineNum: 2 });
                    return;
                }
                let pivot = arr[hi];
                history.push({ array: [...arr], pointers: { [hi]: { label: 'pivot', color: '#8b5cf6' } }, sortedIndices: [], lineNum: 3 });
                let i = lo;
                history.push({ array: [...arr], pointers: { [i]: { label: 'i', color: '#d97706' }, [hi]: { label: 'pivot', color: '#8b5cf6' } }, sortedIndices: [], lineNum: 4 });
                for (let j = lo; j < hi; j++) {
                    history.push({ array: [...arr], pointers: { [i]: { label: 'i', color: '#d97706' }, [j]: { label: 'j', color: '#38bdf8' }, [hi]: { label: 'pivot', color: '#8b5cf6' } }, sortedIndices: [], lineNum: 5 });
                    history.push({ array: [...arr], pointers: { [i]: { label: 'i', color: '#d97706' }, [j]: { label: 'j', color: '#38bdf8' }, [hi]: { label: 'pivot', color: '#8b5cf6' } }, sortedIndices: [], lineNum: 6 });
                    if (arr[j] < pivot) {
                        let temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
                        history.push({ array: [...arr], pointers: { [i]: { label: 'i', color: '#38bdf8' }, [j]: { label: 'j', color: '#38bdf8' }, [hi]: { label: 'pivot', color: '#8b5cf6' } }, sortedIndices: [], lineNum: 7 });
                        i += 1;
                        history.push({ array: [...arr], pointers: { [i]: { label: 'i', color: '#d97706' }, [hi]: { label: 'pivot', color: '#8b5cf6' } }, sortedIndices: [], lineNum: 8 });
                    }
                }
                let temp = arr[i]; arr[i] = arr[hi]; arr[hi] = temp;
                history.push({ array: [...arr], pointers: { [i]: { label: 'pivot', color: '#8b5cf6' } }, sortedIndices: [i], lineNum: 9 });
                history.push({ array: [...arr], pointers: {}, sortedIndices: [i], lineNum: 10 });
                quickSortHelper(arr, lo, i - 1);
                quickSortHelper(arr, i + 1, hi);
            }
            quickSortHelper(a, 0, a.length - 1);
            history.push({ array: [...a], pointers: {}, sortedIndices: Array.from({ length: a.length }, (_, idx) => idx), lineNum: 10 });

        } else {
            function mergeSortHelper(arr, lo, hi) {
                if (lo >= hi) return;
                let mid = Math.floor((lo + hi) / 2);
                mergeSortHelper(arr, lo, mid);
                mergeSortHelper(arr, mid + 1, hi);

                history.push({ array: [...arr], pointers: { [lo]: { label: 'lo', color: '#38bdf8' }, [hi]: { label: 'hi', color: '#38bdf8' } }, sortedIndices: [], lineNum: 1 });
                let aux = arr.slice(lo, hi + 1);
                history.push({ array: [...arr], pointers: {}, sortedIndices: [], lineNum: 2 });
                let i = lo, j = mid + 1, k = lo;
                history.push({ array: [...arr], pointers: { [i]: { label: 'i', color: '#d97706' }, [j]: { label: 'j', color: '#38bdf8' }, [k]: { label: 'k', color: '#38bdf8' } }, sortedIndices: [], lineNum: 3 });

                while (k <= hi) {
                    history.push({ array: [...arr], pointers: { [k]: { label: 'k', color: '#38bdf8' } }, sortedIndices: [], lineNum: 4 });
                    history.push({ array: [...arr], pointers: { [i]: { label: 'i', color: '#d97706' }, [j]: { label: 'j', color: '#38bdf8' } }, sortedIndices: [], lineNum: 5 });
                    if (j > hi || (i <= mid && aux[i - lo] <= aux[j - lo])) {
                        arr[k] = aux[i - lo];
                        i += 1;
                        history.push({ array: [...arr], pointers: { [k]: { label: 'k', color: '#38bdf8' } }, sortedIndices: [], lineNum: 7 });
                    } else {
                        arr[k] = aux[j - lo];
                        j += 1;
                        history.push({ array: [...arr], pointers: { [k]: { label: 'k', color: '#38bdf8' } }, sortedIndices: [], lineNum: 9 });
                    }
                    k += 1;
                }
            }
            mergeSortHelper(a, 0, a.length - 1);
            history.push({ array: [...a], pointers: {}, sortedIndices: Array.from({ length: a.length }, (_, idx) => idx), lineNum: 1 });
        }

    } else if (currentCategory === 'graph') {
        const nodeCount = parseInt(document.getElementById('sizeSlider').value) || 5;

        let adj = {};
        let allEdges = [];
        for (let i = 0; i < nodeCount; i++) adj[i] = [];

        if (currentAlgoId === 'topo') {
            for (let i = 0; i < nodeCount; i++) {
                let next = i + 1;
                if (next < nodeCount) {
                    let weight = Math.floor(Math.abs(Math.sin(graphSeed + i * 1.5)) * 9) + 1;
                    adj[i].push({ node: next, weight });
                    allEdges.push({ u: i, v: next, weight });
                }
                if (i + 2 < nodeCount) {
                    let jump = i + 2;
                    let weight = Math.floor(Math.abs(Math.cos(graphSeed + i * 2.1)) * 9) + 1;
                    if (!adj[i].some(e => e.node === jump)) {
                        adj[i].push({ node: jump, weight });
                        allEdges.push({ u: i, v: jump, weight });
                    }
                }
            }
        } else {
            for (let i = 0; i < nodeCount; i++) {
                let next = (i + 1) % nodeCount;
                let weight = Math.floor(Math.abs(Math.sin(graphSeed + i * 1.5)) * 9) + 1;
                adj[i].push({ node: next, weight });
                adj[next].push({ node: i, weight });
                allEdges.push({ u: i, v: next, weight });

                if (nodeCount >= 5 && i < nodeCount - 2) {
                    let jump = (i + 2) % nodeCount;
                    let w2 = Math.floor(Math.abs(Math.cos(graphSeed + i * 2.1)) * 9) + 1;
                    if (!adj[i].some(e => e.node === jump)) {
                        adj[i].push({ node: jump, weight: w2 });
                        adj[jump].push({ node: i, weight: w2 });
                        allEdges.push({ u: i, v: jump, weight: w2 });
                    }
                }
            }
        }

        let steps = [];

        if (currentAlgoId === 'dfs') {
            let visited = new Set();
            let visitedEdges = new Set();
            let stack = [0];

            steps.push({ nodeCount, currentNode: 0, visitedNodes: [], frontierNodes: [0], visitedEdges: [], edges: allEdges, lineNum: 2 });
            steps.push({ nodeCount, currentNode: 0, visitedNodes: [], frontierNodes: [0], visitedEdges: [], edges: allEdges, lineNum: 3 });

            while (stack.length > 0) {
                let u = stack.pop();
                let frontierList = [...stack].filter(n => !visited.has(n));
                steps.push({ nodeCount, currentNode: u, visitedNodes: Array.from(visited), frontierNodes: frontierList, visitedEdges: Array.from(visitedEdges), edges: allEdges, lineNum: 5 });

                if (!visited.has(u)) {
                    visited.add(u);
                    frontierList = [...stack].filter(n => !visited.has(n));
                    steps.push({ nodeCount, currentNode: u, visitedNodes: Array.from(visited), frontierNodes: frontierList, visitedEdges: Array.from(visitedEdges), edges: allEdges, lineNum: 6 });

                    for (let vObj of [...adj[u]].reverse()) {
                        let v = vObj.node;
                        steps.push({ nodeCount, currentNode: u, visitedNodes: Array.from(visited), frontierNodes: frontierList, visitedEdges: Array.from(visitedEdges), edges: allEdges, lineNum: 7 });
                        if (!visited.has(v)) {
                            let edgeKey = [Math.min(u, v), Math.max(u, v)].join('-');
                            visitedEdges.add(edgeKey);
                            stack.push(v);
                            frontierList = [...stack].filter(n => !visited.has(n));
                            steps.push({ nodeCount, currentNode: v, visitedNodes: Array.from(visited), frontierNodes: frontierList, visitedEdges: Array.from(visitedEdges), edges: allEdges, lineNum: 9 });
                        }
                    }
                }
            }
            history = steps;

        } else if (currentAlgoId === 'bfs') {
            let visited = new Set();
            let queue = [0];
            let visitedEdges = new Set();

            steps.push({ nodeCount, currentNode: 0, visitedNodes: [0], frontierNodes: [...queue], visitedEdges: [], edges: allEdges, lineNum: 2 });
            steps.push({ nodeCount, currentNode: 0, visitedNodes: [0], frontierNodes: [...queue], visitedEdges: [], edges: allEdges, lineNum: 3 });

            while (queue.length > 0) {
                let frontierList = [...queue].filter(n => !visited.has(n));
                steps.push({ nodeCount, currentNode: queue[0], visitedNodes: Array.from(visited), frontierNodes: frontierList, visitedEdges: Array.from(visitedEdges), edges: allEdges, lineNum: 4 });
                let u = queue.shift();
                frontierList = [...queue].filter(n => !visited.has(n));
                steps.push({ nodeCount, currentNode: u, visitedNodes: Array.from(visited), frontierNodes: frontierList, visitedEdges: Array.from(visitedEdges), edges: allEdges, lineNum: 5 });

                visited.add(u);
                for (let vObj of adj[u]) {
                    steps.push({ nodeCount, currentNode: u, visitedNodes: Array.from(visited), frontierNodes: frontierList, visitedEdges: Array.from(visitedEdges), edges: allEdges, lineNum: 6 });
                    if (!visited.has(vObj.node) && !queue.includes(vObj.node)) {
                        queue.push(vObj.node);
                        visitedEdges.add([Math.min(u, vObj.node), Math.max(u, vObj.node)].join('-'));
                        frontierList = [...queue].filter(n => !visited.has(n));
                        steps.push({ nodeCount, currentNode: vObj.node, visitedNodes: Array.from(visited), frontierNodes: frontierList, visitedEdges: Array.from(visitedEdges), edges: allEdges, lineNum: 8 });
                    }
                }
            }
            history = steps;

        } else if (currentAlgoId === 'topo') {
            let inDeg = {};
            for (let i = 0; i < nodeCount; i++) inDeg[i] = 0;
            allEdges.forEach(e => { inDeg[e.v] = (inDeg[e.v] || 0) + 1; });
            let ready = [];
            for (let i = 0; i < nodeCount; i++) {
                if (inDeg[i] === 0) ready.push(i);
            }

            let visited = new Set();
            let visitedEdges = new Set();
            steps.push({ nodeCount, currentNode: null, visitedNodes: [], frontierNodes: [], visitedEdges: [], edges: allEdges, lineNum: 2 });

            while (ready.length > 0) {
                let u = ready.shift();
                steps.push({ nodeCount, currentNode: u, visitedNodes: Array.from(visited), frontierNodes: [...ready], visitedEdges: Array.from(visitedEdges), edges: allEdges, lineNum: 5 });

                visited.add(u);
                steps.push({ nodeCount, currentNode: u, visitedNodes: Array.from(visited), frontierNodes: [...ready], visitedEdges: Array.from(visitedEdges), edges: allEdges, lineNum: 6 });

                if (adj[u]) {
                    adj[u].forEach(neighborObj => {
                        let v = neighborObj.node;
                        let edgeKey = [Math.min(u, v), Math.max(u, v)].join('-');
                        visitedEdges.add(edgeKey);
                        inDeg[v]--;
                        if (inDeg[v] === 0 && !visited.has(v) && !ready.includes(v)) {
                            ready.push(v);
                        }
                        steps.push({ nodeCount, currentNode: u, visitedNodes: Array.from(visited), frontierNodes: [...ready], visitedEdges: Array.from(visitedEdges), edges: allEdges, lineNum: 8 });
                    });
                }
            }
            history = steps;

        } else if (currentAlgoId === 'dijkstra') {
            let dist = {};
            let unvisited = new Set();
            for (let i = 0; i < nodeCount; i++) {
                dist[i] = Infinity;
                unvisited.add(i);
            }
            dist[0] = 0;
            let visited = new Set();
            let visitedEdges = new Set();

            steps.push({ nodeCount, currentNode: 0, visitedNodes: Array.from(visited), frontierNodes: [], visitedEdges: Array.from(visitedEdges), edges: allEdges, lineNum: 2 });

            while (unvisited.size > 0) {
                let u = null;
                let minDist = Infinity;
                unvisited.forEach(node => {
                    if (dist[node] < minDist) {
                        minDist = dist[node];
                        u = node;
                    }
                });
                if (u === null || minDist === Infinity) {
                    let arr = Array.from(unvisited);
                    if (arr.length === 0) break;
                    u = arr[0];
                }

                steps.push({ nodeCount, currentNode: u, visitedNodes: Array.from(visited), frontierNodes: Array.from(unvisited), visitedEdges: Array.from(visitedEdges), edges: allEdges, lineNum: 4 });

                unvisited.delete(u);
                visited.add(u);

                steps.push({ nodeCount, currentNode: u, visitedNodes: Array.from(visited), frontierNodes: Array.from(unvisited), visitedEdges: Array.from(visitedEdges), edges: allEdges, lineNum: 5 });

                if (adj[u]) {
                    adj[u].forEach(neighborObj => {
                        let v = neighborObj.node;
                        let w = neighborObj.weight;
                        steps.push({ nodeCount, currentNode: v, visitedNodes: Array.from(visited), frontierNodes: Array.from(unvisited), visitedEdges: Array.from(visitedEdges), edges: allEdges, lineNum: 6 });
                        if (unvisited.has(v) && dist[u] + w < dist[v]) {
                            dist[v] = dist[u] + w;
                            let edgeKey = [Math.min(u, v), Math.max(u, v)].join('-');
                            visitedEdges.add(edgeKey);
                            steps.push({ nodeCount, currentNode: v, visitedNodes: Array.from(visited), frontierNodes: Array.from(unvisited), visitedEdges: Array.from(visitedEdges), edges: allEdges, lineNum: 8 });
                        }
                    });
                }
            }
            history = steps;

        } else if (currentAlgoId === 'bellman') {
            let visited = new Set([0]);
            let visitedEdges = new Set();
            steps.push({ nodeCount, currentNode: 0, visitedNodes: Array.from(visited), frontierNodes: [], visitedEdges: [], edges: allEdges, lineNum: 2 });

            for (let i = 0; i < nodeCount - 1; i++) {
                allEdges.forEach(edge => {
                    let u = edge.u, v = edge.v;
                    let frontierNodes = [u, v];
                    steps.push({ nodeCount, currentNode: u, visitedNodes: Array.from(visited), frontierNodes, visitedEdges: Array.from(visitedEdges), edges: allEdges, lineNum: 4 });
                    visited.add(v);
                    let edgeKey = [Math.min(u, v), Math.max(u, v)].join('-');
                    visitedEdges.add(edgeKey);
                    steps.push({ nodeCount, currentNode: v, visitedNodes: Array.from(visited), frontierNodes, visitedEdges: Array.from(visitedEdges), edges: allEdges, lineNum: 5 });
                });
            }
            history = steps;

        } else if (currentAlgoId === 'kruskal') {
            let mstEdges = new Set();
            let sortedEdges = [...allEdges].sort((a, b) => a.weight - b.weight);
            let parentDisjoint = Array.from({ length: nodeCount }, (_, i) => i);
            function find(i) { return parentDisjoint[i] === i ? i : (parentDisjoint[i] = find(parentDisjoint[i])); }

            let visited = new Set([0]);
            steps.push({ nodeCount, currentNode: 0, visitedNodes: Array.from(visited), frontierNodes: [], visitedEdges: [], edges: allEdges, lineNum: 1 });

            sortedEdges.forEach(edge => {
                let u = edge.u, v = edge.v;
                let rootU = find(u);
                let rootV = find(v);
                let edgeKey = [Math.min(u, v), Math.max(u, v)].join('-');

                steps.push({ nodeCount, currentNode: u, visitedNodes: Array.from(visited), frontierNodes: [u, v], visitedEdges: Array.from(mstEdges), edges: allEdges, lineNum: 5 });

                if (rootU !== rootV) {
                    parentDisjoint[rootU] = rootV;
                    mstEdges.add(edgeKey);
                    visited.add(u);
                    visited.add(v);
                    steps.push({ nodeCount, currentNode: v, visitedNodes: Array.from(visited), frontierNodes: [u, v], visitedEdges: Array.from(mstEdges), edges: allEdges, lineNum: 6 });
                    steps.push({ nodeCount, currentNode: v, visitedNodes: Array.from(visited), frontierNodes: [], visitedEdges: Array.from(mstEdges), edges: allEdges, lineNum: 7 });
                }
            });
            history = steps;

        } else {
            let inTree = new Set([0]);
            let visitedEdges = new Set();

            function getPrimFrontier(treeSet, edgesList) {
                let fSet = new Set();
                edgesList.forEach(e => {
                    let uIn = treeSet.has(e.u);
                    let vIn = treeSet.has(e.v);
                    if (uIn && !vIn) fSet.add(e.v);
                    if (!uIn && vIn) fSet.add(e.u);
                });
                return Array.from(fSet);
            }

            steps.push({ nodeCount, currentNode: 0, visitedNodes: [0], frontierNodes: [], visitedEdges: [], edges: allEdges, lineNum: 2 });
            steps.push({ nodeCount, currentNode: 0, visitedNodes: [0], frontierNodes: getPrimFrontier(inTree, allEdges), visitedEdges: [], edges: allEdges, lineNum: 3 });

            while (inTree.size < nodeCount) {
                steps.push({ nodeCount, currentNode: Array.from(inTree)[inTree.size - 1], visitedNodes: Array.from(inTree), frontierNodes: getPrimFrontier(inTree, allEdges), visitedEdges: Array.from(visitedEdges), edges: allEdges, lineNum: 4 });

                let cheapest = null;
                let cheapestEdgeKey = '';

                allEdges.forEach(edge => {
                    let uIn = inTree.has(edge.u);
                    let vIn = inTree.has(edge.v);
                    if ((uIn && !vIn) || (!uIn && vIn)) {
                        if (!cheapest || edge.weight < cheapest.weight) {
                            cheapest = edge;
                            cheapestEdgeKey = [Math.min(edge.u, edge.v), Math.max(edge.u, edge.v)].join('-');
                        }
                    }
                });

                if (!cheapest) break;
                steps.push({ nodeCount, currentNode: cheapest.u, visitedNodes: Array.from(inTree), frontierNodes: getPrimFrontier(inTree, allEdges), visitedEdges: Array.from(visitedEdges), edges: allEdges, lineNum: 5 });

                let newVertex = inTree.has(cheapest.u) ? cheapest.v : cheapest.u;
                inTree.add(newVertex);
                visitedEdges.add(cheapestEdgeKey);

                steps.push({ nodeCount, currentNode: newVertex, visitedNodes: Array.from(inTree), frontierNodes: getPrimFrontier(inTree, allEdges), visitedEdges: Array.from(visitedEdges), edges: allEdges, lineNum: 6 });
                steps.push({ nodeCount, currentNode: newVertex, visitedNodes: Array.from(inTree), frontierNodes: getPrimFrontier(inTree, allEdges), visitedEdges: Array.from(visitedEdges), edges: allEdges, lineNum: 7 });
            }
            steps.push({ nodeCount, currentNode: 0, visitedNodes: Array.from(inTree), frontierNodes: [], visitedEdges: Array.from(visitedEdges), edges: allEdges, lineNum: 8 });
            history = steps;
        }
    } else if (currentCategory === 'searching') {
        let a = [...array];
        if (currentAlgoId === 'linear') {
            history.push({ array: [...a], target: searchTarget, activeIndex: -1, status: 'ready', lineNum: 1 });
            history.push({ array: [...a], target: searchTarget, activeIndex: -1, status: 'ready', lineNum: 2 });
            let foundIndex = -1;
            for (let i = 0; i < a.length; i++) {
                history.push({ array: [...a], target: searchTarget, activeIndex: i, status: 'comparing', lineNum: 3 });
                if (a[i] === searchTarget) {
                    foundIndex = i;
                    history.push({ array: [...a], target: searchTarget, activeIndex: i, status: 'found', lineNum: 4 });
                    break;
                } else {
                    history.push({ array: [...a], target: searchTarget, activeIndex: i, status: 'missing', lineNum: 3 });
                }
            }
            if (foundIndex === -1) {
                history.push({ array: [...a], target: searchTarget, activeIndex: -1, status: 'not-found', lineNum: 5 });
            }
        } else {
            let lo = 0, hi = a.length - 1;
            history.push({ array: [...a], target: searchTarget, pointers: { lo: lo, hi: hi }, status: 'ready', lineNum: 1 });
            history.push({ array: [...a], target: searchTarget, pointers: { lo: lo, hi: hi }, status: 'init', lineNum: 2 });

            let foundIndex = -1;
            while (lo <= hi) {
                history.push({ array: [...a], target: searchTarget, pointers: { lo: lo, hi: hi }, status: 'while', lineNum: 3 });
                let mid = Math.floor((lo + hi) / 2);
                history.push({ array: [...a], target: searchTarget, pointers: { lo: lo, hi: hi, mid: mid }, status: 'mid', lineNum: 4 });
                history.push({ array: [...a], target: searchTarget, pointers: { lo: lo, hi: hi, mid: mid }, status: 'compare', lineNum: 5 });

                if (a[mid] === searchTarget) {
                    foundIndex = mid;
                    history.push({ array: [...a], target: searchTarget, pointers: { lo: lo, hi: hi, mid: mid }, status: 'found', lineNum: 6 });
                    break;
                }
                history.push({ array: [...a], target: searchTarget, pointers: { lo: lo, hi: hi, mid: mid }, status: 'check-lt', lineNum: 7 });
                if (a[mid] < searchTarget) {
                    lo = mid + 1;
                    history.push({ array: [...a], target: searchTarget, pointers: { lo: lo, hi: hi, mid: mid }, status: 'lo-inc', lineNum: 8 });
                } else {
                    history.push({ array: [...a], target: searchTarget, pointers: { lo: lo, hi: hi, mid: mid }, status: 'else', lineNum: 9 });
                    hi = mid - 1;
                    history.push({ array: [...a], target: searchTarget, pointers: { lo: lo, hi: hi, mid: mid }, status: 'hi-dec', lineNum: 10 });
                }
            }
            if (foundIndex === -1) {
                history.push({ array: [...a], target: searchTarget, pointers: { lo: lo, hi: hi }, status: 'not-found', lineNum: 11 });
            }
        }
    } else {
        // core category (Recursion)
        history = [];
        let n = parseInt(document.getElementById('sizeSlider').value) || 7;

        let nodeCounter = 0;
        let treeNodes = [];
        let edges = [];

        // 1. Pre-build the tree statically to calculate layout coordinates
        function buildTree(val, depth, x, y, offsetX) {
            let id = nodeCounter++;
            let node = { id, val, depth, x, y, state: 'pending', result: null };
            treeNodes.push(node);

            if (val <= 1) return id;

            let leftId = buildTree(val - 1, depth + 1, x - offsetX, y + 45, offsetX * 0.52);
            edges.push({ u: id, v: leftId });

            let rightId = buildTree(val - 2, depth + 1, x + offsetX, y + 45, offsetX * 0.52);
            edges.push({ u: id, v: rightId });

            return id;
        }
        buildTree(n, 0, 50, 40, 24);

        // Step 0: Initial blank state
        history.push({
            nodes: JSON.parse(JSON.stringify(treeNodes)),
            edges: edges,
            lineNum: null
        });

        // 2. Trace execution (Exactly 2 pushes per node = correct step count)
        function traceFib(nodeId) {
            let node = treeNodes.find(n => n.id === nodeId);

            node.state = 'evaluating';
            history.push({
                nodes: JSON.parse(JSON.stringify(treeNodes)),
                edges: edges,
                lineNum: 1
            });

            if (node.val <= 1) {
                node.result = node.val;
                node.state = 'returned';
                history.push({
                    nodes: JSON.parse(JSON.stringify(treeNodes)),
                    edges: edges,
                    lineNum: 3
                });
                return node.result;
            }

            node.state = 'stack';
            let leftChildId = edges.filter(e => e.u === nodeId)[0].v;
            let rightChildId = edges.filter(e => e.u === nodeId)[1].v;

            let leftRes = traceFib(leftChildId);
            let rightRes = traceFib(rightChildId);

            node.state = 'returned';
            node.result = leftRes + rightRes;
            history.push({
                nodes: JSON.parse(JSON.stringify(treeNodes)),
                edges: edges,
                lineNum: 6
            });

            return node.result;
        }

        traceFib(0);
    }
}

// ==========================================
// RENDERERS
// ==========================================
function renderCanvasFrame(stateObj, stepIdx) {
    const container = document.getElementById('visualizerBox');
    container.innerHTML = '';

    if (stateObj && stateObj.lineNum) {
        highlightCodeLine(stateObj.lineNum);
    }

    if (currentCategory === 'sorting') {
        if (!stateObj || !stateObj.array) return;
        const maxVal = Math.max(...stateObj.array, 1);
        const pointers = stateObj.pointers || {};
        const sortedIndices = stateObj.sortedIndices || [];

        stateObj.array.forEach((val, idx) => {
            const barWrapper = document.createElement('div');
            barWrapper.style.display = 'flex';
            barWrapper.style.flexDirection = 'column';
            barWrapper.style.alignItems = 'center';
            barWrapper.style.flex = '1';
            barWrapper.style.height = '100%';
            barWrapper.style.justifyContent = 'flex-end';

            const label = document.createElement('span');
            label.textContent = val;
            label.style.fontSize = '0.65rem';
            label.style.color = '#9ca3af';
            label.style.marginBottom = '6px';
            label.style.fontWeight = 'bold';
            barWrapper.appendChild(label);

            const bar = document.createElement('div');
            bar.className = 'bar';
            bar.style.width = '100%';
            const calculatedHeight = Math.max(25, Math.floor((val / maxVal) * 210));
            bar.style.height = `${calculatedHeight}px`;

            let color = '#4b5563';
            if (sortedIndices.includes(idx)) {
                color = '#059669';
            }
            if (pointers[idx]) {
                color = pointers[idx].color;
            }

            bar.style.background = color;
            bar.style.borderRadius = '4px 4px 0 0';
            if (pointers[idx]) {
                bar.style.boxShadow = `0 0 10px ${color}`;
            }
            barWrapper.appendChild(bar);

            const pointerBox = document.createElement('div');
            pointerBox.className = 'bar-pointer';
            if (pointers[idx]) {
                pointerBox.style.color = pointers[idx].color;
                pointerBox.innerHTML = `
                    <span class="arrow">▲</span>
                    <span class="label">${pointers[idx].label}</span>
                `;
            }
            barWrapper.appendChild(pointerBox);

            container.appendChild(barWrapper);
        });
    }
    else if (currentCategory === 'graph') {
        const state = stateObj || { nodeCount: 5, currentNode: 0, visitedNodes: [0], frontierNodes: [], visitedEdges: [], edges: [] };
        const n = state.nodeCount;
        const curr = state.currentNode;
        const visited = state.visitedNodes || [];
        const frontier = state.frontierNodes || [];
        const visitedEdges = state.visitedEdges || [];
        const edges = state.edges || [];

        let coords = [];
        if (n === 4) {
            coords = [{ x: 200, y: 90, id: 'A' }, { x: 320, y: 180, id: 'B' }, { x: 200, y: 270, id: 'C' }, { x: 80, y: 180, id: 'D' }];
        } else if (n === 6) {
            coords = [{ x: 200, y: 60, id: 'A' }, { x: 320, y: 120, id: 'B' }, { x: 320, y: 240, id: 'C' }, { x: 200, y: 280, id: 'D' }, { x: 80, y: 240, id: 'E' }, { x: 80, y: 120, id: 'F' }];
        } else {
            coords = [{ x: 180, y: 80, id: 'A' }, { x: 320, y: 120, id: 'B' }, { x: 250, y: 240, id: 'C' }, { x: 120, y: 180, id: 'D' }, { x: 200, y: 150, id: 'E' }];
        }

        let svgLines = '';
        edges.forEach(edge => {
            let p1 = coords[edge.u];
            let p2 = coords[edge.v];
            if (!p1 || !p2) return;

            let edgeKey = [Math.min(edge.u, edge.v), Math.max(edge.u, edge.v)].join('-');
            let isHighlighted = visitedEdges.includes(edgeKey);

            let midX = (p1.x + p2.x) / 2;
            let midY = (p1.y + p2.y) / 2;

            let dx = p2.x - p1.x;
            let dy = p2.y - p1.y;
            let len = Math.sqrt(dx * dx + dy * dy);
            let nx = -dy / len * 12;
            let ny = dx / len * 12;

            svgLines += `
                <line x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}" 
                      stroke="${isHighlighted ? '#059669' : '#374151'}" stroke-width="${isHighlighted ? '3.5' : '2'}"/>
                <text x="${midX + nx}" y="${midY + ny + 4}" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle" style="filter: drop-shadow(0px 1px 2px rgba(0,0,0,0.9));">${edge.weight}</text>
            `;
        });

        let nodesHtml = coords.map((c, idx) => {
            let statusClass = '';
            if (idx === curr) {
                statusClass = 'active';
            } else if (visited.includes(idx)) {
                statusClass = 'visited';
            } else if (frontier.includes(idx)) {
                statusClass = 'frontier';
            }
            return `
                <div style="position:absolute; top:${c.y - 18}px; left:${c.x - 18}px;" class="graph-node ${statusClass}">
                    ${c.id}
                </div>
            `;
        }).join('');

        container.innerHTML = `
<div style="position:relative; width: 600px; height: 380px; margin: 25px auto 0 auto;">
    <svg width="600" height="380" style="position:absolute; top:0; left:0;">
        ${svgLines}
    </svg>
    ${nodesHtml}
</div>
`;
    }
    else if (currentCategory === 'searching') {
        const topHeader = document.createElement('div');
        topHeader.style.display = 'flex';
        topHeader.style.flexDirection = 'column';
        topHeader.style.alignItems = 'center';
        topHeader.style.gap = '14px';
        topHeader.style.width = '100%';
        topHeader.style.height = '100%';
        topHeader.style.justifyContent = 'center';

        const targetBadge = document.createElement('div');
        targetBadge.style.background = '#1f2937';
        targetBadge.style.border = '1px solid #374151';
        targetBadge.style.borderRadius = '20px';
        targetBadge.style.padding = '4px 16px';
        targetBadge.style.fontSize = '0.85rem';
        targetBadge.style.color = '#9ca3af';
        targetBadge.innerHTML = `Target <span style="color:#38bdf8; font-weight:bold;">${stateObj ? stateObj.target : 4}</span>`;
        topHeader.appendChild(targetBadge);

        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.gap = '8px';
        row.style.alignItems = 'center';
        row.style.justifyContent = 'center';
        row.style.flexWrap = 'wrap';
        row.style.paddingTop = '10px';

        const dataArray = stateObj && stateObj.array ? stateObj.array : [];
        const activeIdx = stateObj ? stateObj.activeIndex : -1;
        const pointers = stateObj ? (stateObj.pointers || {}) : {};

        dataArray.forEach((val, idx) => {
            const pillWrapper = document.createElement('div');
            pillWrapper.style.display = 'flex';
            pillWrapper.style.flexDirection = 'column';
            pillWrapper.style.alignItems = 'center';
            pillWrapper.style.position = 'relative';

            const pill = document.createElement('div');
            pill.className = 'search-pill';
            pill.textContent = val;
            pill.style.minWidth = '44px';
            pill.style.height = '44px';
            pill.style.display = 'flex';
            pill.style.alignItems = 'center';
            pill.style.justifyContent = 'center';
            pill.style.borderRadius = '8px';
            pill.style.background = '#111827';
            pill.style.border = '1px solid #374151';
            pill.style.color = '#fff';
            pill.style.fontWeight = 'bold';
            pill.style.fontSize = '0.9rem';

            if (currentAlgoId === 'linear') {
                if (idx === activeIdx) {
                    if (stateObj.status === 'found') {
                        pill.style.background = '#059669';
                        pill.style.borderColor = '#10b981';
                        pill.style.boxShadow = '0 0 10px #10b981';
                    } else {
                        pill.style.background = '#0284c7';
                        pill.style.borderColor = '#38bdf8';
                        pill.style.boxShadow = '0 0 10px #38bdf8';
                    }
                } else if (idx < activeIdx && stateObj.status !== 'found') {
                    pill.style.color = '#6b7280';
                    pill.style.borderColor = '#1f2937';
                }
            } else {
                if (pointers.mid === idx) {
                    pill.style.background = '#0284c7';
                    pill.style.borderColor = '#38bdf8';
                    pill.style.boxShadow = '0 0 10px #38bdf8';
                }
                if (stateObj.status === 'found' && pointers.mid === idx) {
                    pill.style.background = '#059669';
                    pill.style.borderColor = '#10b981';
                    pill.style.boxShadow = '0 0 10px #10b981';
                }
            }
            pillWrapper.appendChild(pill);

            const pointerBox = document.createElement('div');
            pointerBox.style.display = 'flex';
            pointerBox.style.flexDirection = 'column';
            pointerBox.style.alignItems = 'center';
            pointerBox.style.position = 'absolute';
            pointerBox.style.bottom = '-32px';
            pointerBox.style.fontSize = '0.65rem';
            pointerBox.style.fontWeight = 'bold';

            let pointerTexts = [];
            if (pointers.lo === idx) pointerTexts.push({ label: 'lo', color: '#38bdf8' });
            if (pointers.hi === idx) pointerTexts.push({ label: 'hi', color: '#38bdf8' });
            if (pointers.mid === idx) pointerTexts.push({ label: 'mid', color: '#f59e0b' });

            if (pointerTexts.length > 0) {
                pointerBox.innerHTML = pointerTexts.map(p => `
                    <div style="color:${p.color}; display:flex; flex-direction:column; align-items:center; line-height:1;">
                        <span>▲</span>
                        <span>${p.label}</span>
                    </div>
                `).join('');
            }
            pillWrapper.appendChild(pointerBox);

            row.appendChild(pillWrapper);
        });

        topHeader.appendChild(row);
        container.appendChild(topHeader);
    } else if (currentCategory === 'core') {
        const nodes = stateObj.nodes || [];
        const edges = stateObj.edges || [];

        let svgLines = edges.map(edge => {
            let u = nodes.find(n => n.id === edge.u);
            let v = nodes.find(n => n.id === edge.v);
            let isActive = v.state !== 'pending';
            return `<line x1="${u.x}%" y1="${u.y + 15}px" x2="${v.x}%" y2="${v.y + 15}px" stroke="${isActive ? '#4b5563' : '#1f2937'}" stroke-width="2"/>`;
        }).join('');

        let nodesHtml = nodes.map(n => {
            let style = `position:absolute; top:${n.y}px; left:calc(${n.x}% - 15px); width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.75rem; font-weight:bold; z-index:2;`;

            if (n.state === 'stack') {
                style += `border: 2px dashed #a855f7; background: #111827; color: #d8b4fe;`;
            } else if (n.state === 'evaluating') {
                style += `background: #a855f7; color: white; box-shadow: 0 0 15px rgba(168, 85, 247, 0.6);`;
            } else if (n.state === 'returned') {
                style += `border: 2px solid #a855f7; background: #111827; color: #d8b4fe;`;
            } else {
                style += `border: 2px solid #1f2937; background: #111827; color: #4b5563;`;
            }

            let resultHtml = n.state === 'returned' ? `<div style="position:absolute; top:32px; color:#a855f7; font-size:0.8rem; font-weight:bold;">=${n.result}</div>` : '';

            return `
                <div style="${style}">
                    f(${n.val})
                    ${resultHtml}
                </div>
            `;
        }).join('');

        container.innerHTML = `
<div style="position:relative; width: 600px; height: 380px; margin: 25px auto 0 auto; overflow:visible;">
    <svg width="600" height="380" style="position:absolute; top:0; left:0; z-index:1;">
        ${svgLines}
    </svg>
    ${nodesHtml}
</div>
`;
    }
}

function stopAnimation() {
    isAnimating = false;
    clearTimeout(animationTimer);
    const playBtn = document.getElementById('playBtn');
    if (playBtn) playBtn.textContent = 'Play';
}

function bindDynamicButtons() {
    const sizeSlider = document.getElementById('sizeSlider');
    if (sizeSlider) {
        sizeSlider.oninput = () => {
            document.getElementById('sizeDisplay').textContent = sizeSlider.value;
            generateNewCanvasData('random');
        };
    }

    const speedSlider = document.getElementById('speedSlider');
    if (speedSlider) {
        speedSlider.min = 0;
        speedSlider.max = 5;
        speedSlider.step = 1;
        if (!speedSlider.value || speedSlider.value < 0) speedSlider.value = 1;

        const speedLabel = speedSlider.previousElementSibling || (speedSlider.parentElement && speedSlider.parentElement.querySelector('label'));

        const updateSpeedDisplay = () => {
            const idx = parseInt(speedSlider.value);
            const multiplier = speedMultipliers[idx] || 1;
            if (speedLabel) {
                speedLabel.innerHTML = `SPEED (<span id="speedDisplay">${multiplier}x</span>)`;
            }
        };

        speedSlider.oninput = updateSpeedDisplay;
        updateSpeedDisplay();
    }

    const playBtn = document.getElementById('playBtn');
    if (playBtn) {
        playBtn.onclick = () => {
            if (isAnimating) {
                stopAnimation();
                return;
            }
            isAnimating = true;
            playBtn.textContent = 'Pause';
            document.getElementById('runtimeStatus').textContent = 'RUNNING';
            document.getElementById('runtimeStatus').style.color = '#f59e0b';

            function playStep() {
                if (!isAnimating) return;
                if (currentStepIndex < history.length) {
                    renderCanvasFrame(history[currentStepIndex], currentStepIndex);
                    document.getElementById('runtimeStatus').textContent = `Step ${currentStepIndex} / ${history.length - 1}`;
                    currentStepIndex++;

                    const speedIdx = speedSlider ? parseInt(speedSlider.value) : 1;
                    const multiplier = speedMultipliers[speedIdx] || 1;
                    const baseDelay = 250;
                    const delay = Math.max(20, Math.round(baseDelay / multiplier));

                    animationTimer = setTimeout(playStep, delay);
                } else {
                    currentStepIndex = 0;
                    document.getElementById('runtimeStatus').textContent = 'COMPLETED';
                    document.getElementById('runtimeStatus').style.color = '#10b981';
                    stopAnimation();
                }
            }
            playStep();
        };
    }

    const prevBtn = document.getElementById('prevBtn');
    if (prevBtn) {
        prevBtn.onclick = () => {
            stopAnimation();
            if (currentStepIndex > 0) {
                currentStepIndex--;
                renderCanvasFrame(history[currentStepIndex], currentStepIndex);
                document.getElementById('runtimeStatus').textContent = `Step ${currentStepIndex} / ${history.length - 1}`;
            }
        };
    }

    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.onclick = () => {
            stopAnimation();
            if (currentStepIndex < history.length - 1) {
                currentStepIndex++;
                renderCanvasFrame(history[currentStepIndex], currentStepIndex);
                document.getElementById('runtimeStatus').textContent = `Step ${currentStepIndex} / ${history.length - 1}`;
            }
        };
    }

    const stepBtn = document.getElementById('stepBtn');
    if (stepBtn) {
        stepBtn.onclick = () => {
            stopAnimation();
            if (currentStepIndex < history.length - 1) {
                currentStepIndex++;
                renderCanvasFrame(history[currentStepIndex], currentStepIndex);
                document.getElementById('runtimeStatus').textContent = `Step ${currentStepIndex} / ${history.length - 1}`;
            } else {
                currentStepIndex = 0;
                renderCanvasFrame(history[0], 0);
                document.getElementById('runtimeStatus').textContent = `Step 0 / ${history.length - 1}`;
            }
        };
    }

    const randomBtn = document.getElementById('randomBtn');
    if (randomBtn) randomBtn.onclick = () => generateNewCanvasData('random');

    const bestCaseBtn = document.getElementById('bestCaseBtn');
    if (bestCaseBtn) bestCaseBtn.onclick = () => generateNewCanvasData('best');

    const worstCaseBtn = document.getElementById('worstCaseBtn');
    if (worstCaseBtn) worstCaseBtn.onclick = () => generateNewCanvasData('worst');

    const shuffleBtn = document.getElementById('shuffleBtn');
    if (shuffleBtn) shuffleBtn.onclick = () => generateNewCanvasData('random');

    const targetPresentBtn = document.getElementById('targetPresentBtn');
    if (targetPresentBtn) {
        targetPresentBtn.onclick = () => {
            searchTargetMode = 'present';
            syncSearchTargetButtons();
            updateSearchTargetSetting();
        };
    }

    const targetMissingBtn = document.getElementById('targetMissingBtn');
    if (targetMissingBtn) {
        targetMissingBtn.onclick = () => {
            searchTargetMode = 'missing';
            syncSearchTargetButtons();
            updateSearchTargetSetting();
        };
    }

    const newGraphBtn = document.getElementById('newGraphBtn');
    if (newGraphBtn) {
        newGraphBtn.onclick = () => {
            graphSeed += 1.7;
            generateNewCanvasData('random');
        };
    }

    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
        resetBtn.onclick = () => {
            stopAnimation();
            currentStepIndex = 0;
            renderCanvasFrame(history[0], 0);
            document.getElementById('runtimeStatus').textContent = `Step 0 / ${history.length - 1}`;
            document.getElementById('runtimeStatus').style.color = '#34d399';
        };
    }

    const applyCustomBtn = document.getElementById('applyCustomBtn');
    if (applyCustomBtn) {
        applyCustomBtn.onclick = () => {
            stopAnimation();
            const inputVal = document.getElementById('customArrayInput').value;
            const parsed = inputVal.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
            if (parsed.length > 0 && parsed.length <= 25) {
                array = parsed;
                fetchBackendHistory().then(() => {
                    currentStepIndex = 0;
                    renderCanvasFrame(history[0], 0);
                    document.getElementById('runtimeStatus').textContent = `Step 0 / ${history.length - 1}`;
                    document.getElementById('runtimeStatus').style.color = '#34d399';
                });
            } else {
                alert("Please enter between 1 and 25 valid numbers separated by commas.");
            }
        };
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const globalSearchInput = document.getElementById('globalSearchInput');
    if (globalSearchInput) {
        globalSearchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (!query) return;

            for (const [catKey, catVal] of Object.entries(categoriesData)) {
                const found = catVal.algorithms.find(a => a.name.toLowerCase().includes(query));
                if (found) {
                    showCategory(catKey);
                    loadVisualizer(catKey, found.id);
                    break;
                }
            }
        });
    }

    showPage('hub');
});