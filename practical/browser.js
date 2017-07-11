describe("Test get()", function() {

  it("browser.getCurrentUrl() test", function() {
    browser.get("https://www.lego.com/");
    expect(browser.getCurrentUrl()).toBe('https://www.lego.com/pl-pl/');
  });

  it("browser.getTittle()", function() {
    expect(browser.getTitle()).toContain("LEGO");
  });

  // xit("browser.getPageSource() test", function() {
  //   browser.get("https://www.lego.com/").then(function() {
  //     return browser.getPageSource().then(function(txt) {
  //       console.log(txt);
  //     })
  //   })
  // });

  it("browser.restart() test", function() {
    browser.get("https://www.lego.com/en-gb/");
    browser.restart();
  });



})
