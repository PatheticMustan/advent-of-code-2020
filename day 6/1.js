function solve(input) {
    const groups = input
            .split("\n\n")
            .map(v => v.replaceAll("\n", ""));
    
    return groups
            .map(group => new Set(group).size)
            .reduce((a, b) => a + b, 0)
}

console.log(solve(`abc

a
b
c

ab
ac

a
a
a
a

b`))
