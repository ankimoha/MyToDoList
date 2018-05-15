//check the Todos
/*$("li").on('click',function(){*/
//if you write like the above, the property wil only apply tot he tags which are availabel at the point of writing the program
//we write "ul" instead of "li" because we will be adding new li's in the future insode the parent ul

//alternative code
$("ul").on('click',"li",function(){
	//change the only li that called it
/*	$(this).css("color","gray");
	$(this).css("text-decoration","line-through");*/

	//to change the striking on and off of the list
/*	if ($(this).css("color")==="rgb(128, 128, 128)"){
		//turn it black
		$(this).css({
			color:"black",
			textDecoration:"none"
		});
	}
	else{	
		$(this).css({
			color:"gray",
			textDecoration:"line-through"
		});
	}*/
	//we can omit all of this with a singe class

	$(this).toggleClass("completed");
})

//click on X to delete toDo
$("ul").on("click","span",function(event){
	//the below function removes the span along eith it's parent
	$(this).parent().fadeOut(500,function(){
		//the "this" here refers to the parent tag which is "li",
		//not span tag
		$(this).remove();
	});
	//to stop hitting the events like ul and body which it is living on
	event.stopPropagation();
});

//adding a listener to the textbox
$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and addd it to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(1000);
})