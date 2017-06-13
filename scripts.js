var navButtonOpen = document.getElementById('side-nav--open');
var navButtonClose = document.getElementById('side-nav--close');
var sideMenu = document.getElementById('sideMenu');

navButtonOpen.onclick = function(e) {
  sideMenu.style.width = "225px"
}

navButtonClose.onclick = function(e) {
  sideMenu.style.width = "0px"
}
