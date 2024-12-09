// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// fonction permettant d'inclure les pages html et indiquer qui sera 
function loadHEADER(elementId) {
    fetch("/header.html")
      .then(response => response.text())
      .then(data => {
        const element = document.getElementById('header');
        element.innerHTML = data;
  
        // Recherchez l'élément "home-nav" dans le contenu chargé
        const homeNavElement = element.querySelector("#"+elementId);
        setActiveClass(homeNavElement);
      })
      .catch(error => console.error('Erreur lors du chargement du fichier HTML :', error));
  }
  
  //fonction généralisé 
  function setActiveClass(element) {
    if (element && !element.classList.contains('active')) {
      element.classList.add('active');
    }
  }
  function loadINFO(){
    loadHTML("/info.html","info");
  }
  function loadHTML(filePath, elementId) {
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => console.error('Erreur lors du chargement du fichier HTML :', error));
  }

  