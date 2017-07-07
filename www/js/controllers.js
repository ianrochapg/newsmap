angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

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
    {id: 1, title: 'Brasil', pagina: 'brasil', cor: 'dark'},
    {id: 2, title: 'Argentina', pagina: 'argentina', cor: 'royal'},
    {id: 3, title: 'Canadá', pagina: 'canada', cor: 'assertive'},
    {id: 4, title: 'Chile', pagina:'chile', cor: 'energized'},
    {id: 5, title: 'China', pagina: 'china', cor: 'balanced'},
    {id: 6, title: 'Espanha', pagina: 'espanha', cor: 'calm'},
    {id: 7, title: 'Estados Unidos', pagina: 'estados-unidos', cor: 'positive'},
    {id: 8, title: 'França', pagina: 'franca', cor: 'dark'},
    {id: 9, title: 'Itália', pagina: 'italia', cor: 'royal'},
    {id: 10, title: 'México', pagina: 'mexico', cor: 'assertive'},
    {id: 11, title: 'Portugal', pagina: 'portugal', cor: 'energized'},
    {id: 12, title: 'Síria', pagina: 'siria', cor: 'balanced'}
  ];

  $scope.acessar = function(pagina){
    $state.go('app.'+pagina);
  }
})

.controller('BrasilController', function($scope, $stateParams) {
})

.controller('ArgentinaController', function($scope, $stateParams) {
})

.controller('CanadaController', function($scope, $stateParams) {
})

.controller('ChileController', function($scope, $stateParams) {
})

.controller('ChinaController', function($scope, $stateParams) {
})

.controller('EspanhaController', function($scope, $stateParams) {
})

.controller('Estados-UnidosController', function($scope, $stateParams) {
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
