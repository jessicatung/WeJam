$(document).ready(function(){
  $('.close-reveal-modal').on('click', function(){ 
    $("#logModal").hide("slow"); 
    $("#newModal").hide("slow"); 
    $(".reveal-modal-bg").hide();
  });
})