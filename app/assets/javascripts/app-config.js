(function() {

  angular
    .module('pincersInteractive')
    .config(appConfig);

  /* @ngInject */
  function appConfig(restmodProvider) {
    // configure restmod
    restmodProvider.rebase('RootlessAMSApi');
  }

})();
