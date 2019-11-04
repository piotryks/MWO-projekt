angular.module('app.controllers')

.controller('cwiczeniaCtrl', ['$scope', 'ExercisesServ', '$state',
function ($scope, ExercisesServ, $state) {

    $scope.listOfExercises = []

    ExercisesServ.getListOfExercises().then(data => {
        $scope.listOfExercises = data
    })


    $scope.exeType = [
        {
            "name": "Plecy",
            "typeId": "BACK" 
        },
        {
            "name": "Cardio",
            "typeId": "CARDIO"
        }
    ]

    $scope.goToExe = (obj) => {
        $state.go('menu.nazwaCwiczenia', {param: obj})
    }


}])