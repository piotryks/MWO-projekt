angular.module('app.controllers')

.controller('listaCwiczenDoTreninguCtrl', ['$scope', '$stateParams', 'ExercisesServ', 'Library', '$state',
function ($scope, $stateParams, ExercisesServ, Library, $state) {

    $scope.listOfExercises = []
    let listOfUserExe = null

    $scope.$on('$ionicView.beforeEnter', () => {   
        console.log('Lista ćwiczeń do treningu')
        const storageJSON = JSON.parse(window.localStorage.getItem('userExe'))  
        if(storageJSON != null) { listOfUserExe = storageJSON.value }

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
        })
    });

    $scope.exeMusclePart = Library.getMusclePart()

    /**
     * Funkcja obsługująca wybór ćwiczenia
     */
    $scope.selectExc = (obj) => {
        $state.go('menu.ustawieniaCwiczenia', {exercise: obj})
    }
}])