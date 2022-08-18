//FUNDAMENTALS OF JAVASCRIPT PART1
// External js file
// let js='amazing';
// if(js==='amazing')alert('Java script is FUN!');
// console.log(20+20+40);
//Assignment1 VALUES AND VARIABLES
// let country='India';
// let continent='Asia';
// let population='120 million';
// console.log(country);
// console.log(continent);
// console.log(population);

//ASSIGNMENT2 DATA TYPES
// let isIsland=false;//Boolean data type
// let country='India';
// let continent='Asia';
// let population='120 million';
// console.log(isIsland);

//Assignment-3 let,var,const
// const country='India';
// const continent='Asia';
// let population='120 million';
// const language="Tamil";
// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(language);

//ARTHEMATICAL OPERATORS
// const year=2022;
// const ageOfSarah=year-2001;
// const ageOfJonas=year-1991;
// console.log(ageOfSarah);
// console.log(ageOfJonas);
// instead of using two time console we can write like below
// console.log(ageOfJonas,ageOfSarah);

//MATHEMATICAL OPERATORS
// console.log(2**3);
//2**3 is representation for square (exponantial operator)
// console.log(ageOfSarah/2,ageOfjonas/4*3,2/4);
// const firstName='Satheesh';
// const lastName='Muthusamy';
// console.log(firstName+" "+lastName);
//let x=10+5;
// const x=5;//if we use const variable to the value we cannot reassign the value

//ASSIGNMENT OPERATORS
// let x=10;
// x+=10;//shorthand notation for x=x+10;
// x*=4;//x=x*4;
// x++;//x=x+1
// x--;//x=x-1
// console.log(x);

//COMPARITION OPERATORS//>,<,<=,>=,==,===
// const ageOfSarah=30;
// const ageOfJonas=32;
// console.log(ageOfSarah>ageOfJonas);
//we should need to store the values in the variables for our operations
//console can access all the variables
// const fullAge=ageOfSarah>=18;//store the boolean value
// console.log(fullAge);

//ASSIGNMENT2 DATA TYPES
// let isIsland=false;//Boolean data type
// let country='India';
// let continent='Asia';
// let population='120';
// console.log(isIsland);
// language="tamil";
// //ASSIGNMENT 
// console.log(population / 2);
//  population++;
//  console.log(population);
//  console.log(population > 6);
//  console.log(population < 33);
//  const description1 =
//  country +
//  ' is in ' +
//  continent +
//  ', and its ' +
//  population +
//  ' million people speak ' +
//  language;
//  console.log(description1);

//OPERATOR PRECEDENCE
// const now=2022;
// const ageOfSarah=now-2001;
// const ageOfJonas=now-1999;
// console.log(ageOfSarah);
// console.log(ageOfJonas);
// console.log(ageOfSarah>ageOfJonas);
//to operators executed from left to right and right to left , Mostly left to right will be applied
// console.log(30 - 20 - 1);
//right to left 
// let x,y;
// x=y=20-10-3;
// console.log(x,y);//assign the values from right to left x,y=7,7
//operations in paranthesis will work first=>(a-b)*c,(a-b) willl be executed first
// const averageAge=(ageOfSarah+ageOfJonas)/2;
// console.log(averageAge);

//TEMPLATES AND LITERALS
//string concatination
// const firstName="jonas";
// const job="teacher";
// const birthYear=1991;
// const year=2030;
// const jonas="I am "+firstName+" working as a "+ job +" and my age is "+(year-birthYear)+".";//here number is concatinated with string with the help of +
// console.log(jonas);

//string literal or template literals==>ES6 feature
// const jonasNew=`I am ${firstName} working as a ${job} and my age is ${year-birthYear}.`;
// console.log(jonasNew);
//backtick can be used in any regular string.
// console.log(`hello world!`)
//string in multiple lines
// console.log(`hello
// world
// next
// line`);
// console.log("the \n\ next \n\ line");//new line in between double quotes


//IF ELSE CONDITION
// const age=10;
// const ageForDriving=18;//storing the boolean value by arthematic operator
//or write like this in common method==>if(age>=18)
// if(age>=ageForDriving){
//     console.log(`Sarah can apply for license🚙`)//win key+ . for emoji
// }else{
//     let yearsLeft=ageForDriving-age;
//     console.log(`The candidate is too young wait for ${yearsLeft} years:)`)
//}
//however there is no else statement then js will move on to the nextline
//EX2
// const birthYear=1992;
// let century;//variables inside the curley brackets will be accessable inside the bracket so we should need to declare a global variable
// if(birthYear>=2000){
//    century=21;
// }else{
//     century=20;
// }
// console.log(`The person is from ${century}th century`)

//Coding chellange 2
/*const heightOfMark=1.88 ;
const weightOfMark=95 ;
const heightOfJohn=78;
const weightOfJohn=1.69;
const marksBMI=weightOfMark/heightOfMark**2;
const johnsBMI=weightOfJohn/heightOfJohn**2;
// const markHigherBMI=(marksBMI>johnsBMI);
if(marksBMI>johnsBMI){
    console.log(`marksBmi is higher than johnsBmi and the differnde is ${marksBMI-johnsBMI}` )
}else{
    console.log(`johnssBmi is higher than marksBmi and the differnde is ${johnsBMI-marksBMI}`)
}*/


