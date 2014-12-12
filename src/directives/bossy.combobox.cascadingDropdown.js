/**
 * Bossy Combobox Cascading Dropdown feature
 * The choices of the following dropdown are depedent on the previous selection.
 *
 * @author Bossy/UI
 */

var app = angular.module("bossy.combobox.cascadingDropdown", []);

/**
 * App-Controller to set up model
 * Adds choices for the three dropdowns
 * Dependencies within arrays: A - A1 - A1a
 */

app.controller('AppCtrl', function($scope) {

    $scope.choices = {
        'Option A': {
            'Option A1': ['Option A1a', 'Option A1b', 'Option A1c'],
            'Option A2': ['Option A2a', 'Option A2b', 'Option A2c'],
            'Option A3': ['Option A3a', 'Option A3b', 'Option A3c']
        },
        'Option B': {
            'Option B1': ['Option B1a', 'Option B1b', 'Option B1c'],
            'Option B2': ['Option B2a', 'Option B2b', 'Option B2c'],
            'Option B3': ['Option B3a', 'Option B3b', 'Option B3c']
        },
        'Option C': {
            'Option C1': ['Option C1a', 'Option C1b', 'Option C1c'],
            'Option C2': ['Option C2a', 'Option C2b', 'Option C3b'],
            'Option C3': ['Option C3a', 'Option C3b', 'Option C3c']
        }
    };

})