export class Login {
    constructor() {
        this.formElement = `<form>
        <label for="email" class="form__label mb-2 d-flex align-items-center border border-2 border-secondary-subtle rounded-1 ">
            <span class="form__icon"><img src="/images/mail.png" alt="Письмо"></span>
            <input type="email" id="email" class="form__input border-0 w-100" placeholder="Электронная почта">
        </label>
        <label for="password" class="form__label mb-2 d-flex align-items-center border border-2 border-secondary-subtle rounded-1 ">
            <span class="form__icon"><img src="/images/lock.png" alt="Замок"></span>
            <input type="password" id="password" class="form__label border-0 w-100" placeholder="Пароль">
        </label>
        <label for="agreeElement" id="checkboxElement" class="text-start mb-2" >
            <input id="agreeElement" class="m-1" type="checkbox">Запомнить меня
        </label>
        <button class="w-100 btn btn-primary mt-3 mb-2"  id="process" disabled>Войти</button>
        <div class="form__link" ><span id="formLinkText">Еще нет аккаунта?</span> <a href="#/signin" id="formLink">Пройти регистрацию</a></div>
    </form>`;
        this.showLoginForm();
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
                valid: true,
            },
        ];
        this.checkboxElement = document.getElementById('checkboxElement');

        this.processElement = document.getElementById('process');
        this.processElement.onclick = function () {
            alert('Работает')
        }

        const that = this;
        this.fields.forEach(item => {
            item.element = document.getElementById(item.id);
            item.element.onchange = function () {
                that.validateField.call(that, item, this)
            }
        })
    }


    showLoginForm(){
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

    validateForm() {
        const validForm = this.fields.every(item => item.valid);

        if (validForm) {
            this.processElement.removeAttribute('disabled');
        } else {
            this.processElement.setAttribute('disabled', 'disabled');
        }
        return validForm;
    }

}