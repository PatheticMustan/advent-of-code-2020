function solve(input, limit, steps) {
    const parsed = input.split("\n").map(Number);

    for (let i=0; i<parsed.length; i++) {
        const num1 = parsed[i];
        const rem = 2020 - num1;
        const everythingButNum1 = parsed.slice(0, i).concat(parsed.slice(i+1))
        
        for (const num2 of everythingButNum1) {
            if (everythingButNum1.includes(rem - num2)) {
                return num1 * num2 * (rem-num2);
            }
        }
    }
}

console.log(solve(`1721
979
366
299
675
1456`, 2020, 1));
