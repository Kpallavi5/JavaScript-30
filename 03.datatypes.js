var marks = 100;
var name = "Sanket";
var age;//it will get undefined because you have not defined any value 
var company = null; //Javascript recognizes that its a keyword null .
var salary = undefined;// you can even manually give the value undefine
var isStudent = false;

console.log("Marks =", marks);
console.log("Name =", name);
console.log("age =", age);
console.log("company = ", company);
console.log("salary = ", salary);
console.log("Is a Student  = ", isStudent);

//creating objects
//-->Objects are used to creat complex entities.

var user = {
    name: "Pallavi",//after every key value you have to separated by commma
    company: "Google",
    age: 24 
}

console.log("Details of the user is  ", user);
