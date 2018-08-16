
$(document).ready(function() {
    $('.spacer').animate({
        height: "50px",
    }, 3000);
    $('#about-section').animate({
        opacity: 1
    }, 3000);
    setTimeout(function() {
        $('p').animate({
            opacity: 1
        }, 2000);
    }, 3000);
});
