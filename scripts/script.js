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



const page = document.querySelector('.page');
const head = document.querySelector('.header');
const headerLink = document.querySelectorAll('.header__navbar-link');
const description = document.querySelector('.description');
const planLink = document.querySelectorAll('.training__plan-link');
const buttonBicycles = document.querySelectorAll('.bicycles__type-button');
const buttonNext = document.querySelector('.highway__button-next');
const buttonPrew = document.querySelector('.highway__button-prev');
const itemCaption = document.querySelectorAll('.bicycles__cards-item-caption');
const footer = document.querySelector('.footer');
const copyright = document.querySelector('.footer__copyright');
const controller = document.querySelector('.footer__theme-controller');

controller.addEventListener('change', (evt) => {
    if(controller.checked) {
      darkAdd();
    } else {
      darkClose();
    }
  });

  function darkAdd() {
    page.classList.add('page_dark');
    head.style.background = '#333';
    headerLink.forEach(target => {
      target.style.color = '#FFFFFF'
    });
    description.style.background = '#333';
    planLink.forEach(evt => {
      evt.style.color = '#FFFFFF'
    });
    buttonBicycles.forEach(evt => {
      evt.style.color = '#FFFFFF';
    });
    buttonNext.style.background = '#434343 url(../../../../../images/logos/rightwards-arrow-w.svg) no-repeat';
    buttonNext.style.backgroundPosition = 'center';
    buttonNext.style.backgroundSize = '7px 16px';
    buttonPrew.style.background = '#434343 url(../../../../../images/logos/leftwards-arrow-w.svg) no-repeat';
    buttonPrew.style.backgroundPosition = 'center';
    buttonPrew.style.backgroundSize = '7px 16px';
    itemCaption.forEach(evt => {
      evt.style.color = '#FFFFFF'
    });
    footer.style.background = '#2F2F2F';
    copyright.style.color = '#565656';
  };

  function darkClose() {
    page.classList.remove('page_dark');
    head.style.background = '#f4f4f4';
    headerLink.forEach(target => {
      target.style.color = '#151515'
    });
    description.style.background = '#f4f4f4';
    planLink.forEach(evt => {
      evt.style.color = '#151515'
    });
    buttonBicycles.forEach(evt => {
      evt.style.color = 'black';
    });
    buttonNext.style.background = '#EBEBEB url(../../../../../images/logos/rightwards-arrow.svg) no-repeat';
    buttonNext.style.backgroundPosition = 'center';
    buttonNext.style.backgroundSize = '7px 16px';
    buttonPrew.style.background = '#EBEBEB url(../../../../../images/logos/leftwards-arrow.svg) no-repeat';
    buttonPrew.style.backgroundPosition = 'center';
    buttonPrew.style.backgroundSize = '7px 16px';
    itemCaption.forEach(evt => {
      evt.style.color = '#151515'
    });
    footer.style.background = '#efefef';
    copyright.style.color = '#CFCFCF';
  };

  /*------------------------------------------------------------Добавление темной темы---------------------------------------------------------------*/