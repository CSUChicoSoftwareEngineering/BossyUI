// CONTROLLER AND MODEL

describe("bossyCascDropdownCtrl", function () {

    beforeEach(module("bossy.cascadingDropdown"));

    describe("AppCtrl", function () {

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope;
            controller = $controller;
        }));

        it("should define choices within scope", function () {
            controller("AppCtrl", {$scope: scope});
            expect(scope.choices).toBeDefined();
        });

    });

});

// TEMPLATE

describe('bossyCascDropdownTmpl', function () {

    var elm, scope;

    beforeEach(module('bossy.combobox.checkboxMultiselect'));

    beforeEach(inject(function($rootScope, $compile) {

        elm = angular.element(
            '<div>' +
            'Choice 1:' +
            '<select id="choiceOne" ng-model="choiceTwoOptions" ng-options="choiceOne for (choiceOne, choiceTwoOptions) in choices">' +
            '<option value="">Select</option>' +
            '</select>' +
            '</div>' +
            '<div>' +
            'Choice 2:' +
            '<select id="choiceTwo" ng-disabled="!choiceTwoOptions" ng-model="choiceThreeOptions" ng-options="choiceTwo for (choiceTwo, choiceThree) in choiceTwoOptions">' +
            '<option value="">Select</option>' +
            '</select>' +
            '</div>' +
            '<div>' +
            'Choice 3:' +
            '<select id="choiceThree" ng-disabled="!choiceThreeOptions || !choiceTwoOptions" ng-model="choiceThree" ng-options="choiceThree for choiceThree in choiceThreeOptions">' +
            '<option value="">Select</option>' +
            '</select>' +
            '</div>');

        scope = $rootScope;
        $compile(elm)(scope);
        scope.$digest();

    }));

    it('should set correct dropdown title', function () {
        var titles = elm.find('option');
        expect(titles.eq(0).html()).toBe('Select');
        expect(titles.eq(1).html()).toBe('Select');
        expect(titles.eq(2).html()).toBe('Select');
    });

});

// VIEW

describe('bossyCascDropdownViewFirst', function () {

    var element;

    beforeEach(module('bossy.cascadingDropdown'));

    beforeEach(inject(function(){
        element = angular.element('<select id="choiceOne" ng-model="choiceTwoOptions" ng-options="choiceOne for (choiceOne, choiceTwoOptions) in choices"></select>');
    }));

    it('should contain empty string within select-tag', function () {
        expect(element.text()).toBe('');
    });

    it('should contain first choice option as id', function () {
        expect(element.attr('id')).toBe('choiceOne');
    });

});

describe('bossyCascDropdownViewSecond', function () {

    var element;

    beforeEach(module('bossy.cascadingDropdown'));

    beforeEach(inject(function(){
        element = angular.element('<select id="choiceTwo" ng-disabled="!choiceTwoOptions" ng-model="choiceThreeOptions" ng-options="choiceTwo for (choiceTwo, choiceThree) in choiceTwoOptions"></select>');
    }));

    it('should contain empty string within select-tag', function () {
        expect(element.text()).toBe('');
    });

    it('should contain second choice option as id', function () {
        expect(element.attr('id')).toBe('choiceTwo');
    });

});

describe('bossyCascDropdownViewThird', function () {

    var element;

    beforeEach(module('bossy.cascadingDropdown'));

    beforeEach(inject(function(){
        element = angular.element('<select id="choiceThree" ng-disabled="!choiceThreeOptions || !choiceTwoOptions" ng-model="choiceThree" ng-options="choiceThree for choiceThree in choiceThreeOptions"></select>');
    }));

    it('should contain empty string within select-tag', function () {
        expect(element.text()).toBe('');
    });

    it('should contain third choice option as id', function () {
        expect(element.attr('id')).toBe('choiceThree');
    });

});
