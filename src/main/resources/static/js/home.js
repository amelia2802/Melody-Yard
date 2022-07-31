/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("sidebar-wrapper").style.width = "30%";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("sidebar-wrapper").style.width = "0";
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 8000); // Change image every 2 seconds
}

window.onSpotifyIframeApiReady = (IFrameAPI) => {
  let element = document.getElementById('embed-iframe');
  let options = {
      width: '60%',
      height: '200',
      uri: 'spotify:show:4Ua1I12XJEpbwzNFFVL62v'
    };
  let callback = (EmbedController) => {
    document.querySelectorAll('ul#episodes > li > button').forEach(
      episode => {
        episode.addEventListener('click', () => {
          EmbedController.loadUri(episode.dataset.spotifyId)
        });
      })
  };
  IFrameAPI.createController(element, options, callback);
};