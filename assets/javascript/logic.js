
$('body').on('click', '#home-button', function() {
    $('#home-button').css('color', 'green');
    $('#portfolio-button').css('color', '#7abc00');
    $('#contact-button').css('color', '#7abc00');
    $('#profile-section').removeClass('d-flex d-none').addClass('d-flex');
    $('#portfolio-section').removeClass('d-flex d-none').addClass('d-none');
    $('#contact-section').removeClass('d-flex d-none').addClass('d-none');
    $('.content').css('opacity', 0);
});

$('body').on('click', '#portfolio-button', function() {
    $('#portfolio-button').css('color', 'green');
    $('#home-button').css('color', '#7abc00');
    $('#contact-button').css('color', '#7abc00');
    $('#profile-section').removeClass('d-flex d-none').addClass('d-none');
    $('#portfolio-section').removeClass('d-flex d-none').addClass('d-flex');
    $('#contact-section').removeClass('d-flex d-none').addClass('d-none');
    $('.content').css('opacity', 0);
});

$('body').on('click', '#contact-button', function() {
    $('#contact-button').css('color', 'green');
    $('#home-button').css('color', '#7abc00');
    $('#portfolio-button').css('color', '#7abc00');
    $('#profile-section').removeClass('d-flex d-none').addClass('d-none');
    $('#portfolio-section').removeClass('d-flex d-none').addClass('d-none');
    $('#contact-section').removeClass('d-flex d-none').addClass('d-flex');
    $('.content').css('opacity', 0);
});

$(document).scroll(function() {
  if (window.scrollY >= 0) {
    $('.content').css('opacity', 1 - 50 / window.scrollY);
  }
});