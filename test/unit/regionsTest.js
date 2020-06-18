describe('regionsController', function () {

    beforeEach(module('regionsApp'));
    describe('regionsController', function () {
        var ctrl, scope;
        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('regionsController', { $scope:scope });
        }));
        describe('$scope.emptyNewRegions', function () {
            it('Testing emptyNewRegions function', function () {
               
                expect(ctrl).toBeDefined();
                scope.emptyNewRegions();
                expect(scope.newRegions).toBeDefined();
                expect(scope.newRegions.length).toBe(0);
            });
        });
    });
});