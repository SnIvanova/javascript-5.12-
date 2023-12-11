//RpdOPzUYT2VsW2AMO9iAMlssczMWjOHySSKrUBLECMyprQ246Yky6pWQ


// Example https://www.pexels.com/

fetch('https://api.pexels.com/v1/search?query=cat', {
    method: 'GET' , 
    headers: {
        Authorization: "RpdOPzUYT2VsW2AMO9iAMlssczMWjOHySSKrUBLECMyprQ246Yky6pWQ"
            }
})
.then(response => response. json())
.then(json =>let ul=
    json.photos.array.forEach(photo => {
    
});)
.catch(error => console. log(error))



