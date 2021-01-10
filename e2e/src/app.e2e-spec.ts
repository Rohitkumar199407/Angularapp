import { AppPage } from './app.po';
import { browser, logging,element, By } from 'protractor';

describe('workspace-project App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    // TODO:
    it('should ensure sure app loads', () => {
        browser.get('http://localhost:4200/');
        browser.driver.sleep(1000);
        console.log(browser.getTitle());
        expect(browser.getTitle()).toEqual('TequilaMockingbird');
    });

    // TODO:
    it('should route to a random recipe, and ensure another route there is different than the first', () => { 
        element(By.xpath("//span[contains(text(),'Random Recipe')] ")).click();
        browser.driver.sleep(1000);
        var drinkname=element(By.xpath("//h1[@class='detail-name']")).getText();
        browser.driver.sleep(1000);
        element(By.xpath("//span[contains(text(),'Random Recipe')] ")).click();
        browser.driver.sleep(1000);
        var drinkname1=element(By.xpath("//h1[@class='detail-name']")).getText();
        expect(drinkname).toEqual(drinkname1);
    });

    // TODO: Add any additional you see fit
    it('should route to CocktailList', () => { 
        element(By.xpath("//span[contains(text(),'Cocktail List')] ")).click();
        browser.driver.sleep(1000);
        var firstdrink= element(By.xpath(" (//div/mat-card-title[@class='mat-card-title'])[1]")).isDisplayed();
        expect(firstdrink).toBeTruthy();
     });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(
            jasmine.objectContaining({
                level: logging.Level.SEVERE,
            } as logging.Entry)
        );
    });
});
