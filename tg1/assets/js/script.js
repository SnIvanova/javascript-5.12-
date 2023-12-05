alert("hi");

// 1. Create a function called "myFunction" that takes in two parameters: "x" and "y". 
function myFunction(x, y) {}
    // 2. Inside the function, use an if statement to check if x is greater than or equal to y. If it is, return 



// Varibili JS
let var1 = 'testo';
let var2 = 25;
let var3 = true;
let var4 = [];
let var5 = {};
let var6 = undefined;
let var7 = null;

// Funzioni JS
// dichiarazione di funzione
func1();
function func1(params) {
    // blocco di istruzioni
    return params; 
}// ritorno un valore
 
    
//func2(); //errore
//funzione espressione
let func2 = function(params) {
// blocco di istruzioni
    return params;// ritorno un valore
} 
func2();

// funzione di callback
function call() {
    return "sono una funzione di callback";
    
    }
    //let f = call; same as console.log(call);
    //let f =call (); same as console.log(call ());
    console.log(call());

    // funzione di callback
function call() {
    return "Sono una funzione di callback di nome ";
    }
function miaFunc(f) {
    console.log(f());
    }
    
    miaFunc(call)


   // funzione di callback
function call(name) {
    return "Sono una funzione di callback di nome " + name;
} 
function sum(num) {
    return num + Math. floor(Math.random() * 10);
    }   
function miaFunc(v, f) {
    console. log(f(v));
    } 
    miaFunc('abc', call);
    miaFunc(25, sum);
    
function itera(n, i) {
        console. log(n + " " + i);

    }  

    // itera is a function
var4.forEach(itera);


console. log("-------");

// Using arrow function for forEach
var4.forEach((n, i) => {
    console.log(i + " " + n);
  });

  