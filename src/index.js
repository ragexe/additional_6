module.exports = function zeros(expression) {
    let stringsArray = expression.split("*");
    let totalTwos = 0;
    let totalFives = 0;

    let myContainer;
    for (let i = 0; i < stringsArray.length; i++) {
        myContainer = new MyContainer(stringsArray[i]);
        totalTwos += myContainer.getTwos();
        totalFives += myContainer.getFives();
    }

    return Math.min(totalFives, totalTwos);
}

class MyContainer{
    constructor(str){
        this.number = parseInt(str);            //number
        this.pace = str.split('!').length - 1;  //even or odd factorial

        //counting of '2' and '5' multipliers
        this.twos = 0;
        this.fives = 0;

        //collecting '2' and '5' multipliers
        //odd factorial has no '2' multipliers
        if (this.number % this.pace !== 1){
            for (let i = 0; i <= this.number; i += 2){
                this.twos += MyContainer.countMultipliers(i, 2);
            }
        }

        //begin with 0 for even numbers and with 5 for odd numbers
        //pace 10 or 5 for even numbers and odd  numbers accordingly
        for (let i = 5 * (this.number % 2 === 0) ? 0 : 1; i <= this.number; i += 5 * this.pace * (this.pace % 2 === 0) ? 2 : 1){
            this.fives += MyContainer.countMultipliers(i, 5);
        }
    }

    static countMultipliers(num, factor){
        let res = 0;

        if (num === 0){
            return res;
        }

        while (num % factor === 0){
            num /= factor;
            res++;
        }
        return res;
    }

    getTwos(){
        return this.twos;
    }

    getFives(){
        return this.fives;
    }
}


