module.exports = function (quantity, itemPrice) {

    quantity = quantity || 1;
    itemPrice = itemPrice || 5;

    var getBasePrice = function () {
        return quantity * itemPrice;
    };

    var getDiscountFactor = function () {
        return getBasePrice() > 1000 ? 0.95 : 0.98;
    };

    var getPrice = function () {
        return getBasePrice() * getDiscountFactor();
    };

    return {
        getPrice: getPrice
    }
}