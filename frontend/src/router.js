import {Signin} from "./components/signin.js";
import {Login} from "./components/login.js";

export class Router {
    constructor() {
        this.stylesElement = document.getElementById('styles');
        this.pageTitleElement = document.getElementById('page-title');
        this.routes = [
            {
                router: '',
                title: 'Зарегестрироваться',
                template: 'templates/signin.html',
                styles: 'styles/common.css',
                load: () => {
                    new Signin();
                },
            },
            {
                router: '#/',
                title: 'Зарегестрироваться',
                template: 'templates/signin.html',
                styles: 'styles/common.css',
                load: () => {
                    new Signin();
                },
            },
            {
                router: '#/login',
                title: 'Войти',
                template: 'templates/login.html',
                styles: 'styles/common.css',
                load: () => {
                    new Login();
                },
            },
            {
                router: '#/signin',
                title: 'Зарегестрироваться',
                template: 'templates/signin.html',
                styles: 'styles/common.css',
                load: () => {
                    new Signin();
                },
            },
        ];
    }

    openRoute(){

        const newRoute = this.routes.find(item => {
            return item.router === window.location.hash;
        })
        this.stylesElement.setAttribute('href', newRoute.styles);
        this.pageTitleElement.innerText = newRoute.title;
        newRoute.load();
    };
}