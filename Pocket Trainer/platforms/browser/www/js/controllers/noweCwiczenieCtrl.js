angular.module('app.controllers')

.controller('noweCwiczenieCtrl', ['$scope', '$stateParams', 'Library',
function ($scope, $stateParams, Library) {

    $scope.exe = {}

    $scope.listOfMusclePart = Library.getMusclePart()
    $scope.listOfValueType = Library.getValueType()

    $scope.$on('$ionicView.beforeEnter', () => {       
        $scope.exe = {}
        console.log(`%cClear form`, `background: black; color: white`)
    });

    $scope.addNewExe = (exe) => {
        let listOfUserExe = []
        const userExe = JSON.parse(window.localStorage.getItem('userExe'))
        if(userExe != null) { listOfUserExe = userExe.value }
        let defaultVal = null
        // TIME
        if(exe.selectedType.id == 'TIME') {
            let minutes = 0
            let seconds = 0
            if(exe.time.minutes != null && exe.time.minutes > 0) {
                minutes = parseInt(exe.time.minutes)
            }
            if(exe.time.seconds != null && exe.time.seconds > 0) {
                seconds = parseInt(exe.time.seconds)
            }
            defaultVal = (minutes*60) + seconds
        }
        // DISTANCE
        if(exe.selectedType.id == 'DISTANCE') {
            let kilometers = 0
            let meters = 0
            if(exe.dist.kilometers != null && exe.dist.kilometers > 0) {
                kilometers = exe.dist.kilometers
            }
            if(exe.dist.meters != null && exe.dist.meters > 0) {
                meters = exe.dist.meters
            }
            defaultVal = (kilometers*1000) + meters
        }
        // REPS
        if(exe.selectedType.id == 'REPS') { defaultVal = exe.reps }

        // if(exe.reps > 0) { defaultVal = exe.reps }
        // else if(exe.distance > 0) { defaultVal = exe.distance }
        // else if(exe.time > 0) { defaultVal = exe.time }
        let jsonObject = {
            "name": exe.name,
            "exe_type": exe.selectedType.id,
            "muscle_part": exe.selectedMusclePart.id,
            "desc": exe.desc,
            "value_type": exe.selectedType.id,
            "default_rep": defaultVal
        }

        listOfUserExe.push(jsonObject)
        let json = {
            value: listOfUserExe
        }

        console.log("LISTA: ", json)
        window.localStorage.removeItem('userExe')
        window.localStorage.setItem('userExe', JSON.stringify(json))
    }

}])