describe("Home", function() {
  it("Can count", function() {
  	displayClock("clock", 0);
  	waits(2000);
  	expect(current_seconds).not.toBe(0);
  });
});