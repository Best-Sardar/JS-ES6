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
console.log(`hi ${stringtemp} :)` ," : Template_Literals");
// in previuse of javascript we use :
console.log("hi " + stringtemp + " :)" , " : Template_Literals")