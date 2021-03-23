// Your JavaScript goes here.

const button_five = querySelector("#toggle_button");
var movies = document.getElementsByClassName("movies"[1]);
button_five.addEventListener("click", function(movies){
    if(movies.style == "none"){
        movies.style("display: shown")
    }else{
        movies.style("display:none")
    }
})