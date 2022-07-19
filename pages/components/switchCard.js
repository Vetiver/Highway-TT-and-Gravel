import {bicyclesTypeButtonContainer, bicyclesTypeButtons, bicyclesCards, highwaySection, highwaySectionSubtitle, highwaySectionText} from './constants/constants.js';


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

export {bicyclesTypes, highlightButton,changeHighwayContent, refreshCards, bicyclesTypeButtonContainer}