const t=document.querySelector(".left__button"),e=document.querySelector(".right__button"),c=document.querySelectorAll(".food-card__item");function o(){for(let t=0;t<c.length;t++)if(c[t].classList.contains("food-card__item-active"))return t;return-1}function n(){c.forEach((t=>{t.classList.remove("food-card__item-active")}))}t.addEventListener("click",(()=>{const t=o();if(-1!==t){n();const e=0===t?c.length-1:t-1;c[e].classList.add("food-card__item-active")}})),e.addEventListener("click",(()=>{const t=o();if(-1!==t){n();const e=t===c.length-1?0:t+1;c[e].classList.add("food-card__item-active")}}));
//# sourceMappingURL=index.6c7dd573.js.map