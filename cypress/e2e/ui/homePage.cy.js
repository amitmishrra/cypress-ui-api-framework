import { clickOnElement, visitPage, typeText, clearOldTextAndTypeNew } from '../../utils/helper';

describe('Perform Tasks in https://demoqa.com/ ', () => {
    it('Visit https://demoqa.com/', () => {
        visitPage('https://demoqa.com/');
        clickOnElement("//h5[text()='Elements']")
        clickOnElement("//*[text()='Web Tables']")
        clickOnElement("//*[@id='addNewRecordButton']")
        typeText("#firstName", "Alden")
        typeText("#lastName", "Cantrell")
        typeText("#userEmail", "Test@Test")
        typeText("#age", "30")
        typeText("#salary", "12345")
        typeText("#department", "QA")
        clickOnElement("//*[@id='submit']")
        clickOnElement("(//*[text()='Alden']//following::div//div//span[@title='Edit'])[1]")
        clearOldTextAndTypeNew("//*[@id='firstName']", "Gerimedica")
        clearOldTextAndTypeNew("//*[@id='lastName']", "BV")
        clickOnElement("//*[@id='submit']")
    }
    );
});