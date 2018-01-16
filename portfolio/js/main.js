$(function(){
	$('.event-photo').slick();
	$('.productimage').slick();
	$('.snapshotimage').slick();
});

$(function initUrlNav() {
	page('/', function(){
		unloadProduct();
		loadHome();
	});
	page('/clothing', function(){
		unloadProduct();
		switchTabs('clothing');
	});
	page('/deli', function(){
		unloadProduct();
		switchTabs('deli');
	});
	page('/artspace', function(){
		unloadProduct();
		switchTabs('artspace');
	});
	page.start();
});