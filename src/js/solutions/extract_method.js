var Order = function (amount) {
        var amount = amount,
            getAmount = function () {
                return amount;
            };

        return {
            getAmount: getAmount
        }
    },
    Orders = function() {
        var _orders = [
            new Order(10),
            new Order(20),
            new Order(30)
        ];

        function getOrders() {
            return _orders;
        }

        return {
            getOrders: getOrders
        }
    },
    OrderList = new Orders();


module.exports = {
    _name: 'BBC Sport Report',

    printBanner: function () {
        var returnString = '';
        returnString += '*********************\n';
        returnString += '****Customer Owes****\n';
        returnString += '*********************\n';

        return returnString;
    },

    printDetails: function (outstanding) {
        var returnString = '';
        returnString += 'Name: ' + this._name;
        returnString += 'Amouxnt: ' + outstanding;

        return returnString;
    },

    getOutstanding: function () {
        var orders = OrderList.getOrders(),
            outstanding = 0;

        orders.forEach(function(order) {
            outstanding += order.getAmount();
        });

        return outstanding;
    },

    printOwing: function () {
        var outstanding = this.getOutstanding();
        returnString = this.printBanner();
        returnString += this.printDetails(outstanding);

        return returnString;
    }
}