describe('Game Test: ', function () {

    beforeEach(function() {
        historyMock = jasmine.createSpyObj('historyMock', ['xWon', 'oWon', 'wasDraw']);
        checkerMock = jasmine.createSpyObj('checkerMock', ['validateWinner']);
        gameModule.restart();
    });

    it('shouldResetAllDetailsFields', function() {
        //given
        gameModule.analyseMove(1);
        gameModule.applyMove(1, checkerMock, historyMock);
        gameModule.analyseMove(2);
        gameModule.applyMove(2, checkerMock, historyMock);
        gameModule.analyseMove(3);
        gameModule.applyMove(3, checkerMock, historyMock);
        //when
        expect(gameModule.getGameBoard()[0][0]).toBe('O');
        gameModule.restart();
        //then
        expect(gameModule.getCurrentPlayer()).toBe('O');
        expect(gameModule.getMovesCounter()).toBe(0);
        expect(gameModule.getGameBoard()[0][0] === null);
        expect(gameModule.getGameBoard()[0][1] === null);
        expect(gameModule.getGameBoard()[0][2] === null);

    });

    it('shouldReturnTrueIfNextMoveIsPossible', function() {
        //given

        //when
        var actual = gameModule.analyseMove(1);
        //then
        expect(actual).toBe(true);
    });

    it('shouldReturnFalseIfNextMoveIsNotPossibleBecauseOfOccupiedField', function() {
        //given
        gameModule.analyseMove(1);
        gameModule.applyMove(1, checkerMock, historyMock);
        //when
        var actual = gameModule.analyseMove(1);
        //then
        expect(actual).toBe(false);
    });

    it('shouldChangeStartingPlayerToX', function() {
        //given
        var begginingStartingPlayer = gameModule.getStartPlayer();
        //when
        gameModule.changeStartingPlayer();
        var actualStartingPlayer = gameModule.getStartPlayer();

        //then
        expect(begginingStartingPlayer).toBe('O');
        expect(actualStartingPlayer).toBe('X');
        gameModule.changeStartingPlayer();
    });

    it('shouldChangeStartingPlayerToO', function() {
        //given
        gameModule.changeStartingPlayer();
        var begginingStartingPlayer = gameModule.getStartPlayer();
        //when
        gameModule.changeStartingPlayer();
        var actualStartingPlayer = gameModule.getStartPlayer();

        //then
        expect(begginingStartingPlayer).toBe('X');
        expect(actualStartingPlayer).toBe('O');
        gameModule.changeStartingPlayer();
    });

    it('shouldMarkGameAsFinishedWhenOWon', function() {
        //given
        checkerMock.validateWinner.and.returnValue('O');
        //when
        gameModule.analyseMove(1);
        gameModule.applyMove(1, checkerMock, historyMock);
        expect(gameModule.checkIfGameIsActive()).toBe(false);

    });

    it('shouldMarkGameAsFinishedWhenXWon', function() {
        //given
        checkerMock.validateWinner.and.returnValue('X');
        //when
        gameModule.analyseMove(1);
        gameModule.applyMove(1, checkerMock, historyMock);
        expect(gameModule.checkIfGameIsActive()).toBe(false);

    });

    it('shouldMarkGameAsFinishedWhenWasDraw', function() {
        //given
        checkerMock.validateWinner.and.returnValue('D');
        //when
        gameModule.analyseMove(1);
        gameModule.applyMove(1, checkerMock, historyMock);
        expect(gameModule.checkIfGameIsActive()).toBe(false);
    });





});