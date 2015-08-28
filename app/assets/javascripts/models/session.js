(function() {

  angular
    .module('pincersInteractive')
    .factory('Session', sessionModel);

  /* @ngInject */
  function sessionModel(restmod) {
    return restmod.model('/api/v1/sessions');
  }

})();
