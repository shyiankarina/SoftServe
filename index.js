// console.log()
// console.time()

// let x, y, z;
// x= 6; y=5;
// z = x * y;
// console.log(z)
// x = 3; y = 2;
// z = x + y;
// console.log(z)

// let a = 4, b = 12;
// console.log(a = b)

// console.log('Hello world!')
// var b;
// let a;
// console.log(b, a);
// console.log('My' + " " + "name" + ' ' + "Yan!");


// const b = 10;
// let a = 5, c = a + b;
// console.log(c)
// a = 4
// c = c + a
// console.log(c)
// let c; за допомогою let const ще раз не можна оголосити змінну.
// console.log(c)

// let x = '5' + 3 + 2; - перетворює в рядок якщо перший елемиент в ' '.
// console.log(x)

// let x = 5 + 3 + "5"; - спочатку виконухється додавання, а потім перетворення в стірги.
// console.log(x)

// let $ = 4;
// console.log($)

// let carName = "Volswagen";
// console.log(carName)
// console.log(carName)

// const PI = Math.PI;
// console.log(PI)
// let b = PI + .9
// console.log(b)

// const array = ['Toyota', 'Suzuki', 'Mersedes-Benz'];
// console.log(array)
// // array.push('Audi'); - додавання нового елемента.
// // array[0] = 'Porshe' - перезапис пе-го елемента.
// console.log(array)
// // array.pop();
// console.log(array)


// Якщо ми задали обєкт як констанкту але потім нам потрібно змінити елементи цьго обєкту то ми зможем це зробити. \\
// const myCar = {
// 	model : 'Toyota',
// 	price : 100002,
// 	year : 2010
// };
// console.log(myCar)
// myCar.price = 502010; myCar.year = 2015
// console.log(myCar)
// let a = 5, b = 2;
// console.log(a % b)

// let a = 5, b = 5;
// console.log(a <<= 1)
// console.log(a >>= 1)
// console.log(a &= 1)// and
// console.log(a |= 1)// or
// console.log(a ^ 1)// xor
// console.log(a ??= 1) // якщо перше значення не визначене або дорівнює нулю то ми його переприсвоюємо.

// Number \\
// let length = 16, weight = 8;
// console.log(length, weight)

// Strings \\
// let name = "Yan", surname = "Zhabko";
// console.log(name. surname)

// Boolean \\
// let a = true, b = false;
// console.log(a, b)

// Object \\
// const person = {
// 	name: 'Yan',
// 	surname: 'Zhabko',
// 	year: 19
// };
// console.log(person)

// Array \\
// const iPerson = ['Yan', 'Zhabko', 19]
// console.log(iPerson)

// Date \\
// const date = new Date('2022-11-23')
// console.log(date)

// let car = 16 + "Audi";
// console.log(car)

// let a = 5, b = 5, c = 10;
// console.log(a == b)
// console.log(a == c)
// console.log(typeof a)
// a = 'Yan'
// console.log(typeof a)
// a = false
// console.log(typeof a)

// let type = " ";
// console.log(type)
// console.log(typeof type)

// function myFunction (firstNumber, secondNumber) {
// 	return firstNumber * secondNumber;
// }

// let result = 'Multiplication - ' + myFunction(3,4) + " result"
// console.log(result)
// console.log(myFunction(3, 4))
// console.log(myFunction.numbner)

// const person = {
// 	name: 'Yan',
// 	surname : 'Zhabko',
// 	year: 19,
// 	fullInfo: function() {
// 		return this.name + " " + this.surname + " " + this.year;
// 	}
// };

// console.log(person.fullInfo())



// РОБОТА З РЯДКАМИ \\ 
// let alpha = "ABCDIFabcdif", text = "We are the so-called 'Vikings' from the north.", 
// text2 = "We are the so-called \"Vikings\" from the north.";// Для запису типу однакових лапок
// console.log(alpha.length + '\n' + text + "\n" + text2);

// let x = 'Yan';
// let y = new String('Yan');
// console.log(x === y) // false тому що вони бере їх як різні типи даних

// let text = 'ABCDIFabcdif, ABCDIFabcdif, ABCDIFabcdif jan', text2 = 'Hi, my name is Yan.'
// console.log(text.slice(13, 26))// вирізає те що ми вклазали
// console.log(text.substring(13, 26))
// console.log(text.substr(13, 13))

// Заміна чогось у рядків \\ 
// console.log(text.replace(/ABCDIFabcdif/g, text2))// /g для того щоб повторні елементи в рядку теж замінялись
// console.log(text + "\n" + text.replaceAll('ABCDIFabcdif', text2))
// console.log(text.toUpperCase())
// console.log(text.toLowerCase())


//  Обєднання рядків \\
// console.log(text.concat(" ", text2))


//  забриє пробіли як з переду так і з заду \\ 
// let text = '    my name is yan    ', text2 = text.trimStart(), text3 = text.trimEnd()
// console.log(text + "\n" + text.trim() + "\n" + text2 + "\n" + text3)
// console.log(text.length, text.trim().length, text2.length, text3.length)

// Додавання символів на початок або в кінець лае воно тільки працює з рядками тобто  якщо в нас змінна буде число то нам потрібно зробити її рядком тобто конвертувати\\ 
// let text = "5";
// console.log(text.padStart(3, "x"))
// console.log(text.padEnd(3, "x"))
// let number = 1;
// console.log(number.toString().padStart(3, "a"))


