function solve(input) {
    const rows = input.split("\n");
    const slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];
  
    
    const treeSlopes = slopes.map(slope => {
        let treesHit = 0;
        let pos = 0;

        for (let i=0; i<rows.length;) {
            i += slope[1];
            if (i >= rows.length) break;
            pos = (pos + slope[0]) % rows[i].length;
            if (rows[i][pos] === "#") treesHit++;
        };

        return treesHit;
    });
    

    return treeSlopes.reduce((a, b) => a * b, 1);
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
.#..#...#.#`))
