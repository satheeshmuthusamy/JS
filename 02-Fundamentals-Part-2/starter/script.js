//ACTIVATING STRICT MODE =>to write secure js code=>to avoid accidental errors
//to activate strictmode write use Strict; in the start of this file
'use strict';//it show us simple errors or highlight the errors

// let hasDriversLicense=false;
// const passTest=true;
// //if(passTest) hasDriverLicense=true;//here s is missing
// if(passTest) hasDriversLicense=true;//if there is any errors in the code it will be showed in the console with the help of strictmode>spelling mistakes
// if(hasDriversLicense)console.log('I can Drive  !');
// const interface='Audio';//we cannot use reserved words=>here interface is reserved word,it will be shown in the console window with the help of strict mode.

//FUNCTIONS=>fundamental building of js is functions>>reusable code blocks
// Function is a simple piece of code we can reuse over and over again in the code,function contains one or more complete lines of code
//basic syntax
// function functionName(parameters){//actual values of parameters are called arguments
//     //function body
//     console.log('My name is MS!');//it doesnot return any value it simply returns the message
// }

// functionName();//invoking or running or calling the function by name of function
// functionName();//==>it will print the value in the body how many times we calling it
// functionName();//==>it will print the value in the body how many times we calling it
// functionName();//==>we doesnot capture an undefined value here

//function is also can be used to receive and return the data
/*
function fruitProcessor(apples, oranges){
    //console.log(apples, oranges);
    const juiece=`The juiece is made up with ${apples} apples and ${oranges} oranges.`;
    // console.log(juiece);
    return juiece;//instead of using log we can use return keyword
}

const appleJuiece=fruitProcessor(5,0);//passing parameters as an arguments=>here we need to capture the value if we dont it will be replaced by the actual values of 5,0
console.log(appleJuiece);
//console.log(fruitProcessor(5,0));//or we can directly console the value with the help of log it will give the same result
const appleOrangeJuiece=fruitProcessor(4,4);//we can give variable inputs and various values and can store in variables
console.log(appleOrangeJuiece);
//dont repeat your self or dry
*/
//FUNCTION DECLARAITONS VS EXPRESSIONS
/*
//function declaration
function calcAge1(birthYear){
    // const age=2037-birthYear;
    // return age;
    return 2038-birthYear;
}
 const age1=calcAge1(2001);
 console.log(age1);

 //function expression   ==>ANNONYMOUS FUNCTION==>function Expression
 const calcAge2=function (birthYear){
    return 2038-birthYear;
 }
 const age2=calcAge2(1999);
 console.log(age2);
 //diff b/w function dec & exp is in declaration we can call the function before initialization,but we cant do that in function expression it happened because of hoisting
*/

/*
 const calcAge2=function (birthYear){
    return 2038-birthYear;
 }
  //ARROW FUNCTION==>it returns the value explicitly,we dont need to write return,
  const calcAge3 = birthYear => 2038 - birthYear;//here the value willbe automatically returned without return KW
  const age3=calcAge3(1991);
  console.log(age3);

  //calculating more than one values in arrow function,one parameter and more line of code
  const retirement=(birthYear, firstName)=>{
    //passing 2 parameters
    const age=2037-birthYear;
    const yearsUntilRetirement=65-age;
    //return yearsUntilRetirement;
    return `${firstName} retires in ${yearsUntilRetirement} years.`
  }
//  const retirementAge= retirement(1991);
//  console.log(retirementAge);
console.log(retirement(1991, "Jonas"));//we can also directly console like this
console.log(retirement(1999, "Bob"));//we can also directly console like this
*/
/*
//ASSIGNMENT
function describeCountry(country,population,capitalCity){
const countryDetails=`${country} has ${population} million population and the capital city is ${capitalCity}.`;
return countryDetails;
}
console.log(describeCountry("India",130,"Delhi"));

//assignment function declaration
function percentageOfWorld1(population,country){
    const totalPopulation=7900;
    const percentageOfWorld1=(population/totalPopulation)*100;
    const percentageOfWorldPopulation=`${country} has a ${population} million population.So it is about the ${percentageOfWorld1}% of the world population.`;
    return percentageOfWorldPopulation;
}
//percentageOfWorld1(130,"India")
console.log(percentageOfWorld1(1400,"India"));

//function expression
const percentageOfWorld2 = function(population,country){
    const totalPopulation=7900;
    const percentageOfWorld1=(population/totalPopulation)*100;
    const percentageOfWorldPopulation=`${country} has a ${population} million population.So it is about the ${percentageOfWorld1}% of the world population.`;
    return percentageOfWorldPopulation;
}
console.log(percentageOfWorld2(1000,"USA"));

//ARROW FUNCTION ASSIGNMENT
const percentageOfWorld3=(population,country)=>{
    const totalPopulation=7900;
    const percentageOfWorld1=(population/totalPopulation)*100;
    const percentageOfWorldPopulation=`${country} has a ${population} million population.So it is about the ${percentageOfWorld1}% of the world population.`;
    return percentageOfWorldPopulation;
}
console.log(percentageOfWorld3(900,"Russia"));
*/
//FUNCTIONS CALLING OTHER FUNCTIONS 
//REFERENCE
// const cutPieces=(fruit)=>{//here fruit parameter is refered as apples and oranges
// return fruit*4;
// }
// //it reduces the code or dry coding and we can change the code here 
// function fruitProcessor(apples, oranges){
//     const applePieces=cutPieces(apples);//calling another function inside the function
//     const orangePieces=cutPieces(oranges);
//     const juiece=`The juiece is made up with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//     return juiece;
// }
// console.log(fruitProcessor(4,5));
//here we assume the apple & orange is cutting into 4 and 5 pieces

