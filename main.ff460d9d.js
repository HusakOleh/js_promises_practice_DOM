parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n=new Promise(function(n,t){document.addEventListener("mousedown",function(t){0===t.button&&n("First promise was resolved")}),setTimeout(function(){t("First promise was rejected")},3e3)}),t=new Promise(function(n,t){document.addEventListener("mousedown",function(t){0!==t.button&&2!==t.button||n("Second promise was resolved")})}),e=new Promise(function(n,t){var e=!1,o=!1;document.addEventListener("mousedown",function(t){0!==t.button&&2!==t.button||(e=0===t.button||e,o=2===t.button||o,e&&o&&n("Third promise was resolved"))})}),o=function(n,t){var e=document.querySelector(".notification:last-of-type"),o=e?e.getBoundingClientRect().height+e.getBoundingClientRect().top+10:10;document.body.insertAdjacentHTML("beforeend",'\n    <div\n      class="notification '.concat(t,'"\n      data-qa="notification"\n      style="\n        top: ').concat(o,'px;\n        right: 10px;\n      "\n    >\n      <p>').concat(n,"</p>\n    </div>\n  "))};n.then(function(n){o(n,"success")}).catch(function(n){o(n,"error")}),t.then(function(n){o(n,"success")}).catch(function(n){o(n,"error")}),e.then(function(n){o(n,"success")}).catch(function(n){o(n,"error")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.ff460d9d.js.map