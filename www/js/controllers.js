angular.module('starter.controllers', [])

// .controller('AppCtrl', function($scope, $ionicModal, $timeout){
//
//   // With the new view caching in Ionic, Controllers are only called
//   // when they are recreated or on app start, instead of every page change.
//   // To listen for when this page is active (for example, to refresh data),
//   // listen for the $ionicView.enter event:
//   //$scope.$on('$ionicView.enter', function(e) {
//   //});
//
//   // // Form data for the login modal
//   // $scope.loginData = {};
//   //
//   // // Create the login modal that we will use later
//   // $ionicModal.fromTemplateUrl('templates/login.html', {
//   //   scope: $scope
//   // }).then(function(modal) {
//   //   $scope.modal = modal;
//   // });
//   //
//   // // Triggered in the login modal to close it
//   // $scope.closeLogin = function() {
//   //   $scope.modal.hide();
//   // };
//   //
//   // // Open the login modal
//   // $scope.login = function() {
//   //   $scope.modal.show();
// };

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

// .controller('Login2Controller', function($scope, $ionicModal, $timeout) {
// })

.controller('LoginController', function($scope, $state, $http, Sessao) {
  $scope.data = {};

  $scope.logar = function() {

    $http.post('http://localhost:3000/login', $scope.data).then(function(resposta){
      if(!resposta.data){
        alert('Login invalido');
        return;
      }
      Sessao.inicializar(resposta.data);
      $state.go('app.home');
    })
  };
  $scope.irCadastro = function() {
    $state.go("cadastro");

  }
})

.controller('CadastroController', function($scope, $state, $http, Sessao) {
  $scope.dados = {};

  $scope.cadastrar = function(){
    console.log($scope.dados);
    $http.post('http://localhost:3000/usuario', $scope.dados).then(function(resposta){
      console.log($scope.dados);
      Sessao.inicializar(resposta.dados);
      console.log($scope.dados);
      console.log("Cadastro ok!")
    })
  }
  $scope.cancelar = function() {
    $state.go("app.home");

  }
})

.controller('HomeController', function($scope, $state, $location) {
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
    $location.path('/app/paises/'+pagina);
  }
})

.controller('FavoritesController', function($scope, $state) {
  // $scope.favorites = [
  //   {id: 1, title: 'Brasil', pagina: 'brasil'},
  //   {id: 2, title: 'Argentina', pagina: 'argentina'},
  //   {id: 3, title: 'Austrália', pagina: 'australia'},
  //   {id: 4, title: 'Canadá', pagina: 'canada'},
  //   {id: 5, title: 'Espanha', pagina: 'espanha'},
  //   {id: 6, title: 'Estados Unidos', pagina: 'eua'},
  //   {id: 7, title: 'França', pagina: 'franca'},
  //   {id: 8, title: 'Itália', pagina: 'italia'},
  //   {id: 9, title: 'Japão', pagina: 'japao'},
  //   {id: 10, title: 'México', pagina: 'mexico'},
  //   {id: 11, title: 'Reino Unido', pagina: 'reinounido'},
  //   {id: 12, title: 'Venezuela', pagina: 'venezuela'}
  // ];
  //
  // $scope.acessar = function(pagina){
  //   $state.go('app.pais');
  // }
})

