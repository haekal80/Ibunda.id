import { JsxEmit } from "typescript"

export class LoginPage{
    txt_email = '//input[@name="email"]'
    txt_password = '//input[@name="password"]'
    btn_login = '//button[@type="submit"]'
    login_fail_message = '//p[@class="text-danger text-center"]'
    header_login = '//*[normalize-space(text())="Starter App"]'
    header_dashboard = '//h1[text()="Dashboard"]'

    navigate(url: string){
        cy.visit(url)
    }
    inputEmail(email: string){
        cy.xpath(this.txt_email).type(email)
    }
    inputPassword(password: string){
        cy.xpath(this.txt_password).type(password)
    }
    clickLogin(){
        cy.xpath(this.btn_login).click()
    }
    assertLoginSuccess(){
        cy.xpath(this.header_dashboard).should('be.visible')
    }
    assertLoginFail(){
        cy.xpath(this.login_fail_message).should('be.visible')
    }
    login(url : string, email : string, password : string){
        this.navigate(url)
        this.inputEmail(email)
        this.inputPassword(password)
        this.clickLogin()
    }
}