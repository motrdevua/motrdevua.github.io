!function(s){function a(a){for(var e,l,o=a[0],d=a[1],r=a[2],_=0,v=[];_<o.length;_++)l=o[_],c[l]&&v.push(c[l][0]),c[l]=0;for(e in d)Object.prototype.hasOwnProperty.call(d,e)&&(s[e]=d[e]);for(n&&n(a);v.length;)v.shift()();return t.push.apply(t,r||[]),i()}function i(){for(var s,a=0;a<t.length;a++){for(var i=t[a],e=!0,o=1;o<i.length;o++){var d=i[o];0!==c[d]&&(e=!1)}e&&(t.splice(a--,1),s=l(l.s=i[0]))}return s}var e={},c={0:0},t=[];function l(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return s[a].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=s,l.c=e,l.d=function(s,a,i){l.o(s,a)||Object.defineProperty(s,a,{enumerable:!0,get:i})},l.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},l.t=function(s,a){if(1&a&&(s=l(s)),8&a)return s;if(4&a&&"object"==typeof s&&s&&s.__esModule)return s;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:s}),2&a&&"string"!=typeof s)for(var e in s)l.d(i,e,function(a){return s[a]}.bind(null,e));return i},l.n=function(s){var a=s&&s.__esModule?function(){return s.default}:function(){return s};return l.d(a,"a",a),a},l.o=function(s,a){return Object.prototype.hasOwnProperty.call(s,a)},l.p="";var o=window.webpackJsonp=window.webpackJsonp||[],d=o.push.bind(o);o.push=a,o=o.slice();for(var r=0;r<o.length;r++)a(o[r]);var n=d;t.push([2,1]),i()}([,,function(s,a,i){i(3),i(12),i(13),s.exports=i(14)},function(s,a,i){"use strict";i.r(a);i(0),i(4),i(5),i(1),i(6),i(7),i(8),i(9),i(10),i(11)},,,,function(s,a,i){(function(s){s(document).ready(function(){var a=1,i=!1;s("#fullpage").fullpage({menu:"#menu",anchors:["about","services","portfolio","team","reviews","blog","contacts"],navigation:!0,navigationPosition:"right",navigationTooltips:["about","services","portfolio","team","reviews","blog","contacts"],showActiveTooltip:!1,slidesNavigation:!0,slidesNavPosition:"bottom",css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,scrollBar:!1,easingcss3:"cubic-bezier(0.86, 0, 0.07, 1)",loopBottom:!1,loopTop:!1,loopHorizontal:!1,continuousVertical:!0,offsetSections:!1,resetSliders:!0,normalScrollElements:"#element1, .element2",scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowOptions:null,touchSensitivity:15,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!1,verticalCentered:!0,paddingBottom:"0px",responsiveWidth:575,sectionSelector:".section",slideSelector:".slide",lazyLoading:!0,onLeave:function(e,c,t){if(console.log(e),1===e&&2===c&&(s(".column.ie").addClass("animated fadeInLeft").css("animation-delay",".3s"),s(".column.de").addClass("animated fadeInRight").css("animation-delay",".3s")),3===e&&3===a&&(s(".team__left").addClass("animated fadeInLeft").css("animation-delay",".3s"),s(".team__right").addClass("animated fadeInRight").css("animation-delay",".3s")),3===e&&3===a&&(s(".team__left").addClass("animated fadeInLeft").css("animation-delay",".3s"),s(".team__right").addClass("animated fadeInRight").css("animation-delay",".3s")),3===e&&!i){if("down"===t&&a<3)return i=!0,s.fn.fullpage.moveSlideRight(),a+=1,!1;if("up"===t&&a>1)return i=!0,s.fn.fullpage.moveSlideLeft(),a-=1,!1}if(5===e&&!i){if("down"===t&&a<7)return i=!0,s.fn.fullpage.moveSlideRight(),a+=1,!1;if("up"===t&&a>3)return i=!0,s.fn.fullpage.moveSlideLeft(),a-=1,!1}return!0},afterSlideLoad:function(){i=!1},afterLoad:function(a){s(".menu__item").each(function(){var i=s(this).children().first().attr("href");"#".concat(a)===i?s(this).addClass("menu__item--active"):s(this).removeClass("menu__item--active")})}}),s('<divv class="fp-arrows"><div class="fp-arrow fp-arrow--up"><span></span></div><div class="fp-arrow fp-arrow--down"><span></span></div></div>').insertAfter("#fp-nav ul"),s(".fp-arrow--up").on("click",function(){s.fn.fullpage.moveSectionUp()}),s(".fp-arrow--down").on("click",function(){s.fn.fullpage.moveSectionDown()})})}).call(this,i(0))},function(s,a,i){(function(s){s(".burger").on("click",function(){s(".burger").toggleClass("burger--active"),s(".menu").toggleClass("menu--active")}),s(".menu__item").on("click",function(){s(".menu").toggleClass("menu--active"),s(".burger").toggleClass("burger--active")})}).call(this,i(0))},function(s,a,i){(function(s){s(".button--request").on("click",function(){s(".modal").addClass("modal--active")}),s(".modal__button--close").on("click",function(){s(".modal").removeClass("modal--active")}),s(".button--send").on("click",function(){s(".modal__message").addClass("modal__message--active"),setTimeout(function(){s(".modal__message").removeClass("modal__message--active")},1e3),setTimeout(function(){s(".modal__input").each(function(){s(this).val("")}),s(".modal").removeClass("modal--active")},2e3)}),s(".modal").on("click",function(a){a.preventDefault(),s(".button--request").is(a.target)||s(".modal__inner").is(a.target)||0!==s(".modal__inner").has(a.target).length||s(".modal").removeClass("modal--active")})}).call(this,i(0))},function(s,a){window.initMap=function(){var s,a,i,e=document.getElementById("map"),c={center:{lat:55.6791304,lng:37.630565},zoom:14,styles:[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#469fec"},{visibility:"on"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}]},t=new google.maps.Map(e,c);s=c.center,a=new google.maps.Marker({position:s,map:t,icon:"img/marker.png"}),i=new google.maps.InfoWindow({content:"<h4>Всё просто</h4>"}),a.addListener("mouseover",function(){i.open(t,a)}),a.addListener("mouseout",function(){i.close(t,a)})}},function(s,a,i){(function(s){s(document).ready(function(){s(".tooltip").tooltipster({contentCloning:!0,animation:"grow",delay:[100,100],animationDuration:[100,100],maxWidth:220,theme:["tooltipster-noir","tooltipster-noir-customized"],arrow:!1,plugins:["follower"]})})}).call(this,i(0))},function(s,a,i){},function(s,a,i){"use strict";i.r(a),a.default='<!DOCTYPE html><html lang="ru-RU"><head><meta charset="utf-8"><title>Всё просто</title><meta http-equiv="X-UA-Compatible" content="ie=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="keywords" content="">\x3c!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv-printshiv.min.js"><\/script><![endif]--\x3e<link href="https://fonts.googleapis.com/css?family=Fira+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i%7CLato:300,300i,400,400i,700,700i,900,900i%7COpen+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&amp;display=swap" rel="stylesheet"></head><body class="index"><div class="wrapper"><div class="modal"><div class="modal__inner"><h3 class="modal__title">Заявка на участие</h3><div class="modal__button modal__button--close"><span></span></div><form class="modal__form" method="post" action="#"><input class="modal__input modal__input--name" type="text" name="name" id="name" placeholder="Имя"><input class="modal__input modal__input--phone" type="tel" name="phone" id="phone" placeholder="Телефон"><input class="modal__input modal__input--email" type="email" name="email" id="email" placeholder="E-Mail"><button class="button button--send" type="submit">Отправить</button></form></div><span class="modal__message">Заявка отправлена!</span></div><nav class="navbar"><div class="container"><div class="navbar__inner"><a class="logo" href="#"><div class="logo__image"></div><div class="logo__text"><span>Всё просто</span><small>Бюро высоких технологий</small></div></a><div class="burger"><span class="burger__line"></span><span class="burger__line"></span><span class="burger__line"></span></div><div class="menu" id="menu"><ul class="menu__list"><li class="menu__item menu__item--active"><a class="menu__link" href="#about">О комании</a></li><li class="menu__item"><a class="menu__link" href="#services">Услуги</a></li><li class="menu__item"><a class="menu__link" href="#portfolio">Портфолио</a></li><li class="menu__item"><a class="menu__link" href="#team">Сотрудники</a></li><li class="menu__item"><a class="menu__link" href="#reviews">Отзывы</a></li><li class="menu__item"><a class="menu__link" href="#blog">Блог</a></li><li class="menu__item"><a class="menu__link" href="#contacts">Контакты</a></li></ul></div></div></div></nav><div id="fullpage"><section class="section about"><div class="outer"><div class="container"><div class="inner"><div class="column"><h1 class="about__title">Бюро<span class="about__title about__title--blue"> высоких технологий</span></h1><p class="about__text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах</p><button class="button button--request">Заявка на участие</button></div><div class="column"><div class="about__circle-outer"><div class="about__circle"></div><div class="about__logo"></div><ul class="about__tech tech"><li class="tech__item tooltip" data-tooltip-content="#python"></li><li class="tech__item tooltip" data-tooltip-content="#php"></li><li class="tech__item tooltip" data-tooltip-content="#java"></li><li class="tech__item tooltip" data-tooltip-content="#redis"></li><li class="tech__item tooltip" data-tooltip-content="#devops"></li><li class="tech__item tooltip" data-tooltip-content="#data"></li></ul></div></div></div></div></div><div class="tooltip_templates"><div id="python"><h5 class="tooltip_title">Python</h5><span class="tooltip_text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому</span></div><div id="php"><h5 class="tooltip_title">Php</h5><span class="tooltip_text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому</span></div><div id="java"><h5 class="tooltip_title">Java</h5><span class="tooltip_text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому</span></div><div id="redis"><h5 class="tooltip_title">Redis</h5><span class="tooltip_text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому</span></div><div id="devops"><h5 class="tooltip_title">Devops</h5><span class="tooltip_text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому</span></div><div id="data"><h5 class="tooltip_title">Data Science</h5><span class="tooltip_text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому</span></div></div></section><section class="section service"><div class="outer"><div class="container"><div class="section__top"><h2 class="section__title">Направления</h2></div><div class="inner"><div class="column ie"><div class="service__img service__img--ie"></div><div class="service__desc"><h3 class="service__subtitle">Искусственный интеллект</h3><p class="service__text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона</p><ul class="service__list"><li class="service__item"><a class="service__link" href="#">Data Science</a><span class="service__arrow"></span></li><li class="service__item"><a class="service__link" href="#">Нейронные сети</a><span class="service__arrow"></span></li><li class="service__item"><a class="service__link" href="#">Математические модели</a><span class="service__arrow"></span></li></ul></div></div><div class="column de"><div class="service__img service__img--de"></div><div class="service__desc"><h3 class="service__subtitle">Цифровая экономика</h3><p class="service__text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона</p><ul class="service__list"><li class="service__item"><a class="service__link" href="#">Web проекты</a><span class="service__arrow"></span></li><li class="service__item"><a class="service__link" href="#">Офлайн IT проекты</a><span class="service__arrow"></span></li><li class="service__item"><a class="service__link" href="#">Дополненная реальность</a><span class="service__arrow"></span></li><li class="service__item"><a class="service__link" href="#">Виртуальная реальность и 3D</a><span class="service__arrow"></span></li></ul></div></div></div></div></div></section><section class="section portfolio"><div class="outer"><div class="container"><div class="section__top"><h2 class="section__title">Наши проекты</h2><button class="button button--all">все проекты</button></div><div class="slide" data-anchor="slide1"><div class="inner"><div class="portfolio__cards"><div class="portfolio__card card"><div class="card__front"></div><div class="card__back"><div class="card__desc"><h3 class="card__title">Система для разработки клинических рекомендаций</h3><p class="card__text">Формирование протоколов лечения онкологических заболеваний и шаблонов рецептов</p></div><div class="card__icons"><div class="card__icon card__icon--data"></div><div class="card__icon card__icon--java"></div><div class="card__icon card__icon--redis"></div></div></div></div><div class="portfolio__card card"><div class="card__front"></div><div class="card__back"><div class="card__desc"><h3 class="card__title">Мобильное приложение для мониторинга нарушений зрения</h3><p class="card__text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</p></div><div class="card__icons"><div class="card__icon card__icon--java"></div><div class="card__icon card__icon--redis"></div><div class="card__icon card__icon--"></div></div></div></div><div class="portfolio__card card"><div class="card__front"></div><div class="card__back"><div class="card__desc"><h3 class="card__title">Система для разработки клинических рекомендаций</h3><p class="card__text">Формирование протоколов лечения онкологических заболеваний и шаблонов рецептов</p></div><div class="card__icons"><div class="card__icon card__icon--data"></div><div class="card__icon card__icon--java"></div><div class="card__icon card__icon--redis"></div></div></div></div></div></div></div><div class="slide" data-anchor="slide2"><div class="inner"><div class="portfolio__cards"><div class="portfolio__card card"><div class="card__front"></div><div class="card__back"><div class="card__desc"><h3 class="card__title">Система для разработки клинических рекомендаций</h3><p class="card__text">Формирование протоколов лечения онкологических заболеваний и шаблонов рецептов</p></div><div class="card__icons"><div class="card__icon card__icon--data"></div><div class="card__icon card__icon--java"></div><div class="card__icon card__icon--redis"></div></div></div></div><div class="portfolio__card card"><div class="card__front"></div><div class="card__back"><div class="card__desc"><h3 class="card__title">Мобильное приложение для мониторинга нарушений зрения</h3><p class="card__text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</p></div><div class="card__icons"><div class="card__icon card__icon--java"></div><div class="card__icon card__icon--redis"></div><div class="card__icon card__icon--"></div></div></div></div><div class="portfolio__card card"><div class="card__front"></div><div class="card__back"><div class="card__desc"><h3 class="card__title">Система для разработки клинических рекомендаций</h3><p class="card__text">Формирование протоколов лечения онкологических заболеваний и шаблонов рецептов</p></div><div class="card__icons"><div class="card__icon card__icon--data"></div><div class="card__icon card__icon--java"></div><div class="card__icon card__icon--redis"></div></div></div></div></div></div></div><div class="slide" data-anchor="slide3"><div class="inner"><div class="portfolio__cards"><div class="portfolio__card card"><div class="card__front"></div><div class="card__back"><div class="card__desc"><h3 class="card__title">Система для разработки клинических рекомендаций</h3><p class="card__text">Формирование протоколов лечения онкологических заболеваний и шаблонов рецептов</p></div><div class="card__icons"><div class="card__icon card__icon--data"></div><div class="card__icon card__icon--java"></div><div class="card__icon card__icon--redis"></div></div></div></div><div class="portfolio__card card"><div class="card__front"></div><div class="card__back"><div class="card__desc"><h3 class="card__title">Мобильное приложение для мониторинга нарушений зрения</h3><p class="card__text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.</p></div><div class="card__icons"><div class="card__icon card__icon--java"></div><div class="card__icon card__icon--redis"></div><div class="card__icon card__icon--"></div></div></div></div><div class="portfolio__card card"><div class="card__front"></div><div class="card__back"><div class="card__desc"><h3 class="card__title">Система для разработки клинических рекомендаций</h3><p class="card__text">Формирование протоколов лечения онкологических заболеваний и шаблонов рецептов</p></div><div class="card__icons"><div class="card__icon card__icon--data"></div><div class="card__icon card__icon--java"></div><div class="card__icon card__icon--redis"></div></div></div></div></div></div></div></div></div></section><section class="section team"><div class="outer"><div class="container"><div class="section__top"><h2 class="section__title">Сотрудники</h2><span class="team__line"></span><a class="team__details" href="#">Подробнее о нас</a></div><div class="inner"><div class="team__left"><img class="team__photo" src="img/photo-founder.jpg" alt="photo"><div class="team__text"><h4 class="team__name">Михаил</h4><span class="team__position">Основатель</span><p class="team__desc">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона...</p><a class="team__socials" href="#"></a></div></div><div class="team__right"><div class="team__person"><img class="team__photo" src="img/photo-team-1.jpg" alt="photo"><div class="team__hover"><h4 class="team__name">Иван</h4><span class="team__position">Менеджер</span></div></div><div class="team__person"><img class="team__photo" src="img/photo-team-2.jpg" alt="photo"><div class="team__hover"><h4 class="team__name">Ольга</h4><span class="team__position">Менеджер</span></div></div><div class="team__person"><img class="team__photo" src="img/photo-team-1.jpg" alt="photo"><div class="team__hover"><h4 class="team__name">Иван</h4><span class="team__position">Менеджер</span></div></div><div class="team__person"><img class="team__photo" src="img/photo-team-2.jpg" alt="photo"><div class="team__hover"><h4 class="team__name">Ольга</h4><span class="team__position">Менеджер</span></div></div></div></div></div></div></section><section class="section reviews"><div class="outer"><div class="container"><div class="section__top"><h2 class="section__title">Отзывы</h2></div><div class="slide" data-anchor="slide1"><div class="inner"><div class="column"><div class="review"><img class="review__photo" src="img/review-photo.jpg" alt="photo"><div class="review__desc"><h4 class="review__name">Иван Иванович</h4><span class="review__position">должность<span class="review__company">компания</span></span><p class="review__text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона...</p><a class="review__more" href="#">Подробнее</a></div></div></div><div class="column"><div class="review"><img class="review__photo" src="img/review-photo.jpg" alt="photo"><div class="review__desc"><h4 class="review__name">Иван Иванович</h4><span class="review__position">должность<span class="review__company">компания</span></span><p class="review__text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона...</p><a class="review__more" href="#">Подробнее</a></div></div></div></div></div><div class="slide" data-anchor="slide2"><div class="inner"><div class="column"><div class="review"><img class="review__photo" src="img/review-photo.jpg" alt="photo"><div class="review__desc"><h4 class="review__name">Иван Иванович</h4><span class="review__position">должность<span class="review__company">компания</span></span><p class="review__text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона...</p><a class="review__more" href="#">Подробнее</a></div></div></div><div class="column"><div class="review"><img class="review__photo" src="img/review-photo.jpg" alt="photo"><div class="review__desc"><h4 class="review__name">Иван Иванович</h4><span class="review__position">должность<span class="review__company">компания</span></span><p class="review__text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона...</p><a class="review__more" href="#">Подробнее</a></div></div></div></div></div><div class="slide" data-anchor="slide3"><div class="inner"><div class="column"><div class="review"><img class="review__photo" src="img/review-photo.jpg" alt="photo"><div class="review__desc"><h4 class="review__name">Иван Иванович</h4><span class="review__position">должность<span class="review__company">компания</span></span><p class="review__text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона...</p><a class="review__more" href="#">Подробнее</a></div></div></div><div class="column"><div class="review"><img class="review__photo" src="img/review-photo.jpg" alt="photo"><div class="review__desc"><h4 class="review__name">Иван Иванович</h4><span class="review__position">должность<span class="review__company">компания</span></span><p class="review__text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона...</p><a class="review__more" href="#">Подробнее</a></div></div></div></div></div><div class="slide" data-anchor="slide4"><div class="inner"><div class="column"><div class="review"><img class="review__photo" src="img/review-photo.jpg" alt="photo"><div class="review__desc"><h4 class="review__name">Иван Иванович</h4><span class="review__position">должность<span class="review__company">компания</span></span><p class="review__text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона...</p><a class="review__more" href="#">Подробнее</a></div></div></div><div class="column"><div class="review"><img class="review__photo" src="img/review-photo.jpg" alt="photo"><div class="review__desc"><h4 class="review__name">Иван Иванович</h4><span class="review__position">должность<span class="review__company">компания</span></span><p class="review__text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона...</p><a class="review__more" href="#">Подробнее</a></div></div></div></div></div><div class="slide" data-anchor="slide5"><div class="inner"><div class="column"><div class="review"><img class="review__photo" src="img/review-photo.jpg" alt="photo"><div class="review__desc"><h4 class="review__name">Иван Иванович</h4><span class="review__position">должность<span class="review__company">компания</span></span><p class="review__text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона...</p><a class="review__more" href="#">Подробнее</a></div></div></div><div class="column"><div class="review"><img class="review__photo" src="img/review-photo.jpg" alt="photo"><div class="review__desc"><h4 class="review__name">Иван Иванович</h4><span class="review__position">должность<span class="review__company">компания</span></span><p class="review__text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона...</p><a class="review__more" href="#">Подробнее</a></div></div></div></div></div></div></div></section><section class="section blog"><div class="outer"><div class="container"><div class="section__top"><h2 class="section__title">Журнал</h2><button class="button button--all">все статьи</button></div><div class="inner"><a class="blog__card card" href="#"><img class="card__photo" src="img/photo-card.jpg" alt="photo"><div class="card__desc"><h4 class="card__title">Заголовок</h4><p class="card__text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более ...</p><div class="card__bottom"><span class="card__date">26.03.2018</span><div class="card__more"></div></div></div></a><a class="blog__card card" href="#"><img class="card__photo" src="img/photo-card.jpg" alt="photo"><div class="card__desc"><h4 class="card__title">Заголовок</h4><p class="card__text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более ...</p><div class="card__bottom"><span class="card__date">26.03.2018</span><div class="card__more"></div></div></div></a><a class="blog__card card" href="#"><img class="card__photo" src="img/photo-card.jpg" alt="photo"><div class="card__desc"><h4 class="card__title">Заголовок</h4><p class="card__text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более ...</p><div class="card__bottom"><span class="card__date">26.03.2018</span><div class="card__more"></div></div></div></a></div></div></div></section><section class="section contacts"><div class="outer"><div class="container"><div class="section__top"><h2 class="section__title">Контакты</h2><div class="contacts__address address"><div class="contacts__icon contacts__icon--address"></div><div class="contacts__desc"><span>г. Москва,</span><span>1-й Нагатинский проезд, д.8 с.1</span></div></div><div class="contacts__phone"><div class="contacts__icon contacts__icon--phone"></div><div class="contacts__desc"><span class="contacts__text">Тел.:</span><a class="contacts__number" href="tel:+89152023372">8 (915) 202-33-72</a></div></div><div class="contacts__mail mail"><div class="contacts__icon contacts__icon--mail"></div><div class="contacts__desc"><span class="contacts__text">E-Mail:</span><a class="contacts__address" href="mailto:mike@vprosto.ru">mike@vprosto.ru</a></div></div></div><div class="inner"><div class="map"><div id="map"></div></div></div></div></div></section></div></div></body><script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAebS1vSYh_6rp0poWp6iCVh0sEryAIBEo&amp;callback=initMap" async defer><\/script></html>'}]);