// https://thecatapi.com/
// https://api.thecatapi.com/v1/images/search
// https://api.thecatapi.com/v1/images/search?api_key=YOUR_API_KEY

function getCatImage(){
    // personal API key
    const api_key = 'live_fqlGZZzZF3f2KT50hFKTHhbqZRPvJiR87Hs6MNSmKkSBKVzVY16ZlfRoR8RwnLg7';
    // limit to 40 images
    const url = `https://api.thecatapi.com/v1/images/search?limit=40`;

    fetch(url,{headers: {
        'x-api-key': api_key
    }})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let imagesData = data;
        // get a random cat image (limited to 40 in url)
        let random = Math.floor(Math.random() * 40);
        randomCat = imagesData.at(random);
        let catImage = document.getElementById('catImage');
        //use the url from the image object
        catImage.src = `${randomCat.url}`;
    })
    .catch(function(error) {
        console.log(error);
    });
}

// get cat image when button is clicked
const button = document.querySelector('button');
button.addEventListener('click', getCatImage);