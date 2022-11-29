import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  const nodeList = document.querySelectorAll(".hot");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].textContent+="🔥";
  }
});
