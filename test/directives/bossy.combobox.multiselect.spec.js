// CONTROLLER AND MODEL

describe("bossyMultiselectCtrl", function () {

    beforeEach(module("bossy.combobox.multiselect"));

    describe("AppCtrl", function () {

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope;
            controller = $controller;
        }));

        it("should define choices within scope", function () {
            controller("AppCtrl", {$scope: scope});
            expect(scope.choices).toBeDefined();
        });

        it("should define selected choice within scope", function () {
            controller("AppCtrl", {$scope: scope});
            expect(scope.selectedChoice).toBeDefined();
        });

        it("should set selected choice to empty JSON at the beginning", function () {
            controller("AppCtrl", {$scope: scope});
            expect(scope.selectedChoice).toEqual([]);
        });

    });

});

// TEMPLATE

describe('bossyMultiselectTmpl', function () {

    var elm, scope;

    beforeEach(module('bossy.combobox.multiselect'));

    beforeEach(inject(function($rootScope, $compile) {

        elm = angular.element(
            '<div>' +
            '<select multiple>' +
            '<option ng-show="multiple" ng-click="checkAll()">Select all</option>' +
            '<option ng-show="multiple" ng-click="uncheckAll()">Deselect all</option>' +
            '<option ng-repeat="i in items | filter:searchText" ng-click="select(i); focus()">{{i.label}}</option>' +
            '</select>' +
            '</div>');

        scope = $rootScope;
        $compile(elm)(scope);
        scope.$digest();

    }));

    it('should set correct option titles for select all and deselect all option', function () {
        var titles = elm.find('option');
        expect(titles.eq(0).html()).toBe('Select all');
        expect(titles.eq(1).html()).toBe('Deselect all');
    });

});

// VIEW

describe('bossyMultiselectView', function () {

    var element;

    beforeEach(module('bossy.combobox.multiselect'));

    beforeEach(inject(function(){
        element = angular.element('<bossy-multiselect multiple="true" ng-model="selectedChoice" options="choice.name for choice in choices" change="selected()"></bossy-multiselect>');
    }));

    it('should have no text within directive-tag', function () {
        expect(element.text()).toBe('');
    });

    it('should be multiple', function () {
        expect(element.attr('multiple')).toBe('multiple');
    });

    it('should contain correct options', function () {
        expect(element.attr('options')).toBe('choice.name for choice in choices');
    });

    it('should cause correct function when changed', function () {
        expect(element.attr('change')).toBe('selected()');
    });

});