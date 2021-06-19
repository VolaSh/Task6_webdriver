describe('a simple test for a non-Angular app using Protractor', function() {
    it('should sort courses by course name', function() {
        browser.ignoreSynchronization = true;
        browser.get('https://learn.epam.com/explore?filter=~(sorting~(field~%27RATING~isDescending~true))&tab=catalog');
        const sortBy = element(by.xpath('//div[text()="Rating"]'));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(sortBy), 5000);
        sortBy.click();
        const sortByCourseName = element(by.xpath('//div[text() = "Course Name"]'));
        browser.wait(EC.visibilityOf(sortByCourseName), 5000);
        sortByCourseName.click();
        browser.wait(EC.urlContains('filter=~(sorting~(isDescending~false~field~%27NAME))'), 5000);
    
        expect(browser.getCurrentUrl()).toEqual('https://learn.epam.com/explore?filter=~(sorting~(isDescending~false~field~%27NAME))&tab=catalog');
      });

      


    });
    