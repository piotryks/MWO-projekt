angular.module('app.services')

    .service('CreateTraining', ['$http', '$q',
        function ($http, $q) {

            this.edit = false
            this.editID = {}

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
                this.newExc = {}
                this.edit = false
                this.newTraining = {
                    name: "",
                    desc: "",
                    exc: ""
                }    
            }
            
            this.removeAt = (index) => {
                if(this.newTraining.exc) {
                    this.newTraining.exc.splice(index, 1)
                }
            }

        }])