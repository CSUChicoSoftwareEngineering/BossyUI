// XXXXXXXXXX CONTROLLER XXXXXXXXXX

describe("module", function () {
    beforeEach(module("bossy.combobox.multiselect"));

    describe("AppCtrl", function () {

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope;
            controller = $controller;
        }));

        it("should be defined", function () {
            controller("AppCtrl", {$scope: scope});
            // check that model is defined within controller
            expect(scope.choices).toBeDefined();
            // check that selected model is defined within controller
            expect(scope.selectedChoice).toBeDefined();
            // check that selected model is empty at the beginning
            expect(scope.selectedChoice).toEqula([]);
        });
    });
});