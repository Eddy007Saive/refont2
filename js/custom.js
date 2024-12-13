function initializeCarousel(carousel,item, visibleCards = 4, autoScrollInterval = 3000) {
  var $carousel = $(carousel);
  var carouselWidth = $carousel[0].scrollWidth;
  var $card = $carousel.find(item);
  var cardWidth = $card.width();
  var scrollPosition = 0;

  // Fonction pour faire défiler automatiquement
  function autoScroll() {
      if (scrollPosition < (carouselWidth - cardWidth * visibleCards)) { // Vérifie si on peut faire défiler plus loin
          scrollPosition += cardWidth;  // Met à jour la position de défilement
          $carousel.animate({ scrollLeft: scrollPosition }, 600); // Défile vers la gauche
      } else {
          scrollPosition = 0; // Réinitialise la position à zéro
          $carousel.animate({ scrollLeft: scrollPosition }, 600); // Recommence au début
      }
  }

  // Lancer le défilement automatique toutes les n millisecondes
  var autoScrollTimer = setInterval(autoScroll, autoScrollInterval);

  // Contrôles manuels
  $carousel.siblings(".carousel-control-next").on("click", function () {
      if (scrollPosition < (carouselWidth - cardWidth * visibleCards)) {
          scrollPosition += cardWidth;
          $carousel.animate({ scrollLeft: scrollPosition }, 600);
      }
  });

  $carousel.siblings(".carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          $carousel.animate({ scrollLeft: scrollPosition }, 600);
      }
  });

  // Arrêter l'auto-défilement si l'utilisateur interagit avec les contrôles
  $carousel.siblings(".carousel-control-next, .carousel-control-prev").on("click", function () {
      clearInterval(autoScrollTimer);
  });

  return {
      stopAutoScroll: function () {
          clearInterval(autoScrollTimer);
      },
      startAutoScroll: function () {
          autoScrollTimer = setInterval(autoScroll, autoScrollInterval);
      }
  };
}

// Exemple d'utilisation :
initializeCarousel(".client",".client-item", 2, 3000);
initializeCarousel(".client2",".client-item2", 2, 4000);




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

  