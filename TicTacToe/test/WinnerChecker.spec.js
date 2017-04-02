describe('Winner Checker: ', function () {

    it('shouldReturnNull', function() {
        var board =[['O',null,null],[null,null,null],[null,null,null]];
        var moveOfPlayer = 'O';
        var movesCounter = 1;
        expect(Winner_Checker.validateWinner(board, moveOfPlayer, movesCounter)).toBe(null);
    });

    it('shouldAlertAndReturnOAsWinnerInHorizontalTopSet', function() {
        var board =[['O','O','O'],['X','X',null],[null,null,null]];
        var moveOfPlayer = 'O';
        var movesCounter = 5;
        expect(Winner_Checker.validateWinner(board, moveOfPlayer, movesCounter)).toBe('O');
    });

    it('shouldAlertAndReturnXAsWinnerInHorizontalMiddleSet', function() {
        var board =[['O','O',null],['X','X','X'],[null,null,null]];
        var moveOfPlayer = 'X';
        var movesCounter = 5;
        expect(Winner_Checker.validateWinner(board, moveOfPlayer, movesCounter)).toBe('X');
    });

    it('shouldAlertAndReturnXAsWinnerInHorizontalBottomSet', function() {
        var board =[['O','O',null],[null,null,null],['X','X','X']];
        var moveOfPlayer = 'X';
        var movesCounter = 5;
        expect(Winner_Checker.validateWinner(board, moveOfPlayer, movesCounter)).toBe('X');
    });

    it('shouldAlertAndReturnXAsWinnerInVerticalLeftSet', function() {
        var board =[['X',null,null],['X','O','O'],['X',null,null]];
        var moveOfPlayer = 'X';
        var movesCounter = 5;
        expect(Winner_Checker.validateWinner(board, moveOfPlayer, movesCounter)).toBe('X');
    });

    it('shouldAlertAndReturnOAsWinnerInVerticalMiddleSet', function() {
        var board =[[null,'O',null],[null,'O','X'],[null,'O','X']];
        var moveOfPlayer = 'O';
        var movesCounter = 5;
        expect(Winner_Checker.validateWinner(board, moveOfPlayer, movesCounter)).toBe('O');
    });

    it('shouldAlertAndReturnOAsWinnerInVerticalRightSet', function() {
        var board =[['X',null,'O'],['X',null,'O'],['X',null,'O']];
        var moveOfPlayer = 'O';
        var movesCounter = 5;
        expect(Winner_Checker.validateWinner(board, moveOfPlayer, movesCounter)).toBe('O');
    });

    it('shouldAlertAndReturnXAsWinnerInDiagonallyFromUpLeftToRightDownSet', function() {
        var board =[['X',null,null],['O','X','O'],[null,null,'X']];
        var moveOfPlayer = 'X';
        var movesCounter = 5;
        expect(Winner_Checker.validateWinner(board, moveOfPlayer, movesCounter)).toBe('X');
    });

    it('shouldAlertAndReturnOAsWinnerInDiagonallyFromUpRightToLeftDownSet', function() {
        var board =[[null,null,'O'],[null,'O','X'],['O',null,'X']];
        var moveOfPlayer = 'O';
        var movesCounter = 5;
        expect(Winner_Checker.validateWinner(board, moveOfPlayer, movesCounter)).toBe('O');
    });

    it('shouldAlertAndReturnDrawWhenNoWinnerAfter9Moves', function() {
        var board =[['O','X','X'],['X','X','O'],['O','O','X']];
        var moveOfPlayer = 'X';
        var movesCounter = 9;
        expect(Winner_Checker.validateWinner(board, moveOfPlayer, movesCounter)).toBe('D');
    });
});