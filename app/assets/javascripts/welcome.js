$(document).ready(function(){
  $('.close-reveal-modal').on('click', function(){ 
    $("#logModal").slideUp("slow");
    $("#newModal").slideUp(1000);
    $(".reveal-modal-bg").hide();
  });
})