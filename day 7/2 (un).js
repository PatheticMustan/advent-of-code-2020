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

        return subBagString.map(sb => {
            return {
                name: extractSubBagName(sb),
                count: extractNumberOfBags(sb),
                children: expand(getBag(extractSubBagName(sb)))
            }
        });
    }

    const bagCount = expand(goldenBag);

    const sum = (...args) => args.reduce((a, b) => +a + +b, 0);

    // root is bo, count is always Number, children is either bo[] or Number
    // bagCount: bo = {
    //     count: Number,
    //     children: Number || bo[]
    // }
    // 
    // to process, sum children and multiply sum by count
    // first all children must be reduced to Number's.

    const processBagObject = bagCollection => {
        return bagCollection.map(bagObject => {
            console.log(bagObject);
            if (typeof bagObject.children === "number") {
                return bagObject.children;
            }

            if (bagObject.children.every(child => child instanceof Array)) {
                return sum(bagObject.children);
            }
            
            const count = (c, h) => c * (1 + h);

            return sum(bagObject.children.map(sub => {
                const count = sub.count;
                const subBag = processBagObject(bagObject.children);

                return count*(1+sum(subBag));
            }));
        })
    }
    
    console.log(bagCount);
    return processBagObject(bagCount);
}

solve(`shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.`)
//console.log(solve(document.getElementsByTagName("pre")[0].textContent));
