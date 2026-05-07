import { expect } from "@playwright/test"
export class cartPage{
constructor(page){
    this.cartLoc=page.locator('//h2[@class="name"]')
    this.page=page
    this.addToCartLoc=page.locator('.btn.btn-success.btn-lg')
}

async cartCrossCheck(product){
   const cartname=await this.cartLoc.textContent()
   console.log(cartname)
   await expect(this.cartLoc).toContainText(product)
}
async confirmCartPopup(){
   await this.page.on('dialog', dialog=>{
    console.log(dialog.message());
     expect(dialog.message()).toContain("Product added");
     dialog.accept();
     
   })
   await this.addToCartLoc.click()
   await this.page.waitForTimeout(2000);
}
}