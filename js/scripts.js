// $(document).ready(function() {
//   $("p").click(function() {
//     $(".walrus-showing").show();
//   });
// });


// $(document).ready(function() {
//   $("p").click(function() {
//     $(".walrus-showing").show();
//     $(".walrus-hidden").hide();
//   });
// });

$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    // $("#walrus-hidden").toggle();
  });
});