//TPYE CONVERSION AND TYPE CORETION
//srting into number
/*const birthYear='1991';
console.log(birthYear+10);//it will give output of 199110=>here type coertion is happening
//instead of use Number() function
console.log(Number(birthYear)+10);
const myName='jonas';
console.log(Number(myName));//if we try to convert string to number it give us NaN=>Not a Number=>Invalid number
console.log(typeof NaN);//in js type if NaN is always a number,its an empty version of number or exactly invalid number

//Number into string
const a=20;
console.log(String(a));//now number is converted to string
// we can also convert into booleans it acts in a special way

//TYPE COERTION==>AUTOMATICALLLY TYPE COERTION HAPPENING IN JS
//NUMBER +NUMBER=NUMBER
//NUMBER+STRING=STRING
//SSTRING+NUMBER=STRING
//STRING+STRING=STRING

//DURING SUBRACTION THE STRING IS CONVERTED INTO NUMBER
console.log('23'-'2'-'4'-5);//op is 12 correct answer
console.log('20'+'2'+'3'+4);//3 is converted into a string and concatinated
console.log('22'/'2');
console.log('22'*'2');
//conclusion=>+-coertion,-,/,*=>convertion ,converted to number
*/

//truthy and falsy values
//falsy values are not exactly false but will become false when we try to convert them into boolean
//5 falsy values=>'',null,undifined,NaN,0
//truthy values=>each and every other values are called truthy values
/*console.log(Boolean(null));
console.log(Boolean('Jonas'));
console.log(Boolean(''));
console.log(Boolean(221));
console.log(Boolean(0));
console.log(Boolean({}));//Boolean of empty object is true
//ex
const money = 0;
if(money){//here js converts every value into boolean to perform operation and checked truthy or falsy values
    console.log("Don't spent all the money");
}else{
    console.log("you should need to get a new job!");
}

//to check the value is defined or not
let height;
if(height){
    console.log("yey !the height is defined!😅")
}else{
    console.log("Ohh!, the height is undefined😥")
}
*/
/*
// Equality operator == and ===
//(STRICT QUALITY)
const age=18;
if(age===18)console.log('You just became Adult!');//tight equality operator
//If we have only one condition we can write in single line!
//it performs type comparision
//loose equality operator
//always use === operator

//(LOOSE EQUALITY)
const myAge='18';
if(age==18)console.log('You just became Adult!');//tight equality operator
//it didnot compare the typeof value

let favourateNum=Number(prompt('Enter your favourate number here!'));//always convert as a number using Number() function
//let favourateNum=prompt('Enter your favourate number here!');
console.log(favourateNum);
console.log(typeof favourateNum);//o/p in the console is always in string datatype we should need to convert into a number
if(favourateNum==23){//type conversion happened
    console.log('23 is good');
}else{
    console.log('false');
}//opis true

if(favourateNum===23){
    console.log('23 is good');
}else{
    console.log('false');
}//op is false

//ELSE_IF COndition==>if we have more than one or more condition
//syntax
// if(condition){
// }else if(condition){
// }else{}
if(favourateNum!==24)console.log('why not 24');//not equalto operator
*/
// //code chellange using ==
// const numNeighbours=prompt('How many neighbour countries does your country have?');
// if(numNeighbours==1){
//     console.log('Only 1 border!');
// }else if(numNeighbours>=1){
//     console.log('More than one');
// }
// else{
//     console.log('No borders');
// }
/*
//code chellange using ===
const numNeighbours=prompt('How many neighbour countries does your country have?');
if(numNeighbours===1){
    console.log('Only 1 border!');
}else if(numNeighbours>=1){
    console.log('More than one');
}
else{
    console.log('No borders');
}
*/
//BOOLEAN LOGIC OPERATORS AND,OR,NOT

/*
let number=100;
undefined
if(number > 0){
    for(i=1;i<=number;i++){
        if(i%3===0&&i%5===0){
        console.log(i,"FizzBuzz");
    }else if(i%3===0){
        console.log(i,"Fizz");
    }else if(i%5===0){
        console.log(i,"Buzz");
    }else{
        console.log(i);
    }
}
}
*/

//LOGICAL OPERATORS

/*const hasDrivingLicense=true;
const hasGoodVision=true;
console.log(hasDrivingLicense && hasGoodVision);//AND OPREATOR
console.log(hasDrivingLicense || hasGoodVision);//OR OPREATOR
console.log(!hasDrivingLicense , !hasGoodVision);//NOT OPREATOR
// if(sarahShouldDrive){
//     console.log('Sarah is able to  drive the vehicle!🚙⛳');
// }else{
//     console.log('Sarah cannot drive the vehicle,someone should drive....)🚩');
// }

const isTired=true;//testcase-1
//const isTired=false;//testcase-2
const sarahShouldDrive=hasDrivingLicense && hasGoodVision&&!isTired;//using and ,not operator

if(sarahShouldDrive){
    console.log('Sarah is able to  drive the vehicle!🚙⛳');
}else{
    console.log('Sarah cannot drive the vehicle,someone should drive....)🚩');
}*/

