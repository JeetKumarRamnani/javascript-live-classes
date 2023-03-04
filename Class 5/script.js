// Topics We Will Cover Today

// 1- Understanding Of Functions, Paramemeters And Arguments,Arrow Function Syntax And  Function Return Statement

//   Objects

// 2- Callbacks

// 3- Higher Order Functions

// 4- Ternary Operator

// 5- Destructuring Of Array And Objects

// 6- Spread Operator

// 7- Promises , Async Await And Fetch

// 8- ES6 Modules Import And Export

// 9- Array Methods

// console.log("Welcome to Programiz!");

// 1- Understanding Of Functions, Paramemeters And Arguments,Arrow Function Syntax And  Function Return Statement

// function Add(){

//  console.log(2+2)

// }

// Add();

// Add();

// Add();

// function sub(num1,num2){ //parameters

//     console.log(num1-num2)
// }

// sub(10,3); //arguments

// function mul(num1,num2){
//     return num1*num2
// }

// let result = mul(2,2) //4

// // let val = 5

// console.log("this ismultiplication result="+result)

// function mul(num1,num2){
//     return num1*num2
// }

// const mul = (num1,num2) => {
//     console.log(num1*num2)
// }

// const show = name => name;

// mul(2,2)
// // let myName = show("Jeet Kumar")
// console.log(show("Jeet Kumar"))

//2- CallBacks

// function myFun1(callback){ //This Is AN Higher Order Function

//     callback();

// }

// function myFun2(){
//     console.log("Hello From My Fun 2")
// }

//   myFun1(myFun2); //We Provide Function As A Parameter/Argument To Another Function This Is Called Callback

//Higher Order Function

// const arr = [1,2,3,4,5];
// console.log(arr[2])
// // for(let i=0; i<arr.length; i++){
// //      console.log(arr[i])
// // }

//  const result = arr.map(arrItem=>console.log(arrItem))

// console.log(result);

//OBJECTS The King In Javascript Everything Is Object In Javascript

// const obj={
//     name: "jeet kumar",
//     age: 27,
//     address: {
//         city:"Islamabad",
//         country:"Pakistan"
//     },
//     arr: [1,2,3]

//     }

// console.log(obj.arr[2]);

// let myFavNum = 4;

// let result = myFavNum==3 ? "Yes This Is My Favourite Number" : "No This Is Not My Favourite Number";

// console.log( result ) ;

// if(myFavNum==3){
//     console.log("Yes This Is My Favourite Number")
// }else{
//     console.log("No This Is Not My Favourite Number")
// }

//Array Destructuring

// const arr = [1,2,3,4];

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])

// const [firstNum,secondNum,thirdNum,forthNum] = arr;

// console.log(firstNum)
// console.log(secondNum)
// console.log(thirdNum)
// console.log(forthNum)

//Object Destructuring

// const obj = {
//     name: "jeet kumar",
//     age: 27

// }

// const {name:fullName,age} = obj

// console.log(fullName);
// console.log(obj.age)

//Spread Operator

// const arr = [1,2,3,4];

// const arr2 =[5,6,7,8];

// const newArray = [...arr,...arr2];

// console.log(newArray)

//MODULE IMPORT EXPORT

// // file1:
// export default function add(){
//     console.log("Hello From file 1")
// }

// // file2:

// import Adda from "./file1"

// Adda();

//Module Import export react example

// import React from "react";
// import Card from "./Card";

// export default function Main() {
//   return (
//     <div className="main-container">
//       <Card />
//     </div>
//   );
// }

// Array Methods

// map(cb) filter(cb) reduce(cb)

// const arr = [1,2];

// console.log(arr);

// arr.push(3,4,5,6)

// console.log(arr)

// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();

// console.log(arr)
