
$('body').on('click', '#home-button', function() {
    $('#profile-section').removeClass('d-flex d-none')
    $('#portfolio-section').removeClass('d-flex d-none');
    $('#contact-section').removeClass('d-flex d-none');
    $('#profile-section').addClass('d-flex');
    $('#portfolio-section').addClass('d-none');
    $('#contact-section').addClass('d-none');
});

$('body').on('click', '#portfolio-button', function() {
    $('#profile-section').removeClass('d-flex d-none')
    $('#portfolio-section').removeClass('d-flex d-none');
    $('#contact-section').removeClass('d-flex d-none');
    $('#profile-section').addClass('d-none');
    $('#portfolio-section').addClass('d-flex');
    $('#contact-section').addClass('d-none');
});

$('body').on('click', '#contact-button', function() {
    $('#profile-section').removeClass('d-flex d-none')
    $('#portfolio-section').removeClass('d-flex d-none');
    $('#contact-section').removeClass('d-flex d-none');
    $('#profile-section').addClass('d-none');
    $('#portfolio-section').addClass('d-none');
    $('#contact-section').addClass('d-flex');
});