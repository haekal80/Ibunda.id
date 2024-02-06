export class KategoriPage{
    btn_tambahKategori = '//a[@href="http://localhost:8000/kategori/create"]'
    btn_simpan = '//button[@type="submit" and normalize-space(text())="Simpan"]'
    txt_namaKategori = '//input[@id="nama_kategori"]'
    verifySuccess = '//*[normalize-space(text())="Data Berhasil Disimpan"]'
 
    inputNamaKategori(kategori: string){
        cy.xpath(this.txt_namaKategori).type(kategori)
    }
    clickBtnSimpan(){
        cy.xpath(this.btn_simpan).click()
    }
    verifyKategoriSuccessfullyAdded(){
        cy.xpath(this.verifySuccess).should('be.visible')
    }
    moveToTambahKategori(){
        cy.xpath(this.btn_tambahKategori).click()
        cy.xpath(this.btn_simpan).should('be.visible')
    }   
    tambahKategori(namaKategori: string){
        this.inputNamaKategori(namaKategori)
        this.clickBtnSimpan()
        this.verifyKategoriSuccessfullyAdded()
    }
}