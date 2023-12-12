//RpdOPzUYT2VsW2AMO9iAMlssczMWjOHySSKrUBLECMyprQ246Yky6pWQ

document.addEventListener("DOMContentLoaded", function () {

function funcLoadImages(searchKeyword) {
    console.log("Search query:", searchKeyword);
    const apiKey = 'RpdOPzUYT2VsW2AMO9iAMlssczMWjOHySSKrUBLECMyprQ246Yky6pWQ';
    fetch(`https://api.pexels.com/v1/search?query=${searchKeyword}`, {
      method: "GET",
      headers: {
        Authorization: apiKey
      }
    })
      .then((response) => response.json())
      .then((data) => {
        const photos = data.photos;
        const row = document.getElementById("row");
        row.innerHTML = "";

        photos.forEach((photo) => {
          const col = document.createElement("div");
          col.className = "col-md-4";
          row.appendChild(col);

          const card = document.createElement("div");
          card.className = "card mb-4 shadow-sm";
          col.appendChild(card);

          const imgContainer = document.createElement("div");
          imgContainer.style.position = "relative";

          const img = document.createElement("img");
          img.className = "card-img-top";
          img.alt = photo.alt;
          img.style.objectFit = "cover";
          img.style.width = "100%";
          img.style.height = "225px";
          img.src = photo.src.original;
          img.onload = () => hideSpinner(spinner);

          const spinner = document.createElement("div");
          spinner.className = "spinner-border";
          spinner.style.width = "3rem";
          spinner.style.height = "3rem";
          spinner.style.position = "absolute";
          spinner.style.top = "calc(50% - 1.25rem)";
          spinner.style.left = "calc(50% - 1.25rem)";

          imgContainer.appendChild(img);
          imgContainer.appendChild(spinner);

          const cardBody = document.createElement("div");
          cardBody.className = "card-body";

          if (photo.alt) {
            const title = document.createElement("h6");
            title.className = "card-title";
            title.textContent = photo.alt;
            cardBody.appendChild(title);
          }
        

          if (photo.photographer) {
            const photographer = document.createElement("p");
            photographer.className = "card-title";
            photographer.textContent = `Photographer: ${photo.photographer}`;
            cardBody.appendChild(photographer);
          }


          const hideButton = document.createElement("button");
          hideButton.className = "btn btn-danger";
          hideButton.textContent = "Hide";
          hideButton.addEventListener("click", () => {
            card.style.display = "none";
          });
          cardBody.appendChild(hideButton);
    

          const viewButton = document.createElement("button");
          viewButton.className = "btn btn-secondary";
          viewButton.textContent = "View";
          viewButton.addEventListener("click", () => {
            alert(`View details for ${photo.alt}`);
          });
          cardBody.appendChild(viewButton);


          card.appendChild(imgContainer);
          card.appendChild(cardBody);
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const loadImagesButton = document.querySelector("#load-images");
  loadImagesButton.addEventListener("click", () => {
    funcLoadImages("dog");
  });

  const loadSecondaryImagesButton = document.querySelector("#load-secondary-images");
  loadSecondaryImagesButton.addEventListener("click", () => {
    funcLoadImages("cat");
  });

  function hideSpinner(spinner) {
    spinner.style.display = "none";
  }

  const searchButton = document.querySelector("#searchButton");
  searchButton.addEventListener("click", () => {
    const searchInput = document.querySelector("#searchInput");
    const searchQuery = searchInput.value.trim();
    funcLoadImages(searchQuery);
  });


})