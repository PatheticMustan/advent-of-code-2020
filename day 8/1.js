function solve(input) {
    const op = input.split("\n");
    let acc = 0;
    let pon = 0;
    let run = {};

    const operations = {
        nop: _ => {pon++;},
        acc: n => {acc+=n; pon++;},
        jmp: n => {pon+=n;}
    }

    // you'll never escape
    while (true) {
        if (run[pon]) return acc;
        const [r, m] = op[pon].split(" ");

        run[pon] = true;
        // do the operation
        operations[r](parseInt(m));
    }
}

console.log(solve(`nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`))
