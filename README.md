# Stone-paper-scissors

## Hands numbers
0-stone
1-paper
2-scissors

## Game = {}
.player - player pick  
.ai - Ai pick

## resetBorder()
Remove "active" class from every hands.  
Its using in startGame, playerChoice and resetTheGame functions.  

## playerChoice()
Function that is responsible for adding yellow border in chosen hand and assignment of a hand choice to "game.player".  

## StartGame()
In the start function checks if player has chosen the hand, if not, it shows an alert.  
Then function draws a number for AI.  
Then function decides who won the game.  
Then function activates "adding" function that is responsible for showing which hand player and AI chosen.  
In the end it resets border from chosen hand and reset "game.player".


## resetTheGame()  
Choosing Reset button activates resetTheGame function which resets game.player and game.ai objects and border in chosen hand and every stats from previous games.
