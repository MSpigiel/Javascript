var Winner_Checker = (function () {
    var details = {
        movesCounter: 0,
        gameResolved: false,
        winner: ''
    };

    return {
        validateWinner: function(gameBoard, pastPlayer, movesCounter ){
            var board = gameBoard,
            player = pastPlayer;
            details.movesCounter = movesCounter;
            details.winner = '';


            if((board[0][0] == player) && (board[1][1] == player) && (board[2][2] == player)){
                details.winner = player;
                details.gameResolved = true;
            }
            if((board[0][2] == player) && (board[1][1] == player) && (board[2][0] == player)){
                details.winner = player;
                details.gameResolved = true
            }
            if((board[0][0] == player) && (board[0][1] == player) && (board[0][2] == player)){
                details.winner = player;
                details.gameResolved = true;
            }
            if((board[1][0] == player) && (board[1][1] == player) && (board[1][2] == player)){
                details.winner = player;
                details.gameResolved = true;
            }
            if((board[2][0] == player) && (board[2][1] == player) && (board[2][2] == player)){
                details.winner = player;
                details.gameResolved = true;
            }
            if((board[0][0] == player) && (board[1][0] == player) && (board[2][0] == player)){
                details.winner = player;
                details.gameResolved = true;
            }
            if((board[0][1] == player) && (board[1][1] == player) && (board[2][1] == player)){
                details.winner = player;
                details.gameResolved = true;
            }
            if((board[0][2] == player) && (board[1][2] == player) && (board[2][2] == player)){
                details.winner = player;
                details.gameResolved = true;
            }

            return Winner_Checker.announceWinner();
        },

        announceWinner: function(){

            if(details.gameResolved == true){
                alert("Wygrywa " + details.winner);
                details.gameResolved = false;
                return details.winner;
            }

            if(details.movesCounter >= 9){
                alert("Remis");
                return 'D';

            }
            return null;
        }
        };

})();