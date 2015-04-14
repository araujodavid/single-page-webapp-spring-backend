/**
 * Created by douglasjvah on 09/04/15.
 */
(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('institutionService', ['$resource', initInstitutionService]);

    /**
     * Function responsible for the service related to activities's API
     * @param $resource
     */
    function initInstitutionService($resource) {
        return $resource('http://localhost:8080/spa-spring-backend/instituicoes/:id');
    };
})();
