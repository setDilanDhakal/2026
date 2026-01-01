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


let person = "Dilan";
console.log(person.toLowerCase());
console.log(person.toUpperCase());
console.log(person.startsWith("d"));
console.log(person.includes("D"));
console.log(person.endsWith("a"));
console.log(person.slice(0,4))
console.log(person.replace("Dilan","Dhakal"));

const fruits = ["Apple","Banana","Mango","orange"];

console.log(fruits.splice([0],[3]))


fruits.forEach(items =>
    console.log(items)
)
console.log(fruits);

