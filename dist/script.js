"use strict";var darkThemeMq=window.matchMedia("(prefers-color-scheme: dark)"),dark=document.getElementById("dark"),light=document.getElementById("light");localStorage.length>0?(document.querySelector(".body").classList.add(localStorage.getItem("colorMode")),"dark"===localStorage.getItem("colorMode")?dark.setAttribute("checked",""):light.setAttribute("checked","")):darkThemeMq.matches?dark.setAttribute("checked",""):light.setAttribute("checked",""),dark.addEventListener("click",(function(){document.querySelector(".body").classList.remove("light"),document.querySelector(".body").classList.add("dark"),localStorage.setItem("colorMode","dark")})),light.addEventListener("click",(function(){document.querySelector(".body").classList.remove("dark"),document.querySelector(".body").classList.add("light"),localStorage.setItem("colorMode","light")}));
//# sourceMappingURL=script.js.map