angular.module('app.controllers')

.controller('nowyTreningCtrl', ['$scope', '$stateParams', '$state', 'CreateTraining', '$ionicHistory',
function ($scope, $stateParams, $state, CreateTraining, $ionicHistory) {

    $scope.training = {}

    $scope.$on('$ionicView.beforeEnter', () => {   
        $scope.training = CreateTraining.newTraining
    });

    $scope.goToExcList = () => {
        CreateTraining.newTraining = $scope.training
        $state.go('menu.listaCwiczenDoTreningu')
    }

    $scope.saveTraining = () => {
        let userTraining = JSON.parse(window.localStorage.getItem('userTraining'))
        if(userTraining == null){
            userTraining = []
            userTraining.push($scope.training)
            window.localStorage.setItem('userTraining', JSON.stringify(userTraining))
        }else{
            userTraining.push($scope.training)
            window.localStorage.removeItem('userTraining')
            window.localStorage.setItem('userTraining', JSON.stringify(userTraining))
        }
        $ionicHistory.removeBackView()
        $state.go('menu.treningi')
    }
}])