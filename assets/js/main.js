$(document).ready(function(){
  $('.navbar-toggler').click(function(){
    $("span").toggleClass("open close");
  });
  $('.cover').mousemove(function(e){
    var x = -(e.pageX + this.offsetLeft) / 20;
    var y = -(e.pageY + this.offsetTop) / 20;
    $(this).css('background-position', x + 'px ' + y + 'px');
  });
});