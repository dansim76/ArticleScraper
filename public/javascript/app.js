
function displayResults(articles){
    event.preventDefault();
	var id = $(this).attr("value");
	$("#addnote").fadeIn(300).css("display", "flex");
	$("#add-note").attr("value", id);
	$.get("/" + id, function(data) {
		$("#article-title").text(data.title);
		$.get("/note/" + id, function(data) {
			if (data) {
				$("#note-title").val(data.title);
				$("#note-body").val(data.body);
			}
		});
	});  
}

function addnote(event){
    event.preventDefault();
    var id = $(this).attr("value");
    var obj = {
        title: $("#note-title").val().trim(),
        body: $("#note-body").val().trim()
    }
    $.post("/note/" + id, obj,function(data){
        window.location.href = "/saved"
    })
}


function changestatus(){
    var status= $(this).attr("value");
    if(status ==="Saved"){
        $(this).html("Unsave")
    }
}
function chnageback(){
    $(this).html($(this).attr("value"))
}

$(document).on("click", ".addnote-button", shownote);
$(document).on("click", "#add-note", addnote);
$(".status").hover(changestatus, changeback);
$("#close-note").on("click", function() {
	$("#addnote").fadeOut(300);
});

// $("#scrape").on("click",function(){
//     $(".showArticle").empty();
//     var thisId = $(this).attr("data-id")
//     $.ajax({
//         method:"GET",
//         url: "/articles" +
//     })
    
// }).then(function(data){
//     console.log(data);
    
//     $(".showArticle").append("h1"+ data.title+"</h1>")
    
    
// })
// $(".noteSaved").on("click",function(){
//     var thisId = $(this).attr("data-id");

//     $.ajax({
//         method:"GET",
//         url: "/articles" + thisId,
//         data:{newNote : $("#newNote").val()}

//     })
//     .then(function(data){
//         console.log(data);
//         $("#newNote").empty();

//     })


// })
