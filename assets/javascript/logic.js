
$('body').on('click', '#home-button', function() {
    $('#profile-section').removeClass('d-flex d-none')
    $('#portfolio-section').removeClass('d-flex d-none');
    $('#contact-section').removeClass('d-flex d-none');
    $('#profile-section').addClass('d-flex');
    $('#portfolio-section').addClass('d-none');
    $('#contact-section').addClass('d-none');
    $('.content').css('opacity', 0);
});

$('body').on('click', '#portfolio-button', function() {
    $('#profile-section').removeClass('d-flex d-none')
    $('#portfolio-section').removeClass('d-flex d-none');
    $('#contact-section').removeClass('d-flex d-none');
    $('#profile-section').addClass('d-none');
    $('#portfolio-section').addClass('d-flex');
    $('#contact-section').addClass('d-none');
    $('.content').css('opacity', 0);
});

$('body').on('click', '#contact-button', function() {
    $('#profile-section').removeClass('d-flex d-none')
    $('#portfolio-section').removeClass('d-flex d-none');
    $('#contact-section').removeClass('d-flex d-none');
    $('#profile-section').addClass('d-none');
    $('#portfolio-section').addClass('d-none');
    $('#contact-section').addClass('d-flex');
    $('.content').css('opacity', 0);
});

$(document).scroll(function() {
  if (window.scrollY >= 0) {
    $('.content').css('opacity', 1 - 50 / window.scrollY);
  }
});