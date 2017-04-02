var historyModule = (function() {
    var _xWins = 0;
    var _oWins = 0;
    var _draw = 0;

    return {
        xWon : function() {
            _xWins++;
        },
        oWon : function() {
            _oWins++;
        },
        wasDraw : function() {
            _draw++;
        },
        getTimesXWon : function() {
            return _xWins;
        },
        getTimesOWon : function() {
            return _oWins;
        },
        getTimesWasDraw : function() {
            return _draw;
        }
    }
})();