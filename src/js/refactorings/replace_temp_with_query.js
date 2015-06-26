module.exports = function (quantity, itemPrice) {

    quantity = quantity || 1;
    itemPrice = itemPrice || 5;

    var getPrice = function () {
        var basePrice = quantity * itemPrice,
            discountFactor;

        if (basePrice > 1000) {
            discountFactor = 0.95;
        } else {
            discountFactor = 0.98;
        }

        return basePrice * discountFactor;
    }

    return {
        getPrice: getPrice
    }
}