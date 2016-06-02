{
    class ExpensesService {
        constructor($http, $q) {
            this.$http = $http;
            this.$q = $q;
            this._expenses = [];
        }
        
        setup(expenses) {
            this._expenses = expenses;
        }
        
        load() {
            return this.$q(resolve => {
                if (this._expenses.length > 0) return resolve(this._expenses);

                this.$http.get('api/expenses')
                    .then(response => {
                        this._expenses = response.data;
                        resolve(this._expenses);
                    });
            });
        }
    }
    
    angular.module('test')
        .service('Expenses', ExpensesService);
}