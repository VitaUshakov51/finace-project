import {Auth} from "../services/auth";
import {Burger} from "./burger";

export class ShowCommonInfo {
    static init(){
        this.body = document.getElementById('body');
        this.body.classList.remove('d-flex', 'p-3', 'justify-content-center', 'align-items-center');
        this.logoutLink = document.getElementById('logout-link');
        const userInfo = Auth.getUserInfo();
        if (userInfo) {
            this.userFullNameElement = document.getElementById('userFullName');
            this.userFullNameElement.innerText = `${userInfo.name} ${userInfo.lastName}`
        }
        this.logoutLink.onclick = function () {
            location.href = '#/logout';
        }
        Burger.showBurger();
    }



}