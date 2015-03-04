/**
 * Created by david on 23/02/15.
 */
(function() {
    'use strict';

    angular
        .module('activitiesApp')
        .controller('activityController', ['$log', '$scope', '$routeParams', 'activityService', initActivityController]);

    /**
     * Function responsible for the controller related to activitie entity
     * @param $log
     * @param $scope
     * @param $routeParams
     * @param activityService
     */
    function initActivityController($log, $scope, $routeParams, activityService) {

        $scope.getActivity = getActivity;

        loadActivities();

        //Internal functions
        /**
         * Load all available activities
         */
        function loadActivities() {
            activityService.query(
                function(data) {
                    $scope.activities = data;
                },
                function(error) {
                    $log.error(error);
                }
            );
        };

        /**
         *
         */
        function getActivity(id) {

        };
    };
})();