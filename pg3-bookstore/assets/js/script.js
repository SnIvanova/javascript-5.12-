document.addEventListener("DOMContentLoaded", function () {
    const bookshelfRow = document.querySelector("#bookshelf-row");
    const cartTotal = document.querySelector("#cart-total");
  
   
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://striveschool-api.herokuapp.com/books");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          const response = JSON.parse(xhr.responseText);
          displayBooks(response);
        } else {
          handleAndLogError(xhr.status);
        }
      }
    };
    xhr.send();
  
    function displayBooks(arrayOfBooks) {
      arrayOfBooks.forEach(bookInTheArray => {
        const bookBox = createBookBox(bookInTheArray);
        bookshelfRow.appendChild(bookBox);
      });
    }
  
    function createBookBox(bookData) {
      const bookBox = document.createElement("div");
      bookBox.className = "book-box col book col-6 col-sm-4 col-md-3 col-lg-2 g-3";
  
      const book = document.createElement("div");
      book.className = "card h-100";
  
      const bookInfo = document.createElement("div");
      bookInfo.className = "card-body d-flex flex-column";
  
      const cardButtons = document.createElement("div");
      cardButtons.className = "card-buttons d-flex mt-1 row-col-2";
  
      const buttonHide = createHideButton();
      const buttonBuy = createButton("Acquista", "btn-success", () => addToCartAndUpdateTotal(bookData));
  
      if (bookData.img) {
        const img = document.createElement("img");
        img.src = bookData.img;
        img.className = "book-img h-100 object-fit-cover card-img-top";
        book.appendChild(img);
      }
  
      createBookInfoElement("h5", "book-title card-title my-0", bookData.title, bookInfo);
      createBookInfoElement("p", "book-price card-text my-0", bookData.price + "€", bookInfo);
  
      ['category', 'asin'].forEach(key => {
        if (bookData[key]) {
          createBookInfoElement("p", `book-${key} d-none`, `${key}: ${bookData[key]}`, bookInfo);
        }
      });
  
      bookshelfRow.appendChild(bookBox);
      bookBox.appendChild(book);
      book.appendChild(bookInfo);
      bookInfo.appendChild(cardButtons);
      cardButtons.appendChild(buttonHide);
      cardButtons.appendChild(buttonBuy);
  
      return bookBox;
    }
  
    function createButton(text, className, clickHandler) {
      const button = document.createElement("button");
      button.className = `btn ${className} col`;
      button.innerText = text;
      button.addEventListener("click", clickHandler);
      return button;
    }
  
    function createBookInfoElement(tag, className, text, parent) {
      const element = document.createElement(tag);
      element.className = className;
      element.textContent = text;
      parent.appendChild(element);
    }
  
    function createHideButton() {
      const buttonHide = createButton("Nascondi", "btn-outline-secondary", function () {
        const thisCard = this.closest(".book-box");
        thisCard.classList.add("d-none");
      });
  
      return buttonHide;
    }
  
    function addToCartAndUpdateTotal(book) {

        
      cart.push(book);
  
      localStorage.setItem('cart', JSON.stringify(cart));
  
      const total = cart.reduce((acc, book) => acc + book.price, 0);
      cartTotal.textContent = `Totale carrello: ${total}€`;
    }
  

    function removeFromCartAndUpdateTotal(book) {
        let temp = cart.filter(book => book.id != book,id);
        localStorage.setItem("cart", JSON.stringify(temp));
        
    }

    function handleAndLogError(status) {
      const errorMessages = {
        400: "Richiesta non valida",
        401: "Non autorizzato",
        403: "Vietato",
        404: "Non trovato",
      };
      const errorMessage = errorMessages[status] || "Errore durante il recupero dei dati";
      console.error("Error:", errorMessage);
    }
  });