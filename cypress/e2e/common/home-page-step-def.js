import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import homePageClass from "../../support/page-classes/home-page-class";
const homePage = new homePageClass()

When('I can see the rexel logo', function () {
    homePage.isLogoVisible()
})
When('I click on {string} button', function (btn) {
    homePage.clickOnNewAccBtn(btn)

})
When('I am able to enter {string} and {string} values', function (numAcc, numPostCode) {
    homePage.fillInputField(numAcc, numPostCode)
})
When('I click on {string} button for nevigate to next page or back page', function (btn) {
    homePage.clickbtnBackOrContinue(btn)
})
// When('I fill all the mandatory fields', function () {
//     // homePage.enterValuesInInputField('testN')
//     // homePage.enterValuesInInputField('testL',1)
//     // homePage.enterValuesInInputField('testNL@gmail.com',2)
//     // homePage.enterValuesInInputField('726412709',3)
//     // homePage.enterValuesInInputField('userTest1',4)
//     // homePage.enterValuesInInputField('Test@123',5)
//     // homePage.enterValuesInInputField('Test@123',6)
// })
When('I fill {string} to the mandatory field', function (input) {
    homePage.enterValuesInInputField(input)
})

