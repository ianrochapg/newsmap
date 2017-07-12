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
    {id: 1, title: 'Brasil', pagina: 'brasil', cor: 'royal'},
    {id: 2, title: 'Argentina', pagina: 'argentina', cor: 'assertive'},
    {id: 3, title: 'Canadá', pagina: 'canada', cor: 'energized'},
    {id: 4, title: 'Chile', pagina:'chile', cor: 'balanced'},
    {id: 5, title: 'China', pagina: 'china', cor: 'calm'},
    {id: 6, title: 'Espanha', pagina: 'espanha', cor: 'positive'},
    {id: 7, title: 'Estados Unidos', pagina: 'estados-unidos', cor: 'royal'},
    {id: 8, title: 'França', pagina: 'franca', cor: 'assertive'},
    {id: 9, title: 'Itália', pagina: 'italia', cor: 'energized'},
    {id: 10, title: 'México', pagina: 'mexico', cor: 'balanced'},
    {id: 11, title: 'Portugal', pagina: 'portugal', cor: 'calm'},
    // {id: 12, title: 'Síria', pagina: 'siria', cor: 'positive'}
  ];

  $scope.acessar = function(pagina){
    $state.go('app.'+pagina);
  }
})

.controller('BrasilController', function($scope, $stateParams) {
})

.controller('ArgentinaController', function($scope, $stateParams) {
  $scope.argentina = [
    {id: 1, jornal: 'La Prensa', link:'http://www.folha.uol.com.br/'},

  ]
})

.controller('CanadaController', function($scope, $http) {
  $scope.noticias = [];
  $http.get('http://localhost:3000/canada').success(function(response){
    $scope.noticias = response;
  });
})
/*Passar '$interval' como parâmetro na função e colocar a função
que eu quero que seja repetida dentro do $interval. Exemplo:
"$interval()"*/


.controller('ChileController', function($scope, $state) {
  $scope.chilenews = [
    {id: 1, paper: 'Folha', pagina: 'chilefolha', cor: 'royal'},
    {id: 1, paper: 'Globo', pagina: 'chileglobo', cor: 'energized'},
    {id: 1, paper: 'Estadão', pagina: 'chileestadao', cor: 'assertive'},
  ];

  $scope.acessar = function(pagina){
    $state.go('app.'+pagina);
  }
})

.controller('ChilegloboController', function($scope, $stateParams) {
})

.controller('ChilefolhaController', function($scope, $stateParams) {
})

.controller('ChileestadaoController', function($scope, $stateParams) {
})

.controller('ChinaController', function($scope, $stateParams) {
})

.controller('EspanhaController', function($scope, $stateParams) {
})

.controller('EUAController', function($scope, $stateParams) {
})

.controller('FrancaController', function($scope, $stateParams) {
})

.controller('ItaliaController', function($scope, $stateParams) {
})

.controller('MexicoController', function($scope, $stateParams) {
})

.controller('PortugalController', function($scope, $stateParams) {
})

.controller('SiriaController', function($scope, $stateParams) {
})
