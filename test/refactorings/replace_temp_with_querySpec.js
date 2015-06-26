describe('Replace temp with query', function () {
    var DiscountCalculator = require('../../src/js/solutions/replace_temp_with_query');

    describe('discount factor', function () {
        //for the purposes of demonstrating the refactoring, we'll pretend it's ok
        //to know about the of the getPrice calculation to determine the discount factor used
        it('should use a discount factor of 0.95 if the basePrice is greater than 1000', function () {
            var calc = new DiscountCalculator(50, 30);
            expect(calc.getPrice()).toEqual(1425); //50 * 30 * 0.95 = 1425
        });

        it('should use a discount factor of 0.98 if the basePrice is lower than 1000', function () {
            var calc = new DiscountCalculator(10, 30);
            expect(calc.getPrice()).toEqual(294); //10 * 30 * 0.98 = 294
        });
    });
});