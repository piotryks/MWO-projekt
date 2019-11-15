angular.module('app.controllers')

    .controller('treningiCtrl', ['$scope', '$stateParams', 'CreateTraining', '$state', 'ApiRequest',
        function ($scope, $stateParams, CreateTraining, $state, ApiRequest) {

            $scope.reqRes = null

            $scope.$on('$ionicView.beforeEnter', () => {   
                $scope.userTrainings = JSON.parse(window.localStorage.getItem('userTraining'))
                console.log('Treningi urzytkownika: ',$scope.userTrainings)
            });

            $scope.newTraining = () => {
                CreateTraining.resetData()
                $state.go('menu.nowyTrening')
            }

            $scope.testApi = () => {
                ApiRequest.testoweZapytanie().then( res => {
                    $scope.reqRes = true
                }).catch( err => {
                    $scope.reqRes = false
                })
            }

        }])