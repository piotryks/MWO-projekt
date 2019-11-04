angular.module('app.controllers')

.controller('nazwaCwiczeniaCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {

    $scope.$on('$ionicView.beforeEnter',function(){       
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
    

}])