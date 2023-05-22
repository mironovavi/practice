"use strict"

//Решение задач на темы объекты и функции

//Example{
// var age = 7;
// function addOne(x){  
//   x = x + 1;
//   return x;
// }
// addOne(age);
// console.log(addOne(age));}

1. //Функция-генератор чисел, которая увеличивает число на 1 до бесконечности 

// function sequence(start,step){
//   for (let i = 1; i <= step; i++) {
//     function sequence(){
//       start = start  + 1;
//       return start ;
//     } 
//     let generator1 = sequence(); 
//     // console.log(generator1, '- generator1');    
//   } return start ;
// }
// let generator2 = sequence(10,3);
// console.log(generator2,'- generator2'); 

2.//Добавить функцию, которая вызывают другую функцию заданное 
//число раз и вызывает массив с результатами вызовов

// let gen2 = sequence(0,2);
// console.log(gen2,'- gen2');

// function take(gen,x) {
//   var result = [];
//     return function gene(){
//       result[0]= 0;
//       result[1]= gen;
//         for (let i = 2; i <= (x - 1); i++){
//           gen = gen + 2;
//           // console.log(gen2,'значение элемента');
//           result[i] = gen;          
//         }     
//         return result; 
//     }     
// }
// // console.log(result,'result1');  
// let t = take(gen2,5);
// console.log(t());

3. //Напиши функцию, которая принимает на вход функцию и массив, 
//и обрабатывает каждый элемент массива этой функцией, 
//возвращая новый массив.

// let array = [1, 2, 3, 4];
// let newArr = [];
// let length = array.length;

// function square() {
//     for ( let i = 0; i <= (array.length - 1); i++){
//       array[i] = array[i] * array[i];
//       newArr.push(array[i]);        
//     }
// }
// square();
  
// function map(fn, array){ 
//   return newArr;
// }
// console.log(map(square,array));

4.//Counting sheeps

// let sheeps = [true,  true,  true,  false,
//               true,  true,  true,  true ,
//               true,  false, true,  false,
//               true,  false, false, true ,
//               true,  true,  true,  true ,
//               false, false, true,  true];

// function countSheeps(array) {
//   let amount = 0;
//   for ( let i = 0; i < sheeps.length; i++){
//     if(sheeps[i] == true){
//       amount = amount + 1;
//     } else {
//       console.log('All sheeps are missing!')
//     }
//   } 
//   console.log(amount, ' - total amount of sheeps');
//   return amount; 
// }
// countSheeps(sheeps);

5.// Grade book

1.//способ

// function getGrade(s1, s2, s3){
//   let score = (s1 + s2 + s3)/3;
//   // console.log(score);
//   if (90 <= score && score <= 100){
//     console.log('A');
//   } else if(80 <= score && score < 90){
//     console.log('B');
//   } else if(70 <= score && score < 80){
//     console.log('C');
//   } else if(60 <= score && score < 70){
//     console.log('D');
//   } else if(0 <= score && score < 60){
//     console.log('F');
//   } else undefined;

// }
// getGrade(95,90,93);

2.//способ

// function getGrade(s1, s2, s3){
//   let avg = (s1 + s2 + s3)/3;
//   if(avg < 60) return "F";
//     else if (avg < 70) return "D";
//     else if (avg < 80) return "C";
//     else if (avg < 90) return "B";
//     else return "A";
// }
// console.log(getGrade(95,90,93));

6.// The needle in the haystack?

// let junk = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
// 1.//способ
// function findNeedle(haystack){
//   for ( let i = 0; i < haystack.length; i++){
//     if(haystack[i]== "needle") 
//       return "found the needle at position " + i;  
//   }
// }
// console.log(findNeedle(junk));
2.//способ

// function findNeedle(haystack){
//   return "found the needle at position " + haystack.indexOf("needle");
// }
// console.log(findNeedle(junk));

7.//Rock Paper Scissors(Камень,ножницы,бумага)

// let p1 = ["scissors", "rock", "paper"];
// let p2 = ["scissors", "rock", "paper"];

//Мой способ

