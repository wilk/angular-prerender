{
    class TestAppCtrl {
        constructor($location) {
            this.$location = $location;
        }
        
        showExpenses() {
            this.$location.path('/expenses');
        }
    }
    
    angular.module('test', ['ngComponentRouter'])
        .config(($locationProvider) => {
            $locationProvider.html5Mode(true);
        })
        .value('$routerRootComponent', 'testApp')
        .component('testApp', {
            controller: ($location) => {
                return new TestAppCtrl($location);
            },
            template: `
<div>
    <h1>Index</h1>
</div>
<a ng-click="$ctrl.showExpenses()">Expenses</a>
<ng-outlet></ng-outlet>`,
            $routeConfig: [
                {path: '/expenses', component: 'testExpenses', name: 'Expenses'}
            ]
        });
}