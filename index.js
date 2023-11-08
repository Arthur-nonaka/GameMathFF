const canva = document.getElementById("canva");
const charactersInfo = [
    {
        name: "Sergio",
        hp: 100,
        damage: 30,
        top: "39vh",
        idle: './jogo/Fig1IDLE.gif',
    },
    {
        name: "Barreto",
        hp: 100,
        damage: 30,
        top: "53vh",
        idle: './jogo/Fig2IDLE.gif',
    },
    {
        name: "Zacarias",
        hp: 100,
        heal: 15,
        top: "68vh",
        idle: './jogo/fig3IDLE.gif',
    }
];


const enemyInfo = [
    {
        name: "Doog",
        hp: 300,
        damage: 30,
        idle: './jogo/enemyIDLE.png',
    }
]
let enemies = [];
let characters = [];

charactersInfo.forEach(char => {
    let create = document.createElement("div");
    create.setAttribute("id", char.name);
    create.setAttribute("class", "characters");
    create.style.left = "20vw";
    create.style.top = char.top;
    create.style.backgroundImage = "url(" + char.idle + ")";
    create.style.backgroundRepeat = "no-repeat";
    create.style.backgroundSize = "100%";
    canva.appendChild(create);
    characters.push(create);
});

enemyInfo.forEach(enemy => {
    let create = document.createElement("div")
    create.setAttribute("id", enemy.name);
    create.setAttribute("class", "enemy");
    create.style.left = "70vw";
    create.style.top = "53vh";
    create.style.backgroundImage = "url(" + enemy.idle + ")";
    canva.appendChild(create);
    enemies.push(create);
});

console.log(characters);
