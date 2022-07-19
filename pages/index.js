import {controller, darkAdd, darkClose} from './components/darkMode.js';
import {highlightButton, bicyclesTypeButtonContainer} from './components/switchCard.js';
import {burgerButton, closePopup, popup, popupVisible, menuItems} from './components/constants/constants.js';

/*let position = 0;
const slidersToShow = 2;
const slidersToScroll = 1;
const container = document.querySelector('.highway__slider-container');
const track = document.querySelector('.highway__slider-track');
const buttonLeft = document.querySelector('.highway__button-prew');
const buttonRight = document.querySelector('.highway__button-next');
const items = document.querySelectorAll('.highway__slider-item');
const itemCounts = items.length;
const itemWidth = container.width() / slidersToShow;
const movePosition = slidersToScroll * itemWidth;


items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});*/

  controller.forEach(target => {
    target.addEventListener('change', (evt) => {
      if(target.checked) {
        darkAdd();
      } else {
        darkClose();
      }
    });
  })


  /*------------------------------------------------------------Добавление темной темы---------------------------------------------------------------*/

  /*--------------------------- смена карточек при нажатии -----------------------------*/
  bicyclesTypeButtonContainer.onclick = function(event) {
    let target = event.target;
    highlightButton(target);
  }  


  burgerButton.addEventListener('click', (evt) => {
    popup.classList.add('popup_open');
    popupVisible.style.display = 'grid';
  })

  closePopup.addEventListener('click', (evt) => {
    popup.classList.remove('popup_open');
    popupVisible.style.display = 'none';
  })