// const rps = (p1, p2) => {
//     let rand1 = Math.floor(Math.random() * p1.length);
//     let rand2 = Math.floor(Math.random() * p2.length);
//   console.log(rand1)
//   console.log(rand2)                     
//   console.log(p1[rand1],p2[rand2]);
//    if (p1[rand1] == p2[rand2]) {
//       return'DRAW!';
//    } else {
//       if (p1[rand1] == "scissors") {
//          if (p2[rand2] == "paper" ) {
//             return 'PLayer 1 won!';
//          }
//          if (p2[rand2] == "rock") {
//             return 'PLayer 2 won!';
//          }
//       }
//       if (p1[rand1] == "paper") {
//          if (p2[rand2] == "scissors"){
//           return 'PLayer 2 won!';
//          } 
//          if (p2[rand2] == "rock") {
//           return 'PLayer 1 won!';
//          }
//       }
//       if (p1[rand1] == "rock") {
//         if (p2[rand2] == "scissors") {
//           return 'PLayer 1 won!';
//         } 
//         if ( p2[rand2] == "paper") {
//           return 'PLayer 2 won!';
//         }
//       }
//     }
//    };

// console.log(rps(p1, p2));

2//способ без рандомайзера

// let p1 = "rock";
// let p2 = "scissors";

// const rps = (p1,p2) => {
//   if ( p1 === p2 ) return "DRAW!";
//   let rules = {
//     rock: "scissors",
//     scissors: "paper",
//     paper:"rock"
//   };
//   console.log (rules[p1]);
//    if ( p2 === rules[p1]) {
//     return "Player 1 won!";
//   } else {
//     return "Player 2 won!";
//   }
// }
// console.log(rps(p1,p2));

8//Removing the exclamation marks from string

// let str = 'Hello World!';
// function removeExclamationMarks(s){
//   return s.replace(/!/g, '');
// }
// console.log(removeExclamationMarks(str));

9//Changing the numbers 

// let string = '45385593107843568';

// function fakeBin(str){
//   let newStr = "";
//   for ( let i = 0; i < str.length; i++){
//     if (Number(str[i])>= 5){
//       newStr += "1";
//     } else {
//       newStr += "0";
//     }
//   }
//   return newStr;
// }
//  console.log(fakeBin(string));

10.//If you can't sleep, just count sheep!!

//мой способ
// const countSheep = function (num) {
//   let string = '';
//   for (let i = 1; i <= num; i++){
//       string = string + `${i}` + ' sheep...';     
//   }return string;
// }
// console.log(countSheep(0));
// console.log(countSheep(3));

2 //способ

// const countSheep = function(num) {
//   let str = '';
//  for ( let i = 1; i <= num; i++){
//   str += `${i}` + ' sheep...';
//  }
//  return str;
// }
// console.log(countSheep(0));

11. // to Integer

//Мой способ// 

// let symbol = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
// let value = [1, 5, 10, 50, 100, 500, 1000];

// let roman = {};
// let createObj =  function(s,v){   
//     for (let i = 0; i < s.length; i++){
//       roman[s[i]] = v[i];
//     }
//     return roman;
// }
// console.log(createObj(symbol,value));

// let s = 'MCMXCIV';

// let romanToInt = function(s){
// let sum = 0; 
// for (let i = 0; i < s.length; i++){
//     if(roman[s[i]] < roman[s[i+1]]) {
//       sum = sum - roman[s[i]];
//     } else {
//       sum = sum + roman[s[i]];
//     }
//     // roman[s[i]] < roman[s[i+1]] ? sum = sum - roman[s[i]]: sum = sum + roman[s[i]];
//     }
//     return sum;
//   }
//   console.log(romanToInt(s));
  

2.//корректный способ

// let symbols = {
//   'I': 1,
//   'V': 5,
//   'X': 10,
//   'L': 50,
//   'C': 100,
//   'D': 500,
//   'M': 1000
// };

// let s = 'LVIII';

// var romanToInt = function(s) {
//   let value = 0;
//   for(let i = 0; i < s.length; i+=1){
//       symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
//       console.log(symbols[s[i]]);
//       console.log(symbols[s[i + 1]]);
//   }
//   return value
// }
// console.log(romanToInt(s));

//Задачи на функции

//Задача 1

