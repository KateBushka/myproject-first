var press = document.getElementsByClassName('press_js');
for (var i = 0; i < press.length; i++) {
    press[i].addEventListener('mouseover', function (e) {
        var box = e.fromElement.closest('.box');
        box.classList.add('hovered');
    });
}
var box = document.getElementsByClassName('box');
for (var i = 0; i < press.length; i++) {
    box[i].addEventListener('mouseleave', function (e) {
        e.fromElement.classList.remove('hovered');
    });
}
$(document).ready(function(){
    $('#js-carousel-1').owlCarousel({
        dots: true
    });
    $('#works').on('mouseenter','.icon',function (){
        var _this=$(this);
        var parentB=_this.parents('.item').eq(0);
        parentB.find('.icon_text').show();
    }).on('mouseleave','.icon_text',function (){
        var _this=$(this);
        var parentB=_this.parents('.item').eq(0);
        parentB.find('.icon_text').hide();
    })
    $('.show_item').on('click',function(){
        var parentB=$(this).parents('.content_txt').eq(0);
        parentB.find('.box_hide').removeClass('box_hide');
    })
  });
