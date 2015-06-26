describe('Consolidate conditional expression', function () {
    var Obj = require('../../../src/js/refactorings/simplifying-conditional-expressions/consolidate_conditional_expression');

    function createDisabilityObject(seniority, monthsDisabled, isPartTime) {
        seniority = seniority || 0;
        monthsDisabled = monthsDisabled || 0;

        return new Obj(seniority, monthsDisabled, isPartTime);
    }

    describe('Not entitled to disability amount', function (){
        it('should not give disability amount if seniority too low', function() {
            expect(createDisabilityObject(1).disabilityAmount()).toEqual(0);
        });

        it('should not give disability amount if months disabled greater than 12', function() {
            expect(createDisabilityObject(3, 13).disabilityAmount()).toEqual(0);
        });

        it('should not give disability amount if person is part time', function() {
            expect(createDisabilityObject(3, 10, true).disabilityAmount()).toEqual(0);
        });
    });

    describe('Is entitled to disablity amount', function () {
       it('should give 10 if entitled', function() {
            expect(createDisabilityObject(2, 10, false).disabilityAmount()).toEqual(10);
       });
    });
});