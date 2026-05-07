// import {test as base} from '@playwright/test'
// import { expect } from '@playwright/test';
// import data from './demoblaze_input.json'
// import { login } from '../demoblaze_PO/login'
// import { objectManager } from '../demoblaze_PO/objectManager';
// exports.test=base.extend({
//     loggedin:async({page},use)=>{
//      const valid_username=data[0].userName
//  const valid_password=data[0].passWord
// let om=new objectManager(page)
// let lp=om.getlogin()
// await lp.logincred(valid_username,valid_password)
// await lp.loginButtonClick()
// await use(page)
//     }
// });

// export default {test, expect};


// import {test as base} from '@playwright/test'
// import { login } from '../demoblaze_PO/login'
// import data from './demoblaze_input.json' with { type: "json" };
// import { expect } from '@playwright/test';
// import { objectManager } from '../demoblaze_PO/objectManager';

// const test = base.extend({
//     loggedin : async({page}, use) => {
//         const valid_username=data[0].userName
//  const valid_password=data[0].passWord
// let om=new objectManager(page)
// let lp=om.getlogin()
// await lp.logincred(valid_username,valid_password)
// await lp.loginButtonClick()
//         await use(page); //provides the fixture to the test
//     } 
// });

// export default {test,expect}

// import { test as base, expect } from '@playwright/test';
import { test, expect } from '../Utils/fixture.js'; 
import data from './demoblaze_input.json' with { type: "json" };
import { objectManager } from '../demoblaze_PO/objectManager';

export const test = base.extend({
  loggedin: async ({ page }, use) => {
    const valid_username = data[0].userName;
    const valid_password = data[0].password;

    const om = new objectManager(page);
    const lp = om.getlogin();

    await lp.logincred(valid_username, valid_password);
    await lp.loginButtonClick();

    await use(page);
  }
});

export { expect };