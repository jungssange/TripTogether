function fn_WizenToggle(inx, key){
	if ($("#div_Wizen"+inx).html()=="") {
	    $.ajax({url: "docViewSub.dmn",cache: false,data: { docno:key}}).done(
	    		function(data){
	    			var a = document.getElementById("div_Wizen"+inx);
					a.style.display = "block";
	    			$("#div_Wizen"+inx).html(data);
	    			
	    		}	
	    ); 			
	}	
	
	$('#parentDoc .link').removeClass('on');
	$('#parentDoc .ct').slideUp();
	$('#parentDoc .no-click .ct').stop();
	
	if( $('#parentDoc a.link').next().css('display') == 'none' ){
		$('#parentDoc .no-click .ct').stop();
		$('#parentDoc a.link').addClass('on');
		$('#parentDoc a.link').next().slideDown();
	}
}

function fn_SuperAdminToggle(inx, key){
	if ($("#div_Wizen"+inx).html()=="") {
	    $.ajax({url: "admSuperAdminDocViewSub.dmn",cache: false,data: { docno:key}}).done(
	    		function(data){$("#div_Wizen"+inx).html(data);}	
	    ); 			
	}	
    
	if( $("#div_Wizen"+inx).css("display") != "none" ){
		$("#div_Wizen"+inx).slideUp("normal");
		$("#div_WizenMsg"+inx).attr("title", "클릭하시면 제안내용을 열어 보실 수 있습니다.");
		$("#div_WizenBtn"+inx).attr("class", "openers");
		$("#div_WizenBtn"+inx).html("열기");
	} else {
		$("#div_Wizen"+inx).slideDown("normal");
		$("#div_WizenMsg"+inx).attr("title", "클릭하시면 제안내용을 닫으실 수 있습니다.");
		$("#div_WizenBtn"+inx).attr("class", "openers_on");
		$("#div_WizenBtn"+inx).html("닫기");
	}
}

function fn_showFileDiv(){
	if( $("#div_file").css("display") != "none" ){
		$("#div_file").slideUp("normal");
	} else {
		var p = $("#imgFile").position(); 
		var w = $("#div_file").width();//$("#div_file").css("width");
	    $("#div_file").css({top: p.top+15, left: p.left-w});
		$("#div_file").slideDown("normal");
	}
}

function fn_doclike(act, str){
	
    $.ajax({
    	url: act+".dmn",
    	type: "post",
    	dataType: "json",
    	cache: false,
    	data: {docno: str},
    	success : function(responseData){
    		/*if(responseData.liketype == 2){
    			$("#grayBgBox").css("display", "none");
    		}*/
            $("#divLike"+str).html(responseData.ret); 
            $("#divLikeMsg"+str).html(responseData.msg);
        }
    });	
}

function fn_print(docno){
	window.open("wizSearchList_docPrint.dmn?docno="+docno, "", "width=800px,height=700px,status=,resizable=false,scrollbars=yes");  
	return;
	
}

function fn_docDelete(no){
	if(confirm("삭제하시겠습니까?")){
		location.href="WizenDelete.dmn?docno="+no;
	}
}

function fn_superAdminDocDelete(no){
	if(confirm("삭제하시겠습니까?")){
		location.href="SuperAdminWizenDelete.dmn?docno="+no;
	}
}

function fn_popupJudgeResultDetail(judgseq){
	window.open("popupJudgeResultDetail.dmn?judgseq="+judgseq, "", "width=530px,height=430px,status=,resizable=false,scrollbars=yes");  
}


function popupDocTogetherLsit(docno){
	window.open("popupDocTogetherList.dmn?docno="+docno, "", "width=300px,height=400px,top=0px,left=200px,status=,resizable=false,scrollbars=true");
}


