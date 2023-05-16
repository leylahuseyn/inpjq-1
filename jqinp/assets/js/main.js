$(document).ready(function(){
  $("#btn1").click(function(){
    $("ol").append(`<li>${$("#inp1").val()}</li>`);
  });
});
$(document).ready(function(){
  $("#btn2").click(function(){
   if($("ol").$("li").text == $("inp2").val){
    console.log($("inp2").val);
   }
  });
});
