angular.module('app.controllers')

    .controller('treningiCtrl', ['$scope', '$stateParams', 'CreateTraining', '$state',
        function ($scope, $stateParams, CreateTraining, $state) {

            $scope.$on('$ionicView.beforeEnter', () => {   
                $scope.userTrainings = JSON.parse(window.localStorage.getItem('userTraining'))
            });

            $scope.newTraining = () => {
                CreateTraining.resetData()
                $state.go('menu.nowyTrening')
            }

        }])