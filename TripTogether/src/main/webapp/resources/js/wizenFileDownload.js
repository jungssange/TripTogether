var currentObj;
function fn_showFileDivInList(obj){
	if (currentObj==obj) {
		fnDivClose();
		return;
	}
	
	currentObj=obj;
	$.ajax ({
    	url: "fileList4Ajax.dmn",
    	cache: false,
    	data: { docno: obj }    	
	}).done(function(data){ 
		$("#div_file").css("left", ($(document).width()-500)/2);
		$("#div_file").css("top", "100px");
		$("#div_file").html(data); 
		$("#div_file").show('normal');
	}); 
}
function fnDivClose(){
	$("#div_file").hide('normal');
	currentObj=null;
}