describe('a simple test for LEARN portal', () => {
    it('should open the LEARN portal', () => {
        browser.url('https://learn.epam.com/explore?filter=~(sorting~(field~%27RATING~isDescending~true))&tab=catalog');
        expect(browser).toHaveTitle('Learn');
    });

    it('should search for mentoring programs', () => {
        const searchInput = $('//input[@class="uui-input"]'); 
        searchInput.addValue('Mentoring');

        expect(searchInput).toHaveValue('mentoring', { ignoreCase: true });      
    });

    it('should select one of the available programs', () => {
        const collectionElement = $('//div[@class="BigCard_headerCaption__zpa2N"]').$('//div[text() = "HTML CSS Mentoring Program"]');
        collectionElement.click();
        const elementTitle = $('//div[text()="HTML CSS Mentoring Program"]');
        const visibility = elementTitle.isDisplayed();

        expect(visibility);
    });

    it('should filter all Software Testing courses that are available in English', () => {
        browser.newWindow('https://learn.epam.com/explore?filter=~(sorting~(field~%27RATING~isDescending~true))&tab=catalog');
        $('//div[text()="SHOW ALL 122 CATEGORIES"]').click();
        const searchForCategory = $('input[class="uui-input _1djZg _28khP _371ux"]');
        searchForCategory.addValue('software');
        $('//div[text()="Software Testing"]').click();
        $('//div[text()="Select"]').click();
        $('//div[text()="English"]').click();
        const foundCourse = $('//div[text()="Software Testing Introduction (ENG)"]');
        const courseVisible = foundCourse.isDisplayed();

        expect(courseVisible);
    });
}); 