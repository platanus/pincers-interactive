(function() {

  angular
    .module('restmod')
    .factory('RootlessAMSApi', apiConfig);

  /* @ngInject */
  function apiConfig(restmod, inflector) {

    var config = { // include default packer extension
      $config: {
        style: 'RootlessAMSApi',
        primaryKey: 'id',
        jsonMeta: 'meta',
        jsonLinks: 'links'
      },

      $extend: {
        // special snakecase to camelcase renaming
        Model: {
          decodeName: inflector.camelize,
          encodeName: function(_v) {
            return inflector.parameterize(_v, '_');
          }
        }
      }
    };

    return restmod.mixin(config);
  }

})();
