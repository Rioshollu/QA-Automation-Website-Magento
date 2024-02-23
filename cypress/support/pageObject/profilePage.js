class profilePage {
    btn_arrow = ':nth-child(2) > .customer-welcome > .customer-name > .action'
    text_edit = '.block-dashboard-info > .block-content > .box > .box-actions > .edit > span'
    modal = ':nth-child(2) > .customer-welcome > .customer-menu > .header'
    cbx_mail = '#change-email'
    cbx_pass = '#change-password'
    message_succes = '.message-success'
    mail = '#email'
    current_pass = '#current-password'
    new_pass = '#password'
    confirm_new_pass = '#password-confirmation'

    // Akses Halaman Profile
    clickProfile(){
        cy.wait(3000);
        cy.get(this.btn_arrow).click()
        cy.get(this.modal).should('be.visible')
        cy.contains('My Account').click()
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/')
        cy.get(this.text_edit).click()
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/edit/')
    }

    // Merubah kolom username
    changeName(){
        cy.get('#firstname').clear().type('Rio Shollu')
        cy.get('#lastname').clear().type('Saputra')
        cy.contains('Save').click()
        cy.get(this.message_succes).should('be.visible')
    }

    // Merubah kolom email
    changeMail(){
        cy.get(this.cbx_mail).check()
        // Memastikan checkbox telah aktif
        cy.get('.fieldset.password').should('be.visible')
        // Melakukan nonaktif checkbox
        // cy.get(this.cbx_mail).uncheck()
        // cy.get('.fieldset.password').should('not.be.visible')
        cy.get(this.mail).clear().type('rio@ozip.co.id')
        cy.get(this.current_pass).type('Asdasd123')
        cy.contains('Save').click()
        cy.get(this.message_succes).should('be.visible')
    }
    
    // Merubah kolom password
    changePass(){
        cy.get(this.cbx_pass).check()
        // Memastikan checkbox telah aktif
        cy.get('.fieldset.password').should('be.visible')
        // Melakukan nonaktif checkbox
        // cy.get(this.cbx_mail).uncheck()
        // cy.get('.fieldset.password').should('not.be.visible')
        cy.get(this.current_pass).type('Asdasd123')
        cy.get(this.new_pass).clear().type('Asdasd21')
        cy.get(this.confirm_new_pass).clear().type('Asdasd21')
        cy.contains('Save').click()
        cy.get(this.message_succes).should('be.visible')
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/login/')
    }

    // Merubah kolom email & password
    changeAll(){
        cy.get(this.cbx_mail).check()
        // Memastikan checkbox Email telah aktif
        cy.get('.fieldset.password').should('be.visible')
        cy.get(this.mail).clear().type('rio@ozip.co.id')
        cy.get(this.cbx_pass).check()
        // Memastikan checkbox Email telah aktif
        cy.get('.fieldset.password').should('be.visible')
        cy.get(this.current_pass).type('Asdasd123')
        cy.get(this.new_pass).clear().type('Asdasd21')
        cy.get(this.confirm_new_pass).clear().type('Asdasd21')
        cy.contains('Save').click()
        cy.get(this.message_succes).should('be.visible')
    }
    
}

export default new profilePage