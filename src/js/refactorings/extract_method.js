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

    printOwing: function () {
        var returnString = '',
            orders = OrderList.getOrders(),
            outstanding = 0;

        //print banner
        returnString += '*********************\n';
        returnString += '****Customer Owes****\n';
        returnString += '*********************\n';

        //calculate outstanding
        orders.forEach(function(order) {
            outstanding += order.getAmount();
        });

        returnString += 'Name: ' + this._name;
        returnString += 'Amount: ' + outstanding;

        return returnString;
    }
}