import { data } from "./db.js";
import { createCard } from "./questioncard.js";

const content = document.querySelector(".layout-main");

for (let i = 0; i < data.length; i++) {
  const card = createCard(data[i]);
  content.append(card);
}
 

