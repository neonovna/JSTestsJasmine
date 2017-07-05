describe("Test get()", function() {

  it("browser.getCurrentUrl()", function() {
    browser.get("https://www.lego.com/en-gb/");
    expect(browser.getCurrentUrl()).toBe('https://www.lego.com/en-gb/');
  });

  it("browser.getTittle()", function() {
    expect(browser.getTitle()).toContain("LEGO");
  });

})
