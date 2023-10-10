class homePageClass {
    elements = {
        rexelLogo: () => cy.getIframeElement().find('a#webshopLogo>img'),
        lebAccRegistration: () => cy.getIframeElement().find('div.registration-wrapper div.cms-paragraph-comp-full font>font'),
        logInText: () => cy.getIframeElement().find('a#login-text'),
        lblHeader: () => cy.getIframeElement().find('div.registration-wrapper >div:nth-child(3) div.row h1 font>font'),
        btnsOpenNewAccount: () => cy.getIframeElement().find('div.select-container>div button.btn'),
        fillAccNumInputField: () => cy.getIframeElement().find('input#accountNumber'),
        fillPostalCodeinputField: () => cy.getIframeElement().find('input#postalCode'),
        btnBackOrContinue: () => cy.getIframeElement().find('form div.row button.btn span'),
        registorPageInputField: () => cy.getIframeElement().find('div.form-group'),

    }

    isLogoVisible() {
        this.elements.rexelLogo().should('be.visible')
    }
    clickOnNewAccBtn(btn) {
        this.elements.btnsOpenNewAccount().contains(btn).click()
    }
    fillInputField(numAcc, NumPostCode) {
        this.elements.fillAccNumInputField().type(numAcc).type('{enter}')
        this.elements.fillPostalCodeinputField().type(NumPostCode).type('{enter}')
    }
    clickbtnBackOrContinue(btn) {
        this.elements.btnBackOrContinue().contains(btn).click()
    }
    enterValuesInInputField(input) {

        var inputArray = input.split(',')
        for (let i = 0; i < inputArray.length; i++) {
            cy.log(inputArray)
            this.elements.registorPageInputField().each((el, index) => {
                cy.log('indie of for the loop')
                cy.log(inputArray[i]);
                // this.checkSequenceOrder(sequenceArray[i])
                cy.wrap(el).eq(index).type(inputArray)
            })
        }
    }
}
export default homePageClass