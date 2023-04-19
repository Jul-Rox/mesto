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

function clearErrors(form, inputSelector, inputErrorClass, errorClass) {
  const currentInputErrorContainer = form.querySelector(`#${input.id}-error`);
  currentInputErrorContainer.forEach(input => {
    if (input.checkValidity()) {
    hideInputError(input, inputSelector, inputErrorClass, errorClass);
  }
 })
}
  // //...тут находишь все поля ввода в текущей форме, проходишь по ним циклом через forEach, и каждому инпуту вызываешь функцию hideInputError
  // const formInput = document.querySelectorAll(inputSelector);
  // formInput.forEach ('submit', (evt) => {
  //   // Отключаем событие по умолчанию
  //       evt.prevent.Default();
  //   // Очищаем поля формы
  //   hideInputError(inputSelector, inputErrorClass, errorClass) = evt.target.reset();
  //   });


// const clearErrors = document.allq.addEventListener('submit', (e) => {
//   // Отключаем событие по умолчанию
//       e.prevent.Default();
//   // Очищаем поля формы
//       e.target.reset();
//   });


// function setEventListeners(formToValidate, { inputSelector, submitButtonSelector, ...rest }) {
//   const formInputs = Array.from(formToValidate.querySelectorAll(inputSelector));
//   const formButton = formToValidate.querySelector(submitButtonSelector);
//   disabledButton(formButton, rest);
//   formInputs.forEach(input => {
//     input.addEventListener('input', () => {
//       checkInputValidity(formToValidate, input);
//       if (hasInvalidInput(formInputs)) {
//         disabledButton(formButton, rest);
//       } else {
//         enableButton(formButton, rest);
//       }
//     });
//   });
// }

// function checkInputValidity(form, input) {
//   const currentInputErrorContainer = form.querySelector(`#${input.id}-error`);
//   if (input.checkValidity()) {
//     currentInputErrorContainer.textContent = '';
//   } else {
//     currentInputErrorContainer.textContent = input.validationMessage;
//   }
// }


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
