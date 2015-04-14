/**
 * Created by douglas on 07/04/15.
 */
(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('participantController', ['$log', '$scope', '$routeParams', 'participantService', initParticipantController]);

    /**
     * Function responsible for the controller related to participant entity
     * @param $log
     * @param $scope
     * @param $routeParams
     * @param participantService
     */
    function initParticipantController($log, $scope, $routeParams, participantService) {

        $scope.message = {status: false};
        $scope.getParticipant = getParticipant;
        $scope.deleteParticipant = deleteParticipant;
        $scope.removeAlert = removeAlert;

        loadParticipants();

        //Internal functions
        /**
         * Load all available activities
         */
        function loadParticipants() {
            participantService.query(
                function(data) {
                    $scope.participants = data;
                },
                function(error) {
                    $log.error(error);
                }
            );
        };

        function getParticipant(id) {

        };

        function deleteParticipant(id) {
            participantService.delete({id: id},
                function(success) {
                    loadParticipants();
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