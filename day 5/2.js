function solve(input) {
    const passes = input.split("\n");
    
    let seatsFilled = new Array(127*8+7).fill(" ");

    for (const pass of passes) {
        const row = +("0b" + pass.slice(0, pass.length-3).replaceAll("F", 0).replaceAll("B", 1));
        const column = +("0b" + pass.slice(-3).replaceAll("R", 1).replaceAll("L", 0));
        const seatID = (row * 8) + column;
        
        seatsFilled[seatID] = "F";
    }

    return seatsFilled.indexOf(" ", seatsFilled.indexOf("F"));
}

console.log(solve(`BFBBBFBLRR`));
