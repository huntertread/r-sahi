var hamburger = document.getElementById('hamburger');
var closeButton = document.getElementById('close-button');
var navigation = document.getElementsByClassName('navigation')[0];

hamburger.onclick = function() {
  navigation.style.display = 'flex';
}

closeButton.onclick = function() {
  console.log('click')
  navigation.style.display = 'none';
}