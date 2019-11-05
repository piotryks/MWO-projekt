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
        listOfUserExe = window.localStorage.getItem('listOfUserExe')
        console.log(listOfUserExe)
        let defaultVal = null
        if(exe.reps > 0) { defaultVal = exe.reps }
        else if(exe.distance > 0) { defaultVal = exe.distance }
        else if(exe.time > 0) { defaultVal = exe.time }
        let jsonObject = {
            "name": exe.name,
            "exe_type": exe.selectedType.id,
            "muscle_part": exe.selectedMusclePart.id,
            "desc": exe.desc,
            "value_type": "",
            "default_rep": defaultVal
        }
        if(listOfUserExe == null) { listOfUserExe = [] }
        listOfUserExe.push(jsonObject)
        console.log("LISTA: ", listOfUserExe)
        window.localStorage.removeItem('listOfUserExe')
        window.localStorage.setItem('listOfUserExe', listOfUserExe)
    }

}])