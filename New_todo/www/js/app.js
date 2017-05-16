// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

app.run(function($ionicPlatform,$ionicPopup) {
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
// Calling alert in case of not connected to any network
	if(window.Connection) {
                if(navigator.connection.type == Connection.NONE) {
                    $ionicPopup.alert({
                        title: "Internet Disconnected",
                        content: "No Internet Connection.Make sure that Wi-Fi or cellular mobile data is turned on,then try again."
                    })
                    .then(function(result) {
                        	ionic.Platform.exitApp();
                        
                    });
                }
            }
  });
})


app.controller('main', function ($scope, $ionicModal,$ionicPopup,$http,myService) {

		
	$scope.name_List= [];
	$scope.ingredients=[];
	$scope.result;
	$scope.Savings;
	$scope.dataLoading = false ;
	initController();
	
	
	//init controller will be called first to get the claim list
	function initController() {
$http.get('https://fsc-test.api.u300.net/fscompounder/webapi/v1/scenarios', {
    headers: {
        "Authorization": 'Basic ZGNoZWxpOmFzaWRlNTU1',
		}
  }).success(function(response){
  
	$scope.name_List=response;  
	
	  
  
  });
}


	//function call on click of claim to load claim details
	$scope.openTaskModal = function (Objects) {
		
		$scope.data = Objects;
		$scope.ingredients = Objects.ingredients;
		
        $scope.newTaskModal.show();
    };
		
  	//template to load claim details
	$ionicModal.fromTemplateUrl('new-task-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.newTaskModal = modal;
    });
	
	//function to hide claim details template
	$scope.closeTaskModal = function () {
        $scope.newTaskModal.hide();
    };
				

	//function call to process claim and give response in alert form	
	 $scope.showAlert = function(datas) {
	$scope.result = null;		 
	$scope.dataLoading = true;
	//calling factory to process claim by calling api 
   var myDataPromise = myService.getData(datas);
    myDataPromise.then(function(result) { 	
	$scope.dataLoading = false;
       $scope.result = result;
   if($scope.result.rejectionMessages.length==0) 
{
	$scope.Savings=Number(Number( $scope.result.submittedIngredientCost.substr(1).replace(/\,/g,""))-Number( $scope.result.pricedIngredientCost.substr(1).replace(/\,/g,""))).toFixed(2); 
  $scope.templateMessage='Submitted ingredient Cost: '+'$'+$scope.result.submittedIngredientCost.substr(1)+'<br/>'+'Priced Ingredient Cost: '+'$'+$scope.result.pricedIngredientCost.substr(1)+'<br/>'+
	   'Ingredient Cost Savings :'+'$'+$scope.Savings;
}
else{
	  $scope.templateMessage= $scope.result.rejectionMessages.toString();
}


     var alertPopup = $ionicPopup.alert({
		
       title: '<i style="color:#ffffff;">Claim was Priced<i>',
       template: $scope.templateMessage
	   
	  });
    
    });
	
 
	
   };
	})
	// promise to call claim process api 
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
	
	
	