function fn_changeTab(spnId, selectedId, docno_procseq){
	//prompt('1', spnId);
	//prompt('2', selectedId);
	//prompt('3', docno_procseq);
	var span = document.getElementsByTagName("span");
	for (var i=0;i<span.length;i++){
		if(span[i].id.indexOf(spnId) > -1){
			if(span[i].id == selectedId){
				
				var a = document.getElementById("div_Wizen_" + docno_procseq);
				if(typeof(a) != undefined && a != null)
					a.style.display = "block";
				
				//alert(selectedId);
				//document.getElementById(selectedId).classname = "active";
				$(selectedId).attr('class', 'active');

			}
			else{

				var aa = span[i].id.replace(spnId,'');
				var b = document.getElementById("div_Wizen" + aa);
				
				if(typeof(b) != undefined && b != null)
					b.style.display = "none";
				
				var c = document.getElementById("spnjudgeAreaTab" + aa);
				
				if(typeof(c) != undefined && c != null)
					$(c).attr('class', '');
				
				//document.getElementById(selectedId).classname = "active";
			}
		}
	}
	
	//alert(spnId);
	//alert(selectedId);
}

function fn_changeTabPop(spnId, selectedId, docno_procseq){
	var span = document.getElementsByTagName("span");
	for (var i=0;i<span.length;i++){
		if(span[i].id.indexOf(spnId) > -1){
			if(span[i].id == selectedId){
				
				var a = document.getElementById("div_WizenPop_" + docno_procseq);
				if(typeof(a) != undefined && a != null)
					a.style.display = "block";
				
				//alert(selectedId);
				//document.getElementById(selectedId).classname = "active";
				$(selectedId).attr('class', 'active');

			}
			else{

				var aa = span[i].id.replace(spnId,'');
				var b = document.getElementById("div_WizenPop" + aa);
				if(typeof(b) != undefined && b != null)
					b.style.display = "none";
				
				var c = document.getElementById("spnjudgeAreaTabPop" + aa);
				if(typeof(c) != undefined && c != null)
					$(c).attr('class', '');
				
				//document.getElementById(selectedId).classname = "active";
			}
		}
	}
	
	//alert(spnId);
	//alert(selectedId);
}






function fileSizeChk() {
	var fileCount=document.getElementsByName("uploadfile").length;
	var zeroCnt = 0;
	for(var j=0;j<=fileCount-1;j++){
		var fileCheckArr=new Array(fileCount);
		if(document.getElementsByName("uploadfile")[j].files[0]!=undefined){
			var fileSize=document.getElementsByName("uploadfile")[j].files[0].size;
				if(fileSize==0){
					fileCheckArr[j]=1;
					if(fileCheckArr[j]==1){
						document.getElementsByName("uploadfile")[j].value="";
						zeroCnt++;
					}
				}
			}
	}
	if(zeroCnt>0) {
		alert("내용이 없는 파일이 있습니다. 파일을 확인해 주세요");
		return false;
	}
}




// 심사표 평가내용모아보기 팝업
var judgeDetailDialog=null;
function judgeDetailDialogOpen(docno, procseq){
   	if (judgeDetailDialog==null) {
   		judgeDetailDialog = $( "#judgeDetailDialog" ).dialog({
   			autoOpen : false,
			resizable : false,
			draggable: false,
			resizable: false,
   		    /* height: 800, */
   		    width: 1200,
   		 	open : function() {
				$(this).parents('.ui-dialog').attr(
						'tabindex', -1)[0].focus();
			},
			modal : true
   		});
   		$(".ui-dialog-titlebar" ).css("display", "none" );
   		$("#judgeDetailDialog").css("padding", "0px");
   	}
   	
	 
	//window.open("popupSignPath.dmn", "", "width=900px,height=580px,top=0px,left=200px,status=,resizable=false,scrollbars=true");
	$.ajax({
		url: "popupJudgeDetail2.dmn",
	  	cache: false,
	  	data: {
	  		docno: docno,
	  		procseq: procseq
	  	}
	}).done(function(data){
		$("#judgeDetailDialog").html(data);
		judgeDetailDialog.dialog( "open" );
		judgePoint();
	})	
}


function fn_judgeDetailDialogClose(){
	judgeDetailDialog.dialog( "close" );	
	window.parent.jQuery('#judgeDetailDialog').dialog('close');
}
