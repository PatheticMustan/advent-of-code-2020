function solve(input) {
    const [one, two] = input.split("\n\n");
    
    let oneCards = one.split("\n").slice(1).map(Number);
    let twoCards = two.split("\n").slice(1).map(Number);
    
    while (oneCards.length && twoCards.length) {
        const of = oneCards.shift();
        const tf = twoCards.shift();
        
        if (of > tf) {
            oneCards.push(of);
            oneCards.push(tf);
        } else {
            twoCards.push(tf);
            twoCards.push(of);
        }
        
    }

    return [...oneCards, ...twoCards].reverse().map((v, i) => v * (i+1)).reduce((a, b) => a + b, 0)
}

console.log(solve(`Player 1:
9
2
6
3
1

Player 2:
5
8
4
7
10`));
