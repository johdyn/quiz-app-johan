let answerButton = document.querySelectorAll(".button-properties");
let paragraphToggle = document.querySelectorAll(".toggle-answer");
let bookmark = document.querySelectorAll(".card-icon");
let form = document.querySelector(".super-form");
let resetButton = document.querySelector(".reset");
const formData = [];
for (let i = 0; i < answerButton.length; i++) {
answerButton[i].addEventListener("click", () => {
  const added = paragraphToggle[i].classList.toggle("toggle-answer");
  if (added) {
    paragraphToggle[i].style.display = "block";
  } else {  paragraphToggle[i].style.display = "none";
}
});
}

for (let i = 0; i < bookmark.length; i++) {
 bookmark[i].addEventListener("click", () => {
    
    if (bookmark[i].classList.contains("far")) {
      bookmark[i].classList.remove("far", "fa-bookmark");
      bookmark[i].classList.add("fas", "fa-bookmark");
    } 
    else  {
    bookmark[i].classList.remove("fas", "fa-bookmark");
  bookmark[i].classList.add("far", "fa-bookmark");
 }

 })
}

form.addEventListener("submit", (event) => {
event.preventDefault();

const inputForQuestion = form["question"];
const inputForAnswer = form["answer"];
const inputForTags = form["tags"];

const questionObject = {
  question: inputForQuestion.value,
  answer: inputForAnswer.value,
  tags: inputForTags.value,
}

console.log(questionObject);
formData.push(questionObject);
console.log(formData);
} )

resetButton.addEventListener("click", () => {
  form.reset();
})

function myFunction() {
  let element = document.querySelector(".layout-main");
  
  element.classList.toggle("dark-mode");
}

  //   let toggled = bookmark[i].classList.toggle("fas", "fa-bookmark");
  //   console.log(toggled);
  //   if (toggled === true) {
  //  bookmark[i].classList.remove("far", "fa-bookmark");
  //  bookmark[i].classList.add("fas", "fa-bookmark");
  // }
 
  

  // if (paragraphToggle.style.display === "none") {
  //   paragraphToggle.style.display = "block"; }
  //  else if (paragraphToggle.style.display === "block") {
  //   paragraphToggle.style.display = "none";
  //  }
