
const tickets = [  ["Paris", "Skopje"],
["Zurich", "Amsterdam"],
["Prague", "Zurich"],
["Barcelona", "Berlin"],
["Kiev", "Prague"],
["Skopje", "Paris"],
["Amsterdam", "Barcelona"],
["Berlin", "Kiev"],
["Berlin", "Amsterdam"]
];

const cities = Array.from(new Set(tickets.flat()));
const graph = new Map<string, string[]>();
for (const city of cities) {
graph.set(city, []);
}
for (const [from, to] of tickets) {
graph.get(from)?.push(to);
}

const route: string[] = [];
const visited = new Set<string>();

function dfs(city: string) {
route.push(city);
visited.add(city);

for (const nextCity of graph.get(city) || []) {
  if (!visited.has(nextCity)) {
    dfs(nextCity);
  }
}
}

dfs("Kiev");
console.log(route);
