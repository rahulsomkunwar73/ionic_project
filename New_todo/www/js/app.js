// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


app.controller('main', function ($scope, $ionicModal,$ionicPopup,$http,myService) {

		
	$scope.name_List= [];
	$scope.ingredients=[];
	$scope.result;
	$scope.Savings;
$http.get('https://fsc-test.api.u300.net/fscompounder/webapi/v1/scenarios', {
    headers: {
        "Authorization": 'Basic ZGNoZWxpOmFzaWRlNTU1',
		"Content-Type": "raw"
    }
  }).success(function(response){
  
	$scope.name_List=response;  
	  
  
  });
  
  	
	$ionicModal.fromTemplateUrl('new-task-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.newTaskModal = modal;
    });

	
	$scope.openTaskModal = function (Objects) {
		
		$scope.data = Objects;
		$scope.ingredients = Objects.ingredients;
		console.log($scope.ingredients[0]);
        $scope.newTaskModal.show();
    };
	
	$scope.closeTaskModal = function () {
        $scope.newTaskModal.hide();
    };
	
			

	 $scope.showAlert = function(datas) {
$scope.result = null;		 
		    
	/* 	  $http.post('https://fsc-test.api.u300.net/fscompounder/webapi/v1/process',datas, config).success(function(response){
  
	
  }); */
  
   var myDataPromise = myService.getData(datas);
    myDataPromise.then(function(result) {  

       // this is only run after getData() resolves
       $scope.result = result;
    
	console.log("data.name =   "+JSON.stringify($scope.result));
 console.log($scope.result);
	 console.log($scope.result.rejectionMessages.length);
if($scope.result.rejectionMessages.length==0) 
{
	$scope.Savings=Number(Number( $scope.result.submittedIngredientCost.substr(1).replace(/\,/g,""))-Number( $scope.result.pricedIngredientCost.substr(1).replace(/\,/g,""))).toFixed(2); 
  $scope.templateMessage='Submitted ingredient Cost: '+'$'+$scope.result.submittedIngredientCost.substr(1)+'<br/>'+'Priced Ingredient Cost: '+'$'+$scope.result.pricedIngredientCost.substr(1)+'<br/>'+
	   'Ingredient Cost Savings :'+'$'+$scope.Savings;
}
else{
	  $scope.templateMessage= $scope.result.rejectionMessages[0];
}
     var alertPopup = $ionicPopup.alert({
		
       title: '<i style="color:#ffffff;">Claim was Priced<i>',
       template: $scope.templateMessage
	   
	  });
    
    });
	
 
	
   };
	})
.factory('myService', function($http) {
	var config = {
                headers: {
        "Authorization": 'Basic ZGNoZWxpOmFzaWRlNTU1',
		"Content-type": 'text/plain'
    }
            };

    var getData = function(datas) {

        // Angular $http() and then() both return promises themselves 
        return $http.post('https://fsc-test.api.u300.net/fscompounder/webapi/v1/process',datas, config).then(function(result){

            // What we return here is the data that will be accessible 
            // to us after the promise resolves
            return result.data;
        });
    };


    return { getData: getData };
});
	
	
	