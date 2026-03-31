// Methods or functions
// What is a method/function in typescript?


//if a method or function is reusable and can be used across multiple classes,
//  then we can create a separate class for that and 
// then we can extend that class in the class where we want to use those methods or functions,
//  they are called reusable methods or functions and the class which contains those reusable methods or functions
//  is called a utility class or common utils class.
// class Superclass(ReusableMethods_functions_CommonUtils){
 
//     selectDropdownValue():void{
//         //logic to select dropdown value
// }

// //mouse hover and then elements will be visible and then we can click on it
// //so, we need a mouse hover method.
//         moveToElement():void{
//             //logic to move to element- Mouse Hover on the specific element ,
//             // so that it will be visible and then we can click on it.
//         }
// }

// To perform any actions, we need to create methods/functions.
//Be it verify page title, pag url, dropdown, check boxes,radio buttons,
// mouse hover,right click, double click, drag& drop,alerts,frames,
// windows handling, scrolling, keyboard actions, file upload/download,
//  wait for element to be visible/clickable/present, etc. 
// all these actions will be performed by creating methods/functions.



let name1:string ="sailu";
let rolln1:number =101;

console.log(name1);
console.log(rolln1);


let name2:string="babu";
let rolln2:number=102;

console.log(name2);
console.log(rolln2);    


let name3:string = "ram";
let rolln3:number = 103;

console.log(name3);
console.log(rolln3);

//We cannot go on write code like this. 
// It inreases code size,duplicate code, development & Maintenance time, and decreases cod quality.
// By using methods/functions,
// We can improve code reusability,
// we can reduce the code size,duplicate code, development & maintenance time, and increase code quality.
// 

// Method / fucntion Declaration Syntax:
function methodname(parameter1, parameter2, parameter3,...parameterN):returnType 
// Here in parameters, we can pass empty/single/multiple parameters as per our requirement.
{
//statements;
}

//calling function syntax.
methodname(); // Calling the function wihtout passing parameters.
methodname(value1/parameter1, value2/parameter2,...valueN/parameterN); // Calling the function by passing parameters.