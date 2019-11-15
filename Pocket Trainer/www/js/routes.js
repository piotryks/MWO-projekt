angular.module('app.routes', [])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      .state('menu', {
        url: '/side-menu21',
        templateUrl: 'templates/menu.html',
        controller: 'menuCtrl'
      })

      .state('menu.treningi', {
        url: '/page1',
        views: {
          'side-menu21': {
            templateUrl: 'templates/treningi.html',
            controller: 'treningiCtrl'
          }
        }
      })

      .state('menu.cwiczenia', {
        url: '/page2',
        views: {
          'side-menu21': {
            templateUrl: 'templates/cwiczenia.html',
            controller: 'cwiczeniaCtrl'
          }
        }
      })

      .state('menu.nazwaCwiczenia', {
        url: '/page3',
        views: {
          'side-menu21': {
            templateUrl: 'templates/nazwaCwiczenia.html',
            controller: 'nazwaCwiczeniaCtrl'
          }
        },
        params: {
          param: null
        }
      })

      .state('noweCwiczenie', {
        url: '/page4',
        templateUrl: 'templates/noweCwiczenie.html',
        controller: 'noweCwiczenieCtrl'
      })

      .state('menu.szczegolyTreningu', {
        url: '/page5',
        views: {
          'side-menu21': {
            templateUrl: 'templates/szczegolyTreningu.html',
            controller: 'szczegolyTreninguCtrl'
          }
        }
      })

      .state('trening', {
        url: '/page6',
        templateUrl: 'templates/trening.html',
        controller: 'treningCtrl'
      })

      .state('menu.edycjaTreningu', {
        url: '/page8',
        views: {
          'side-menu21': {
            templateUrl: 'templates/edycjaTreningu.html',
            controller: 'edycjaTreninguCtrl'
          }
        }
      })

      .state('menu.nowyTrening', {
        url: '/page9',
        views: {
          'side-menu21': {
            templateUrl: 'templates/nowyTrening.html',
            controller: 'nowyTreningCtrl'
          }
        }
      })

      .state('menu.listaCwiczenDoTreningu', {
        url: '/page10',
        views: {
          'side-menu21': {
            templateUrl: 'templates/listaCwiczenDoTreningu.html',
            controller: 'listaCwiczenDoTreninguCtrl'
          }
        }
      })

      .state('menu.ustawieniaCwiczenia', {
        url: '/page11',
        views: {
          'side-menu21': {
            templateUrl: 'templates/ustawieniaCwiczenia.html',
            controller: 'ustawieniaCwiczeniaCrtl'
          }
        },
        params: {
          exercise: null
        }
      })

    $urlRouterProvider.otherwise('/side-menu21/page1')

  });