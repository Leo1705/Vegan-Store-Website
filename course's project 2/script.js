$(document).ready(function () {
    $('a.selected').hover(function () {
        $(this).css('background', 'none');
    }, function () {
        $(this).css('background', '#7c4721');
    });
});