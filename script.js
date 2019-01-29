
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function playSound() {
  document.getElementsByClassName("bop").

}





/*var option = document.querySelector('.next');
var video = document.querySelector('.personalspace')
video.onended = function() {
  option.style.display = "block";

}*/




/*function showOption() {
  var option = document.querySelector('.next').style.display;
  option.style.display = "block"
  alert("click next")
}*/
