import {ShowCommonInfo} from "../utils/show-common-info.js";
import {Balance} from "../services/balance.js";
import {CustomHttp} from "../services/custom-http.js";
import config from "../../config/config.js";

export class EditingIncomeCategory {
    constructor() {
        ShowCommonInfo.init();
        this.categoryTitle = localStorage.getItem('category-title');
        this.categoryId = localStorage.getItem('categoryId');
        this.balance = document.getElementById('userBalance');
        this.input = document.getElementById('categoryName');
        this.input.value = this.categoryTitle;
        this.saveButton = document.getElementById('saveButton');
        this.cancelButton = document.getElementById('cancelButton');
        this.showBalance();
        this.updateCategory()
        this.cancel();
    }
    async showBalance() {
        this.balance.innerText = await Balance.getBalance();
    }

    updateCategory(){
        this.saveButton.onclick = async function () {
           /* Если я использую переменные this.input и this.categoryId, то у меня ошибки.
            Почему?*/
            const input = document.getElementById('categoryName').value;
            try {
                const result = await CustomHttp.request(config.host + '/categories/income/' + localStorage.getItem('categoryId'), 'PUT', {
                    title: input,
                });
                if (result) {
                    if (result.error) {
                        throw new Error(result.error);
                    }
                    localStorage.removeItem('category-title');
                    localStorage.removeItem('categoryId');
                    location.href = '#/income'
                }
            } catch (error) {
                return console.log(error)
            }
        }
    };

    cancel(){
        this.cancelButton.onclick = function () {
            localStorage.removeItem('category-title');
            localStorage.removeItem('categoryId');
            location.href = '#/income'
        }
    }
}

