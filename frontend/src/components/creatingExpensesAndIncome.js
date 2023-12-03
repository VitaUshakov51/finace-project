import {ShowCommonInfo} from "../utils/show-common-info.js";
import {Balance} from "../services/balance.js";
import {CustomHttp} from "../services/custom-http";
import config from "../../config/config";

export class CreatingExpensesAndIncome {
    constructor() {
        this.balance = document.getElementById('userBalance');
        ShowCommonInfo.init();
        this.showBalance();
        this.cancelButton = document.getElementById('cancelCategoryButton');
        this.cancelButton.onclick = () => {
            localStorage.removeItem('operation-type');
            location.href = '#/incomeAndExpenses'
        }
        this.getCategory(localStorage.getItem('operation-type'))


    }

    async getCategory(type) {
        const createButton = document.getElementById('saveCategoryButton');
        if (type === 'income') {

            document.getElementById('operationType').innerHTML = `<option value="income">Доход</option>`;
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
                    createButton.onclick = async () => {
                        try {
                            const result = await CustomHttp.request(config.host + '/operations', 'POST', {
                                type: document.getElementById('operationType').value,
                                amount: +document.getElementById('operationAmount').value,
                                date: document.getElementById('operationDate').value,
                                comment: document.getElementById('operationComment').value,
                                category_id: +document.getElementById('operationCategory').value,
                            });
                            if (result) {
                                if (result.error) {
                                    throw new Error(result.error);
                                }
                                location.href = '#/incomeAndExpenses';
                            }
                        } catch (error) {
                            return console.log(error)
                        }
                    }
                }
            } catch (error) {
                return console.log(error)
            }
        }
        if (type === 'expenses') {
            document.getElementById('operationType').innerHTML = `<option value="expense">Расход</option>`;
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
                    createButton.onclick = async () => {
                        try {
                            const result = await CustomHttp.request(config.host + '/operations', 'POST', {
                                type: document.getElementById('operationType').value,
                                amount: +document.getElementById('operationAmount').value,
                                date: document.getElementById('operationDate').value,
                                comment: document.getElementById('operationComment').value,
                                category_id: +document.getElementById('operationCategory').value,
                            });
                            if (result) {
                                if (result.error) {
                                    throw new Error(result.error);
                                }
                                location.href = '#/incomeAndExpenses';
                            }
                        } catch (error) {
                            return console.log(error)
                        }
                    }
                }
            } catch (error) {
                return console.log(error)
            }
        }

    }


    async showBalance() {
        this.balance.innerText = await Balance.getBalance();
    }


}