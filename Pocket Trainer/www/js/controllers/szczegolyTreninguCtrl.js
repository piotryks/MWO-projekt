angular.module('app.controllers')

    .controller('szczegolyTreninguCtrl', ['$scope', '$stateParams',
        function ($scope, $stateParams) {

            $scope.training = {}

            $scope.$on('$ionicView.beforeEnter', () => {   
                $scope.training = $stateParams.training
                console.log('Trening: ',$scope.training)
            });

            $scope.convert = (value_type, seria) => {
                if(value_type === "TIME") {
                    if(seria.value < 60) {
                        return `${seria.value} s`
                    }
                    else {
                        let seconds =  seria.value
                        let minutes = Math.floor(seconds/60)
                        seconds = seconds - (minutes*60)
                        if(seconds === 0) { return `${minutes} min`}
                        return `${minutes} min ${seconds} s` 
                    }
                }
                else if(value_type === "REPS") {
                    return `${seria.rep} powt.`
                }
                else if(value_type === "DISTANCE") {
                    if(seria.value < 1000) {
                        return `${seria.value} m`
                    }
                    else {
                        let meters = seria.value
                        let km = Math.floor(meters/1000)
                        meters = meters - (km*1000)
                        if(meters === 0) { return `${km} km` }
                        else return `${km} km ${meters} m`
                    }
                }
            }

        }])