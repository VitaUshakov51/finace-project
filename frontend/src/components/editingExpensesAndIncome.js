import {ShowCommonInfo} from "../utils/show-common-info.js";
import {Balance} from "../services/balance.js";
import {CustomHttp} from "../services/custom-http.js";
import config from "../../config/config.js";

export class EditingExpensesAndIncome {
    constructor() {
        this.balance = document.getElementById('userBalance');
        this.cateroryName = null;
        ShowCommonInfo.init();
        this.showBalance();
        this.getOperationInfo();
        this.getCategory(localStorage.getItem('operation-type'));
        const saveCategoryButton = document.getElementById('saveCategoryButton');
        const cancelButton = document.getElementById('cancelCategoryButton');

        saveCategoryButton.onclick = async () => {
            const type = document.getElementById('operationType');
            const category = document.getElementById('operationCategory');
            const amount = document.getElementById('operationAmount');
            const date = document.getElementById('operationDate');
            const comment = document.getElementById('operationComment');

            try {
                const result = await CustomHttp.request(config.host + /operations/ + localStorage.getItem('operation-id'), 'PUT', {
                    type: type.value,
                    amount: +amount.value,
                    date: date.value,
                    comment: comment.value,
                    category_id: +category.value,
                });

                if (result) {
                    if (result.error) {
                        throw new Error(result.error);
                    }
                    localStorage.removeItem('operation-id');
                    location.href = '#/incomeAndExpenses';
                }
            } catch (error) {
                return console.log(error)
            }

        }

        cancelButton.onclick = () => {
            localStorage.removeItem('operation-id');
            location.href = '#/incomeAndExpenses';
        }

    }


    async getOperationInfo(){
        try {
            const result = await CustomHttp.request(config.host + /operations/ + localStorage.getItem('operation-id'), 'GET');
            if (result) {
                if (result.error) {
                    throw new Error(result.error);
                }
                document.getElementById('operationType').value = result.type;
                this.cateroryName = result.category;
                document.getElementById('operationAmount').value = result.amount;
                document.getElementById('operationDate').value = result.date;
                document.getElementById('operationComment').value = result.comment;
            }
        } catch (error) {
            return console.log(error)
        }
    }

    async getCategory(type){
        if (type === 'income') {
            try {
                const result = await CustomHttp.request(config.host + '/categories/income', 'GET');
                if (result) {
                    if (result.error) {
                        throw new Error(result.error);
                    }
                    const categorySelect = document.getElementById('operationCategory');
                    result.forEach(item => {
                        const categoryOption = document.createElement('option');
                        categoryOption.value = item.id;
                        categoryOption.innerText = item.title;
                        categorySelect.appendChild(categoryOption);
                    })
                    const cateroryId = result.find(item => item.title === this.cateroryName);
                    categorySelect.value = cateroryId.id
                }
            } catch (error) {
                return console.log(error)
            }
        }
        try {
            const result = await CustomHttp.request(config.host + '/categories/expense', 'GET');
            if (result) {
                if (result.error) {
                    throw new Error(result.error);
                }
                const categorySelect = document.getElementById('operationCategory');
                result.forEach(item => {
                    const categoryOption = document.createElement('option');
                    categoryOption.value = item.id;
                    categoryOption.innerText = item.title;
                    categorySelect.appendChild(categoryOption);
                })
                const cateroryId = result.find(item => item.title === this.cateroryName);
                categorySelect.value = cateroryId.id
            }
        } catch (error) {
            return console.log(error)
        }
    }

    async showBalance() {
        this.balance.innerText = await Balance.getBalance();
    }



}