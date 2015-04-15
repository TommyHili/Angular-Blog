(function(angular, undefined){
  "use strict";
  angular.module('Myapp', ['ngMaterial'])
  .config(function($mdThemingProvider, $mdIconProvider){

                  $mdIconProvider
                      .defaultIconSet("./assets/svg/avatars.svg", 128)
                      .icon("menu"       , "./assets/svg/menu.svg"        , 24)
                      .icon("share"      , "./assets/svg/share.svg"       , 24)
                      .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
                      .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
                      .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
                      .icon("phone"      , "./assets/svg/phone.svg"       , 512);

                      $mdThemingProvider.theme('default')
                          .primaryPalette('teal',{
                            'default': '600',
                            'hue-1':   '400',
                          })
                          .accentPalette('red');

  })
  .controller('AppCtrl', function($scope, $timeout, $mdSidenav, $mdComponentRegistry, $log) {

    $scope.toggle = angular.noop;
    $scope.isOpen = function() { return false };

    $mdComponentRegistry
      .when('right')
      .then( function(sideNav){

        $scope.isOpen = angular.bind( sideNav, sideNav.isOpen );
        $scope.toggle = angular.bind( sideNav, sideNav.toggle );

      });

    $scope.toggleRight = function() {
      $mdSidenav('right').toggle()
                          .then(function(){
                            $log.debug("toggle RIGHT is done");
                          });
    };
  })
  .controller('RightCtrl', function($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function() {
      $mdSidenav('right').close()
                          .then(function(){
                            $log.debug("close RIGHT is done");
                          });
    };
  });
  
})(angular);