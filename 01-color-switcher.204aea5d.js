!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=null;function d(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t.length<7?"#fd5bcc":t}e.disabled=!0,t.addEventListener("click",(function(){d(),n=setInterval(d,1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.204aea5d.js.map
