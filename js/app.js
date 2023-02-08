function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    "google_translate_element"
  );
}
$(document).ready(function () {
  //Owl
  $(".hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: false,
    smartSpeed: 5000,
    autoplay: false,
    autoplayTimeout: 8000,
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      },
    },
  });

  $("#projects-slider").owlCarousel({
    loop: true,
    nav: false,
    items: 2,
    dots: true,
    smartSpeed: 600,
    center: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
        margin: 8,
      },
    },
  });

  $(".blog-post").slice(0, 3).show();
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $(".blog-post:hidden").slice(0, 3).slideDown();
    if ($(".blog-post:hidden").length == 0) {
      $("#loadMore")
        .text("No hay más contenido")
        .css("color", "grey")
        .css("text-decoration", "none")
        .addClass("noContent");
    }
  });
});
$(".navbar-nav li a").on("click", function () {
  if (!$(this).hasClass("dropdown-toggle")) {
    $(".navbar-collapse").collapse("hide");
  }
});
$(function () {
  $("#ChangeToggle").click(function () {
    $("#navbar-hamburger").toggleClass("hidden");
    $("#navbar-close").toggleClass("hidden");
  });
});

let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Font Size
var defaultFontSize = $("html").css("font-size");
const minSize = parseFloat(defaultFontSize, 12) - 1;
const maxSize = parseFloat(defaultFontSize, 12) + 4;

$(".resetFont").click(function () {
  $("html").css("font-size", defaultFontSize);
});

$(".increaseFont").click(function () {
  var fontSize = getFontSize();
  var newFontSize = fontSize + 1;
  if (newFontSize <= maxSize) setFontSize(newFontSize);
  return false;
});

$(".decreaseFont").click(function () {
  var fontSize = getFontSize();
  var newFontSize = fontSize - 1;
  if (newFontSize >= minSize) setFontSize(newFontSize);
  return false;
});

function getFontSize() {
  var currentSize = $("html").css("font-size");
  var currentSizeNumber = parseFloat(currentSize, 12);
  if (currentSizeNumber > 50) {
    currentSizeNumber = 50;
  }
  if (currentSizeNumber < 8) {
    currentSizeNumber = 8;
  }
  return currentSizeNumber;
}

function setFontSize(size) {
  $("html").css("font-size", size);
  $(".actualSize").html(size);
}
