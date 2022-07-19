import {page, head, headerLink, description, planLink, buttonBicycles, buttonNext, buttonPrew, itemCaption, footer, copyright, controller, popupContainer} from './constants/constants.js';

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

  export {controller, darkAdd, darkClose} 