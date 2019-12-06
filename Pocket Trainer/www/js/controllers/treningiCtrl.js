angular.module('app.controllers')

    .controller('treningiCtrl', ['$scope', '$stateParams', 'CreateTraining', '$state', 'ApiRequest','$ionicPlatform', 'ExercisesServ','ActualTraining',
        function ($scope, $stateParams, CreateTraining, $state, ApiRequest,$ionicPlatform, ExercisesServ,ActualTraining) {

            $scope.reqRes = null
            $scope.trainToRemove = null
            $scope.removePopup = false
            getTrainings = null

            // przechwytywanie back buttona
            $ionicPlatform.registerBackButtonAction(function (e) {
                if ($scope.removePopup) {
                    $scope.removePopup = false
                    e.preventDefault()
                    $scope.$apply()
                } else {
                    navigator.app.backHistory()
                }
              }, 100);

            $scope.$on('$ionicView.beforeEnter', () => {   
                ExercisesServ.getListOfExercises()
                $scope.userTrainings = JSON.parse(window.localStorage.getItem('userTraining'))
                console.log('Treningi uzytkownika: ',$scope.userTrainings)
            });

            $scope.editTraining = (training) => {
                CreateTraining.newTraining = training
                CreateTraining.editID = $scope.userTrainings.indexOf(training)
                $state.go('menu.edycjaTreningu')
            }

            $scope.newTraining = () => {
                CreateTraining.resetData()
                $state.go('menu.nowyTrening')
            }

            $scope.showTrainingDetail = (obj) => {
                $state.go('menu.szczegolyTreningu', {training: obj})
            }

            $scope.testApi = () => {
                ApiRequest.testoweZapytanie().then( res => {
                    $scope.reqRes = true
                    getTrainings = res
                    $scope.userTrainings = $scope.userTrainings.concat(getTrainings)
                    console.log(getTrainings)
                    $scope.$apply()
                }).catch( err => {
                    $scope.reqRes = false
                })
            }

            $scope.deleteTraining = (training) => {
                console.log("Trenieng do usunięcia: ", training)
                $scope.trainToRemove = training
                $scope.removePopup = true
            }

            $scope.deleteDismiss = () => {
                $scope.removePopup = false
                $scope.trainToRemove = null
            }

            $scope.deleteConfirm = () => {
                $scope.userTrainings.splice( $scope.userTrainings.indexOf($scope.trainToRemove), 1 )
                window.localStorage.removeItem('userTraining')
                window.localStorage.setItem('userTraining', JSON.stringify($scope.userTrainings))
                $scope.removePopup = false
                $scope.trainToRemove = null
                $scope.$apply()
            }

            $scope.goToTraining = (training) => {
                ActualTraining.training = training
                $state.go('trening')
            }

        }])