(()=>{"use strict";var n={490:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"@font-face {\n  font-family: 'PT Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/ptsans/v17/jizaRExUiTo99u79D0KEwA.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'PT Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/ptsans/v17/jizfRExUiTo99u79B_mh0O6tKA.ttf) format('truetype');\n}\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  left: 0;\n  top: 0;\n  font-size: 100%;\n}\n* {\n  font-family: \"Chakra Petch\", sans-serif;\n  line-height: 1.5;\n}\n.h1,\nh1 {\n  font-size: 2.5rem;\n  font-family: Hiragino, serif;\n}\n.h2,\nh2 {\n  font-size: 2rem;\n}\n.h3,\nh3 {\n  font-size: 1.375rem;\n}\n.h4,\nh4 {\n  font-size: 1.125rem;\n}\n.h5,\nh5 {\n  font-size: 1rem;\n}\n.h6,\nh6 {\n  font-size: 0.875rem;\n}\np {\n  font-size: 1.125rem;\n  font-weight: 200;\n  line-height: 1.8;\n}\n.font-light {\n  font-weight: 400;\n}\n.font-regular {\n  font-weight: 400;\n}\n.font-heavy {\n  font-weight: 700;\n}\n.left {\n  text-align: left;\n}\n.right {\n  text-align: right;\n}\n.center {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n.justify {\n  text-align: justify;\n}\n.hidden-sm {\n  display: none;\n}\n.container {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1600px;\n}\n.row {\n  position: relative;\n  width: 100%;\n}\n.row [class^=\"col\"] {\n  float: left;\n  margin: 0.5rem 2%;\n  min-height: 0.125rem;\n}\n.row::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.col-1,\n.col-2,\n.col-3,\n.col-4,\n.col-5,\n.col-6,\n.col-7,\n.col-8,\n.col-9,\n.col-10,\n.col-11,\n.col-12 {\n  width: 96%;\n}\n.col-1-sm {\n  width: 4.33333%;\n}\n.col-2-sm {\n  width: 12.66667%;\n}\n.col-3-sm {\n  width: 21%;\n}\n.col-4-sm {\n  width: 29.33333%;\n}\n.col-5-sm {\n  width: 37.66667%;\n}\n.col-6-sm {\n  width: 46%;\n}\n.col-7-sm {\n  width: 54.33333%;\n}\n.col-8-sm {\n  width: 62.66667%;\n}\n.col-9-sm {\n  width: 71%;\n}\n.col-10-sm {\n  width: 79.33333%;\n}\n.col-11-sm {\n  width: 87.66667%;\n}\n.col-12-sm {\n  width: 96%;\n}\n@media only screen and (min-width: 45em) {\n  .col-1 {\n    width: 4.33333%;\n  }\n  .col-2 {\n    width: 12.66667%;\n  }\n  .col-3 {\n    width: 21%;\n  }\n  .col-4 {\n    width: 29.33333%;\n  }\n  .col-5 {\n    width: 37.66667%;\n  }\n  .col-6 {\n    width: 46%;\n  }\n  .col-7 {\n    width: 54.33333%;\n  }\n  .col-8 {\n    width: 62.66667%;\n  }\n  .col-9 {\n    width: 71%;\n  }\n  .col-10 {\n    width: 79.33333%;\n  }\n  .col-11 {\n    width: 87.66667%;\n  }\n  .col-12 {\n    width: 96%;\n  }\n  .hidden-sm {\n    display: block;\n  }\n}\n.row-flex {\n  display: flex;\n  align-items: center;\n}\n.row-flex.row-flex-top {\n  align-items: start;\n}\n@media only screen and (max-width: 44.99em) {\n  .row-flex {\n    flex-direction: column;\n  }\n  .row-flex .right,\n  .row-flex .left {\n    text-align: center;\n  }\n}\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  background: #000;\n  color: #fff;\n  padding: 1rem 0 2rem 0;\n  height: auto;\n}\ncanvas {\n  display: block;\n  margin: 0 auto;\n}\n.shape {\n  width: 800px;\n  height: 800px;\n  position: relative;\n}\n#shape1 {\n  height: 900px;\n}\nhr {\n  border: 1px solid #262626;\n}\n.desc {\n  text-transform: uppercase;\n}\nimg.responsive {\n  width: 100%;\n  height: auto;\n}\n.infocard {\n  border: 1px solid #535353;\n  border-radius: 20px;\n  padding: 24px;\n}\n.infocard .head {\n  text-transform: uppercase;\n  padding: 0 0 10px 0;\n  margin-bottom: 20px;\n  font-weight: bold;\n  border-bottom: 1px solid #535353;\n}\n.infocard.sketchIds {\n  padding: 10px;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.infocard.sketchIds a {\n  text-decoration: none;\n  display: inline-block;\n  width: 32px;\n  height: 24px;\n  line-height: 24px;\n  font-weight: 700;\n  border-radius: 3px;\n  margin-right: 5px;\n  background-color: #fff;\n  color: #000;\n}\n.infocard.sketchIds a.selected {\n  background-color: #F7CD01;\n}\n.drives {\n  color: #AEAEAE;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.drives > div {\n  text-transform: uppercase;\n  margin-bottom: 15px;\n}\n.drives span,\n.drives a {\n  display: inline-block;\n  border-radius: 10px;\n  text-transform: uppercase;\n  border: 1px solid #fff;\n  padding: 5px 20px;\n  margin-bottom: 15px;\n  text-decoration: none;\n}\n.drives span.red,\n.drives a.red {\n  border-color: #83024E;\n  color: #83024E;\n}\n.drives span.yellow,\n.drives a.yellow {\n  border-color: #F7CD01;\n  color: #F7CD01;\n}\n.drives span.blue,\n.drives a.blue {\n  border-color: #7130BF;\n  color: #7130BF;\n}\n.drives span.green,\n.drives a.green {\n  border-color: #30BF4F;\n  color: #30BF4F;\n}\n.drives span.white,\n.drives a.white {\n  border-color: #fff;\n}\n.cardimages img {\n  border: 1px solid #535353;\n  border-radius: 20px;\n  transition: border-color 200ms ease-in-out;\n}\n.cardimages a:hover img {\n  border-color: #fff;\n}\n#specs h4 {\n  margin: 10px 0;\n  padding: 0;\n}\n#specs div {\n  color: #7d95f3;\n}\n#specs div strong {\n  color: #e9fdfc;\n  display: inline-block;\n  margin-right: 10px;\n}\n#specs div strong:after {\n  content: \":\";\n}\n.selected-colors div {\n  width: 36px;\n  height: 36px;\n  border-radius: 5px;\n  display: inline-block;\n  margin: 0 10px 10px 0;\n}\niframe {\n  border: none;\n}\n",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,f="".concat(l," ").concat(d);i[l]=d+1;var p=t(f),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var m=o(h,r);r.byIndex=s,e.splice(s,0,{identifier:f,updater:m,references:1})}a.push(f)}return a}function o(n,e){var t=e.domAPI(e);t.update(n);return function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),c=t.n(s),l=t(216),d=t.n(l),f=t(589),p=t.n(f),h=t(490),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d();e()(h.Z,m);h.Z&&h.Z.locals&&h.Z.locals})()})();