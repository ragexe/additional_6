// module.exports = function zeros(expression) {//TODO
function zeros(expression) {
    let stringsArray = expression.split("*");
    let totalTwos = 0;
    let totalFives = 0;

    let myClass;
    for (let i = 0; i < stringsArray.length; i++) {
        myClass = new MyClass(stringsArray[i]);
        totalTwos += myClass.getTwos();
        totalFives += myClass.getFives();
    }

    return Math.min(totalFives, totalTwos);
}

class MyClass{
    constructor(str){
        this.number = parseInt(str);            //number
        this.pace = str.split('!').length - 1;  //even or odd factorial

        this.twos = 0;
        this.fives = 0;

        //collecting '2' and '5' multipliers
        //odd factorial has no '2' multipliers
        if (this.number % 2 !== this.pace){
            for (let i = 0; i < this.number; i += 2){
                this.twos += MyClass.countMultipliers(i, 2);
            }
        }

        for (let i=0; i < this.number; i += 5){
            this.fives += MyClass.countMultipliers(i, 5);
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

console.log(zeros('5!'));

