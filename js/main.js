$(document).ready(function() {
  function hideAll() {
    $('#bluestuff').hide();
    $('#weekendstuff').hide();
    $('#divinestuff').hide();
    $('#2009stuff').hide();
    $('#soundtrack1').hide();
    $('#soundtrack2').hide();
    $('#soundtrack3').hide();
    $('#soundtrack4').hide();
  }
hideAll();

$('#mainpic').click(function() {
    $('#p1').slideToggle();
  });


$('.cover').click(function() {
  hideAll();
  switch ($(this).attr("id")) {
      case "bluecover":
        $('#bluestuff').show();
        $('#soundtrack1').show();
        break;
      case "goodcover":
        $('#weekendstuff').show();
        $('#soundtrack2').show();
        break;
      case "divinecover":
        $('#divinestuff').show();
        $('#soundtrack3').show();
        break;
      case "swimmingcover":
        $('#2009stuff').show();
        $('#soundtrack4').show();
        break;
      }
      $("audio").each(function() {
        this.pause();
        this.currentTime = 0;
    });
    });
  });
