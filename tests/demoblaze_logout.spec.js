import { objectManager } from '../demoblaze_PO/objectManager';
import { login } from '../demoblaze_PO/login';
import {test} from '@playwright/test';
import data from '../Utils/demoblaze_input.json'
import { expect } from '@playwright/test';

const valid_username=data[0].userName
const valid_password=data[0].passWord

test.beforeEach (async({page})=>{
  await page.goto('https://www.demoblaze.com/');
})

test('TC_10', async({page})=> {
 
let om=new objectManager(page)
let lp=om.getlogin()
let lo=om.getlogout()
await lp.logincred(valid_username,valid_password)
// await lp.confirmpage()
await lo.loggingOut
const loginIcon=page.locator('#login2')
await expect(loginIcon).toHaveText('Log in')
});