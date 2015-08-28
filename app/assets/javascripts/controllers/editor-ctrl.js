(function(){

  angular
    .module('pincersInteractive')
    .controller('editorCtrl', editorCtrl);

  function editorCtrl($scope, Session){
    $scope.run = run;
    $scope.configOutput = configOutput;
    $scope.configEditor = configEditor;

    var codeEditor, outputEditor;

    $scope.editorCode = 'pincers.goto "www.nodejs.org"' +
    '\nfirst_link = pincers.css("a").first' +
    '\nsubmit first_link.to_html';

    function configEditor(_editor){
      _editor.commands.removeCommands(["gotoline", "find"]);
    }

    function configOutput(_editor){
      outputEditor = _editor;

      _editor.setReadOnly(true);
      _editor.setHighlightActiveLine(false);
      _editor.setHighlightGutterLine(false);
      _editor.renderer.$cursorLayer.element.style.opacity = 0;
      _editor.commands.removeCommands(["gotoline", "find"]);
    }

    function run(){
      $scope.session = Session.$create({
        code: $scope.editorCode
      })
      .$then(handleResponse);
    }

    function handleResponse(response){
      switch(response.result){
        case 'json':  handleJSON(response.content); break;
        case 'html':  handleHTML(response.content); break;
        case 'error': handleError(response.content); break;
      }
    }

    function handleJSON(output){
      outputEditor.getSession().setMode("ace/mode/json");
      outputEditor.setValue(output);
    }

    function handleHTML(output){
      outputEditor.getSession().setMode("ace/mode/html");
      outputEditor.setValue(output);
    }

    function handleError(output){
      outputEditor.setValue(output);
    }

  }

  editorCtrl.$inject = ['$scope','Session'];

})();
