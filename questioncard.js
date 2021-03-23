


export function createCard(card) {
  
  // Create card
  const cardSection = document.createElement("article");
  cardSection.classList.add("question-card");
  
  // Create heading
  const h2Title = document.createElement("h2");
  h2Title.textContent = "Question";

  // Create question and answer paragraphs
  let questionParagraph = document.createElement("p"); 
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("div_button");
  let answerParagraph = document.createElement("p");
  answerParagraph.classList.add("toggle-answer");
  
  // Create tag list
  const ulElement = document.createElement("ul");
  ulElement.classList.add("question-card__tags");
  
  // Create button
  const showButton = document.createElement("button");
  showButton.classList.add("button-properties");
  showButton.textContent = "Show answer";

  // Getting the data into the card
  questionParagraph.textContent = card.question;
  answerParagraph.textContent = card.answer;
  const bookmarkOn = card.isBookmarked;

  // Adding tags to the liElements
  for (let i = 0; i < card.tags.length; i++) {
    const liElement = document.createElement("li");
    liElement.classList.add("question-card__tags__tag-style");
    liElement.textContent = card.tags[i];
    ulElement.append(liElement);
  }

  let bookmarkIcon = document.createElement("i");
  bookmarkIcon.classList.add("fa-bookmark", "card-icon");

if (bookmarkOn) {
  bookmarkIcon.classList.add("fas");
} else {
  bookmarkIcon.classList.add("far");
}

bookmarkIcon.addEventListener('click', () => {
if (bookmarkIcon.classList.contains("fas")) {
  bookmarkIcon.classList.remove("fas");
  bookmarkIcon.classList.add("far");
} else { 
  bookmarkIcon.classList.add("fas");
}
});

cardSection.append(bookmarkIcon);
cardSection.append(h2Title);
cardSection.append(questionParagraph);
buttonDiv.append(showButton);
buttonDiv.append(answerParagraph);
cardSection.append(buttonDiv);
cardSection.append(ulElement);

showButton.addEventListener('click', () => {
  answerParagraph.classList.toggle("toggle-answer");
  if (showButton.textContent === "Show answer") {
  showButton.textContent = "Hide answer";
} else { showButton.textContent = "Show answer"}
});

return cardSection;

}

