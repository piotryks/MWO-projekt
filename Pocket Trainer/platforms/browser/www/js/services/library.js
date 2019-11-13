angular.module('app.services')

.service('Library', [function() { 

    const exeType = ["CALISTHENIC", "CARDIO", "STRENGTH"]
    
    const musclePart = 
    [
        {
            "name": "ABS",
            "id": "ABS"
        },
        {
            "name": "Biceps",
            "id": "BICEPS"
        },
        {
            "name": "Klatka",
            "id": "CHEST"
        },
        {
            "name": "Nogi",
            "id": "LEGS"
        },
        {
            "name": "Plecy",
            "id": "BACK"
        },
        {
            "name": "Pośladki",
            "id": "BOOTY"
        },
        {
            "name": "Trening obwodowy",
            "id": "CIRCULAR"
        }
    ]

    const valueType = 
    [
        {
            "name": "Czas",
            "id": "TIME"
        },
        {
            "name": "Dystans",
            "id": "DISTANCE"
        },
        {
            "name": "Powtórzenia",
            "id": "REPS"
        }
    ]

    
    this.getExeType = () => { return exeType }

    this.getMusclePart = () => { return musclePart }

    this.getValueType = () => { return valueType }
}])