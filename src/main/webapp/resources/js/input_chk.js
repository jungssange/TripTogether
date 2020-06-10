//////////////////////////////////////탑메뉴바/////////////////////////////////////////////

// 숫자만
function onlyNumber(event) {	
    var key = window.event ? event.keyCode : event.which; 
    if ((event.shiftKey == false) && ((key  > 47 && key  < 58) || (key  > 95 && key  < 106)
    || key  == 35 || key  == 36 || key  == 37 || key  == 39  // 방향키 좌우,home,end  
    || key  == 8  || key  == 46 || key == 13 ) // del, back space,enter
    ) {
        return true;
    }else {
        return false;
    }    
}


//<script> 사용 여부
function isscriptin(str) {	
	var filter = /<script/i;
	
	return filter.test(str == true);
}

function trim (str) {
	return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

function fByteCount(arg,maxLength,obj) {
	var str, msg;
	var len = 0;
	var temp;
	var count = 0;

	msg = arg.value;
	str = new String(msg);
	len = str.length;

	for (k=0 ; k<len ; k++){
		temp = str.charAt(k);

		if (escape(temp).length > 4) {
			count += 2;
		} else if (temp == '\r' && str.charAt(k+1) == '\n') { // \r\n일 경우
			count += 2;
		} else if (temp != '\n') {
			count++;
		}
	}

	document.getElementById(obj).innerHTML = count;

	if(parseInt(count) > parseInt(maxLength)) {
		arg.blur();
		arg.focus();
		alert(maxLength + "자 까지만 입력이 가능합니다."); 
		cutChar(arg,maxLength,obj);
	}
}

// 제한된수에 따라 글자 자르기
function cutChar(arg,maxLength,obj) {
	var str, msg;
	var len = 0;
	var temp;
	var count = 0;

	msg = arg.value;
	str = new String(msg);
	len = str.length;

	for(k = 0; k < len; k++) {
		temp = str.charAt(k);

		if(escape(temp).length > 4) {
			count += 2;
		} else if (temp == '\r' && str.charAt(k+1) == '\n') { // \r\n일 경우
			count += 2;
		} else if(temp != '\n') {
				count++;
		}

		if(parseInt(count) > parseInt(maxLength)) {
			str = str.substring(0,k);
			break;
		}
	}

	arg.value = str;
	fByteCount(arg,maxLength,obj);
}
function chk_value(obj, name){
	if (typeof $(obj).val()=="undefined" ) return true;
	
	if($(obj).val().length==0){
		alert("[" + name + "] 항목은 필수 입력입니다.");
		
		var idStr=obj;
	    var offset = $(idStr).offset();
	    $('html, body').animate({scrollTop : offset.top-100}, 400);
		$(obj).focus();
		return false;
	}
	return true;
}

/**
 * 세자리마다 콤마처리
 * @param str
 * @returns
 */
function setComma(str) { 
    var temp_str = String(str); 

    for(var i = 0 , retValue = String() , stop = temp_str.length; i < stop ; i++) retValue = ((i%3) == 0) && i != 0 ? temp_str.charAt((stop - i) -1) + "," + retValue : temp_str.charAt((stop - i) -1) + retValue;
    return retValue; 
}

function vComma(obj){ 
	nocomma = (obj.value).replace(/,/gi,''); // 불러온 값중에서 컴마를 제거
	
	if (nocomma == 0) {  // 첫자리의 숫자가 0인경우 입력값을 취소 시킴  
		obj.value = ''; 
	        return; 
	}else {
		obj.value = setComma(nocomma); 
	} 
} 

function ev_fileChange(obj){

	var fileSize = 1024*1024*10; 	// 10M
	var file_list = obj.files;
	for (var i=0,f;f=file_list[i];i++) {
		if (f.size >fileSize) {
		 	alert ("10M 이상의 파일은 첨부할 수 없습니다.");
		 	break;
		}
	}
}


/**
 * 이미지파일 확장자 확인
 * @param str
 * @returns {Boolean}
 */
function imageExtCheck(str){
	
	var start = str.lastIndexOf('.');
  	var ext = str.substring(start+1).toLowerCase();
  	
  	imgArray = new Array('gif','jpg','jpeg','png','.bmp','.tif','.tiff');	

	var temp = 0 ;
	for(var i=0; i<imgArray.length;i++){
		if(imgArray[i]==ext){
			temp = temp +1;
		}
	}
	
	if(temp==0){
		
		return false;
	}else{
		return true;
	}		
}



