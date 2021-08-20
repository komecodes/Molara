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
    inputForm.reset();
    descriptionsContainer.style.display = "block";
    descriptionInputField.focus();
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
  // takes the array of inputobjects and render each object's keys (input and description) in the table cells
  let input = "";
  for (let i = 0; i < allSavedInputs.length; i++) {

      // When rendering from local storage, also check if the input is a link and remember to wrap around anchor tag

    let urlInput = allSavedInputs[i].input; //saving the input key for the array item (which is an object) in a new variable
    let urlwwwRegEx = /^www./i;
    let urlhttpRegEx = /^http/i;
    console.log(urlInput);
    if (
      urlwwwRegEx.test(urlInput) ||urlhttpRegEx.test(urlInput)
    ) {
      if (urlwwwRegEx.test(urlInput)) {
        let newUrl = urlInput.replace(urlwwwRegEx, "https://"); //saving the input key for the array item (which is an object) in a new variable after replacing the www. with https://
        
        input += `<tr><td colspan="1" class = "bolded-font"><a href = "${newUrl}" target="_blank"> ${newUrl}</a></td><td>${allSavedInputs[i].description}</td></tr>`;
      }
      else{
        input += `<tr><td colspan="1" class = "bolded-font"><a href = "${urlInput}" target="_blank"> ${urlInput}</a></td><td>${allSavedInputs[i].description}</td></tr>`;
      }
    } else {
      input += `<tr><td colspan="1" class = "bolded-font">${allSavedInputs[i].input}</td><td>${allSavedInputs[i].description}</td></tr>`;
    }
    savedInputContainer.innerHTML = input;
  }
}