/*
//CODING CHELLANGE-2
const dolphinsAverageScore=(96+108+89)/3;
const koalasAverageScore=(88+110+91)/3;
console.log(dolphinsAverageScore , koalasAverageScore);
// if(dolphinsAverageScore > koalasAverageScore){
//     console.log(`dolphins are the champions 🏆 with average difference of ${dolphinsAverageScore-koalasAverageScore}.`);
// }else if(dolphinsAverageScore < koalasAverageScore){
//     console.log(`koalas are the champions 🏆 with average difference of ${koalasAverageScore-dolphinsAverageScore}.`);
// }else if(dolphinsAverageScore === koalasAverageScore){
//     console.log('Both wins the trophy');
// }else{
//     console.log('No tem  won!');
// }

//BONUS -1
if(dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore>=100){
    console.log(`dolphins are the champions with average difference of ${dolphinsAverageScore-koalasAverageScore}.`);
}else if(dolphinsAverageScore < koalasAverageScore && koalasAverageScore>=100){
    console.log(`koalas are the champions with average difference of ${koalasAverageScore-dolphinsAverageScore}.`);
}else if(dolphinsAverageScore === koalasAverageScore &&koalasAverageScore>=100 ){
    console.log('Match draw');
    //Bonus
}else{
    console.log('No team  won!');
}
*/

//SWITCH STATEMENT==>INSTEAD OF USING ELSE IF WE CAN USE SWITCH STATEMENT
//const day=prompt("Enter the current day here!").toLowerCase();//gerting input fron users
/*
const day='monday';
//const day='june';//not a valid input
switch(day){
    case'monday'://checks day===monday
    console.log('plan1 for monday is to learn program');
    console.log('plan2 for monday is to practice code');
    break;//after execution the breaks helps the code to stop execution or otherwise it will run & print output until it reaches another break:;
    case'tuesday':
    console.log('plan for tuesday to practice mock interviews!');
    break;
    case'wednesday':
    console.log('plan for wednesday is to learn python!');
    break;
    case'thursday':
    console.log('plan for thursday is to study DSA!');
    break;
    case'friday':
    console.log('plan for friday is to prepare course materials!');
    break;
    case'saturday':
    console.log('plan for saturday is to watch movies!');
    break;
    case'sunday':
    console.log('plan for sunday is playing cricket!');
    break;
    default:
        console.log('Not a valid input');
}
*/

//assignment
/*
const language='hindi';
switch(language){
    case'chinese || mandarin':
    console.log('MOST number of native speakers!');
    break;
    case'spanish': 
    console.log('2nd place in number of native speakers');
    break;
    case'english': 
    console.log('3rd place');
    break;
    case'hindi': 
    console.log('Number 4');
    break;
    case'arabic': 
    console.log('5th most spoken language');
    break;
    default:
        console.log('Great language too :D');
}
*/

//STATEMENTS AND EXPRESSIONS
//EXPRESSIONS==>IS A PIECE OF CODE THATS MAKES A VALUE==>3+4=7,ALSO A SIMPLE VALUE=>1991,true&&false&&!false
//STATEMENT=>IS A LARGE PIECE OF CODE THAT WILL NOT PRODUCE A VALUE ON ITSELF
//EX:IF ,IF ELSE,ELSE IF STATEMENT=>if(23>10){const str="23 is greater than 10";}==>it doesnot produce the value,here 23 is greater then 10 is an expression=>statements are used to perform actions with expressions,it completes with semi-colons
//ex;console.log(`I am ${2022-1999} years old`);here whole sentence is statement and ${2022-1999} is an expression


//CONDITIONAL OR TERENARY OPERATOR=>to write conditions
//syntax
// const age=23;
// age>=18?console.log('Eligible for applying license'):console.log('Not eligible for applying license ');//three parts are there and so its called terenary operator(condtion,result1,result2)

// //create a value using terenary operator
// const age=23;
// const result=age>=18?console.log('wine🍷'):console.log('watermelon🍉🍉');
// //using if else
// let drink2;
// if(age>=18){
//     drink2='wine🍷';
// }else{
//     drink2='watermelon🍉🍉';
// }
// console.log(drink2);//terenary operator will decerease the no coding lines
// //And also we can use this in a string literal
// console.log(`You are allowed to drink ${age>=18?'wine 🍷' : 'water 💧'}`);
//these are really helpful to take quick decisions

//coding chellange-4
const bill=275;
const tip=bill<=300 && bill>=50?(bill/100)*15:(bill/100)*20;
console.log(tip);
const billValue=`The bill was ${bill}, the tip was ${tip} and the total value is ${bill+tip}.`;
console.log(billValue);
