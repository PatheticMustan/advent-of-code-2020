function solve(input) {
    const passports = input.split("\n\n").map(v => v.replaceAll("\n", " ").split(" "));
    const req = "byr iyr eyr hgt hcl ecl pid".split(" ");
    let valid = 0;
    
    passports.map(passport => {
        const fields = passport.map(v => v.split(":")[0]);

        if (req.every(field => fields.includes(field))) valid++;
    });

    return valid;
}

console.log(solve(`ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`))
