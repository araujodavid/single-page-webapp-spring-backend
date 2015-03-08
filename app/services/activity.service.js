/**
 * Created by araujodavid on 19/02/15.
 */
(function() {
    'use strict';

    angular
        .module('activitiesApp')
        .factory('activityService', ['$resource', initActivityService]);

    /**
     * Function responsible for the service related to activities's API
     * @param $resource
     */
    function initActivityService($resource) {
        return $resource('http://localhost:8080/spa-spring-backend/atividades/:id');
    };
})();
