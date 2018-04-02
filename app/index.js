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
let array4 = [" seyyed ", " mahdi ", " hosseini "];
let [array4one, array4two] = array4;
console.log(array4one + array4two, " : Destructuring Assignment");

let obj = {
    name: " mahdi ",
    family: " hosseini "
};
let {
    name,
    family
} = obj; // must have name simple the key name of object 
console.log(name + family, " : Destructuring Assignment");

let obj1 = {
    name1: " mahdi ",
    family1: " hosseini "
};
let name1, family1;
({
    name1,
    family1
} = obj1); // if we define variable in previus line we must use () for do this 
console.log(name1 + family1, " : Destructuring Assignment");

// arrow functions .........................................................................................
let helloword = () => {
    return "HELLO WORLD :| ";
};
console.log(helloword(), " : Arrow Function");
// another example
setTimeout(() => {
    console.log("HELLO WORLD :| ", " : Arrow Function");
}, 3000);

// map property ............................................................................................
let array5 = [1, 2, 3];
console.log(array5.map((n) => n + 5), " : Map and Filter");

let array6 = [10, 20, 30, 40, 50, 60, 70];
console.log(array6.filter((n) => n > 40));

// String Helper Methods ...................................................................................
let string1 = `hell${"oOo".repeat(10)} :))`;
console.log(string1, " : String Helper Methods");

let boolean1 = "seyyedmahdi".startsWith("seyyed");
console.log(boolean1, " : String Helper Methods"); // returned boolean : true
console.log("seyyed mahdi".endsWith("mahdi"), " : String Helper Methods");
console.log("seyyed mahdi".includes("ma"), " : String Helper Methods");
// and more ....

// Numbers Helper Methods
let number1 = (num) => {
    console.log(Number.isFinite(num), " : Numbers Helper Methods");
}
let number2 = (num) => {
    console.log(Number.isSafeInteger(num), " : Numbers Helper Methods");
}
number1(123456789); //  return true
number2(Math.pow(25, 50)); // return false

//  Module in javascript ..........................................................
import need from './moduletest';
console.log(need.show(), " : Module in javascript");

// Class in javascript .............................................................
class animal {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }

    helo() {
        console.log(`hello ${this.name} . are your height is ${this.height} ??`,
            " : Class in javascript");
    }

    // we can use static method without creat object
    static message(name) {
        return `hello ${name} :)`
    }
}
class Lion extends animal {
    constructor(name, height, color) {
        super(name, height);
        this.color = color;
    }
}

let king = new animal("lion", "1.5");
console.log(king, " : Class in javascript");
king.helo();

let lion = new Lion("mos", 1.8, "golden");
console.log(lion, " : Class in javascript");

console.log(animal.message("mahdi"), " : Class in javascript");


// prototype ....................................................................
function course_name(name, time, position) {
    this.name = name;
    this.time = time;
    this.position = position;

    this.showcourse = () => `name : ${this.name} time : ${this.time} pos : ${this.position}`
}

course_name.prototype.info = function () {
    return "add info function"
}

let course1 = new course_name("math", 21, "tehran");
console.log(course1, " : prototype");
console.log(course1.showcourse(), " : prototype");
console.log(course1.info(), " : prototype");

// data strauctures in javascript ..........................................................
// set usually use for searching 
// the element in Set is unique 

let set = new Set();
set.add([1, 2, 3]);
set.add("mahdi");
set.add(21);
set.add({
    university: "shahed",
    term: 6
});

console.log(set, " : data strauctures");
console.log(set.has(21), " : data strauctures");
console.log(set.has({
    university: "shahed"
}), " : data strauctures");

// we can use Set constructor
let array7 = ["mahdi", {
    name: "mahdi"
}, 46, 78, ["man", "men"]];
let b = new Set(array7);
console.log(b, " : data strauctures");

for (let element of b.values()) {
    console.log(element, " : data strauctures");
}

let chars = "asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf";
console.log(new Set(chars.split("")));

// Map()
let map = new Map();
let key = 'key1';
map.set(key, 'this is value for key1');
map.set({
    a: "key2"
}, "this is value for key2");
map.set(() => {
    return "key3"
}, "this is value for key3");

console.log(map, " : data strauctures");

// also we can use array to creat a map object
let array8 = [
    [1, 2],
    ["mahdi", "hosseini"],
    [{
        name: "a"
    }, () => {
        return "Ok"
    }]
];
let map2 = new Map(array8)
console.log(map2, " : data strauctures");

for (let [key, val] of map2) {
    console.log(`the key : ${key} , the val : ${val}`, " : data strauctures");
}

