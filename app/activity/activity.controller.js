/**
 * Created by david on 23/02/15.
 */
(function() {
    'use strict';

    angular
        .module('myApp')
                .controller('activityController', ['$log', '$scope', '$location', '$routeParams', 'activityService', initActivityController]);

    /**
     * Function responsible for the controller related to activitie entity
     * @param $log
     * @param $scope
     * @param $routeParams
     * @param activityService
     */
    function initActivityController($log, $scope, $location, $routeParams, activityService) {

        $scope.message = {status: false};
        $scope.getActivity = getActivity;
        $scope.deleteActivity = deleteActivity;
        $scope.removeAlert = removeAlert;
        $scope.submitFormActivity = submitFormActivity;

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

        function getActivity(id) {

        };

        function submitFormActivity() {
            //vamos enviar a requisção ao servidor
            activityService.save($scope.atividade
            loadActivities();
            $location.path("#");
        };

        function deleteActivity(id) {
            activityService.delete({id: id},
                function(success) {
                    loadActivities();
                    alert('alert-success', 'Well done!', success.message);
                },
                function(error) {
                    alert('alert-danger', 'Oh snap!', 'Alguma coisa deu errado');
                    $log.error(error);
                }
            );
        };


        function removeAlert() {
            $scope.message.status = false;
        };

        function alert(css, title, text) {
            $scope.message.status = true;
            $scope.message.class = css;
            $scope.message.title = title;
            $scope.message.text = text;
        };
    };
})();