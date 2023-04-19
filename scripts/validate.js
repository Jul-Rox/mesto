function enableValidation({ formSelector, ...rest }) {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach(form => {
    setEventListeners(form, rest)
  })
}

function setEventListeners(formToValidate, { inputSelector, submitButtonSelector, ...rest }) {
  const formInputs = Array.from(formToValidate.querySelectorAll(inputSelector));
  const formButton = formToValidate.querySelector(submitButtonSelector);
  disabledButton(formButton, rest);
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      checkInputValidity(input);
      if (hasInvalidInput(formInputs)) {
        disabledButton(formButton, rest);
      } else {
        enableButton(formButton, rest);
      }
    });
  });
}

function checkInputValidity(form, input) {
  const currentInputErrorContainer = form.querySelector(`#${input.id}-error`);
  if (input.checkValidity()) {
    currentInputErrorContainer.textContent = '';
  } else {
    currentInputErrorContainer.textContent = input.validationMessage;
  }
  checkInputValidity(formToValidate, input);
}


function hasInvalidInput(formInputs) {
  return formInputs.some(item => !item.validity.valid);
}

const enableButton = (button, { inactiveButtonClass }) => {
  button.classList.remove(inactiveButtonClass);
  button.removeAttribute('disabled');
}

const disabledButton = (button, { inactiveButtonClass }) => {
  button.classList.add(inactiveButtonClass);
  button.setAttribute('disabled', true);
}

// const  showInputError = (input, popupMenuImputClass, errorClass, inputErrorClass ) => {
//   popupMenuImputClass.textContent = input.validationMessage;
//   popupMenuImputClass.classList.add(inputErrorClass);
//   input.classList.add(errorClass);
// }

// const hideInputError = (input, popupMenuImputClass, errorClass, inputErrorClass) => {
//   popupMenuImputClass.textContent = '';
//   popupMenuImputClass.classList.remove(inputErrorClass);
//   input.classList.remove(errorClass);
// }

// function checkInputValidity(formSelector, inputSelector, errorClass, inputErrorClass) {
//   if (!inputElement.validity.valid) {
//     showInputError(errorClass, inputErrorClass, ...rest);
//   } else {
//     hideInputError(errorClass, inputErrorClass, ...rest);
//   }
// }

// function setEventListeners(formToValidate, { inputSelector, popupMenuImputClass, ...rest }) {
//   const formInputs = Array.from(formToValidate.querySelectorAll(inputSelector));
//   const formInputError = document.querySelector(popupMenuImputClass);
//   visibleError(formInputError, rest);

//   formInputs.forEach(input => {
//     input.addEventListener('input', () => {
//       checkInputValidity(input);
//       if (hasInvalidInput(formInputs)) {
//         showInputError(formInputError, rest);
//       } else {
//         hideInputError(formInputError, rest);
//       }
//     });
//   });
// }
