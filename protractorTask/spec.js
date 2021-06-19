describe('a simple test for a Protractor app', function() {
  it('should have a title', function() {
    browser.get('https://onefootball.com/en/home');

    expect(browser.getTitle()).toEqual('home | OneFootball');
  });

  it('should open the "Matches" page', function() {
    const linkForMatches = element(by.css('li[class*="page-header"]>a[aria-label="Matches"]')) 
    linkForMatches.click();
    const expectedUrl = 'https://onefootball.com/en/matches';
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs(expectedUrl), 5000);

    expect(browser.getCurrentUrl()).toEqual(expectedUrl);
  });

  it('should find the timetable of upcoming matches', function() {
    const viewMatchesBtn = element(by.css('a[of-button]>span>span'));
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeClickable(viewMatchesBtn), 5000);
    viewMatchesBtn.click();
    browser.wait(EC.visibilityOf($('p>span[class="title-5-bold"]')), 5000);

    expect(element(by.css('p>span[class="title-5-bold"]')).getText()).toBe('Season schedule');
  });

  it('should search for team "Wales" and open results of its latest matches', function() {
    const searchField = element(by.css('input[enterkeyhint]'));
    searchField.click();
    searchField.sendKeys("Wales", protractor.Key.CONTROL);
    var EC = protractor.ExpectedConditions;
    const walesTeam = element(by.xpath('//p[text()="Wales"]'));
    browser.wait(EC.elementToBeClickable(walesTeam), 5000);
    walesTeam.click();
    browser.wait(EC.visibilityOf($('h1[class="title-2-bold"]')), 5000);
    const walesResults = element(by.css('a[href="/en/team/wales-312/results"]'));
    browser.wait(EC.elementToBeClickable(walesResults), 5000);
    walesResults.click();
    browser.wait(EC.visibilityOf($('span[class="title-5-bold"]')), 5000);


    expect(element(by.css('span[class="title-5-bold"]')).getText()).toBe('Results of the latest matches'); 
  });


});