/**
 * Bossy Combobox Checkbox Multiselect Feature
 * Allows user to select multiple choices with checkboxes, select all or deselect all
 *
 * @author Bossy/UI
 */

var app = angular.module("bossy.combobox.checkboxMultiselect", []);

/**
 * App-Controller to set up model and select all, deselect all functionality
 *
 * @param $scope controller scope
 */

app.controller('AppCtrl', function($scope) {

    // set choices
    $scope.choices = ['Option A', 'Option B', 'Option C'];

    // selected choices
    $scope.name = {choices: []};

    // function selectAll to select all checkboxes
    $scope.selectAll = function() {
        $scope.name.choices = angular.copy($scope.choices);
    };

    // function deselectAll to deselect all checkboxes
    $scope.deselectAll = function() {
        $scope.name.choices = [];
    };

});

/**
 * App-Directive to set up functionality for feature
 *
 * @param $parse converts Angular expression into function
 * @param $compile to compile the DOM into our template
 * @returns functionality and template when used
 */

app.directive('bossyCheckboxMultiselect', ['$parse', '$compile', function($parse, $compile) {

    /**
     * returns custom template and functionality when used
     *
     * @param tElement template-element
     * @param tAttrs template-attributes
     * @returns function watch to watch the behaviour
      */

    return {
        restrict: 'AE',
        scope: true,
        compile: function(tElement, tAttrs) {
            // local variable storing checkbox model
            tElement.attr('ng-model', 'checked');
            // prevent recursion
            tElement.removeAttr('bossy-checkbox-multiselect');
            return watch;
        }
    };

    /**
     * add the selected to choice to displayed array
     *
     * @param arr angular array (here: choices array)
     * @param item angular item (here: selected item)
     * @returns new array containing selected choices
     */

    function addChoice (arr, item) {
        arr = angular.isArray(arr) ? arr : [];
        for (var i = 0; i < arr.length; i++) {
            if (angular.equals(arr[i], item)) {
                return arr;
            }
        }
        // add choice to array
        arr.push(item);
        // return new array
        return arr;
    }

    /**
     * remove selected choice from displayed array when clicked
     *
     * @param arr angular array (here: choices array)
     * @param item angular item (here: selected item)
     * @returns new array containing selected choices
     */

    function removeChoice(arr, item) {
        if (angular.isArray(arr)) {
            for (var i = 0; i < arr.length; i++) {
                if (angular.equals(arr[i], item)) {
                    // remove from array
                    arr.splice(i, 1);
                    break;
                }
            }
        }
        // return new array
        return arr;
    }

    /**
     * check items containing in array
     *
     * @param arr angular array (here: choices array)
     * @param item angular item (here: selected item)
     * @returns true for each item that is selected and false for each that isn't
     */

    function containCheckbox (arr, item) {
        if (angular.isArray(arr)) {
            for (var i = 0; i < arr.length; i++) {
                if (angular.equals(arr[i], item)) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * watch behaviour of directive and model
     *
     * @param scope directive scope
     * @param elem angular element
     * @param attrs angular attributes
     */

    function watch(scope, elem, attrs) {

        // compile - ng-model pointing to checked
        $compile(elem)(scope);

        // getter and setter for original model
        var getter = $parse(attrs.bossyCheckboxMultiselect);
        var setter = getter.assign;

        // value added to list
        var value = $parse(attrs.bossyListValue)(scope.$parent);

        // watch the change of checked values
        scope.$watch('checked', function(newValue, oldValue) {
            if (newValue === oldValue) {
                return;
            }
            var actual = getter(scope.$parent);
            if (newValue === true) {
                setter(scope.$parent, addChoice (actual, value));
            } else {
                setter(scope.$parent, removeChoice(actual, value));
            }
        });

        // watch change of original model
        scope.$parent.$watch(attrs.bossyCheckboxMultiselect, function(newArr) {
            scope.checked = containCheckbox (newArr, value);
        }, true);
    }

}]);