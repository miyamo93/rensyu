$(document).ready(function(){
  $(".slider").slick({
    infinite: true, //スライドのループ有効化
    centerMode: true, //要素を中央寄せ
    centerPadding:'10%', //両サイドの見えている部分のサイズ
    autoplay:true, //自動再生
    prevArrow:'<li class="chevron"><i class="fas fa-chevron-left"></i></li>',
    nextArrow:'<li><i class="fas fa-chevron-right"></i></li>',
    appendArrows:$('.ddd')
  });
});
