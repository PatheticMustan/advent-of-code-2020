function solve(input) {
    const bags = input.split("\n");
    const goldenBag = bags.splice(bags.find(bag => bag.startsWith("shiny gold bags")), 1)[0]
    


    const extractSubBags = bagString => bagString
                        .replaceAll(".", "")
                        .split("contain ")[1]
                        .split(", ");

    const getBag = bagName => bags.find(bag => bag.startsWith(bagName));
    const extractNumberOfBags = bagName => (bagName !== "no other bags")? +bagName.split(" ")[0] : 1;
    const extractSubBagName = bagName => bagName.split(" ").splice(1).join(" ");
    
    const expand = bagString => {
        const subBagString = extractSubBags(bagString);

        if (subBagString[0] === "no other bags") return 1;

        return subBagString.map(sb => [extractNumberOfBags(sb), expand(getBag(extractSubBagName(sb)))]);
    }

    let pancake = expand(goldenBag);

    while (!pancake.every(v => typeof v === "number")) {
        pancake = pancake.flat();
    }

    return pancake.reduce((a, b) => a * b, 1);
}

console.log(solve(`shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.`));
