const enemyAttackinside = document.getElementById("enemyAttackBorderInside");
const canva = document.getElementById("canva");
const attackArea = document.getElementById("attackArea");
attackArea.style.backgroundRepeat = "no-repeat";

const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");
const value3 = document.getElementById("value3");
const value4 = document.getElementById("value4");
const value5 = document.getElementById("value5");
const value6 = document.getElementById("value6");
const operator1 = document.getElementById("operator1");
const operator2 = document.getElementById("operator2");
const operator3 = document.getElementById("operator3");

value1.value = Math.floor(Math.random() * (100 - 1 + 1) + 1);
value2.value = Math.floor(Math.random() * (100 - 1 + 1) + 1);
value3.value = Math.floor(Math.random() * (100 - 1 + 1) + 1);
value4.value = Math.floor(Math.random() * (100 - 1 + 1) + 1);
value5.value = Math.floor(Math.random() * (100 - 1 + 1) + 1);
value6.value = Math.floor(Math.random() * (100 - 1 + 1) + 1);

let a = Math.floor(Math.random() * (3 - 1 + 1) + 1);
if (a === 1) {
  operator1.value = "+";
}
if (a === 2) {
  operator1.value = "-";
}
if (a === 3) {
  operator1.value = "*";
}

a = Math.floor(Math.random() * (3 - 1 + 1) + 1);
if (a === 1) {
  operator2.value = "+";
}
if (a === 2) {
  operator2.value = "-";
}
if (a === 3) {
  operator2.value = "*";
}

a = Math.floor(Math.random() * (3 - 1 + 1) + 1);
if (a === 1) {
  operator3.value = "+";
}
if (a === 2) {
  operator3.value = "-";
}
if (a === 3) {
  operator3.value = "*";
}

const sergioAttack = document.getElementById("SergioAttack");
const barretoAttack = document.getElementById("BarretoAttack");
const zacariasAttack = document.getElementById("ZacariasAttack");

sergioAttack.addEventListener("click", () => {
  const res = document.getElementById("SergioRes");
  let certo = false;
  switch (operator1.value) {
    case "+":
      if (parseInt(value1.value) + parseInt(value2.value) == res.value) {
        certo = true;
        console.log("aa");
      }
      break;
    case "-":
      if (parseInt(value1.value) - parseInt(value2.value) == res.value) {
        certo = true;
      }
      break;
    case "*":
      if (parseInt(value1.value) * parseInt(value2.value) == res.value) {
        certo = true;
      }
      break;
  }
  if (certo) {
    const Char = document.getElementById("Sergio");
    Char.style.backgroundImage = "url('./jogo/figure1 ATTACK.gif')";
    Char.style.backgroundRepeat = "no-repeat";
    Char.style.backgroundSize = "100%";
    Char.style.width = "100vh";
    Char.style.height = "50vh";
    Char.style.top = "0px";
    setTimeout(() => {
      Char.style.backgroundImage = "url('./jogo/Fig1IDLE.gif')";
      Char.style.width = "10vh";
      Char.style.top = "39vh";
      Char.style.height = "10vh";
      const doog = document.getElementById("Doog-hp");
      const a = doog.style.width.replace("%", "");
      doog.style.width = a - 10 + "%";
    }, 5000);
  } else {
    const life = document.getElementById("Sergio-hp");
    const a = life.style.width.replace("%", "");
    life.style.width = a - 25 + "%";
    if (life.style.width === "0%") {
        const Char = document.getElementById("Sergio");
        Char.style.backgroundImage = "url('./jogo/figure1 DEAD.gif')";
        Char.style.backgroundRepeat = "no-repeat";
        Char.style.backgroundSize = "100%";
        charactersInfo[0].status = "dead";
        sergioAttack.disabled = true;
        document.getElementById("SergioRes").disabled = true;
      }
  }
  value1.value = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  value2.value = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  res.value = "";
  let a = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  if (a === 1) {
    operator1.value = "+";
  }
  if (a === 2) {
    operator1.value = "-";
  }
  if (a === 3) {
    operator1.value = "*";
  }
});

