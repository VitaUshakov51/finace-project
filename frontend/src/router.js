import {Form} from "./components/form.js";
import {Home} from "./components/home.js";
import {Auth} from "./services/auth.js";
import {Expenses} from "./components/expenses.js";
import {EditingExpensesCategory} from "./components/editingExpensesCategory.js";
import {CreatingExpensesCategory} from "./components/creatingExpensesCategory.js";
import {Income} from "./components/income.js";
import {CreatingIncomeCategory} from "./components/creatingIncomeCategory.js";
import {EditingIncomeCategory} from "./components/editingIncomeCategory.js";
import {IncomeAndExpenses} from "./components/incomeAndExpenses.js";
import {EditingExpensesAndIncome} from "./components/editingExpensesAndIncome.js";
import {CreatingExpensesAndIncome} from "./components/creatingExpensesAndIncome.js";

export class Router {
    constructor() {
        this.contentElement = document.getElementById('content');
        this.stylesElement = document.getElementById('styles');
        this.pageTitleElement = document.getElementById('page-title');
        this.routes = [
            {
                router: '',
                title: 'Зарегистрироваться',
                template: 'templates/signin.html',
                styles: 'styles/common.css',
                load: () => {
                    new Form('signin');
                },
            },
            {
                router: '#/',
                title: 'Зарегистрироваться',
                template: 'templates/signin.html',
                styles: 'styles/common.css',
                load: () => {
                    new Form('signin');
                },
            },
            {
                router: '#/login',
                title: 'Войти',
                template: 'templates/login.html',
                styles: 'styles/common.css',
                load: () => {
                    new Form('login');
                },
            },
            {
                router: '#/signin',
                title: 'Зарегистрироваться',
                template: 'templates/signin.html',
                styles: 'styles/common.css',
                load: () => {
                    new Form('signin');
                },
            },
            {
                router: '#/home',
                title: 'Главная',
                template: 'templates/home.html',
                styles: 'styles/common.css',
                load: () => {
                    new Home();
                },
            },
            {
                router: '#/expenses',
                title: 'Расходы',
                template: 'templates/expenses.html',
                styles: 'styles/common.css',
                load: () => {
                    new Expenses();
                },
            },
            {
                router: '#/income',
                title: 'Доходы',
                template: 'templates/income.html',
                styles: 'styles/common.css',
                load: () => {
                    new Income();
                },
            },
            {
                router: '#/editingExpensesCategory',
                title: 'Редактирование категории расходов',
                template: 'templates/editingExpensesCategory.html',
                styles: 'styles/common.css',
                load: () => {
                    new EditingExpensesCategory();
                },
            },
            {
                router: '#/editingIncomeCategory',
                title: 'Редактирование категории расходов',
                template: 'templates/editingIncomeCategory.html',
                styles: 'styles/common.css',
                load: () => {
                    new EditingIncomeCategory();
                },
            },
            {
                router: '#/creatingExpensesCategory',
                title: 'Редактирование категории расходов',
                template: 'templates/creatingExpensesCategory.html',
                styles: 'styles/common.css',
                load: () => {
                    new CreatingExpensesCategory();
                },
            },
            {
                router: '#/creatingIncomeCategory',
                title: 'Редактирование категории доходов',
                template: 'templates/creatingIncomeCategory.html',
                styles: 'styles/common.css',
                load: () => {
                    new CreatingIncomeCategory();
                },
            },
            {
                router: '#/incomeAndExpenses',
                title: 'Доходы и расходы',
                template: 'templates/incomeAndExpenses.html',
                styles: 'styles/common.css',
                load: () => {
                    new IncomeAndExpenses();
                },
            },
            {
                router: '#/editingExpensesAndIncome',
                title: 'Редактировать доходы/расходы',
                template: 'templates/editingExpensesAndIncome.html',
                styles: 'styles/common.css',
                load: () => {
                    new EditingExpensesAndIncome()
                },
            },
            {
                router: '#/creatingExpensesAndIncome',
                title: 'Добавить доходы/расходы',
                template: 'templates/creatingExpensesAndIncome.html',
                styles: 'styles/common.css',
                load: () => {
                    new CreatingExpensesAndIncome()
                },
            },
        ];
    }

    async openRoute(){
        const urlRoute = window.location.hash;
        if (urlRoute === '#/logout') {
            await Auth.logout();
            window.location.href = '#/login';
            return;
        }

        const newRoute = this.routes.find(item => {
            return item.router === window.location.hash;
        })
        this.contentElement.innerHTML =
            await fetch(newRoute.template).then(response => response.text());
        this.stylesElement.setAttribute('href', newRoute.styles);
        this.pageTitleElement.innerText = newRoute.title;
        if (!newRoute) {
            window.location.href = '#/';
            return;
        }


        newRoute.load();
    };
}