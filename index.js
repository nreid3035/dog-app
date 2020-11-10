function fetchDogPics(chosenNum) {
    fetch(`https://dog.ceo/api/breeds/image/random/${chosenNum}`) 
        .then(response => response.json())
        .then(responseJson => console.log(responseJson) )
    
}


let chosenNum;
function getNumber() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        chosenNum = $('#num').val();
        fetchDogPics(chosenNum);
    })
}

$(getNumber);