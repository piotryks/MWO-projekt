angular.module('app.controllers')

    .controller('edycjaTreninguCtrl', ['$scope', '$stateParams', 'CreateTraining', '$state', '$ionicHistory', 'ExercisesServ',
        function ($scope, $stateParams, CreateTraining, $state, $ionicHistory, ExercisesServ) {

            $scope.editTraining = {}
            $scope.removePopup = false
            let clickedExc = null

            $scope.$on('$ionicView.beforeEnter', () => {   
                CreateTraining.edit = true
                $scope.removePopup = false
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

            $scope.showPopupRemoveExercise = (index) => {
                console.log("Usuwanie")
                $scope.removePopup = true
                clickedExc = index
            }

            $scope.deleteExc = () => {
                console.log(clickedExc)
                console.log(CreateTraining.newTraining)
                console.log($scope.editTraining)
                $scope.editTraining.exc.splice(clickedExc, 1)
                // CreateTraining.removeAt(clickedExc)
                // $scope.editTraining = CreateTraining.newTraining
                $scope.removePopup = false
            }

            $scope.cancelDelete = () => {
                $scope.removePopup = false
            }

            $scope.addBreak = () => {
                const trainingBreak = ExercisesServ.getBreak()
                console.log(trainingBreak)
                trainingBreak.series = []
                console.log(trainingBreak)
                trainingBreak.series.push({"rep": null, "value": trainingBreak.default_rep})
                CreateTraining.addExc(trainingBreak)
                $scope.training = CreateTraining.newTraining
            }

        }])