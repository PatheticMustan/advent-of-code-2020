function solve(input) {
    const countOccurances = (str, thing) => str.split(thing).length - 1;
    
    let groups = input
            .split("\n\n");
    
    // we have the amount of people, and their letters
    const people = groups.map(v => countOccurances(v, "\n") + 1);
    // remove newlines and possible dupes
    groups = groups.map(v => v.replaceAll("\n", ""));
    
    const count = [];
    
    // count all the possible questions
    for (let i=0; i<groups.length; i++) {
        const uniqueLetters = Array.from(new Set(groups[i]));

        count[i] = uniqueLetters
            .map(l => +(countOccurances(groups[i], l) === people[i]))
            .reduce((a, b) => a + b, 0);
    }

    return count.reduce((a, b) => a + b, 0);
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
