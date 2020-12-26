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
