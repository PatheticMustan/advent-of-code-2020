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
    
    for (let i=0; i<op.length; i++) {
        acc = 0;
        pon = 0;
        run = {};
        
        while (!run[pon]) {
            // if we hit a dupe instructions, we're in an infinite loop
            // if the program terminates, return the acc
            if (pon === op.length) {
                console.log("finished", acc);
                return acc;
            }

            const [r, m] = op[pon].split(" ");

            run[pon] = true;

            // swap the operations
            if (i === pon && r !== "acc") {
                operations[r === "jmp"? "nop" : "jmp"](parseInt(m));
            } else {
                operations[r](parseInt(m));
            }

            console.log(`${pon}/${op.length}: ${acc}`);
        }

        console.log("infinite loop", acc);
    }
}

console.log(solve(document.getElementsByTagName("pre")[0].textContent));
