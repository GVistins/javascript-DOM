window.addEventListener('load', function(){
    const hide_second = document.getElementById("#button");
    const class_second = document.querySelectorAll(".hide_me");
    hide_second.addEventListener("click").forEach(function(){
        class_second.style("display = none");
    })
})