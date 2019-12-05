angular.module('app.services')

.service('ExercisesServ', ['$http', '$q', function($http, $q) {

    let listOfExercises = []
    let trainingBreak = null

    this.getListOfExercises = () => {
        const deffer = $q.defer()
        if(listOfExercises.length === 0) {
            $http.get("lib/exercises/exercises.json").then((response) => {
                listOfExercises = response.data
                console.log(`%cList of Excercises:\n`, `background: black; color: white;`, listOfExercises)
                if(listOfExercises[0].name === "Przerwa" && listOfExercises[0].exe_type === null) {
                    trainingBreak = listOfExercises[0]
                }
                else {
                    listOfExercises.forEach(element => {
                        if(element.name === "Przerwa" && element.exe_type === null) {
                            trainingBreak = element
                        }
                    })
                }
                deffer.resolve(listOfExercises)
            })
        }
        else deffer.resolve(listOfExercises)

        return deffer.promise
    }

    this.removeUserExercise = (exercise) => {
        const deffer = $q.defer()
        let list = null
        let storageJSON = JSON.parse(window.localStorage.getItem('userExe'))
        if(storageJSON != null) { 
            list = storageJSON.value 
            list.forEach((element, index) => {
                if(exercise.name === element.name && exercise.exe_type === element.exe_type) {
                    list.splice(index, 1)
                    
                    let json = {
                        value: list
                    }
                    window.localStorage.removeItem('userExe')
                    window.localStorage.setItem('userExe', JSON.stringify(json))
                    deffer.resolve(true)
                }
            });
        }
        else deffer.reject(false)

        return deffer.promise
    }

    this.getBreak = () => {
        return trainingBreak
    }

}])