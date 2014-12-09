// XXXXXXXXXX CONTROLLER XXXXXXXXXX

describe("module", function () {
    beforeEach(module("bossy.cascadingDropdown"));

    describe("AppCtrl", function () {

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope;
            controller = $controller;
        }));

        it("should be defined", function () {
            controller("AppCtrl", {$scope: scope});
            // check that array choices is defined within scope
            expect(scope.choices).toBeDefined();
        });
    });
});
