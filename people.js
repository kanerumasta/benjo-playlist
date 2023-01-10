var show = document.querySelector(".pic");
var c = document.querySelectorAll(".member-box").forEach((pic) => {
  pic.onclick = function () {
    show.firstElementChild.firstElementChild.src = pic.firstElementChild.src;
    show.style.display = "block";
  };
});

var button = document.querySelector(".pic span");
button.onclick = function () {
  show.style.display = "none";
};
