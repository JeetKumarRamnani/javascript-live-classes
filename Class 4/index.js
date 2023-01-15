// // Recurrsion In Javascript 
// //Function Calling Itself 

// function recurExample(number){
//     console.log(number);
//     // for(let i = number; i>0; i--){
//     //     console.log(i)
//     // }
    
//     let newNumber = number - 1;
//   if(newNumber>=0){
//   recurExample(newNumber);
//   }
// }

// recurExample(20)



//Annonymous Function

// function myFun(){     //Function Defination 
//     console.log("This Is Example Of Function Defination")
// }

// myFun()

// const myFun = function(){  //Function Expression
//     console.log("Example Of Function Expression")
// }

// myFun();

// (function(){
//     console.log("Immidiately Invoked Function")
// })();

//Higher Order Function/Method

// const arr = [1,2,3,4];

// // map method ke through app array pe kuch transformation karsakte ho apne hisabse or return karta hai new  transformed array map method original array ko change nai karte 

// const arr2 = arr.map(function(no){
//     return no+2;
// })
// // map method is an higher order method

// console.log(arr2)







//Callbacks 
// function myFun(){
//     console.log("I Will Be Called After 5 Secs ")
// }

// setTimeout(myFun,1000);


// console.log("I Will Be Print First");


// function greet(cb){
//     console.log("Welcome Guests")
//     cb(makeDinner); //makeRefreshment Wala Function Yahan Call Horaha Hai
// }
// function makeRefreshment(cb2){
//     console.log("Refreshment Is Served")
//     cb2(goodBye); //makeDinner Wala Function Yahan Call Horaha Hai
// }
// function makeDinner(cb3){
//     console.log("Dinner Is Ready");
//     cb3() //GoodBye Wala Function Yahan Call Horaha Hai
// }
// function goodBye(){
//     console.log("Nice To Meet You All Good Bye Take Care")
// }

// greet(makeRefreshment);

































 

