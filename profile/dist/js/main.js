!function(s){function e(e){for(var i,c,l=e[0],o=e[1],r=e[2],d=0,u=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&u.push(n[c][0]),n[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(s[i]=o[i]);for(p&&p(e);u.length;)u.shift()();return a.push.apply(a,r||[]),t()}function t(){for(var s,e=0;e<a.length;e++){for(var t=a[e],i=!0,l=1;l<t.length;l++){var o=t[l];0!==n[o]&&(i=!1)}i&&(a.splice(e--,1),s=c(c.s=t[0]))}return s}var i={},n={0:0},a=[];function c(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return s[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=s,c.c=i,c.d=function(s,e,t){c.o(s,e)||Object.defineProperty(s,e,{enumerable:!0,get:t})},c.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},c.t=function(s,e){if(1&e&&(s=c(s)),8&e)return s;if(4&e&&"object"==typeof s&&s&&s.__esModule)return s;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:s}),2&e&&"string"!=typeof s)for(var i in s)c.d(t,i,function(e){return s[e]}.bind(null,i));return t},c.n=function(s){var e=s&&s.__esModule?function(){return s.default}:function(){return s};return c.d(e,"a",e),e},c.o=function(s,e){return Object.prototype.hasOwnProperty.call(s,e)},c.p="";var l=window.webpackJsonp=window.webpackJsonp||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var r=0;r<l.length;r++)e(l[r]);var p=o;a.push([2,1]),t()}([,,function(s,e,t){t(3),t(10),t(11),s.exports=t(14)},function(s,e,t){"use strict";t.r(e);t(0);var i=t(1),n=t.n(i);t(4),t(5),t(6),t(7),t(8),t(9);n()({})},,function(s,e){particlesJS("particles",{particles:{number:{value:60,density:{enable:!0,value_area:700}},color:{value:["#aa73ff","#f4e11e","#b3eb00","#00a7e5"]},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:15}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1.5,opacity_min:.15,sync:!1}},size:{value:2.5,random:!0,anim:{enable:!0,speed:2,size_min:.15,sync:!1}},line_linked:{enable:!0,distance:110,color:"#33b1f8",opacity:.25,width:1},move:{enable:!0,speed:1.6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{enable:!0,detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:150,line_linked:{opacity:.5}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:100,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})},function(s,e,t){(function(s){s(document).ready(function(){var e=s(".profile__communication");e.on("click",function(){s(this).toggleClass("profile__communication--active")}),s(document).on("click",function(s){0===e.has(s.target).length&&e.removeClass("profile__communication--active")})})}).call(this,t(0))},function(s,e,t){(function(s){s(function(){var e=s(".panel__title"),t=s(".panel__container");e.on("click",function(){s(this).parent().toggleClass("panel--active").siblings().removeClass("panel--active"),s(this).addClass("panel__title--active").parent().siblings().children().removeClass("panel__title--active")}),t.on("click",function(){s(this).parent().hasClass("panel--active")&&(s(this).parent().removeClass("panel--active"),s(this).prev().removeClass("panel__title--active"))})})}).call(this,t(0))},function(s,e,t){(function(s){var e=s(".theme"),t=function(){document.documentElement.classList.add("transition"),window.setTimeout(function(){document.documentElement.classList.remove("transition")},1e3)};e.on("click",function(){s(this).hasClass("dark")?(t(),s(this).removeClass("dark").addClass("light"),document.documentElement.setAttribute("data-theme","light")):(t(),s(this).removeClass("light").addClass("dark"),document.documentElement.setAttribute("data-theme","dark"))}),s(".toggle-box .icon").on("click",function(){s(this).hasClass("icon--lightbulb-off")?(s(this).fadeOut(100),s(this).removeClass("icon--lightbulb-off").addClass("icon--lightbulb-on"),s(".icon--lightbulb-on use").attr("xlink:href","img/spriteSvg.svg#sprite-lightbulb-on"),s(this).fadeIn(300)):(s(this).fadeOut(100),s(this).removeClass("icon--lightbulb-on").addClass("icon--lightbulb-off"),s(".icon--lightbulb-off use").attr("xlink:href","img/spriteSvg.svg#sprite-lightbulb-off"),s(this).fadeIn(300))})}).call(this,t(0))},function(s,e){var t,i,n=document.querySelector(".wrapper"),a=document.querySelector(".container"),c=.5;document.body.onmousemove=function(s){t=s.pageX,i=s.pageY;var e=n.offsetLeft+n.clientWidth/2,l=n.offsetTop+n.clientHeight/2,o=(t-e)/(n.clientWidth/2),r=-(i-l)/(n.clientHeight/2);a.style.transform="perspective(400px) rotateY(".concat(o*c,"deg) rotateX(").concat(r*c,"deg)")},document.body.onmouseenter=function(){setTimeout(function(){a.style.transition=""},100),a.style.transition="transform 0.1s"},document.body.onmouseleave=function(){a.style.transition="transform 0.1s",setTimeout(function(){a.style.transition=""},100),a.style.transform="perspective(400px) rotateY(0deg) rotateX(0deg)"}},function(s,e,t){},function(s,e,t){var i=t(12);s.exports=function(s){var e,t="",n={},a=[];return n.icon=e=function(s,e){this&&this.block,this&&this.attributes;e?(t+="\n",t=(t+=a.join(""))+"<svg"+i.attr("class",i.classes(["icon icon--"+s+" "+e],[!0]),!1,!0)+">\n  ",t=(t+=a.join(""))+"<use"+i.attr("xlink:href","img/spriteSvg.svg#sprite-"+s,!0,!0)+"></use>\n",t+=a.join(""),t+="</svg>"):(t+="\n",t=(t+=a.join(""))+"<svg"+i.attr("class",i.classes(["icon icon--"+s],[!0]),!1,!0)+">\n  ",t=(t+=a.join(""))+"<use"+i.attr("xlink:href","img/spriteSvg.svg#sprite-"+s,!0,!0)+"></use>\n",t+=a.join(""),t+="</svg>")},n.portfolio=e=function(s,n,c){this&&this.block,this&&this.attributes;t+="\n",t=(t+=a.join(""))+'<div class="portfolio__item"><a class="portfolio__link"'+i.attr("href",s,!0,!0)+' target="_blank" rel="noopener"><span class="portfolio__title">'+i.escape(null==(e=c)?"":e)+'</span><img class="portfolio__img"'+i.attr("src",n,!0,!0)+i.attr("alt",c,!0,!0)+"></a></div>"},t=t+'<!DOCTYPE html>\n<html lang="ru-RU" data-theme="dark">\n  <head>\n    <meta charset="utf-8">\n    <title>'+i.escape(null==(e="Profile")?"":e)+'</title>\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta name="keywords" content="">\x3c!--[if lt IE 9]>\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv-printshiv.min.js"><\/script><![endif]--\x3e\n    <link href="https://fonts.googleapis.com/css?family=Exo:300,300i,400,400i,500,500i,600,600i&amp;display=swap" rel="stylesheet">\n  </head>\n  <body'+i.attr("class",i.classes(["index-page"],[!0]),!1,!0)+'>\n    <div id="particles"></div>\n    <div class="wrapper">\n      <div class="container">\n        <div class="left">\n          <div class="toggle-box">\n            <div class="languages"><span class="languages__item languages__item--en">EN</span><span class="languages__item languages__item--ua">UA</span><span class="languages__item languages__item--en">RU</span></div>\n            <div class="theme dark">',a.push("              "),n.icon("lightbulb-off"),a.pop(),t+='\n            </div>\n          </div>\n          <div class="photo"><img class="photo__pic" src="img/photo.jpg" alt="alt"></div>\n          <div class="profile">\n            <h2 class="profile__name">Igor Lukashev</h2>\n            <h3 class="profile__specialty">Junior Frontend Developer</h3>\n            <div class="profile__location location">\n              <div class="location__city">Zaporizhzhia</div>\n              <div class="location__country">Ukraine</div>\n            </div>\n            <div class="profile__communication">\n              <div class="door top"></div>\n              <div class="door bottom"></div>\n              <div class="contacts"><a class="contacts__link contacts__link--phone" href="tel:+380956010640">',a.push("                  "),n.icon("phone"),a.pop(),t+='</a><a class="contacts__link contacts__link--mail" href="mailto:motrdevua@gmail.com">',a.push("                  "),n.icon("mail"),a.pop(),t+='</a><a class="contacts__link contacts__link--github" href="https://github.com/motrdevua" target="_blank" rel="noopener">',a.push("                  "),n.icon("github"),a.pop(),t+='</a><a class="contacts__link contacts__link--skype" href="skype:fedeveloperua?call">',a.push("                  "),n.icon("telegram"),a.pop(),t+='</a><a class="contacts__link contacts__link--linkedin" href="https://www.linkedin.com/in/igor-lukashev-52b25011b/" target="_blank" rel="noopener">',a.push("                  "),n.icon("linkedin"),a.pop(),t+='</a></div>\n            </div>\n          </div>\n        </div>\n        <div class="right">\n          <div class="panel">\n            <div class="panel__title">Resume</div>\n            <div class="panel__container resume">\n              <div class="resume__objective">\n                <h4 class="resume__title">objective</h4>\n                <div class="resume__desc">\n                  <p class="resume__text">To obtain the perspective position of Junior Frontend Developer I\'m looking for a team where I can improve my skils in FE and I will make every eforts to achive best results.</p>\n                </div>\n              </div>\n              <div class="resume__education resume__education--add">\n                <h4 class="resume__title">another achievements</h4>\n                <div class="resume__desc">\n                  <p class="resume__period">Apr2017 - July2017</p>\n                  <div class="resume__about"><a class="resume__link" href="http://devchallenge.it/" target="_blank" rel="noopener"><img class="resume__picture" src="./img/logo_dev_challenge_11.svg" alt="devchallenge"></a></div>\n                  <p class="resume__level">Finalist ("Standart")</p>\n                </div>\n              </div>\n              <div class="resume__education resume__education--add">\n                <h4 class="resume__title">additional education</h4>\n                <div class="resume__desc">\n                  <p class="resume__period">Feb2016 - June2016</p>\n                  <div class="resume__about"><a class="resume__link" href="https://goit.ua/" target="_blank" rel="noopener"><img class="resume__picture" src="./img/logo_goit.png" alt="goit"></a></div>\n                  <p class="resume__level">Junior Spicialist</p>\n                </div>\n              </div>\n              <div class="resume__education">\n                <h4 class="resume__title">education</h4>\n                <div class="resume__desc resume__desc--university">\n                  <p class="resume__period">2009 - 2014</p>\n                  <div class="resume__about"><span class="resume__institution">Donetsk State University of Management</span><span class="resume__speciality">Foreign-Economic Activity Expert</span></div>\n                  <p class="resume__level">Bachelor\'s degree</p>\n                </div>\n                <div class="resume__desc">\n                  <p class="resume__period">2009 - 2013</p>\n                  <div class="resume__about"><span class="resume__institution">Kharkiv State Automobile and Road Technical School</span><span class="resume__speciality">Maintenance and repair conveyor, building and road machines and equipment</span></div>\n                  <p class="resume__level">Junior Specialist</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class="panel">\n            <div class="panel__title">Skills</div>\n            <div class="panel__container skills">\n              <div class="skills__tech">\n                <h4 class="skills__title">Tech skills</h4>\n                <div class="skills__item">',a.push("                  "),n.icon("check"),a.pop(),t+='<span class="skills__desc">Strong knowledges of HTML5, CSS3.</span>\n                </div>\n                <div class="skills__item">',a.push("                  "),n.icon("check"),a.pop(),t+='<span class="skills__desc">To increase speed of work I use templating engine PUG and CSS preprocessor SASS.</span>\n                </div>\n                <div class="skills__item">',a.push("                  "),n.icon("check"),a.pop(),t+='<span class="skills__desc">Experience in responsive, cross-browser and pixel-perfect frontend creation.</span>\n                </div>\n                <div class="skills__item">',a.push("                  "),n.icon("check"),a.pop(),t+='<span class="skills__desc">Understanding of building process using such tools like Gulp, Webpack, npm, yarn.</span>\n                </div>\n                <div class="skills__item">',a.push("                  "),n.icon("check"),a.pop(),t+='<span class="skills__desc">Javascript, jQuery.</span>\n                </div>\n                <div class="skills__item">',a.push("                  "),n.icon("check"),a.pop(),t+='<span class="skills__desc">Version control systems, such as Git.</span>\n                </div>\n                <div class="skills__item">',a.push("                  "),n.icon("check"),a.pop(),t+='<span class="skills__desc">Basic knowledges of Photoshop, Illustrator, Adobe XD, Sketch, Avocode.</span>\n                </div>\n                <div class="skills__item">',a.push("                  "),n.icon("check"),a.pop(),t+='<span class="skills__desc">Editor: VSCode.</span>\n                </div>\n                <div class="skills__item">',a.push("                  "),n.icon("check"),a.pop(),t+='<span class="skills__desc">OS: MacOs, Windows.</span>\n                </div>\n                <div class="skills__item">',a.push("                  "),n.icon("check"),a.pop(),t+='<span class="skills__desc">Knowledge of English at the Pre-Intermediate level</span>\n                </div>\n              </div>\n              <div class="skills__logos">',a.push("                "),n.icon("html5"),a.pop(),a.push("                "),n.icon("css3"),a.pop(),a.push("                "),n.icon("javascript"),a.pop(),a.push("                "),n.icon("jquery"),a.pop(),a.push("                "),n.icon("sass"),a.pop(),t+='\n                <div class="icon icon--pug"><svg xmlns="http://www.w3.org/2000/svg" id="pug" viewBox="0 0 128 128"><style>.st1{fill:#efcca3}.st3{fill:#ccac8d}.st4{fill:#fff}.st7{fill:#56332b}.st8{fill:#442823}.st9{fill:#7f4a41}.st10{fill:#331712}</style><path d="M107.4 50.9c-.2-4.4.4-8.3-1.6-11.6-4.8-8.2-16.8-13-40.8-13v.7h-.5.5v-.7c-24 0-36.6 4.8-41.4 13.1-1.9 3.4-1.7 7.2-2 11.6-.2 3.5-1.8 7.2-1.1 11.2.8 5.2 1.1 10.4 1.9 15.2.6 3.9 6 7.2 6.5 10.9 1.4 10.2 12 14.9 36 14.9v.8h-.6.7v-.8c24 0 34.2-4.7 35.5-14.9.5-3.8 5.5-7 6.1-10.9.8-4.8 1.1-10 1.9-15.2.7-4-.9-7.8-1.1-11.3z" class="st1"/><path d="M64.6 54.5c4.3.1 7.3 2.8 10.1 5.3 3.3 2.9 8.9 4.9 11.2 7.4 2.3 2.5 5.3 5 6.4 8.9 1.1 3.9 1.4 8.9 1.4 10.2 0 1.3.7 1 2.7 0 4.7-2.3 9.9-8.5 9.9-8.5-.6 3.9-5.7 7.4-6.2 11.1C98.9 99.1 89 104 64.5 104h-.1.6" class="st3"/><path d="M80.4 46.7c.9 3.1 4.1 13.6-2.1 10.1 0 0 2.6 1.5 4.2 7.2 1.7 5.7 5.8 6.4 5.8 6.4s6.7 1.3 11.7-3c4.2-3.6 4.9-10 3.1-14.9-1.8-4.8-5-6.3-9.7-7.3-4.7-1.1-14.1-2-13 1.5z" class="st3"/><circle cx="92.3" cy="58.1" r="8.8"/><circle cx="90" cy="54.2" r="2.3" class="st4"/><path d="M78.9 57.7s7.9 5.4 12.2 10.7c4.3 5.3 4.2 6.3 4.2 6.3l-3.1 1.4s-4.4-8.3-9.8-11.4c-5.5-3.1-6.1-5.7-6.1-5.7l2.6-1.3z" class="st1"/><path d="M64.9 54.5c-4.3.1-7.5 2.8-10.4 5.3-3.3 2.9-9.1 4.9-11.4 7.4-2.3 2.5-5.4 5-6.5 8.9-1.1 3.9-1.5 8.9-1.5 10.2 0 1.3.2 1.4-2.7 0-4.7-2.2-9.9-8.5-9.9-8.5.6 3.9 5.7 7.4 6.2 11.1C30.1 99.1 40 104 64.5 104h.5" class="st3"/><path d="M88.1 71.4C83.3 65.5 75.6 60 64.9 60h-.1c-10.7 0-18.4 5.5-23.2 11.4-5 6.1-4.6 8.5-4.6 14.3 0 21 7.4 15 12.3 17.6 5 2.5 10.2 1.7 15.5 1.7h.1c5.4 0 10.5.7 15.5-1.8 4.9-2.5 12.3 3.7 12.3-17.3.1-5.8.4-8.4-4.6-14.5z" class="st7"/><path d="M64.4 65.2s-.7 9.7-2.1 11.6l2.6-.6-.5-11z" class="st8"/><path d="M65.1 65.2s.7 9.7 2.1 11.6l-2.6-.6.5-11z" class="st8"/><path d="M56.7 62.9c-1-2.3 2.6-6 8.3-6.1 5.7 0 9.3 3.7 8.3 6.1-1 2.4-4.6 3.1-8.3 3.2-3.6-.1-7.3-.8-8.3-3.2z" class="st7"/><path d="M65 65.2c0-.4 3.4-.5 5.2-1.7 0 0-3.7 1.2-4.5.7-.8-.4-1-1.6-1-1.6s-.3 1.2-.9 1.6c-.7.4-4.9-.7-4.9-.7s5.6 1.4 5.6 1.7c0 .3-.1 1.3-.1 2 0 2.5 0 8.7.4 9.2.6.9.4-6.7.4-9.2-.1-.8-.1-1.6-.2-2z"/><path d="M65.2 78.6c1.7 0 4.7 1.2 7.4 3.1-2.6-2.9-5.7-4.9-7.4-4.9-1.8 0-5.6 2.2-8.3 5.4 2.8-2.2 6.4-3.6 8.3-3.6z" class="st9"/><path d="M64.5 96.3c-3.8 0-7.5-1.2-10.9-2.1-.7-.2-1.4.3-2.1.1-6.3-2-11.4-5.4-14.5-9.7v1c0 21 7.4 15.1 12.3 17.6 5 2.5 10.2 1.7 15.5 1.7h.1c5.4 0 10.5.7 15.5-1.8 4.9-2.5 12.3 3.6 12.3-17.4 0-.8 0-1.6.1-2.3-2.9 4.7-8.2 8.4-14.8 10.6-.6.2-2-.3-2.6-.2-3.6 1.2-6.8 2.5-10.9 2.5z" class="st8"/><path d="M55 85s-2.5 7.5-.8 10.8l-2.3-1s1.7-7.6 3.1-9.8zM74.8 85s2.5 7.5.8 10.8l2.3-1s-1.8-7.6-3.1-9.8z" class="st8"/><path d="M48.6 46.7c-.9 3.1-4.1 13.6 2.1 10.1 0 0-2.6 1.5-4.2 7.2s-5.8 6.4-5.8 6.4-6.7 1.3-11.7-3c-4.2-3.6-4.9-10-3.1-14.9s5-6.3 9.7-7.3c4.7-1.1 14-2 13 1.5z" class="st3"/><path d="M64.9 76.8c2.7 0 11.1 5.8 11.2 12.9v-.4c0-7.4-6.8-13.3-11.2-13.3-4.4 0-11.2 6-11.2 13.3v.4c.1-7.1 8.5-12.9 11.2-12.9z"/><ellipse cx="66.7" cy="61.5" class="st10" rx=".8" ry="1.5" transform="rotate(-14.465 66.712 61.468)"/><ellipse cx="62.4" cy="61.5" class="st10" rx=".8" ry="1.5" transform="rotate(17.235 62.371 61.462)"/><circle cx="37.2" cy="58.1" r="8.8"/><circle cx="39.5" cy="54.2" r="2.3" class="st4"/><path d="M67.5 58.2c0-.1-2.3 1-2.9 1.1-.6-.1-2.9-1.2-2.9-1.1h5.8z" class="st9"/><path d="M50 57.7s-7.9 5.4-12.2 10.7c-4.3 5.3-4.2 6.3-4.2 6.3l3.1 1.4s4.4-8.3 9.8-11.4 6.1-5.7 6.1-5.7L50 57.7z" class="st1"/><path d="M32.7 41.7S30 49.1 24 52.2c0 0 9.4-1.1 8.7-10.5zM95.8 41.7s2.7 7.4 8.7 10.5c0 0-9.4-1.1-8.7-10.5zM78.7 55.5s-5.9-6.2-13.8-6.4h.1.1c-8 .2-13.8 6.4-13.8 6.4 6.9-4.8 12.8-4.7 13.8-4.7-.1 0 6.7-.1 13.6 4.7zM71.8 42.5s-3-4.2-7-4.3h.2c-3 .1-6.9 4.3-6.9 4.3 3.4-3.3 6.9-3.2 6.9-3.2s3.3-.1 6.8 3.2zM37.2 73.2s-4.7 2.3-8.1.9H29c-3-1.7-4.5-6.8-4.5-6.8s3 9 12.7 5.9zM92 73.2s4.7 2.3 8.1.9c4-1.7 4.6-6.8 4.6-6.8s-3 9-12.7 5.9z" class="st3"/><path d="M42.6 41.2c2.6-.5 6.9-.6 10.3.5 4.3 1.5.8 7 1.7 7.3.9.3 2.1-3.8 10.1-3.4 8.1.4 9 4 10.1 3.4s-1.1-10 11-7.8c0 0-12.7-3.4-12.1 5.8 0 0-7.3-5.6-17.5-.6.1 0 2.7-8.6-13.6-5.2zM86.9 41.2c.2 0 .3.1.4.1.1 0-.1-.1-.4-.1zM86.9 41.2zM39.1 28.9S28.3 42.5 26.7 47.7c-1.6 5.3-2.8 27-4.2 30.1l-5-21.4 9.2-22.3 12.4-5.2zM89.9 28.9s10.8 13.6 12.4 18.8c1.6 5.3 2.8 27 4.2 30.1l5-21.4-9.2-22.3-12.4-5.2z" class="st3"/><path d="M89.4 28.9s11.6 9.7 15 20.9c3.4 11.2 2 24.8 4.6 26.5 3.7 2.4 7.9-11.9 9.3-13.4 2.2-2.4 9.5-8.5 10-9.6.5-1.1-14.8-17.8-21.5-21.1-8.1-3.8-18.1-4.1-17.4-3.3z" class="st7"/><path d="M99.3 34.9s13.7 17.5 13.5 39.3l5.5-11.2c-.1 0-4.9-14.3-19-28.1z" class="st8"/><path d="M39.1 28.9s-11.6 9.7-15 20.9-2 24.8-4.6 26.5c-3.7 2.4-7.9-11.9-9.3-13.4C8 60.5.7 54.4.2 53.3-.3 52.2 15 35.5 21.7 32.2c8.1-3.8 18.1-4.1 17.4-3.3z" class="st7"/><path d="M29.2 34.9S15.5 52.4 15.7 74.2L10.3 63s4.8-14.3 18.9-28.1z" class="st8"/><path d="M21.8 74.6s1 5.4 2.6 7.1.5-1.3.5-1.3-1.7-.9-1.4-7.8-1.7 2-1.7 2zM107.1 74.6s-1 5.4-2.6 7.1-.5-1.3-.5-1.3 1.7-.9 1.4-7.8 1.7 2 1.7 2z" class="st3"/><g><circle cx="54.5" cy="70.5" r=".8" class="st8"/><circle cx="49.9" cy="75.3" r=".8" class="st8"/><circle cx="48.4" cy="70.5" r=".8" class="st8"/></g><g><circle cx="74" cy="70.5" r=".8" class="st8"/><circle cx="78.6" cy="75.3" r=".8" class="st8"/><circle cx="80.1" cy="70.5" r=".8" class="st8"/></g></svg></div>',a.push("                "),n.icon("bootstrap"),a.pop(),a.push("                "),n.icon("gulp"),a.pop(),a.push("                "),n.icon("webpack"),a.pop(),a.push("                "),n.icon("npm"),a.pop(),a.push("                "),n.icon("git"),a.pop(),a.push("                "),n.icon("vscode"),a.pop(),t+='\n              </div>\n            </div>\n          </div>\n          <div class="panel">\n            <div class="panel__title">Portfolio</div>\n            <div class="panel__container portfolio">',a.push("              "),n.portfolio("https://marketplace.visualstudio.com/items?itemName=motrdevua.milkyway","./img/screens/milkyway.jpg","Milky Way"),a.pop(),a.push("              "),n.portfolio("https://motrdevua.github.io/portfolio/mogo/dist/","./img/screens/mogo.jpg","MoGo"),a.pop(),a.push("              "),n.portfolio("https://motrdevua.github.io/portfolio/tourism/dist/","./img/screens/tourism.jpg","Tourism"),a.pop(),a.push("              "),n.portfolio("https://motrdevua.github.io/portfolio/vprosto/dist/","./img/screens/vprosto.jpg","Всё просто"),a.pop(),a.push("              "),n.portfolio("https://motrdevua.github.io/portfolio/marvel/dist/","./img/screens/marvel.jpg","Marvel"),a.pop(),t+="\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </body>\n</html>"}},,function(s,e){}]);