describe('Extract method', function () {
    var obj = require('../../src/js/refactorings/extract_method');

    it('print the amount owing', function() {
        var expectedString = '';
        expectedString += '*********************\n';
        expectedString += '****Customer Owes****\n';
        expectedString += '*********************\n';

        expectedString += 'Name: BBC Sport Report';
        expectedString += 'Amount: ' + '60';

        expect(obj.printOwing()).toEqual(expectedString);
    });
});