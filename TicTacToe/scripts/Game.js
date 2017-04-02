var gameModule = (function () {
    var details = {
        currentPlayer: 'O',
        startPlayer: 'O',
        gameBoard: [[null,null,null],[null,null,null],[null,null,null]],
        movesCounter: 0,
        isGameActive: true,
        x:0,
        y:0,

        updateStatistics: function(result, historyModule) {
            if(result == 'O'){
                historyModule.oWon();
                details.isGameActive = false;
            } else if(result == 'X'){
                historyModule.xWon();
                details.isGameActive = false;
            } else if (result == 'D'){
                historyModule.wasDraw();
                details.isGameActive = false;
            }
        },

        nextPlayer: function () {
            if(details.currentPlayer == 'O'){
                details.currentPlayer = 'X';
            } else {
                details.currentPlayer = 'O';
            }
        },

        validateNextMove: function(){
            if(details.getMovesCounter >=9 || details.checkIfGameIsActive == false){
                return false;
            }
            return true;
        },
    };

    return {

        getCurrentPlayer: function(){
            return details.currentPlayer;
        },

        getStartPlayer: function(){
            return details.startPlayer;
        },

        getGameBoard: function(){
            return details.gameBoard;
        },

        getMovesCounter: function(){
            return details.movesCounter;
        },

        checkIfGameIsActive: function(){
            return details.isGameActive;
        },

        analyseMove: function(position) {

            if(!details.validateNextMove()){
                return false;
            }
                details.y = parseInt((position-1)/3),
                details.x = position-(3*details.y) - 1;

            if(details.gameBoard[details.x][details.y] == null){
                return true;
            } else  {
                return false;
            }
        },

        applyMove: function(position, WinnerChecker, History){
            var pastUserTurn = details.currentPlayer;
            details.gameBoard[details.x][details.y] = details.currentPlayer;
            details.movesCounter++;
            details.nextPlayer();
            details.updateStatistics(WinnerChecker.validateWinner(details.gameBoard, pastUserTurn, details.movesCounter), History);
        },

        restart: function() {

            details.gameBoard = [[null,null,null],[null,null,null],[null,null,null]];
            details.currentPlayer = details.startPlayer;
            details.movesCounter = 0;
            details.isGameActive = true;

        },

        changeStartingPlayer: function() {
            if(details.startPlayer == 'O'){
                details.startPlayer = 'X';
            } else {
                details.startPlayer = 'O';
            }

        },

    };
})();