// function evenOrOdd(a,b){
//   if (a % 2 == 0 && b % 2 == 0 ){
//     return a * b;
//   } else if ( a % 2 !== 0 && b % 2 !== 0){
//     return a + b;
//   } else if (a % 2 == 0 && b % 2 !== 0 ){
//     return b;
//   } else if (a % 2 !== 0 && b % 2 == 0 ){
//     return a;
//   }
// }
// console.log(evenOrOdd(3,3));

//Задача 2

// function sequence(start,step){
//   for( let i = 0; i < step; i++){
//     start += 1; 
//   } return start;
// }
// console.log(sequence(10,3));

//Задача 3

// function sum(a,b,c){
//   return a + b + c;
// }
// console.log(sum(2,5,10));

//Задачи на массивы 

//Задача 1

// function range(a,b){
//   let array = [];
//   for (let i = a; i >= b; ){
//     array.push(i);
//     // console.log(array);
//     i = i - 1;
  
//   }
//   return array;
// }
// console.log(range(5,2));

//Задача 2!!!!!

// let matrix = [];
// function createMatrix(a,b){
  
  
//     for ( let j = 0; j <= a; j++) {
  
//       let array = []; 
//       for(let i = 0; i <= b; i++){
        
//         let rand = Math.floor(Math.random() * 100);
//         console.log(rand, 'рандомное число');
//         array[i] = rand;
//         console.log(array, 'массив');
//     }
//     matrix.push(array);
//     console.log(matrix, 'матрица');
    
//   } 
// }
// createMatrix(2,4);

//48 задачи 

//48.1 Palindrome Number

// let isPalindrome = function(x) {
//   let palindrome = 0;
//   let m = x;
//   while( m > 0 ){
//     palindrome = m % 10 + palindrome * 10;
//     m = parseInt( m / 10);
//   }
//    return palindrome == x;
  
//   }

// console.log(isPalindrome(4224));

// console.log(isPalindrome instanceof Object);

//48.2 Two Sum

//мой дырявый способ 

// let threeSun = function(nums, target){
//   let indices = [];
//   for (let i = 0; i < nums.length - 1; i++){

//     for( let j = 1; j < nums.length; j++){
//       let k = j + i;
//         if ((nums[i] + nums[k]) === target){
//           indices.push(nums.indexOf(nums[i]));
//             if(i != k){
//               indices.push(k);
//             }
//         } 
//     } 
//   } return indices;
// }
// console.log(threeSun([2,5,5,11], 10));

//нормальное решение

// var twoSum = function(nums, target) {
//   let obj = {};
//   for( let i = 0; i < nums.length; i++){
//     if (obj[target - nums[i]] === undefined){
//       obj[nums[i]] = i;
//       console.log(obj[nums[i]]);
//     } else {
//       console.log([obj[target - nums[i]],i]);
//       return [obj[target - nums[i]],i];
//     }
//   }
// }

// console.log(twoSum([2,5,5,11], 10));


//48.3 Can Place Flowers

//мой способ (не самый плохой)
// let canPlaceFlowers = function(flowerbed, n) {
//   // console.log(flowerbed, "начальный flowerbed");
//   let change;
//   if (flowerbed.length === 1 && flowerbed[0] === 0 && n > 0){
//     change = flowerbed.splice(0,1,1);
//     n--;
//   } else if(flowerbed[0] == flowerbed[1] && n > 0) {
//     change = flowerbed.splice(0,1,1);
//     n--;
//   } else if(flowerbed[flowerbed.length - 1] == flowerbed[flowerbed.length - 2] && n > 0){
//     change = flowerbed.splice((flowerbed.length - 1),1,1);
//     n--;
//   }

//   for (let j = 0; j < flowerbed.length - 1; j++){
//     if(flowerbed[j] === 0 && flowerbed[j - 1] === 0 && flowerbed[j + 1] === 0 && n > 0){
//         flowerbed[j] = 1;
//         n--;
//     }
//   }

// // console.log(flowerbed);
// if (0 === n){
//     return true;
//   } return false;
// }
// console.log(canPlaceFlowers([0],1));//true
// console.log(canPlaceFlowers([0],0));//true
// console.log(canPlaceFlowers([1],1));//false
// console.log(canPlaceFlowers([1],0));//true
// console.log(canPlaceFlowers([0,0,1,0,1],1));//true
// console.log(canPlaceFlowers([0,0,1,0,0],2));//true
// console.log(canPlaceFlowers([1,0,0,0,1],1));//true
// console.log(canPlaceFlowers([1,0,0,0,1],2));//false
// console.log(canPlaceFlowers([0,1,0,1,0],0));//true
// console.log(canPlaceFlowers([1,0,1,0,1],0));//true
// console.log(canPlaceFlowers([1,0,0,0],1));//true
// console.log(canPlaceFlowers([0,0,0,1,0,0],2));//true
// console.log(canPlaceFlowers([0,0,0,1,0,0],1));//true
// console.log(canPlaceFlowers([0,0,0,0],1));//true

