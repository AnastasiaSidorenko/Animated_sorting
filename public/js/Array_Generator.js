export class Array_Generator {
   getRandomArray(n) {
      let randomNumbers = [];
      for (let i = 0; i < n; i++) {
         randomNumbers.push(this.getRandomNumber(99));
      }
      console.log(randomNumbers);
      return randomNumbers;
   }

   getRandomNumber(n) {  // n - максимальное необходимое значение
      return Math.floor(Math.random() * (n + 1));
   };
}