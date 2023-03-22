const popupElement = document.querySelector(".popup");// через document обозначаю блок, который мне нужен

const popupCloseButtonElement = popupElement.querySelector(".popup__close"); //обозначаю кнопку в уже вбранном блоке
const popupOpenButtonElement = document.querySelector(".profile__edit");// обьявляю делаю через document, т.к. элемент находится в другом блоке


// функция первая, она работает в одну сторону чтобы открыть
//const togglePopupVisibility = function () {
  //popupElement.classList.toggle("popup_opened");
//}; // действие toggle позволяет добавлять класс popup_opened для открытия формы
//popupOpenButtonElement.addEventListener("click", togglePopupVisibility); //здесь при нажатии на кнопку будет выполняться вышеупомянутая функция, для открытия формы

const openPopup = function () {
  popupElement.classList.add("popup_opened"); // функция открываем попап
  console.log("Open popup clicked");
};

//const closePopupClickOverlay = function(event) {
  //console.log ("event.target, event.currentTarget");
  //if (event.target !== event.currentTarget) {
   // return;
 // }
  //closePopup();
//}; для того , чтобы форма закрывалась, если нажать на пустое место

const closePopup = function () {
  popupElement.classList.remove("popup_opened"); // функция закрываем попап
};

popupOpenButtonElement.addEventListener("click", openPopup);// действие при нажатии открыть
popupCloseButtonElement.addEventListener("click", closePopup);// действие при нажатии закрыть

// Находим форму в DOM
const formElement = document.querySelector(".popup__form");// через document обозначаю блок, который мне нужен
// Находим поля формы в DOM
const inputName = formElement.querySelector(".popup__name"); // обьявляю переменную для поля name
const inputDescription = formElement.querySelector(".popup__description");// обьявляю переменную для поля description
const profileName = document.querySelector(".profile__name"); // обьявляю переменную для строки изменения
const profileDescription = document.querySelector(".profile__description"); // обьявляю переменную для строки изменения


  inputName.value = profileName.textContent; // связала форму и поля для изменений
  inputDescription.value = profileDescription.textContent; // связала форму и поля для изменений


function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    //formName.value;                       // Так мы можем определить свою логику отправки.
    //formDescription.value;                         // О том, как это делать, расскажем позже.

    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
    closePopup();
};

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);
