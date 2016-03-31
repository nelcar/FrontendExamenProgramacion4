angular.module('AngularScaffold.Services').factory('HomeService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://nelson-cardenas-backend.herokuapp.com/';
		return {
				Getoffers: function(){
					return $http.get(baseUrl + "v1/offers");
				},
				Postoffers: function(payload){
					return $http.post(baseUrl + "v1/offers", payload);
				}
	    };
}]);
