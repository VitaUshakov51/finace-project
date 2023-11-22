export class Signin {
    constructor() {
        this.formElement = `<form>
        <label for="fullName" id="itemFullName" class="form__label mb-2 d-flex align-items-center border border-2 border-secondary-subtle rounded-1 ">
            <span class="form__icon"><img src="/images/person.png" alt="Человек"></span>
            <input type="text" id="fullName" class="form__input border-0 w-100" placeholder="ФИО">
        </label>
        <label for="email" class="form__label mb-2 d-flex align-items-center border border-2 border-secondary-subtle rounded-1 ">
            <span class="form__icon"><img src="/images/mail.png" alt="Письмо"></span>
            <input type="email" id="email" class="form__input border-0 w-100" placeholder="Электронная почта">
        </label>
        <label for="password" class="form__label mb-2 d-flex align-items-center border border-2 border-secondary-subtle rounded-1 ">
            <span class="form__icon"><img src="/images/lock.png" alt="Замок"></span>
            <input type="password" id="password" class="form__label border-0 w-100" placeholder="Пароль">
        </label>
        <label for="acceptPassword" id="itemAcceptPassword" class="form__label mb-2 d-flex align-items-center border border-2 border-secondary-subtle rounded-1 ">
            <span class="form__icon"><img src="/images/lock.png" alt="Замок"></span>
            <input type="password" id="acceptPassword" class="form__input border-0 w-100" placeholder="Подтвердите пароль">
        </label>
        <button class="w-100 btn btn-primary mt-3 mb-2" id="process" disabled>Войти</button>
        <div class="form__link" ><span id="formLinkText">Уже есть аккаунт?</span> <a href="#/login" id="formLink">Войдите в систему</a></div>
    </form>`;
        this.showForm();
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
        this.processElement.onclick = function () {
            alert('Работает');
        }

        const that = this;
        this.fields.forEach(item => {
            item.element = document.getElementById(item.id);
            item.element.onchange = function () {
                that.validateField.call(that, item, this);
            }
        })
    }


    showForm(){
        document.getElementById('content').innerHTML = this.formElement;
    };



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

    checkPassword(){
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



}