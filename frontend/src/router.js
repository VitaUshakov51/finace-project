import {Signin} from "./components/signin.js";
import {Login} from "./components/login.js";
import {Form} from "./components/form.js";
import {Home} from "./components/home.js";
import {Auth} from "./services/Auth.js";

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
                    new Signin('signin');
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