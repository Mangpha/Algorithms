const fs = require("fs");
const root = "./";
const exclude = [".git", "README.md", "UpdateReadme.js", ".github"];
const folders = fs.readdirSync(root).filter((name) => !exclude.includes(name));
const lanDict = {
    js: "JavaScript",
    py: "Python",
};
const sites = {
    백준: "https://www.acmicpc.net/problem/",
    프로그래머스: "https://school.programmers.co.kr/learn/courses/30/lessons/",
};
let markdown = `## BackJoon

Algorithm Study

[Mangpha](https://www.acmicpc.net/user/mangpha)

Ctrl + F로 문제 검색

## Solved

`;

folders.forEach((folder) => {
    const DifficultyLevels = fs.readdirSync(root + folder);
    markdown += `### ${folder}
    
| Level | Prob ID | Title(Link) | Code | Language |
|:-----:|:-------:|:-----------:|:----:|:---------|
`;
    DifficultyLevels.forEach((level) => {
        const Probs = fs.readdirSync(`${root}/${folder}/${level}`);
        Probs.forEach((prob) => {
            const [id, title] = prob.split(/\.\s/);
            const filename = fs
                .readdirSync(`${root}/${folder}/${level}/${prob}`)
                .filter((name) => !exclude.includes(name));
            filename.forEach((file) => {
                const language = file.split(".")[1];
                markdown += `| ${level} | ${id} | [${title}](${
                    sites[folder] + id
                }) | [Code](https://github.com/Mangpha/Algorithms/tree/master/${folder}/${level}/${prob}/${file} | ${
                    lanDict[language]
                }
    `;
            });
        });
    });

    markdown += `
---
    
`;
});

fs.writeFileSync("./README.md", markdown);
