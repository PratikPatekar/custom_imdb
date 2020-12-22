(this.webpackJsonpcustom_imdb=this.webpackJsonpcustom_imdb||[]).push([[0],{37:function(n,e,t){},46:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t(1),c=t(24),a=t.n(c),o=t(10),l=(t(37),t(4)),s=t(6),d=t(3),u=t(2);function b(){var n=Object(d.a)(["\n  margin: 0 10px;\n  padding: 3px 15px;\n  position: relative;\n  text-decoration: none;\n  color: ",";\n  &.active {\n    color: ",';\n    &:after {\n      content: "";\n      position: absolute;\n      display: block;\n      height: 2px;\n      left: 0%;\n      bottom: 0;\n      background-color: ',";\n      animation: slide-in 0.3s ease-in forwards;\n      @keyframes slide-in {\n        from {\n          left: 50%;\n          width: 0;\n        }\n        to {\n          left: 0%;\n          width: 100%;\n        }\n      }\n    }\n  }\n"]);return b=function(){return n},n}function j(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin: 0 0 30px;\n  padding: 0;\n"]);return j=function(){return n},n}var g=u.b.ul(j()),p=Object(u.b)(o.b)(b(),(function(n){return n.theme.mainColors.gray}),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue})),m=[{to:"/",text:"Home"},{to:"/starred",text:"Starred"}];function h(){var n=Object(l.f)();return Object(r.jsx)("div",{children:Object(r.jsx)(g,{children:m.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)(p,{to:e.to,className:e.to===n.pathname?"active":"",children:e.text})},e.to)}))})})}var D=Object(i.memo)(h);function f(){var n=Object(d.a)(["\n  text-align: center;\n  margin: 0 0 40px;\n\n  h1 {\n    color: ",";\n    letter-spacing: 10px;\n    text-transform: uppercase;\n    margin: 0 0 10px;\n  }\n\n  p {\n    color: ",";\n    margin: 0;\n  }\n"]);return f=function(){return n},n}var x=u.b.div(f(),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.dark}));function w(n){var e=n.title,t=n.subtitle;return Object(r.jsxs)(x,{children:[Object(r.jsx)("h1",{children:e}),Object(r.jsx)("p",{children:t})]})}var v=Object(i.memo)(w);var O=function(n){var e=n.children;return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{children:[Object(r.jsx)(v,{title:"Custom IMDB",subtitle:"Are you looking for a movie or an actor ?"}),Object(r.jsx)(D,{}),e]})})},y=t(22),A=t.n(y),X=t(28),S=function(){var n=Object(X.a)(A.a.mark((function n(e){var t;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("https://api.tvmaze.com").concat(e)).then((function(n){return n.json()}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),k=t(29),N=t.n(k);function C(){var n=Object(d.a)(["\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  background-color: ",";\n  clip-path: polygon(\n    50% 0%,\n    61% 35%,\n    98% 35%,\n    68% 57%,\n    79% 91%,\n    50% 70%,\n    21% 91%,\n    32% 57%,\n    2% 35%,\n    39% 35%\n  );\n"]);return C=function(){return n},n}function W(){var n=Object(d.a)(["\n  width: 300px;\n  height: 100%;\n  margin: 0 15px 40px;\n\n  .img-wrapper {\n    width: 100%;\n    border-radius: 40px;\n    height: 420px;\n    overflow: hidden;\n    border: 1px solid #ddd;\n\n    img {\n      object-fit: cover;\n      height: 100%;\n      width: 100%;\n    }\n  }\n\n  h1 {\n    margin: 10px 0;\n    font-size: 21px;\n  }\n\n  p {\n    margin: 0;\n  }\n"]);return W=function(){return n},n}function L(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n"]);return L=function(){return n},n}var B=Object(u.b)(N.a)(L()),V=u.b.div(W()),Q=u.b.div(C(),(function(n){return n.active?"#ffc806":"#ddd"}));function H(){var n=Object(d.a)(["\n  .btns {\n    margin-top: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    a {\n      text-decoration-color: #000;\n      color: #000;\n      &:hover {\n        text-decoration-color: blue;\n        color: blue;\n      }\n    }\n    button {\n      outline: none;\n      border: 1px solid #8e8e8e;\n      border-radius: 15px;\n      padding: 5px 20px;\n      background-color: #fff;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n"]);return H=function(){return n},n}var q=Object(u.b)(V)(H()),J=function(n){var e=n.id,t=n.image,i=n.name,c=n.summary,a=n.onStarClick,l=n.isStarred,s=c?"".concat(c.split(" ").slice(0,10).join(" ").replace(/<.+?>/g,""),"..."):"No description";return Object(r.jsxs)(q,{children:[Object(r.jsx)("div",{className:"img-wrapper",children:Object(r.jsx)("img",{src:t,alt:"show"})}),Object(r.jsx)("h1",{children:i}),Object(r.jsx)("p",{children:s}),Object(r.jsxs)("div",{className:"btns",children:[Object(r.jsx)(o.b,{to:"/show/".concat(e),children:"Read more"}),Object(r.jsx)("button",{type:"button",onClick:a,children:Object(r.jsx)(Q,{active:l})})]})]})},E=Object(i.memo)(J),T="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAEUCAMAAABUNq4iAAAC1lBMVEXm5uYAAAD/tgD/lgD/lwD/lgD/lwD/lwD/lgD/lgD/lgD/lwD/mAD/mwD/vwD/lgD/lwD/lgD/mQD/lwD/lwD/mgD/lwD/lwD/qgD/lwD//wD/lgD/nQD/lgD/lgD/lwD/lwD/lwD/lwD/lgD/lgD/lwD/lgD/lwD/lwD/lgD/lwD/qgD/lgD/lwD/mQD/qgD/lgD/nQD/mAD/lwD/mgD/lwD/ogD/oQD/lwD/lwD/mQD/lwD/lgD/mQD/mAD/lwD/lgD/mAD/lgD/mAD/lgD/lwD/lwD/lwD/lwD/pAD/lgD/lwD/lgD/lgD/lwD/lwD/mAD/lwD/lgD/mQD/lwD/lwD/mQD/mQD/nwD/lgD/lwD/lgD/mgD/lgD/lwD/lwD/lgD/nwD/ngD/lgD/lwD/lgD/lwD/lgD//wD/lgD/lgD/mAD/mQD/qgD/lgD/mwD/mAD/mgD/mQD/lwD/lgD/lwD/mQD/lwD/lwD/mAD/lgD/nAD/lwD/mwD/lwD/mAD/lgD/lgD/lgD/lwD/lwD/mQD/lgD/lwD/lwD/lwD/lwD/lgD/mQD/mAD/lwD/nAD/lgD/lwD/mAD/mwD/lwD/lwD/mAD/lgD/lwD/lgD/lgD/lwD/lwD/mgD/ngD/mAD/mQD/mAD/mQD/lwD/mAD/lgD/lwD/mAD/lwD/lwD/lwD/lgD/lwD/lwD/lwD/lwD/mgD/lgD/lgD/lwD/mAD/lwD/lwD/lgD/lwD/lgD/lwD/mAD/lwD/lgD/lwD/lwD/mAD/mAD/lwD/lwD/lgD/lwD/mAD/lgD/lgD/lgD/lgD/lgD/mAD/nwD/lwD/lwD/lwD/lwD/lwD/lgD/lwD/lwD/lwD/mwD/lwD/lwD/lgD/mAD/lwD/lgD/lgD/lgD/lwD/lgD/mAD/lwD/lwD/lwD/mAD/nAD/lwD/mAD/lgD/lwD/mQD/mAD/lwD/lgD/lgD/lwB92HTLAAAA8nRSTlP/AAdJmMzm/P/23cF+LgRmwjgezpM16bwMsAF8GpfuQnaQ8qqSldH+pvt4CTPJQQa7DXmpMJELE9BHMrXIBWG68y/UTREbYOGsDrKATvH5iUhA7yjY4y0jEFWF6j/ibn+hCB09W/1dcAKGz1dGA4spKitQnbRYN8vV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",K=t(12),R=t(30);function U(n,e){switch(e.type){case"ADD":return[].concat(Object(R.a)(n),[e.showId]);case"REMOVE":return n.filter((function(n){return n!==e.showId}));default:return n}}function Z(n,e,t){var r=Object(i.useReducer)(n,e,(function(n){var e=localStorage.getItem(t);return e?JSON.parse(e):n})),c=Object(s.a)(r,2),a=c[0],o=c[1];return Object(i.useEffect)((function(){localStorage.setItem(t,JSON.stringify(a))}),[a,t]),[a,o]}function M(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"shows";return Z(U,[],n)}var z=function(n,e){switch(e.type){case"FETCH_SUCCESS":return{isLoading:!1,error:null,show:e.show};case"FETCH_FAILED":return Object(K.a)(Object(K.a)({},n),{},{isLoading:!1,error:e.error});default:return n}};var F=function(n){var e=n.data,t=M(),c=Object(s.a)(t,2),a=c[0],o=c[1];return Object(r.jsx)(B,{children:e.map((function(n){var e=n.show,t=a.includes(e.id),c=Object(i.useCallback)((function(){o(t?{type:"REMOVE",showId:e.id}:{type:"ADD",showId:e.id})}),[t,e.id]);return Object(r.jsx)(E,{id:e.id,name:e.name,image:e.image?e.image.medium:T,summary:e.summary,onStarClick:c,isStarred:t},e.id)}))})};function G(){var n=Object(d.a)(["\n  .deathday {\n    margin: 0;\n    margin-top: 15px;\n    font-weight: bold;\n  }\n"]);return G=function(){return n},n}var P=Object(u.b)(V)(G()),Y=function(n){var e=n.image,t=n.name,i=n.gender,c=n.country,a=n.birthday,o=n.deathday;return Object(r.jsxs)(P,{children:[Object(r.jsx)("div",{className:"img-wrapper",children:Object(r.jsx)("img",{src:e,alt:"actor"})}),Object(r.jsxs)("h1",{children:[t," ",i?"(".concat(i,")"):null]}),Object(r.jsx)("p",{children:c?"Comes from ".concat(c):"No country known"}),a?Object(r.jsxs)("p",{children:["Born ",a]}):null,Object(r.jsx)("p",{className:"deathday",children:o?"Died ".concat(o):"Alive"})]})},I=function(n){var e=n.data;return Object(r.jsx)(B,{children:e.map((function(n){var e=n.person;return Object(r.jsx)(Y,{name:e.name,country:e.country?e.country.name:null,birthday:e.birthday,deathday:e.deathday,gender:e.gender,image:e.image?e.image.medium:T},e.id)}))})};function _(){var n=Object(d.a)(["\n  text-align: center;\n  margin-bottom: 35px;\n\n  button {\n    color: #fff;\n    background-color: ",";\n    margin: auto;\n    padding: 10px 50px;\n    font-size: 15px;\n    border: none;\n    outline: none;\n    border-radius: 12px;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"]);return _=function(){return n},n}function $(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 20px 0;\n\n  div {\n    margin: 0 15px;\n  }\n"]);return $=function(){return n},n}function nn(){var n=Object(d.a)(['\n  display: block;\n  font-family: "Roboto", sans-serif;\n  width: 200px;\n  margin: auto;\n  outline: none;\n  padding: 13px 15px;\n  border: 1px solid #dbdbdb;\n  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);\n  font-size: 14px;\n  border-radius: 12px;\n  color: #8d8d8d;\n\n  &::placeholder {\n    font-weight: 300;\n    color: #8d8d8d;\n  }\n']);return nn=function(){return n},n}var en=u.b.input(nn()),tn=u.b.div($()),rn=u.b.div(_(),(function(n){return n.theme.mainColors.blue})),cn=t(31);function an(){var n=Object(d.a)(["\n  display: block;\n  position: relative;\n  padding-left: 25px;\n  cursor: pointer;\n  font-size: 13px;\n  user-select: none;\n  font-weight: 700;\n  line-height: 1.65;\n\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  span {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 16px;\n    width: 16px;\n    background-color: #fff;\n    border: 2px solid ",";\n    border-radius: 50%;\n  }\n\n  input:checked ~ span {\n    background-color: #fff;\n    border: 2px solid ",';\n  }\n\n  span:after {\n    content: "";\n    position: absolute;\n    display: none;\n  }\n\n  input:checked ~ span:after {\n    display: block;\n  }\n\n  span:after {\n    top: 4px;\n    left: 4px;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: ',";\n  }\n"]);return an=function(){return n},n}var on=u.b.label(an(),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue})),ln=function(n){var e=n.label,t=Object(cn.a)(n,["label"]);return Object(r.jsxs)(on,{htmlFor:t.id,children:[e,Object(r.jsx)("input",Object(K.a)(Object(K.a)({},t),{},{type:"radio"})),Object(r.jsx)("span",{})]})},sn=Object(i.memo)(ln),dn=function(n){return n&&0===n.length?Object(r.jsx)("div",{children:"No Results"}):n&&n.length>0?n[0].show?Object(r.jsx)(F,{data:n}):Object(r.jsx)(I,{data:n}):null},un=function(){var n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lastQuery",e=Object(i.useState)((function(){var e=sessionStorage.getItem(n);return e?JSON.parse(e):""})),t=Object(s.a)(e,2),r=t[0],c=t[1],a=Object(i.useCallback)((function(e){c(e),sessionStorage.setItem(n,JSON.stringify(e))}),[n]);return[r,a]}(),e=Object(s.a)(n,2),t=e[0],c=e[1],a=Object(i.useState)(null),o=Object(s.a)(a,2),l=o[0],d=o[1],u=Object(i.useState)("shows"),b=Object(s.a)(u,2),j=b[0],g=b[1],p="shows"===j,m=function(){S("/search/".concat(j,"?q=").concat(t)).then((function(n){d(n)}))},h=Object(i.useCallback)((function(n){c(n.target.value)}),[c]),D=Object(i.useCallback)((function(n){g(n.target.value)}),[]);return Object(r.jsxs)(O,{children:[Object(r.jsx)(en,{type:"text",placeholder:"Search for something",onChange:h,onKeyDown:function(n){13===n.keyCode&&m()},value:t}),Object(r.jsxs)(tn,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(sn,{label:"Shows",id:"shows-search",value:"shows",checked:p,onChange:D})}),Object(r.jsx)("div",{children:Object(r.jsx)(sn,{label:"Actors",id:"actors-search",value:"people",checked:!p,onChange:D})})]}),Object(r.jsx)(rn,{children:Object(r.jsx)("button",{type:"button",onClick:m,children:"Search"})}),dn(l)]})};var bn=function(){var n=M(),e=Object(s.a)(n,1)[0],t=Object(i.useState)(null),c=Object(s.a)(t,2),a=c[0],o=c[1],l=Object(i.useState)(!0),d=Object(s.a)(l,2),u=d[0],b=d[1],j=Object(i.useState)(null),g=Object(s.a)(j,2),p=g[0],m=g[1];return Object(i.useEffect)((function(){if(e&&e.length>0){var n=e.map((function(n){return S("/shows/".concat(n))}));Promise.all(n).then((function(n){return n.map((function(n){return{show:n}}))})).then((function(n){o(n),b(!1)})).catch((function(n){m(n.message),b(!1)}))}else b(!1)}),[e]),Object(r.jsxs)(O,{children:[u&&Object(r.jsx)("div",{children:"Shows are still loading"}),p&&Object(r.jsxs)("div",{children:["Error occured: ",p]}),!u&&!a&&Object(r.jsx)("div",{children:"No shows were added"}),!u&&!p&&a&&Object(r.jsx)(F,{data:a})]})};function jn(){var n=Object(d.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  .cast-item {\n    flex: 1 0 50%;\n    display: flex;\n    margin-bottom: 20px;\n    align-items: center;\n\n    @media only screen and (max-width: 768px) {\n      flex: 1 0 100%;\n    }\n  }\n\n  .pic-wrapper {\n    width: 50px;\n    min-width: 50px;\n    height: 50px;\n    overflow: hidden;\n    border-radius: 50%;\n    img {\n      object-fit: cover;\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .actor {\n    margin-left: 25px;\n\n    .bold {\n      font-weight: bold;\n    }\n  }\n"]);return jn=function(){return n},n}var gn=u.b.div(jn()),pn=function(n){var e=n.cast;return Object(r.jsx)(gn,{children:e.map((function(n,e){var t=n.person,i=n.character,c=n.voice;return Object(r.jsxs)("div",{className:"cast-item",children:[Object(r.jsx)("div",{className:"pic-wrapper",children:Object(r.jsx)("img",{src:t.image?t.image.medium:T,alt:"cast-person"})}),Object(r.jsx)("div",{className:"actor",children:Object(r.jsxs)("span",{children:[Object(r.jsx)("span",{className:"bold",children:t.name})," | ",i.name," ",c?"| Voice":""]})})]},e)}))})};function mn(){var n=Object(d.a)(["\n  p {\n    margin: 5px 0;\n\n    span {\n      font-weight: bold;\n    }\n  }\n"]);return mn=function(){return n},n}var hn=u.b.div(mn()),Dn=function(n){var e=n.status,t=n.premiered,i=n.network;return Object(r.jsxs)(hn,{children:[Object(r.jsxs)("p",{children:["Status: ",Object(r.jsx)("span",{children:e})]}),Object(r.jsxs)("p",{children:["Premiered ",t," ",i?"on ".concat(i.name):null]})]})};function fn(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n\n  .season-item {\n    display: flex;\n    align-items: center;\n    margin: 10px 0;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n\n    .left {\n      flex: 0 0 30%;\n      border-right: 1px solid #b0b0b0;\n      padding-right: 20px;\n    }\n\n    .right {\n      padding-left: 20px;\n      flex: 1;\n    }\n  }\n"]);return fn=function(){return n},n}function xn(){var n=Object(d.a)(["\n  p {\n    margin: 5px 0;\n  }\n\n  span {\n    font-weight: 700;\n  }\n"]);return xn=function(){return n},n}var wn=u.b.div(xn()),vn=u.b.div(fn()),On=function(n){var e=n.seasons;return Object(r.jsxs)(wn,{children:[Object(r.jsxs)("p",{children:["Seasons in total: ",Object(r.jsx)("span",{children:e.length})]}),Object(r.jsxs)("p",{children:["Episodes in total:"," ",Object(r.jsx)("span",{children:e.reduce((function(n,e){return n+e.episodeOrder}),0)})]}),Object(r.jsx)(vn,{children:e.map((function(n){return Object(r.jsxs)("div",{className:"season-item",children:[Object(r.jsxs)("div",{className:"left",children:[Object(r.jsxs)("p",{children:["Season ",n.number]}),Object(r.jsxs)("p",{children:["Episodes: ",Object(r.jsx)("span",{children:n.episodeOrder})]})]}),Object(r.jsxs)("div",{className:"right",children:["Aired:"," ",Object(r.jsxs)("span",{children:[n.premiereDate," - ",n.endDate]})]})]},n.id)}))})]})};function yn(){var n=Object(d.a)(["\n  display: inline-flex;\n  flex-wrap: wrap;\n\n  span {\n    margin: 6px;\n    margin-bottom: 0;\n    color: blue;\n    background-color: #d0c9ff;\n    padding: 3px 13px;\n    border-radius: 20px;\n    font-size: 14px;\n  }\n"]);return yn=function(){return n},n}function An(){var n=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n\n  h1 {\n    margin: 0;\n    border-right: 1px solid #ddd;\n    padding-right: 25px;\n    margin-right: 20px;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n    span {\n      margin-left: 10px;\n    }\n  }\n"]);return An=function(){return n},n}function Xn(){var n=Object(d.a)(["\n  display: flex;\n  margin-bottom: 40px;\n\n  img {\n    min-width: 250px;\n    width: 300px;\n    max-height: 450px;\n    border: 1px solid #ddd;\n    border-radius: 40px;\n  }\n\n  .text-side {\n    margin-left: 20px;\n    .summary {\n      color: #5f5f5f;\n      line-height: 1.5;\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    flex-wrap: wrap;\n    img {\n      margin-bottom: 20px;\n      margin: auto;\n    }\n    .text-side {\n      margin-left: 0;\n      margin-top: 20px;\n    }\n  }\n"]);return Xn=function(){return n},n}var Sn=u.b.div(Xn()),kn=u.b.div(An()),Nn=u.b.div(yn()),Cn=function(n){var e=n.name,t=n.rating,i=n.summary,c=n.tags,a=n.image;return Object(r.jsxs)(Sn,{children:[Object(r.jsx)("img",{src:a?a.original:T,alt:"show-cover"}),Object(r.jsxs)("div",{className:"text-side",children:[Object(r.jsxs)(kn,{children:[Object(r.jsx)("h1",{children:e}),Object(r.jsxs)("div",{children:[Object(r.jsx)(Q,{active:!0}),Object(r.jsx)("span",{children:t.average||"N/A"})]})]}),Object(r.jsx)("div",{className:"summary",dangerouslySetInnerHTML:{__html:i}}),Object(r.jsxs)("div",{children:["Tags:"," ",Object(r.jsx)(Nn,{children:c.map((function(n,e){return Object(r.jsx)("span",{children:n},e)}))})]})]})]})};function Wn(){var n=Object(d.a)(["\n  margin-bottom: 40px;\n  h2 {\n    margin: 0;\n    margin-bottom: 30px;\n    font-size: 22px;\n  }\n"]);return Wn=function(){return n},n}function Ln(){var n=Object(d.a)(["\n  padding: 0 20px;\n\n  @media only screen and (min-width: 516px) {\n    padding: 0 40px;\n  }\n\n  @media only screen and (min-width: 768px) {\n    padding: 0 60px;\n  }\n\n  @media only screen and (min-width: 992px) {\n    padding: 0 80px;\n  }\n"]);return Ln=function(){return n},n}var Bn=u.b.div(Ln()),Vn=u.b.div(Wn()),Qn=function(){var n=function(n){var e=Object(i.useReducer)(z,{show:null,isLoading:!0,error:null}),t=Object(s.a)(e,2),r=t[0],c=t[1];return Object(i.useEffect)((function(){var e=!0;return S("/shows/".concat(n,"?embed[]=seasons&embed[]=cast")).then((function(n){e&&c({type:"FETCH_SUCCESS",show:n})})).catch((function(n){e&&c({type:"FETCH_FAILED",error:n.message})})),function(){e=!1}}),[n]),r}(Object(l.g)().id),e=n.show,t=n.isLoading,c=n.error;return t?Object(r.jsx)("div",{children:"Data is being Loaded"}):c?Object(r.jsxs)("div",{children:["Error Occured: ",c]}):Object(r.jsxs)(Bn,{children:[Object(r.jsx)(Cn,{image:e.image,name:e.name,rating:e.rating,summary:e.summary,tags:e.genres}),Object(r.jsxs)(Vn,{children:[Object(r.jsx)("h2",{children:"Details"}),Object(r.jsx)(Dn,{status:e.status,network:e.network,premiered:e.premiered})]}),Object(r.jsxs)(Vn,{children:[Object(r.jsx)("h2",{children:"Seasons"}),Object(r.jsx)(On,{seasons:e._embedded.seasons})]}),Object(r.jsxs)(Vn,{children:[Object(r.jsx)("h2",{children:"Cast"}),Object(r.jsx)(pn,{cast:e._embedded.cast})]})]})},Hn={mainColors:{blue:"#2400ff",gray:"#c6c6c6",dark:"#353535"}};var qn=function(){return Object(r.jsx)(u.a,{theme:Hn,children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{exact:!0,path:"/",children:Object(r.jsx)(un,{})}),Object(r.jsx)(l.a,{exact:!0,path:"/starred",children:Object(r.jsx)(bn,{})}),Object(r.jsx)(l.a,{exact:!0,path:"/show/:id",children:Object(r.jsx)(Qn,{})}),Object(r.jsx)(l.a,{children:Object(r.jsx)("div",{children:"Not Found"})})]})})},Jn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function En(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}a.a.render(Object(r.jsx)(o.a,{children:Object(r.jsx)(qn,{})}),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/custom_imdb",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/custom_imdb","/service-worker.js");Jn?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):En(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):En(e,n)}))}}()}},[[46,1,2]]]);
//# sourceMappingURL=main.846c9fd1.chunk.js.map