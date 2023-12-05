/*Crea una classe User per la creazione di oggetti di tipo "utente". Il suo costruttore dovrà inizializzare ogni
oggetto utente con i seguenti attributi:

- firstName
- lastName
- age
- location

Aggiungi alla classe User anche un metodo che restituisca il confronto con l'età di un'altra persona.
Ad esempio, date due istanze della classe utente "x" e "y" inizializzate con le proprietà sopra descritte, il
metodo dovrà restituire una frase simile a "x è più vecchio di y" a seconda del risultato del confronto.

Crea degli oggetti a partire dalla classe User e verifica che la comparazione tra le età funzioni
correttamente.*/


class User {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
      this.pets = []; 
    }
  
    confronto(persona) {
      if (this.age > persona.age) {
        return `${this.firstName} ${this.lastName} è più vecchio di ${persona.firstName} ${persona.lastName}`;
      } else if (this.age < persona.age) {
        return `${this.firstName} ${this.lastName} è più giovane di ${persona.firstName} ${persona.lastName}`;
      } else {
        return `${this.firstName} ${this.lastName} ha la stessa età di ${persona.firstName} ${persona.lastName}`;
      }
    }
    addPet(pet) {
        this.pets.push(pet);
      }
  }
  
  let users = [];
  let user1 = new User('John', 'Doe', 30, 'New York');
  let user2 = new User('Jane', 'Smith', 25, 'Los Angeles');
  let user3 = new User('Joan', 'Li', 28, 'Los 8');
  users.push(user1, user2, user3);

  console.log(user1.confronto(user2));
  console.log(user1.confronto(user3));
  console.log(user2.confronto(user3));




class Pet {
    static count = 0;

    constructor(petname, owner, specie, breed) {
      this.petname = petname;
      this.owner = owner;
      this.specie = specie;
      this.breed = breed;
      Pet.count++;
      owner.addPet(this);
    }
  
    ownerNameTest(pet) {
      if (pet.ownername === this.owner.lastName) {
        return `The ${pet.petname} is owned by ${pet.ownername}`;
      } else {
        return `${pet.petname} does not belong to ${pet.ownername}. It belongs to ${this.ownername}`;
      }
    }
  }
  
  let formBtn = document.querySelector('#petForm button');
  formBtn.addEventListener('click', () => {
    let f = document.querySelectorAll('#petForm input, #petForm select');
    //let f = document.forms['petForm'].elements;
  
    let petname = f[0].value;
    let ownername = f[1].value;
    let specie = f[2].value;//options[f[2].selectedIndex].text;
    let breed = f[3].value;//options[f[3].selectedIndex].text;
  
    let existingOwner = users.find(user => user.lastName === ownername);

    if (!existingOwner) {

        let newOwner = new User(ownername, 'Unknown', 0, 'Unknown');
        users.push(newOwner);

        let newPet = new Pet(petname, newOwner, specie, breed);
  
        console.log(`${newPet.petname}, ${newPet.owner.lastName}, ${newPet.specie}, ${newPet.breed}`);
        addlist(newPet);
    } else {

        let newPet = new Pet(petname, existingOwner, specie, breed);
        console.log(`${newPet.petname}, ${newPet.owner.lastName}, ${newPet.specie}, ${newPet.breed} - Existing owner`);
      }
  });
  
  function addlist(p) {
    let ul = document.querySelector('#listPet ul');
    let li = document.createElement('li');
    li.classList.add("list-group-item");
  
    li.innerHTML =
      `<strong>PetName:</strong> ${p.petname} 
      <strong>ownerName:</strong> ${p.ownername} 
      <strong>species:</strong> ${p.specie} 
      <strong>breed:</strong>${p.breed}`;
  
    ul.appendChild(li);
  }



  /*class Pet{
    constructor(petname, ownername, specie, breed){
        this.petname= petname;
        this.ownername = ownername;
        this.specie = specie;
        this.breed = breed;
        }

        ownerNameTest(pet){
            if (pet.ownername === this.ownername){
                return true `The ${pet.petname} is owned by ${pet.ownername}`;

            } else{
                return false `${pet.petname} does not belong to ${pet.ownername}. It belongs to ${this.ownername}`;
            }
        }
}

/*let p1 = new Pet ('bobby', 'mario', 'çane', 'labrador' );
let p2 = new Pet ('max', 'luigi', 'gatto', 'siamese' );
let p3 = new Pet ('luna', 'paul', 'cane', 'bulldog' );

console.log(p2);
console.log(p2.ownerNameTest(p1));
console.log(p2.ownerNameTest(p3));*/


/*let formBtn = document. querySelector('#petForm button')
formBtn.addEventListener('click', () => {
    //let f = document. forms;
    //let f = document. queryslelector('#petForm form')
    let f = document.querySelectorAll('#petForm input, #petForm select')
    console.log(f);

    let petname = f[0].value;
    let ownername = f[1].value;
    let specie = f[2].value;
    let breed = f[3].value;

    let newPet = new Pet(petname, ownername, specie, breed);
    
    console.log(`${newPet.petname}, ${newPet.ownername}, ${newPet.specie}, ${newPet.breed}`)
    addlist(p);
})


function addlist(p){
    let ul = document.querySelector('#listPet ul');
    let li = document. createElement('li');
    li.classList.add("list-group-item");

    li.innerHTML = 
        `<strong>PetName:</strong> ${p.petName} 
        <strong>ownerName:</strong> ${p.ownerName} 
        <strong>species:</strong> ${p.species} 
        <strong>breed:</strong>${p.breed}`

    li.innerHTML = "<span>"+p.petNäme+"</span>"
    +"<br><span> "+p.ownername+" </span>"
    +"<br><span> "+p.specie+" </span>"
    +"<br><span> "+p.breed+" </span>";

    ul.appendChild(li);

}

*/
