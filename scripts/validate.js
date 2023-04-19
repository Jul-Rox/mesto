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
      checkInputValidity(formToValidate, input, rest);
      if (hasInvalidInput(formInputs)) {
        disabledButton(formButton, rest);
      } else {
        enableButton(formButton, rest);
      }
    });
  });
}

function showInputError(form, input, inputErrorClass, errorClass) {
  const currentInputErrorContainer = form.querySelector(`#${input.id}-error`);
  currentInputErrorContainer.textContent = input.validationMessage;
  input.classList.add(inputErrorClass);
  currentInputErrorContainer.classList.add(errorClass);
}

function hideInputError(form, input, inputErrorClass, errorClass) {
  const currentInputErrorContainer = form.querySelector(`#${input.id}-error`);
  currentInputErrorContainer.textContent = '';
  input.classList.remove(inputErrorClass);
  currentInputErrorContainer.classList.remove(errorClass);
}

function checkInputValidity(form, input, { inputErrorClass, errorClass }) {
  if (input.checkValidity()) {
    hideInputError(form, input, inputErrorClass, errorClass);
  } else {
    showInputError(form, input, inputErrorClass, errorClass);
  }
}
//функция удаления ошибок для окрывающейся функции
function clearErrors(form, inputSelector, inputErrorClass, errorClass) {
  const inputErrorElement = form.querySelectorAll(inputSelector);
  inputErrorElement.forEach(input => {
    hideInputError(form, input, inputErrorClass, errorClass);
 })
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
