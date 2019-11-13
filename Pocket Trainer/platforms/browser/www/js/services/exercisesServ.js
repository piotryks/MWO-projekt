angular.module('app.services')

.service('ExercisesServ', ['$http', '$q', function($http, $q) {

    let listOfExercises = []

    this.getListOfExercises = () => {
        const deffer = $q.defer()
        if(listOfExercises.length === 0) {
            $http.get("lib/exercises/exercises.json").then((response) => {
                listOfExercises = response.data
                console.log(`%cList of Excercises:\n`, `background: black; color: white;`, listOfExercises)
                deffer.resolve(listOfExercises)
            })
        }
        else deffer.resolve(listOfExercises)

        return deffer.promise
    }

}])