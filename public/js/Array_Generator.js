export class Array_Generator {
    // constructor()// {
    //this.number = n;
    //  }

    getRandomArray(n) {
        let randomNumbers = [];
        for (let i = 0; i < n; i++) {
            randomNumbers.push(this.getRandomNumber(20));
        }
        console.log(randomNumbers);
        return randomNumbers;
    }

    getRandomNumber(n) {  // n - максимальное необходимое значение
        return Math.floor(Math.random() * (n + 1));
    };
}