module.exports = function(seniority, monthsDisabled, isPartTime){

    var disabilityAmount = function () {
        if (seniority < 2) return 0;
        if (monthsDisabled > 12) return 0;
        if (isPartTime) return 0;

        return 10;
    };

    return {
        disabilityAmount: disabilityAmount
    }
};