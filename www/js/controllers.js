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

.controller('PaisController', function($scope, $state) {
  $scope.brasil = [
    {id: 1, paper: 'Folha', pagina: 'folha'},
    {id: 1, paper: 'Globo', pagina: 'g1'},
    {id: 1, paper: 'Estadão', pagina: 'estadao'},
    {id: 1, paper: 'O Tempo', pagina: 'otempo'},
    {id: 1, paper: 'O Globo', pagina: 'oglobo'},
  ];

  $scope.argentina = [
    {id: 1, paper: 'Clarín', pagina: 'clarin'},
    {id: 1, paper: 'La Nación', pagina: 'lanacion'},
    {id: 1, paper: 'Los Andes', pagina: 'losandes'},
    {id: 1, paper: 'La Voz', pagina: 'lavoz'},
  ];

  $scope.australia = [
    {id: 1, paper: 'The Age', pagina: 'theage'},
    {id: 1, paper: 'Daily Telegraph', pagina: 'telegraph'},
    {id: 1, paper: 'Courier Mail', pagina: 'couriermail'},
    {id: 1, paper: 'The Sydney Morning Herald', pagina: 'sydneyherald'},
    {id: 1, paper: 'Herald Sun', pagina: 'heraldsun'},
  ];

  $scope.canada = [
    {id: 1, paper: 'Toronto Star', pagina: 'torontostar'},
    {id: 1, paper: 'Vancouver Sun', pagina: 'vancouversun'},
    {id: 1, paper: 'Metro News Canada', pagina: 'metronews'},
    {id: 1, paper: 'National Post', pagina: 'nationalpost'},
    {id: 1, paper: 'Ottawa Citizen', pagina: 'ottawacitizen'},
  ];

  $scope.espanha = [
    {id: 1, paper: 'El País', pagina: 'elpais'},
    {id: 1, paper: 'El Mundo', pagina: 'elmundo'},
    {id: 1, paper: 'La Vanguardia', pagina: 'lavanguardia'},
    {id: 1, paper: 'ABC España', pagina: 'abcespana'},
    {id: 1, paper: 'El Correo', pagina: 'elcorreo'},
  ];

  $scope.eua = [
    {id: 1, paper: 'The New York Times', pagina: 'nyt'},
    {id: 1, paper: 'USA Today', pagina: 'usatoday'},
    {id: 1, paper: 'Washington Post', pagina: 'washpost'},
    {id: 1, paper: 'New York Daily News', pagina: 'nydailynews'},
    {id: 1, paper: 'The Wall Street Journal', pagina: 'twsj'},
  ];

  $scope.franca = [
    {id: 1, paper: 'Le Monde', pagina: 'lemonde'},
    {id: 1, paper: 'Le Figaro', pagina: 'lefigaro'},
    {id: 1, paper: 'Le Parisien', pagina: 'leparisien'},
    {id: 1, paper: 'Ouest France', pagina: 'ouestfrance'},
    {id: 1, paper: "L'Express FR", pagina: 'lexpressfr'},
  ];

  $scope.italia = [
    {id: 1, paper: 'La Stampa', pagina: 'lastampa'},
    {id: 1, paper: 'La Repubblica', pagina: 'larepubblica'},
    {id: 1, paper: 'Corriere Della Sera', pagina: 'cds'},
    {id: 1, paper: 'Il Sole 24 Ore', pagina: 'ilsole'},
    {id: 1, paper: 'Il Messaggero', pagina: 'ilmessaggero'},
  ];

  $scope.japao = [
    {id: 1, paper: 'NHK Online', pagina: 'nhkonline'},
    {id: 1, paper: 'The Japan Times', pagina: 'thejapantimes'},
    {id: 1, paper: 'Asia Nikkei', pagina: 'asianikkei'},
    {id: 1, paper: 'Japan Today', pagina: 'japantoday'},
    {id: 1, paper: 'Asahi Shimbun', pagina: 'asahishimbun'},
  ];

  $scope.mexico = [
    {id: 1, paper: 'La Jornada', pagina: 'lajornada'},
    {id: 1, paper: 'Reforma', pagina: 'reforma'},
    {id: 1, paper: 'El Universal', pagina: 'eluniversalmx'},
  ];

  $scope.reinounido = [
    {id: 1, paper: 'The Daily Mail UK', pagina: 'tdmuk'},
    {id: 1, paper: 'Metro UK', pagina: 'metrouk'},
    {id: 1, paper: 'BBC', pagina: 'bbc'},
    {id: 1, paper: 'The Guardian', pagina: 'theguardian'},
    {id: 1, paper: 'The Independent', pagina: 'theindependent'},
  ];

  $scope.venezuela = [
    {id: 1, paper: 'La Patilla', pagina: 'lapatilla'},
    {id: 1, paper: 'El Universal', pagina: 'eluniversal'},
  ];

  $scope.acessar = function(pagina){
    $state.go('app.'+ pagina);
  };
})

