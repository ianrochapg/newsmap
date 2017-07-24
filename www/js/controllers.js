angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('HomeController', function($scope, $state) {
  $scope.home = [
    {id: 1, title: 'Brasil', pagina: 'brasil'},
    {id: 2, title: 'Argentina', pagina: 'argentina'},
    {id: 3, title: 'Austrália', pagina: 'australia'},
    {id: 4, title: 'Canadá', pagina: 'canada'},
    {id: 5, title: 'Espanha', pagina: 'espanha'},
    {id: 6, title: 'Estados Unidos', pagina: 'eua'},
    {id: 7, title: 'França', pagina: 'franca'},
    {id: 8, title: 'Itália', pagina: 'italia'},
    {id: 9, title: 'Japão', pagina: 'japao'},
    {id: 10, title: 'México', pagina: 'mexico'},
    {id: 11, title: 'Reino Unido', pagina: 'reinounido'},
    {id: 12, title: 'Venezuela', pagina: 'venezuela'}
  ];

  $scope.acessar = function(pagina){
    $state.go('app.'+pagina);
  }
})

.controller('FavoritesController', function($scope, $state) {
  $scope.favorites = [
    {id: 1, title: 'Brasil', pagina: 'brasil'},
    {id: 2, title: 'Argentina', pagina: 'argentina'},
    {id: 3, title: 'Austrália', pagina: 'australia'},
    {id: 4, title: 'Canadá', pagina: 'canada'},
    {id: 5, title: 'Espanha', pagina: 'espanha'},
    {id: 6, title: 'Estados Unidos', pagina: 'eua'},
    {id: 7, title: 'França', pagina: 'franca'},
    {id: 8, title: 'Itália', pagina: 'italia'},
    {id: 9, title: 'Japão', pagina: 'japao'},
    {id: 10, title: 'México', pagina: 'mexico'},
    {id: 11, title: 'Reino Unido', pagina: 'reinounido'},
    {id: 12, title: 'Venezuela', pagina: 'venezuela'}
  ];

  $scope.acessar = function(pagina){
    $state.go('app.'+pagina);
  }
})

.controller('BrasilController', function($scope, $state) {
  $scope.brasil = [
    {id: 1, paper: 'Folha', pagina: 'folha'},
    {id: 1, paper: 'Globo', pagina: 'g1'},
    {id: 1, paper: 'Estadão', pagina: 'estadao'},
    {id: 1, paper: 'O Tempo', pagina: 'otempo'},
    {id: 1, paper: 'O Globo', pagina: 'oglobo'},
  ];



  $scope.acessar = function(pagina){
    $state.go('app.'+ pagina);
  };
})

.controller('G1Controller', function($scope, $http) {
  $scope.noticias = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.noticias = response;
  });
  // função para abrir link no app
  $scope.abrirApp = function (url) {
    cordova.InAppBrowser.open(url)
  }
})

.controller('FolhaController', function($scope, $http) {
  $scope.noticias = [];
  $http.get('http://174.138.76.133:3000/brasil/folha').success(function(response){
    $scope.noticias = response;
  });
  $scope.abrirApp = function (url) {
    cordova.InAppBrowser.open(url)
  }
})

.controller('EstadaoController', function($scope, $http) {
  $scope.noticias = [];
  $http.get('http://174.138.76.133:3000/brasil/estadao').success(function(response){
    $scope.noticias = response;
  });
  $scope.abrirApp = function (url) {
    cordova.InAppBrowser.open(url)
  }
})

.controller('ArgentinaController', function($scope, $state) {
  $scope.argentina = [
    {id: 1, paper: 'Clarín', pagina: 'clarin'},
    {id: 1, paper: 'La Nación', pagina: 'lanacion'},
    {id: 1, paper: 'Los Andes', pagina: 'losandes'},
    {id: 1, paper: 'La Voz', pagina: 'lavoz'},
  ];
  $scope.acessar = function(pagina){
    $state.go('app.'+pagina);
  }
})

.controller('AustraliaController', function($scope, $state) {
  $scope.australia = [
    {id: 1, paper: 'The Age', pagina: 'theage'},
    {id: 1, paper: 'Daily Telegraph', pagina: 'telegraph'},
    {id: 1, paper: 'Courier Mail', pagina: 'couriermail'},
    {id: 1, paper: 'The Sydney Morning Herald', pagina: 'sydneyherald'},
    {id: 1, paper: 'Herald Sun', pagina: 'heraldsun'},
  ];
  $scope.acessar = function(pagina){
    $state.go('app.'+pagina);
  }
})

.controller('CanadaController', function($scope, $state) {
  $scope.canada = [
    {id: 1, paper: 'Toronto Star', pagina: 'torontostar'},
    {id: 1, paper: 'Vancouver Sun', pagina: 'vancouversun'},
    {id: 1, paper: 'Metro News Canada', pagina: 'metronews'},
    {id: 1, paper: 'National Post', pagina: 'nationalpost'},
    {id: 1, paper: 'Ottawa Citizen', pagina: 'ottawacitizen'},
  ];
  $scope.acessar = function(pagina){
    $state.go('app.'+pagina);
  }
})
/*Passar '$interval' como parâmetro na função e colocar a função
que eu quero que seja repetida dentro do $interval. Exemplo:
"$interval()"*/

.controller('EspanhaController', function($scope, $state) {
  $scope.espanha = [
    {id: 1, paper: 'El País', pagina: 'elpais'},
    {id: 1, paper: 'El Mundo', pagina: 'elmundo'},
    {id: 1, paper: 'La Vanguardia', pagina: 'lavanguardia'},
    {id: 1, paper: 'ABC España', pagina: 'abcespana'},
    {id: 1, paper: 'El Correo', pagina: 'elcorreo'},
  ];
  $scope.acessar = function(pagina){
    $state.go('app.'+pagina);
  }
})

