const popupElementProfile = document.querySelector(".popup_profile");// через document обозначаю блок, который мне нужен
//const popupCloseButtonElement = document.querySelector(".popup__close"); //обозначаю кнопку в уже вбранном блоке
const popupOpenButtonElementEdit = document.querySelector(".profile__edit");// обьявляю делаю через document, т.к. элемент находится в другом блоке


// Находим форму в DOM
const editProfilePopupForm = document.querySelector(".popup__form_profile");// через document обозначаю блок, который мне нужен
// Находим поля формы в DOM
const inputName = editProfilePopupForm.querySelector(".popup__input_name"); // обьявляю переменную для поля name
const inputDescription = editProfilePopupForm.querySelector(".popup__input_description");// обьявляю переменную для поля description
const profileName = document.querySelector(".profile__name"); // обьявляю переменную для строки изменения
const profileDescription = document.querySelector(".profile__description"); // обьявляю переменную для строки изменения

const popupImage = document.querySelector("#popupImg");
const popupImageImg = popupImage.querySelector(".popup__img");
const popupImageText = popupImage.querySelector(".popup__title-big-img");


const openPopupProfile = function () {
  openPopup(popupElementProfile);
  inputName.value = profileName.textContent; // связала форму и поля для изменений
  inputDescription.value = profileDescription.textContent;
};

//открытие
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
}
popupOpenButtonElementEdit.addEventListener("click", openPopupProfile);// действие при нажатии открыть

//const closePopupClickOverlay = function(event) {
  //console.log ("event.target, event.currentTarget");
  //if (event.target !== event.currentTarget) {
   // return;
 // }
  //closePopup();
//}; для того , чтобы форма закрывалась, если нажать на пустое место

function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
    closePopup(popupElementProfile);
};

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
editProfilePopupForm.addEventListener('submit', handleFormSubmit);

// Функция закрытия попапа
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
}

const popupCloseButtonElementList = document.querySelectorAll(".popup__close"); //обозначаю кнопку в уже вбранном блоке

popupCloseButtonElementList.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});



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
  closePopupPlace()
  return createCard;
};


//форма для добавления карточки
const popupElementPlace = document.querySelector(".popup_place");
const popupOpenButtonElementAdd = document.querySelector(".profile__add");

const openPopupPlace = function () {
  openPopup(popupElementPlace);
};

const closePopupPlace = function () {
  closePopup(popupElementPlace);
};
popupOpenButtonElementAdd.addEventListener("click", openPopupPlace);
