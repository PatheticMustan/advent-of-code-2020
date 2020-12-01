function solve(input) {
    const parsed = input.split("\n").map(Number);

    for (const num of parsed) {
        if (parsed.includes(2020 - num)) {
            return num * (2020-num);
        }
    }
}

console.log(solve(`1721
979
366
299
675
1456`));
