function changeImage(imageNumber) {
  var image = document.getElementsByClassName('art_ahri_x')[0];
  var element = document.getElementsByClassName('avatar_ahri')[0];
  /*
  document.getElementsByClassName('avatar_ahri')[0].classList.toggle('dsdasdasdsadsa');
*/
  image.style.opacity = 0;
  setTimeout(function() {
    setTimeout(function() {
      image.src = 'Ahri_arts/Ahri_' + imageNumber + '.png';
      setTimeout(function() {
        image.style.opacity = 1;
      }, 0);
    }, 500);
  }, 0);
}