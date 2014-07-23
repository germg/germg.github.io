$(function() {
    $( ".button" ).button();
    $( document ).tooltip();
    $( ".accordion" ).accordion({
      collapsible: true,
      heightStyle: "content"
    });

    $('ul.sf-menu').sooperfish();
    $('.top').click(function() {$('html, body').animate({scrollTop:0}, 'fast'); return false;});
});

function getCurrentUrl(){
	var url = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;

    return url;
}