var View_Updater = (function () {
    var details = {
        updateBoard: function(position, Game){
            var div_content = '<div class="figure">'+Game.getCurrentPlayer()+'</div>';
            document.getElementById("field"+position).innerHTML = div_content;
        },

        updateWholeView: function(History, Game) {
            var div_content = '<div class="figure">'+Game.getStartPlayer()+'</div>';
            document.getElementById("fieldStarting").innerHTML = div_content;
            var div_content2 = '<div class="figure">'+Game.getCurrentPlayer()+'</div>';
            document.getElementById("fieldActual").innerHTML = div_content2;
            var div_content3 = '<div>' +  'X wins - ' + History.getTimesXWon() + '</div>';
            document.getElementById("fieldX").innerHTML = div_content3;
            var div_content4 = '<div>' +  'O wins - ' + History.getTimesOWon() + '</div>';
            document.getElementById("fieldO").innerHTML = div_content4;
            var div_content5 = '<div>' +  'Draws - ' + History.getTimesWasDraw() + '</div>';
            document.getElementById("fieldD").innerHTML = div_content5;
        }
    };

    return {
        interceptMove: function(position, WinnerChecker, History, Game){
            if(Game.analyseMove(position, WinnerChecker, History) == true){
                details.updateBoard(position, Game);
                Game.applyMove(position, WinnerChecker, History);
                details.updateWholeView(History, Game);
            } else {
                return null;
            }
        },

        restart: function(History, Game){
          Game.restart();
          for(var i = 1; i<10 ;i++){
            document.getElementById("field"+i).innerHTML = "";
          }
          details.updateWholeView(History, Game);
        },

        changeStartingPlayer: function(History, Game){
            Game.changeStartingPlayer();
            details.updateWholeView(History, Game);
        },



    };

})();
