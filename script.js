
/*  values and variables */ 
console.log("hello world");

let firstname = "Charles";

console.log(firstname);

/* ****************  Variable Naming Conventions *************** */
let Charles4 = "Charles"
let _Charles = "AM hungry"
let $Charles = "Rice"
console.log(Charles4, _Charles, $Charles);


// **************************  8 Data Types  ************************
/*
1. string
2. number
3. boolean
4.bigint
5.undefined
6.null
7.symbol
8.Object
*/

// Boolean -> True or False Vales 
var isjavascriptEasy = true;
var IslifeHard = false;
console.log(typeof isjavascriptEasy);

// Number
let xcharles = 30;
let ycharles = 29.8
console.log(typeof xcharles);
console.log(typeof ycharles);

// strings 
let Message = "Come to France"
console.log(typeof Message);


let Donald = "24" + 2;
console.log(typeof Donald, Donald);

// Undefined
let year;
console.log(year, typeof year);
// An Empty Value has nothing to do with Undefined
let car = '';
console.log(typeof car, car);

// When Adding a number and a srting, Javascript will treat the Number as a string.
let vechicle = 16 + 4 + "volvo"
console.log(vechicle, typeof vechicle);

/* Null   
In JavaScript Null is Nothing. it is supposed to be something that doesn't exist.
The data Type of NUll is Object.
*/
let Money = null;
console.log(Money, typeof Money);

/* 
* Difference between undefined and  null
* Type of undefined is undefined
* Type of null is object
*/

// similarites 
console.log(null === undefined);


/* ******************** diffrencies between const let and var ******************/

/*
*  The let Keyword
The let Keyword was Intoduced in ES6 (2015)
    *** Rules***
   1. let cannot be Redeclared
   2. let must be Declared before use 
   3. let has a block scope
*/


// 1. let cannot be redeclared
let subject = 'mathematics';
// let subject = "English"


// var can be redeclared 
var friut = 'orange';
var friut = "apple"
console.log(friut);

//  2. let must be Declared before use
// console.log(myvariable);
// let myvariable = 10

let mynumber = 10
console.log(mynumber);

/* Hositing -> you can use the variable before it is Declared 
-------- let and Const are not Hosisted.
*/
sayHiToMe = "Hi Oracle"
var sayHiToMe;
console.log(sayHiToMe);
sayHiToMe = console.log("Hi Oracle");
var sayHiToMe;


// 3. let has a block scope

{
    let job = 5;
    console.log(job);
}
// console.log(job);


// ---------------- var does not hav block scope ----------------
{
    var animal = "lion";
}
console.log(animal);

/*  ---------------------  var Redeclaring a variable inside a block will also 
redeclare it the variable outside the block -------------------------------------*/
var MacBook = 10
{
    var MacBook = 200
}
console.log(MacBook);

/*  ---------------------  let  Redeclaring a variable inside a block will not 
redeclare it the variable outside the block -------------------------------------*/
let windows = 5;
{
    let windows = 6000;
}
console.log(windows);




/*
*  The const Keyword
The let Keyword was Intoduced in ES6 (2015)
    *** Rules***
   1. const cannot be Reassigned
   2.  const cannot be Redeclared
   3. const has a block scope
*/

// 1. const cannot be Reassigned
const costFromtempsiteToKodex = 200
//  costFromtempsiteToKodex = 100;
// console.log(costFromtempsiteToKodex);

//  2.  const cannot be Redeclared
// const yes = 'no'
// const yes = 'yes'



// ******************************** Basic Operators ********************************

// Maths operators
// minus
const now = 2023
const _oracle = now - 1999
const $oracle = now - 1990
console.log(_oracle, $oracle);

// multiplication division and raise to power
console.log(_oracle * 2, $oracle / 2, $oracle ** 3);



/*
* create 2 variables
* The DataType Must be a string
* concatinate (ADD) the Two variables
* Add the two variables
*/
let nameOne = 'charles'
let nameTwo = "johnSmith"
let FullNameall = nameOne + " " + nameTwo;
console.log(FullNameall);


// ------------------------------ Assignment Operators (=) ------------------------------
let NumberOne = 10 + 5;
NumberOne += 5  //    let NumberOne =  NumberOne + 5
console.log(NumberOne);
   
let Numbertwo = 2 + 5
Numbertwo *= 7
console.log(Numbertwo);

let numberThree = 1
numberThree++;
console.log(numberThree);


 let numberFour = 4
numberFour--;
console.log(numberFour);

// ------------------------------ comparison operators ( >, <, >=,<=,==,=== ) ------------------------------
let obinnaAge, charlesAge;
obinnaAge = '35'
charlesAge = 29
console.log(obinnaAge == charlesAge);
console.log(obinnaAge > charlesAge);


// ------------------------------ Operator Percedence  (BODMAS) ----------------
const yearNow = 2023
const guysAge = yearNow - 1983;
const ChidubemAge = yearNow - 1990
console.log((guysAge + ChidubemAge) * 10);




// challange  

// test one 
let Johnheight = 92
let Johnweight = 1.95
let MarksWeight = 78
let Marksheight = 1.69

let johnBMI = (Johnweight / Johnheight) ** 2;
let MarkBMI = (MarksWeight / Marksheight) ** 2;
console.log(johnBMI, MarkBMI);
let CompareJohnMark = johnBMI > MarkBMI
console.log(CompareJohnMark);

// test 2
let Johnheights = 85;
let Johnweights = 1.76;
let MarksWeights = 95;
let Marksheights = 1.88;

let johnBMIs = (Johnweights / Johnheights) ** 2;
let MarkBMIs = (MarksWeights / Marksheights) ** 2;
console.log(johnBMIs, MarkBMIs);
let CompareJohnMarks = johnBMIs > MarkBMIs;
console.log(CompareJohnMarks);


// done
