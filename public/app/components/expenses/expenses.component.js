{
    class TestExpensesCtrl {
        constructor(Expenses) {
            this.Expenses = Expenses;
            this.expenses = [];
        }

        $routerOnActivate() {
            this.Expenses.load()
                .then(expenses => {
                    this.expenses = expenses;
                });
        }
    }
    
    angular.module('test')
        .component('testExpenses', {
            controller: (Expenses) => {
                return new TestExpensesCtrl(Expenses);
            },
            templateUrl: 'public/app/components/expenses/expenses.html'
        });
}