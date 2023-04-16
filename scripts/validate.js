function enableValidation({ formSelector, ...rest }) {
  const forms = Array.from(document.querySelectorAll(formSelector));
  console.log(rest)
  forms.forEach(form => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault()
    })
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

function checkInputValidity(input) {
  const currentInputErrorContainer = document.querySelector(`#${input.id}-error`);
  console.log(currentInputErrorContainer)
  if (input.checkValidity()) {
    currentInputErrorContainer.textContent = '';
  } else {
    currentInputErrorContainer.textContent = input.validationMessage;
  }
}

const hasInvalidInput = (formInputs) => {
  return formInputs.some(item => !item.validity.valid)
};

const enableButton = (button, { inactiveButtonClass, activeButtonClass }) => {
  button.classList.remove(inactiveButtonClass);
  button.classList.add(activeButtonClass);
  button.setAttribute('disabled', true);
}

const disabledButton = (button, { inactiveButtonClass, activeButtonClass }) => {
  button.classList.add(inactiveButtonClass);
  button.classList.remove(activeButtonClass);
  button.removeAttribute('disabled');
}

/*const visibleError = (input, inputErrorConteiner, errorClass, inputErrorClass) => {
  inputErrorConteiner.textContent = input.validationMessage;
  inputErrorConteiner.classList.add(inputErrorClass);
  input.classList.add(errorClass);
}

const hideError = (input, inputErrorConteiner, errorClass, inputErrorClass) => {
  inputErrorConteiner.textContent = '';
  inputErrorConteiner.classList.remove(inputErrorClass);
  input.classList.remove(errorClass);
}*/



