import {CustomHttp} from "../services/custom-http.js";
import config from "../../config/config.js";
import {Balance} from "../services/balance.js";
import {ShowCommonInfo} from "../utils/show-common-info.js";

export class Income {
    constructor() {
        this.categoryList = null;
        this.categoryEditButton = null;
        this.categoryDeleteButton = null;
        this.balance = document.getElementById('userBalance');
        this.categoryWrapper = document.getElementById('categoryWrapper');


        ShowCommonInfo.init();
        this.showBalance();
        this.showCategory();
    }

    async showBalance() {
        this.balance.innerText = await Balance.getBalance();
    }

    async showCategory() {
        try {
            const result = await CustomHttp.request(config.host + '/categories/income', 'GET');
            if (result) {
                if (result.error) {
                    throw new Error(result.error);
                }
                this.categoryList = result;
            }
        } catch (error) {
            return console.log(error)
        }

        const popUp = document.getElementById('popUp');
        const cancelDelete = document.getElementById('cancelDelete');
        const acceptDelete = document.getElementById('acceptDelete');

        this.categoryList.forEach(category => {
            const categoryItem = document.createElement('div');
            categoryItem.classList.add('col', 'col-md-auto', 'category', 'p-3', 'border', 'border-light', 'rounded', 'm-2')
            categoryItem.setAttribute('cateroryId', category.id);
            const categoryTitle = document.createElement('h3');
            const categoryActions = document.createElement('div');
            this.categoryEditButton = document.createElement('a');
            this.categoryEditButton.classList.add('btn', 'btn-primary', 'm-1');
            this.categoryEditButton.setAttribute('id', 'editButton');
            this.categoryEditButton.setAttribute('href', '#/editingIncomeCategory');
            this.categoryEditButton.innerText = 'Редактировать';
            this.categoryEditButton.onclick = function () {
                localStorage.setItem('categoryId', categoryItem.getAttribute('cateroryId'));
                localStorage.setItem('category-title', category.title);
            };
            this.categoryDeleteButton = document.createElement('button');
            this.categoryDeleteButton.classList.add('btn', 'btn-danger', 'm-1');
            this.categoryDeleteButton.setAttribute('id', 'deleteButton');
            this.categoryDeleteButton.innerText = 'Удалить';
            this.categoryDeleteButton.onclick = function () {
                popUp.classList.add('active');
                acceptDelete.onclick = async function () {
                    try {
                        const result = await CustomHttp.request(config.host + '/categories/income/' + category.id, 'DELETE');
                        if (result) {
                            if (result.error) {
                                throw new Error(result.error);
                            }
                            location.reload();
                        }
                    } catch (error) {
                        return console.log(error)
                    }
                }
                cancelDelete.onclick = function () {
                    popUp.classList.remove('active');
                }

            }

            categoryActions.appendChild(this.categoryEditButton);
            categoryActions.appendChild(this.categoryDeleteButton);
            categoryItem.appendChild(categoryTitle)
            categoryItem.appendChild(categoryActions);
            this.categoryWrapper.appendChild(categoryItem);
            categoryTitle.innerText = category.title;
        })

        const categoryItemAdd = document.createElement('div');
        categoryItemAdd.setAttribute('id', 'categoryAdd');
        categoryItemAdd.classList.add('col', 'col-md-auto', 'category', 'category-add', 'p-3', 'm-2', 'border', 'border-light', 'rounded', 'd-flex', 'justify-content-center', 'align-items-center');
        categoryItemAdd.innerHTML = `<div class="category-actions d-flex justify-content-center align-items-center"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
</svg></div>`
        this.categoryWrapper.appendChild(categoryItemAdd);

        categoryItemAdd.onclick = function () {
            location.href = '#/creatingIncomeCategory';
        }
    };


}