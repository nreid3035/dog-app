/************FETCH RANDOM DOG PICS*************/
function fetchDogPics(chosenNum) {
    fetch(`https://dog.ceo/api/breeds/image/random/${chosenNum}`) 
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => console.log(error))
    
}

function displayResults(responseJson) {
    $('#results').empty();
    for (let i = 0; i < responseJson.message.length; i++) {
        $('#results').append(`
        <div class="img-container">
          <img src="${responseJson.message[i]}" alt="dog"/>
        </div>`)
    }
}

let chosenNum;
function getNumber() {
    $('#num-form').on('submit', function(event) {
        event.preventDefault();
        chosenNum = $('#num').val();
        fetchDogPics(chosenNum);
    })
}

/*************FETCH DOG PIC BY BREED****************/


function fetchBreed(chosenBreed) {
    fetch(`https://dog.ceo/api/breed/${chosenBreed}/images`)
      .then(response => response.json())
      .then(responseJson => displayBreed(responseJson))
      .catch(error => console.log(error))
}



function displayBreed(responseJson) {
    let randomIdx = Math.floor(Math.random() * responseJson.message.length)
    console.log(randomIdx);
    $('#results').empty();
    $('#results').append(`
    <div class="img-container">
      <img src="${responseJson.message[randomIdx]}" alt="dog-breed-pic"
    </div>`)
    $('#results').removeClass('hidden')
}


let chosenBreed;
function getBreed() {
    $('#breed-form').on('submit', function(event) {
        event.preventDefault();
        chosenBreed = $('#breed').val();
        fetchBreed(chosenBreed);
    })
}




$(getBreed);
$(getNumber);