//recalling functions
  //ARROW FUNCTION==>it returns the value explicitly,we dont need to write return,
//   const calcAge3 = birthYear => 2038 - birthYear;//here the value willbe automatically returned without return KW
//   const age3=calcAge3(1991);
//   console.log(age3);

//   //function declaration
//   function calcAge2(birthYear){
//     const calcAge2=2038-birthYear;
//     return calcAge2;
//   }
//   const age=calcAge2(2001);
//   console.log(age);

//   //funciton expression with calling another function
//   const ageRespectToBirthYear=birthYear=>2037-birthYear;
//   //funciton expression
//   const calcAge1=function(birthYear,firstName){
//     const age1=ageRespectToBirthYear(birthYear);
//     const calcAge1=`The age of ${firstName} is ${age1}. `
//     console.log(calcAge1);//it will not printed because if the return keyword onces functioned then the function will be done(alt + up arrow to move the line up )
//     return calcAge1;
//   }
//   const age1=calcAge1(1991,"Satheesh");
//   console.log(age1);

//CODING CHELLANGE-1
// const calcAverage=(a,b,c)=>(a+b+c)/3;
// //Test case-1
// let avgDolphins=calcAverage(44,23,71);
// let avgKoalas=calcAverage(65,54,49);
// console.log(avgDolphins,avgKoalas);

// const checkWinner=function(avgDolphins,avgKoalas){
// if(avgDolphins>=2*avgKoalas){
//     console.log(`Dolphins wins the match (${avgDolphins} vs ${avgKoalas})`);
// }else if(2*avgDolphins<=avgKoalas){
//     console.log(`Koalas wins the match (${avgKoalas} vs ${avgDolphins})`);
// }else{
//     console.log('No team wins..');
// }
// }
// checkWinner(avgDolphins,avgKoalas);//this values can be anything but we should need to pass the average values to check which team won

// //testcase-2
// avgDolphins =calcAverage(85,54,41);//here dont redeclare variable it will override and throws an error=>ex let avgDolphins
// avgKoalas=calcAverage(23,34,27);
// console.log(avgDolphins,avgKoalas);
// checkWinner(avgDolphins,avgKoalas);


//ARRAY==>DATA STRUCTURE
//two important data structures of js is array and Objects
//Arrays are like big container that stores the values and we can use it latere
//ex
// const friend1="Jonas";
// const friend2="Clerek";
// const friend3="Emma";//instad of writing like this we can store all the values in single array
// const friends=['Jonas','Clerk','Emma'];//to sererate values use comma
// console.log(friends);//(3) ['Jonas', 'Clerk', 'Emma']=>console the array
// //another way of creating new array
// const years=new Array(1999,2000,2001,1988);//assigning numbers inside array
// console.log(years);
// console.log(friends[2]);
// console.log(friends.length);//it gives total no of values
// console.log(friends[friends.length-1]);//to print last value because the array starts with zeroth Index.
// //mutate the array value
// friends[2]='sarah';
// console.log(friends);//index of 2 value willbe changed
//here array is an non primitive value so even if we declared as an const variable we can change the values but cant replace the whole value
///storing variable values
// const firstName= 'Jonas';
// const Jonas=[firstName,"schemetman",2022-1991,friends];
// console.log(Jonas);

// //excercise
// const calcAge=birthYear=>2022-birthYear;
// const years=[1990,1987,1999,2001,2000];
// //calcAge(years);=>here we cant pass the values like this 
// const age1=calcAge(years[0]);
// const age2=calcAge(years[2]);
// const age3=calcAge(years[years.length-1]);
// console.log(age1,age2,age3);
// //const ages=[age1,age2,age3];
// const ages=[calcAge(years[0]),calcAge(years[2]),calcAge(years[years.length-1])];
// console.log(ages);

