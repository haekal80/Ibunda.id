import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import { KategoriPage } from "./pages/kategori_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let kategoriPage = new KategoriPage()
const URL = 'http://localhost:8000/login'

it('Tambah Kategori', () => {
    loginPage.login(URL,'admin@admin.com','password')
    loginPage.assertLoginSuccess()
    dashboardPage.moveToKategoriPage()
    kategoriPage.moveToTambahKategori()
    kategoriPage.tambahKategori('kategori contoh')
})