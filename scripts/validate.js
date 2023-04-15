
const enableValidation = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  activeButtonClass: 'popup__button_active',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});


function validationConfig({ formSelector, ...rest }) {
  const forms = Array.form(document.querySelectorAll(formSelector));
  console.log(rest)
  forms.forEach(form => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault()
    })
    setEventListeners(form, rest)
  })
}

const setEventListeners = (formToValidate, {inputSelector, submitButtonSelector, ...rest}) => {
  const formInputs = Array.form(formToValidate.querySelectorAll(inputSelector));
  const formButton = formToValidate.querySelector(submitButtonSelector);
  disablaseButton(formButton, rest)

  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      checkInputValidity(input);
      if (hasInvalidInput(formInputs)) {
        disablaseButton(formButton, rest);
      } else {
        enableButton(formButton, rest);
      }
    });
  })
};

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

const enableButton = (button, { inactiveButtonClass, activeButtonClass }) => {
  button.classList.remove(inactiveButtonClass);
  button.classList.add(activeButtonClass);
  button.removeAttribute('disabled', true);
}

const disabledButton = (button, { inactiveButtonClass, activeButtonClass }) => {
  button.classList.add(inactiveButtonClass);
  button.classList.remove(activeButtonClass);
  button.removeAttribute('disabled', false);
}

validationConfig(enableValidation);
