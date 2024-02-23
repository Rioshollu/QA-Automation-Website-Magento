import authPage from "../../../support/pageObject/authPage";
import profilePage from "../../../support/pageObject/profilePage";

describe('Positif Case Profile', () => {
    beforeEach(() => {
        cy.visit('')
        authPage.loginAccount()
    })
    it('Edit Account Name', () => {
        profilePage.clickProfile()
        profilePage.changeName()
    });

    it('Edit Account Email', () => {
        profilePage.clickProfile()
        profilePage.changeMail()
    });

    it('Edit Account Password', () => {
        profilePage.clickProfile()
        profilePage.changePass()
    });

    it.only('Edit Account Name, Email, dan Password', () => {
        profilePage.clickProfile()
        profilePage.changeAll()
    });
    
});