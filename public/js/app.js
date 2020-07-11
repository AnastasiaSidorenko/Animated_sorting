import { Array_Generator } from "./Array_Generator.js"
import { Bubble_Sort } from "./Bubble_Sort.js"

let body = document.body;

let bubblesDiv = document.querySelector(".bubbles");    //Узел пузырьком
let initialArrayDiv = document.querySelector("#initial_array");  //Узел входного массива
let resultArrayDiv = document.querySelector("#result_array");   //Узел выходного массива

let arrayGenerator = new Array_Generator();
let bubbleSort = new Bubble_Sort(bubblesDiv);

let initial_array;

document.querySelector("#generateArrayButton").addEventListener("click", getRandomArray, false);
//document.querySelector("#startSorting").addEventListener("click", bubbleSort(array, bubblesDiv), false);

function getRandomArray() {

   //Очистка контента узлов для вывода входного, выходного массива, пузырьков при запуске сортировки
   removeContent(bubblesDiv);
   removeContent(initialArrayDiv);
   removeContent(resultArrayDiv);

   // Получения введенного значения количества чисел массива, который нужно сгенерировать
   let quantity = document.querySelector("#arrayNumbersQuantity").value;

   //Получение сгенерированного массива
   initial_array = arrayGenerator.getRandomArray(quantity);

   //вывести входной сгенерированный массив в виде чисел
   OutputArray(initial_array, initialArrayDiv);

   //показ пузырьков в начальном виде
   showBubbles(initial_array, bubblesDiv);

   //показ сортировки и вывод чисел полученного массива
   bubbleSort.Sort(initial_array, bubblesDiv).then(sorted_array => OutputArray(sorted_array, resultArrayDiv));
}

function OutputArray(array, container) {
   array.map((elem, index) => {
      return container.appendChild(document.createTextNode(`${elem}  `)); //добавление узла в узел
   });
}

function showBubbles(array, container) {
   array.map((elem, index) => {
      return addBubble(elem, container);
   });
}

function addBubble(value, container) {  //Создание узла пузырька
   let bubble_clone = bubble_tmpl.content.cloneNode(true);
   let div = bubble_clone.querySelector(".bubble");
   div.textContent = value;
   container.appendChild(bubble_clone);
}

function removeContent(container) {
   while (container.firstChild) {
      container.removeChild(container.firstChild);
   }
}