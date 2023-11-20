<script>
$(function() {
var checkHomeRibbon = function() {
var $siteHolder = $('.site-holder');
var $siteBottom = $('.summary-footer');
var $ribbon = $('.logo-box');
if ($(document).scrollTop() + $(window).height() > $siteHolder.outerHeight() - $siteBottom.outerHeight()) {
$ribbon.addClass('is-anchored');
} else {
$ribbon.removeClass('is-anchored');
}
}
checkHomeRibbon();
$(window).on('scroll resize', function() {
checkHomeRibbon();
});
});
</script>