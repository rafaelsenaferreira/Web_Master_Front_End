var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope) {
  $scope.products = ["Milk", "Bread", "Cheese","outro"];
  $scope.addItem = function(){  	
  	/*if e else é pra corrigir o erro de repetição*/
  	/*indexOf verificar se o item não existe*/  	
  	 if ($scope.products.indexOf($scope.item) == -1) {
  	 	/*push é pra adicionar um item no final do array*/
  	 	/*adicionando a variável item no final*/
      $scope.products.push($scope.item);
    } else {
      $scope.errortext = "The item is already in your shopping list.";
      console.log($scope.errortext);
    }
  }
  /*splice é do js serve pra remover*/
  $scope.removeItem = function(x){
  	$scope.products.splice(x,1);
  }
});
