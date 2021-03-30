// Your JavaScript goes here.
window.addEventListener('load', function(){
    const button_Five = querySelector("#toggle_button");
    var movies = document.getElementsByClassName(".second_five");
    button_Five.addEventListener("click", function(movies){
        if(movies.style == "none"){
            movies.style("display:shown")
        }else{
            movies.style("display:none")
        }
    })
})