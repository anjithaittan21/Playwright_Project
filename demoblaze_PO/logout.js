export class logout{
constructor(page){
    this.logoutLoc=page.locator('#logout2')
}
async loggingOut(){
 await this.logoutLoc.click

}
}