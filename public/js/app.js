/*Создайте базовый компонент соблюдая жизненный цикл (должен создаваться, монтироваться, удаляться)
На его основе создайте другие компоненты
Вынесите компонент в отдельный модуль и все остальные компоненты в отдельные модули и соберите страничку на 
модулях и компонентах
Страничка - это список карточке и при клике открытие карточки с подробностями.*/

//import { Header } from "./header.js"
//import { Student, Teacher, PersonFactory } from './personLib.js';
//import { ComponentFactory, Component, Popup, PopupList } from "./componentLib.js";
import { Array_Generator } from "./Array_Generator.js"

//const componentFactory = new ComponentFactory();

/*const header = componentFactory.create(Header, {
    title: 'tensor school',
    description: 'Это страница школы Тензор. Тут вы можете познакомиться с <br> нашими учениками и посмотреть темы занятий.',
    img_src: "img/logo.jpg"
});*/

let body = document.body;

let arrayGenerator = new Array_Generator();

let bubblesDiv = document.querySelector(".bubbles");

//let bubblesDiv = document.querySelector(".bubbles");

document.querySelector("#generateArrayButton").addEventListener("click", getRandomArray, false);

function getRandomArray() {
    removeBubbles();

    let quantity = document.querySelector("#arrayNumbersQuantity").value;
    console.log("кол-во", quantity);
    let array = arrayGenerator.getRandomArray(quantity);
    console.log("array", array);
    let div = document.createElement('div');
    array.map((elem, index) => {
        return addBubble(elem);
    });

    //bubbleSort(array, bubblesDiv);
}

function addBubble(value) {
    let bubble_clone = bubble_tmpl.content.cloneNode(true);
    let div = bubble_clone.querySelector(".bubble");
    div.textContent = value;
    bubblesDiv.appendChild(bubble_clone);
}

function removeBubbles() {
    while (bubblesDiv.firstChild) {
        bubblesDiv.removeChild(bubblesDiv.firstChild);
    }
    //const barsParentNode = document.getElementById("bars");
    //for (i = 0; i < n; i++) {
    //    barsParentNode.removeChild(barsParentNode.lastChild);
    // }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function sleepFor(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) { /* do nothing */ }
}

async function bubbleSort(arr, container) {
    await sleep(1000);
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                let swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
                container.children[j].firstChild.nodeValue = arr[j];
                console.log("j node", container.children[j].firstChild);
                container.children[j + 1].firstChild.nodeValue = arr[j + 1];
                console.log("swap", arr);
                await sleep(2000);
            }
        }
    }
    console.log(arr);
    return arr;
}

//ascending descending

/*class DataSet {
    constructor(options) {
        this.options = {
            host: "http://localhost:8080/api/",
            object: options.object
        }
    }
    read() {
        return this.query(
            `${this.options.object}`,
            { method: "GET" }
        );
    }

    query(query, options, params) {
        let url = new URL(this.options.host)
        url.pathname += query;
        return fetch(url, options).then(
            response => response.json()
        );
    }
}

let datasetStudents = new DataSet({ object: "students" });

let datasetTeachers = new DataSet({ object: "teachers" });

datasetStudents.read().then(result => result.forEach((elem) => {
    componentFactory.create(Student, { item: elem }).mount(body)
})
);

datasetTeachers.read().then(result => result.forEach((elem) => {
    componentFactory.create(Teacher, { item: elem }).mount(body)
})
);*/
