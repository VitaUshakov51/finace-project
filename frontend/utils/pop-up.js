export class PopUp {
    static show() {
        const popUp = document.getElementById('popUp');
        const buttons = document.getElementsByClassName('deleteCategory');
        const closePopUp = document.getElementById('cancel');
        for (let i = 0; i < buttons.length ; i++) {
            buttons[i].onclick = function () {
                popUp.classList.add('active');
                closePopUp.onclick = function () {
                    popUp.classList.remove('active');
                }
            }
        }
    };

    static deleteOperation() {
        const popUp = document.getElementById('popUp');
        const buttons = document.getElementsByClassName('delete-operation');
        const closePopUp = document.getElementById('cancel');
        for (let i = 0; i < buttons.length ; i++) {
            buttons[i].onclick = function () {
                popUp.classList.add('active');
                closePopUp.onclick = function () {
                    popUp.classList.remove('active');
                }
            }
        }
    };
}