class CustomerRegistration {
    elements = {
        rexelLogo: () => cy.getIframeElement().find('a#webshopLogo>img'),
        newCustomerNumer:() => cy.getIframeElement().find('button.open-new-Account'),
        socialSecurityNumber:() => cy.getIframeElement().find('input#securityNumber'),
        organizationNumber:() => cy.getIframeElement().find('input#organizationNumber'),
        emailIdInputGroup:() => cy.getIframeElement().find('input#emailIdInputGroup'),
        personalDataProcessincgCheckBox:()=> cy.getIframeElement().find('input#gdprCheckbox'),
        stepOneprevButton:()=> cy.getIframeElement().find('button#stepOnePreviousBtn'),
        stepOneNextButton:()=> cy.getIframeElement().find('button#stepOneNextBtn'),



    }
    isLogoVisible() {
        this.elements.rexelLogo().should('be.visible')
    }

}

export default CustomerRegistration