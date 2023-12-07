// Chiamate Ajax



let xhr = new XMLHttpRequest();//ogg in grado efetuare richieste al server ready state=0
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);//define method of call ready state=1
xhr.send();//eseguo la chiamata ready state=2
// readyState = 3 LOADING Downloading; responseText holds partial data.
// readyState = 4 done The operation is complete.
xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
    console.log('The operation is complete');
    let json = xhr. responseText;
    let obj = JSON.parse(json);
    console.log(obj);
    createList(obj);}}

document. addEventListener('DOMContentLoaded',()=>{
    console.log(div);
})

function createList(users) {
    let div = document.querySelector('.users');
    users. forEach(u => {
    let p = document. createElement('p');
    p.innerText = u.name + " (" + u.email + ")";
    div. appendChild(p);
    })
}


xhr.onreadystatechange = function (){
    if (xhr.readyState === 4 && xhr.status === 200){
        let users = JSON.parse(xhr.responseText);
        let html = '';
        for (let i = 0; i < users.length; i++){
            html += users[i].answers

        }}}

