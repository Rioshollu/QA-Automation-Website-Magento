class generalObject {

    randomProduk() {
        const productListSelector = '#maincontent > div.columns > div.column.main > div.products.wrapper.grid.products-grid > ol';
        cy.get(productListSelector).as('productList');
        // Dapatkan jumlah produk yang ada
        cy.get('@productList').find('li').its('length').then((productCount) => {
            // Pilih indeks produk secara acak
            const randomIndex = Math.floor(Math.random() * productCount);
    
            // Pilih kelas item produk secara langsung dan klik pada produk yang dipilih
            cy.get('@productList').find(`li:nth-child(${randomIndex + 1})`).click();
        })
    }
}
export default new generalObject