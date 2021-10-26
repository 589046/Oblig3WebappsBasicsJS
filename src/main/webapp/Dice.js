class DiceController {
    constructor (root) {
        this.dice = new Dice();
        this.root = root;
        this.rollDice = this.rollDice.bind(this);
        this.run = this.run.bind(this);
    }

    rollDice() {
        let resultRef = document.getElementById(this.root).getElementsByTagName("span")[0];
        resultRef.innerText = this.dice.roll();
    }

    run() {
        let btRef = document.getElementById(this.root).getElementsByTagName("button")[0];
        btRef.addEventListener("click", this.rollDice, true);
    }

}

class Dice {

    constructor (){
        this.roll = this.roll.bind(this);
    }

    roll() {
        return Math.floor(Math.random() * 6 + 1);
    }
}

let ctrl = new DiceController("root");
document.addEventListener("DOMContentLoaded", ctrl.run, true);