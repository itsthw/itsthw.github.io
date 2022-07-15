$(document).ready(function(){

	$.getJSON("howareyou.json", function(data){
		console.log(data)

		$('.home-info').html(data.home-info)


    }).fail(function(){
    	console.log("error")
    })

})
