// chapters31-34
// var rightNow = new Date();
// document.write(rightNow)

// var localDate = new Date();
// var months = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];
// var currentMonth = months[localDate.getMonth()];
// alert(currentMonth);

// var currentDay = new Date();
// currentDay.toString;
// var b = currentDay.toString();
// var c = b.slice(0,3);
// alert("Today is " + c);

// var currentDay = new Date();
// currentDay.toString;
// var b = currentDay.toString();
// var c = b.slice(0,3);
// alert("Today is " + c);
// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var c = b.slice(0,3);
// if (c === "Sat"){
//     alert("It's Fun Day")
// }else if(c === "Sun"){
//     alert("It's Fun Day")
// }else if(c === "Mon"){
//    document.write("It's work Day")
    
// }else if(c === "Tue"){
//     document.write("It's work Day")
   
// }else if(c === "Wed"){
//     document.write("It's work Day")
   
// }else if(c === "Thr"){
//     document.write("It's work Day")
   
// }else if(c === "Fri"){
//     document.write("It's work Day")
   
// }
// alert(c)

//  var Date =prompt("enter your date")
//  if (Date < 15){
//     alert("start days of month")
//  }
//  else if (Date > 15){
//     alert("end days of month")
// }

// var todayDate = new Date();
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);

 
// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)



// var a = new Date();
// var b = a.toString();
// var c = b.slice(16,19);
// if (c === "12:"){
//     document.write("It's PM")
// }else if(c === "13:"){
//     document.write("It's PM")
// }else if(c === "14:"){
//     document.write("It's PM")
// }else if(c === "15:"){
//     document.write("It's PM")
// }else if(c === "16:"){
//     document.write("It's PM")
// }else if(c === "17:"){
//     document.write("It's PM")
// }else if(c === "18:"){
//     document.write("It's PM")
// }else if(c === "19:"){
//     document.write("It's PM")
// }else if(c === "20:"){
//     document.write("It's PM")
// }else if(c === "21:"){
//     document.write("It's PM")
// }else if(c === "22:"){
//     document.write("It's PM")
// }else if(c === "23:"){
//     document.write("It's PM")
// }else if(c === "24:"){
//     document.write("It's AM")
// }else if(c === "01:"){
//     document.write("It's AM")
// }else if(c === "02:"){
//     document.write("It's AM")
// }else if(c === "03:"){
//     document.write("It's AM")
// }else if(c === "04:"){
//     document.write("It's AM")
// }else if(c === "05:"){
//     document.write("It's AM")
// }else if(c === "06:"){
//     document.write("It's AM")
// }else if(c === "07:"){
//     document.write("It's AM")
// }else if(c === "08:"){
//     document.write("It's AM")
// }else if(c === "09:"){
//     document.write("It's AM")
// }else if(c === "10:"){
//     document.write("It's AM")
// }else if(c === "11:"){
//     document.write("It's AM")
// }
// alert(c)


// var month = 1; 
// var d = new Date(2020, month + 11, 0);
// console.log(d.toString());
// record start time

// var startTime = new Date();
// var endTime = new Date();
// var timeDiff = endTime - startTime;
// timeDiff /= 1000;
// var seconds = Math.round(timeDiff % 60);
// timeDiff = Math.floor(timeDiff / 60);
// var minutes = Math.round(timeDiff % 60);
// timeDiff = Math.floor(timeDiff / 60);
// var hours = Math.round(timeDiff % 24);
// timeDiff = Math.floor(timeDiff / 24);
// var days = timeDiff ;
// document.write(timeDiff)

// new Date(1776, 6, 4, 12, 30, 0, 0);
// new Date(-6106015800000);
// new Date("January 31 1980 12:30");
// document.write(new Date)


// var year_born = prompt("Please enter your date of birth:", "Type here");
// var d = new Date();
// var n = d.getFullYear();
// function getAge(birthYear){
// 	var currentDate = new Date();
//     var currentYear = currentDate.getFullYear();
//     age = currentYear - birthYear;
//     return age;
// }
// calculatedAge = getAge(year_born);
// alert("Hello, " + "you are " + calculatedAge + " years old!");
// units = 1000
// bill = 0
// if(units<=50){
//   bill  = units*1
// }
// else if(units <=150){
//   bill = 50*1 + (units-50)*2
// }
// else if(units <=250){
//   bill = 50*1 + 100*2 + (units-150)*3
// }
// else if(units>250){
//   bill = 50*1 + 100*2 + 150*3 + (units-250) *4
// }

