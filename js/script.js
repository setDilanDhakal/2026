// console.log("hello world");

// let a=23;
// let b=33;

// console.log("the sum of a and b is",a+b);

// console.log(a==b);

// let Array = ["car","bus","ven","truck"];
// console.log(Array);
// console.log(Array[2]);

// let Person = {
//     name : "Dilan Dhakal",
//     age : 22,
//     address : "Keurani"
// }

// console.log(Person);
// console.log(Person.name);

// let age=18;
// if(age>18){
//     console.log("Eligiable");
// }else{
//     console.log("Not eligiable");
// }

// let name = "Alexa";
// if(name == "Alexa"){
//     console.log("Hi! Alexa");
// }else{
//     console.log("Unathorize person");
// }

// let ab = 20;
// console.log(typeof(a));



// const math = 87;
// const science = 50;
// const english = 50;
// const nepali = 60;
// const computer = 67;

// if(math >= 35 && science >=35 && english >=35 && nepali >= 35 && computer >=35){
//     let total = math + science + english + nepali + computer;
//     let percentage = total * 100/500;
//     let gpa = percentage / 25;
//     console.log("Total=", total);
//     console.log("Percentage=", percentage);
//     console.log("Gpa = ", gpa);
// }
// else {
//     console.log("You are failed")
// }



// let sname = prompt("Enter your name");
// let science = Number(prompt("Enter the mark of science"));
// let Math = Number(prompt("Enter the mark of Math"));
// let English = Number(prompt("Enter the mark of English"));
// let Computer = Number(prompt("Enter the mark of Computer"));
// let Social = Number(prompt("Enter the mark of Social"));

// if(Math >= 35 && science >=35 && English >=35 && Social >= 35 && Computer >=35){
//     let total = science + Math + English + Computer + Social;
//     let percentage = total * 100/500;
//     let gpa = percentage /25;
//     console.log("Your name is =", sname);
//     console.log("Science = " +science);
//     console.log("Math = ",Math);
//     console.log("English=",English);
//     console.log("Computer=",Computer);
//     console.log("Social = ",Social);
//     console.log("Total=", total);
//     console.log("Percentage=", percentage);
//     console.log("Gpa = ", gpa);
// }
// else {
//     console.log("You have Failed the exam");
// }


// const Car = {
//     name : "Toyota",
//     color : "Red",
//     model : 2000
// }

// for(let key in Car){
//     console.log(key, Car[key]);
// }

// const Person = [
//     {
//         name : "dilan",
//         age : 23,
//         address : "Keurani"
//     },
//     {
//         name : "alexa",
//         age : 22,
//         address : "plock"
//     }
// ]

// for ( let key in Person){
//     console.log(key, Person[key]);
// }



// const fruits = ["Apple","Oranges","Banana","Berries"];

// fruits.forEach(temp =>console.log(temp));



// function echo (){
//     console.log("Hello world!");
// }
// echo();


// function sum(a,b){
//     return a+b;
// }

// let result= sum(5,6);
// console.log(result);


// const d = new Date();
// console.log(d.getFullYear());
// console.log(d.getDate());
// console.log(d.getHours());
// console.log(d.getMonth()+1);
// console.log(d.getTimezoneOffset());


// let person = "Dilan";
// console.log(person.toLowerCase());
// console.log(person.toUpperCase());
// console.log(person.startsWith("d"));
// console.log(person.includes("D"));
// console.log(person.endsWith("a"));
// console.log(person.slice(0,4))
// console.log(person.replace("Dilan","Dhakal"));

// const fruits = ["Apple","Banana","Mango","orange"];

// console.log(fruits.splice([0],[3]))


// fruits.forEach(items =>
//     console.log(items)
// )
// console.log(fruits);




// write code to add apple and banana at the end of array 

// let fruits = ["mango"];

// fruits.push("Apple","banana");
// console.log(fruits);

// // Remove the last element from the array and store it in a variable 

// let numbers = [10,20,30,40];

// const pushNum = numbers.pop();
// console.log(pushNum)


// // Replace red with blue in the array

// let colors = ["red","green","yellow"];

// colors.splice(0,1,"blue");
// console.log(colors);



// // insert monday at index 1.

// let days = ['Sunday',"Tuesday","wednesday"];
// days.splice(1,0,"Monday");
// console.log(days)

// // remove 2 elements starting from index 1
// let items = ["pen","pencil","eraser","sharpener"];

// items.splice(1,2);
// console.log(items);

// // replace "java" with "javascript
// let text = "java";
// console.log(text.replace("java","Javascript"));

// let sentence = "We like java";
// console.log(sentence.replace("java","Javascript"));

// // Create a date object for todays date and store it in a variable 


// const d = new Date;
// const todayDate = {
//     sYears : d.getFullYear(),
//     sDate : d.getDate(),
//     sDay : d.getDay()
// }

// console.log(todayDate);

// // Remove the last two elements from the array.
// let arr = [1,2,3,4,5];

// arr.pop();
// arr.pop();
// console.log(arr);

// // add dog and cat at the end of array
// let animals = ["cows"];
// animals.push("dog","cat");
// console.log(animals);

// // remove the first element from the array and store it in variable
// let nums = [5,6,7,8,9,9];
// let removeNum = nums.shift();
// console.log(removeNum);

// // add red at the start of the array.
// let Bows = ["blue","green"]
// Bows.unshift("red");
// console.log(Bows);

// // array - splice(insert/remove/replace)
// // insert B at index 1.
//  let letters = ["A","C","D"];
// letters.splice(1,0,"B");
// console.log(letters);

// // remove 1 element starting from index 2 
// let item = ["pen","book","eraser","scale"];
// item.splice(2,1);
// console.log(item);

// // replace january with jan

// let months = ["january","february","March"];
// months.splice(0,1,"Jan");
// console.log(months);

// // replace bad with good 
// let msg = "this is a bad idea";
// console.log(msg.replace("bad","good"));

// // replace hello with hi
// let text2 = "hello world, hello everyone";
// console.log(text2.replace("hello","Hi")
// );


// // remove the middle element from this array

// let array = [10,20,30,40,50];
// console.log(array.splice(2,1));
// console.log(array);


//  let num = 123.321
//  console.log(num.toFixed(3));

//  let a = "123";
//  let b = Number(a);
//  console.log(b)






// let number = [1,2,3,4,5,6,6];

// let numberReplaced = number.map(items => items + 2);
// console.log(numberReplaced);




co
