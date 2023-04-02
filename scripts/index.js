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
const formElement = document.querySelector(".popup__form_profile");// через document обозначаю блок, который мне нужен
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
//карточки и удаление карточки
const element = document.querySelector('.element');

const createCard = (card) => {
  const newCard = document.querySelector('#card').content.cloneNode(true)

  const imageCard = newCard.querySelector('.element__img')
  imageCard.setAttribute('src', card.link)

  const nameCard = newCard.querySelector('.element__title')
  nameCard.textContent = card.name

  const deliteButtonCard = newCard.querySelector('.element__button-delited')
  deliteButtonCard.addEventListener('click', handleDeliteButtonClick)
  //element.append(newCard)
  return newCard;
};

initialCards.forEach(card => {
  newCard = createCard(card)
  element.append(newCard)
});


//добавление новой карточки
const formElementAdd = document.querySelector(".popup__form_place");
formElementAdd.addEventListener("submit", handleFormAddSubmit);


function handleFormAddSubmit(event) {
  event.preventDefault()
  const formElementAdd = event.target
  const inputText = formElementAdd.querySelector(".popup__input_text").value
  const inputLink = formElementAdd.querySelector(".popup__input_link").value
  const card = { name: inputText, link: inputLink }
  const newCard = createCard(card)
  element.prepend(newCard)
  popupCloseButtonElementAdd()
  createCard(card)
};

//удаление карточки
function handleDeliteButtonClick(evt) {
  const buttonDelite = evt.target
  const cardElement = buttonDelite.closest('.element__box')
  cardElement.remove()
};




//форма для добавления карточки
const popupElementPlace = document.querySelector(".popup_place");
const popupOpenButtonElementAdd = document.querySelector(".profile__add");
const popupCloseButtonElementAdd = popupElementPlace.querySelector(".popup__close");



//const titleElement = document.querySelector(".element__title");
//const imageElement = document.querySelector(".element__img");

const openPopupPlace = function () {
  //inputText.value = titleElement.textContent;
  //inputLink.value = imageElement.textContent;
  popupElementPlace.classList.add("popup_opened");
  console.log("Open popup clicked");
};

const closePopupPlace = function () {
  popupElementPlace.classList.remove("popup_opened");
};

popupOpenButtonElementAdd.addEventListener("click", openPopupPlace);
popupCloseButtonElementAdd.addEventListener("click", closePopupPlace);

/*function handleFormAddSubmit (evt) {
  evt.preventDefault();
  titleElement.textContent = inputText.value;
  imageElement.textContent = inputLink.value;
  closePopupPlace();
};*/




