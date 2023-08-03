console.log("Hello World!");
//  use tab to complete the address

function add(a,b){
 return a+b;
}
console.log(add(2,8));

console.log(process.argv);
//  it shows all the excution files that is first node runs then index.js file rus then arguments

var args = process.argv.slice(2);
//  slice function make array of 2 length that is make two parts of process.argv array

//  node js runs on chrome v8 engine and all methods in js are asynchronous except callback function

console.log("Adding two numbers:",add(parseInt(args[0]),parseInt(args[1])));