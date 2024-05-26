let winnerTrophy = document.querySelector('.winnerTrophy');
let gameStart = document.querySelector('.gameStart');
let guess = document.querySelector('.guess');
let chance = document.querySelector('.chance');
let error = document.querySelector('.error')
let players = document.querySelector('.players');
let player1 = document.querySelector('.player1');
let player2 = document.querySelector('.player2');
let player3 = document.querySelector('.player3');
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');
let click = 0;
let click2 = 0;
let chanceA = 5;
let chanceB = 5;



button1.addEventListener('click',()=>{
    // ++click
    if(player1.value - 0){
        if(player1.value < 10){
            players.innerHTML = 'Player -2';
            guess.innerHTML   = 'GUESS A NUMBER';
            chance.innerHTML  = 'You Have a 5 Chance Only';
            player1.style     = "display: none;";
            button1.style     = "display: none;";
            player2.style     = "display: inline-block;";
            button2.style     = "display: inline-block;";
            error.style       = "display: none;"
        }else{
            error.innerHTML = alert('Please, Input a Value Less Than Ten');
        }
    }else{
        error.innerHTML = alert('Please, Input a Numbar');
    }
})
button2.addEventListener('click',()=>{
    ++click
    --chanceA
    if(player2.value - 0){
        if(player2.value < 10){
            if(click < 5){
                chance.innerHTML  = `You Have a ${chanceA} Chance Only `;
                if(player1.value === player2.value){
                    players.innerHTML = 'Player -3';
                    guess.innerHTML = 'GUESS A NUMBER';
                    chance.innerHTML  = 'You Have a 5 Chance Only';
                    player2.style  = "display: none;";
                    button2.style  = "display: none;";
                    player3.style  = "display: inline-block;";
                    button3.style  = "display: inline-block;";
                    error.style    = "display: none;"
                }
            }else{
                players.innerHTML = "Player Three";
                guess.innerHTML   = 'GUESS A NUMBER';
                chance.innerHTML  = 'You Have a 5 Chance Only';
                player2.style     = "display: none;";
                button2.style     = "display: none;";
                player3.style     = "display: inline-block;";
                button3.style     = "display: inline-block;";
                error.style    = "display: none;"
            }
        }else{
            error.innerHTML = alert('Please, Input a Value Less Than Ten');
        }
    }else{
        error.innerHTML = alert('Please, Input a Numbar');
    }
})
button3.addEventListener('click',()=>{
    ++click2
    --chanceB
    if(player3.value - 0){
        if(player3.value < 10){
            if(click2 < 6){
                chance.innerHTML  = `You Have a ${chanceB} Chance Only `;
                if(player1.value === player3.value  && player1.value === player2.value){
                    players.style  = 'display: none;';
                    guess.style   = 'display: none;';
                    chance.style  = 'display: none;';
                    player3.style  = "display: none;";
                    button3.innerHTML = "Player Two & Three Winner";
                    gameStart.style = 'display: none;';
                    winnerTrophy.style = 'display: inline-block;';
                }else if(player1.value === player3.value){
                    players.style     = 'display: none;';
                    guess.style   = 'display: none;';
                    chance.style  = 'display: none;';
                    player3.style  = "display: none;";
                    button3.innerHTML  = "Player Three Winner";
                    gameStart.style = 'display: none;';
                    winnerTrophy.style = 'display: inline-block;';
                }
            }else if(player1.value === player2.value){
                players.style     = 'display: none;';
                guess.style   = 'display: none;';
                chance.style  = 'display: none;';
                player3.style  = "display: none;";
                button3.innerHTML  = "Player Two Winner";
                gameStart.style = 'display: none;';
                winnerTrophy.style = 'display: inline-block;';
            }
            else{
                players.style     = 'display: none;';
                guess.style   = 'display: none;';
                chance.style  = 'display: none;';
                player3.style  = "display: none;";
                button3.innerHTML  = "Player One Winner";
                gameStart.style = 'display: none;';
                winnerTrophy.style = 'display: inline-block;';                
            }
        }else{
            error.innerHTML = alert('Please, Input a Value Less Than Ten')
        }
    }else{
        error.innerHTML = alert('Please, Input a Numbar');
    }
})