barretoAttack.addEventListener("click", () => {
  const res = document.getElementById("BarretoRes");
  let certo = false;
  switch (operator2.value) {
    case "+":
      if (parseInt(value3.value) + parseInt(value4.value) == res.value) {
        certo = true;
      }
      break;
    case "-":
      if (parseInt(value3.value) - parseInt(value4.value) == res.value) {
        certo = true;
      }
      break;
    case "*":
      if (parseInt(value3.value) * parseInt(value4.value) == res.value) {
        certo = true;
      }
      break;
  }
  if (certo) {
    const Char = document.getElementById("Barreto");
    Char.style.backgroundImage = "url('./jogo/figure2 ATTACK.gif')";
    Char.style.backgroundRepeat = "no-repeat";
    Char.style.backgroundSize = "100%";
    Char.style.width = "70vh";
    Char.style.height = "100vh";
    Char.style.top = "0px";
    setTimeout(() => {
      Char.style.backgroundImage = "url('./jogo/Fig2IDLE.gif')";
      Char.style.width = "10vh";
      Char.style.top = "53vh";
      Char.style.height = "10vh";
      const doog = document.getElementById("Doog-hp");
      const a = doog.style.width.replace("%", "");
      doog.style.width = a - 10 + "%";
    }, 4000);
  } else {
    const life = document.getElementById("Barreto-hp");
    const a = life.style.width.replace("%", "");
    life.style.width = a - 25 + "%";
    if (life.style.width === "0%") {
        const Char = document.getElementById("Barreto");
        Char.style.backgroundImage = "url('./jogo/figure2 DEAD.gif')";
        Char.style.backgroundRepeat = "no-repeat";
        Char.style.backgroundSize = "100%";
        charactersInfo[1].status = "dead";
        barretoAttack.disabled = true;
        document.getElementById("BarretoRes").disabled = true;
      }
  }
  value3.value = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  value4.value = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  res.value = "";
  let a = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  if (a === 1) {
    operator2.value = "+";
  }
  if (a === 2) {
    operator2.value = "-";
  }
  if (a === 3) {
    operator2.value = "*";
  }
});

setInterval(() => {
    if(barretoAttack.disabled && zacariasAttack.disabled && sergioAttack.disabled) {
        alert("Voce Perdeu!");
    }else if(document.getElementById("Doog-hp").style.width === "0%") {
        alert("Voce Ganhou!");
    }
},1000);

zacariasAttack.addEventListener("click", () => {
  const res = document.getElementById("ZacariasRes");
  let certo = false;
  switch (operator3.value) {
    case "+":
      if (parseInt(value5.value) + parseInt(value6.value) == res.value) {
        certo = true;
        console.log("aa");
      }
      break;
    case "-":
      if (parseInt(value5.value) - parseInt(value6.value) == res.value) {
        certo = true;
      }
      break;
    case "*":
      if (parseInt(value5.value) * parseInt(value6.value) == res.value) {
        certo = true;
      }
      break;
  }
  if (certo) {
    const Char = document.getElementById("Zacarias");
    Char.style.backgroundImage = "url('./jogo/figure3 HEAL.gif')";
    Char.style.backgroundRepeat = "no-repeat";
    Char.style.backgroundSize = "100%";
    Char.style.width = "20vh";
    Char.style.height = "100vh";
    Char.style.top = "22vh";
    setTimeout(() => {
      Char.style.backgroundImage = "url('./jogo/Fig3IDLE.gif')";
      Char.style.width = "10vh";
      Char.style.top = "68vh";
      Char.style.height = "10vh";
      const sergio = document.getElementById("Sergio-hp");
      const a = sergio.style.width.replace("%", "");
      if (sergio.style.width !== "0%") {
        sergio.style.width = parseInt(a) + 15 + "%";
      }

      const barreto = document.getElementById("Barreto-hp");
      const b = barreto.style.width.replace("%", "");
      if (barreto.style.width !== "0%") {
        barreto.style.width = parseInt(b) + 15 + "%";
      }

      const zacarias = document.getElementById("Zacarias-hp");
      const c = zacarias.style.width.replace("%", "");
      if (zacarias.style.width !== "0%") {
        zacarias.style.width = parseInt(c) + 15 + "%";
      }
    }, 3300);
  } else {
    const life = document.getElementById("Zacarias-hp");
    const a = life.style.width.replace("%", "");
    life.style.width = a - 25 + "%";
    if (life.style.width === "0%") {
        const Char = document.getElementById("Zacarias");
        Char.style.backgroundImage = "url('./jogo/figure3 DEAD.gif')";
        Char.style.backgroundRepeat = "no-repeat";
        Char.style.backgroundSize = "100%";
        charactersInfo[2].status = "dead";
        zacariasAttack.disabled = true;
        document.getElementById("ZacariasRes").disabled = true;
      }
  }
  value5.value = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  value6.value = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  res.value = "";
  let a = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  if (a === 1) {
    operator3.value = "+";
  }
  if (a === 2) {
    operator3.value = "-";
  }
  if (a === 3) {
    operator3.value = "*";
  }
});

let charactersInfo = [
  {
    name: "Sergio",
    hp: 100,
    damage: 30,
    top: "39vh",
    idle: "./jogo/Fig1IDLE.gif",
    status: "alive",
  },
  {
    name: "Barreto",
    hp: 100,
    damage: 30,
    top: "53vh",
    idle: "./jogo/Fig2IDLE.gif",
    status: "alive",
  },
  {
    name: "Zacarias",
    hp: 100,
    heal: 15,
    top: "68vh",
    idle: "./jogo/fig3IDLE.gif",
    status: "alive",
  },
];

