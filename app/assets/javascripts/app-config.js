(function() {

  angular
    .module('pincersInteractive')
    .config(appConfig);

  function appConfig(restmodProvider) {
    // configure restmod
    restmodProvider.rebase('RootlessAMSApi');
  }

  appConfig.$inject = ['restmodProvider'];

})();
