//Preloader jQuery starts
$(window).on('load', function() {
        $('.preloader .content').delay(500).fadeOut('slow');
        $('body').delay(1000).css({ 'overflow': 'hidden' });
        setTimeout(function() {
            $('body').delay(1000).css({ 'overflow': 'auto' });
            $(".curtails-effect").addClass("active");
            $('.preloader').delay(1000).fadeOut('slow');
        }, 1500);
    })
    //Preloader jQuery ends
    // sticky header starts

// $(document).ready(function() {
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('navbar-top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight - 50;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar-top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});
// });
// sticky header ends
// AOS animation
$(document).ready(function() {
    AOS.init({
        duration: 1200,
        mirror: false,
        once: true,
        disable: function() {
            var maxWidth = 992;
            return window.innerWidth < maxWidth;
        }

    });
});
// header navbar class add starts here

$(".navbar-toggler").click(function() {
    $("#navbar-top").toggleClass("back-lightgrey");
});
// navbar class add ends here

// menu starts
document.addEventListener("DOMContentLoaded", function() {
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {

        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem) {

            everyitem.addEventListener('mouseover', function(e) {

                let el_link = this.querySelector('a[data-bs-toggle]');

                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }

            });
            everyitem.addEventListener('mouseleave', function(e) {
                let el_link = this.querySelector('a[data-bs-toggle]');

                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }


            })
        });

    }
});
// menu ends
// Gallery Slides
$(document).ready(function() {
    $("#gallery-slides").owlCarousel({
        autoplay: true,
        rewind: true,
        margin: 0,
        responsiveClass: true,
        autoHeight: true,
        loop: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: true,
        responsive: {
            0: {
                items: 1
            },

            414: {
                items: 2
            },
            576: {
                items: 2
            },

            600: {
                items: 3
            },



            1024: {
                items: 4
            },

            1180: {
                items: 5
            },
        }
    });
});
// Testominal slider
$(document).ready(function() {
    $("#testimonial-slides").owlCarousel({
        autoplay: true,
        rewind: true,
        margin: 0,
        responsiveClass: true,
        autoHeight: true,
        loop: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },

            1180: {
                items: 1
            },
        }
    })
});

// Magnific popup & images
$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        type: 'iframe'
    });
});
$(document).ready(function() {
    $('.popup-image').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
    $('.popup-image1').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
    $('.popup-image2').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
    $('.popup-image3').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
});

//Counters
$(".count").each(function() {
    console.log($(this).text());
    $(this)
        .prop("Counter", 0)
        .animate({
            Counter: $(this).text(),
        }, {
            duration: 4000,
            step: function(now) {
                $(this).text(Math.ceil(now).toString().padStart(2, 0));
            },
        });
});

// Porgress bar home page
$(document).ready(function() {

    $('#example-1').progress_fnc();
    $('#example-2').progress_fnc();
    $('#example-3').progress_fnc();
    $('#example-4').progress_fnc();

    $('.progressStart').on('click', function() {
        var perent = $(this).closest("div").attr("id");
        $('#' + perent).progress_fnc({
            type: 'start'
        });
    });

    $('.progressReset').on('click', function() {
        var perent = $(this).closest("div").attr("id");
        $('#' + perent).progress_fnc({
            type: 'reset'
        });
    });

});


(function($) {

    $.fn.progress_fnc = function(options) {
        var settings = $.extend({
            type: 'start'
        }, options);

        var div = $(this);
        var progress = div.find('.cssProgress');

        progress.each(function() {
            var self = $(this);
            var progress_bar = self.find('.cssProgress-bar');
            var progress_label = self.find('.cssProgress-label, .cssProgress-label2');
            var progress_value = progress_bar.data('percent');
            var percentage = parseInt(progress_value, 10) + '%';

            progress_bar.css({
                'width': '0%',
                'transition': 'none',
                '-webkit-transition': 'none',
                '-moz-transition': 'none'
            });

            if (settings.type == 'start') {

                progress_bar.animate({
                    width: percentage
                }, {
                    duration: 1000,
                    step: function(x) {
                        progress_label.text(Math.round(x) + '%');
                    }
                });

            } else if (settings.type == 'reset') {
                progress_bar.css('width', '0%');
                progress_label.text('0%');
            }

        });
    }

}(jQuery));

// Grid js
(function() {
    var $grid = $(".grid").imagesLoaded(function() {
        $(".site-wrapper").masonry({
            itemSelector: ".grid"
        });
    });
})();

// Slider in grid
(function($) {
    $('.owl-carousel').attr("width", "100%");
});

//Cover Box animation

$(".cover-content-main ul li").hover(function() {
    $(".cover-content-main ul li").removeClass("act");
    $(this).addClass("act");
});
$(".cover-content-main2 ul li").hover(function() {
    $(".cover-content-main2 ul li").removeClass("act");
    $(this).addClass("act");
});


// Equal Height div
$(document).ready(function() {
    var title = 0;
    jQuery(".blog-single-content").each(function() {
        if ($(this).height() > title) { title = $(this).height(); }
    });
    jQuery(".blog-single-content").height(title);
});

// on Resize change height
$(document).ready(function() {
    jQuery(window).resize(function() {
        jQuery(".blog-single-content").height("");
        var title = 0;
        jQuery(".blog-single-content").each(function() {
            if ($(this).height() > title) { title = $(this).height(); }
        });
        jQuery(".blog-single-content").height(title);
    })
});