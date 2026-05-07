import { expect } from "@playwright/test"
export class login{
constructor(page){
    this.page=page
    this.signup_nav=page.locator('#login2')
    this.username=page.locator('#loginusername')
    this.password=page.locator('#loginpassword')
    this.logbutton=page.locator('.btn.btn-primary').nth(2)
    this.prdctStore=page.locator('.navbar-brand');
    this.dialog=this.dialog;
}
// async demonavigate(){
// await this.page.goto('https://www.demoblaze.com/');
// }

async logincred(username, password){
await this.signup_nav.click();
await this.username.fill(username);
await this.password.fill(password);
}

async loginButtonClick(){
await this.logbutton.click();
}

async confirmInvalidCred(popupMessage){
   await this.page.on('dialog', dialog=>{
    console.log(dialog.message());
    expect(dialog.message()).toContain(popupMessage);
    dialog.accept();
   })
 await this.logbutton.click();
await this.page.waitForTimeout(2000);
}

}