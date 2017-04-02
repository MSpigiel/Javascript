    describe('History Test: ', function () {

        it('initialHistoryStateShouldBeZeroed', function() {
            expect(historyModule.getTimesOWon()).toBe(0);
            expect(historyModule.getTimesXWon()).toBe(0);
            expect(historyModule.getTimesWasDraw()).toBe(0);
        });

        it('shouldIncrementGameHistoryCounters', function() {
            historyModule.xWon();
            historyModule.oWon();
            historyModule.wasDraw();
            expect(historyModule.getTimesOWon()).toBe(1);
            expect(historyModule.getTimesXWon()).toBe(1);
            expect(historyModule.getTimesWasDraw()).toBe(1);
        });

    });