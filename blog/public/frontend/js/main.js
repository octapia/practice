(function($) {
    'use strict';
    
    /*--
    Menu Stick
    -----------------------------------*/
    var header = $('.sticky-bar');
    var win = $(window);
    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 200) {
            header.removeClass('stick');
        } else {
            header.addClass('stick');
        }
    });
    
    
    
    /* Slider active */
    $('.slider-active , .information-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        dotsData: true,
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    
    
    /* Slider active hm10 */
    $('.single-slider-hm10').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    
    
    
    
    
    
    /* slider active 3 */
    $('.slider-active-3').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    
    
    /* Slider active 2 */
    $('.slider-active-2').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace) {
            return;
        }
        var carousel = e.relatedTarget;
        $('.counter').html('<span class="current">' + (carousel.relative(carousel.current()) + 1) + '</span><span class="total">' + carousel.items().length + '</span>');
    })
    
    $('.slider-active-2').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    
    
    /* Slider active 4 */
    $('.slider-active-4').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace) {
            return;
        }
        var carousel = e.relatedTarget;
        $('.counter').html('<span class="current">0' + (carousel.relative(carousel.current()) + 1) + '</span><span class="total">0' + carousel.items().length + '</span>');
    })

    $('.slider-active-4').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: false
    });
    
    
    /* Tools slider active */
    $('.tools-slider-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    
    /* Feature slider active */
    $('.feature-slider-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    
    /* Testimonial active 2 */
    $('.testimonial-active-2').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    
    /* Testimonial active 3 */
    $('.testimonial-active-3').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        item: 2,
        margin: 50,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })
    
    
    /* Testimonial active 4 */
    $('.testimonial-active-4').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        item: 3,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    
    
    /* Portfolio carousel active */
    $('.portfolio-carousel-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        item: 3,
        margin: 15,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
    
    
    /* tools-slider-active */
    $('.single-portfolio-carousel').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    /* categorie-slider-active */
    $('.categorie-slider-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        item: 3,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
    
    
    
    /* Blog gallery slider */
    $('.blog-gallery-slider').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /* product details slider active */
    $('.pro-details-slider-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    
    /* brand-logo-active */
    $('.brand-logo-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 6,
        margin: 15,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    })
    
    
    /* Instragram active */
    $('.instragram-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 6,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    })
    
    
    /* Instragram active 2 */
    $('.instragram-active-2').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 5,
        margin: 15,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    })
    
    
    /* Instragram active 3 */
    $('.instragram-active-3').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 6,
        margin: 15,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    })
    
    
    /* Instragram active 4 */
    $('.instragram-active-4').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 4,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    })
    
    
    /* Recent project active */
    $('.recent-project-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 4,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
    
    
    /* Related product active */
    $('.related-product-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 4,
        margin: 40,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
    
    
    /*====== sidebarSearch ======*/
    function sidebarSearch() {
        var searchTrigger = $('button.sidebar-trigger-search'),
            endTriggersearch = $('button.search-close'),
            container = $('.main-search-active');
        searchTrigger.on('click', function() {
            container.addClass('inside');
        });
        endTriggersearch.on('click', function() {
            container.removeClass('inside');
        });
    };
    sidebarSearch();
    
    
    /*====== sidebar active ======*/
    function sidebarNav() {
        var navbarTrigger = $('button.header-navbar-active'),
            endTrigger = $('button.op-sidebar-close'),
            container = $('.sidebar-active'),
            wrapper = $('.wrapper');

        wrapper.prepend('<div class="body-overlay"></div>');

        navbarTrigger.on('click', function() {
            container.addClass('inside');
            wrapper.addClass('overlay-active');
        });

        endTrigger.on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });

        $('.body-overlay').on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });
    };
    sidebarNav();
    
    
    /* Sidemenu Dropdown */
    function sidemenuDropdown() {
        var $this = $('.wrap-sidebar-menu');
        $this.find('nav.menu .cr-dropdown')
            .find('ul').slideUp();
        $this.find('nav.menu li.cr-dropdown > a, nav.menu li.cr-sub-dropdown > a').on('click', function(e) {
            e.preventDefault();
            $(this).next().slideToggle();
        });
    }
    sidemenuDropdown();
    
    
    /*--
    Magnific Popup
    ------------------------*/
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    
    /*-----------------------
        Portfolio carousel active
    -----------------------------------*/
    $('.portfolio-slider-active').slick({
        centerMode: true,
        arrows: false,
        centerPadding: '155px',
        slidesToShow: 4,
        responsive: [{
                breakpoint: 1365,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '120px',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '100px',
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '50px',
                }
            }
        ]
    });
    
    /*-----------------------
        Shop carousel active
    -----------------------------------*/
    $('.shop-carousel-active').slick({
        centerMode: true,
        arrows: true,
        prevArrow: '<span class="cr-navigation cr-navigation-prev"><i class="ti-angle-left"></i></span>',
        nextArrow: '<span class="cr-navigation cr-navigation-next"><i class="ti-angle-right"></i></span>',
        centerPadding: '190px',
        slidesToShow: 3,
        responsive: [{
                breakpoint: 1365,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '120px',
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '50px',
                }
            }
        ]
    });
    
    /*-----------------------
        Testimonial-active
    -----------------------------------*/
    $('.testimonial-active').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        infinite: true,
        swipe: false,
        asNavFor: '.testimonial-text-slider',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    autoplay: true,
                    dots: false,
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    });
    
    
    /*-----------------------
    Testimonial Slick Carousel
    -----------------------------------*/
    $('.testimonial-text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        asNavFor: '.slider-nav',
    });
    
    
    /* magnificPopup video popup */
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });
    
    /* magnificPopup image popup */
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    
    /* masonry Active */
    var isotopFilter = $('.portfolio-menu-active , .product-menu-active');
    var isotopGrid = $('.grid');
    var isotopGridItemSelector = $('.grid-item');
    var isotopGridItem = '.grid-item';
    
    isotopFilter.find('button:first-child').addClass('active');
    //Images Loaded
    isotopGrid.imagesLoaded(function() {
        /*-- init Isotope --*/
        var initial_items = isotopGrid.data('show');
        var next_items = isotopGrid.data('load');
        var loadMoreBtn = $('.load-more-toggle');
        var $grid = isotopGrid.isotope({
            itemSelector: isotopGridItem,
            layoutMode: 'masonry',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: isotopGridItem,
            }
        });  
        /*-- Isotop Filter Menu --*/
        isotopFilter.on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            isotopFilter.find('button').removeClass('active');
            $(this).addClass('active');
            // use filterFn if matches value
            $grid.isotope({
                filter: filterValue
            });
        });
        /*-- Update Filter Counts --*/
        function updateFilterCounts() {
            // get filtered item elements
            var itemElems = $grid.isotope('getFilteredItemElements');
            if (isotopGridItemSelector.hasClass('hidden')) {
                isotopGridItemSelector.removeClass('hidden');
            }
            var index = 0;
            $(itemElems).each(function() {
                if (index >= initial_items) {
                    $(this).addClass('hidden');
                }
                index++;
            });
            $grid.isotope('layout');
        }
        /*-- Function that Show items when page is loaded --*/
        function showNextItems(pagination) {
            var itemsMax = $('.hidden').length;
            var itemsCount = 0;
            $('.hidden').each(function() {
                if (itemsCount < pagination) {
                    $(this).removeClass('hidden');
                    itemsCount++;
                }
            });
            if (itemsCount >= itemsMax) {
                loadMoreBtn.hide();
            }
            $grid.isotope('layout');
        }
        /*-- Function that hides items when page is loaded --*/
        function hideItems(pagination) {
            var itemsMax = $(isotopGridItem).length;
            var itemsCount = 0;
            $(isotopGridItem).each(function() {
                if (itemsCount >= pagination) {
                    $(this).addClass('hidden');
                }
                itemsCount++;
            });
            if (itemsCount < itemsMax || initial_items >= itemsMax) {
                loadMoreBtn.hide();
            }
            $grid.isotope('layout');
        }
        /*-- Function that Load items when Button is Click --*/
        loadMoreBtn.on('click', function(e) {
            e.preventDefault();
            showNextItems(next_items);
        });
        hideItems(initial_items);
    });
    
    
    /* language dropdown */
    $(".language li a").on("click", function(e) {
        e.preventDefault();
        $(this).parent().find('.lang-dropdown').slideToggle('medium');
    })
    
    
    /*--------------------------
    counterUp
    ---------------------------- */
    $('.count').counterUp({
        delay: 10,
        time: 5000
    });
    
    
    /*=========================
		Toggle Ativation
	===========================*/
    function itemToggler() {
        $(".toggle-item-active").slice(0, 10).show();
        $(".item-wrapper").find(".loadMore").on('click', function(e) {
            e.preventDefault();
            $(this).parents(".item-wrapper").find(".toggle-item-active:hidden").slice(0, 5).slideDown();
            if ($(".toggle-item-active:hidden").length == 0) {
                $(this).parent('.toggle-btn').fadeOut('slow');
            }
        });
    }
    itemToggler();
    
    /*---------------------
        toggle item active2
    --------------------- */
    function itemToggler2() {
        $(".toggle-item-active2").slice(0, 16).show();
        $(".item-wrapper2").find(".loadMore2").on('click', function(e) {
            e.preventDefault();
            $(this).parents(".item-wrapper2").find(".toggle-item-active2:hidden").slice(0, 5).slideDown();
            if ($(".toggle-item-active2:hidden").length == 0) {
                $(this).parent('.toggle-btn2').fadeOut('slow');
            }
        });
    }
    itemToggler2();
    
    
    /* parallax active  */
    $('.parallax-window').parallax();
    
    
    /*---------------------
        Price slider
    --------------------- */
    var sliderrange = $('#slider-range');
    var amountprice = $('#amount');
    $(function() {
        sliderrange.slider({
            range: true,
            min: 0,
            max: 1200,
            values: [0, 800],
            slide: function(event, ui) {
                amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        amountprice.val("$" + sliderrange.slider("values", 0) +
            " - $" + sliderrange.slider("values", 1));
    });
    
    
    /* Cart Currency Search toggle active */
    $(".filter-active a").on("click", function(e) {
        e.preventDefault();
        $(this).parent().find('.shop-filter-menu').slideToggle('medium');
    })
    
    
    /*--------------------------
        Product Zoom
	---------------------------- */
    $(".zoompro").elevateZoom({
        gallery: "gallery",
        galleryActiveClass: "active",
        zoomWindowWidth: 300,
        zoomWindowHeight: 100,
        scrollZoom: false,
        zoomType: "inner",
        cursor: "crosshair"
    });
    
    
    /*----------------------------
    	Cart Plus Minus Button
    ------------------------------ */
    var CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });
    
    
    /*---------------------
        Product dec slider
    --------------------- */
    $('.product-dec-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<span class="product-dec-icon product-dec-prev"><i class="ti-angle-left"></i></span>',
        nextArrow: '<span class="product-dec-icon product-dec-next"><i class="ti-angle-right"></i></span>',
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    
    /*---------------------
        product dec slider 2
    --------------------- */
    $('.product-dec-slider-2').slick({
        infinite: true,
        slidesToShow: 4,
        vertical: true,
        slidesToScroll: 1,
        centerPadding: '60px',
        prevArrow: '<span class="product-dec-icon product-dec-prev"><i class="ti-angle-up"></i></span>',
        nextArrow: '<span class="product-dec-icon product-dec-next"><i class="ti-angle-down"></i></span>',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    
    /*--
	   pro-details color Active
    -----------------------------------*/
    $('.pro-details-color2-content ul li')
        .on('click', function() {
            $('.pro-details-color2-content ul li').removeClass('active');
            $(this).addClass('active');
        });
    $('.product-sidebar-active').stickySidebar({
        topSpacing: 80,
        bottomSpacing: 30,
        minWidth: 767,
    });
    
    
    /*-------------------------
        Create an account toggle
    --------------------------*/
    $('.checkout-toggle2').on('click', function() {
        $('.open-toggle2').slideToggle(1000);
    });

    $('.checkout-toggle').on('click', function() {
        $('.open-toggle').slideToggle(1000);
    });
    
    
    /*-------------------------
      tooltip
    --------------------------*/
    $('[data-toggle="tooltip"]').tooltip()
    
    
    /*------ Wow Active ----*/
    new WOW().init();
    
    
    /*-- masonry active 2  --*/
    var isotopGrid2 = $('.grid-2');
    var isotopGridItemSelector2 = $('.grid-item-2');
    var isotopGridItem2 = '.grid-item-2';
    //Images Loaded
    isotopGrid2.imagesLoaded(function() {
        /*-- init Isotope --*/
        var initial_items = isotopGrid2.data('show');
        var next_items = isotopGrid2.data('load');
        var loadMoreBtn = $('.load-more-toggle');

        var $grid = isotopGrid2.isotope({
            itemSelector: isotopGridItem2,
            layoutMode: 'fitRows',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: isotopGridItem2,
            }
        });
        /*-- Isotop Filter Menu --*/
        isotopFilter.on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            isotopFilter.find('button').removeClass('active');
            $(this).addClass('active');
            // use filterFn if matches value
            $grid.isotope({
                filter: filterValue
            });
        });
        /*-- Update Filter Counts --*/
        function updateFilterCounts() {
            // get filtered item elements
            var itemElems = isotopGrid2.isotope('getFilteredItemElements');
            if (isotopGridItemSelector2.hasClass('hidden')) {
                isotopGridItemSelector2.removeClass('hidden');
            }
            var index = 0;
            $(itemElems).each(function() {
                if (index >= initial_items) {
                    $(this).addClass('hidden');
                }
                index++;
            });
            isotopGrid2.isotope('layout');
        }
        /*-- Function that Show items when page is loaded --*/
        function showNextItems(pagination) {
            var itemsMax = $('.hidden').length;
            var itemsCount = 0;
            $('.hidden').each(function() {
                if (itemsCount < pagination) {
                    $(this).removeClass('hidden');
                    itemsCount++;
                }
            });
            if (itemsCount >= itemsMax) {
                loadMoreBtn.hide();
            }
            isotopGrid2.isotope('layout');
        }
        /*-- Function that hides items when page is loaded --*/
        function hideItems(pagination) {
            var itemsMax = $(isotopGridItem2).length;
            var itemsCount = 0;
            $(isotopGridItem2).each(function() {
                if (itemsCount >= pagination) {
                    $(this).addClass('hidden');
                }
                itemsCount++;
            });
            if (itemsCount < itemsMax || initial_items >= itemsMax) {
                loadMoreBtn.hide();
            }
            isotopGrid2.isotope('layout');
        }
        /*-- Function that Load items when Button is Click --*/
        loadMoreBtn.on('click', function(e) {
            e.preventDefault();
            showNextItems(next_items);
        });
        hideItems(initial_items);
    });
    
    
    
    /*--------------------------
        ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    
    /*----------------------------
        text-animation
    ------------------------------ */  
    $('.text-animate-1').textillate({
      loop: true,
      in: {
        effect: 'fadeInDown',
      },
      out: {
        effect: 'flip',
      },
    });
    
   
    $('#mobile-menu-active').slicknav({
        appendTo : ".header-area",
        label : '<i class="menu-icon-open ti-menu"></i><i class="menu-icon-colse  ti-close"></i> ',
        closedSymbol: '<i class="ti-plus"></i>',
        openedSymbol : '<i class="ti-minus"></i>',

    });
    
    
    
    
    
    



})(jQuery);