class authPage {

    fname = '#firstname'
    lname = '#lastname'
    mail = '#email_address'
    pass = '#password'
    kpass = '#password-confirmation'
    
    // Registrasi
    clickRegist() {
        cy.contains('Create an Account').click()
        // cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/')
    }

    btnCreate() {
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/')
    }

    // Login 
    clickLogin() {
        cy.contains('Sign In').click()
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    }
    
    loginAccount() {
        this.clickLogin()
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
        // cy.get('#email').clear().type('Brandyn.Welch@yahoo.com')
        cy.get('#email').clear().type('rio@ozip.co.id')
        cy.get('#pass').clear().type('Asdasd123')
        // cy.get('#pass').clear().type('Asdasd21')
        cy.get('#send2').click()
    }


}

export default new authPage