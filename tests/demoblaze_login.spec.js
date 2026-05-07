import { objectManager } from '../demoblaze_PO/objectManager';
import data from '../Utils/demoblaze_input.json';
import {test} from '@playwright/test';
import { login } from '../demoblaze_PO/login'
import { cartPage } from '../demoblaze_PO/cartPage';
import { productPage } from '../demoblaze_PO/productPage';
import { cartListPage } from '../demoblaze_PO/cartListPage';
import { expect } from '@playwright/test';
// import fixture from '../Utils/fixture.js'
// import { test, expect } from '../Utils/fixture.js';
test.beforeEach (async({page})=>{
  await page.goto('https://www.demoblaze.com/');
})

test('TC_03', async({page})=> {
 const valid_username=data[0].userName
 const valid_password=data[0].passWord
let om=new objectManager(page)
let lp=om.getlogin()
await lp.logincred(valid_username,valid_password)
await lp.loginButtonClick()
const usernameLoc=await page.locator('#nameofuser')
await expect(usernameLoc).toContainText(valid_username)
const user=await usernameLoc.textContent()
console.log(user)
});

//fixture code

// test.only('TC_03', async ({ loggedin, page }) => {
//   const usernameLoc = page.locator('#nameofuser');
//   await expect(usernameLoc).toBeVisible();
// });


test('TC_04', async({page})=> {
 const invalid_username=data[1].invaliduserName
 const valid_password=data[0].passWord
 const popup_message1=data[2].popupMessage1
let om=new objectManager(page)
let lp=om.getlogin()
await lp.logincred(invalid_username,valid_password)
await lp.confirmInvalidCred(popup_message1)
// await page.pause()
});

test('TC_05', async({page})=> {
 const valid_username=data[0].userName
 const invalid_password=data[1].invalidpassWord
 const popup_message2=data[2].popupMessage2
let om=new objectManager(page)
let lp=om.getlogin()
await lp.logincred(valid_username,invalid_password)
await lp.confirmInvalidCred(popup_message2)
// await page.pause()
});

test('TC_06', async({page})=> {
 const invalid_username=data[1].invaliduserName
 const invalid_password=data[1].invalidpassWord
  const popup_message1=data[2].popupMessage1
let om=new objectManager(page)
let lp=om.getlogin()
await lp.logincred(invalid_username, invalid_password)
await lp.confirmInvalidCred(popup_message1)
// await page.pause()
});