.controller('PaisController', function($scope, $state, $stateParams, $location) {
  var listaPaises = [{ nome : 'brasil', conteudo : [
    {id: 1, paper: 'Folha', pagina: 'folha'},
    {id: 1, paper: 'Globo', pagina: 'g1'},
    {id: 1, paper: 'Estadão', pagina: 'estadao'},
    {id: 1, paper: 'O Tempo', pagina: 'otempo'},
    {id: 1, paper: 'O Globo', pagina: 'oglobo'}
  ]},

  { nome : 'argentina',
    conteudo : [
    {id: 1, paper: 'Clarín', pagina: 'clarin'},
    {id: 1, paper: 'La Nación', pagina: 'lanacion'},
    {id: 1, paper: 'Los Andes', pagina: 'losandes'},
    {id: 1, paper: 'La Voz', pagina: 'lavoz'},
  ]
},

  { nome : 'australia',
    conteudo : [
      {id: 1, paper: 'The Age', pagina: 'theage'},
      {id: 1, paper: 'Daily Telegraph', pagina: 'telegraph'},
      {id: 1, paper: 'Courier Mail', pagina: 'couriermail'},
      {id: 1, paper: 'The Sydney Morning Herald', pagina: 'sydneyherald'},
      {id: 1, paper: 'Herald Sun', pagina: 'heraldsun'},
    ]
  },

  { nome : 'canada',
    conteudo : [
      {id: 1, paper: 'Toronto Star', pagina: 'torontostar'},
      {id: 1, paper: 'Vancouver Sun', pagina: 'vancouversun'},
      {id: 1, paper: 'Metro News Canada', pagina: 'metronews'},
      {id: 1, paper: 'National Post', pagina: 'nationalpost'},
      {id: 1, paper: 'Ottawa Citizen', pagina: 'ottawacitizen'},
    ]
  },

  { nome : 'espanha',
    conteudo : [
      {id: 1, paper: 'El País', pagina: 'elpais'},
      {id: 1, paper: 'El Mundo', pagina: 'elmundo'},
      {id: 1, paper: 'La Vanguardia', pagina: 'lavanguardia'},
      {id: 1, paper: 'ABC España', pagina: 'abcespana'},
      {id: 1, paper: 'El Correo', pagina: 'elcorreo'},
    ]
  },

  { nome : 'eua',
    conteudo : [
      {id: 1, paper: 'The New York Times', pagina: 'nyt'},
      {id: 1, paper: 'USA Today', pagina: 'usatoday'},
      {id: 1, paper: 'Washington Post', pagina: 'washpost'},
      {id: 1, paper: 'New York Daily News', pagina: 'nydailynews'},
      {id: 1, paper: 'The Wall Street Journal', pagina: 'twsj'},
    ]
  },

  { nome : 'franca',
    conteudo : [
      {id: 1, paper: 'Le Monde', pagina: 'lemonde'},
      {id: 1, paper: 'Le Figaro', pagina: 'lefigaro'},
      {id: 1, paper: 'Le Parisien', pagina: 'leparisien'},
      {id: 1, paper: 'Ouest France', pagina: 'ouestfrance'},
      {id: 1, paper: "L'Express FR", pagina: 'lexpressfr'},
    ]
  },

  { nome : 'italia',
    conteudo : [
      {id: 1, paper: 'La Stampa', pagina: 'lastampa'},
      {id: 1, paper: 'La Repubblica', pagina: 'larepubblica'},
      {id: 1, paper: 'Corriere Della Sera', pagina: 'cds'},
      {id: 1, paper: 'Il Sole 24 Ore', pagina: 'ilsole'},
      {id: 1, paper: 'Il Messaggero', pagina: 'ilmessaggero'},
    ]
  },

  { nome : 'japao',
    conteudo : [
      {id: 1, paper: 'NHK Online', pagina: 'nhkonline'},
      {id: 1, paper: 'The Japan Times', pagina: 'thejapantimes'},
      {id: 1, paper: 'Asia Nikkei', pagina: 'asianikkei'},
      {id: 1, paper: 'Japan Today', pagina: 'japantoday'},
      {id: 1, paper: 'Asahi Shimbun', pagina: 'asahishimbun'},
    ]
  },

  { nome : 'mexico',
    conteudo : [
      {id: 1, paper: 'La Jornada', pagina: 'lajornada'},
      {id: 1, paper: 'Reforma', pagina: 'reforma'},
      {id: 1, paper: 'El Universal', pagina: 'eluniversalmx'},
    ]
  },

  { nome : 'reinounido',
    conteudo : [
      {id: 1, paper: 'The Daily Mail UK', pagina: 'tdmuk'},
      {id: 1, paper: 'Metro UK', pagina: 'metrouk'},
      {id: 1, paper: 'BBC', pagina: 'bbc'},
      {id: 1, paper: 'The Guardian', pagina: 'theguardian'},
      {id: 1, paper: 'The Independent', pagina: 'theindependent'},
    ]
  },

  { nome : 'venezuela',
    conteudo : [{id: 1, paper: 'La Patilla', pagina: 'lapatilla'},
    {id: 1, paper: 'El Universal', pagina: 'eluniversal'},]
  }]

  var buscar = function(pagina) {
    for (var i = 0; i < listaPaises.length; i++) {
      if (listaPaises[i].nome == pagina) {
        return listaPaises[i];
      }
    }
    return null;
  }

  $scope.selecionado = buscar($stateParams.paisSelecionado);

  $scope.acessar = function(pais,pagina){
    $location.path('/app/paises/'+pais+'/jornal/'+pagina);
  }
})