//способ поумнее,но почему то не работает до конца 

// function canPlaceFlowers(flowerbed, n) {
//   let count = 0;
//   for ( let i = 0; i < flowerbed.length; i++){
//     if(flowerbed[i] === 0 && ( i === 0 || flowerbed[i - 1] === 0) && ( i == flowerbed.length || flowerbed[i + 1] === 0)){
//       flowerbed[i] = 1;
//       count++;
//       // console.log(flowerbed);
//       // console.log(count);
//     }
//     if ( count >= n){
//       return true;
//     } 
//   } return false;
// }
// console.log(canPlaceFlowers([0],1));//true
// console.log(canPlaceFlowers([0],0));//true
// console.log(canPlaceFlowers([1],1));//false
// console.log(canPlaceFlowers([1],0));//true
// console.log(canPlaceFlowers([0,0,1,0,1],1));//true
// console.log(canPlaceFlowers([0,0,1,0,0],2));//true
// console.log(canPlaceFlowers([1,0,0,0,1],1));//true
// console.log(canPlaceFlowers([1,0,0,0,1],2));//false
// console.log(canPlaceFlowers([0,1,0,1,0],0));//true
// console.log(canPlaceFlowers([1,0,1,0,1],0));//true
// console.log(canPlaceFlowers([1,0,0,0],1));//true
// console.log(canPlaceFlowers([0,0,0,1,0,0],2));//true
// console.log(canPlaceFlowers([0,0,0,1,0,0],1));//true
// console.log(canPlaceFlowers([0,0,0,0],1));//true

//48.4 Longest Common Prefix

//первый способ

// let longestCommonPrefix = function(strs) {
//     let prefix = strs[0];
//     console.log(prefix);
//     for (let i = 1; i < strs.length; i++){
//       console.log(strs[i].indexOf(prefix));
//       while (strs[i].indexOf(prefix) != 0 ){//если есть префикс retuen 0, если нет -1
//         prefix = prefix.substring(0, prefix.length - 1)
//       }
//     }
//     return prefix;
// };

// console.log(longestCommonPrefix(["flower","flow","flight"]));

//второй способ 

// let longestCommonPrefix = function(strs) {
//   let prefix = strs[0];
//   for (let i = 1; i < strs.length; i++){
//     if (strs[i].startsWith(prefix)){// метод позволяет определить начинается ли строка с символов, указанных в скобках, возвращ true или false
//       i++;
//     } else {
//       prefix = prefix.slice(0,-1);
//       console.log(prefix);//обрезает последнюю букву 
//     }
//   }
//   return prefix;
// };

// console.log(longestCommonPrefix(["flower","flow","flight"]));

//48.5 Valid Parentheses

// var isValid = function(s) {
//     let obj = {};

//       // let keys = Object.keys(obj);//выводим массив из названия ключей объекта
//       // console.log(keys);
//       // let key = keys[0];//название ключа 
//       // console.log(key);
//       // let arr = obj[keys[0]];//выводим массив в объекте
//       // console.log(arr);
//       // let symbol = arr[0];//символ объекта
//       // console.log(symbol);

