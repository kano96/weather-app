(this["webpackJsonp06-react-intro"]=this["webpackJsonp06-react-intro"]||[]).push([[0],{10:function(e,t,a){e.exports={ciudadsection:"Ciudad_ciudadsection__2Bj5-",icon:"Ciudad_icon__Tikeo",name:"Ciudad_name__2RSyd",info:"Ciudad_info__32QmR",container:"Ciudad_container__KV7Ub"}},12:function(e,t,a){e.exports={cardContainer:"Card_cardContainer__1B8ir",button:"Card_button__3JwK3",city:"Card_city__2dRiV"}},13:function(e,t,a){e.exports={aboutsection:"about_aboutsection__mZXkM",aboutcontainer:"about_aboutcontainer__T64-4",title:"about_title__3Z3Mt",desc:"about_desc__1B_Mr"}},16:function(e,t,a){e.exports={searchContainer:"search_searchContainer__2IIhi",agregarinp:"search_agregarinp__3_4x8",agregarbut:"search_agregarbut__3RLIh"}},17:function(e,t,a){e.exports={logoHenry:"Nav_logoHenry__1bKcb",nav:"Nav_nav__2m5y_",title:"Nav_title__1Jhuv",about:"Nav_about__igiZ9"}},18:function(e,t,a){e.exports={cardtemp:"cardtemp_cardtemp__1OcIw",label:"cardtemp_label__eTx_C",value:"cardtemp_value__26WGq"}},25:function(e,t,a){e.exports={cards_container:"cards_cards_container__1-y_J"}},31:function(e,t,a){},32:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(22),i=a.n(c),r=(a(31),a(26)),o=a(15),s=a(2),d=(a(32),a.p+"static/media/clima.8e824915.png"),l=a(16),u=a.n(l),j=a(0);function m(e){var t=e.onSearch,a=Object(n.useState)(""),c=Object(o.a)(a,2),i=c[0],r=c[1];return Object(j.jsxs)("form",{className:u.a.searchContainer,onSubmit:function(e){e.preventDefault(),t(i),document.getElementById("search-input").value=""},children:[Object(j.jsx)("input",{type:"text",placeholder:"Ciudad",className:u.a.agregarinp,onChange:function(e){return function(e){e.preventDefault(),r(e.target.value)}(e)},id:"search-input"}),Object(j.jsx)("input",{type:"submit",className:u.a.agregarbut,value:"Agregar"})]})}var h=a(17),b=a.n(h),p=a(8);var x=function(e){var t=e.onSearch;return Object(j.jsxs)("div",{className:b.a.nav,children:[Object(j.jsxs)("div",{className:b.a.title,children:[Object(j.jsx)(p.b,{to:"/",children:Object(j.jsx)("img",{src:d,alt:"climalogo",id:"logoHenry",width:"50px"})}),Object(j.jsx)(p.b,{to:"/",style:{color:"inherit",textDecoration:"none"},children:Object(j.jsx)("h4",{children:"Weather App"})}),Object(j.jsx)(p.b,{to:"/about",style:{color:"inherit",textDecoration:"none"},children:Object(j.jsx)("span",{className:b.a.about,children:"About"})})]}),Object(j.jsx)(m,{onSearch:t})]})},_=a(18),v=a.n(_);function O(e){var t=e.label,a=e.value;return Object(j.jsxs)("div",{className:v.a.cardtemp,children:[Object(j.jsx)("label",{htmlFor:"",className:v.a.label,children:t}),Object(j.jsxs)("span",{className:v.a.value,children:[a," \xb0C"]})]})}var f=a(12),g=a.n(f);function w(e){var t=e.max,a=e.min,n=e.name,c=e.img,i=e.onClose,r=e.id;return Object(j.jsxs)("div",{className:g.a.cardContainer,children:[Object(j.jsx)("button",{onClick:function(){"function"===typeof i&&i()},className:g.a.button,children:"x"}),Object(j.jsx)(p.b,{to:"/ciudad/".concat(r),style:{textDecoration:"none",color:"inherit",gridColumn:"1 / span 3"},children:Object(j.jsx)("h5",{className:g.a.city,children:n})}),Object(j.jsx)(O,{label:"Min",value:a}),Object(j.jsx)(O,{label:"Max",value:t}),Object(j.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(c,"@2x.png"),className:g.a.icon,alt:"icono del clima",width:"50px"})]})}var C=a(7),y=a.n(C),N=a(25),k=a.n(N);function I(e){var t=e.cities,a=e.onClose;return Object(j.jsx)("div",{className:k.a.cards_container,children:t.map((function(e){return Object(j.jsx)(w,{max:e.max,min:e.min,name:e.name,img:e.img,onClose:function(){return a(e.id)},id:e.id},e.id)}))})}w.propTypes={max:y.a.number,min:y.a.number,name:y.a.string,img:y.a.string,onClick:y.a.func};var S=a(13),T=a.n(S);var A=function(){return Object(j.jsx)("div",{className:T.a.aboutsection,children:Object(j.jsxs)("div",{className:T.a.aboutcontainer,children:[Object(j.jsx)("div",{className:T.a.title,children:Object(j.jsx)("h3",{children:"About Weather Application"})}),Object(j.jsxs)("div",{className:T.a.desc,children:[Object(j.jsx)("p",{children:"This application was created with React.js, it takes the data from OpenWeather API and show it when you add a city from the search bar in the navigation bar. This project is part of the 'Soy Henry' bootcamp. Hope you enjoy it!"}),Object(j.jsx)("span",{children:"By: Kevin Torres"})]})]})})},B=a(10),M=a.n(B);var W=function(e){var t=e.city;return Object(j.jsx)("div",{className:M.a.ciudadsection,children:Object(j.jsxs)("div",{className:M.a.container,children:[Object(j.jsx)("h2",{className:M.a.name,children:t.name}),Object(j.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(t.img,"@2x.png"),className:M.a.icon,alt:"icono del clima",width:"50px"}),Object(j.jsxs)("div",{className:M.a.info,children:[Object(j.jsxs)("div",{children:["Temperatura: ",t.temp,"\xb0C"]}),Object(j.jsxs)("div",{children:["Clima: ",t.weather]}),Object(j.jsxs)("div",{children:["Viento: ",t.wind,"km/h"]}),Object(j.jsxs)("div",{children:["Cantidad de nubes: ",t.clouds]}),Object(j.jsxs)("div",{children:["Latitud: ",t.latitud,"\xb0"]}),Object(j.jsxs)("div",{children:["Longitud: ",t.longitud,"\xb0"]})]})]})})};function D(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1];function i(e){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("560b06b217ba128f58ca4a0e187e2341","&units=metric")).then((function(e){return e.json()})).then((function(e){if(void 0!==e.main){var t={min:Math.round(e.main.temp_min),max:Math.round(e.main.temp_max),img:e.weather[0].icon,id:e.id,wind:e.wind.speed,temp:e.main.temp,name:e.name,weather:e.weather[0].main,clouds:e.clouds.all,latitud:e.coord.lat,longitud:e.coord.lon};c((function(e){return[].concat(Object(r.a)(e),[t])}))}else alert("Ciudad no encontrada")}))}function d(e){var t=a.filter((function(t){return t.id===parseInt(e)}));return t.length>0?t[0]:alert("Esta ciudad no se encuentra en la lista")}function l(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(s.a,{path:"/",render:function(){return Object(j.jsx)(x,{onSearch:i})}}),Object(j.jsx)(s.a,{path:"/about",component:A}),Object(j.jsx)(s.a,{path:"/",exact:!0,render:function(){return Object(j.jsx)(I,{cities:a,onClose:l})}}),Object(j.jsx)(s.a,{path:"/ciudad/:ciudadId",render:function(e){var t=e.match;return Object(j.jsx)(W,{city:d(t.params.ciudadId)})}})]})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(j.jsx)(p.a,{children:Object(j.jsx)(D,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.e365f773.chunk.js.map