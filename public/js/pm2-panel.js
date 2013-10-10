window.pm2panel = angular.module('pm2panel', ['store']);

// global ctrlers
pm2panel['ctrlers'] = {
    dashboard: function($scope, Store) {
        Store.api.get({},function(result){
            console.log(result);
            $scope.panel = result;
        });
    }
}