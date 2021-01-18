window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  //----------------------------------------------------------------
  // speaker
  //----------------------------------------------------------------
  let tab = document.querySelectorAll(".tab"),
    info = document.querySelector(".tabs"),
    tabContent = document.querySelectorAll(".tabcontent");

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
  }

  info.addEventListener("click", function (event) {
    let target = event.target;
    if (target && target.classList.contains("tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
});
//----------------------------------------------------------------
// other
//----------------------------------------------------------------
let tabOther = document.querySelectorAll(".tab-other"),
  infoOther = document.querySelector(".tabs-other"),
  tabContentOther = document.querySelectorAll(".tabcontent-other");

function hidetabContentOther(a) {
  for (let i = a; i < tabContentOther.length; i++) {
    tabContentOther[i].classList.remove("show");
    tabContentOther[i].classList.add("hide");
  }
}

hidetabContentOther(1);

function showtabContentOther(b) {
  if (tabContentOther[b].classList.contains("hide")) {
    tabContentOther[b].classList.remove("hide");
    tabContentOther[b].classList.add("show");
  }
}

infoOther.addEventListener("click", function (event) {
  let target = event.target;
  if (target && target.classList.contains("tab-other")) {
    for (let i = 0; i < tabOther.length; i++) {
      if (target == tabOther[i]) {
        hidetabContentOther(0);
        showtabContentOther(i);
        break;
      }
    }
  }
});
