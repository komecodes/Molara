// Get User's input and save to general dumping folder in local storage
// Render the saved inputs

const inputForm = document.getElementById("form");
const userInputField = document.getElementById("user-input");
const descriptionInputField = document.getElementById("input-description");
const savedInputContainer = document.getElementById("inputs-container");
const descriptionForm = document.getElementById("descriptionForm");

const descriptionsContainer = document.getElementById("descriptionsContainer");
const saveInputBtn = document.getElementById("save-input-btn");

let allSavedInputs = []; //general dumping folder
let inputsFromLocalStorage = JSON.parse(localStorage.getItem("allSavedInputs"));

if (inputsFromLocalStorage) {
  console.log(inputsFromLocalStorage);
  allSavedInputs = inputsFromLocalStorage;
  renderInput();
}

inputForm.addEventListener("submit", getInputAndDescription);
saveInputBtn.addEventListener("click", getInputAndDescription);

let userInput;
let theInputDescription;

function getInputAndDescription(event) {
  event.preventDefault();
  if (userInputField.value) {
    userInput = userInputField.value;
    // check if input is a link and wrap anchor tag around it later
    // When rendering from local storage, also check if the input is a link and remember to wrap around anchor tag
    inputForm.reset();
    descriptionsContainer.style.display = "block";
    descriptionInputField.focus();
    console.log(userInput);
    descriptionForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (descriptionInputField.value) {
        theInputDescription = descriptionInputField.value;
        descriptionForm.reset();
        descriptionsContainer.style.display = "none";
        userInputField.focus();
        const inputObject = {
          input: `${userInput}`,
          description: `${theInputDescription}`,
        };
        if (localStorage.getItem("allSavedInputs")) {
          allSavedInputs = JSON.parse(localStorage.getItem("allSavedInputs"));
          allSavedInputs.push(inputObject);
          localStorage.setItem(
            "allSavedInputs",
            JSON.stringify(allSavedInputs)
          );
        } else {
          allSavedInputs.push(inputObject);
          localStorage.setItem(
            "allSavedInputs",
            JSON.stringify(allSavedInputs)
          );
        }
        renderInput();
      }
    });
  }
}

function renderInput() {
  let input = "";
  for (let i = 0; i < allSavedInputs.length; i++) {
    let urlInput = allSavedInputs[i].input;
    console.log(urlInput);
    if (
      urlInput.includes("http") ||
      urlInput.includes("www")
    ) {
      if (urlInput.includes("www.")) {
                
      }
      input += `<tr><td colspan="1" class = "bolded-font"><a href = "${allSavedInputs[i].input}" target="_blank"> ${allSavedInputs[i].input}</a></td><td>${allSavedInputs[i].description}</td></tr>`;
    } else {
      input += `<tr><td colspan="1" class = "bolded-font">${allSavedInputs[i].input}</td><td>${allSavedInputs[i].description}</td></tr>`;
    }
    savedInputContainer.innerHTML = input;
  }
}
