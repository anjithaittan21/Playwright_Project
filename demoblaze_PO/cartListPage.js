import { expect } from "@playwright/test"
export class cartListPage{
constructor(page){
    this.cartListLoc=page.getByRole('link', { name: 'Cart' }).first();
    this.page=page
    this.addToCartLoc=page.locator('.btn.btn-success.btn-lg')
    this.tableLoc=page.locator('//table[@class="table table-bordered table-hover table-striped"]/tbody/tr/td[2]')
    this.placeOrderLoc=page.getByRole('button', { name: 'Place Order' });
    this.nameLoc=page.locator('#name')
    this.countryLoc=page.locator('#country')
    this.cityLoc=page.locator('#city')
    this.cardLoc=page.locator('#card')
    this.mothLoc=page.locator('#month')
    this.yearLoc=page.locator('#year')
    this.confirmOrderLoc=page.getByText('Thank you for your purchase!')
    this.purchaseLoc=page.getByRole('button',{class:'btn btn-primary'}).nth(2);
}

async cartListNav(){
   await this.cartListLoc.click()
}

// async confirmProduct(product){
// await expect(column).toContainText(product);
// const list=await this.tableLoc.textContent()
// console.log(list)
// await expect(this.tableLoc).toContainText(product)
// }

async placeOrder(myName,Country,City,Card,Year,Month){
 await this.placeOrderLoc.click()
 await this.nameLoc.fill(myName)
 await this.countryLoc.fill(Country)
 await this.cityLoc.fill(City)
 await this.cardLoc.fill(Card)
 await this.mothLoc.fill(Month)
 await this.yearLoc.fill(Year)
 await this.purchaseLoc.click()

}



}