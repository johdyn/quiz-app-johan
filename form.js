

let form = document.querySelector('.super-form');
 let resetButton = document.querySelector('.reset');
 const formData = [];

// Adding event listener for when form is submitted

form.addEventListener('submit', event => {
  event.preventDefault()

  const inputForQuestion = form['question']
  const inputForAnswer = form['answer']
  const inputForTags = form['tags']

  const questionObject = {
    question: inputForQuestion.value,
    answer: inputForAnswer.value,
    tags: inputForTags.value,
  }

  console.log(questionObject)
  formData.push(questionObject)
  console.log(formData)
});

resetButton.addEventListener('click', () => {
  form.reset();
});