function solve(input) {
    const passes = input.split("\n");
    
    let highest = 0;

    for (const pass of passes) {
        const row = +("0b" + pass.slice(0, pass.length-3).replaceAll("F", 0).replaceAll("B", 1));
        const column = +("0b" + pass.slice(-3).replaceAll("R", 1).replaceAll("L", 0));
        const seatID = (row * 8) + column;
        
        if (seatID > highest) {
            highest = seatID;
        }
    }

    return highest;
}

console.log(solve(`BFBBBFBLRR`));
