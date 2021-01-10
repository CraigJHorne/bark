var modal = document.getElementById("signupModal");

var btn = document.getElementById("signupBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var burger = document.getElementById("burgerModal");

var menu = document.getElementById("burgerBtn");

var cross = document.getElementsByClassName("cross")[0];

menu.onclick = function() {
  burger.style.display = "block";
}

cross.onclick = function() {
  burger.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == burger) {
    burger.style.display = "none";
  }
}