//       for (let j = 0; j < s.length; j++){ 
//         if (s[j] === "(") {
//           obj.type1 = 1;
//           // console.log(obj.type1, "obj.type1 ")
//         } else if (s[j] === "["){
//           obj.type2 = 1;
//           // console.log(obj.type2, "obj.type2 ")
//         } else if (s[j] === "{") {
//           obj.type3 = 1;
//           // console.log(obj.type3, "obj.type3 ")
//         } else if (j === 0 && (s[j] === "}" || s[j] === "]" || s[j] === ")")) {
//           return false;
//         } else {          
//           for (let i = j; i > 0; i--){
//             console.log(s[i], "s[i]");
//             console.log(s[i - 1], "s[i - 1]");
//             console.log(s[i + 1], "s[i + 1]");
//             if (s[i] === ")"){
//               if (s[i - 1] === "(" ){
//                 obj.type1 = 0;
//                 console.log(obj.type1,"obj.type1 update");
//                 // s[i] = 0;
//                 // s[i - 1] = 0;
//               } else {
//                 return false;
//               }
//             } else if (s[i] === "]"){
//               if (s[i - 1] === "[" ){
//                 obj.type2 = 0;
//                 console.log(obj.type2,"obj.type2 update");
//                 // s[i] = 0;
//                 // s[i - 1] = 0;
//               } else {
//                 return false;
//               }
//             } else if (s[i] === "}") {
//               if (s[i - 1] === "{" ){
//                 obj.type3 = 0;
//                 console.log(obj.type3,"obj.type3 update");
//                 // s[i] = 0;
//                 // s[i - 1] = 0;
//               } else {
//                 return false;
//               }
//             }    
//           }
//         }
//       }
//       console.log(s);
//       for ( keys in obj){
//         if (  === 0 ){
//           return true;
//         }  else {
//           return false 
//       }
//       // if (s.length === 0){
//       //   return true;
//       // } else{
//       //   return false;
//       }
// };


// // console.log(isValid("{}("));
// console.log(isValid("()"));

//48.6 Kata - Check same case

// function sameCase(a, b){
//   if ( !isNaN(a) || a.match(/\W/g) != null || !isNaN(b) || b.match(/\W/g) != null){
//     return -1;
//   } else {
//     if ((a === a.toUpperCase() && b === b.toUpperCase()) || (
//     a === a.toLowerCase() && b === b.toLowerCase()) ){
//       return 1;
//     } return 0;
//   }
  
// }

// console.log(sameCase("A","?"));//-1
// console.log(sameCase("a","g"));//1
// console.log(sameCase("A","C"));//1
// console.log(sameCase("a","G"));//0
// console.log(sameCase("B","g"));//0
// console.log(sameCase("0","?"));//-1
// console.log(sameCase("a","0"));//-1
// console.log(sameCase("?","g"));//-1
// console.log(sameCase("?",","));//-1

//48.7 Kata - L1: Set Alarm

// function setAlarm(employed, vacation){
//   if (employed != true || employed === true && vacation === true){
//     return false;
//   } else { 
//     return true; 
//   }
// }
// console.log(setAlarm(true,true)); //false
// console.log(setAlarm(false,true)); //false
// console.log(setAlarm(false,false)); //false
// console.log(setAlarm(true,false)); //true

//48.8 Kata - You only need one - Beginner

// function check(a,x){
//   for ( let i = 0; i < a.length; i++){
//     if(a[i] === x){
//     return true;
//   } 
//   }
//   return false;
// }
// console.log(check([66, 101],66));
// console.log(check([101, 45, 75, 105, 99, 107],107));
// console.log(check(['t', 'e', 's', 't'],'e'));
// console.log(check(['what', 'a', 'great', 'kata'], 'kat'));

//48.9 Kata - Abbreviate a Two Word Name

// function abbreaveName(name){
//   let str = name[0] + "." + name[name.indexOf(" ") + 1];
//   return str.toUpperCase();
// }
// console.log(abbreaveName("Sam Harris"));
// console.log(abbreaveName("P Favuzzi"));
// console.log(abbreaveName("grkmHCKbWjOZMMm DLK"));

//48.10 Kata - Will there be enough space?

// function enough(cap, on, wait){
//   // if((on + wait) <= cap){
//   //   return 0;
//   // } else {
//   //   return (on + wait) - cap;
    
//   // }
//   return (on + wait) <= cap ? 0 : (on + wait) - cap;
  
// }
// console.log(enough(10, 5, 5));
// console.log(enough(100, 60, 50));
// console.log(enough(20, 5, 5));

//48.11 Kata - Reversed sequence

//1 способ
// let reversedSeq = n => {
//   let arr = [];
//    while (n != 0){
//     arr.push(n);
//     n = n - 1;
//    }
//    return arr;
// };
// console.log(reversedSeq(5));

//2 способ
// let reversedSeq2 = n => {
//   let arr = [];
//    for ( let i = n; i > 0; i--){
//     arr.push(i);
//    }
//    return arr;
// };

