import {Burger} from "../utils/burger.js";
import {Auth} from "../services/auth.js";
import {CustomHttp} from "../services/custom-http.js";
import Config from "../../config/config.js";
import {Balance} from "../services/balance.js";
import {ShowCommonInfo} from "../utils/show-common-info.js";
import config from "../../config/config";

export class Home {
    constructor() {
        this.balance = document.getElementById('userBalance');
        ShowCommonInfo.init();
        Burger.showBurger();
        // this.showGraphics();
        this.showBalance();
        this.todayFilter = document.getElementById('today');
        this.weekFilter = document.getElementById('week');
        this.monthFilter = document.getElementById('month');
        this.yearFilter = document.getElementById('year');
        this.allFilter = document.getElementById('all');
        this.intervalFilter = document.getElementById('interval');
        this.operationsList = null;

        this.innerCanvasIncome = document.getElementById('canvasInnerIncome');
        this.innerCanvasExpenses = document.getElementById('canvasInnerExpenses');

        this.arrIncomeCategopry = [];
        this.arrIncomeAmounts = [];
        this.arrExpensesCategopry = [];
        this.arrExpensesAmounts = [];


        const that = this;
        that.showOperation('today');
        this.todayFilter.onclick = function () {
            that.innerCanvasIncome.innerHTML = '';
            that.innerCanvasExpenses.innerHTML = '';
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
            that.innerCanvasIncome.innerHTML = '';
            that.innerCanvasExpenses.innerHTML = '';
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
            that.innerCanvasIncome.innerHTML = '';
            that.innerCanvasExpenses.innerHTML = '';
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
            that.innerCanvasIncome.innerHTML = '';
            that.innerCanvasExpenses.innerHTML = '';
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
            that.innerCanvasIncome.innerHTML = '';
            that.innerCanvasExpenses.innerHTML = '';
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
            that.innerCanvasIncome.innerHTML = '';
            that.innerCanvasExpenses.innerHTML = '';
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
                that.innerCanvasIncome.innerHTML = '';
                that.innerCanvasExpenses.innerHTML = '';
                that.showOperation('interval', dateFrom, dateTo);
            }
            dateTo.onchange = function () {
                that.innerCanvasIncome.innerHTML = '';
                that.innerCanvasExpenses.innerHTML = '';
                that.showOperation('interval', dateFrom, dateTo);
            }
        };
    }

    async showOperation(filter, dateFrom = null, dateTo = null) {

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
        this.operationsList.sort((a, b) => a.id - b.id)

        this.showGraphics();

    };

    showGraphics(){
        this.operationsList.forEach(item => {
            if (item.type === 'expense'){
                this.arrExpensesCategopry.push(item.category);
                this.arrExpensesAmounts.push(item.amount);
            } else {
                this.arrIncomeCategopry.push(item.category);
                this.arrIncomeAmounts.push(item.amount);
            }


        })
        const canvasIncome = document.createElement('canvas');
        canvasIncome.setAttribute('id', 'plusGraphic')
        this.innerCanvasIncome.appendChild(canvasIncome)
        const plusGraphicdata = {
            labels: this.arrIncomeCategopry,
            datasets: [{
                label: 'Категории доходов',
                data: this.arrIncomeAmounts,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgba(32, 201, 151,1)',
                    'rgba(253, 126, 20, 1)',
                ],
                hoverOffset: 4
            }]
        };

        new Chart(canvasIncome, {
            type: 'pie',
            data: plusGraphicdata,
        });

        const canvasExpenses = document.createElement('canvas');
        canvasExpenses.setAttribute('id', 'minusGraphic')
        this.innerCanvasExpenses.appendChild(canvasExpenses)
        const minusGraphicData = {
            labels: this.arrExpensesCategopry,
            datasets: [{
                label: 'Категории расходов',
                data: this.arrExpensesAmounts,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgba(32, 201, 151,1)',
                    'rgba(253, 126, 20, 1)',

                ],
                hoverOffset: 4
            }]
        };

        new Chart(canvasExpenses, {
            type: 'pie',
            data: minusGraphicData,
        });
        this.arrIncomeCategopry = [];
        this.arrIncomeAmounts = [];
        this.arrExpensesCategopry = [];
        this.arrExpensesAmounts = [];
    };

    async showBalance(){
        this.balance.innerText = await Balance.getBalance();
    }






}