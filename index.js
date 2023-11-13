const enemyAttackinside = document.getElementById("enemyAttackBorderInside");
const canva = document.getElementById("canva");
const sergioDamage = document.getElementById("SergioDamage")
const attackArea = document.getElementById("attackArea");
attackArea.style.backgroundRepeat = "no-repeat"

sergioDamage.addEventListener("click", () => {
    const life = document.getElementById("Sergio-hp")
    const a = life.style.width.replace("%", "");
    life.style.width = (a - 25) + "%";
    if (life.style.width === "0%") {
        const Char = document.getElementById("Sergio")
        Char.style.backgroundImage = "url('./jogo/figure1 DEAD.gif')";
        Char.style.backgroundRepeat = "no-repeat";
        Char.style.backgroundSize = "100%";
    }
})
let charactersInfo = [
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


let enemyInfo = [
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
    let lifeBorder = document.createElement("div");
    let lifeBar = document.createElement("div");
    create.setAttribute("id", char.name);
    create.setAttribute("class", "characters");
    create.style.left = "20vw";
    create.style.top = char.top;
    create.style.backgroundImage = "url(" + char.idle + ")";
    create.style.backgroundRepeat = "no-repeat";
    create.style.backgroundSize = "100%";
    lifeBar.setAttribute("id", `${char.name}-hp`)
    lifeBar.style.width = "100%"
    lifeBar.setAttribute("class", `lifeBar`)
    lifeBorder.appendChild(lifeBar)
    lifeBorder.setAttribute("class", "lifeBorder");
    create.appendChild(lifeBorder);

    canva.appendChild(create);
    characters.push(create);
});

enemyInfo.forEach(enemy => {
    let create = document.createElement("div");
    let lifeBorder = document.createElement("div");
    let lifeBar = document.createElement("div");
    create.setAttribute("id", enemy.name);
    create.setAttribute("class", "enemy");
    create.style.left = "70vw";
    create.style.top = "53vh";
    create.style.backgroundImage = "url(" + enemy.idle + ")";
    lifeBar.setAttribute("id", `${enemy.name}-hp`)
    lifeBar.setAttribute("class", `lifeBar`)
    lifeBorder.appendChild(lifeBar)
    lifeBorder.setAttribute("class", "lifeBorder");
    create.appendChild(lifeBorder);

    canva.appendChild(create);
});
function enemyAttackFunc() {
    const a = enemyAttackinside.style.width.replace("%", "");
    enemyAttackinside.style.width = (parseInt(a) + 2) + "%";
    console.log(enemyAttackinside.style.width);
    if (enemyAttackinside.style.width === "100%") {
        clearInterval(intervalAttack);
        const enemy = document.getElementById("Doog");
        enemy.style.backgroundImage = "";
        enemy.style.backgroundRepeat = "no-repeat";
        attackArea.style.backgroundImage = "url('./jogo/enemy ATTACK.gif')"
        setTimeout(() => {
            enemyAttackinside.style.width = "0%";
            attackArea.style.backgroundImage = "";
            enemy.style.backgroundImage = "url('./jogo/enemyIDLE.png')";
            intervalAttack = setInterval(enemyAttackFunc, 100);
        }, 6000)
    }
}



var intervalAttack = setInterval(enemyAttackFunc, 100)
