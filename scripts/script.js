console.log("Привет, мир!");
// Находим форму в DOM
const popupElement = document.querySelector(".popup");// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const popupCloseButtonElement = popupElement.querySelector(".popup__close");// Воспользуйтесь инструментом .querySelector()
const popupOpenButtonElement = document.querySelector(".profile__edit");// Воспользуйтесь инструментом .querySelector()
console.log(popupOpenButtonElement);
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
//function handleFormSubmit (evt) {
//    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
//}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
//formElement.addEventListener('submit', handleFormSubmit);
