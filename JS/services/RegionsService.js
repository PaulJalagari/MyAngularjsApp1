'use strict';
window.app.factory('regionsService', regionsService);

regionsService.$inject = ['$q', '$http'];

function regionsService($q, $http) {

    var serviceBasedServiceUnits;
    return {
        getService1: getService1,
        getService2: getService2
    }
    /**
     * returns service data from 'service1' json file
     */
    function getService1() {
        return $http.get('./JS/data/service1.json').then(function (response) {
            if (response && response.data) {
                return response;
            }
        }, function (response) {
            return "";
        });
    }

    /**
     * returns service data from 'service2' json file
     */
    function getService2() {
        return $http.get('./JS/data/service2.json').then(function (response) {
            return response;
        }, function (response) {
            // something went wrong
            return "";
        });
    }

}