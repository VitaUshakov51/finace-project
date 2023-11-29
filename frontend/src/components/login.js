import {CustomHttp} from "../services/custom-http.js";
import {Auth} from "../services/auth.js";
import Config from "../../config/config.js";

export class Login {
    constructor() {
        this.body = document.getElementById('body');
        this.body.classList.add('d-flex', 'p-3', 'justify-content-center', 'align-items-center');
        this.fields = [
            {
                name: 'email',
                id: 'email',
                element: null,
                regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                valid: false,
            },
            {
                name: 'password',
                id: 'password',
                element: null,
                regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                valid: false,
            },
            {
                name: 'agreeElement',
                id: 'agreeElement',
                element: null,
                remember: false,
                valid: true,
            },
        ];
        this.processElement = document.getElementById('process');
        this.processElement.onclick = function (e) {
            e.preventDefault();
            that.processForm();
        }

        const that = this;
        this.fields.forEach(item => {
            item.element = document.getElementById(item.id);
            item.element.onchange = function () {
                that.validateField.call(that, item, this)
            }
        })
    }

    validateField(field, element) {

        if (!element.value || !element.value.match(field.regex)) {
            element.parentNode.classList.remove('border-secondary-subtle');
            element.parentNode.classList.add('border-danger');
            field.valid = false;
        } else {
            element.parentNode.classList.remove('border-danger');
            element.parentNode.classList.add('border-secondary-subtle');
            field.valid = true;
        }
        this.validateForm();
    };

    validateForm() {
        const validForm = this.fields.every(item => item.valid);

        if (validForm) {
            this.processElement.removeAttribute('disabled');
        } else {
            this.processElement.setAttribute('disabled', 'disabled');
        }
        return validForm;
    }

    async processForm() {
        if (this.validateForm()) {
            try {
                const email = this.fields.find(item => item.name === 'email').element.value;
                const password = this.fields.find(item => item.name === 'password').element.value;
                const rememberMe = this.fields.find(item => item.name === 'agreeElement');
                if (rememberMe.element.checked) {
                    rememberMe.remember = true;
                }
                const result = await CustomHttp.request(Config.host +'/login', 'POST', {
                    email: email,
                    password: password,
                    rememberMe: rememberMe.remember,
                })
                if (result) {
                    if (result.error || !result.tokens || !result.user){
                        throw new Error(result.message)
                    }
                    Auth.setTokens(result.tokens.accessToken,result.tokens.refreshToken);
                    Auth.setUserInfo({
                        name: result.user.name,
                        lastName: result.user.lastName,
                        id: result.user.id,
                    });
                    location.href = '#/home';
                }
            } catch (error) {
                console.log(error)
            }
        }
    };

}