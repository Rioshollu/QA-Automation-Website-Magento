import authPage from "../../../../../support/pageObject/authPage";
import womenPage from "../../../../../support/pageObject/womenPage";
import generalObject from "../../../../../support/pageObject/generalObject";

describe('Positif Case Product Women', () => {
    beforeEach(() => {
        cy.visit('')
        authPage.loginAccount()
    });

    it('Membuka Halaman Daftar Jaket Wanita', () => {
        womenPage.openPageJaket()
        generalObject.randomProduk()

    });

    it('Memilih produk hoodie wanita', () => {
        womenPage.openPageHoodie()
        generalObject.randomProduk()
        
    });

    it.only('Memilih produk tees wanita', () => {
        womenPage.openPageTees()
        generalObject.randomProduk()
    });

    it('Memilih produk bra wanita', () => {
        womenPage.openPageBra()
        generalObject.randomProduk()
    });

    it('Memilih produk pants wanita', () => {
        womenPage.openPagePant()
        generalObject.randomProduk()
    });

    it('Memilih produk short wanita', () => {
        womenPage.openPageShort()
        generalObject.randomProduk()
    });
});