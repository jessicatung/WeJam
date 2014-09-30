$(document).ready(function(){
  $('.close-reveal-modal').on('click', function(){ 
    $("#logModal").slideUp(); // can choose slide or slow hide
    $("#newModal").hide("slow"); 
    $(".reveal-modal-bg").hide();
  });
})