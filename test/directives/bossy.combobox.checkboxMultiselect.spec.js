// XXXXXXXXXX CONTROLLER XXXXXXXXXX

describe("module", function () {
    beforeEach(module("bossy.combobox.checkboxMultiselect"));

    describe("AppCtrl", function () {

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope;
            controller = $controller;
        }));

        it("should be defined", function () {
            controller("AppCtrl", {$scope: scope});
            // check that model is defined within controller
            expect(scope.choices).toBeDefined();
            // check that content of array matches
            expect(scope.choices).toEqual(['Option A', 'Option B', 'Option C', 'Option D']);
            // check that array is defined within controller
            expect(scope.name).toBeDefined();
            // check that array matches
            expect(scope.name).toEqual({choices: []});
            // run function deselectAll()
            scope.deselectAll();
            // check that no element is in displayed array
            expect(scope.name.choices).toEqual([]);
            // run function selectAll()
            scope.selectAll();
            // check that all items are in displayed array
            expect(scope.name.choices).toEqual(scope.choices);
        });
    });
});
