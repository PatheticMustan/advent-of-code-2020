function solve(input) {
    const rows = input.split("\n").slice(1);

    let pos = 0;
    let treesHit = 0;
    
    rows.map(row => {
        pos = (pos + 3) % row.length;
        if (row[pos] === "#") treesHit++;
    });

    return treesHit;
}

console.log(solve(`..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`));
