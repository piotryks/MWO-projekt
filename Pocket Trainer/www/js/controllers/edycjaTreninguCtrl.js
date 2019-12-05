angular.module('app.controllers')

    .controller('edycjaTreninguCtrl', ['$scope', '$stateParams', 'CreateTraining', '$state', '$ionicHistory',
        function ($scope, $stateParams, CreateTraining, $state, $ionicHistory) {

            $scope.editTraining = {}

            $scope.$on('$ionicView.beforeEnter', () => {   
                CreateTraining.edit = true
                $scope.editTraining = CreateTraining.newTraining
                console.log('Edytowany treningi: ',$scope.editTraining)
            });

            $scope.goToExcList = () => {
                CreateTraining.newTraining = $scope.editTraining
                $state.go('menu.listaCwiczenDoTreningu')
            }

            $scope.saveTraining = () => {
                let userTraining = JSON.parse(window.localStorage.getItem('userTraining'))
                if(userTraining == null){
                    userTraining = []
                    userTraining.push($scope.editTraining)
                    window.localStorage.setItem('userTraining', JSON.stringify(userTraining))
                }else{
                    userTraining[CreateTraining.editID] = $scope.editTraining
                    window.localStorage.removeItem('userTraining')
                    window.localStorage.setItem('userTraining', JSON.stringify(userTraining))
                }
                $ionicHistory.removeBackView()
                $state.go('menu.treningi')
            }

        }])