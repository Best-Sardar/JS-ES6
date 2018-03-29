// var and let .........................................................................
// let allow you to define a variable in block scope
// var key word define variable in function scope 
// in every programm language used block scope for variable
let nameandfamily = {
    name: "mahdi",
    family: "hosseini"
};
console.log(nameandfamily.name, " : var and let example");
// for example
let number = 10

{
    let number = 15
    console.log(number, " : var and let example"); // return 15
}
console.log(number, " : var and let example"); // return 10 
// var number = 10
// {
//     var number = 15
//     console.log(number ," : var and let example"); // return 15
// }
// console.log(number," : var and let example"); // return 15 




// // const variable ...................................................................
const array = ["mahdi", "mphammad", "mostafa"];
array[0] = "ali";
console.log(array[0], " : const variable example"); // its not have error becuse we dont change the array variable
// array = []; // it give us an error becuse we changed the array variable


// // Template_Literals (${}) ..........................................................
// for use it we mus use (`) not use qoute '' and double qoute "" !
let stringtemp = "seyyedmahdi";
console.log(`hi ${stringtemp} :)`, " : Template_Literals");
// in previuse of javascript we use :
console.log("hi " + stringtemp + " :)", " : Template_Literals");



// // Spread Operator and Rest Parameters ...............................................
let array2 = [30, 40, 50];
let array3 = [10, 20, ...array2, 60];
console.log(array3, " : Spread Operator");

// we can use Spread Operator in function
function Spread_operator(...a) {
    console.log(...a, " : Spread Operator")
}
Spread_operator(1, 5, 6, 8, 10);


// // Destructuring Assignment on Arrays and Objects
let array4 = [" seyyed " ," mahdi " ," hosseini "];
let [array4one ,array4two] = array4 ;
console.log(array4one + array4two , " : Destructuring Assignment");

let obj = {name : " mahdi " , family : " hosseini " };
let {name , family } = obj; // must have name simple the key name of object 
console.log(name + family, " : Destructuring Assignment");

let obj1 = {name1 : " mahdi " , family1 : " hosseini " };
let name1 , family1;
({name1 ,family1} = obj1); // if we define variable in previus line we must use () for do this 
console.log(name1 + family1, " : Destructuring Assignment");
