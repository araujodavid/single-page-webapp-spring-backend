/**
 * Created by araujodavid on 19/02/15.
 */
(function() {
    'use strict';

    angular
        .module('myApp', ['ngRoute', 'ngResource'])
        .config(['$routeProvider', config]);

    /**
     * Main settings for the AngularJS Activities App
     * @param $routeProvider
     */
    function config($routeProvider) {
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
            .when('/participants', {
                templateUrl: 'participant/participants.html',
                controller: 'participantController'
            })
            .when('/institutions', {
                templateUrl: 'institution/institutions.html',
                controller: 'institutionController'
            })
            .otherwise({redirectTo: '/activities'});
    };
})();