var offsetVar = 0;
var searchURL = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC"
var dataValue = null

$(document).on("ready", function(){
  topTwoFive()
  $('form').on('submit', searchGif);
  $('.more-gifs').on('click',printMoreGifs)
});

function printMoreGifs(){
  offsetVar+=25
  console.log(offsetVar)
  topTwoFive()
}

function searchGif(event){
  event.preventDefault();
  searchURL = "http://api.giphy.com/v1/gifs/search"
  dataValue = $("form").serialize();
  offsetVar = 0;
  $('.gif-gallery').text("");
  topTwoFive();
};

function topTwoFive(){
  $.ajax({
    method: "GET",
    url: searchURL,
    datatpye: "json",
    success: onSuccess,
    error: onError,
    complete: completeCallback,
    offset: offsetVar,
    data: dataValue
})
}

function onSuccess(response) {
    response.data.forEach(imageGrab);
};

function imageGrab (imageObject){
  var imageApend = imageObject.images.fixed_height.url;
  $('.gif-gallery').append("<img src ="+imageApend+">");
}

function onError(xhr, status, errorThrown) {
    alert("Sorry, there was a problem!");
    console.log("Error: " + errorThrown);
    console.log("Status: " + status);
    console.dir(xhr);
};

function completeCallback(responsData) {
    console.log("Completed")
}
