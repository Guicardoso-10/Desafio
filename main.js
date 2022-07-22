
const readline = require("readline-sync") 
const level = readline.question ('Escolha o nivel (1, 2 ou 3):')
let random = Math.random()
let score = 0
score = 0 + 5
random = Math.floor(random)
console.log (level)
switch (level) {
    case "1":
        let number1 = readline.question ('Digite um numero de 0 a 1:')
        console.log (number1)
        console.log (random)
        if (number1 == random) {console.log ("Ganhou!")}
        else {console.log ("Perdeu!")
        console.log ("Sua pontuação:" + score)}
        break
    case "2":
        let number2 = readline.question ('Digite um numero de 0 a 5:')  
        random = Math.floor(5*Math.random())
        console.log (number2)
        console.log (random)
    if (number2 == random) {console.log ("Ganhou!")}
    else {console.log ("Perdeu!")
          console.log ("Sua pontuação:" + score)}
        
    case "3"}