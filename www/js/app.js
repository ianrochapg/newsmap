// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'leaflet-directive'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.favorites', {
    url: '/favorites',
    views: {
      'menuContent': {
        templateUrl: 'templates/favorites.html',
        controller: 'FavoritesController'
      }
    }
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      }
    }
  })

  .state('app.brasil', {
    url: '/brasil',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/brasil/brasil.html',
        controller: 'BrasilController'
      }
    }
  })

  .state('app.g1', {
    url: '/brasil/g1',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/brasil/g1.html',
        controller: 'G1Controller'
      }
    }
  })

  .state('app.folha', {
    url: '/brasil/folha',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/brasil/folha.html',
        controller: 'FolhaController'
      }
    }
  })

  .state('app.estadao', {
    url: '/brasil/estadao',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/brasil/estadao.html',
        controller: 'EstadaoController'
      }
    }
  })

  .state('app.argentina', {
    url: '/argentina',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/argentina/argentina.html',
        controller: 'ArgentinaController'
      }
    }
  })

  .state('app.australia', {
    url: '/australia',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/australia/australia.html',
        controller: 'AustraliaController'
      }
    }
  })

  .state('app.canada', {
    url: '/canada',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/canada/canada.html',
        controller: 'CanadaController'
      }
    }
  })

  .state('app.espanha', {
    url: '/espanha',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/espanha/espanha.html',
        controller: 'EspanhaController'
      }
    }
  })

  .state('app.elpais', {
    url: '/espanha/elpais',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/espanha/elpais.html',
        controller: 'ElpaisController'
      }
    }
  })

  .state('app.elmundo', {
    url: '/espanha/elmundo',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/espanha/elmundo.html',
        controller: 'ElmundoController'
      }
    }
  })

  .state('app.lavanguardia', {
    url: '/espanha/lavanguardia',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/espanha/lavanguardia.html',
        controller: 'LavanController'
      }
    }
  })

  .state('app.eua', {
    url: '/eua',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/eua/eua.html',
        controller: 'EUAController'
      }
    }
  })

  .state('app.nyt', {
    url: '/eua/nyt',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/eua/nyt.html',
        controller: 'NytController'
      }
    }
  })

  .state('app.california', {
    url: '/eua/california',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/eua/california.html',
        controller: 'CaliforniaController'
      }
    }
  })

  .state('app.washpost', {
    url: '/eua/washpost',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/eua/washpost.html',
        controller: 'WashController'
      }
    }
  })

  .state('app.franca', {
    url: '/franca',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/franca/franca.html',
        controller: 'FrancaController'
      }
    }
  })

  .state('app.italia', {
    url: '/italia',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/italia/italia.html',
        controller: 'ItaliaController'
      }
    }
  })

  .state('app.japao', {
    url: '/japao',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/japao/japao.html',
        controller: 'JapaoController'
      }
    }
  })

  .state('app.mexico', {
    url: '/mexico',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/mexico/mexico.html',
        controller: 'MexicoController'
      }
    }
  })

  .state('app.reinounido', {
    url: '/reinounido',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/reinounido/reinounido.html',
        controller: 'ReinoUnidoController'
      }
    }
  })

  .state('app.venezuela', {
    url: '/venezuela',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/venezuela/venezuela.html',
        controller: 'VenezuelaController'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