let enemyInfo = [
  {
    name: "Doog",
    hp: 300,
    damage: 30,
    idle: "./jogo/enemyIDLE.png",
    status: "alive",
  },
];
let enemies = [];
let characters = [];

charactersInfo.forEach((char) => {
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
  lifeBar.setAttribute("id", `${char.name}-hp`);
  lifeBar.style.width = "100%";
  lifeBar.setAttribute("class", `lifeBar`);
  lifeBorder.appendChild(lifeBar);
  lifeBorder.setAttribute("class", "lifeBorder");
  create.appendChild(lifeBorder);

  canva.appendChild(create);
  characters.push(create);
});

enemyInfo.forEach((enemy) => {
  let create = document.createElement("div");
  let lifeBorder = document.createElement("div");
  let lifeBar = document.createElement("div");
  create.setAttribute("id", enemy.name);
  create.setAttribute("class", "enemy");
  create.style.left = "70vw";
  create.style.top = "53vh";
  create.style.backgroundImage = "url(" + enemy.idle + ")";
  lifeBar.setAttribute("id", `${enemy.name}-hp`);
  lifeBar.style.width = "100%";
  lifeBar.setAttribute("class", `lifeBar`);
  lifeBorder.appendChild(lifeBar);
  lifeBorder.setAttribute("class", "lifeBorder");
  create.appendChild(lifeBorder);

  canva.appendChild(create);
});

function damage(value) {
  if (value === 1) {
    const life = document.getElementById("Sergio-hp");
    const a = life.style.width.replace("%", "");
    life.style.width = a - 25 + "%";
    if (life.style.width === "0%") {
      const Char = document.getElementById("Sergio");
      Char.style.backgroundImage = "url('./jogo/figure1 DEAD.gif')";
      Char.style.backgroundRepeat = "no-repeat";
      Char.style.backgroundSize = "100%";
      charactersInfo[0].status = "dead";
      sergioAttack.disabled = true;
      document.getElementById("SergioRes").disabled = true;
    }
  }
  if (value === 2) {
    const life = document.getElementById("Barreto-hp");
    const a = life.style.width.replace("%", "");
    life.style.width = a - 25 + "%";
    if (life.style.width === "0%") {
      const Char = document.getElementById("Barreto");
      Char.style.backgroundImage = "url('./jogo/figure2 DEAD.gif')";
      Char.style.backgroundRepeat = "no-repeat";
      Char.style.backgroundSize = "100%";
      charactersInfo[1].status = "dead";
      barretoAttack.disabled = true;
      document.getElementById("BarretoRes").disabled = true;
    }
  }
  if (value === 3) {
    const life = document.getElementById("Zacarias-hp");
    const a = life.style.width.replace("%", "");
    life.style.width = a - 25 + "%";
    if (life.style.width === "0%") {
      const Char = document.getElementById("Zacarias");
      Char.style.backgroundImage = "url('./jogo/figure3 DEAD.gif')";
      Char.style.backgroundRepeat = "no-repeat";
      Char.style.backgroundSize = "100%";
      charactersInfo[2].status = "dead";
      zacariasAttack.disabled = true;
      document.getElementById("ZacariasRes").disabled = true;
    }
  }
}

function enemyAttackFunc() {
  const a = enemyAttackinside.style.width.replace("%", "");
  enemyAttackinside.style.width = parseInt(a) + 2 + "%";
  console.log(enemyAttackinside.style.width);
  if (enemyAttackinside.style.width === "100%") {
    clearInterval(intervalAttack);
    const enemy = document.getElementById("Doog");
    enemy.style.backgroundImage = "";
    enemy.style.backgroundRepeat = "no-repeat";
    attackArea.style.backgroundImage = "url('./jogo/enemy ATTACK.gif')";

    setTimeout(() => {
      enemyAttackinside.style.width = "0%";
      attackArea.style.backgroundImage = "";
      enemy.style.backgroundImage = "url('./jogo/enemyIDLE.png')";
      let value = Math.floor(Math.random() * (3 - 1 + 1) + 1);
      if (value === 1 && charactersInfo[0].status === "dead") {
        value = 2;
      } else if (value === 2 && charactersInfo[1].status === "dead") {
        value = 3;
      } else if (value === 3 && charactersInfo[2].status === "dead") {
        value = 1;
      }
      damage(value);
      intervalAttack = setInterval(enemyAttackFunc, 100);
    }, 6000);
  }
}

var intervalAttack = setInterval(enemyAttackFunc, 100);
