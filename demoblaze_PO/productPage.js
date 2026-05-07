import { expect } from "@playwright/test"
export class productPage{
constructor(page){
    this.cardName=page.locator('.card.h-100')
    this.page=page
    this.mobileloc=page.locator('#itemc').first()
    this.monitorLoc=page.getByText('Monitors')
    }

     async mobileNav()
       {
         await this.mobileloc.click()
         await this.page.waitForTimeout(1000);
        }

    async monitorNav(){
        await this.monitorLoc.click()
        console.log("monitor screen")
        await this.page.waitForTimeout(1000);
    }

    async itemselect(product){
        // await this.cardName.last().waitFor();
        // await expect(this.cardName.last()).toBeVisible();
        
        const cardCount=await this.cardName.count()
        console.log(cardCount)
        for(let i=0; i<cardCount; i++){
            const name=await this.cardName.nth(i).locator('.hrefch').textContent();
            if(name==product)
           {
            console.log(name)
            await this.cardName.nth(i).locator('.hrefch').click()
            break;
           }
        }
    }
}