.controller('ElpaisController', function($scope, $http) {
  $scope.noticias = [];
  $http.get('http://174.138.76.133:3000/espanha/elpais').success(function(response){
    $scope.noticias = response;
  });
  $scope.abrirApp = function (url) {
    cordova.InAppBrowser.open(url)
  }
})

.controller('ElmundoController', function($scope, $http) {
  $scope.noticias = [];
  $http.get('http://174.138.76.133:3000/espanha/elmundo').success(function(response){
    $scope.noticias = response;
  });
  $scope.abrirApp = function (url) {
    cordova.InAppBrowser.open(url)
  }
})

.controller('LavanController', function($scope, $http) {
  $scope.noticias = [];
  $http.get('http://174.138.76.133:3000/espanha/lavanguardia').success(function(response){
    $scope.noticias = response;
  });
  $scope.abrirApp = function (url) {
    cordova.InAppBrowser.open(url)
  }
})

.controller('EUAController', function($scope, $state) {
  $scope.eua = [
    {id: 1, paper: 'The New York Times', pagina: 'nyt'},
    {id: 1, paper: 'USA Today', pagina: 'usatoday'},
    {id: 1, paper: 'Washington Post', pagina: 'washpost'},
    {id: 1, paper: 'New York Daily News', pagina: 'nydailynews'},
    {id: 1, paper: 'The Wall Street Journal', pagina: 'twsj'},
  ];
  $scope.acessar = function(pagina){
    $state.go('app.'+pagina);
  }
})

.controller('NytController', function($scope, $http) {
  $scope.noticias = [];
  $http.get('http://174.138.76.133:3000/eua/nyt').success(function(response){
    $scope.noticias = response;
  });
  $scope.abrirApp = function (url) {
    cordova.InAppBrowser.open(url)
  }
})

.controller('CaliforniaController', function($scope, $http) {
  $scope.noticias = [];
  $http.get('http://174.138.76.133:3000/eua/california').success(function(response){
    $scope.noticias = response;
  });
  $scope.abrirApp = function (url) {
    cordova.InAppBrowser.open(url)
  }
})

.controller('WashController', function($scope, $http) {
  $scope.noticias = [];
  $http.get('http://174.138.76.133:3000/eua/washpost').success(function(response){
    $scope.noticias = response;
  });
  $scope.abrirApp = function (url) {
    cordova.InAppBrowser.open(url)
  }
})

.controller('FrancaController', function($scope, $state) {
  $scope.franca = [
    {id: 1, paper: 'Le Monde', pagina: 'lemonde'},
    {id: 1, paper: 'Le Figaro', pagina: 'lefigaro'},
    {id: 1, paper: 'Le Parisien', pagina: 'leparisien'},
    {id: 1, paper: 'Ouest France', pagina: 'ouestfrance'},
    {id: 1, paper: "L'Express FR", pagina: 'lexpressfr'},
  ];
  $scope.acessar = function(pagina){
    $state.go('app.'+pagina);
  }
})

.controller('ItaliaController', function($scope, $state) {
  $scope.italia = [
    {id: 1, paper: 'La Stampa', pagina: 'lastampa'},
    {id: 1, paper: 'La Repubblica', pagina: 'larepubblica'},
    {id: 1, paper: 'Corriere Della Sera', pagina: 'cds'},
    {id: 1, paper: 'Il Sole 24 Ore', pagina: 'ilsole'},
    {id: 1, paper: 'Il Messaggero', pagina: 'ilmessaggero'},
  ];
  $scope.acessar = function(pagina){
    $state.go('app.'+pagina);
  }
})

.controller('JapaoController', function($scope, $state) {
  $scope.japao = [
    {id: 1, paper: 'NHK Online', pagina: 'nhkonline'},
    {id: 1, paper: 'The Japan Times', pagina: 'thejapantimes'},
    {id: 1, paper: 'Asia Nikkei', pagina: 'asianikkei'},
    {id: 1, paper: 'Japan Today', pagina: 'japantoday'},
    {id: 1, paper: 'Asahi Shimbun', pagina: 'asahishimbun'},
  ];
  $scope.acessar = function(pagina){
    $state.go('app.'+pagina);
  }
})

.controller('MexicoController', function($scope, $state) {
  $scope.mexico = [
    {id: 1, paper: 'La Jornada', pagina: 'lajornada'},
    {id: 1, paper: 'Reforma', pagina: 'reforma'},
    {id: 1, paper: 'El Universal', pagina: 'eluniversal'},
  ];
  $scope.acessar = function(pagina){
    $state.go('app.'+pagina);
  }
})

.controller('ReinoUnidoController', function($scope, $state) {
  $scope.reinounido = [
    {id: 1, paper: 'The Daily Mail UK', pagina: 'tdmuk'},
    {id: 1, paper: 'Metro UK', pagina: 'metrouk'},
    {id: 1, paper: 'BBC', pagina: 'bbc'},
    {id: 1, paper: 'The Guardian', pagina: 'theguardian'},
    {id: 1, paper: 'The Independent', pagina: 'theindependent'},
  ];
  $scope.acessar = function(pagina){
    $state.go('app.'+pagina);
  }
})

.controller('VenezuelaController', function($scope, $state) {
  $scope.venezuela = [
    {id: 1, paper: 'La Patilla', pagina: 'lapatilla'},
    {id: 1, paper: 'El Mundo', pagina: 'elmundo'},
    {id: 1, paper: 'La Vanguardia', pagina: 'lavanguardia'},
  ];
  $scope.acessar = function(pagina){
    $state.go('app.'+pagina);
  }
})
