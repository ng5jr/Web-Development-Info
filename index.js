document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    $("body").hide();
    $("#loader").show();
  } else {
    $("#loader").hide();
    $("body").show();
  }
};

$(document).ready(function () {
  const today = new Date();
  var date = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();
  $(".day h4").text(date);
  $("#content div").hide();
  $(".button-show").show();
  $("li a").attr("target", "_blank");
  $(".iconnight").hide();
  $(".aboutcontent").show();
  $("#sidebar").hide();
});

$(".about").click(function () {
  $("#sidebar").hide();
  $(".button-show").show();
  $(".button-hide").hide();
  $("#content div").hide();
  $(".contentabout").show();
});

$(".content").click(function () {
  $("#sidebar").show();
  $(".button-show").hide();
  $(".button-hide").show();
});

$(".button-hide").click(function () {
  $(".button-hide").hide();
  $("#sidebar").hide();
  event.preventDefault();
  $(".button-show").show();
});

$(".button-show").click(function () {
  $(".button-hide").show();
  $("#sidebar").show();
  event.preventDefault();
  $(".button-show").hide();
});

$(".daynight").click(function () {
  $("body").toggleClass("active");
  $(".iconday").toggle();
  $(".iconnight").toggle();
});

// Media for Smaller devices
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    $("#sidebar").hide();
    $(".button-hide").hide();
    $(".button-show").show();
    document.querySelectorAll(".title").forEach((item) => {
      item.addEventListener("click", (event) => {
        $("#sidebar").hide();
        $(".button-hide").hide();
        $(".button-show").show();
      });
    });
  } else {
    document.querySelectorAll(".title").forEach((item) => {
      item.addEventListener("click", (event) => {
        $("#content div").hide();
        $(".contentabout").hide();
        $("#sidebar").show();
        var itemToToggle = "." + item.id + "";

        $("" + itemToToggle + "").toggle();
      });
    });
    $("#sidebar").show();
    $(".button-hide").hide();
    $(".button-show").show();
  }
}

const x = window.matchMedia("(max-width: 800px)");
myFunction(x);
x.addListener(myFunction);
