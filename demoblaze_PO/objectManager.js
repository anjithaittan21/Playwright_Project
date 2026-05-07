import { signUp } from "./signUp";
import { login } from "./login";
import { productPage } from "./productPage";
import { cartPage } from "./cartPage";
import { cartListPage } from "./cartListPage";
import { logout } from "./logout";

export class objectManager{
    constructor(page){
    this.page=page;
    this.su=new signUp(page);
    this.lp=new login(page);
    this.pp=new productPage(page);
    this.cp=new cartPage(page);
    this.cl=new cartListPage(page);
    this.lo=new logout(page);
    }

getsignUp(){
    return this.su
   }
getlogin(){
    return this.lp
   }
getproductPage(){
    return this.pp
   }
getcartPage(){
    return this.cp
   }
getcartListPage(){
    return this.cl
   }
getlogout(){
    return this.lo
   }

}