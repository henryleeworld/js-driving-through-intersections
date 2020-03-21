(function($) {
    var btn_start = $('#button'),
        btn_stop = $('#button2'),
        btn_reverse = $('#button3'),
        btn_restart = $('#button4'),
        red_car = $('#red_x5F_car'),
        green_car = $('#green_x5F_car'),
        yellow_bus = $('#yellow_x5F_bus'),
        ballon = $('#balloon'),
        ballon_shadow = $('#balloonShadow'),
        icons = $('.animated-elements');

    var tl = new TimelineMax();

    tl.to(red_car, 2, {
        x: "-=640px",
        y: "+=370px"
    });
    tl.to(yellow_bus, 4, {
        x: "+=1180",
        y: "+=680px"
    }, .5);
    tl.to(green_car, 2.5, {
        x: "+=1180",
        y: "+=680px"
    }, .4);
    tl.to(red_car, 3, {
        x: "-=615px",
        y: "+=370px"
    }, 3);
    tl.to(ballon, 3, {
        y: "-=600px"
    }, 1.5);
    tl.to(ballon_shadow, 3, {
        scale: 2
    }, 1.5);

    btn_start.on('click', function() {
        tl.play();
    });

    btn_reverse.on('click', function() {
        tl.reverse();
    });

    btn_stop.on('click', function() {
        tl.stop();
    });

    btn_restart.on('click', function() {
        tl.restart();
    });

}(jQuery));