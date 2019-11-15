angular.module('app.controllers')

    .controller('szczegolyTreninguCtrl', ['$scope', '$stateParams',
        function ($scope, $stateParams) {

            $scope.$on('$ionicView.beforeEnter', () => {   
                console.log('Trening: ',$stateParams.training)
            });

        }])