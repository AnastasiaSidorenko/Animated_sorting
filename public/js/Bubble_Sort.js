export class Bubble_Sort {
   constructor(container) {
      this.container = container;
   }

   sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   };

   async Sort(arr) {
      for (var i = 0, endI = arr.length - 1; i < endI; i++) {
         for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
               let swap = arr[j];
               arr[j] = arr[j + 1];
               arr[j + 1] = swap;

               await this.sleep(1000);

               this.container.children[j].firstChild.nodeValue = arr[j];
               this.container.children[j + 1].firstChild.nodeValue = arr[j + 1];
            }
         }
      }
      return arr;
   }
}