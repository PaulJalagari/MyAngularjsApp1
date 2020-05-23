'use strict';
window.app.factory('myService', myService);

myService.$inject = ['$q', '$http'];

function myService($q, $http) {

    var serviceBasedServiceUnits;
    return {
        getService1: getService1,
        getService2: getService2
    }

    function getService1() {
        return $http.get('./JS/data/service1.json').then(function (response) {
            if (response && response.data) {
                return response;
            }
        }, function (response) {
            return "";
        });
    }


    function getService2() {
        return $http.get('./JS/data/service2.json').then(function (response) {
            return response;
        }, function (response) {
            // something went wrong
            return "";
        });
    }

}