.controller('JornalController', function($scope, $http) {
  $scope.g1 = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.g1 = response;
  });

  $scope.folha = [];
  $http.get('http://174.138.76.133:3000/brasil/folha').success(function(response){
    $scope.folha = response;
  });

  $scope.estadao = [];
  $http.get('http://174.138.76.133:3000/brasil/estadao').success(function(response){
    $scope.estadao = response;
  });

  $scope.otempo = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.otempo = response;
  });

  $scope.oglobo = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.oglobo = response;
  });

  $scope.clarin = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.clarin = response;
  });

  $scope.lanacion = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.lanacion = response;
  });

  $scope.losandes = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.losandes = response;
  });

  $scope.lavoz = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.lavoz = response;
  });

  $scope.theage = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.theage = response;
  });

  $scope.telegraph = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.telegraph = response;
  });

  $scope.couriermail = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.couriermail = response;
  });

  $scope.sydneyherald = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.sydneyherald = response;
  });

  $scope.heraldsun = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.heraldsun = response;
  });

  $scope.torontostar = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.torontostar = response;
  });

  $scope.vancouversun = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.vancouversun = response;
  });

  $scope.metronews = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.metronews = response;
  });

  $scope.nationalpost = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.nationalpost = response;
  });

  $scope.ottawacitizen = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.ottawacitizen = response;
  });

  $scope.elpais = [];
  $http.get('http://174.138.76.133:3000/espanha/elpais').success(function(response){
    $scope.elpais = response;
  });

  $scope.elmundo = [];
  $http.get('http://174.138.76.133:3000/espanha/elmundo').success(function(response){
    $scope.elmundo = response;
  });

  $scope.lavan = [];
  $http.get('http://174.138.76.133:3000/espanha/lavanguardia').success(function(response){
    $scope.lavan = response;
  });

  $scope.abcespana = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.abcespana = response;
  });

  $scope.elcorreo = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.elcorreo = response;
  });

  $scope.nyt = [];
  $http.get('http://174.138.76.133:3000/eua/nyt').success(function(response){
    $scope.nyt = response;
  });

  $scope.nydailynews = [];
  $http.get('http://174.138.76.133:3000/eua/california').success(function(response){
    $scope.nydailynews = response;
  });

  $scope.washpost = [];
  $http.get('http://174.138.76.133:3000/eua/washpost').success(function(response){
    $scope.washpost = response;
  });

  $scope.usatoday = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.usatoday = response;
  });

  $scope.twsj = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.twsj = response;
  });

  $scope.lemonde = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.lemonde = response;
  });

  $scope.lefigaro = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.lefigaro = response;
  });

  $scope.leparisien = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.leparisien = response;
  });

  $scope.lexpressfr = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.lexpressfr = response;
  });

  $scope.ouestfrance = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.ouestfrance = response;
  });

  $scope.lastampa = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.lastampa = response;
  });

  $scope.larepubblica = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.larepubblica = response;
  });

  $scope.cds = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.cds = response;
  });

  $scope.ilsole = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.ilsole = response;
  });

  $scope.ilmessaggero = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.ilmessaggero = response;
  });

  $scope.nhkonline = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.nhkonline = response;
  });

  $scope.thejapantimes = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.thejapantimes = response;
  });

  $scope.asianikkei = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.asianikkei = response;
  });

  $scope.japantoday = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.japantoday = response;
  });

  $scope.asahishimbun = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.asahishimbun = response;
  });

  $scope.lajornada = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.lajornada = response;
  });

  $scope.reforma = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.reforma = response;
  });

  $scope.eluniversalmx = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.eluniversalmx = response;
  });

  $scope.tdmuk = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.tdmuk = response;
  });

  $scope.metrouk = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.metrouk = response;
  });

  $scope.bbc = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.bbc = response;
  });

  $scope.theguardian = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.theguardian = response;
  });

  $scope.theindependent = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.theindependent = response;
  });

  $scope.lapatilla = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.lapatilla = response;
  });

  $scope.eluniversal = [];
  $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
    $scope.eluniversal = response;
  });

  // função para abrir link no app
  $scope.abrirApp = function (url) {
    cordova.InAppBrowser.open(url)
  }
})
