$(function() {
    var element   = $('#template');
    var speed = 25, scroll = 10, scrolling;

    $('#up').mouseenter(function() {
        scrolling = window.setInterval(function() {
            element.scrollTop( element.scrollTop() - scroll );
        }, speed);
    });

    $('#down').mouseenter(function() {
        scrolling = window.setInterval(function() {
            element.scrollTop( element.scrollTop() + scroll );
        }, speed);
    });

    $('#up, #down').bind({
        click: function(e) {
            e.preventDefault();
        },
        mouseleave: function() {
            if (scrolling) {
                window.clearInterval(scrolling);
                scrolling = false;
            }
        }
    });
});
