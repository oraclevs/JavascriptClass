/*  values and variables */
console.log("hello world");

let firstname = "Charles";

console.log(firstname);

/* ****************  Variable Naming Conventions *************** */
let Charles4 = "Charles";
let _Charles = "AM hungry";
let $Charles = "Rice";
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
let ycharles = 29.8;
console.log(typeof xcharles);
console.log(typeof ycharles);

// strings
let Message = "Come to France";
console.log(typeof Message);

let Donald = "24" + 2;
console.log(typeof Donald, Donald);

// Undefined
let year;
console.log(year, typeof year);
// An Empty Value has nothing to do with Undefined
let car = "";
console.log(typeof car, car);

// When Adding a number and a srting, Javascript will treat the Number as a string.
let vechicle = 16 + 4 + "volvo";
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
let subject = "mathematics";
// let subject = "English"

// var can be redeclared
var friut = "orange";
var friut = "apple";
console.log(friut);

//  2. let must be Declared before use
// console.log(myvariable);
// let myvariable = 10

let mynumber = 10;
console.log(mynumber);

/* Hositing -> you can use the variable before it is Declared 
-------- let and Const are not Hosisted.
*/
sayHiToMe = "Hi Oracle";
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
var MacBook = 10;
{
  var MacBook = 200;
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
const costFromtempsiteToKodex = 200;
//  costFromtempsiteToKodex = 100;
// console.log(costFromtempsiteToKodex);

//  2.  const cannot be Redeclared
// const yes = 'no'
// const yes = 'yes'

// ******************************** Basic Operators ********************************

// Maths operators
// minus
const now = 2023;
const _oracle = now - 1999;
const $oracle = now - 1990;
console.log(_oracle, $oracle);

// multiplication division and raise to power
console.log(_oracle * 2, $oracle / 2, $oracle ** 3);

/*
 * create 2 variables
 * The DataType Must be a string
 * concatinate (ADD) the Two variables
 * Add the two variables
 */
let nameOne = "charles";
let nameTwo = "johnSmith";
let FullNameall = nameOne + " " + nameTwo;
console.log(FullNameall);

// ------------------------------ Assignment Operators (=) ------------------------------
let NumberOne = 10 + 5;
NumberOne += 5; //    let NumberOne =  NumberOne + 5
console.log(NumberOne);

let Numbertwo = 2 + 5;
Numbertwo *= 7;
console.log(Numbertwo);

let numberThree = 1;
numberThree++;
console.log(numberThree);

let numberFour = 4;
numberFour--;
console.log(numberFour);

// ------------------------------ comparison operators ( >, <, >=,<=,==,=== ) ------------------------------
let obinnaAge, charlesAge;
obinnaAge = "35";
charlesAge = 29;
console.log(obinnaAge == charlesAge);
console.log(obinnaAge > charlesAge);

// ------------------------------ Operator Percedence  (BODMAS) ----------------
const yearNow = 2023;
const guysAge = yearNow - 1983;
const ChidubemAge = yearNow - 1990;
console.log((guysAge + ChidubemAge) * 10);

// challange

// test one
let Johnheight = 1.95;
let Johnweight = 92;
let MarksWeight = 78;
let Marksheight = 1.69;

let johnBMI = Johnweight / Johnheight ** 2;
let MarkBMI = MarksWeight / Marksheight ** 2;
console.log(johnBMI, MarkBMI);
let CompareJohnMark = johnBMI > MarkBMI;
console.log(CompareJohnMark);

// test 2
let Johnheights = 1.76;
let Johnweights = 85;
let MarksWeights = 95;
let Marksheights = 1.88;

let johnBMIs = Johnweights / Johnheights ** 2;
let MarkBMIs = MarksWeights / Marksheights ** 2;
console.log(johnBMIs, MarkBMIs);
let CompareJohnMarks = johnBMIs > MarkBMIs;
console.log(CompareJohnMarks);

// ********************************* Stings and Template Literals  ********************************
const MyName = "John";
const Myjob = "fullStack developer";
const MyyearofBirth = 1999;
const currentYear = 2023;
const NewCharles =
  "I'm " +
  MyName +
  ", a " +
  (currentYear - MyyearofBirth) +
  " year old " +
  Myjob +
  " !";
console.log(NewCharles);

const charlesNew = ` I'm ${MyName}, a  ${
  currentYear - MyyearofBirth
} yearold ${Myjob} !`;
console.log(charlesNew);

// ********************************  Taking Decisions: if eles statement  ********************************
const JohnAge = 35;
if (JohnAge >= 18) {
  console.log(
    `john is eligible to drink Alchohol,🍺 because his age is ${JohnAge}`
  );
} else {
  const yearleft = 18 - JohnAge;
  console.log(
    `he is Not eligible to drink Alchohol,😢 Wait another ${yearleft} years`
  );
}

let DayofTheWeek = "Monday";
if (DayofTheWeek === "Tuesday") {
  console.log(` Sit At Home 🏠 `);
} else {
  console.log(`Write Some Code ⌨️`);
}

// codeing #challange

if (MarkBMI > johnBMI) {
  console.log(`Mark BMI ${MarkBMI} is higher than john's ${johnBMI}`);
} else {
  console.log(` John's BMI ${johnBMI} is higher than MarkBMI ${MarkBMI} `);
}

//**********************************  Type Convertion and Coersion  **************************
// 1. Convert stings to Numbers  -> using the Number() Method
const InputYear = "1991";
console.log(Number(InputYear), InputYear);
console.log(Number(InputYear) + 10);

console.log(Number("Donald"));

// 2. Convert Number to Stings -> using the Stings() Method
console.log(String(23), 23);

// *********************  Type Coersion  *******************
// type coersion is when javascript changes a data type by itself
const sum = 35 + "hello";
console.log(sum);
console.log("23" - "10" - 3);
console.log("24" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

// ***************************  Truthy and Falsy Values ***********************

// We have 5 falsy values : 0, '', underfined, null, NaN .
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

let moneyMaker = "";
if (moneyMaker) {
  console.log("buy sometyhing nice");
} else {
  console.log("save the money");
}

// ****************************** Logical Operators **********************
/*   Logical operators are used to determine the logic between variables or values
    && is the AND operator
    || is the OR operator
    ! is the NOT operator
*/

//  look up javascript truth table
const hasDriverLicense = true;
const hasGoodVision = false;
const isTired = false;
if (hasDriverLicense && hasGoodVision) {
  // AND operator
  console.log("donald is elagible to drive");
} else {
  console.log("someoneelse should drive");
}
if (hasDriverLicense || hasGoodVision) {
  // OR operator
  console.log("donald is elagible to drive");
} else {
  console.log("someoneelse should drive");
}
if (!hasDriverLicense) {
  // NOT operator
  console.log("donald is elagible to drive");
} else {
  console.log("someoneelse should drive");
}

// challenge 4
// 1.
let Manchester = 96 + 100 + 89 / 3;
let Barcelona = 88 + 91 + 110 / 3;
console.log(Manchester, Barcelona, " score");
// 2
if (Manchester > Barcelona) {
  console.log("winner is Manchester 1");
} else if (Barcelona > Manchester) {
  console.log("Barcelona is the Winner 1");
} else {
  console.log("the match is Draw 1");
}

// 3
let $Manchester = 97 + 112 + 101 / 3;
let $Barcelona = 109 + 95 + 123 / 3;
if ($Barcelona >= 100 && $Barcelona > $Manchester) {
  console.log("Barcelona is the winner 2");
} else if ($Manchester >= 100 && $Manchester > $Barcelona) {
  console.log("Manchester is the winner 2");
}

// 4
let _Manchester = 97 + 112 + 101 / 3;
let _Barcelona = 97 + 109 + 106 / 3;

if (_Barcelona >= 100 && _Barcelona > _Manchester) {
  console.log("Barcelona is the winner 3");
} else if (_Manchester >= 100 && _Manchester > _Barcelona) {
  console.log("Manchester is winner 3");
} else if (_Manchester >= 100 && _Manchester === _Barcelona) {
  console.log("this Match is Draw 3");
} else if (_Barcelona >= 100 && _Barcelona === _Manchester) {
  console.log("this Match is Draw 3");
} else {
  console.log("contact the me");
}


//**********************************  The SWITCH  Statement   ************************** */
const day = "suday";
switch (day) {
    case " Monday":
        console.log( "set at home");
        break;
    
    case "Tuesday":
        console.log("Attend class");
        break;
    
    case "wednesday":
        console.log("sleep ");
    break;
    case " thursday":
    case "friday":
        console.log("watch Movies");
    break;
    case "saturday":
    case "sunday":
        console.log("Thank God");
    break;
    default: 
        console.log("dont do anything");
    
}
// 1. assinment change the switch to if else statement
// 2. study the Teneary operator
// 3. solve the codind challange on his github
