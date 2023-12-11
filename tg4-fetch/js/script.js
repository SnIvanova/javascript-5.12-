fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'})
.then(response => response. json ())
.then(obj => {
    console.log(obj)
    createList(obj)})
.catch(error => console. log("error" + error))

function createList(users){
    let div = document. querySelector('.users');
    users. forEach(u => {
        let p = document. createElement('p');
        p.innerText = u.name + "(" + u.email + ")";
        div.appendChild(p);
    })
    div.appendChild(document.createElement('hr'));
}


    // Esempi di Chiamate Ajax tramite Fetch
fetch('https://jsonplaceholder.typicode.com/users'); // Chiamata di tipo GET
fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'}) // Chiamata di tipo GET I  

// Esempi di Chiamate Ajax tramite POST

let obj = {
    id: 2,
    name: "Mario Rossi",
    username: "Mariolino",
    email: "m.rossi@example.com",
    phone: "+39 123.456.789",
    website: "http://mariorossi.com",};

// Chiamata di tipo POST 

fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',// Method della chiamata- salvaggio di risorsa
        body: JSON.stringify (obj), // nel body della richiesta invio il dato al server
        headers: {
        "Content-Type": "application/json"} // il tipo del contenuto che sto inviando
        
        })   

    fetch("https://jsonplaceholder.typicode.com/users", {
        // Chiamata di tipo PUT
        method: "PUT", // Method della chiamata - Modifica di una risorsa
        body: JSON.stringify(obj), // nel body della richiesta invio il dato al server
        headers: {
        "Content-Type": "application/json", // il tipo del contenuto che sto inviando}
        }
    });

    //uguale a 

fetch("https://jsonplaceholder.typicode.com/users/2", {
// Chiamata di tipo PUT
    method: "PUT", // Method della chiamata - Modifica di una risorsa
    body: JSON.stringify({
    id: 2,
    name:"Mario Rossi",
    username: "Mariolino",
    email: "m.rossi@example.com",
    phone: "+39.123.456.789",
    website: "http://mariorossi.com",
    }), // nel body della richiesta invio il dato al server
    headers: {
    "Content-Type": "application/json", // il tipo del contenuto che sto inviando
    }
});

// Chiamata di tipo DELETE 
    fetch("https://jsonplaceholder.typicode.com/users/3", { method: "DELETE" }); // Chiamata di tipo DELETE - Elimina una ri