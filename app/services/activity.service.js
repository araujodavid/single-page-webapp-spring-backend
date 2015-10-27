/**
 * Created by araujodavid on 19/02/15.
 */
(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('activityService', ['$resource', initActivityService]);

    /**
     * Function responsible for the service related to activities's API
     * @param $resource
     */
    function initActivityService($resource) {
        return $resource('http://virtuoso.mooo.com/spa/atividades/:id');
    };
})();