//ARRAY METHODS==IMPORTANT TOPIC
//js has functions to manipulate array these are called methods
// //adding elements
// const friends=['Jonas','Clerk','Emma'];
// friends.push('Allen');//adds array element in the last of an array,here push is a method technically its a function which adds the value in the end of an array
// const newLength=friends.push('Jay');//also it returns the value of array length
// console.log(newLength);
// friends.unshift('John');//adds the element in starting
// console.log(friends);

// //removing elements
// friends.pop();
// const popped=friends.pop();//it returns the removed elements
// console.log(friends);
// console.log(popped);
// friends.shift();
// console.log(friends);
// //indexOf
// const indexOfClerk=friends.indexOf('Clerk');//index of Clerk
// const indexOfBob=friends.indexOf('Bob');//returns -1 value NA
// console.log(indexOfClerk,indexOfBob);
// //to check the value is there or not
// console.log(friends.includes('Jonas'));//true
// console.log(friends.includes('Clerk'));//true
// console.log(friends.includes('Bob'));//false
// //acts like strict equality
// friends.push(23);
// console.log(friends.includes(23));//true
// console.log(friends.includes('23'));//false
// if(friends.includes('Jonas')){
//     console.log('Jonas is in your friends list');
// }else{
//     console.log('Opps there is no friends like Jonas.');
// }

//coding CHELLANGE
//calculating tip
// const calcTip=(bills)=>{
//     if(bills<=300 && bills>=50){
//        return (15/bills)*100;
//     }else{
//         return (20/bills)*100;
//     }
// }
// //here use terenary operator return bills>=50&&bills<=300?bills*0.15:bills*0.20;
// const bills=[125,555,44];

// //passing bill values to get a tip
// console.log(calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2]));
// const tip=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// console.log(tip);//printing tip

// //total
// const total=[calcTip(bills[0])+bills[0],calcTip(bills[1])+bills[1],calcTip(bills[2])+bills[2]];
// console.log(total);

// //chellange
// const array=[1,2,3,1,1];
// let count=0;
// function arrayItems(array){
// for(let i=0;i<array.length;i++){
//     for(let j=1;j<array.length;j++){
//         if(array[i]===array[j]){
//             count++;
//         }
//     }
// }
// }
// console.log(count);

//OBJECTS DATA STRUCTURE==>OBJECTS ARE BASICALLY A KEY VALUE PAIRS(or) PROPERTY : VALUE PAIR
// const satheeshObject={
//     firstName:'Satheesh',
//     lastName:'Muthusamy',
//     age:2022-1999,
//     job:'web developer',
//     friends:['jonas','bob','sarah'],
// }
// console.log(satheeshObject);
// //object syntax=>const objectName={property:value,property:value}
// //Array for more ordered & structured data
// //object for unordered & unstructured data.
// //DOT VS BRACKET NOTATION
// console.log(satheeshObject.firstName);
// console.log(satheeshObject['firstName']);//in square notation we can pass expressions
// //here in square bracket we can use expressions==>ex
// const nameKey='Name';
// console.log(satheeshObject['first'+nameKey]);
// console.log(satheeshObject['last'+nameKey]);//it will print firsrName & lasename corrextly
//we cant access values like this in dot notation
//console.log(satheeshObject.'first'+'Name')//it will throw error
//if we dont know which property can be accessed we should use bracket notation

//const interestedIn=prompt('What do you wanted to know about Satheesh.friends,jpb,age,firstName or lastName?Type here')
//console.log(satheeshObject.interestedIn);//it will return undefined because it cannot access value with expression

//undefined is a falsy value 
// if(satheeshObject[interestedIn]){
//     console.log(satheeshObject[interestedIn]);
// }else{
//     console.log('Wrong property:What do you wanted to know about Satheesh.friends,jpb,age,firstName or lastName?refresh page and Type here');
// }

//ADDING PROPERTIES AND VALUES USING . [] NOTATION
// satheeshObject.location='India';
// satheeshObject['Mobile No']=8508797592;
// console.log(satheeshObject);
// const details=`${satheeshObject.firstName} has ${satheeshObject['friends'].length} and his best friend is ${satheeshObject.friends[0]}.`;
// console.log(details);

//OBJECT METHODS==>using this key word==this is the calling object method
const jonas={
    firstName:'Jonas',
    lastName:'Schemetdman',
    birthYear:1991,
    job:'web developer',
    friends:['jonas','bob','sarah'],
    hasDriverLicense:true,
    // calcAge:function (birthYear){
    //     return 2022-birthYear;
    // }
    calcAge:function (){
        console.log(this);//here this keyword defines the object which contains the property of calcAge function
        return 2022-this.birthYear;
    }
}
// console.log(jonas.calcAge(1991));//here we shouldnot pass the birthYear like this
// console.log(jonas['calcAge'](1991));
console.log(jonas['calcAge']());