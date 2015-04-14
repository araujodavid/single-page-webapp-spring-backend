/**
 * Created by douglas on 07/04/15.
 */
(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('institutionController', ['$log', '$scope', '$routeParams', 'institutionService', initInstitutionController]);

    /**
     * Function responsible for the controller related to institution entity
     * @param $log
     * @param $scope
     * @param $routeParams
     * @param institutionService
     */
    function initInstitutionController($log, $scope, $routeParams, institutionService) {

        $scope.message = {status: false};
        $scope.getInstitution = getInstitution;
        $scope.deleteInstitution = deleteInstitution;
        $scope.removeAlert = removeAlert;

        loadInstitutions();

        //Internal functions
        /**
         * Load all available institution
         */
        function loadInstitutions() {
            institutionService.query(
                function(data) {
                    $scope.institutions = data;
                },
                function(error) {
                    $log.error(error);
                }
            );
        };

        function getInstitution(id) {

        };

        function deleteInstitution(id) {
            institutionService.delete({id: id},
                function(success) {
                    loadInstitutions();
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