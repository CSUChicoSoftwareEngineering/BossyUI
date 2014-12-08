describe('bossyCombobox',function() {
  var myFunction = BC.myFunction;

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
