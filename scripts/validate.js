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

function checkInputValidity(input) {
  const currentInputErrorContainer = document.querySelector(`#${input.id}-error`);
  if (input.checkValidity()) {
    currentInputErrorContainer.textContent = '';
  } else {
    currentInputErrorContainer.textContent = input.validationMessage;
  }
}

const hasInvalidInput = (formInputs) => {
  return formInputs.some(item => !item.validity.valid)
};

const enableButton = (button, { inactiveButtonClass }) => {
  button.classList.remove(inactiveButtonClass);
  button.removeAttribute('disabled');
}

function disabledButton(button, { inactiveButtonClass }) {
  button.classList.add(inactiveButtonClass);
  button.setAttribute('disabled', true);
}

