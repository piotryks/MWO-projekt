angular.module('app.controllers')

.controller('cwiczeniaCtrl', ['$scope', 'ExercisesServ', '$state', 'Library',
function ($scope, ExercisesServ, $state, Library) {

    $scope.listOfExercises = []
    let listOfUserExe

    $scope.$on('$ionicView.beforeEnter', () => {  
        // window.localStorage.clear()
        listOfUserExe = window.localStorage.getItem('listOfUserExe')  
        console.log('listofUserExe', listOfUserExe)
        ExercisesServ.getListOfExercises().then(data => {
            let temp = []
            if(listOfUserExe != null) {
                temp = data.concat(listOfUserExe)
            }
            else { temp = data }

            if($scope.listOfExercises.length <= 0) {
                if(listOfUserExe != null) {
                    $scope.listOfExercises = data.concat(listOfUserExe)
                }
                else { $scope.listOfExercises = data }
            } 
            else if($scope.listOfExercises.length != temp.length) {
                $scope.listOfExercises = temp
            }
            console.log($scope.listOfExercises)
        })   
    });


    $scope.exeMusclePart = Library.getMusclePart()

    $scope.goToExe = (obj) => {
        $state.go('menu.nazwaCwiczenia', {param: obj})
    }


}])