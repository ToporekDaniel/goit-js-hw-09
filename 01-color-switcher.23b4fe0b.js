let e;const t=document.body,d=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");d.addEventListener("click",()=>{d.disabled=!0,a.disabled=!1,e=setInterval(()=>{let e=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.style.backgroundColor=e},1e3)}),a.addEventListener("click",()=>{d.disabled=!1,a.disabled=!0,clearInterval(e)});
//# sourceMappingURL=01-color-switcher.23b4fe0b.js.map