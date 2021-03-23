

  // Here is some pseudo-code to help you get started:

  // 1. Get the DOM element which will be clicked.

  // 2. Add a listener for the 'click' event onto that element.

  // 3. The block for the listener should get the DOM
  //    element containing the text to reveal.

  // 4. Modify that DOM element's style to change it's 'display'
  //    from a hidden value to a shown value.

  // 5. Also modify the DOM to hide the "More info..." link.
  


const element_first = query.selector("#more_text_link");
element_first.addEventListener("click", function(){
  const text = query.selector("#more_text_content");
  text.style("display: shown");
  element.style("display: none");
})

const hide_second = query.selector("#button");
hide_second.addEventListener("click", function(){
var class_second = document.getElementsByClassName("hide_me");
  for(f = 0, f < class_second.length, f + 1){
    style.class_second[f]("display:none");
  }
})