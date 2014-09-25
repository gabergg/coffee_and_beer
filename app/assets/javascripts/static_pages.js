/* javascript to slide header up when scrolling up from
middle/bottom of page, disappear again when scrolling down */

var previousScroll;
var headerOrgOffset;

$(window).load(function() {
    previousScroll = 0;
    headerOrgOffset = $('#header-wrap').height();
});

$(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    console.log(headerOrgOffset);
    if (currentScroll <= headerOrgOffset) {
        $('#header-wrap').show();
    }
    else {
        if (currentScroll <= previousScroll) {
            $('#header-wrap').slideDown(150);
        } else {
            $('#header-wrap').slideUp(150);
        }
    }
    previousScroll = currentScroll;
});