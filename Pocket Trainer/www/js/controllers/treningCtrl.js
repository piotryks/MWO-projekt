angular.module('app.controllers')

    .controller('treningCtrl', ['$scope', 'ActualTraining',
        function ($scope, ActualTraining) {

            $scope.training = null
            $scope.isExTime = false
            $scope.actualExc = null
            $scope.toDo = 0
            let excId = 0
            $scope.timerValue = 0
            let timer
            $scope.isTimeCalc = false

            $scope.startTimer = () => {
                $scope.isTimeCalc = true
                timer = setTimeout(()=>{
                    $scope.timerValue = $scope.timerValue - 1
                    $scope.$apply()
                    if ($scope.timerValue == 0) {
                        cordova.plugins.notification.local.schedule({
                            title: 'Czas minął',
                            text: 'Koniec '+$scope.actualExc.name,
                            foreground: true
                        })
                        $scope.stopTimer()
                    }else{
                        $scope.startTimer()
                    }
                }, 1000)
            }

            $scope.stopTimer = () => {
                clearTimeout(timer)
                $scope.isTimeCalc = false
                $scope.$apply()
            }

            $scope.$on('$ionicView.beforeEnter', () => {
                $scope.training = ActualTraining.training
                if ($scope.training != null) {
                    $scope.actualExc = $scope.training.exc[excId]
                    if ($scope.actualExc.value_type == 'TIME') {
                        $scope.timerValue = $scope.actualExc.series[0].value
                    }
                    $scope.toDo = $scope.actualExc.series.length
                    $scope.isExTime = true
                }
                console.log('Trening: ', $scope.training)
            });

            $scope.isTime = (excVal) => {
                if (excVal == "TIME") {
                    return true
                } else {
                    return false
                }
            }

            $scope.beginExc = (exc) => {
                excId = $scope.training.exc.indexOf(exc)
                $scope.actualExc = $scope.training.exc[excId]
                $scope.toDo = $scope.actualExc.series.length
                if ($scope.actualExc.value_type == 'TIME') {
                    $scope.timerValue = $scope.actualExc.series[0].value
                }
                $scope.isExTime = true
            }

            $scope.changeExc = () => {
                $scope.isExTime = false
            }

            $scope.endExc = () => {
                $scope.training.exc[excId].done = true
                ActualTraining.training.exc[excId].done = true
                let end = true
                for (i = excId; i < $scope.training.exc.length; i++) {
                    if (!$scope.training.exc[i].done) {
                        excId = i
                        $scope.actualExc = $scope.training.exc[excId]
                        if ($scope.actualExc.value_type == 'TIME') {
                            $scope.timerValue = $scope.actualExc.series[0].value
                        }
                        $scope.toDo = $scope.actualExc.series.length
                        end = false
                        break
                    }
                }
                if (end) {
                    for (j in $scope.training.exc) {
                        if (!$scope.training.exc[j].done) {
                            excId = j
                            $scope.actualExc = $scope.training.exc[excId]
                            if ($scope.actualExc.value_type == 'TIME') {
                                $scope.timerValue = $scope.actualExc.series[0].value
                            }
                            $scope.toDo = $scope.actualExc.series.length
                            end = false
                            break
                        }
                    }
                }
                if (end) {
                    $scope.isExTime = false
                }
            }

            $scope.endSeries = () => {
                $scope.toDo = $scope.toDo - 1
                if ($scope.actualExc.value_type == 'TIME') {
                    $scope.timerValue = $scope.actualExc.series[$scope.actualExc.series.length - $scope.toDo].value
                }
            }

            $scope.getActualSeries = () => {
                if ($scope.toDo == $scope.actualExc.series.length) {
                    return $scope.actualExc.series[0]
                } else {
                    return $scope.actualExc.series[$scope.actualExc.series.length - $scope.toDo]
                }
            }

            $scope.convert = (value_type, seria) => {
                if (value_type === "TIME") {
                    if (seria.value < 60) {
                        return `${seria.value} s`
                    }
                    else {
                        let seconds = seria.value
                        let minutes = Math.floor(seconds / 60)
                        seconds = seconds - (minutes * 60)
                        if (seconds === 0) { return `${minutes} min` }
                        return `${minutes} min ${seconds} s`
                    }
                }
                else if (value_type === "REPS") {
                    return `${seria.rep} powt.`
                }
                else if (value_type === "DISTANCE") {
                    if (seria.value < 1000) {
                        return `${seria.value} m`
                    }
                    else {
                        let meters = seria.value
                        let km = Math.floor(meters / 1000)
                        meters = meters - (km * 1000)
                        if (meters === 0) { return `${km} km` }
                        else return `${km} km ${meters} m`
                    }
                }
            }

        }])