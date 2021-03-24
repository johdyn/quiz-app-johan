import { pushSection } from "./db.js";

let form = document.querySelector('.super-form');
 let resetButton = document.querySelector('.reset');
 const formData = [];

// Adding event listener for when form is submitted

form.addEventListener('submit', event => {
  event.preventDefault()

  const inputForQuestion = form['question']
  const inputForAnswer = form['answer']
  const inputForTags = form['tags']

  const question = inputForQuestion.value;
  const answer = inputForAnswer.value;
  // const tags = inputForTags.value;
const tagsArray = itemsStringToArray(inputForTags.value);
  pushSection({
    question: question,
    answer: answer,
    tags: tagsArray,
  });
  console.log(question, answer, tags);
  form.reset();
  alert("section created");

  
});

function itemsStringToArray(itemsString) {
  const tagsArray = itemsString.split(",");
  return tagsArray;
}
// const questionObject = {
//   question: inputForQuestion.value,
//   answer: inputForAnswer.value,
//   tags: inputForTags.value,
// }

// console.log(questionObject)
// formData.push(questionObject)
// console.log(formData)
// resetButton.addEventListener('click', () => {
//   form.reset();
// });