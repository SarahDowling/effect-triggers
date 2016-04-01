$('.btn-show-hide').on('click', function () {
  $('.box').toggleClass('show-box');
});

$('.btn-move').on('click', function () {
  $('.diamond').toggleClass('move-diamond');
});

$('.btn-collapse-expand').on('click', function () {
  $('.panel').toggleClass('expand');
});

$('.btn-bounce').on('click', function () {
  $('.circle').addClass('bounce-in');
});
$('.circle').on('animationend', function () {
  $('.circle').removeClass('bounce-in');
});

$('.btn-append').on('click', function () {
  $('.list').prepend('<li>New List Item</li>');
});
