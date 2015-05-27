$(function(){
	$('#btn1').click(function(){
		$('#result').append(Date()+'<br>');
	});
	$('#btn2').click(function(){
		$('#result').html('');
	});
})