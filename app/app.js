/**
 * Created by araujodavid on 19/02/15.
 */
(function() {
    'use strict';

    angular
        .module('activitiesApp', ['ngMaterial', 'ngRoute', 'ngResource'])
        .config(['$mdThemingProvider', '$routeProvider', config]);

    /**
     * Main settings for the AngularJS Activities App
     * @param $mdThemingProvider
     * @param $routeProvider
     */
    function config($mdThemingProvider, $routeProvider) {
        //Use the 'blue-grey' theme - override default 'blue' theme
        $mdThemingProvider.theme('default').primaryPalette('blue-grey');

        $routeProvider
            .when('/activities', {
                templateUrl: 'activity/activities.html',
                controller: 'activityController'
            })
            .when('/activity/:id', {
                templateUrl: 'activity/form.html',
                controller: 'activityController'
            })
            .when('/activity', {
                templateUrl: 'activity/form.html',
                controller: 'activityController'
            })
            .otherwise({redirectTo: '/activities'});
    };
})();