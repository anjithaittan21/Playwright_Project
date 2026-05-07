export class signUp{
constructor(page){
    this.page=page
    this.signup_nav=page.locator('#signin2')
    this.username=page.locator('#sign-username')
    this.password=page.locator('#sign-password')
    this.signup=page.getByRole('button', { name: 'Sign up' })
    this.cancel=page.getByRole('button', { name: 'Close' }).last()
}
async demonavigate(){
await this.page.goto('https://www.demoblaze.com/');
}

async signUpFill(valid_username, valid_password){
await this.signup_nav.click();
await this.username.fill(valid_username);
await this.password.fill(valid_password);
}
async signUpOk(){
await this.page.on('dialog', async dialog=>await dialog.accept());
await this.signup.click();
await this.cancel.click();
}
async signUpCancel(){
await this.cancel.click();
}

}
