# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.

Your reply here...

I just chose to call upon all of the elements with the class name of "hide_me"

---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

Your reply here...

I used the command document.getElementsByClassName() to grab all of the elements with the class name "hide_me" and appended them to a list, the I used a for loop to cycle through each element and hide them individually.