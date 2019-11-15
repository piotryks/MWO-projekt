angular.module('app.services')

    .service('CreateTraining', ['$http', '$q',
        function ($http, $q) {

            this.newTraining = {
                name: "",
                desc: "",
                exc: ""
            }

            this.addExc = (exc) => {
                if(this.newTraining.exc){
                    this.newTraining.exc.push(exc)
                }else{
                    this.newTraining.exc = [exc]
                }
            }

            this.resetData = () => {
                this.isNewExc = false
                this.newExc = {}
                this.newTraining = {
                    name: "",
                    desc: "",
                    exc: ""
                }    
            }

        }])