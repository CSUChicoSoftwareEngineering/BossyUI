// CONTROLLER AND MODEL

describe("bossyCheckboxMultiselectCtrl", function () {

    beforeEach(module("bossy.combobox.checkboxMultiselect"));

    describe("AppCtrl", function () {
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope;
            controller = $controller;
        }));

        it("should define choices within scope", function () {
            controller("AppCtrl", {$scope: scope});
            expect(scope.choices).toBeDefined();
        });

        it("should equal JSON choices", function () {
            controller("AppCtrl", {$scope: scope});
            expect(scope.choices).toEqual(['Option A', 'Option B', 'Option C', 'Option D']);
        });


        it("should define name within scope", function () {
            controller("AppCtrl", {$scope: scope});
            expect(scope.name).toBeDefined();
        });

        it("should equal empty JSON at the beginning", function () {
            controller("AppCtrl", {$scope: scope});
            expect(scope.name).toEqual({choices: []});

        });

        it("should equal empty JSON without selection", function () {
            controller("AppCtrl", {$scope: scope});
            scope.deselectAll();
            expect(scope.name.choices).toEqual([]);
        });

        it("should equal fully selected JSON", function () {
            controller("AppCtrl", {$scope: scope});
            scope.selectAll();
            expect(scope.name.choices).toEqual(scope.choices);
        });

    });

});

// TEMPLATE

describe('bossyCheckboxMultiselectTmpl', function () {

    var elm, scope;

    beforeEach(module('bossy.combobox.checkboxMultiselect'));

    beforeEach(inject(function($rootScope, $compile) {

        elm = angular.element(
            '<div>' +
            '<label ng-repeat="choice in choices">' +
            '<input type="checkbox" bossy-checkbox-multiselect="name.choices" bossy-list-value="choice"> {{choice}}' +
            '</label>' +
            '<br />' +
            '<button ng-click="selectAll()">select all</button>' +
            '<button ng-click="deselectAll()">deselect all</button>' +
            '<br />' +
            'choices: {{ name.choices }}' +
            '</div>');

        scope = $rootScope;
        $compile(elm)(scope);
        scope.$digest();

    }));

    it('should match button titles', function () {
        var titles = elm.find('button');
        expect(titles.eq(0).html()).toBe('select all');
        expect(titles.eq(1).html()).toBe('deselect all');
    });

});

// VIEW

describe('bossyCheckboxMultiselectView', function () {

    var element;

    beforeEach(module('bossy.combobox.checkboxMultiselect'));

    beforeEach(inject(function () {
        element = angular.element('<input type="checkbox" bossy-checkbox-multiselect="name.choices" bossy-list-value="choice">{{choice}}');
    }));

    it('should add choice', function () {
        expect(element.text()).toBe('{{choice}}');
    });

    it('should be a checkbox', function () {
        expect(element.attr('type')).toMatch('checkbox');
    });

    it('should add name of choice to directive', function () {
        expect(element.attr('bossy-checkbox-multiselect')).toMatch('name.choices');
    });

    it('should add choice to list value', function () {
        expect(element.attr('bossy-list-value')).toMatch('choice');
    });

});

