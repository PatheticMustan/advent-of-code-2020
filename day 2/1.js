function solve(input) {
    const entries = input.split("\n");
    let validEntries = 0;

    for (const entry of entries) {
        const min = entry.split(": ")[0].split("-")[0];
        const max = entry.split(": ")[0].split("-")[1].split(" ")[0];
        const letter = entry.split(": ")[0].split(" ")[1];
        const password = entry.split(": ")[1];

        const occurances = password.split(letter).length - 1;
        if (occurances >= min && occurances <= max) {
            validEntries++;
        }
    }

    return validEntries;
}

console.log(solve(`1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`));
