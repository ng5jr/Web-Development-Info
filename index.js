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
  var date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  $(".day h4").text(date);
  $("#content div").hide();
  $(".button-show").show();
  $(".button-hide").hide();
  $("li a").attr("target", "_blank");
  $(".iconnight").hide();
  $(".aboutcontent").show();
  $("#sidebar").hide();
  $(".credits").hide();
  screenSize();
});

$(".about").click(function () {
  $("#sidebar").hide();
  $(".button-show").show();
  $(".button-hide").hide();
  $("#content div").hide();
  $(".contentabout").show();
  $(".credit-section").hide();
});

$(".credits-button").click(function () {
  $("#sidebar").hide();
  $(".button-show").show();
  $(".button-hide").hide();
  $("#content div").hide();
  $(".contentabout").hide();
  $(".credits").show();
  $("#content .credit-section").show();
  $("#content .creator").show();
  $("#content .card").show();
  $("#content .img").show();
  $("#content .collabs").show();
  $("#content .collabs-cards").show();
});

$(".content").click(function () {
  $("#sidebar").show();
  $(".button-show").hide();
  $(".button-hide").show();
  $(".credit-section").hide();
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
  $("#content .credit-section").hide();
});

$(".daynight").click(function () {
  $("body").toggleClass("active");
  $(".iconday").toggle();
  $(".iconnight").toggle();
});

function screenSize() {
  if ($(window).width() > 800) {
    document.querySelectorAll(".title").forEach((item) => {
      item.addEventListener("click", (event) => {
        $("#content div").hide();
        $(".contentabout").hide();
        $("#sidebar").show();
        var itemToToggle = "." + item.id + "";

        $("" + itemToToggle + "").toggle();
      });
    });
  } else if ($(window).width() < 800) {
    document.querySelectorAll(".title").forEach((item) => {
      item.addEventListener("click", (event) => {
        $("#content div").hide();
        $(".contentabout").hide();
        $("#sidebar").show();
        var itemToToggle = "." + item.id + "";

        $("" + itemToToggle + "").toggle();
        $("#sidebar").hide();
        $(".button-hide").hide();
        $(".button-show").show();
      });
    });
  }
}
