angular.module('app.controllers')

    .controller('ustawieniaCwiczeniaCrtl', ['$scope', '$stateParams', 'CreateTraining', '$state', '$ionicHistory',
        function ($scope, $stateParams, CreateTraining, $state, $ionicHistory) {

            $scope.exc = {}
            $scope.showReps = false
            $scope.excSeries = []
            let sampleSeries = {
                rep: null,
                value: null
            }

            $scope.$on('$ionicView.beforeEnter', () => {
                angular.copy($stateParams.exercise, $scope.exc)
                if ($scope.exc.value_type == 'REPS') {
                    $scope.showReps = true
                }
                sampleSeries.rep = $scope.exc.default_rep
                $scope.excSeries.push(sampleSeries)
                console.log('Odebrano ćwiczenie: ', $scope.exc)
            });

            $scope.addSeries = () => {
                let lastAdd = {}
                lastAdd.rep = $scope.excSeries[$scope.excSeries.length - 1].rep
                lastAdd.value = $scope.excSeries[$scope.excSeries.length - 1].value
                $scope.excSeries.push(lastAdd)
            }

            $scope.acceptExc = () => {
                $scope.exc.series = $scope.excSeries
                CreateTraining.addExc($scope.exc)
                $ionicHistory.removeBackView()
                console.log(CreateTraining.newTraining)
                if (CreateTraining.edit) {
                    $state.go('menu.edycjaTreningu')
                } else {
                    $state.go('menu.nowyTrening')
                }
            }
        }])