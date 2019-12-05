angular.module('app.controllers')

.controller('nowyTreningCtrl', ['$scope', '$stateParams', '$state', 'CreateTraining', '$ionicHistory', 'ExercisesServ',
function ($scope, $stateParams, $state, CreateTraining, $ionicHistory, ExercisesServ) {

    $scope.training = {}
    let clickedExc = null

    $scope.$on('$ionicView.beforeEnter', () => {   
        clickedExc = null
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

    $scope.addBreak = () => {
        const trainingBreak = ExercisesServ.getBreak()
        console.log(trainingBreak)
        trainingBreak.series = []
        console.log(trainingBreak)
        trainingBreak.series.push({"rep": null, "value": trainingBreak.default_rep})
        CreateTraining.addExc(trainingBreak)
        $scope.training = CreateTraining.newTraining
    }

    $scope.showPopupRemoveExercise = (index) => {
        console.log("Usuwanie")
        $scope.removePopup = true
        clickedExc = index
    }

    $scope.deleteExc = () => {
        console.log(clickedExc)
        console.log($scope.editTraining)
        CreateTraining.removeAt(clickedExc)
        $scope.training = CreateTraining.newTraining
        $scope.removePopup = false
    }

    $scope.cancelDelete = () => {
        $scope.removePopup = false
    }
}])