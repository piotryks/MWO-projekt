angular.module('app.controllers')

    .controller('szczegolyTreninguCtrl', ['$scope', '$stateParams',
        function ($scope, $stateParams) {

            $scope.training = {}

            $scope.$on('$ionicView.beforeEnter', () => {   
                $scope.training = $stateParams.training
                console.log('Trening: ',$scope.training)
            });

        }])