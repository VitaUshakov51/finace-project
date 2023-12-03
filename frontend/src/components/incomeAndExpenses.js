import {ShowCommonInfo} from "../utils/show-common-info.js";
import {Balance} from "../services/balance.js";
import {CustomHttp} from "../services/custom-http";
import config from "../../config/config";

export class IncomeAndExpenses {
    constructor() {
        this.balance = document.getElementById('userBalance');
        ShowCommonInfo.init();
        this.showBalance();
        this.todayFilter = document.getElementById('today');
        this.weekFilter = document.getElementById('week');
        this.monthFilter = document.getElementById('month');
        this.yearFilter = document.getElementById('year');
        this.allFilter = document.getElementById('all');
        this.intervalFilter = document.getElementById('interval');
        this.operationsList = null;
        this.tableBody = document.getElementById('table');
        this.createIncome = document.getElementById('createIncome');
        this.createExpenses = document.getElementById('createExpenses');

        this.createIncome.onclick = () => {
            localStorage.setItem('operation-type', 'income')
            location.href = '#/creatingExpensesAndIncome'
        }
        this.createExpenses.onclick = () => {
            localStorage.setItem('operation-type', 'expenses')
            location.href = '#/creatingExpensesAndIncome'
        }



        const that = this;
        that.showOperation('today');
        this.todayFilter.onclick = function () {
            that.tableBody.innerText = '';
            that.weekFilter.classList.remove('btn-secondary');
            that.weekFilter.classList.add('btn-transparent');
            that.yearFilter.classList.remove('btn-secondary');
            that.yearFilter.classList.add('btn-transparent');
            that.allFilter.classList.remove('btn-secondary');
            that.allFilter.classList.add('btn-transparent');
            that.intervalFilter.classList.remove('btn-secondary');
            that.intervalFilter.classList.add('btn-transparent');
            this.classList.remove('btn-transparent');
            this.classList.remove('btn-light');
            this.classList.add('btn-secondary');
            that.showOperation('today')
        };
        this.weekFilter.onclick = function () {
            that.tableBody.innerText = '';
            that.todayFilter.classList.remove('btn-secondary');
            that.todayFilter.classList.add('btn-transparent');
            that.monthFilter.classList.remove('btn-secondary');
            that.monthFilter.classList.add('btn-transparent');
            that.yearFilter.classList.remove('btn-secondary');
            that.yearFilter.classList.add('btn-transparent');
            that.allFilter.classList.remove('btn-secondary');
            that.allFilter.classList.add('btn-transparent');
            that.intervalFilter.classList.remove('btn-secondary');
            that.intervalFilter.classList.add('btn-transparent');
            this.classList.remove('btn-transparent');
            this.classList.remove('btn-light');
            this.classList.add('btn-secondary');
            that.showOperation('week')
        };
        this.monthFilter.onclick = function () {
            that.tableBody.innerText = '';
            that.todayFilter.classList.remove('btn-secondary');
            that.todayFilter.classList.add('btn-transparent');
            that.weekFilter.classList.remove('btn-secondary');
            that.weekFilter.classList.add('btn-transparent');
            that.yearFilter.classList.remove('btn-secondary');
            that.yearFilter.classList.add('btn-transparent');
            that.allFilter.classList.remove('btn-secondary');
            that.allFilter.classList.add('btn-transparent');
            that.intervalFilter.classList.remove('btn-secondary');
            that.intervalFilter.classList.add('btn-transparent');
            this.classList.remove('btn-transparent');
            this.classList.remove('btn-light');
            this.classList.add('btn-secondary');
            that.showOperation('month')
        };
        this.yearFilter.onclick = function () {
            that.tableBody.innerText = '';
            that.todayFilter.classList.remove('btn-secondary');
            that.todayFilter.classList.add('btn-transparent');
            that.weekFilter.classList.remove('btn-secondary');
            that.weekFilter.classList.add('btn-transparent');
            that.monthFilter.classList.remove('btn-secondary');
            that.monthFilter.classList.add('btn-transparent');
            that.allFilter.classList.remove('btn-secondary');
            that.allFilter.classList.add('btn-transparent');
            that.intervalFilter.classList.remove('btn-secondary');
            that.intervalFilter.classList.add('btn-transparent');
            this.classList.remove('btn-transparent');
            this.classList.remove('btn-light');
            this.classList.add('btn-secondary');
            that.showOperation('year')
        };
        this.allFilter.onclick = function () {
            that.tableBody.innerText = '';
            that.todayFilter.classList.remove('btn-secondary');
            that.todayFilter.classList.add('btn-transparent');
            that.weekFilter.classList.remove('btn-secondary');
            that.weekFilter.classList.add('btn-transparent');
            that.monthFilter.classList.remove('btn-secondary');
            that.monthFilter.classList.add('btn-transparent');
            that.yearFilter.classList.remove('btn-secondary');
            that.yearFilter.classList.add('btn-transparent');
            that.intervalFilter.classList.remove('btn-secondary');
            that.intervalFilter.classList.add('btn-transparent');
            this.classList.remove('btn-transparent');
            this.classList.remove('btn-light');
            this.classList.add('btn-secondary');
            that.showOperation('all')
        };
        this.intervalFilter.onclick = function () {
            that.tableBody.innerHTML = '';
            that.todayFilter.classList.remove('btn-secondary');
            that.todayFilter.classList.add('btn-transparent');
            that.weekFilter.classList.remove('btn-secondary');
            that.weekFilter.classList.add('btn-transparent');
            that.monthFilter.classList.remove('btn-secondary');
            that.monthFilter.classList.add('btn-transparent');
            that.yearFilter.classList.remove('btn-secondary');
            that.yearFilter.classList.add('btn-transparent');
            that.allFilter.classList.remove('btn-secondary');
            that.allFilter.classList.add('btn-transparent');
            this.classList.remove('btn-transparent');
            this.classList.remove('btn-light');
            this.classList.add('btn-secondary');
            const dateFrom = document.getElementById('dataFrom');
            const dateTo = document.getElementById('dataTo');
            dateFrom.style.borderColor = 'red';
            dateTo.style.borderColor = 'red';
            dateFrom.onchange = function () {
                that.tableBody.innerHTML = '';
                that.showOperation('interval', dateFrom, dateTo);
            }
            dateTo.onchange = function () {
                that.tableBody.innerHTML = '';
                that.showOperation('interval', dateFrom, dateTo);
            }
        };
    }




