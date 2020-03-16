function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
}

//          -------Popup NOTIFICATION--------

var open = document.querySelector(".popup-open");
var popup = document.querySelector(".popup-notification");
var close = popup.querySelector(".popup-close");

open.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
    }
  }
});



//          -------Popup SUPPORT--------

var openSup = document.querySelector(".support-open");
var popupSup = document.querySelector(".popup-support");
var closeSup = popupSup.querySelector(".popup-close");


openSup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSup.classList.add("popup-show");
});

closeSup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSup.classList.remove("popup-show");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupSup.classList.contains("popup-show")) {
      popupSup.classList.remove("popup-show");
    }
  }
});

