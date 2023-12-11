// Promise

fetch("https://jsonplaceholder.typicode.com/users"); // GET => Promise<Response>
console.log(promise); // Promise {<pending>}
// codice

// codice

promise
.then(json => console.log(json))
.catch(err => console.log(err));


// Async - Await

async function func(params) {
    await fetch("https://jsonplaceholder.typicode.com/users")
    . then(response => response. json()) I;}

    function func() {
        let arr = [];
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response. json())
            .then(json => arr = json)
        console. log(arr);
    }
