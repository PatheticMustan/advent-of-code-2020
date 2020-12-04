function solve(input) {
    const passports = input.split("\n\n").map(
        v => v.replaceAll("\n", " ").split(" ")
    );
    
    const req = {
        byr: i => (i.length === 4) && (+i >= 1920) && (+i <= 2002),
        iyr: i => (i.length === 4) && (+i >= 2010) && (+i <= 2020),
        eyr: i => (i.length === 4) && (+i >= 2020) && (+i <= 2030),
        hgt: i => {
            const inc = i.indexOf("in") !== -1;
            const cmc = i.indexOf("cm") !== -1;

            if (inc || cmc) {
                const num = i.slice(0, i.length-2);
                
                return inc?
                    (+num >= 59) && (+num <= 76) :
                    (+num >= 150) && (+num <= 193);
            } else {
                return false;
            }
        },
        hcl: i => i.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/),
        ecl: i => "amb blu brn gry grn hzl oth".split(" ").includes(i),
        pid: i => Number.isFinite(+i) && i.length === 9
    }
    let valid = 0;
    
    for (let i=0; i<passports.length; i++) {
        const fields = passports[i].map(v => v.split(":")[0]);

        if (Object.keys(req).every(field => fields.includes(field))) {
            if (Object.keys(req).every(ifi => 
                req[ifi](passports[i][fields.indexOf(ifi)].split(":")[1])
            )) {
                valid++;
            }
        }
    };

    return valid;
}

console.log(solve(`pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
hcl:#623a2f

eyr:2029 ecl:blu cid:129 byr:1989
iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm

hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022

iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719`));
