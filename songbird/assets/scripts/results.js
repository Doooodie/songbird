(()=>{"use strict";!function(){var e=JSON.parse(localStorage.getItem("results")),t=document.querySelector(".main-container");if(e){var n=document.createElement("ul");n.className="results-container",e.forEach((function(e){var c=function(e){var t=new Date-e,n=Math.floor(t/1e3),c=Math.floor(t/6e4);if(t<1e3)return"прямо сейчас";if(n<60)return"".concat(n," сек. назад");if(c<60)return"".concat(c," мин. назад");var a=e;return a=["0 ".concat(a.getDate()),"0 ".concat(a.getMonth()+1)," ".concat(a.getFullYear()),"0 ".concat(a.getHours()),"0 ".concat(a.getMinutes())].map((function(e){return e.slice(-2)})),"".concat(a.slice(0,3).join(".")," ").concat(a.slice(3).join(":"))}(e.date),a=e.score,r=document.createElement("li");r.className="result",r.textContent="".concat(c," игрок набрал ").concat(a," из 30 возможных баллов."),n.prepend(r),t.append(n)}))}else{var c=document.createElement("h2");c.className="error-message",c.textContent="Не найдено результатов! Попробуйте пройти игру хотя бы раз.",t.append(c)}}()})();