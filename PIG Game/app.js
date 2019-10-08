/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlay, prevDice, winningScore;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    
    if(gamePlay){
        
        var dice = Math.floor(Math.random() * 6) + 1;
        
        var dice1 = Math.floor(Math.random() * 6) + 1;
        
        //var dice = 6;
    
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        
        var dice1DOM = document.querySelector('.dice1');
        dice1DOM.style.display = 'block';
        dice1DOM.src = 'dice-' + dice1 + '.png';

        if(dice !== 1 || dice1 !== 1) {
            
            /* if (prevDice == 6 && dice == 6){
                document.querySelector('#current-' + activePlayer).textContent = 0;
                nextPlayer();
            } */

            roundScore = roundScore + dice + dice1;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            
            //prevDice = dice;

        } else {

            nextPlayer()
        }
        
    }
    

})

document.querySelector('.btn-hold').addEventListener('click', function(){

    if(gamePlay){
        // Adding current score to global score
            scores[activePlayer] += roundScore;                                    
        // Update the UI
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        // Check if player won the game
            if (scores[activePlayer] >= winningScore) {
                document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.dice1').style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                gamePlay = false;
            } else {
                nextPlayer();   
            }
        
    }    
    
})

function nextPlayer(){
    
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice1').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    
    winningScore = prompt("Please enter the winning score", "");
    
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlay = true;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
    
    //winningScore = prompt("Game Over. Please enter the new winning score", "");
}





//dice = Math.floor(Math.random() * 6) + 1;
//console.log(dice);

//

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score-0').textContent;
//console.log(x);


