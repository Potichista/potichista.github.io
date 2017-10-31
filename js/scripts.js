$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(function() {
    var userAgentLanguage = navigator.language || navigator.userLanguage || '';
    var language = userAgentLanguage.split(/[_-]/)[0].toLowerCase();
    switch (language) {
        case "en":
            $("[lang='es']").hide();
            $("[lang='en']").show();
            break;
        default:
            $("[lang='es']").show();
            $("[lang='en']").hide();
    }
});
