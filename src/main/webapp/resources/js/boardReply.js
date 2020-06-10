var msg = "댓글을 달아주세요.";

function fn_memoFocus(obj){
	if (obj.value==msg) obj.value="";
} 

function fn_reFormSubmit(){
	var recontents = $('#recontents').val(); 
	if ( recontents=="" || recontents==msg){
		alert("댓글 내용을 입력해 주세요!");
		return;
	}
	if ($("#hCurrentMsgByte").val() > 100)
	{
		alert("댓글은 100자를 넘을 수 없습니다.");
		return;
	}
	/*if ( recontents.length>200){
		alert("댓글은 100자를 넘을 수 없습니다.");
		return;
	}*/

	// 2015-08-06. 김준철. 대댓글란이 열려있을 때 댓글을 입력하는 경우 대댓글이 입력되는 버그 수정.
	$('#parentno').val("");
	$('#reno').val("");
	
	$('#replyForm').submit();
} 

function fn_re2formSubmit(){
	var re2contents = $('#re2contents').val();
	if ( re2contents=="" || re2contents==msg){
		alert("댓글을 입력해 주세요!");
		return;
	}
	if ( re2contents.length>200){
		alert("댓글은 200자를 넘을 수 없습니다.");
		return;
	}

	$('#replyForm').submit();
} 


      
var inHtml ="<fieldset>"+
			"<div class='txarea_wrap' style='float:left; width: 615px'>"+ 
			"<textarea id='re2contents' name='re2contents' rows='3' cols='75' onfocus='fn_memoFocus(this)'></textarea>"+
			"</div>"+
			"<div class='btn_box'>&nbsp;&nbsp;&nbsp;<a href='#' style='width: 70px; background: url(images/common/btn_ok.gif) no-repeat 0px 0px; height: 35px;float:right;' onclick='fn_re2formSubmit();'></a></div>"+
			"</fieldset>";

		
function fn_ReplyAdd(no){
	var reno = $('#reno').val();
	if (reno!="") {
		$('#divReplyView'+reno).html($('#re2contents').val());
		$('#reno').val("");
	}

	var parentno = $('#parentno').val();
	
	if (parentno!="") {
		$('#divReplyAdd'+parentno).hide();
		$('#divReplyAdd'+parentno).html("");
	}
	
	$('#parentno').val(no);
	
	$('#divReplyAdd'+no).html(inHtml);
	
	$('#divReplyAdd'+ no + ' .btn_box')[0].style.top = '0px';
	$('#divReplyAdd'+ no + ' .btn_box')[0].style.right = '0px';
	
	$('#divReplyAdd'+no).show();
	$('#re2contents').val(msg);
}

function fn_ReplyModify(no, depth){
	var parentno = $('#parentno').val();
	if (parentno!="") {
		$('#divReplyAdd'+parentno).hide();
		$('#divReplyAdd'+parentno).html("");
		$('#parentno').val("");
	}
	
	var reno = $('#reno').val();
	if (reno!="") {
		$('#divReplyView'+reno).html($('#re2contents').val());
	}
	
	$('#reno').val(no);
	var txt = $('#divReplyView'+no).text();
	$('#divReplyView'+no).html(inHtml);
	$('#re2contents').html($.trim(txt));
	
	if(depth > 0) {
		$('#divReplyView'+ no + ' .txarea_wrap')[0].style.width = '565px'; /* 김준철: 대댓글 창 사이즈 수정 */
		$('#divReplyView'+ no + ' .btn_box')[0].style.top = '62px';
		$('#divReplyView'+ no + ' .btn_box')[0].style.right = '30px';
	} else {
		$('#divReplyView'+ no + ' .txarea_wrap')[0].style.width = '615px';
		$('#divReplyView'+ no + ' .btn_box')[0].style.marginTop = '-5px';
	}
	
	$('#re2contents').focus();
}


function fn_ReplyDelete(no, preSrr){
	if (confirm("삭제하시겠습니까?")){
		$('#reno').val(no);
		$('#replyForm').attr('action', preSrr + 'ReplyDelete.dmn'); 
		$('#replyForm').submit();
	}
}	


function chkMsgLength(objMsg) {
	st_byte = document.getElementById('currentMsgByte');
	
	//공백 포함 
	var length = lengthMsg(objMsg.value);
	var text = objMsg.value;

	//st_len.innerHTML = text.length;//현재 글자수를 넣는다
	st_byte.innerHTML = length;//현재 byte수를 넣는다
	$("#hCurrentMsgByte").val(length);
}

function lengthMsg(objMsg) {
	var nbytes = 0;
	for (i=0; i<objMsg.length; i++){

		var ch = objMsg.charAt(i);

		if(escape(ch).length > 4) { // 한글일경우
			nbytes += 2;
		}else if (ch == '\n') { // 줄바꿈일경우
			if (objMsg.charAt(i-1) != '\r') { // 하지만 밀려서 줄이 바뀐경우가 아닐때
				nbytes += 1;
			}
		}else if (ch == '<' || ch == '>') { // 특수문자는 4byte
			nbytes += 4;
		} else { //나머지는 모두 1byte
			nbytes += 1;
		}

	}//END FOR
	return nbytes;
}