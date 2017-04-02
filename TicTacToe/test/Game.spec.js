describe('Game Test: ', function () {

    beforeEach(function() {
        Game.setCurrentPlayer('O');
        Game.setGameBoard([[null,null,null],[null,null,null],[null,null,null]]);
        Game.setIfGameIsActive(true);
        Game.setMovesCounter(0);
        Game.setStartPlayer('O');
    });

    it('shouldReturnTrueIfNextMoveIsPossible', function() {
        spyOn(Game, "checkIfGameIsActive").and.returnValue(true);
        spyOn(Game, "getMovesCounter").and.returnValue('1');

        expect(Game.validateNextMove()).toBe(true);
    });

    it('shouldSetCurrentPlayerToX', function() {

        Game.nextPlayer();
        expect(Game.getCurrentPlayer()).toBe('X');

    });

    it('shouldPutOIn0x0BoardCell', function() {
        spyOn(Game, 'validateNextMove').and.returnValue(true);
        spyOn(Game, 'updateGui');
        spyOn(Game, 'nextPlayer');
        spyOn(Game, 'displayCurrentMoves');
        spyOn(Game, 'updateStatistics');

        Game.move(1, Winner_Checker, historyModule);

        expect(Game.getGameBoard()[0][0]).toBe('O');

    });


    it('shouldReturnFalseIfTryingToMoveWhenGameIsOver', function() {

        spyOn(Game, 'validateNextMove').and.returnValue(true);
        spyOn(Game, 'updateGui');
        spyOn(Game, 'nextPlayer');
        spyOn(Game, 'displayCurrentMoves');
        spyOn(Game, 'updateStatistics');
        Game.setIfGameIsActive(false);
        var isMovePossible = Game.move(1, Winner_Checker, historyModule);

        expect(isMovePossible).toBe(false);

    });





});