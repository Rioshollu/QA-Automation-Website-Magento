class womenPage {
    women = '#ui-id-4'
    mdl_tops = '#ui-id-9'
    mdl_bottoms = '#ui-id-10'
    wmn_tp_jaket = '#ui-id-11'
    wmn_tp_hoodie = '#ui-id-12'
    wmn_tp_tees = '#ui-id-13'
    wmn_tp_bra = '#ui-id-14'
    wmn_btm_pant = '#ui-id-15'
    wmn_btm_short = '#ui-id-16'

    openPageJaket() {
        cy.get(this.women).trigger('mouseover', {force: true})
        cy.get(this.wmn_tp_jaket).trigger('mouseover', {force: true}).click()
    }

    openPageHoodie() {
        cy.get(this.women).trigger('mouseover', {force: true})
        cy.get(this.wmn_tp_hoodie).trigger('mouseover', {force: true}).click()
    }

    openPageTees() {
        cy.get(this.women).trigger('mouseover', {force: true})
        cy.get(this.wmn_tp_tees).trigger('mouseover', {force: true}).click()
    }

    openPageBra() {
        cy.get(this.women).trigger('mouseover', {force: true})
        cy.get(this.wmn_tp_bra).trigger('mouseover', {force: true}).click()
    }

    openPagePant() {
        cy.get(this.women).trigger('mouseover', {force: true})
        cy.get(this.wmn_tp_pant).trigger('mouseover', {force: true}).click()
    }

    openPageShort() {
        cy.get(this.women).trigger('mouseover', {force: true})
        cy.get(this.wmn_tp_short).trigger('mouseover', {force: true}).click()
    }
}
export default new womenPage