    async showOperation(filter, dateFrom = null, dateTo = null) {
        const popUp = document.getElementById('popUp');
        const acceptDelete = document.getElementById('acceptDelete');
        const cancelDelete = document.getElementById('cancelDelete');

        if (filter) {
            try {
                const result = await CustomHttp.request(config.host + '/operations?' + 'period=' + filter, 'GET');
                if (result) {
                    if (result.error) {
                        throw new Error(result.error);
                    }
                    this.operationsList = result;
                }
            } catch (error) {
                return console.log(error)
            }
        }
        if (filter === 'today') {
            let link = `/operations?period=today&dateFrom=${new Date().toLocaleDateString('en-ca')}&dateTo=${new Date().toLocaleDateString('en-ca')}`;
            try {
                const result = await CustomHttp.request(config.host + link, 'GET');
                if (result) {
                    if (result.error) {
                        throw new Error(result.error);
                    }
                    this.operationsList = result;
                }
            } catch (error) {
                return console.log(error)
            }
        }
        if (filter === 'week') {
            let link = `/operations?period=week&dateFrom=${new Date().toLocaleDateString('en-ca')}&dateTo=${new Date().toLocaleDateString('en-ca')}`;
            try {
                const result = await CustomHttp.request(config.host + link, 'GET');
                if (result) {
                    if (result.error) {
                        throw new Error(result.error);
                    }
                    this.operationsList = result;
                }
            } catch (error) {
                return console.log(error)
            }
        }
        if (filter === 'month') {
            let link = `/operations?period=month&dateFrom=${new Date().toLocaleDateString('en-ca')}&dateTo=${new Date().toLocaleDateString('en-ca')}`;
            try {
                const result = await CustomHttp.request(config.host + link, 'GET');
                if (result) {
                    if (result.error) {
                        throw new Error(result.error);
                    }
                    this.operationsList = result;
                }
            } catch (error) {
                return console.log(error)
            }
        }
        if (filter === 'year') {
            let link = `/operations?period=year&dateFrom=${new Date().toLocaleDateString('en-ca')}&dateTo=${new Date().toLocaleDateString('en-ca')}`;
            try {
                const result = await CustomHttp.request(config.host + link, 'GET');
                if (result) {
                    if (result.error) {
                        throw new Error(result.error);
                    }
                    this.operationsList = result;
                }
            } catch (error) {
                return console.log(error)
            }
        }
        if (filter === 'interval') {
            let link = `/operations?period=interval&dateFrom=${dateFrom.value}&dateTo=${dateTo.value}`;
            try {
                const result = await CustomHttp.request(config.host + link, 'GET');
                if (result) {
                    if (result.error) {
                        throw new Error(result.error);
                    }
                    this.operationsList = result;
                    dateFrom.style.borderColor = 'green';
                    dateTo.style.borderColor = 'green';
                }
            } catch (error) {
                return console.log(error)
            }
        }
        this.operationsList.sort((a, b) => a.id - b.id);
        this.operationsList.forEach(operation => {
            const tableRow = document.createElement('tr');
            const tableId = document.createElement('th');
            tableId.innerText = operation.id;
            const tableType = document.createElement('td');
            if (operation.type === 'income') {
                tableType.innerText = 'Доход';
                tableType.classList.add('income');
            } else {
                tableType.innerText = 'Расход';
                tableType.classList.add('expenses');
            }
            const tableCategory = document.createElement('td');
            tableCategory.innerText = operation.category;
            const tableAmount = document.createElement('td');
            tableAmount.innerText = '$' + operation.amount;
            const tableDate = document.createElement('td');
            tableDate.innerText = operation.date;
            const tableComment = document.createElement('td');
            tableComment.innerText = operation.comment;
            const tableActions = document.createElement('td');
            const deleteOperation = document.createElement('a');
            deleteOperation.classList.add('delete-operation');
            deleteOperation.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
<path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
</svg>`;
            deleteOperation.onclick = function () {
                popUp.classList.add('active');
                cancelDelete.onclick = () => {
                    popUp.classList.remove('active');
                };
                acceptDelete.onclick = async function () {
                    try {
                        const result = await CustomHttp.request(config.host + '/operations/' + operation.id, 'DELETE');
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
            }
            const editingOperation = document.createElement('a');
            editingOperation.classList.add('editing-operation')
            editingOperation.setAttribute('data-id', operation.id);
            editingOperation.onclick = () => {
                localStorage.setItem('operation-id', operation.id);
                localStorage.setItem('operation-type', operation.type);
                location.href = '#/editingExpensesAndIncome';
            }
            editingOperation.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
<path d="M 46.574219 3.425781 C 45.625 2.476563 44.378906 2 43.132813 2 C 41.886719 2 40.640625 2.476563 39.691406 3.425781 C 39.691406 3.425781 39.621094 3.492188 39.53125 3.585938 C 39.523438 3.59375 39.511719 3.597656 39.503906 3.605469 L 4.300781 38.804688 C 4.179688 38.929688 4.089844 39.082031 4.042969 39.253906 L 2.035156 46.742188 C 1.941406 47.085938 2.039063 47.453125 2.292969 47.707031 C 2.484375 47.898438 2.738281 48 3 48 C 3.085938 48 3.171875 47.988281 3.257813 47.964844 L 10.746094 45.957031 C 10.917969 45.910156 11.070313 45.820313 11.195313 45.695313 L 46.394531 10.5 C 46.40625 10.488281 46.410156 10.472656 46.417969 10.460938 C 46.507813 10.371094 46.570313 10.308594 46.570313 10.308594 C 48.476563 8.40625 48.476563 5.324219 46.574219 3.425781 Z M 45.160156 4.839844 C 46.277344 5.957031 46.277344 7.777344 45.160156 8.894531 C 44.828125 9.222656 44.546875 9.507813 44.304688 9.75 L 40.25 5.695313 C 40.710938 5.234375 41.105469 4.839844 41.105469 4.839844 C 41.644531 4.296875 42.367188 4 43.132813 4 C 43.898438 4 44.617188 4.300781 45.160156 4.839844 Z M 5.605469 41.152344 L 8.847656 44.394531 L 4.414063 45.585938 Z"></path>
</svg>`
            tableActions.appendChild(deleteOperation);
            tableActions.appendChild(editingOperation);

            if (operation.type === 'income') {
                tableType.innerText = 'Доход';
                tableType.classList.add('income');


            } else {
                tableType.innerText = 'Расход';
                tableType.classList.add('expenses');

            }
            tableRow.appendChild(tableId);
            tableRow.appendChild(tableType);
            tableRow.appendChild(tableCategory);
            tableRow.appendChild(tableAmount);
            tableRow.appendChild(tableDate);
            tableRow.appendChild(tableComment);
            tableRow.appendChild(tableActions);
            this.tableBody.appendChild(tableRow);
        })


    };

    async showBalance() {
        this.balance.innerText = await Balance.getBalance();
    }
}