// console.log(reversedSeq2(5));

//48.12 Kata - Sentence Smash

//1 способ
// function smash(words){
//   let str = "";
//   for (let i = 0; i < words.length; i++){
//     if (words.length != 0){
//     str = str  + words[i];
//       if (i >= 0 && i < (words.length - 1)){
//         str = str + " ";
//       }
//     } else {
//       return "";
//     }
//   }
//   return str;
// }
// console.log(smash(["hello", "world"]));
// console.log(smash([]));
// console.log(smash(["this", "is", "a", "really", "long", "sentence"]));

//2 способ
// function smash(words){
//   return words.join(" ");
// }
// console.log(smash(["hello", "world"]));
// console.log(smash([]));
// console.log(smash(["this", "is", "a", "really", "long", "sentence"]));

//48.13 Kata - Convert a String to a Number!

// function convertToNumber(str){
//   let num = 0; 
//   return num = Number(str);
// }
// console.log(convertToNumber("1234"));
// console.log(convertToNumber("-7"));

//48.14 Kata - Convert a Number to a String!

// function convertToString(num){
//   let str = ""; 
//   return str = String(num);
// }
// console.log(convertToString(1234));
// console.log(convertToString(-7));

//48.15 Kata - Convert a Boolean to a String!

// function converBooToStr(boolean){
//   let str = "";
//   return str = String(boolean);
// }
// console.log(converBooToStr(true));

//48.16 Kata - Convert boolean values to strings 'Yes' or 'No'.

// function convert(boolean){
// let str = "";
//  return boolean === true ? str = "Yes" : str = "No";
// }
// console.log(convert(true));
// console.log(convert(false));

//48.17 Kata - Removing Elements

// function remove(arr){
//   for ( let i = 1; i < arr.length; i++){
//   arr.splice(i,1);
//   }
//   return arr;
// }
// console.log(remove(["Keep", "Remove", "Keep", "Remove", "Keep"]));


//48.18 Kata - Cat years, Dog years

//мой способ

// let years = function (humanYears){
//   let arr = [];
//   arr.push(humanYears);

//   if (humanYears === 1){
//     arr[1] = 15;
//     arr[2] = 15;
//   } else if (humanYears === 2){
//     arr[1] = 24;
//     arr[2] = 24;
//   } else if(humanYears >= 3){
//     humanYears = humanYears - 3;
//       arr[1] = 28;
//       arr[2] = 29;
//       while (humanYears != 0){ 
//         humanYears--;
//         arr[1] = arr[1] + 4;
//         arr[2] = arr[2] + 5;
//       } 
// }
//   return arr;
// }

//Второй способ

// let years = function (humanYears){
//   let catYears = 0;
//   let dogYears = 0;
//   for (let i = 1; i <= humanYears; i++){
//     if ( i === 1 ){
//       catYears += 15;
//       dogYears += 15;
//     } else if ( i === 2){
//       catYears += 9;
//       dogYears += 9;
//     } else {
//       catYears = 24 + (humanYears - 2) * 4;
//       dogYears = 24 + (humanYears - 2) * 5;
//     }
//   }
//    return [humanYears, catYears, dogYears];
// }

// console.log(years(1));
// console.log(years(2));
// console.log(years(3));
// console.log(years(4));
// console.log(years(5));
// console.log(years(6));
// console.log(years(10));

//48.19 Kata - Reversed Words

// function reversed(str){
//   let newStr = "";
//   let value = "";

//     for (let i = str.length - 1; i >= 0; i-- ){
//       // console.log(str.length - 1);
//       if (str[i] != " "){
//         newStr = newStr + str[i];
//         console.log(newStr);
//         // for (let j = newStr.length - 1; j >= 0; j--){
//         //   console.log(j);
//         //   console.log(newStr[i]);
//         //   console.log(j - 1);
//         //   console.log(newStr[j - 1]);
//         //   // if (j != undefined){
//         //   //   newStr[j] = newStr[j - 1];
//         //   //   newStr[j - 1] = str[i]; 
//         //   // }
//         // }
//       } else {
//         newStr = newStr + " ";
//       }
//     }
// }
// console.log(reversed("The greatest victory is that which requires no battle"));
