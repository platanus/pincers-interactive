angular
  .module('pincersInteractive')
  .controller('editorCtrl', editorCtrl);

function editorCtrl($scope){
  $scope.run = run;

  function run(){
    console.log($scope.editorCode);
  }
}

editorCtrl.$inject = ['$scope'];
