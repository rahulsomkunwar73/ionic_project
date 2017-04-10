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


app.controller('main', function ($scope, $ionicModal,$ionicPopup) {

	
$scope.name_List= [
      {"name": "Rahul", "role": "developer"},
      {"name": "Anas", "role": "senior developer"},
      {"name": "Nargesh", "role": "developer"}
    ];

	$ionicModal.fromTemplateUrl('new-task-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.newTaskModal = modal;
    });

	
	$scope.openTaskModal = function () {
		 $scope.data = {};
        $scope.newTaskModal.show();
    };
	
	$scope.closeTaskModal = function () {
        $scope.newTaskModal.hide();
    };
	
		$scope.createTask = function (data) {
        
		if(data.supply == undefined)
			data.supply = 0;
		
		if(data.rxNumber == undefined)
			data.rxNumber = 0;
		
		if(data.qty == undefined)
			data.qty = 0;
		
		if(data.route == undefined)
			data.route = 0;
		
		var mata= data.rxNumber+data.qty+data.route+data.supply;
		 $scope.showAlert(mata);
		
    };
	

	 $scope.showAlert = function(data) {
     var alertPopup = $ionicPopup.alert({
       title: 'Claim was Priced',
       template: 'Submitted ingredient Cost '+data
     });
     alertPopup.then(function(res) {
		 
       });
   };

	})