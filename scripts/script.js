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
const controller = document.querySelectorAll('.footer__theme-controller');
const popupContainer = document.querySelector('.popup__container');

controller.forEach(target => {
  target.addEventListener('change', (evt) => {
    if(target.checked) {
      darkAdd();
    } else {
      darkClose();
    }
  });
})


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
    popupContainer.style.background = '#333333';
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
    popupContainer.style.background = '#F4F4F4'
  };

  /*------------------------------------------------------------Добавление темной темы---------------------------------------------------------------*/

  /*--------------------------- смена карточек при нажатии -----------------------------*/
  const bicyclesTypeButtonContainer = document.querySelector('.bicycles__type-list')

  const bicyclesTypeButtons = document.querySelectorAll('.bicycles__type-button');
  const bicyclesCards = document.querySelectorAll('.bicycles__cards-item');

  const highwaySection = document.querySelector('.highway');
  const highwaySectionSubtitle = highwaySection.querySelector('.subtitle');
  const highwaySectionText = highwaySection.querySelector('.text-content');


  const bicyclesTypes = [
    {
      FirstImage: './images/bicycles/Cervelo-Caledonia-5.png',
      FirstImageCaption: 'Cervelo Caledonia 5',
      FirstImageLink: 'https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN',

      SecondImage: './images/bicycles/Cannondale-Systemsix-Himod.png',
      SecondImageCaption: 'Cannondale Systemsix Himod',
      SecondImageLink: 'https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J',

      ThirdImage: './images/bicycles/Trek-Domane-SL-7.png',
      ThirdImageCaption: 'Trek Domane SL-7',
      ThirdImageLink: 'https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF',

      Title: 'Шоссе',
      Text: 'На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.',
    },
    {
      FirstImage: './images/bicycles/Cervelo-Aspero-GRX-810.png',
      FirstImageCaption: 'Cervelo Aspero GRX 810',
      FirstImageLink: 'https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE',

      SecondImage: './images/bicycles/Specialized-S-Works-Diverge.png',
      SecondImageCaption: 'Specialized S-Works Diverge',
      SecondImageLink: 'https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9',
      
      ThirdImage: './images/bicycles/Cannondale-Topstone-Lefty-3.png',
      ThirdImageCaption: 'Cannondale Topstone Lefty 3',
      ThirdImageLink: 'https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8',

      Title: 'Грэвел',
      Text: 'Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.',
    },
    {
      FirstImage: './images/bicycles/Specialized-S-Works-Shiv.png',
      FirstImageCaption: 'Specialized S-Works Shiv',
      FirstImageLink: 'https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9 ',

      SecondImage: './images/bicycles/BMC-Timemachine-01-ONE.png',
      SecondImageCaption: 'BMC Timemachine 01 ONE',
      SecondImageLink: 'https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835',
    
      ThirdImage: './images/bicycles/Cervelo-P-Series.png',
      ThirdImageCaption: 'Cervelo P-Series',
      ThirdImageLink: 'https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q',

      Title: 'ТТ',
      Text: 'ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.',
    }
  ]

  bicyclesTypeButtonContainer.onclick = function(event) {
    let target = event.target;
    highlightButton(target);
  }  

   function highlightButton(item) {
    let selectedItem;
    bicyclesTypeButtons.forEach((el) => {
      el.classList.add('bicycles__type-button_non-active');
    })
    selectedItem = item;
    selectedItem.classList.remove('bicycles__type-button_non-active');

    switch(selectedItem.textContent) {
      case 'Шоссе': 
      refreshCards(bicyclesTypes[0]);
      break;

      case 'Грэвел': 
      refreshCards(bicyclesTypes[1]);
      break;

      case 'TT': 
      refreshCards(bicyclesTypes[2]);
      break;
    }
  }

  function changeHighwayContent(item) {
    highwaySectionSubtitle.textContent = item.Title;
    highwaySectionText.textContent = item.Text;
  }

  function refreshCards(type) {
    bicyclesCards.forEach((el, index) => {
      switch(index) {
        case 0:
          el.querySelector('.bicycles__cards-item-image').src = type.FirstImage;
          el.querySelector('.bicycles__cards-item-image').alt = type.FirstImage;
          el.querySelector('.bicycles__cards-item-caption').textContent = type.FirstImageCaption;
          el.querySelector('.bicycles__cards-item-link').href = type.FirstImageLink;
          changeHighwayContent(type);
          break;
        case 1:
          el.querySelector('.bicycles__cards-item-image').src = type.SecondImage;
          el.querySelector('.bicycles__cards-item-image').alt = type.SecondImage;
          el.querySelector('.bicycles__cards-item-caption').textContent = type.SecondImageCaption;
          el.querySelector('.bicycles__cards-item-link').href = type.SecondImageLink;
          changeHighwayContent(type);
          break;
        case 2:
          el.querySelector('.bicycles__cards-item-image').src = type.ThirdImage;
          el.querySelector('.bicycles__cards-item-image').alt = type.ThirdImage;
          el.querySelector('.bicycles__cards-item-caption').textContent = type.ThirdImageCaption;
          el.querySelector('.bicycles__cards-item-link').href = type.ThirdImageLink;
          changeHighwayContent(type);
          break;
      }
    })
  }


  const burgerButton = document.querySelector('.header__navbar-menu');
  const closePopup = document.querySelector('.popup__close-button');
  const popup = document.querySelector('.popup');
  const popupVisible = document.querySelector('.popup__switch-visible');

  burgerButton.addEventListener('click', (evt)=>{
    popup.classList.add('popup_open');
    popupVisible.style.display = 'grid';
  })

  closePopup.addEventListener('click', (evt)=>{
    popup.classList.remove('popup_open');
    popupVisible.style.display = 'none';
  })