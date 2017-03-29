//Check off specific todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(e){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
  if(e.which === 13){
    var toDoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + toDoText + "</li>");
  }
});

$(".fa-plus-circle").click(function(){
  $("input[type='text']").fadeToggle();
});
