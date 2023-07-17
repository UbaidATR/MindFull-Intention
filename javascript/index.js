$(document).ready(function(){
    $("#arrow-down").click(function(){
      $("#arrow-up").show();
      $(this).hide();
    });
    $("#arrow-up").click(function(){
      $("#arrow-down").show();
      $(this).hide();
    })
  });
  