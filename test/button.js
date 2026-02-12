const { Builder, By, Until, until } =
require('selenium-webdriver')

async function debugElementInteraction() {
    let driver = await new Builder().forBrowser('chromw').build();
    try {
        await driver.get('http://www.example.com/form-with-submit');

        let submitbtn = await driver.wait(until.elementLocated(By.xpath("//button[contains(text(),'Submit'"), 1000))
        await driver.wait(until.elementIsVisible(submitbtn), 10000);
        await driver.wait(until.elementIsEnabled(submitbtn), 10000);
        await submitbtn.click();
        console.log("Submit Button clicked Successfully");
    } catch (error) {
        console.log("Error clicking submit button:", error)
    } finally {
        await driver.quit();
    }
}
debugElementInteraction();