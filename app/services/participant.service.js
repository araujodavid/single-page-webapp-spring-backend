(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('participantService', ['$resource', initParticipantService]);

    /**
     * Function responsible for the service related to participants's API
     * @param $resource
     */
    function initParticipantService($resource) {
        return $resource('http://localhost:8080/spa-spring-backend/participantes/:id');
    };
})();
