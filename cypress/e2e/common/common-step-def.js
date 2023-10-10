import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import common_steps from "../../support/page-classes/common-steps";
const commonSteps = new common_steps()
var setEnvironment=''
var setTenant = '';

Given('I launch webshop ATAO page on {string} with {string} on {string} with {string}', function (device, tenant, environment, usertype) {
    setEnvironment = environment;
    setTenant = tenant;
    var url = this.users[0][tenant][environment]['appURL']
    cy.log(url)
    var username = this.users[0][tenant][environment][usertype]['username']
    var password = this.users[0][tenant][environment][usertype]['password']
    cy.login(url, username, password, device)
    cy.reload()
})




