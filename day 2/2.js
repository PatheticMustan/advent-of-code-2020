function solve(input) {
    const entries = input.split("\n");
    let validEntries = 0;

    for (const entry of entries) {
        const first = entry.split(": ")[0].split("-")[0];
        const second = entry.split(": ")[0].split("-")[1].split(" ")[0];
        const letter = entry.split(": ")[0].split(" ")[1];
        const password = entry.split(": ")[1];

        if ((password[first-1] === letter) + (password[second-1] === letter) === 1) {
            validEntries++;
        }
    }

    return validEntries;
}

console.log(solve(`1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`));