.controller('JornalController', function($scope, $http, $stateParams, $interval) {
  $scope.g1 = [];
  $http.get('http://localhost:3000/paises/Brasil/jornais/G1/noticias').success(function(response){
    $scope.g1 = response;
  });

  $scope.folha = [];
  $http.get('http://localhost:3000/paises/Brasil/jornais/Folha/noticias').success(function(response){
    $scope.folha = response;
  });

  $scope.estadao = [];
  $http.get('http://localhost:3000/paises/Brasil/jornais/Estadão/noticias').success(function(response){
    $scope.estadao = response;
  });

  $scope.otempo = [];
  $http.get('http://localhost:3000/paises/Brasil/jornais/oTempo/noticias').success(function(response){
    $scope.otempo = response;
  });

  $scope.oglobo = [];
  $http.get('http://localhost:3000/paises/Brasil/jornais/oGlobo/noticias').success(function(response){
    $scope.oglobo = response;
  });

  $scope.clarin = [];
  $http.get('http://localhost:3000/paises/Argentina/jornais/clarin/noticias').success(function(response){
    $scope.clarin = response;
  });

  $scope.lanacion = [];
  $http.get('http://localhost:3000/paises/Argentina/jornais/la_nacion/noticias').success(function(response){
    $scope.lanacion = response;
  });

  $scope.losandes = [];
  $http.get('http://localhost:3000/paises/Argentina/jornais/los_andes/noticias').success(function(response){
    $scope.losandes = response;
  });

  $scope.lavoz = [];
  $http.get('http://localhost:3000/paises/Argentina/jornais/la_voz/noticias').success(function(response){
    $scope.lavoz = response;
  });

  $scope.theage = [];
  $http.get('http://localhost:3000/paises/Australia/jornais/the_age/noticias').success(function(response){
    $scope.theage = response;
  });

  // $scope.telegraph = [];
  // $http.get('http://localhost:3000/paises/Australia/jornais/daily_telegraph/noticias').success(function(response){
  //   $scope.telegraph = response;
  // });
  //
  // $scope.couriermail = [];
  // $http.get('http://localhost:3000/paises/Australia/jornais/courier_mail/noticias').success(function(response){
  //   $scope.couriermail = response;
  // });

  $scope.sydneyherald = [];
  $http.get('http://localhost:3000/paises/Australia/jornais/the_sydney_morning_herald/noticias').success(function(response){
    $scope.sydneyherald = response;
  });

  // $scope.heraldsun = [];
  // $http.get('http://localhost:3000/paises/Australia/jornais/herald_sun/noticias').success(function(response){
  //   $scope.heraldsun = response;
  // });

  $scope.torontostar = [];
  $http.get('http://localhost:3000/paises/Canada/jornais/toronto_star/noticias').success(function(response){
    $scope.torontostar = response;
  });

  $scope.vancouversun = [];
  $http.get('http://localhost:3000/paises/Canada/jornais/vancouver_sun/noticias').success(function(response){
    $scope.vancouversun = response;
  });

  $scope.metronews = [];
  $http.get('http://localhost:3000/paises/Canada/jornais/metro_news_canada/noticias').success(function(response){
    $scope.metronews = response;
  });

  $scope.nationalpost = [];
  $http.get('http://localhost:3000/paises/Canada/jornais/national_post/noticias').success(function(response){
    $scope.nationalpost = response;
  });

  $scope.ottawacitizen = [];
  $http.get('http://localhost:3000/paises/Canada/jornais/ottawa_citizen/noticias').success(function(response){
    $scope.ottawacitizen = response;
  });

  $scope.elpais = [];
  $http.get('http://localhost:3000/paises/Espanha/jornais/el_pais/noticias').success(function(response){
    $scope.elpais = response;
  });

  $scope.elmundo = [];
  $http.get('http://localhost:3000/paises/Espanha/jornais/el_mundo/noticias').success(function(response){
    $scope.elmundo = response;

  });

  $scope.lavanguardia = [];
  $http.get('http://localhost:3000/paises/Espanha/jornais/la_vanguardia/noticias').success(function(response){
    $scope.lavanguardia = response;
  });

  $scope.abcespana = [];
  $http.get('http://localhost:3000/paises/Espanha/jornais/abc_espana/noticias').success(function(response){
    $scope.abcespana = response;
  });

  // $scope.elcorreo = [];
  // $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
  //   $scope.elcorreo = response;
  // });

  // $scope.nyt = [];
  // $http.get('http://localhost:3000/paises/eua/jornais/abc_espana/noticias').success(function(response){
  //   $scope.nyt = response;
  // });

  $scope.nydailynews = [];
  $http.get('http://localhost:3000/paises/eua/jornais/nydaily/noticias').success(function(response){
    $scope.nydailynews = response;
  });

  $scope.washpost = [];
  $http.get('http://localhost:3000/paises/eua/jornais/washpost/noticias').success(function(response){
    $scope.washpost = response;
  });

  $scope.usatoday = [];
  $http.get('http://localhost:3000/paises/eua/jornais/usatoday/noticias').success(function(response){
    $scope.usatoday = response;
  });

  $scope.twsj = [];
  $http.get('http://localhost:3000/paises/eua/jornais/wallstreet/noticias').success(function(response){
    $scope.twsj = response;
  });

  $scope.lemonde = [];
  $http.get('http://localhost:3000/paises/franca/jornais/lemonde/noticias').success(function(response){
    $scope.lemonde = response;
  });

  $scope.lefigaro = [];
  $http.get('http://localhost:3000/paises/franca/jornais/figaro/noticias').success(function(response){
    $scope.lefigaro = response;
  });

  $scope.leparisien = [];
  $http.get('http://localhost:3000/paises/franca/jornais/le_parisien/noticias').success(function(response){
    $scope.leparisien = response;
  });

  $scope.lexpressfr = [];
  $http.get('http://localhost:3000/paises/franca/jornais/leexpress/noticias').success(function(response){
    $scope.lexpressfr = response;
  });

  $scope.ouestfrance = [];
  $http.get('http://localhost:3000/paises/franca/jornais/ouestfrance/noticias').success(function(response){
    $scope.ouestfrance = response;
  });

  $scope.lastampa = [];
  $http.get('http://localhost:3000/paises/Italia/jornais/la_stampa/noticias').success(function(response){
    $scope.lastampa = response;
  });

  $scope.larepubblica = [];
  $http.get('http://localhost:3000/paises/Italia/jornais/la_repubblica/noticias').success(function(response){
    $scope.larepubblica = response;
  });

  $scope.cds = [];
  $http.get('http://localhost:3000/paises/Italia/jornais/corriere_della_sera/noticias').success(function(response){
    $scope.cds = response;
  });

  $scope.ilsole = [];
  $http.get('http://localhost:3000/paises/Italia/jornais/ilsole24ore/noticias').success(function(response){
    $scope.ilsole = response;
  });

  $scope.ilmessaggero = [];
  $http.get('http://localhost:3000/paises/Italia/jornais/il_messaggero/noticias').success(function(response){
    $scope.ilmessaggero = response;
  });
  //
  // $scope.nhkonline = [];
  // $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
  //   $scope.nhkonline = response;
  // });
  //
  // $scope.thejapantimes = [];
  // $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
  //   $scope.thejapantimes = response;
  // });
  //
  // $scope.asianikkei = [];
  // $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
  //   $scope.asianikkei = response;
  // });
  //
  // $scope.japantoday = [];
  // $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
  //   $scope.japantoday = response;
  // });
  //
  // $scope.asahishimbun = [];
  // $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
  //   $scope.asahishimbun = response;
  // });

  $scope.lajornada = [];
  $http.get('http://localhost:3000/paises/mexico/jornais/la_jornada/noticias').success(function(response){
    $scope.lajornada = response;
  });

  $scope.reforma = [];
  $http.get('http://localhost:3000/paises/mexico/jornais/reforma/noticias').success(function(response){
    $scope.reforma = response;
  });

  $scope.eluniversalmx = [];
  $http.get('http://localhost:3000/paises/mexico/jornais/el_universal/noticias').success(function(response){
    $scope.eluniversalmx = response;
  });

  $scope.tdmuk = [];
  $http.get('http://localhost:3000/paises/reinounido/jornais/thedailymailUK/noticias').success(function(response){
    $scope.tdmuk = response;
  });

  $scope.metrouk = [];
  $http.get('http://localhost:3000/paises/reinounido/jornais/metro_uk/noticias').success(function(response){
    $scope.metrouk = response;
  });

  $scope.bbc = [];
  $http.get('http://localhost:3000/paises/reinounido/jornais/bbc/noticias').success(function(response){
    $scope.bbc = response;
  });

  $scope.theguardian = [];
  $http.get('http://localhost:3000/paises/reinounido/jornais/the_guardian/noticias').success(function(response){
    $scope.theguardian = response;
  });

  // $scope.theindependent = [];
  // $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
  //   $scope.theindependent = response;
  // });
  // 
  // $scope.lapatilla = [];
  // $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
  //   $scope.lapatilla = response;
  // });
  //
  // $scope.eluniversal = [];
  // $http.get('http://174.138.76.133:3000/brasil/g1').success(function(response){
  //   $scope.eluniversal = response;
  // });

$interval(function(){
  $scope.listaJornais = [];
  $scope.listaJornais[0] = {nome : "g1", conteudo : $scope.g1};
  $scope.listaJornais[1] = {nome : "folha", conteudo : $scope.folha};
  $scope.listaJornais[2] = {nome : "estadao", conteudo : $scope.estadao};
  $scope.listaJornais[3] = {nome : "otempo", conteudo : $scope.otempo};
  $scope.listaJornais[4] = {nome : "oglobo", conteudo : $scope.oglobo};
  $scope.listaJornais[5] = {nome : "clarin", conteudo : $scope.clarin};
  $scope.listaJornais[6] = {nome : "lanacion", conteudo : $scope.lanacion};
  $scope.listaJornais[7] = {nome : "losandes", conteudo : $scope.losandes};
  $scope.listaJornais[8] = {nome : "lavoz", conteudo : $scope.lavoz};
  $scope.listaJornais[9] = {nome : "theage", conteudo : $scope.theage};
  $scope.listaJornais[10] = {nome : "telegraph", conteudo : $scope.telegraph};
  $scope.listaJornais[11] = {nome : "couriermail", conteudo : $scope.couriermail};
  $scope.listaJornais[12] = {nome : "sydneyherald", conteudo : $scope.sydneyherald};
  $scope.listaJornais[13] = {nome : "heraldsun", conteudo : $scope.heraldsun};
  $scope.listaJornais[14] = {nome : "torontostar", conteudo : $scope.torontostar};
  $scope.listaJornais[15] = {nome : "vancouversun", conteudo : $scope.vancouversun};
  $scope.listaJornais[16] = {nome : "metronews", conteudo : $scope.metronews};
  $scope.listaJornais[17] = {nome : "nationalpost", conteudo : $scope.nationalpost};
  $scope.listaJornais[18] = {nome : "ottawacitizen", conteudo : $scope.ottawacitizen};
  $scope.listaJornais[19] = {nome : "elpais", conteudo : $scope.elpais};
  $scope.listaJornais[20] = {nome : "elmundo", conteudo : $scope.elmundo};
  $scope.listaJornais[21] = {nome : "lavanguardia", conteudo : $scope.lavanguardia};
  $scope.listaJornais[22] = {nome : "abcespana", conteudo : $scope.abcespana};
  $scope.listaJornais[23] = {nome : "elcorreo", conteudo : $scope.elcorreo};
  $scope.listaJornais[24] = {nome : "usatoday", conteudo : $scope.usatoday};
  $scope.listaJornais[25] = {nome : "nyt", conteudo : $scope.nyt};
  $scope.listaJornais[26] = {nome : "washpost", conteudo : $scope.washpost};
  $scope.listaJornais[27] = {nome : "nydailynews", conteudo : $scope.nydailynews};
  $scope.listaJornais[28] = {nome : "twsj", conteudo : $scope.twsj};
  $scope.listaJornais[29] = {nome : "lemonde", conteudo : $scope.lemonde};
  $scope.listaJornais[30] = {nome : "lefigaro", conteudo : $scope.lefigaro};
  $scope.listaJornais[31] = {nome : "leparisien", conteudo : $scope.leparisien};
  $scope.listaJornais[32] = {nome : "lexpressfr", conteudo : $scope.lexpressfr};
  $scope.listaJornais[33] = {nome : "ouestfrance", conteudo : $scope.ouestfrance};
  $scope.listaJornais[34] = {nome : "lastampa", conteudo : $scope.lastampa};
  $scope.listaJornais[35] = {nome : "larepubblica", conteudo : $scope.larepubblica};
  $scope.listaJornais[36] = {nome : "cds", conteudo : $scope.cds};
  $scope.listaJornais[37] = {nome : "ilsole", conteudo : $scope.ilsole};
  $scope.listaJornais[38] = {nome : "ilmessaggero", conteudo : $scope.ilmessaggero};
  $scope.listaJornais[39] = {nome : "nhkonline", conteudo : $scope.nhkonline};
  $scope.listaJornais[40] = {nome : "thejapantimes", conteudo : $scope.thejapantimes};
  $scope.listaJornais[41] = {nome : "asianikkei", conteudo : $scope.asianikkei};
  $scope.listaJornais[42] = {nome : "japantoday", conteudo : $scope.japantoday};
  $scope.listaJornais[43] = {nome : "asahishimbun", conteudo : $scope.asahishimbun};
  $scope.listaJornais[44] = {nome : "lajornada", conteudo : $scope.lajornada};
  $scope.listaJornais[45] = {nome : "reforma", conteudo : $scope.reforma};
  $scope.listaJornais[46] = {nome : "eluniversalmx", conteudo : $scope.eluniversalmx};
  $scope.listaJornais[47] = {nome : "tdmuk", conteudo : $scope.tdmuk};
  $scope.listaJornais[48] = {nome : "metrouk", conteudo : $scope.metrouk};
  $scope.listaJornais[49] = {nome : "bbc", conteudo : $scope.bbc};
  $scope.listaJornais[50] = {nome : "theguardian", conteudo : $scope.theguardian};
  $scope.listaJornais[51] = {nome : "theindependent", conteudo : $scope.theindependent};
  $scope.listaJornais[52] = {nome : "lapatilla", conteudo : $scope.lapatilla};
  $scope.listaJornais[53] = {nome : "eluniversal", conteudo : $scope.eluniversal};

  var buscar = function(pagina) {
    for (var i = 0; i < $scope.listaJornais.length; i++) {
      if ($scope.listaJornais[i].nome == pagina) {
        return $scope.listaJornais[i].conteudo;
      }
    }
    return null;
  }

  $scope.selecionado = buscar($stateParams.jornalSelecionado);
console.log($scope.selecionado);
}, 1000, 1);

  // função para abrir link no app
  $scope.abrirApp = function (url) {
    cordova.InAppBrowser.open(url)
  }
})
