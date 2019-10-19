angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

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

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.nazwaWiczenia', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nazwaWiczenia.html',
        controller: 'nazwaWiczeniaCtrl'
      }
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

  .state('menu.trening', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trening.html',
        controller: 'treningCtrl'
      }
    }
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

$urlRouterProvider.otherwise('/side-menu21/page1')


});