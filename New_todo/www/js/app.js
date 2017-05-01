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


app.controller('main', function ($scope, $ionicModal,$ionicPopup,$http) {

		
	$scope.name_List= [];

$http.get('https://fsc-test.api.u300.net/fscompounder/webapi/v1/scenarios', {
    headers: {
        "Authorization": 'Basic ZGNoZWxpOmFzaWRlNTU1'
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
		
		
console.log(Objects.daysSupply);

		$scope.rxNumber=Objects.rxNumber;
		$scope.qtyDisp=Objects.qtyDispensed;
		$scope.route=Objects.route;
		$scope.daysSupply=Objects.daysSupply;
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


$scope.name_Lists=[
  {
    "daysSupply": "30",
    "formula": "Ketamine 15%/Lidocaine 1%/Gabapentin 6%/Clonidine 0.2% (topical pain)",
    "ingredients": [
      {
        "basisOfCostDetermination": "01",
        "drugName": "Ketamine HCl",
        "ingredientDrugCost": "796.95",
        "ndcCode": "52372088505",
        "productQuantity": "20.7"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Lidocaine",
        "ingredientDrugCost": "6.76",
        "ndcCode": "52372087304",
        "productQuantity": "1.2"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Gabapentin",
        "ingredientDrugCost": "706.10",
        "ndcCode": "52372091210",
        "productQuantity": "7.2"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Clonidine HC",
        "ingredientDrugCost": "73.80",
        "ndcCode": "52372811110",
        "productQuantity": "0.24"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Propylene Glycol",
        "ingredientDrugCost": "4.20",
        "ndcCode": "52372066904",
        "productQuantity": "6"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Freedom SiloMac Anhydrous",
        "ingredientDrugCost": "151.20",
        "ndcCode": "52372069404",
        "productQuantity": "12"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Lipopen Ultra",
        "ingredientDrugCost": "236.15",
        "ndcCode": "52372075005",
        "productQuantity": "72.66"
      }
    ],
    "name": "Clean Claim",
    "qtyDispensed": "120",
    "route": "6064005",
    "rxNumber": "123456789",
    "uAndC": "2100.00"
  },
  {
    "daysSupply": "30",
    "formula": "Amitriptyline 10%/Baclofen 3%/Lidocaine 3.33%",
    "ingredients": [
      {
        "basisOfCostDetermination": "01",
        "drugName": "Amitriptyline Hydrochloride",
        "ingredientDrugCost": "42.77",
        "ndcCode": "51552046407",
        "productQuantity": "12.22"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Baclofen",
        "ingredientDrugCost": "115.16",
        "ndcCode": "51927200700",
        "productQuantity": "2.7"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "PCCA Lipoderm",
        "ingredientDrugCost": "162.90",
        "ndcCode": "51927333800",
        "productQuantity": "72.08"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Lidocaine",
        "ingredientDrugCost": "30.78",
        "ndcCode": "51552014505",
        "productQuantity": "3"
      }
    ],
    "name": "Concentration Edit",
    "qtyDispensed": "90",
    "route": "6064005",
    "rxNumber": "111111110",
    "uAndC": "258.25"
  },
  {
    "daysSupply": "30",
    "formula": "Lidocaine-Prilocaine/Cyclobenzaprine HCI/Gabapentin/Diclofenac Sodium ER",
    "ingredients": [
      {
        "basisOfCostDetermination": "01",
        "drugName": "Lidocaine-Prilocaine",
        "ingredientDrugCost": "1464.05",
        "ndcCode": "00115146845",
        "productQuantity": "414.744"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Cyclobenzaprine HCI",
        "ingredientDrugCost": "104.18",
        "ndcCode": "10702000710",
        "productQuantity": "48.01"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Gabapentin",
        "ingredientDrugCost": "144.73",
        "ndcCode": "16714033202",
        "productQuantity": "24.001"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Diclofenac Sodium ER",
        "ingredientDrugCost": "183.25",
        "ndcCode": "00591067601",
        "productQuantity": "100.801"
      }
    ],
    "name": "Non Bulk (All Commercial)",
    "qtyDispensed": "480",
    "route": "6064005",
    "rxNumber": "111111111",
    "uAndC": "258.25"
  },
  {
    "daysSupply": "5",
    "formula": "Hydromorphone HCl/",
    "ingredients": [
      {
        "basisOfCostDetermination": "01",
        "drugName": "Hydromorphone HCl/Citric Acid Monohydrate",
        "ingredientDrugCost": "73077.00",
        "ndcCode": "51927100300",
        "productQuantity": "150"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Citric Acid Monohydrate",
        "ingredientDrugCost": "16.35",
        "ndcCode": "51927119900",
        "productQuantity": "15"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Simple Syrup",
        "ingredientDrugCost": "6.53",
        "ndcCode": "00395266128",
        "productQuantity": "7.5"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Tutti Frutti Flavor",
        "ingredientDrugCost": "0.16",
        "ndcCode": "51927215200",
        "productQuantity": ".45"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Sodium Hydroxide",
        "ingredientDrugCost": "0.05",
        "ndcCode": "62991206101",
        "productQuantity": ".5"
      }
    ],
    "name": "High Dollar",
    "qtyDispensed": "15",
    "route": "45890007",
    "rxNumber": "111111112",
    "uAndC": "11223.81"
  },
  {
    "daysSupply": "30",
    "formula": "Pyrimethamine 25mg/Leucovorin 5mg/Resveratrol 50mg",
    "ingredients": [
      {
        "basisOfCostDetermination": "01",
        "drugName": "Pyrimethamine (Bulk) Powder",
        "ingredientDrugCost": "17.43",
        "ndcCode": "38779088409",
        "productQuantity": "1"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Leucovorin Calcium Powder",
        "ingredientDrugCost": "170.53",
        "ndcCode": "62991273705",
        "productQuantity": ".216"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Gelatin Capsules (Empty)",
        "ingredientDrugCost": "3.60",
        "ndcCode": "62991408905",
        "productQuantity": "40"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Cellulose (Bulk) Powder",
        "ingredientDrugCost": "4.08",
        "ndcCode": "38779056703",
        "productQuantity": "2.36"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Resveratrol (Bulk) Powder",
        "ingredientDrugCost": "1776.66",
        "ndcCode": "51927436700",
        "productQuantity": "2.000"
      }
    ],
    "name": "Compound Alternative - Daraprim",
    "qtyDispensed": "40",
    "route": "26643006",
    "rxNumber": "111111113",
    "uAndC": "250"
  },
  {
    "daysSupply": "30",
    "formula": "Pyrimethamine 25mg/Leucovorin 5mg",
    "ingredients": [
      {
        "basisOfCostDetermination": "01",
        "drugName": "Pyrimethamine (Bulk) Powder",
        "ingredientDrugCost": "17.43",
        "ndcCode": "38779088409",
        "productQuantity": "1"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Leucovorin Calcium Powder",
        "ingredientDrugCost": "170.53",
        "ndcCode": "62991273705",
        "productQuantity": ".216"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Gelatin Capsules (Empty)",
        "ingredientDrugCost": "3.60",
        "ndcCode": "62991408905",
        "productQuantity": "40"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Cellulose (Bulk) Powder",
        "ingredientDrugCost": "7.54",
        "ndcCode": "38779056703",
        "productQuantity": "4.36"
      }
    ],
    "name": "Compound Alternative - Daraprim (Clean Claim)",
    "qtyDispensed": "40",
    "route": "26643006",
    "rxNumber": "111111114",
    "uAndC": "250"
  },
  {
    "daysSupply": "30",
    "formula": "Miconazole 10%/Fluconazole 1% Cream",
    "ingredients": [
      {
        "basisOfCostDetermination": "01",
        "drugName": "Miconazole Powder",
        "ingredientDrugCost": "126.00",
        "ndcCode": "51927209400",
        "productQuantity": "3"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Fluconazole",
        "ingredientDrugCost": "2.91",
        "ndcCode": " 00904650061",
        "productQuantity": ".3"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Antifungal Combination Products Misc - Cream",
        "ingredientDrugCost": "247.24",
        "ndcCode": "00395602056",
        "productQuantity": "26.7"
      }
    ],
    "name": "Compound Alternative - Recura",
    "qtyDispensed": "30",
    "route": "6064005",
    "rxNumber": "111111115",
    "uAndC": "1750.00"
  },
  {
    "daysSupply": "",
    "formula": "Amlodipine Suspension 1mg/ml",
    "ingredients": [
      {
        "basisOfCostDetermination": "01",
        "drugName": "Amlodipine Besylate Tab 10 MG",
        "ingredientDrugCost": "7.11",
        "ndcCode": "31722023910",
        "productQuantity": "3"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Glycerin Liquid",
        "ingredientDrugCost": "0.42",
        "ndcCode": "51927286500",
        "productQuantity": "2"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Oral Vehicles - Susp",
        "ingredientDrugCost": "10.20",
        "ndcCode": "51927322700",
        "productQuantity": "15"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Flavoring Agent - Liquid",
        "ingredientDrugCost": "0.40",
        "ndcCode": "51927223300",
        "productQuantity": "0.7"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Flavoring Agent - Liquid",
        "ingredientDrugCost": "0.17",
        "ndcCode": "51927211700",
        "productQuantity": ".3"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Oral Vehicles -Syrup",
        "ingredientDrugCost": "8.55",
        "ndcCode": "51927322800",
        "productQuantity": "15"
      }
    ],
    "name": "Beyond Use Dating",
    "qtyDispensed": "",
    "route": "26643006",
    "rxNumber": "111111116",
    "uAndC": ""
  },
  {
    "daysSupply": "30",
    "formula": "Fluticasone 1%/Levocetirizine 2%/Pentoxifylline 1%/Prilocaine 3%/Gabapentin 15%",
    "ingredients": [
      {
        "basisOfCostDetermination": "01",
        "drugName": "Fluticasone Propionate",
        "ingredientDrugCost": "1738.80",
        "ndcCode": "37803061804",
        "productQuantity": ".600"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Levocetirizine Dihydrochloride",
        "ingredientDrugCost": "118.94",
        "ndcCode": "52372069903",
        "productQuantity": "1.200"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Pentoxifylline",
        "ingredientDrugCost": "0.74",
        "ndcCode": "38779256008",
        "productQuantity": ".300"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Prilocaine HCl",
        "ingredientDrugCost": "92.34",
        "ndcCode": "38779015508",
        "productQuantity": "1.800"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Propylene Glycol",
        "ingredientDrugCost": "1.71",
        "ndcCode": "38779051009",
        "productQuantity": "3.000"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Apothesil",
        "ingredientDrugCost": "1245.38",
        "ndcCode": "37803274308",
        "productQuantity": "44.100"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Gabapentin",
        "ingredientDrugCost": "711.18",
        "ndcCode": "37803070108",
        "productQuantity": "9.000"
      }
    ],
    "name": "Drug Block: Fluticasone",
    "qtyDispensed": "60",
    "route": "6064005",
    "rxNumber": "111111117",
    "uAndC": "4954.73"
  },
  {
    "daysSupply": "30",
    "formula": "Fluticasone/Saline",
    "ingredients": [
      {
        "basisOfCostDetermination": "01",
        "drugName": "Fluticasone Propionate (Bulk) Powder",
        "ingredientDrugCost": "630.00",
        "ndcCode": "46144012425",
        "productQuantity": "0.18"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Saline Nasal",
        "ingredientDrugCost": "5.00",
        "ndcCode": "2355868961",
        "productQuantity": "1"
      }
    ],
    "name": "Step Therapy",
    "qtyDispensed": "40",
    "route": "46713006",
    "rxNumber": "47639123",
    "uAndC": "1750.00"
  },
  {
    "daysSupply": "30",
    "formula": "Gabapentin 6%/Baclofen 2% in Diclofenac 3% gel",
    "ingredients": [
      {
        "basisOfCostDetermination": "01",
        "drugName": "Diclofenac Sodium Gel 3%",
        "ingredientDrugCost": "650.81",
        "ndcCode": "68462035594",
        "productQuantity": "55.2"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Gabapentin Powder",
        "ingredientDrugCost": "226.80",
        "ndcCode": "62991220402",
        "productQuantity": "3.6"
      },
      {
        "basisOfCostDetermination": "01",
        "drugName": "Baclofen Powder",
        "ingredientDrugCost": "40.80",
        "ndcCode": "62991101301",
        "productQuantity": "1.2"
      }
    ],
    "name": "Intended Use - Diagnosis Code Required",
    "qtyDispensed": "60",
    "route": "46713006",
    "rxNumber": "47639124",
    "uAndC": "1150.00"
  }
];
		
	


  
  	
	
	})
	
	
	
	