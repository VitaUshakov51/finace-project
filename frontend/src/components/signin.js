import {CustomHttp} from "../services/custom-http.js";
import Config from "../../config/config.js";
import {Auth} from "../services/auth.js";

export class Signin {
    constructor() {
        this.body = document.getElementById('body');
        this.body.classList.add('d-flex', 'p-3', 'justify-content-center', 'align-items-center');
        this.fields = [
            {
                name: 'fullName',
                id: 'fullName',
                element: null,
                regex: /^[А-Я][а-я]+\s*[А-Я][а-я]+\s*$/,
                valid: false,
            },
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
                name: 'acceptPassword',
                id: 'acceptPassword',
                element: null,
                regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                valid: false,
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
                that.validateField.call(that, item, this);
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

    checkPassword() {
        const password = this.fields[2].element;
        const acceptPassword = this.fields[3].element;
        if (password.value !== acceptPassword.value) {
            password.parentNode.classList.remove('border-secondary-subtle');
            password.parentNode.classList.add('border-danger');
            password.valid = false;
            acceptPassword.parentNode.classList.remove('border-secondary-subtle');
            acceptPassword.parentNode.classList.add('border-danger');
            acceptPassword.valid = false;
        } else {
            password.parentNode.classList.remove('border-danger');
            password.parentNode.classList.add('border-secondary-subtle');
            password.valid = true;
            acceptPassword.parentNode.classList.remove('border-danger');
            acceptPassword.parentNode.classList.add('border-secondary-subtle');
            acceptPassword.valid = true;
        }
    };

    validateForm() {
        this.checkPassword();
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
            const fullName = this.fields.find(item => item.name === 'fullName').element.value;
            const fullNameArr = fullName.split(' ');
            const name = fullNameArr[0];
            const lastName = fullNameArr[1];
            const email = this.fields.find(item => item.name === 'email').element.value;
            const password = this.fields.find(item => item.name === 'password').element.value;
            const acceptPassword = this.fields.find(item => item.name === 'acceptPassword').element.value;
            const rememberMe = this.fields.find(item => item.name === 'agreeElement');
            try {
                const result = await CustomHttp.request(Config.host + '/signup', 'POST', {
                    name: name,
                    lastName: lastName,
                    email: email,
                    password: password,
                    passwordRepeat: acceptPassword,
                })
                if (!result.error) {
                    location.href = '#/home';
                } else {
                    alert(result.message);
                }
            } catch (error) {
                return console.log(error)
            }
            try {

                const result = await CustomHttp.request(Config.host + '/login', 'POST', {
                    email: email,
                    password: password,
                    rememberMe: false,
                })
                if (result) {
                    if (result.error || !result.tokens || !result.user) {
                        throw new Error(result.message)
                    }
                    Auth.setTokens(result.tokens.accessToken, result.tokens.refreshToken);
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