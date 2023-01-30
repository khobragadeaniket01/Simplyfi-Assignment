var _a;
var tickets = [["Paris", "Skopje"],
    ["Zurich", "Amsterdam"],
    ["Prague", "Zurich"],
    ["Barcelona", "Berlin"],
    ["Kiev", "Prague"],
    ["Skopje", "Paris"],
    ["Amsterdam", "Barcelona"],
    ["Berlin", "Kiev"],
    ["Berlin", "Amsterdam"]
];
var cities = Array.from(new Set(tickets.flat()));
var graph = new Map();
for (var _i = 0, cities_1 = cities; _i < cities_1.length; _i++) {
    var city = cities_1[_i];
    graph.set(city, []);
}
for (var _b = 0, tickets_1 = tickets; _b < tickets_1.length; _b++) {
    var _c = tickets_1[_b], from = _c[0], to = _c[1];
    (_a = graph.get(from)) === null || _a === void 0 ? void 0 : _a.push(to);
}
var route = [];
var visited = new Set();
function dfs(city) {
    route.push(city);
    visited.add(city);
    for (var _i = 0, _a = graph.get(city) || []; _i < _a.length; _i++) {
        var nextCity = _a[_i];
        if (!visited.has(nextCity)) {
            dfs(nextCity);
        }
    }
}
dfs("Kiev");
console.log(route);
