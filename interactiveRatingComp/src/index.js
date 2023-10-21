import _ from 'lodash';
import './style.css';
const form = document.querySelector("form");

const thanksScreen = e => {
  e.preventDefault();
  const body = document.body;
  const createThanksScreen = () => {
    const mainDiv = document.createElement("div");
    mainDiv.classList = "main";
    const thanksImg = document.createElement("img");
    thanksImg.classList = "thanks-img";
    thanksImg.src = "../src/images/illustration-thank-you.svg";
    thanksImg.alt = "Thank you image by 'https://www.frontendmentor.io/home'at 'https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI'";
    mainDiv.appendChild(thanksImg);
    const ratingP = document.createElement("p");
    ratingP.classList = "rating-p";
    const rating = e.target.elements["rating-number"].value;
    ratingP.textContent = `You Selected ${rating} out of 5`;
    mainDiv.appendChild(ratingP);
    const thanksH1 = document.createElement("h1");
    thanksH1.classList = "thanks-h1";
    thanksH1.textContent = "Thank you!";
    mainDiv.appendChild(thanksH1);
    const thanksP = document.createElement("p");
    thanksP.classList = "thanks-p";
    thanksP.innerHTML = "We appreciate you taking the time to give a rating. <br />If you ever need more support, don't hesitate to <br />get in touch!";
    mainDiv.appendChild(thanksP);
    body.removeChild(body.children[0]);
    body.appendChild(mainDiv);
  } 

  
  const ratingChecked = e => {
    if (e.target.elements["rating-number"].value === "") {
      alert("Please click a rating.");
      return;
  } else {
    createThanksScreen();
  }
  }
  ratingChecked(e);
}

form.addEventListener("submit", thanksScreen);