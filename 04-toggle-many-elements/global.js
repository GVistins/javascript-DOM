// Your JavaScript goes here.
window.addEventListener('load', function(){
    const toggle = document.getElementsByClassName("#toggle_me");
    const btn = queue.Selector("#button")
    btn.addEventListener("click").forEach(function(){
        if(toggle.style == "none"){
            toggle.style("display: shown")
        }else{
            toggle.style("display: none")
            }
    })
})