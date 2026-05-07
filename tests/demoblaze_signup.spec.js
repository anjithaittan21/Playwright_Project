import {test} from '@playwright/test';
import { signUp } from '../demoblaze_PO/signUp';
import { objectManager } from '../demoblaze_PO/objectManager';
import data from '../Utils/demoblaze_input.json';

test.beforeEach (async({page})=>{
  await page.goto('https://www.demoblaze.com/');
})

test('TC_01', async({page})=> {
 const valid_username=data[0].userName
 const valid_password=data[0].passWord
let om=new objectManager(page)
let su=om.getsignUp()
await su.signUpFill(valid_username,valid_password)
await su.signUpOk()
});

test('TC_02', async({page})=> {
 const valid_username=data[0].userName
 const valid_password=data[0].passWord
let om=new objectManager(page)
let su=om.getsignUp()
await su.signUpFill(valid_username,valid_password)
await su.signUpCancel()
});