angular.module('AngularScaffold.Controllers')
  .controller('HomeController', ['$scope', 'HomeService', '$sessionStorage', function ($scope, HomeService, $sessionStorage) {
    	$scope.title = "Tabla de Ofertas"
      $scope.titleObject = {text: "Bienvenidos a Facebook JOBS"}
      $scope.offers = [];
      $scope.offer = {};

      $scope.getoffers = function(){
        HomeService.Getoffers().then(function(response){
          $scope.offers = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.postoffers = function(){
        HomeService.Postoffers($scope.offer).then(function(response){
          alert("Posted to /offers");
          $scope.getoffers();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.isAdmin = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('admin') > -1;
      }

      $scope.isRegular = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('regular') > -1;
      }

  }]);
