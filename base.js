$(document).ready(function () {
  $(this).on("click", "ul li", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  $("#menu-icon").click(function () {
    $(this).toggleClass("bx-x");
    $(".navbar").toggleClass("open");
  });
});
