let a : number = 20;
let b : string = "Hello, TypeScript!";
let c : boolean = true;     
let d : any = "This can be any type";
let e : number[] = [1, 2, 3, 4, 5];
let f : [number, string] = [1, "Hello"];
let g : { name: string; age: number } = { name: "Alice", age: 30 };
let h : null = null;
let i : undefined = undefined;  


let j: number = a-1;

console.log(a);
console.log(j);
g={name:'Babu',age:27};

console.log(g);


let s: string ='45';
let t:string = "true";
let u:string = `hello`;

console.log(s);
console.log(t);
console.log(u);


let bool : boolean = false;
let bool2 : boolean =true;
let bool3 : boolean= false;
let bool4: boolean= false;
console.log(bool);
console.log(bool2);
console.log(bool3);
console.log(bool4);




// string
// string data type is used to store single characters and group of characters.
// everything in double/single quotes is considered to be a sting in Typescript.
// Range is not applicable for string data type.

// boolean
// Range not applicable for boolean data type as well, it can only have two values true and false.
// boolean variable stores only true or false, and true / false are considered-total lower case. 

//number
// number data type is used to store numeric values. It can be either integer or floating-point numbers.
// Range of number data type is from -2^53 to 2^53, which is approximately -9,007,199,254,740,992 to 9,007,199,254,740,992.
// number takes negative values, positive values and zero. It can also take decimal values.