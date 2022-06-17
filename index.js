let scoreHome = document.getElementById("score-home")
let scoreCountHome = 0

function addOneHome() {
    scoreCountHome += 1
    scoreHome.textContent = scoreCountHome
}

function addTwoHome() {
    scoreCountHome += 2
    scoreHome.textContent = scoreCountHome
}

function addThreeHome() {
    scoreCountHome += 3
    scoreHome.textContent = scoreCountHome
    
}

let scoreAway = document.getElementById("score-away")
let scoreCountAway = 0

function addOneAway() {
    scoreCountAway += 1
    scoreAway.textContent = scoreCountAway
}

function addTwoAway() {
    scoreCountAway += 2
    scoreAway.textContent = scoreCountAway
}

function addThreeAway() {
    scoreCountAway += 3
    scoreAway.textContent = scoreCountAway
    
}

function newGame() {
    scoreCountHome = 0
    scoreCountAway = 0
    scoreHome.textContent = scoreCountHome
    scoreAway.textContent = scoreCountAway
}