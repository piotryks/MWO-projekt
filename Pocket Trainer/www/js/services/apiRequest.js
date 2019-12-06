angular.module('app.services')

    .service('ApiRequest', ['$http', '$q',
        function ($http, $q) {

            this.testoweZapytanie = () => {
                var q = $q.defer();

                $http.get('http://127.0.0.1:8000/api').then(result => {
                    console.log(result)
                    q.resolve(result)
                }, error => {
                    console.log(error)
                    q.reject()
                })
                return q.promise;
            }

        }])