let obj = {
    nome: 'Mario',
    cognome: 'Rossi',
    citta: 'Roma',
    eta: 25,
    linguaggi: ['Javascript', 'html', 'css', 'sass'],
    indirizzo: {
    via: 'test 53',
    citta: 'Roma',
    regione: 'Lazio'}
    };
//formatto json
let json = {
    "nome": 'Mario',
    "cognome": 'Rossi',
    "citta": 'Roma',
    "eta": 25,
    "linguaggi": ['Javascript', 'html', 'css', 'sass'],
    "indirizzo": {
    "via": 'test 53',
    "citta": 'Roma',
    "regione": 'Lazio'}
    };




    //transform object to json
    let jsonobj = JSON.stringify(obj);

    //transform json in obj
    let objJson = JSON.parse(jsonobj)

    // Web Storage (Local Storage - Session Storage)
    //everything that getting seved with keys and values
    console. log(window);
    window.localstorage

    //here you saving keys in local storage
    localstorage.setItem("test", "Mio Local Storage");

    //for reading keys use getitem
    let testLocal = localstorage.getItem("test");
    console. log(testLocal)

    //for reading key only
    let key = localstorage.key(1)| r
    console. log(key)

    //for removing
    localStorage. removeItem("test");

    // for cleaning everything
    localStorage.clear();

    //
    sessionStorage