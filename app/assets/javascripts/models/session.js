(function() {

  angular
    .module('pincersInteractive')
    .factory('Session', sessionModel);

  function sessionModel(restmod) {
    return restmod.model('/api/v1/sessions');
  }

  sessionModel.$inject = ['restmod'];

})();
