const RandomNumber = () => {
    const Rand = Math.floor(Math.random() * 13) + 1
    if (Rand === 1){
        return 11
    }
    else if (Rand > 10){
        return 10
    }
    else{
        return Rand
    }
}

let hasBlackJack = false
let is_Alive = false
let cards = []
let sums = 0
let message = ''

let cardsEl = document.querySelector('#cards')
let sumEl = document.querySelector('#sum')
let messageEl = document.querySelector('.message')

let playerDetails = {}
playerDetails.name = 'Anim'
console.log(playerDetails)
function renderGame() {
    if (sums < 21){
    message = 'Less that 21 do you want to draw'
    }
    else if (sums === 21){
        message = 'Hurray you got black jack'
        hasBlackJack = true
    }
    else{
        message = 'Out of bounds'
    }
    cardsEl.innerText = `Cards: `
    cards.forEach(card =>{
        cardsEl.innerText += ` ${card}`
    })
    sumEl.innerText = `Sum: ${sums}`
    messageEl.innerText = message
}

function new_card() {
    if (is_Alive === true && hasBlackJack === false){
        let card = RandomNumber()
        sums += card
        cards.push(card)
        renderGame()
    }
    
}
function start() {
    is_Alive = true
    let first_card = RandomNumber()
    let second_card = RandomNumber()
    cards = [first_card, second_card]
    sums = first_card + second_card
    renderGame()    
}

/*
cards.forEach(element => {
    console.log(element)
})
const element = () => {

}
*/