// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

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
        controller: 'PaisController'
      }
    }
  })

  .state('app.g1', {
    url: '/brasil/g1',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/brasil/g1.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.folha', {
    url: '/brasil/folha',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/brasil/folha.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.estadao', {
    url: '/brasil/estadao',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/brasil/estadao.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.oglobo', {
    url: '/brasil/oglobo',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/brasil/oglobo.html',
        controller: 'JornalController'
      }
    }
  })


  .state('app.otempo', {
    url: '/brasil/otempo',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/brasil/otempo.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.argentina', {
    url: '/argentina',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/argentina/argentina.html',
        controller: 'PaisController'
      }
    }
  })

  .state('app.clarin', {
    url: '/argentina/clarin',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/argentina/clarin.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.lanacion', {
    url: '/argentina/lanacion',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/argentina/lanacion.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.losandes', {
    url: '/argentina/losandes',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/argentina/losandes.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.lavoz', {
    url: '/argentina/lavoz',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/argentina/lavoz.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.australia', {
    url: '/australia',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/australia/australia.html',
        controller: 'PaisController'
      }
    }
  })

  .state('app.theage', {
    url: '/australia/theage',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/australia/theage.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.telegraph', {
    url: '/australia/telegraph',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/australia/telegraph.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.couriermail', {
    url: '/australia/couriermail',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/australia/couriermail.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.sydneyherald', {
    url: '/australia/sydneyherald',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/australia/sydneyherald.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.heraldsun', {
    url: '/australia/heraldsun',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/australia/heraldsun.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.canada', {
    url: '/canada',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/canada/canada.html',
        controller: 'PaisController'
      }
    }
  })

  .state('app.torontostar', {
    url: '/canada/torontostar',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/canada/torontostar.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.vancouversun', {
    url: '/canada/vancouversun',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/canada/vancouversun.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.metronews', {
    url: '/canada/metronews',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/canada/metronews.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.nationalpost', {
    url: '/canada/nationalpost',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/canada/nationalpost.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.ottawacitizen', {
    url: '/canada/ottawacitizen',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/canada/ottawacitizen.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.espanha', {
    url: '/espanha',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/espanha/espanha.html',
        controller: 'PaisController'
      }
    }
  })

  .state('app.elpais', {
    url: '/espanha/elpais',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/espanha/elpais.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.elmundo', {
    url: '/espanha/elmundo',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/espanha/elmundo.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.lavanguardia', {
    url: '/espanha/lavanguardia',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/espanha/lavanguardia.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.abcespana', {
    url: '/espanha/abcespana',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/espanha/abcespana.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.elcorreo', {
    url: '/espanha/elcorreo',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/espanha/elcorreo.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.eua', {
    url: '/eua',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/eua/eua.html',
        controller: 'PaisController'
      }
    }
  })

  .state('app.nyt', {
    url: '/eua/nyt',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/eua/nyt.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.nydailynews', {
    url: '/eua/nydailynews',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/eua/nydailynews.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.washpost', {
    url: '/eua/washpost',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/eua/washpost.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.usatoday', {
    url: '/eua/usatoday',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/eua/usatoday.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.twsj', {
    url: '/eua/twsj',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/eua/twsj.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.franca', {
    url: '/franca',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/franca/franca.html',
        controller: 'PaisController'
      }
    }
  })

  .state('app.lemonde', {
    url: '/franca/lemonde',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/franca/lemonde.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.lefigaro', {
    url: '/franca/lefigaro',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/franca/lefigaro.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.leparisien', {
    url: '/franca/leparisien',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/franca/leparisien.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.lexpressfr', {
    url: '/franca/lexpressfr',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/franca/lexpressfr.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.ouestfrance', {
    url: '/franca/ouestfrance',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/franca/ouestfrance.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.italia', {
    url: '/italia',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/italia/italia.html',
        controller: 'PaisController'
      }
    }
  })

  .state('app.lastampa', {
    url: '/italia/lastampa',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/italia/lastampa.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.larepubblica', {
    url: '/italia/larepubblica',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/italia/larepubblica.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.cds', {
    url: '/italia/cds',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/italia/cds.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.ilsole', {
    url: '/italia/ilsole',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/italia/ilsole.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.ilmessaggero', {
    url: '/italia/ilmessaggero',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/italia/ilmessaggero.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.japao', {
    url: '/japao',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/japao/japao.html',
        controller: 'PaisController'
      }
    }
  })

  .state('app.nhkonline', {
    url: '/japao/nhkonline',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/japao/nhkonline.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.thejapantimes', {
    url: '/japao/thejapantimes',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/japao/thejapantimes.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.asianikkei', {
    url: '/japao/asianikkei',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/japao/asianikkei.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.japantoday', {
    url: '/japao/japantoday',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/japao/japantoday.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.asahishimbun', {
    url: '/japao/asahishimbun',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/japao/asahishimbun.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.mexico', {
    url: '/mexico',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/mexico/mexico.html',
        controller: 'PaisController'
      }
    }
  })

  .state('app.lajornada', {
    url: '/mexico/lajornada',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/mexico/lajornada.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.reforma', {
    url: '/mexico/reforma',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/mexico/reforma.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.eluniversalmx', {
    url: '/mexico/eluniversalmx',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/mexico/eluniversalmx.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.reinounido', {
    url: '/reinounido',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/reinounido/reinounido.html',
        controller: 'PaisController'
      }
    }
  })

  .state('app.tdmuk', {
    url: '/reinounido/tdmuk',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/reinounido/tdmuk.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.metrouk', {
    url: '/reinounido/metrouk',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/reinounido/metrouk.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.bbc', {
    url: '/reinounido/bbc',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/reinounido/bbc.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.theguardian', {
    url: '/reinounido/theguardian',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/reinounido/theguardian.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.theindependent', {
    url: '/reinounido/theindependent',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/reinounido/theindependent.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.venezuela', {
    url: '/venezuela',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/venezuela/venezuela.html',
        controller: 'PaisController'
      }
    }
  })

  .state('app.lapatilla', {
    url: '/venezuela/lapatilla',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/venezuela/lapatilla.html',
        controller: 'JornalController'
      }
    }
  })

  .state('app.eluniversal', {
    url: '/venezuela/eluniversal',
    views: {
      'menuContent': {
        templateUrl: 'templates/paises/venezuela/eluniversal.html',
        controller: 'JornalController'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
