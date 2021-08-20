// Get User's input and save to general dumping folder in local storage
// Render the saved inputs
// localStorage.clear()
let allSavedInputs = [];
let inputsFromLocalStorage = JSON.parse(localStorage.getItem("allSavedInputs"));
const userInputField = document.getElementById("user-input");
const inputForm = document.getElementById("form");
const savedInputContainer = document.getElementById("inputs-container");
const descriptionForm = document.getElementById("descriptionForm");
const descriptionInputField = document.getElementById("input-description");
const descriptionsContainer = document.getElementById("descriptionsContainer");
let userInput = "";

if (inputsFromLocalStorage) {
  allSavedInputs = inputsFromLocalStorage;
  renderInput(allSavedInputs);
}
else{
    allSavedInputs = [];
}

const keyBoardKey = "key" || "keyCode";

function getInput() {
  userInputField.addEventListener("keyup", (event) => {
    if (event.keyBoardKey === 'Enter' || event.keyBoardKey === 13) {
        const input = userInputField.value;
        key.preventDefault();
      if (input) {
        console.log(input);
        inputForm.reset();
      }
      return input;
    }
  });
}
getInput();
userInput = getInput();

// console.log(userInput);

function getTheDescription() {
  descriptionsContainer.style.display = "block";
  descriptionInputField.addEventListener("keypress", (event) => {
    if (event.keyBoardKey === 'Enter' || event.keyBoardKey === 13) {
         key.preventDefault();
      const description = descriptionInputField.value;
      if (description) {
        // event.preventDefault();
        console.log(description);
        descriptionForm.reset();
      }
      return description;
    }
  });
  descriptionsContainer.style.display = "none";
}
const inputDescription = getTheDescription();
createInputObject(userInput, inputDescription);
// function getTheDescription(event) {
//         let description = "";
//         if (descriptionInputField.value) {
//             event.preventDefault();
//             description = descriptionInputField.value;
//             console.log(description);
//             descriptionForm.reset();
//             return description;
//         }
//         descriptionsContainer.style.display = "none";
// }

function createInputObject(input, description) {
  console.log(input);
  // Create an input object with two keys, input and description and save to local storage
  const inputObject = { input: `${input}`, description: `${description}` };
  if (localStorage.getItem("allSavedInputs")) {
    allSavedInputs = JSON.parse(localStorage.getItem("allSavedInputs"));
    allSavedInputs.push(inputObject);
    localStorage.setItem("allSavedInputs", JSON.stringify(allSavedInputs));
  } else {
    allSavedInputs.push(inputObject);
    localStorage.setItem("allSavedInputs", JSON.stringify(allSavedInputs));
  }
  renderInput(allSavedInputs);
}

function renderInput(savedInputs) {
  let inputs = "";
  for (let i = 0; i < savedInputs.length; i++) {
    inputs += `<tr><td>${savedInputs[i].input}</td><td>${savedInputs[i].description}</td></tr>`;
    savedInputContainer.innerHTML = inputs;
  }
  // for loop that will render all the input objects in local storage including newly added ones take care to render each key of the object in it's respective table cell
  // That is, the userInput will be rendered in first td and inpputDescription will be rendered in second td
}

// function saveInput(event) {
//   let userInput = userInputField.value;
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     inputForm.reset();
//     descriptionsContainer.style.display = "block";
//     descriptionInputField.focus();
//     descriptionInputField.addEventListener("keypress", getDescription);
//     function getDescription(event) {
//       if (event.keyCode === 13) {
//         event.preventDefault();
//         const inputDescription = descriptionInputField.value;
//         console.log(inputDescription);
//         if (inputDescription) {
//           descriptionsContainer.style.display = "none";
//           savedInputContainer.innerHTML += `<tr><td>${userInput}</td><td>${inputDescription}</td></tr>`;
//           descriptionForm.reset();
//           userInputField.focus();
//         }
//       }
//       if (localStorage.getItem("allSavedInputs")) {
//         allSavedInputs = JSON.parse(localStorage.getItem("allSavedInputs"));
//         allSavedInputs.push(userInput);
//         localStorage.setItem("allSavedInputs", JSON.stringify(allSavedInputs));
//       } else {
//         allSavedInputs.push(userInput);
//         localStorage.setItem("allSavedInputs", JSON.stringify(allSavedInputs));
//       }
//     }
//   }
// }
// function getDescription(event) {
//     if (event.KeyCode === 13) {
//         console.log(event);
//         event.preventDefault();
//         const description = descriptionInputField.value;
//         console.log(description);
//         if (description) {
//             descriptionForm.reset();
//             console.log(description);
//             return description;

//         }
//     }
// }
// var inputDescription = getDescription();
