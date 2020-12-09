function solve(input, bagsContainingPeeBag) {
    const bags = input.split("\n");  
    
    const newPeeBags = bags.filter((bag, i) => {
        if (bagsContainingPeeBag.some(peeBag => bag.indexOf(peeBag) > 0)) {
            bags.splice(i, 1);
            return true;
        }
        return false;
    }).map(bag => bag.split("s contain")[0]);
    
    if (newPeeBags.length) {
        return solve(bags.join("\n"), [...newPeeBags, ...bagsContainingPeeBag]);
    }

    return bagsContainingPeeBag.length - 1;
}

console.log(solve(`light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`, ["shiny gold bag"]));
