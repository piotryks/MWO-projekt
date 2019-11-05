angular.module('app.controllers')

.controller('nazwaCwiczeniaCtrl', ['$scope', '$stateParams', 'Library',
function ($scope, $stateParams, Library) {

    const muscleParts = Library.getMusclePart()

    $scope.$on('$ionicView.beforeEnter', () => {       
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
            return `${minutes}min ${pad(seconds)}s`
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
    

}])