import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  var hui = document.getElementsByClassName('hot');
  Array.from(hui).forEach(pishka=>{
    pishka.textContent+="🔥";
    
  })
});
