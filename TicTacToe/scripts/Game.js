var Game = (function () {
    var details = {
        currentPlayer: 'O',
        startPlayer: 'O',
        gameBoard: [[null,null,null],[null,null,null],[null,null,null]],
        movesCounter: 0,
        isGameActive: true,
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

        setCurrentPlayer: function(i){
            details.currentPlayer = i;
        },

        setStartPlayer: function(player){
            details.startPlayer = player;
        },

        setGameBoard: function(board){
            details.gameBoard = board;
        },

        setMovesCounter: function(counter){
            details.movesCounter = counter;
        },

        setIfGameIsActive: function(isActive){
            details.isGameActive = isActive;
        },

        move: function(position, WinnerChecker, History) {

            if(!Game.validateNextMove()){
                return false;
            }

            var pastUserTurn = details.currentPlayer,
                y = parseInt((position-1)/3),
                x = position-(3*y) - 1;

            if(details.gameBoard[x][y] == null){
                Game.updateGui(position);
                details.gameBoard[x][y] = details.currentPlayer;
                Game.nextPlayer();
                Game.displayCurrentMoves();
                details.movesCounter++;
                Game.updateStatistics(WinnerChecker.validateWinner(details.gameBoard, pastUserTurn, details.movesCounter), History);
            } else  {
                return null;
            }
        },

        validateNextMove: function(){
            if(details.movesCounter >=9 || details.isGameActive == false){
                return false;
            }
            return true;
        },

        nextPlayer: function () {
            if(details.currentPlayer == 'O'){
                details.currentPlayer = 'X';
            } else {
                details.currentPlayer = 'O';
            }
        },

        updateGui: function (position) {
            var div_content = '<div class="figure">'+details.currentPlayer+'</div>';
            document.getElementById("field"+position).innerHTML = div_content;
        },

        restart: function() {
            for(var i = 1; i<10 ;i++){
                document.getElementById("field"+i).innerHTML = "";
            }
            details.gameBoard = [[null,null,null],[null,null,null],[null,null,null]];
            details.currentPlayer = details.startPlayer;
            details.movesCounter = 0;
            details.isGameActive = true;
            Game.displayCurrentMoves();

        },

        changeStartingPlayer: function() {
            if(details.startPlayer == 'O'){
                details.startPlayer = 'X';
            } else {
                details.startPlayer = 'O';
            }
            Game.displayCurrentMoves();

        },

        displayCurrentMoves: function() {
            var div_content = '<div class="figure">'+details.startPlayer+'</div>';
            document.getElementById("fieldStarting").innerHTML = div_content;
            var div_content2 = '<div class="figure">'+details.currentPlayer+'</div>';
            document.getElementById("fieldActual").innerHTML = div_content2;
            var div_content3 = '<div>' +  'X wins - ' + historyModule.getTimesXWon() + '</div>';
            document.getElementById("fieldX").innerHTML = div_content3;
            var div_content4 = '<div>' +  'O wins - ' + historyModule.getTimesOWon() + '</div>';
            document.getElementById("fieldO").innerHTML = div_content4;
            var div_content5 = '<div>' +  'Draws - ' + historyModule.getTimesWasDraw() + '</div>';
            document.getElementById("fieldD").innerHTML = div_content5;
        },

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
            Game.displayCurrentMoves();
        }

    };
})();

window.onload = Game.displayCurrentMoves;