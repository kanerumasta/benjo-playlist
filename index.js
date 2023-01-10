var n = document.getElementById("navbar");

window.onscroll = function () {
  let h = document.querySelector(".banner");
  if (window.scrollY > h.offsetHeight) {
    n.classList.add("scrolled");
  } else {
    n.classList.remove("scrolled");
  }
};

document.querySelectorAll(".box").forEach((v) => {
  v.firstElementChild.firstElementChild.currentTime = 15;
  v.firstElementChild.firstElementChild.muted = true;

  v.onmouseover = () => {
    v.firstElementChild.firstElementChild.play();
    v.firstElementChild.firstElementChild.currentTime = 0;
  };
  v.onmouseout = () => {
    v.firstElementChild.firstElementChild.currentTime = 15;
    v.firstElementChild.firstElementChild.pause();
  };
});

document.querySelectorAll(".videos-list .box video").forEach((vid) => {
  vid.onclick = () => {
    document.querySelector(".pop-up").style.display = "block";
    document.querySelector(".pop-up video").src = vid.getAttribute("src");
    document.querySelector(".pop-up video").play();
  };
});
document.querySelector(".pop-up span").onclick = () => {
  document.querySelector(".pop-up").style.display = "none";
  document.querySelector(".pop-up video").pause();
};

var heart = document.querySelectorAll(".heart");
heart.forEach((image) => {
  image.onmouseover = () => {
    if (image.getAttribute("src") == "images/blackheart.png") {
      image.style.opacity = 0.3;
    }
  };
  image.onmouseout = () => {
    if (image.getAttribute("src") == "images/blackheart.png") {
      image.style.opacity = 0.5;
    }
  };
  image.onclick = () => {
    if (image.getAttribute("src") == "images/blackheart.png") {
      image.src = "images/redheart.png";
      image.style.opacity = 1;
    } else {
      image.src = "images/blackheart.png";
      image.style.opacity = 0.5;
    }
  };
});

var like = document.querySelectorAll(".liked");
like.forEach((l) => {
  l.onmouseover = () => {
    if (l.getAttribute("src") == "images/blacklike.png") {
      l.style.opacity = 0.3;
    }
  };
  l.onmouseout = () => {
    if (l.getAttribute("src") == "images/blacklike.png") {
      l.style.opacity = 0.5;
    }
  };
  l.onclick = () => {
    if (l.getAttribute("src") == "images/blacklike.png") {
      l.src = "images/bluelike.png";
      l.style.opacity = 1;
    } else {
      l.src = "images/blacklike.png";
      l.style.opacity = 0.5;
    }
  };
});
