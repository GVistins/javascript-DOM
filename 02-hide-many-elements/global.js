const hide_second = query.selector("#button");
const class_second = document.getElementsByClassName("hide_me");
hide_second.addEventListener("click", function(){
    class_second.style("display = none");
})