angular.module('app.controllers')

.controller('nazwaCwiczeniaCtrl', ['$scope', '$stateParams', 'Library', 'ExercisesServ', '$state',
function ($scope, $stateParams, Library, ExercisesServ, $state) {

    const muscleParts = Library.getMusclePart()
    $scope.distance = ""
    $scope.removePopup = false

    $scope.$on('$ionicView.beforeEnter', () => {      
        $scope.removePopup = false 
        $scope.infoExe = $stateParams.param
        console.log(`%cInfo Exercise:\n`, `background: black; color: white`, $scope.infoExe)
    });

    $scope.convertTime = (time) => {
        if(time <= 60) {
            return `${time}s`
        }
        else {
            let minutes =  Math.floor(time/60)
            let seconds = time-(minutes*60)
            if(seconds === 0) {
                return `${minutes}min`
            }
            return `${minutes}min ${pad(seconds)}s`
        }
    }

    $scope.convertDistance = (distance) => {
        if($scope.infoExe.value_type === 'DISTANCE') {
            console.log(distance)
            let kilometers = Math.floor(distance/1000)
            console.log("KM: ", kilometers)
            let meters = distance - (kilometers*1000)
            console.log("M: ", meters)
            if(kilometers === 0) { return `${meters}m` }
            else if(meters === 0) { return `${kilometers} km` }
            else { return `${kilometers}km ${meters}m` }
        }
    }

    function pad(n) {
        return (n < 10) ? ("0" + n) : n
    }

    $scope.translateMusclePart = (id) => {
        for (let index = 0; index < muscleParts.length; index++) {
            const element = muscleParts[index]
            if(element.id === id) { return element.name }
        }
    }
    
    $scope.showPopupRemoveExercise = () => {
        console.log("Usuwanie")
        $scope.removePopup = true
    }

    $scope.cancelDelete = () => {
        $scope.removePopup = false
    }

    $scope.deleteExercise = () => {
        console.log($scope.infoExe)
        ExercisesServ.removeUserExercise($scope.infoExe).then(response => {
            if(response) {
                $scope.removePopup = false
                $state.go('menu.cwiczenia')
            }
        },
        error => {
            console.log(error)
        })
    }

}])