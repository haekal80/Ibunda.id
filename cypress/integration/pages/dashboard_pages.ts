export class DashboardPage{
    link_contohCRUD = '//a[@class="nav-link "]/child::p[normalize-space (text())="Contoh CRUD"]'
    link_kategori = '//a[@href="http://localhost:8000/kategori"]'
    header_manajemenKategori = '//h1[text()="Manajemen Kategori"]'

    clickContohCRUD(){
        cy.xpath(this.link_contohCRUD).click()
    }
    clickKategori(){
        cy.xpath(this.link_kategori).click()
    }
    moveToKategoriPage(){
        this.clickContohCRUD()
        this.clickKategori()
        cy.xpath(this.header_manajemenKategori).should('be.visible') 
    }
}