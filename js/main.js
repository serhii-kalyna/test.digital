$(document).ready(function(){
	$('.box4').click(function(){
		$('.more-info').toggle()
		$(this).css('order','-1')  //клік 1
		// $(this).css('order','0') //клік 2
	});
})