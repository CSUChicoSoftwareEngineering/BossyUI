describe('bossyCombobox',function() {
  var myFunction = BC.myFunction;

  // do this in order to test a controller within a module:

  /*
  describe("module", function () {
     beforeEach(module("nameOfModule"));

    describe("nameOfController", function () {

      beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope;
        controller = $controller;
      }));

      it("should be anything", function () {
        controller("nameOfController", {$scope: scope});
        expect(something).toSomething();
      });
    });
   });
   */

  // If we need to setup beforeEach Statements
  //beforeEach(function(){ });

  // Do we need anything after each test?
  // afterEach(function(){ });
 

  // MultiSelect
  // Select Multiple objects in list
    it("Should be able to click multiple objects in list", function() {
      expect(mSelect()).tobetrue();
    });

  // None Selected
    it("Should have all elements unchecked in list", function() {
      expect(mNoSelected()).tobetrue();
    });

  
  // All Selected
    it("Should have all elements checked in list", function() {
      expect(mAllSelected()).tobetrue();
    });

  // Check Strings
    it("", function() {
      expect(mCheckString()).tobetrue();
    });
}

  // test for cascading if array is defined

describe("module", function () {
  beforeEach(module("bossy.cascadingDropdown"));

  describe("AppCtrl", function () {

    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope;
      controller = $controller;
    }));

    it("should be true", function () {
      controller("AppCtrl", {$scope: scope});
      expect(scope.choices).toBeDefined();
    });
  });
});