// Доставання по символу з рядка \\ 
// let text = "Hi, my name, is Yan", text2 = "";
// console.log(text.charAt(6), text2.charAt(0))
// console.log(text.charCodeAt(0))
// console.log(text[0], text2[0])


// // Перетворення рядкак в масив \\ 
// console.log(text.split("")) // якщо нічого не вказаний символ пробіл а так далі то створиться масив із символів які є в рядку
// console.log(text.split(','))

// let text = 'my name is yan. Hi, my name is yan', myInfo = "My", name = "Yan", surname = "Zhabko";
// // console.log(text.indexOf('yan'))// Виводіть індекс першого входження
// // console.log(text.lastIndexOf('yan'))//Виводить індекс останнього входження
// // console.log(text.match('m'))
// // console.log(text.search('yan'))
// // console.log("Yoi")
// // console.log(text.match(/an/g))// Повертає масив знайдених вирапзів рядка
// // console.log(text.search(/yan/g))// не повертає повторення тільки перше входження виразу
// // const iterator = text.matchAll("is")
// // console.log(Array.from(text.matchAll("is")))
// console.log(text.includes("yan"))
// console.log(`${myInfo} name is ${name} and surname ${surname}`)

// let header = "List", tags = ["JavaScript", "Python", "PHP"], HTML = `<h2>${header}</h2><ul>`;
// for (x of tags) {
// 	HTML += `<li>${x}</li>`
// }
// HTML += `</ul>`



// Робота з числами \\ 

// let a = 10, b = 20, m = "30";
// console.log(a + b + m)
// let a ="30", b = "5";
// console.log(a + b)

// let x = 100 / "Apple", y = 100 / "10";
// console.log(isNaN(x), isNaN(y))
// console.log(typeof(NaN))

// let number = 2;
// if (number != Infinity) {
// 	number = number * number
// 	console.log(number)
// }
// let x = 2 / 0;
// console.log(x)

// let myNumber = 2;
// console.log(myNumber.toString(2))
// console.log(myNumber.toString(8))
// console.log(myNumber.toString(10))
// console.log(myNumber.toString(16))

// let number = 10;
// let lastNumber = new Number(10)
// console.log(typeof(number), typeof(lastNumber))
// console.log(number === lastNumber)
// let x = new Number(10)
// let y = new Number(10)
// console.log(x == y)
// console.log(x === y)

// let bigNumber = 9999999999999999n
// console.log(typeof(bigNumber))

// console.log(9007199254740995n * 9007199254740995n)

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)

// console.log(Number.isInteger(10), Number.isInteger(10.5))

// console.log((100).toString(), (100 + 1).toString())

// let x = 9.656;
// console.log(x.toExponential(2) + "\n" + x.toExponential(4) + "\n" + x.toExponential(6))
// console.log(x.toFixed(0) + "\n" + x.toFixed(2) + "\n" + x.toFixed(4) + "\n" + x.toFixed(6))
// console.log(x.toPrecision() + "\n" + x.toPrecision(2) + "\n" + x.toPrecision(4) + "\n" + x.toPrecision(6))
// console.log((123).valueOf(), (100 + 1).valueOf())


// const myArray = ["Banana", "Orange", "Apple", "Mango"];
// let result = "";
// for (let i = 0; i < myArray.length; i++) {
// 	result += myArray[i] + "\n";
// 	console.log(result)
// }

// console.log(result)

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys)
// console.log(myChildren)
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3)
// console.log(myChildren)


// const myArray = ["Banana", "Orange", "Apple", "Mango"];
// myArray.sort()
// myArray.reverse()
// console.log(myArray)

// Сортування чисел працює так \\ 
// const myArray = [40, 5, 10, 20, 50]
// console.log(myArray.sort(function(a, b){return a - b} ))


// const myArray = [1, 10, 20, 50, 5];
// let = myResult = "";
// myArray.forEach(printResult)
// console.log(myResult)

// function printResult(value) {
// 	myResult += value + "\n";
// }

// console.log(myArray.map(calculateResult))

// function calculateResult(value) {
// 	return value * 2;
// }
// let over18 = myArray.filter(myFilter)
// console.log(over18)

// function myFilter(value) {
// 	return value > 18;
// }
// let sum = myArray.reduce(totalSum), rightSum = myArray.reduceRight(totalSum);
// // console.log(sum)
// console.log(rightSum)
// function totalSum(total, value) {
// 	return total + value;
// }

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// for (let x of f) {
//   // document.getElementById("demo").innerHTML += x + "<br>";
// 	console.log(x + "\n")
// }

// const myCity = { 
// 	city : {
// 		vilage : 'Rocosovo'
// 	}
// }
// console.log(myCity)
// // console.log(myCity['city']['vilage'])
// console.log(JSON.stringify(myCity))

// function myFunction(a, b) {
// 	a++;
// 	return a + b
// }
// console.dir(myFunction)
// // console.log(myFunction(10, 1))
// myFunction(10, 1)
// console.log(myFunction.a)

// function multByFacto (value, multipler = 1) {
// 	return value * multipler
// };		

// console.log(multByFacto(2,4))
// console.log(multByFacto(10))

// const addByFacto = function (value, add = 1) {
// 	return value + add
// }
// console.log(addByFacto(10,1))
// console.log(addByFacto(1))

// const divByFactor = (value, divisor = 1) => {
// 	return value / divisor
// }

// console.log(divByFactor(10, 2))
// console.log(divByFactor(1))
let a = 5;
let b = 10;
console.log(a + b + "hello")