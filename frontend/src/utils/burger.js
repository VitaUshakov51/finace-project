export class Burger {
    static showBurger(){
        document.getElementById('burger').onclick = function (){
            document.getElementById('sidebar').classList.toggle('sidebar--show');
        }

    }
}

