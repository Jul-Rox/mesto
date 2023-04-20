const popupElementProfile = document.querySelector(".popup_profile");// через document обозначаю блок, который мне нужен
//const popupCloseButtonElement = document.querySelector(".popup__close"); //обозначаю кнопку в уже вбранном блоке
const popupOpenButtonElementEdit = document.querySelector(".profile__edit");// обьявляю делаю через document, т.к. элемент находится в другом блоке
const editProfilePopupForm = document.querySelector(".popup__form_profile");// через document обозначаю блок, который мне нужен
// Находим поля формы в DOM
const inputName = editProfilePopupForm.querySelector(".popup__input_name"); // обьявляю переменную для поля name
const inputDescription = editProfilePopupForm.querySelector(".popup__input_description");// обьявляю переменную для поля description
const profileName = document.querySelector(".profile__name"); // обьявляю переменную для строки изменения
const profileDescription = document.querySelector(".profile__description"); // обьявляю переменную для строки изменения

const popupImage = document.querySelector("#popupImg");
const popupImageImg = popupImage.querySelector(".popup__img");
const popupImageText = popupImage.querySelector(".popup__title-big-img");

//добавление новой карточки
const formElementAdd = document.querySelector(".popup__form_place");
formElementAdd.addEventListener("submit", handleFormAddSubmit);
const inputText = formElementAdd.querySelector(".popup__input_text")
const inputLink = formElementAdd.querySelector(".popup__input_link")

const validationConfig = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  //popupMenuImputClass: 'popup__menu'
});

enableValidation(validationConfig);

const openPopupProfile = function () {
  openPopup(popupElementProfile);
  inputName.value = profileName.textContent; // связала форму и поля для изменений
  inputDescription.value = profileDescription.textContent;
  clearErrors(editProfilePopupForm, validationConfig.inputSelector, validationConfig.inputErrorClass, validationConfig.errorClass);
};

popupOpenButtonElementEdit.addEventListener("click", openPopupProfile);// действие при нажатии открыть

function handleFormSubmit (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  closePopup(popupElementProfile);
};

//открытие функция общая
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
editProfilePopupForm.addEventListener('submit', handleFormSubmit);

// Функция закрытия попапа общая
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

const popupCloseButtonElementList = document.querySelectorAll(".popup__close"); //обозначаю кнопку в уже вбранном блоке
popupCloseButtonElementList.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//закрытие через overlay
const popupAll = document.querySelectorAll('.popup');

popupAll.forEach(popup => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
    closePopup(popup);
    }
  });
});

//функция закрытия через Esc
const closePopupEsc = function (evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}
//ПР5
//добавление карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardTemplate = document.querySelector('#card-template')
  .content.querySelector('.element__box');

//карточки и удаление карточки
const element = document.querySelector('.element');
const createCard = (card) => {
  const newCard = cardTemplate.cloneNode(true);

  const imageCard = newCard.querySelector('.element__img')
  imageCard.setAttribute('src', card.link)
  imageCard.setAttribute('alt', card.link)

  const nameCard = newCard.querySelector('.element__title')
  nameCard.textContent = card.name

  const deliteButtonCard = newCard.querySelector('.element__button-delited')
  deliteButtonCard.addEventListener('click', handleDeliteButtonClick)

  const likeButton = newCard.querySelector('.element__button-like')
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('element__button-like_active');
  });

  const cardImage = newCard.querySelector('.element__img');
  cardImage.addEventListener('click', () => {
    popupElementImgBig(card)
  })
  return newCard;
};

//удаление карточки
function handleDeliteButtonClick(evt) {
  const buttonDelite = evt.target
  const cardElement = buttonDelite.closest('.element__box')
  cardElement.remove()
};

initialCards.forEach(card => {
  const newItemCard = createCard(card);
  element.append(newItemCard);
});

//функция для увеличения карточки
function popupElementImgBig(card) {
  popupImageImg.src = card.link
  popupImageText.textContent = card.name
  popupImageImg.alt = card.alt
  openPopupImg(popupImage)
};

const openPopupImg = function () {
  openPopup(popupImage); // функция открываем попап
};

//добавление новой карточки
function handleFormAddSubmit(event) {
  event.preventDefault()
  const card = { name: inputText.value, link: inputLink.value }
  const newCard = createCard(card)
  element.prepend(newCard)
  closePopupPlace()
};

//форма для добавления карточки
const popupElementPlace = document.querySelector(".popup_place");
const popupOpenButtonElementAdd = document.querySelector(".profile__add");
const popupSubmitButtonPlace = popupElementPlace.querySelector(".popup__button");
console.log(popupSubmitButtonPlace)
const openPopupPlace = function () {
  openPopup(popupElementPlace);
  clearErrors(formElementAdd, validationConfig.inputSelector, validationConfig.inputErrorClass, validationConfig.errorClass);//вызываю функцию очистки ошибки
  formElementAdd.reset()//очищение полей
  disabledButton(popupSubmitButtonPlace, {inactiveButtonClass:validationConfig.inactiveButtonClass})

};

const closePopupPlace = function () {
  closePopup(popupElementPlace);
};
popupOpenButtonElementAdd.addEventListener("click", openPopupPlace);
