var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("iQIUW");i.Notify.init({useIcon:!1});function r(e,t){const n=Math.random()>.3;return new Promise(((o,i)=>{setTimeout((()=>{n?o({position:e,delay:t}):i({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{amount:t,delay:n,step:o}=e.target.elements,a=parseInt(t.value),l=parseInt(n.value),s=parseInt(o.value);if(a<=0)return void i.Notify.warning("Amount has to be bigger than 0");for(let e=0;e<a;e++){r(e,l+e*s).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e+1} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e+1} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.8ac60c40.js.map