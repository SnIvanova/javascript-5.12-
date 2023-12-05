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


  //funzioni di calllback
  var4.filter()
  var4.map()
  var4.find()
  var4.reduce()

  document.body.addEventListener('click', () => alert('click'))


// Immediately Invoked Function Expression)
  (function() {
    console.log("Sono una funzione anonima !!!");
  })();


  // Object Js
let obj1 = {
    name: 'Mario',
    "last name": "Rossi",
    name: "Rossi",
    city: "Roma",
    2: "occhi",
    saluta: function () {
        return this.name +" "+ this.city;
    }
}
    
    console.log(obj1);
    console.log(obj1.name); // dot notation
    console. log(obj1['name']);
    console. log(obj1["last name"]);
    console.log(obj1[2])
    console. log(obj1.saluta())

let fiat500 = {
    marca: 'Fiat',
    modello: '500',
    colore: 'Rosso'
}   
let fordFiesta = {
    marca: 'Ford',
    modello: 'Fiesta',
    colore: 'blu'
}    
let smart = {
    marca: 'Mercedes',
    modello: 'Smart',
    colore: 'Nero'
}
//invece
// Prototipo JS
function Auto(marca, modello, colore){
    this.marca = marca;
    this.modello = modello;
    this.colore = colore;
}

let cinquecento = new Auto('Fiat', '500', 'Rosso');
let fiesta = new Auto('Ford', 'Fiesta', 'blu');
let msmart = new Auto('Mercedes', 'Smart', 'nero');

Auto.prototype.info = function () {
    return this.marca + " " + this.modello + " " + this.colore;
}
//let msmart = new Auto('Mercedes', 'Smart', 'nero'); not important where to declare

smart.cambio = 'automatico'; //if we want to add only to property of one variable

console.log(cinquecento);
console. log(fiesta);
console. log(msmart);


class AutoClass {
    constructor(marca, modello, colore) {
    this.marca = marca;
    this.modello = modello;
    this.colore = colore;
    }
}

let c = new AutoClass('Fiat', '500', 'Rosso');
let f = new AutoClass('Ford', 'Fiesta', 'blu');
let s = new AutoClass('Mercedes', 'Smart', 'nero');

//clasess
class Persona1{
    constructor(nome, cognome, citta) {
    this.nome = nome;
    this. congome = cognome;
    this.citta = citta;}
}


class Uomo1 {
    constructor(nome, cognome, citta, barba) {
    this.nome = nome;
    this. congome = cognome;
    this.citta = citta;
    this.barba = barba;
    }
}
    
//class with methods
class Donna1 {
    constructor(nome, cognome, citta, smalto) {
    this.nome = nome;
    this. congome = cognome;
    this.citta = citta;
    this.smalto = smalto;
    }
    saluta() {
        return 'Ciao sono ' + this.nome + " " + this.congome;
        }   
        verso() {
        return 'Ahhhhh';
        }
}

//invece poi defenire in un "super" classe:


class Persona{
    static count = 0;

    constructor(nome, cognome, citta, anni) {
    this.nome = nome;
    this.cognome = cognome;
    this.citta = citta;
    this.anni = anni;
    Persona. count++;}
    compleanno() {
        chis.anni++;
    }
}
    
class Uomo extends Persona {
    constructor(nome, cognome, citta, barba) {
        
    this.barba = barba;}
}
        
class Donna extends Persona {
    constructor(nome, cognome, citta, anni, smalto){
        super(nome, cognome, citta)
        this.x = x;  
        this. smalto = smalto;
    }
    
    altro(){
        console.log('Sono una donna');


    }
}

let u = new Uomo('Mario', 'Rossi', 'Roma', 44, true);
console.log('Persone: ' + Persona.count)
let m = new Uomo('Giuseppe', 'Verdi', 'Napoli', 38, false);
console.log('Persone: ' + Persona.count)
let d = new Donna('Francesca', 'Neri', 'Milano', 22, true);
console.log('Persone: ' + Persona.count)

u. compleanno();
d. compleanno();


console. log(u.verso());
console.log(d.verso());

console.log(u.saluta());
console. log(m.saluta());
console.log(d.saluta());