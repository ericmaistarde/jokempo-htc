const $buttonStart = document.querySelector(".button-start")
const $buttonReset = document.querySelector(".button-reset")

const $buttonStone1 = document.querySelector(".button-stone-1")
const $buttonPaper1 = document.querySelector(".button-paper-1")
const $buttonScissors1 = document.querySelector(".button-scissors-1")

const $buttonStone2 = document.querySelector(".button-stone-2")
const $buttonPaper2 = document.querySelector(".button-paper-2")
const $buttonScissors2 = document.querySelector(".button-scissors-2")

const $winnerName = document.querySelector('.winner-box')

const $field1 = document.querySelector(".field-1")
const $field2 = document.querySelector(".field-2")

const $score1 = document.querySelector(".score-1")
const $score2 = document.querySelector(".score-2")

const $playerName1 = document.querySelector('#player-name-1')
const $playerName2 = document.querySelector('#player-name-2')

let player1 = '' //a let "player1" se refere aos valores do jogador 1,a dois na mesma pegada disso,ovibiamenti 
let player2 = ''

let winner = "" //no inicio começa vazio,por isso esta só esse sinal '' logo depois entra algum valor que será o vencedor de dada rodadada
let started = false //começa como "false" pois se trata de um jogo que ainda não começou,então comoça como false e logo depois de apertar o botão de 'iniciar' voce muda esse valor de false para true 

let pointsP1 = 0 // referente aos pontos dos jogadores 1 e 2
let pointsP2 = 0

//var $ValuePlayer1 = $playerName1.value
//var $ValuePlayer2 = $playerName2.value

//console.log($ValuePlayer1) como fazer pro imput funcionar?

function verifyWinner() {
    if (player1 == player2) {
        winner = 0
        setTimeout(function () {
            printNameWinner(0)
        }, 800)
        //  resetVarieblesfields()
        // if ($player2 && $player2 == true) {
        //     ResetFieldP2()
        //     ResetFieldP1()
        //  }
    } else if (player1 == "stone" && player2 == "scissors" || player1 == "scissors" && player2 == "paper" || player1 == "paper" && player2 == "stone") {
        setTimeout(function () {
            winner = 1
            printNameWinner(1)
            addPointsP1()
        }, 800)
        //  resetVarieblesfields()
        //  if ($player2 == true) {
        //     ResetFieldP2()
        //ResetFieldP1()
        //  }
    } else if (player2 == "stone" && player1 == "scissors" || player2 == "scissors" && player1 == "paper" || player2 == "paper" && player1 == "stone") {
        setTimeout(function () {
            winner = 2
            printNameWinner(2)
            addPointsP2()
        }, 800)
    }
}

function ResetFieldP1() {
    $field1.innerHTML = ''
}

function ResetFieldP2() {
    $field2.innerHTML = ''
}

function ResetScoreP1() {
    pointsP1 = 0
    $score1.innerHTML = "00"
}

function ResetScoreP2() {
    pointsP2 = 0
    $score2.innerHTML = "00"
}

function resetVarieblesfields() {
    player1 = ''
    player2 = ''
}

function resetWinner() {
    $winnerName.innerHTML = "comece a jogar"
}

function addPointsP1() {
    $score1.innerHTML = pointsP1 += 1
}

function addPointsP2() {
    $score2.innerHTML = pointsP2 += 1
}

function printNameWinner() {
    if (winner == 1) {
        $winnerName.innerHTML = "beltrano ganhou"
    } else if (winner == 2) {
        $winnerName.innerHTML = "fulano ganhou"
    } else {
        if (winner != 1 && 2) {
            $winnerName.innerHTML = "empatou"
        }
    }
}

$buttonReset.addEventListener("click", function () {
    ResetFieldP1()
    ResetFieldP2()
    ResetScoreP1()
    ResetScoreP2()
    resetWinner()
})

$buttonStone1.addEventListener("click", function () {//esssas funções são dos botoes,ou seja essas são as que 'jogam' as imagens dentro do field
    player1 = "stone" 
    $field1.innerHTML = '<img src="./src/images/pedra.png" alt="pedra">'
    verifyWinner()
    resetVarieblesfields()
    // console.log("entrei")
    if (player1 == true) {
        ResetFieldP2()
        ResetFieldP1()
    }
})

$buttonPaper1.addEventListener("click", function () {
    player1 = "paper" 
    $field1.innerHTML = '<img src="./src/images/papel.png" alt="papel">'
    verifyWinner()
    resetVarieblesfields()
    if (player1 == true) {
        ResetFieldP2()
        ResetFieldP1()
    }
})

$buttonScissors1.addEventListener("click", function () {
    player1 = "scissors" 
    $field1.innerHTML = '<img src="./src/images/tesoura.png" alt="tesoura">'
    verifyWinner()
    resetVarieblesfields()
    if (player1 == true) {
        ResetFieldP2()
        ResetFieldP1()
    }
})

$buttonStone2.addEventListener("click", function () {
    player2 = "stone" 
    $field2.innerHTML = '<img src="./src/images/pedra.png" alt="pedra">'
    verifyWinner()
    resetVarieblesfields()
    console.log(player2)
    if (player2 == "stone") {
        ResetFieldP2()
        ResetFieldP1()
    }
})

$buttonPaper2.addEventListener("click", function () {
    player2 = "paper" 
    $field2.innerHTML = '<img src="./src/images/papel.png" alt="papel">'
    verifyWinner()
    resetVarieblesfields()
    if (player2 == true) {
        ResetFieldP2()
        ResetFieldP1()
    }
})

$buttonScissors2.addEventListener("click", function () {
    player2 = "scissors" 
    $field2.innerHTML = '<img src="./src/images/tesoura.png" alt="tesoura">'
    verifyWinner()
    resetVarieblesfields()
    console.log(player2)
    if (player2 == true) {
        console.log("entrei")
        ResetFieldP2()
        ResetFieldP1()
    }
})
