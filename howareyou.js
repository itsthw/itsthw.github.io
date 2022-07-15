$(document).ready(function(){

	$.getJSON("test.json", function(data){
		console.log(data)

		$('.home-info').html(data.home-info)


    }).fail(function(){
    	console.log("error")
    })

})
