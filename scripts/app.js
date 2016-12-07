$(document).on("ready", function(){

  $.ajax({
      method: "GET",
      url: "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC",
      datatpye: "json",
      success: onSuccess,
      error: onError,
      complete: completeCallback
  });



  $('form').on('submit', function(event){
  event.preventDefault()
    $.ajax({
        method: "GET",
        url: "http://api.giphy.com/v1/gifs/search",
        data: $("form").serialize(),
        datatpye: "json",
        success: onSuccess,
        error: onError
    });
  });
});

function onSuccess(response) {
    console.log(response);
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
    // console.log(responsData);
};
