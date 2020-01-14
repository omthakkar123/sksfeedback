$('.carousel').carousel({
    fullWidth: true
});
setTimeout(autoplay, 3000);
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 3000);
}
$(document).ready(function () {
    $('select').formSelect();
});

M.textareaAutoResize($('#textarea1'));