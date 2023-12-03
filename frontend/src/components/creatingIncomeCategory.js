import {ShowCommonInfo} from "../utils/show-common-info.js";
import {Balance} from "../services/balance.js";
import {CustomHttp} from "../services/custom-http";
import config from "../../config/config.js";

export class CreatingIncomeCategory {
    constructor() {
        this.balance = document.getElementById('userBalance');
        this.createButton = document.getElementById('createButton');
        this.cancelButton = document.getElementById('cancelButton');
        ShowCommonInfo.init();
        this.showBalance();
        this.createCategory();
    }

    async showBalance() {
        this.balance.innerText = await Balance.getBalance();
    }

    createCategory(){
        this.createButton.onclick = async function () {
            const categoryName = document.getElementById('inputNameCategory').value;
            try {
                const result = await CustomHttp.request(config.host + '/categories/income', 'POST', {
                    title: categoryName,
                });
                if (result) {
                    if (result.error) {
                        throw new Error(result.error);
                    }
                    location.href = '#/income'
                }
            } catch (error) {
                return console.log(error)
            }
        }
        this.cancelButton.onclick = function () {
            location.href = '#/income';
        }
    };


}