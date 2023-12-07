document.addEventListener('DOMContentLoaded', () => {
    var subMenu = document.getElementById('subMenu');
    var fullPageMenu = document.getElementById('fullPageMenu');

    subMenu.addEventListener('click', function () {
        if (subMenu.className === 'menuClicked') {
            subMenu.className = "";
            setTimeout(function () {
                fullPageMenu.className = "visually-hidden";
            }, 200);
        } else {
            subMenu.className = 'menuClicked';
            fullPageMenu.className = "slideRight";
        }
    });

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://striveschool-api.herokuapp.com/books', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let books = JSON.parse(xhr.responseText);
            console.log(books);
            const cardContainer = document.querySelector('#card-container');
            books.forEach(item => {
                const cardHtml = `
                <div class="col-md-4 mb-4">
                    <img src="${item.img}" alt="${item.title}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="card-text">${item.price}</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>`;
                cardContainer.innerHTML += cardHtml;
            });
        } 
    };
    xhr.send();
});



