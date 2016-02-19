var routerapp = angular.module('routerapp', ['ui.router', 'myServiceApp' , 'BookListModule']);
//不懂
routerapp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

//配置路由
routerapp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/index');
  $stateProvider
    .state('index', {
      url:'/index',
      views:{
        '':{
          templateUrl:'./tpl/home.html'
        },
        'main@index':{
          templateUrl:'./tpl/login.html'
        }
      }
    })
    .state('booklist',{
      //不要忘记冒号！
      url:'/{booktype:[0-9]{1,4}}',
      views:{
        '':{
          templateUrl:'./tpl/booklist.html'
        },
        'booktype@booklist':{
          templateUrl:'./tpl/booktype.html'
        },
        'bookgrid@booklist':{
          templateUrl:'./tpl/bookgrid.html'
        }
      }
    }).state('addbook',{
      url:'/addbook',
      templateUrl:'./tpl/addbook.html'
    });
});
