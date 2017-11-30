/**
 * 
 */'use strict';
var ItalianController = function($scope, $http){
	
	$scope.data12 = "Select a recipe to know more about its details, such as its Ingredients & how it is made";
	
	var columnDefs1 = [
		   				{
		   					field: 'recipe', displayName: 'Recipes',width: 220,
		   					enableCellEdit: true, enableHiding: false, enableFiltering: false,
		   					},
						{ 
		   					field: 'ingredients', displayName: 'Ingredients',width: 200,
		   					enableCellEdit : true, enableHiding: false, enableFiltering: false,
		   					cellTemplate: '<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#myModal" ng-click="grid.appScope.viewRecipe(row)"><span class="glyphicon glyphicon-fullscreen"></span> View</button>'
						},
		   				{ 	field : 'action', enableHiding: false,
		   					cellTemplate: '<button class="btn btn-default btn-sm" data-toggle="collapse" data-target="#manageIngr" ng-click="grid.appScope.showIngr(row)"><span class="glyphicon glyphicon-th"></span> Manage</button>'
						}
		   			];
	
	$scope.gridOpts = {
			  columnDefs: columnDefs1,
			  enableCellEditOnFocus: true,
			  enableGridMenu: true,
			  enableHiding: false
		  };
	
	var columnDefs2 = [
		   				{
		   					field: 'Slno', displayName: '#',width: 40,
		   					enableCellEdit: true, enableHiding: false, enableFiltering: false,
		   					},
						{ 
		   					field: 'name', displayName: 'Ingredient',width: 140,
		   					enableCellEdit : true, enableHiding: false, enableFiltering: false,
						},
						{
							field: 'qty', displayName: 'Quantity',width: 100,
		   					enableCellEdit : true, enableHiding: false, enableFiltering: false
		   				},
						{
		   					field: 'price', displayName: 'Price',width: 100,
			   				enableCellEdit : true, enableHiding: false, enableFiltering: false
			   			},
			   			{
		   					field: 'unit', displayName: 'Unit',width: 60,
			   				enableCellEdit : true, enableHiding: false, enableFiltering: false
			   			},
		   				{ 	
			   				field : 'action', enableHiding: false,width: 100,
			   				cellTemplate: '<button class="btn btn-default btn-sm" data-toggle="modal" data-target="#editIngrModal" ng-click="grid.appScope.editIngr(row)"><span class="glyphicon glyphicon-edit"></span> Edit</button>'
						}
		   			];
	
	$scope.gridOptions = {
			  columnDefs: columnDefs2,
			  enableCellEditOnFocus: true,
			  enableGridMenu: false,
			  enableHiding: false
		  };
	
	$scope.openAddRecipeForm= function(){
			$scope.showRecipeForm = true;
	};
	
	$scope.openIngredientsForm = function(){
		$scope.ingredient = {};
		if($scope.recipe.name.length>0){
			$scope.addIngredientsBtn = true;
			$scope.showIngredientsForm = true;
			$scope.recipeNameDisable = true;
			$scope.recipeNameInit = false;
			$scope.addIngredientBtn = true;
		}
	};
	
	$scope.clubRI = function(recipe, ingredient){
		//take recipe.name and its ingredient and hold that SOMEWHERE
		var counter=0;
		$scope.recipeData = [{"R":recipe.name,"I":ingredient.ingredientIn}];
		$scope.ingredientData = {
							"Slno": ++counter,
							"Ingredient": ingredient.ingredientIn,
							"Qty": ingredient.qtyIn,
							"Price": ingredient.priceIn,
							"Unit": ingredient.unitIn,
							};
		// clubbedRIObj should hold recipe + its ingredients
		$scope.addIngredient(ingredient);
	};

	$scope.addIngredient = function(ingredient){
		$scope.addRecipeBtn = true;
		$scope.ingredientName = this.ingredientIn;
		$scope.showIngredientsForm = false;
		$scope.showIngredientPanel();
	};
	
	$scope.pushRI = function(recipe, ingredient){
		var count=0;
			$scope.gridOpts.data.push({'recipe': recipe.name});
			$scope.gridOptions.data.push({
				'Slno': ++count, 
				'name': ingredient.ingredientIn, 
				'qty': ingredient.qtyIn, 
				'price': ingredient.priceIn,
				'unit': ingredient.unitIn,
		});
			
			/*$scope.list.push({'ing':ingredient.ingredientIn});*/
			$scope.clearAddRecipeForm();
	};
	
	$scope.clearAddRecipeForm = function(){
		this.recipe={};
		this.ingredient={};
		$scope.showRecipeForm = false;
	}
	
	$scope.newAdd = function(){
	};
	
	$scope.showIngredientPanel = function(){
		$scope.showAddedIngredient = true;
	};
	
	$scope.closeIngredientsForm = function(){
		$scope.ingredients= {};
		$scope.showIngredientsForm = false;
		
	};
	
	$scope.removeIngredient = function(){
	};
	
	$scope.viewRecipe = function(row){
		$scope.recipePopUp = true;
		$scope.recipeName = row.entity.recipe;
	};
	
	//ingrPopUp
	$scope.showIngr = function(row){
		//this opens the second grid(ingredients)
		$scope.manageRecipe=true;
		$scope.recipeName = row.entity.recipe;
	};

	$scope.editIngr = function(row){
		$scope.showUpdatePop = true;
		$scope.ingredientName = row.entity.name;
		//this will have the recipe name & its dy
		//$scope.RecipeName = row.entity.name;
		var n = row.entity.name;
		var q = row.entity.qty;
		var p = row.entity.price;
		var u = row.entity.unit;
		$scope.newIngr = {"Name":n,"Qty":q,"Price":p,"Unit":u};
	};
	
		$scope.update = function(newIngr){
			alert("hf")
			var count = 0;
			var i = $scope.gridOpts.data.indexOf(row.entity);
			angular.forEach($scope.gridOpts.data, function(updateObj){
				
				if(updateObj.name== newIngr.Name){
					count++;
				}
					alert(count)
			});
			alert("ttt")
			if(count==0){
				n = newIngr.Name;
				q = newIngr.Qty;
				p = newIngr.Price;
				u = newIngr.Unit;
				$scope.gridOptions.data.splice(i,1,{"name":n,"qty":q,"price":p,"unit":u});
				
				$scope.successMsg = true;
				$scope.updateSuccessMsg = "Ingredient updated successfully";
				
				newIngr.Name="";
				newIngr.Qty="";
				newIngr.Price="";
				newIngr.Unit="";
			}
			else{
				$scope.duplicateMsg = true;
				$scope.updateFailureMsg = "Ingredient exists!";
				
				newIngr.Name=n;
				newIngr.Qty=q;
				newIngr.sPrice=p;
				newIngr.Unit=u;
			}
		};

		/******************CLIPBOARD
		/*
		 * 	..to use two expressions
		 *   <td><span ng-bind-html="recipes.{{recipeName}}[0].Slno"></span></td>
		 *   <td>{{recipes.{{recipeName}}[0].Slno}}</td>
		 *   
		 *   
		 * */

		//Json object which holds the recipe:ingredients
		$scope.ItalianRecipes = {
				"burrito": [{
					"Slno": "1",
					"Ingredient": "Flour",
					"Qty": "1",
					"Price": "55",
					"Unit": "kg",
				}, {
					"Slno": "2",
					"Ingredient": "Water",
					"Qty": "1",
					"Price": "44",
					"Unit": "ltr",
				}, {
					"Slno": "3",
					"Ingredient": "Oil",
					"Qty": "1",
					"Price": "33",
					"Unit": "ltr",
				}],
				
				"pasta": [{
					"Slno": "1",
					"Ingredient": "Flour",
					"Qty": "1",
					"Price": "66",
					"Unit": "kg",
				}, {
					"Slno": "2",
					"Ingredient": "alapino",
					"Qty": "1",
					"Price": "88",
					"Unit": "ltr",
				}, {
					"Slno": "3",
					"Ingredient": "Olive oil",
					"Qty": "1",
					"Price": "73",
					"Unit": "ltr",
				}],
				
				"Shrimp Rice":[{
            	   "Slno": "1",
            	   "Ingredient": "Shrimps",
            	   "Qty": "5",	
            	   "Price": "118",
            	   "Unit": "Pieces",
            	   },
			  	{
				    "Slno": "3",
				    "Ingredient": "Rice",
				    "Qty": "0.5",
				    "Price": "68",
					"Unit": "kg",
					},
				{
					"Slno": "3",
					"Ingredient": "Olive oil",
					"Qty": "1",
					"Price": "73",
					"Unit": "ltr",
					}
				]
			};
		
		/************ FOR REVIEW **************/
		/*var rWhole = $scope.recipe.name + $scope.ingredient;
		$scope.dish = {rWhole:[{},{},{}]};
		$scope.ItalianRecipes = {"name":ingredients};
			*/
		
};