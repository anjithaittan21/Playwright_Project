import { objectManager } from '../demoblaze_PO/objectManager';
import data from '../Utils/demoblaze_input.json';
import {test} from '@playwright/test';
import { login } from '../demoblaze_PO/login'
import { cartPage } from '../demoblaze_PO/cartPage';
import { productPage } from '../demoblaze_PO/productPage';
import { cartListPage } from '../demoblaze_PO/cartListPage';

const valid_username=data[0].userName
const valid_password=data[0].passWord

test.beforeEach (async({page})=>{
  await page.goto('https://www.demoblaze.com/');
})

test('TC_07', async({page})=> {
const productName=data[3].productname
let om=new objectManager(page)
let lp=om.getlogin()
let pp=om.getproductPage()
let cp=om.getcartPage()
await lp.logincred(valid_username,valid_password)
await lp.loginButtonClick()
await page.waitForTimeout(2000);
await pp.itemselect(productName)
await cp.cartCrossCheck(productName)
await cp.confirmCartPopup()
});


test('TC_08', async({page})=> {
const productName=data[3].productname
const myname=data[4].myName
const country=data[4].Country
const city=data[4].City
const card=data[4].Card
const year=data[4].Year
const month=data[4].Month
let om=new objectManager(page)
let lp=om.getlogin()
let pp=om.getproductPage()
let cp=om.getcartPage()
let cl=om.getcartListPage()
await lp.logincred(valid_username,valid_password)
await lp.loginButtonClick()
await pp.mobileNav()
await pp.itemselect(productName)
await cp.cartCrossCheck(productName)
await cp.confirmCartPopup()
await cl.cartListNav()
// await cl.confirmProduct(productName)
await cl.placeOrder(myname,country,city,card,year,month)
const confirmOrderLoc=page.getByText('Thank you for your purchase!')
const message=await confirmOrderLoc.textContent()
console.log(message)
});



test('TC_09', async({page})=> {
const monitor=data[3].Monitor
const myname=data[4].myName
const country=data[4].Country
const city=data[4].City
const card=data[4].Card
const year=data[4].Year
const month=data[4].Month
let om=new objectManager(page)
let lp=om.getlogin()
let pp=om.getproductPage()
let cp=om.getcartPage()
let cl=om.getcartListPage()
await lp.logincred(valid_username,valid_password)
await lp.loginButtonClick()
await pp.monitorNav()
await pp.itemselect(monitor)
await cp.cartCrossCheck(monitor)
await cp.confirmCartPopup()
await cl.cartListNav()
// await cl.confirmProduct(monitor)
await cl.placeOrder(myname,country,city,card,year,month)
const confirmOrderLoc=page.getByText('Thank you for your purchase!')
const message=await confirmOrderLoc.textContent()
console.log(message)
}

);