// if(bill>150){
//   bill = bill + bill*0.2
// }
// console.log(bill) 


// 35-38
// const date = new Date();
// document.write(date);

// function sum (x,y)
//      { num1=parseInt(x);
//     	num2=parseInt(y);
//     	return (num1+num2);}
//      var input1 = window.prompt("Enter a number: ", 0);
//      var input2 = window.prompt("Enter another number: ", 0);
//      var input3 = window.prompt("Enter another number: ", 0);
//      var value1 = parseFloat(input1 + input2);
//      var value3 = parseFloat(input3);
//      var sum = sum(value1 + value3);
//      document.writeln("<h1> First number: " + value1 + "</h1>");
//      document.writeln("<h1> Second number: " + value3 + "</h1>");
//      document.writeln("<h1> Sum: " + sum + "</h1>");

// var  num1 = parseInt(prompt('Enter the first number '));
// var  num2 = parseInt(prompt('Enter the second number '));
// var sum = num1 + num2;
// document.write(`The sum of ${num1} and ${num2} is ${sum}`);

// function sumOfSquares(num) {
//     var i;

//     for (i=0,i<=num,i++){
//         var sum=0;
//         var i = i*i;
//         sum = i;
// }
//      document.write("The sum of squares for numbers up to and including " +num+ "is " +sum+ ) ;
// }
// var num = parseInt(prompt("Enter a number:"));
// sumOfSquares(num);


// var number = parseInt(prompt('Enter a positive integer: '));

// if (number < 0) {
//     document.write('Error! Factorial for negative number does not exist.');
// }

// else if (number === 0) {
//     console.log(`The factorial of ${number} is 1.`);
// }
// else {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     document.write(`The factorial of ${number} is ${fact}.`);
// }

// var num = Math.ceil(Math.random() * 10);
// document.write(num);
//  var anum = prompt('Guess the number between 1 and 10 inclusive');
//  if (anum == num)
//    document.write('Matched');
//   else
//    document.write('Not matched, the number was '+anum);

// function pythagorean(sideA, sideB){
//     return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
//   }
//   console.log(pythagorean(4, 3)); 






// Changing case
// var a = prompt("Enter Your Name");
// a = a.toLocaleUpperCase();
// document.write(a);

// var a = prompt("Enter your Name");
// var b = a.slice(0,1);
// b = b.toUpperCase();
// var c = a.slice(1);
// c = c.toLowerCase();
// document.write(b + c);

// Strings: finding segments

// var a = "pakistan"
//     for (var i = 0; i < a.length; i++){
//         var txt = a.slice(i , i + 1)
//         if (txt == "n"){
//       alert("n has found on this index" + i)
//         }
//     }

// Strings: finding a character at a location

// var a = "Pakistan"
// document.write(a.charAt(3));

// Strings: replacing characters

// var word = "Hyderabad"
// var word2 = word.replace ("Hyder" , "islam")
// document.write(word2)

// var para = "owais and amin are best friends. They play cricket and football together"
// var para1 = para.replace("and", "&")
// document.write(para1)



// var num = +prompt("Enter a Valid Num");
// document.write(num , "<br>");
// var num = Math.round(num)
// document.write(num , "<br>")

// var a = +prompt("Enter a valid Num ");
// var a = Math.floor(a);
// document.write(a)

// var b = +prompt("Enter a valid Num ");
// var b = Math.ceil(b);
// document.write(b);

// var num = +prompt("Enter a negative Num");
// document.write(num , "<br>");
// var num = Math.round(num)
// document.write(num , "<br>")


// var b = +prompt("Enter a negative Num ");
// var b = Math.ceil(b);
// document.write(b);


// var a = +prompt("Enter a negative Num ");
// var a = Math.floor(a);
// document.write(a)


// var dice = Math.ceil(Math.random() *6)
// document.write(dice);

// var toss = Math.floor(Math.random() * 2+1);
// console.log(toss);

// var a = +prompt("Enter Num")
// if (a == 5){
//     alert("congrats")
// }
// else if (a != 5){
//     alert("try again")
// }



// var a = 35.36;
// var b = a.toString();
// console.log(a)
// console.log(typeof b);



// var a = 33.564613214864;
// var num = a.toFixed(0);
// console.log(num);
// console.log(typeof a);