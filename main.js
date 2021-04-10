// 1) створити функцію яка приймає масив та виводить його
function logArray(x) {
    console.log(x);
}

logArray([1, 2, 3, 4, 5]);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
function createRandomArray() {
    let randomArray = [];
    for (let i = 0; i < 10; i++) {
        randomArray[i] = Math.floor(Math.random() * 100);
    }
    return randomArray;
}

logArray(createRandomArray());

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function logMin(j) {
    let min = j[0];
    for (let i = 1; i < j.length; i++) {
        if (min > j[i]) {
            min = j[i]
        }
    }
    console.log(min);
}

logMin([8, 1, 60]);

// //////////////////////////////////////////////
// Інший спосіб
// /////////////////////////////////////////////
// function logMin2(q, w, e) {
//     if (q < w && q < e) {
//         console.log(q);
//     }
//     if (w < e && w < q) {
//         console.log(w);
//     }
//     if (e < q && e < w) {
//         console.log(e);
//     }
//
// }
//
// logMin2(366, 470, 100);
// logMin2(36, 470, 100);
// logMin2(366, 47, 100);
//

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function logMax(h) {
    let max = h[0];
    for (let i = 1; i < h.length; i++) {
        if (max < h[i]) {
            max = h[i];
        }
    }
    console.log(max);
}

logMax([8, 10, 65]);

// 5) створити функцію яка повертає найбільше число з масиву
function returnMax(q) {
    let max = q[0];
    for (let i = 1; i < q.length; i++) {
        if (max < q[i]) {
            max = q[i];
        }
    }
    return max;
}

let maxNumb = returnMax([10, 30, 5, 7]);
console.log(maxNumb);

// 6) створити функцію яка повертає найменьше число з масиву
function returnMin(j) {
    let min = j[0];
    for (let i = 1; i < j.length; i++) {
        if (min > j[i]) {
            min = j[i]
        }
    }
    return min;
}

let minNumb = returnMin([1, 30, 5, 7]);
console.log(minNumb);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
function sumArrayEl(q) {
    let arr = 0;
    for (const qElement of q) {
        arr = arr + qElement;
    }
    return arr;
}

let arr = sumArrayEl([5, 2, 3, 5]);
console.log(arr);

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function mediumSumArray(q) {
    let medium = 0;
    for (const qElement of q) {
        medium += qElement;
    }
    return medium / q.length;
}

let medium = mediumSumArray([1, 2, 3, 2, 5, 7]);
console.log(medium);

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let arrayObjects = [{name: 'Dima', age: 13}, {model: 'Camry'}];

function returnArrayKey() {
    let resultArray = [];
    for (const arrayObject in arrayObjects) {
        resultArray.push(Object.keys(arrayObjects[arrayObject]));
    }
    return resultArray;
}

let newResult = returnArrayKey();
console.log(newResult);

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function returnArrayValue(resArr) {
    let result = [];
    for (const resElement of resArr) {
        for (const resElementKey in resElement) {
            result.push(resElement[resElementKey]);
        }
    }

    return result;
}

let res = returnArrayValue(arrayObjects);
console.log(res);


// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

function composeSameIndex(arrayX, arrayY) {
    let result = [];
    for (let i = 0; i < arrayX.length; i++) {
        for (let j = 0; j < arrayY.length; j++) {
            if (i === j) {
                result.push(arrayX[i] + arrayY[j]);
            }
        }
    }
    return result;
}

composeSameIndex([1, 2, 3], [7, 8, 9]);
let z = composeSameIndex([1, 2, 3], [7, 8, 9]);
console.log(z);



