// ! JS Assignment 4 (chapter 17-20)

// ? Q1)

// var emptyMultiArray = [[]];

// ? Q2)

// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// ? Q3)

// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }

// ? Q4)

// var number = +prompt("Enter a number to show its multiplication table");
// var length = +prompt("Enter a length to show its multiplication table");

// for (var i = 1; i <= length; i++) {
//     var result = number * i;
//     document.write(`${number} x ${i} = ${result}` + "<br>");
// }

// ? Q5)

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// document.write(fruits[0]+"<br>"+fruits[1]+"<br>"+
// fruits[2]+"<br>"+fruits[3]+"<br>"+fruits[4]+"<br>");
// for (var i = 0; i < 1;i++) {
//     document.write("Element at index 0 is "+fruits[0]+"<br>");
//     document.write("Element at index 1 is "+fruits[1]+"<br>");
//     document.write("Element at index 2 is "+fruits[2]+"<br>");
//     document.write("Element at index 3 is "+fruits[3]+"<br>");
//     document.write("Element at index 4 is "+fruits[4]+"<br>");
// }

// ? Q6)

// var counting = "";
// document.write("Counting: " + "<br>");
// for (var i = 1; i <= 15; i++) {
//     document.write(counting = i + ", ");
// }
// document.write("<br><br>");

// var Reversecounting = "";
// document.write("Reverse Counting: " + "<br>");
// for (var i = 10; i >= 1; i--) {
//     document.write(Reversecounting = i + ", ");
// }
// document.write("<br><br>");

// var even = "";
// document.write("Even: " + "<br>");
// for (var i = 0; i <= 20; i+=2) {
//     document.write(even = i + ", ");
// }
// document.write("<br><br>");

// var odd = "";
// document.write("odd: " + "<br>");
// for (var i = 1; i <= 19; i+=2) {
//     document.write(odd = i + ", ");
// }
// document.write("<br><br>");

// var series = "";
// document.write("series: " + "<br>");
// for (var i = 0 ; i <= 20 ; i+=2) {
//     document.write(series = i +"k"+ ", ");
// }
// document.write("<br><br>");

// ? Q7)

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input=prompt("Welcome to ABC bakery.What do you want to order sir/ma'am?");

// var userInputLower=input.toLowerCase();
// var found=A.userInputLower;
//     if(found){
//         document.write(`${input} is available at index  in our bakery`);
//     }
//        else{
//         document.write(`We are sorry. ${input} is not available in our bakery`);
//        }

// ? Q8)

// var A = [24, 53, 78, 91, 12];
// document.write("Array items:" + A+"<br>");
// var max=A[0];
// for(var i=1;i<=A.length;i++){
//     if(A[i]>max){
//         max=A[i];
//     }
// }
// document.write("The largest number is: "+max);

// ? Q9)

// var A = [24, 53, 78, 91, 12];
// document.write("Array items:" + A+"<br>");
// var max=A[0];
// for(var i=1;i<=A.length;i++){
//     if(A[i]<max){
//         max=A[i];
//     }
// }
// document.write("The smallest number is: "+max);

// ? Q10)

// for (var i = 5; i <= 100; i += 5) {
//     document.write(i + ",");
// }


// ! chapter 21-25

// ? Q1)

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "! Welcome.");

// ? Q2)

// var favoriteMobile = prompt("What is your favorite mobile phone?");
// document.write("My favorite phone is:"+favoriteMobile+"<br>");
// var inputLength = favoriteMobile.length;
// document.write("Length of string: " + inputLength);

// ? Q3)

// var word = "Pakistani";
// document.write("String:"+word+"<br>");
// var indexOfN = word.indexOf("n");
// document.write("Index of 'n': " + indexOfN);

// ? Q4)

// var word = "Hello World";
// document.write("String:"+word+"<br>");
// var lastIndexofL = word.lastIndexOf("l");
// document.write("Last index of 'l': " + lastIndexofL);

// ? Q5)

// var word = "Pakistani";
// document.write("String:"+word+"<br>");
// var characterAt3rdIndex = word.charAt(3);
// document.write("Character at index 3: " + characterAt3rdIndex);

// ? Q6)

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName.concat(" ", lastName);
// alert("Hello, " + fullName + "! Welcome.");

// ? Q7)

// var word = "Hyderabad";
// document.write("City:" + word + "<br>");
// var replaceWord = word.replace("Hyder", "Islam");
// document.write("After replacement:" + replaceWord);

// ? Q8)

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Original message: " + message + "<br>");
// var replacedMessage = message.replace(/and/g, "&");
// document.write("Replaced message: " + replacedMessage);

// ? Q9)

// var originalString = "472";
// document.write("Value: " + originalString + "<br>");
// document.write("Type: " + typeof originalString + "<br>");

// var convertNumber =+(originalString);

// document.write("Value: " + convertNumber + "<br>");
// document.write("Type: " + typeof convertNumber + "<br>");

// ? Q10)

// var userInput = prompt("Enter some text:");
// document.write("User input:"+userInput+"<br>");
// var capitalizedInput = userInput.toUpperCase();
// document.write("Upper case: " + capitalizedInput);

// ? Q11)

// var userInput = prompt("Enter some text:");
// document.write("User input:"+userInput+"<br>");

// var words = userInput.split(" ");
// for (var i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
// }
// var titleCaseInput = words.join(" ");
// document.write("Title Case:"+titleCaseInput);

// ? Q12)

// var num = 35.36;
// document.write("Number: " + num + "<br>");
// var numString = num.toString().replace(".", "");
// document.write("Result: " + numString);

// ? Q16)

// var university = "University of Karachi";
// var universityArray = university.split(" ");
// for (var i = 0; i < universityArray.length; i++) {
//     document.write(universityArray[i] + "<br>");
// }

// ? Q17)

// var userInput = prompt("Enter some text:");
// document.write("User input:"+userInput+"<br>");
// var lastCharacter = userInput.charAt(userInput.length-1);
// document.write("Last character of input:"+lastCharacter);

// ? Q18)

// var inputString = "The quick brown fox jumps over the lazy dog"+"<br>";
// document.write("Text:"+inputString);
// inputString = inputString.toLowerCase();
// var wordToSearch = "the";
// var words = inputString.split(" ");
// var count = 0;
// for (var i = 0; i < words.length; i++) {
//     if (words[i] === wordToSearch) {
//         count++;
//     }
// }
// document.write("There are " + count +  "  occurrence(s) of word 'the'");
