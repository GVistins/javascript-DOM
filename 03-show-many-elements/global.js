window.addEventListener('load', function(){
    const show_third = querySelector("#button");
    const hide_third = document.getElementsByClassName("show_me");
    show_third.addEventListener("click", function(){
        hide_third.style("display: shown")
    })
})