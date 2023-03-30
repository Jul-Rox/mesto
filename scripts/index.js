const popupElementProfile = document.querySelector(".popup_profile");// через document обозначаю блок, который мне нужен

const popupCloseButtonElementEdit = popupElementProfile.querySelector(".popup__close"); //обозначаю кнопку в уже вбранном блоке
const popupOpenButtonElementEdit = document.querySelector(".profile__edit");// обьявляю делаю через document, т.к. элемент находится в другом блоке



// функция первая, она работает в одну сторону чтобы открыть
//const togglePopupVisibility = function () {
  //popupElement.classList.toggle("popup_opened");
//}; // действие toggle позволяет добавлять класс popup_opened для открытия формы
//popupOpenButtonElement.addEventListener("click", togglePopupVisibility); //здесь при нажатии на кнопку будет выполняться вышеупомянутая функция, для открытия формы

const openPopupProfile = function () {
  inputName.value = profileName.textContent; // связала форму и поля для изменений
  inputDescription.value = profileDescription.textContent;
  popupElementProfile.classList.add("popup_opened"); // функция открываем попап
  console.log("Open popup clicked");

};

//const closePopupClickOverlay = function(event) {
  //console.log ("event.target, event.currentTarget");
  //if (event.target !== event.currentTarget) {
   // return;
 // }
  //closePopup();
//}; для того , чтобы форма закрывалась, если нажать на пустое место

const closePopupProfile = function () {
  popupElementProfile.classList.remove("popup_opened"); // функция закрываем попап
};

popupOpenButtonElementEdit.addEventListener("click", openPopupProfile);// действие при нажатии открыть
popupCloseButtonElementEdit.addEventListener("click", closePopupProfile);// действие при нажатии закрыть

// Находим форму в DOM
const formElement = document.querySelector(".popup__form");// через document обозначаю блок, который мне нужен
// Находим поля формы в DOM
const inputName = formElement.querySelector(".popup__input_name"); // обьявляю переменную для поля name
const inputDescription = formElement.querySelector(".popup__input_description");// обьявляю переменную для поля description
const profileName = document.querySelector(".profile__name"); // обьявляю переменную для строки изменения
const profileDescription = document.querySelector(".profile__description"); // обьявляю переменную для строки изменения

function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
    closePopupProfile();
};

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

//ПР5
//форма для добавления карточки
const popupElementPlace = document.querySelector(".popup_place");
const popupOpenButtonElementAdd = document.querySelector(".profile__add");
const popupCloseButtonElementAdd = popupElementPlace.querySelector(".popup__close");
const formElementAdd = document.querySelector(".popup__form");
const inputText = document.querySelector(".popup__input_text");
const inputLink = document.querySelector(".popup__input_link");
const titleElement = document.querySelector(".element__title");
const imageElement = document.querySelector(".element__img");

const openPopupPlace = function () {
  inputText.value = titleElement.textContent;
  inputLink.value = imageElement.textContent;
  popupElementPlace.classList.add("popup_opened");
  console.log("Open popup clicked");
};

const closePopupPlace = function () {
  popupElementPlace.classList.remove("popup_opened");
};

popupOpenButtonElementAdd.addEventListener("click", openPopupPlace);
popupCloseButtonElementAdd.addEventListener("click", closePopupPlace);

function handleFormSubmit (evt) {
  evt.preventDefault();
  titleElement.textContent = inputText.value;
  imageElement.textContent = inputLink.value;
  closePopupPlace();
};
formElementAdd.addEventListener('submit', handleFormSubmit);
/**
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
**/
