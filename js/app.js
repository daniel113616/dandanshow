angular.module("starter",["ionic","starter.controllers","starter.services"]).run(["$ionicPlatform",function(r){r.ready(function(){window.cordova&&window.cordova.plugins&&window.cordova.plugins.Keyboard&&(cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),cordova.plugins.Keyboard.disableScroll(!0)),window.StatusBar&&StatusBar.styleDefault()})}]).config(["$stateProvider","$urlRouterProvider",function(r,e){r.state("order-detail",{url:"/order-detail",templateUrl:"views/order-detail.html",controller:"orderDetailCtrl"}).state("loan",{url:"/loan",templateUrl:"views/loan.html",controller:"loanCtrl"}).state("help",{url:"/help",templateUrl:"views/help.html",controller:"helpCtrl"}).state("home",{url:"/home",templateUrl:"views/home.html",controller:"homeCtrl"}).state("qrcode",{url:"/qrcode",templateUrl:"views/qrcode.html",controller:"qrcodeCtrl"}),e.otherwise("/help")}]);