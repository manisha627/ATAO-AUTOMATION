beforeEach(function() {
    cy.fixture('users').then(function(users) {
        this.users = users
        cy.log(users)
    })
})