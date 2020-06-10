//전역변수 선언
var ctxRoot = "http://" + document.location.host + "/wizen3";

/* 숫자만 입력받기 */
function fn_press(event, type) {
    if(type == "numbers") {
        if(event.keyCode < 48 || event.keyCode > 57) return false;
        //onKeyDown일 경우 좌, 우, tab, backspace, delete키 허용 정의 필요
    }
}

/* 한글입력 방지 */
function fn_press_han(obj)
{
    //좌우 방향키, 백스페이스, 딜리트, 탭키에 대한 예외
    if(event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46 ) return;
    obj.value = obj.value.replace(/[\ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
}

//-------------------------------------------------------------------------------------
//  숫자만 입력받기
// <INPUT type="text" name="textbox" onkeypress="pubOnlyNumber();">
//-------------------------------------------------------------------------------------
function pubOnlyNumber() {
	if (!(event.keyCode >= 48 && event.keyCode <= 57))
		event.returnValue = false;
}

//////////////////////////////////////////////////////////////////////////////
//	첨부갯수 정의
//////////////////////////////////////////////////////////////////////////////
function pubShowAttachInput(obj) {
	var	i, index = obj.value;
	var fcount = document.all.attachmentInput.length
	if (index == 0) {
		for (i=0; i < fcount; i++) {
			document.all.attachmentInput[i].value = "";
			document.all.attachmentInput[i].style.display = "none";
		}
		return ;
	} else if (index < 0 || index > fcount)
		return;
	
	for (i=0; i < index; i++)
		document.all.attachmentInput[i].style.display = "";
	for (i=index; i < fcount; i++) {
		document.all.attachmentInput[i].value = "";
		document.all.attachmentInput[i].style.display = "none";
	}
	return;
}

// ====================================================================================
// 리스트에서 체크박스 전체선택 (반전)
//
// oAllChkBox : 전체선택 체크박스
// oChkBox	: 처리될 체크박스
// ====================================================================================
function chk_all_chkbox(oAllChkBox, oChkBox) {
	var bln_checked;

	if (oAllChkBox.checked)
		bln_checked = true;
	else
		bln_checked = false;

	if (eval(oChkBox)) {
		if (eval(oChkBox.length)) {
			var chkbox_count = oChkBox.length;

			for (var i = 0; i < chkbox_count; i++)
				oChkBox[i].checked = bln_checked;
		}
		else
			oChkBox.checked = bln_checked;
	}
}

/*
 * 0:단일사용자 선택 팝업
 * 1:부서트리와 부서 검색해서 부서 선택 팝업
 * 2:부서트리에서 부서 선택 팝업
 * 3:온라인심사그룹에서 그룹 선택 팝업
 * 4:제안 카테고리 선택 팝업
 * 5:모든심사그룹에서 그룹선택 팝업[관리자용]
 * 6:그룹선택 팝업(온라인심사그룹 제외)
 */
function fnPopup(poptype, id, nm){
	
	if(poptype == "U" || poptype == "N") poptype = 0;
	else if(poptype == "D" || poptype == "M") poptype = 1;
	else if(poptype == "S") poptype = 1;
	else if(poptype == "G") poptype = 3;
	else if(poptype == "C") poptype = 4;

	var popupURL = ["/singleUserList.dmn"
	                , "/deptList.dmn"
	                , "/deptTree.dmn"
	                , "/jGList.dmn?onlineyn=Y"
	                , "/categoryList.dmn"
	                , "/jGList.dmn"
	                , "/jGList.dmn?onlineyn=N"
	                ];
	
	var popupTITLE = ["사용자 조회"
	                  , "부서 조회"
	                  , "부서 조회"
	                  , "심사그룹 조회"
	                  , "제안분류 조회"
	                  , "심사그룹 조회[전체]"
	                  , "심사그룹 조회"
	                  ];

	var popupURL2 = ["/singleUserList.dmn"
	                , "/deptList.dmn"
	                , "/deptTree.dmn"
	                , "/jGList.dmn?onlineyn=Y"
	                , "/categoryList.dmn"
	                , "/jGList.dmn"
	                , "/jGList.dmn?onlineyn=N"
	                ];



	var argParam = new Array();
	var argProperty = new Array();
	
	argParam[0] = "../common/common_modal.html";
	argParam[1] = popupURL[poptype];
	argParam[2] = popupTITLE[poptype];
	argParam[3] = $(id).value;
	argParam[4] = $(nm).value;
	argParam[5] = popupURL2[poptype];
	
	if(poptype  < 2){
		argProperty = [810, 550, 0];
	} else {
		argProperty = [400, 500, 0];
	}

	try{
		var rtnVal= _callModalPopup(argParam, argProperty);
		
		if(rtnVal[0]) {
			
			if (rtnVal[1].length > 0) {
				var rtnObj = rtnVal[1];
				
				$(id).value = rtnObj[0]; 
				$(nm).value = rtnObj[1];
				
		  	}
		}		
	}
  catch(e){
	  alert(e);
  }
	
}

/////////////////////////////////////////////////////////////////////////////////////
// Javascript URL Encode, Decode to UTF-8
/////////////////////////////////////////////////////////////////////////////////////
/**
*
*  Base64 encode / decode
*  http://www.webtoolkit.info/
*
**/

var Base64 = {

	// private property
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

	// public method for encoding
	encode : function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;

		input = Base64._utf8_encode(input);

		while (i < input.length) {

			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);

			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;

			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}

			output = output +
			this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
			this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

		}

		return output;
	},

	// public method for decoding
	decode : function (input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;

		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

		while (i < input.length) {

			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));

			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;

			output = output + String.fromCharCode(chr1);

			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}

		}

		output = Base64._utf8_decode(output);

		return output;

	},

	// private method for UTF-8 encoding
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";

		for (var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	},

	// private method for UTF-8 decoding
	_utf8_decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;

		while ( i < utftext.length ) {

			c = utftext.charCodeAt(i);

			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}

		}

		return string;
	},
	
	URLEncode : function (string) {   
		return escape(this._utf8_encode(string));   
	},   
  
	// public method for url decoding   
	URLDecode : function (string) {   
		return this._utf8_decode(unescape(string));   
	}
}				

function newGoUrl(url) {
	location.href = ctxRoot + "/" + url;
}


/* 페이지 이동 */
function goUrl(mode, pid, id, url) {
	if (mode == 1) {
		parent.mainFrame.location.href = ctxRoot + "/" + url;
		//parent.topFrame.location.href = ctxRoot + "/TopMenu.do?menuPID=" + pid +"&menuCID=" +id;
		if(pid.search("ADM") == -1 ){
			
			if(pid.search("COP") == 0 || pid.search("DIS") == 0){
				parent.leftFrame.location.href = ctxRoot + "/cop/none.jsp";
				parent.document.getElementById("parMainFrameSet").rows = "133,*,0";
				parent.document.getElementById("subFrameSet").cols = "0,*,0";	
				parent.document.getElementById("MainFrameSet").rows = "0,*";
			/*}else if(pid == "WIZ0300"){
				parent.document.getElementById("subFrameSet").cols = "220,*";
				parent.document.getElementById("MainFrameSet").rows = "30,*";
				parent.document.getElementById("subMainFrameSet").cols = "*,1150,*";
				parent.leftFrame.location.href = ctxRoot + "/menu/WizTreeLeftMenu.jsp" + "?parentid=" + pid + "&menuid=" + pid;
				
				//메뉴 네비게이션 Frame
				parent.mainTopFrame.location.href = ctxRoot + "/NaviMenu.do?method=getNaviMenuList" + "&parentid=" + pid + "&menuid=" + url;
				*/
			//}else if(pid.search("SNS") == 0){
			//	parent.document.getElementById("subFrameSet").cols = "0,*";
			//	parent.mainFrame.location.href = ctxRoot + "/main.do";
			//	pubOpenWindow(url,"",1100,800,"yes","yes");
			}else{
				parent.document.getElementById("parMainFrameSet").rows = "133,*,30";
				parent.document.getElementById("subFrameSet").cols = "164,*";
				parent.document.getElementById("MainFrameSet").rows = "51,*";
				parent.document.getElementById("subMainFrameSet").cols = "*,1150,*";
				
				parent.leftFrame.location.href = ctxRoot + "/LeftMenu.do" + "?parentid=" + pid + "&menuid=" + id;
				
				//메뉴 네비게이션 Frame
				if(id == ""){
					//Top메뉴 클릭시
					parent.mainTopFrame.location.href = ctxRoot + "/NaviMenu.do?method=getNaviMenuList" + "&parentid=" + pid + "&menuid=" + url;
				} else {
					//메인화면 테마제안 상세정보/응모하기 버튼 클릭시
					parent.mainTopFrame.location.href = ctxRoot + "/NaviMenu.do?method=getNaviMenuList" + "&parentid=" + pid + "&menuid=" + id;
				}
			}
		} else {
		
			parent.leftFrame.location.href = ctxRoot + "/LeftMenu.do" + "?parentid=" + pid + "&menuid=" + id;
			
			//메뉴 네비게이션 Frame
			parent.mainTopFrame.location.href = ctxRoot + "/NaviMenu.do?method=getNaviMenuList" + "&parentid=" + pid + "&menuid=" + url;
			
			parent.document.getElementById("parMainFrameSet").rows = "133,*,30";
			parent.document.getElementById("subFrameSet").cols = "164,*";
			parent.document.getElementById("MainFrameSet").rows = "51,*";
			parent.document.getElementById("subMainFrameSet").cols = "*,1150,*";
		}	
		
	} else if(mode == 2){	
		parent.leftFrame.location.href = ctxRoot + "/LeftMenu.do" + "?parentid=" + pid + "&menuid=" + id;
		parent.mainFrame.location.href = ctxRoot + "/" + url;	
		
		//메뉴 네비게이션 Frame
		parent.mainTopFrame.location.href = ctxRoot + "/NaviMenu.do?method=getNaviMenuList" + "&parentid=" + pid + "&menuid=" + id;
		
		parent.document.getElementById("parMainFrameSet").rows = "133,*,30";
		parent.document.getElementById("subFrameSet").cols = "164,*";
		parent.document.getElementById("MainFrameSet").rows = "51,*";
		parent.document.getElementById("subMainFrameSet").cols = "*,1150,*";
		
	} else if(mode == 3){
	
		parent.admMenu.location.href = ctxRoot + "/AdmMenu.do" + "?parentid=" + pid + "&menuid=" + pid;
		parent.admMain.location.href = ctxRoot + "/" + url;			
	} else if(mode == 4){
	
		parent.admMenu.location.href = ctxRoot + "/AdmMenu.do" + "?parentid=" + pid + "&menuid=" + pid + "&sysuser=N";
		parent.admMain.location.href = ctxRoot + "/" + url;			
	} else if(mode == 5) {
		parent.mainFrame.location.href = ctxRoot + "/" + url;
	} else if(mode == 99) {
		//메인화면 공지사항 롤링!!
		parent.parent.mainFrame.location.href = ctxRoot + "/" + url;
		parent.parent.leftFrame.location.href = ctxRoot + "/LeftMenu.do" + "?parentid=" + pid + "&menuid=" + id;
		//메뉴 네비게이션 Frame
		parent.parent.mainTopFrame.location.href = ctxRoot + "/NaviMenu.do?method=getNaviMenuList" + "&parentid=" + pid + "&menuid=" + id;
		
		parent.parent.document.getElementById("parMainFrameSet").rows = "133,*,30";
		parent.parent.document.getElementById("subFrameSet").cols = "164,*";
		parent.parent.document.getElementById("MainFrameSet").rows = "51,*";
		parent.parent.document.getElementById("subMainFrameSet").cols = "*,1150,*";
	} else {
		document.subPage.menupid.value = pid;
		document.subPage.menucid.value = pid;
		document.subPage.menuURL.value = url;
		
		document.subPage.submit();	
	}
}

// 특수문자체크. 특수문자 입력금지
function chrCheckTS(obj) {
	for(i=0;i<obj.value.length;i++) {
		var a=obj.value.charCodeAt(i);
		if (a==37 || a==39 || a==42 ) {
			alert("[*][%][']를 입력할 수 없습니다.");
			resetTs(obj);
			return;
		}
	}
}
function chrCheckNull(obj) {
	for(i=0;i<obj.value.length;i++) {
		var a=obj.value.charCodeAt(i);
		if (a==37 || a==39 || a==42 ) {
			alert("[*][%][']를 입력할 수 없습니다");
			resetTs(obj);
			return false;
		}
	}
	return true;
}

/* StringBuffer 클래스 정의*/
function StringBuffer() {  
	this.buffer = new Array();   
}  

StringBuffer.prototype.append = function(obj) {   
	this.buffer.push(obj);   
}  

StringBuffer.prototype.toString = function() {   
	return this.buffer.join("");   
}

//입력된 문자의 앞뒤 공백을 제거하고 리턴
function trim(source)
{
	if ( source==null )
	{
		source	= "";
		return source;
	}
	else
	{	// 앞부분 공백 제거
		while( source.length > 0 )
		{
			if ( ( source.charCodeAt(0) == 32 ) )
			{
				source = source.substring( 1, source.length );
			}
			else
			{
				break;
			}
		}
		// 뒷부분 공백 제거
		while(source.length>0)
		{
			if ( ( source.charCodeAt( ( source.length - 1 ) ) == 32 ) )
			{
				source = source.substring( 0, ( source.length - 1 ) );
			}
			else
			{
				break;
			}
		}
		return source;
	}
}

var _doProcessObj = new Object();
_doProcessObj.Request = function() {
	this.url = '';
	this.param = '';
	this.callback = null;
	this.trans = null;
	
}
_doProcessObj.Request.prototype = {
	doProcess: function(url, param, callback) {
		
		if (typeof arguments[0] == 'undefined' || arguments[0] == '') {
			return;
		} else {
			this.url = url;
		} if (typeof arguments[1] == 'undefined' || arguments[1] == '') {
			return;
		} else {
			this.param = param;
		} if (typeof arguments[2] == 'undefined' || arguments[2] == '') {
			return;
		} else {
			this.callback = callback;
		}
		var sid = "";
		
		if (this.param.length > 0) this.param += '&_=';
	
		var ajaxRequest = new Ajax.Request(this.url,
			{method: 'post', parameters: this.param, onComplete: this.processObjCallBack, XgateAddr: sid}
		);
		
		this.req = ajaxRequest.transport;
		
		var request = this;
		
		if (ajaxRequest.transport.readyState == 4) {
			request.processObjCallBack.call(request);
		}
		
		this.req.onreadystatechange = function() {
			if (ajaxRequest.transport.readyState == 4) {
				request.processObjCallBack.call(request);
			}
		}
		
	},
	processObjCallBack: function() {
		var tempObj = new Object();
		//네트워크 복호화
		
		//tempObj.responseText = getNetworkEncDec(2, this.req.responseText, this.ch_XW);
		tempObj.responseText = this.req.responseText;
		
		//2009.08.27 표길섭 param Property 추가  		
		tempObj.param= this.param;
		
		//alert(this.req.responseText);
		
		this.callback(tempObj);
	}
}

/**
* 팝업 
*/
function _callModalPopup(argParam,argProperty){
	//var sURL	=  ctxRoot+"/jsp/common/common_modal.html";
	var sURL = ctxRoot + argParam[5];
	//if( argParam[5] =="/singleUserList.dmn" ||argParam[5] =="/deptList.dmn"){
		//sURL = ctxRoot + argParam[5];
	//}
	
	var sPos	=  "dialogWidth:"+argProperty[0]+"px;dialogHeight:"+argProperty[1]+"px;resizable:0;scroll:"+argProperty[2]+";status:0;help:0;center:1;dialogHide:1;";
	var retVal	=  window.showModalDialog(sURL,argParam,sPos);
	
	return retVal;
}
//util.js 통합
//날짜 형식
var dateDelm = "-";
//====================================================
//Modal PopUp 용 공통 함수
//====================================================
function callModalPopup(argParam, argProperty) {
	var sURL   = argParam[0];
	var sPos   = "dialogWidth:"+argProperty[0]+"px;dialogHeight:"+argProperty[1]+"px;resizable:0;scroll:"+argProperty[2]+";status:0;help:0;center:1;dialogHide:1;";
	var retVal = showModalDialog(sURL,argParam,sPos);

	return retVal;
}

function fnPopupUserInfo(usersq){
	var profileUrl = ctxRoot + "/userInfoView.dmn?usersq=" + usersq;
	pubOpenWindow(profileUrl,"PopupUserProfile",620,370,1,1,1);
}

// replaceAll 함수 (김동권, 2011. 06. 10)
String.prototype.replaceAll = function( str1, str2 )
{
	//var temp_str = this.trim();
	var temp_str = trim(this);
	temp_str = temp_str.replace(eval("/" + str1 + "/gi"), str2);
	return temp_str;
}

//숫자만 입력 가능 (2011.07.01)
function fnOnlyNumber(event){
	var objEv = event.srcElement || event.target;	
	var numPattern = /([^0-9])/;
	numPattern = objEv.value.match(numPattern);
	if(numPattern != null){
		alert("숫자만 입력해 주세요.");
		objEv.value="";
		objEv.focus();
		return false;
	}
}
/**
 * 
 *  리스트화면 첨부파일 보기 - 제안조회(2013.01.28)작업자:오힘난
 * @param docno
 * @param index
 */
function fnWizenFileDownloadView_searchList(docno,index){
	/**
	var divSearchDetail = document.getElementById("divSearchDetail").style.display;
	var top=Number(0);
	
	if(divSearchDetail=="block"){
		top=Number(435);
	}else{
		top=Number(370);
	}
	*/
	var top=Number(220);
	
	if(index==0){
		top=Number(100);
	}else{
		top=Number(220);
	}
	
	if(document.getElementById("fileList").style.display=="none"){
		
		document.getElementById("fileList").style.display = "block";
		document.getElementById("fileList").style.top = (top + (index*20)) + "px";
		try{
			var url = ctxRoot +  "/GetWizenFileList.do";
			jQuery.post(url,{"docno":docno}, 
						function(data){		  
							document.getElementById("fileList").innerHTML = data;
						}
			);
		}
		catch(e){
			alert(e);
		}
	}else{
		document.getElementById("fileList").style.display = "none";
	}
	
}

//첨부파일 개수 선택시
function FileCountSelect(num){
	//첨부파일 개수 표시
	jQuery("#filevalue").text(num);
	//Select 박스 가리기
	jQuery("#divview2 ul").slideUp('fast');
	
	//첨부파일 할 수 있는 총 개수를 알기 위한 For문 name값으로 개수 추출.
	for(var i = 0; i < jQuery("input[name*='attach']").length; i++){
		//선택한 첨부파일 개수보다 작거나 같으면 if을 탄후
		if(i+1 <= num){
			//해당 위치 첨부파일 찾아보기 버튼 보여지기
			jQuery("input[name$='attach" + (i+1) + "']").slideDown('fast');
			//해당 위치 첨부파일 경로 text박스 보여지기
			jQuery("input[name$='file" + (i+1) + "']").slideDown('fast');
			jQuery("#search" + (i+1)).slideDown('fast');
		} else {
			//첨부파일 개수가 이전 개수보다 작을때 첨부파일 text 초기화
			if(jQuery("input[name$='attach" + (i+1) + "']").val() != ""){
			    // ie 일때 input[type=file] init.
			    jQuery("input[name$='attach" + (i+1) + "']").replaceWith(jQuery("input[name$='attach" + (i+1) + "']").clone(true));
			 	// other browser 일때 input[type=file] init.
			    jQuery("input[name$='attach" + (i+1) + "']").val("");
			}
			
			if(jQuery("input[name$='file" + (i+1) + "']").val() != ""){
				jQuery("input[name$='file" + (i+1) + "']").val("");
			}
			//첨부파일 개수가 이전 개수보다 작을때 첨부파일 text 초기화
			
			jQuery("input[name$='file" + (i+1) + "']").slideUp('fast');
			jQuery("input[name$='attach" + (i+1) + "']").slideUp('fast');
			jQuery("#search" + (i+1)).slideUp('fast');
		}
	}
}

function SelectView(name){
	//Select 박스 보여지기
	for(var i=1; i <= jQuery(".select").length; i++){
		var name2 = "divview" + i;
		if(name != name2){
			jQuery("#" + name2 + " ul").slideUp('fast');
		}
	}
	
	if(jQuery("#selectViewValue").val() != name || jQuery("#selectViewValue").val() == 'none'){
		jQuery("#selectViewValue").val(name);
		jQuery("#" + name + " ul").slideDown('fast');
	}else{
		jQuery("#" + name + " ul").slideUp('fast');
		jQuery("#selectViewValue").val("");
	}
	
	
}

/* Select Box Value값과 보여지는 값이 다를때
 * (선택된 값, 표시값, 표시값 DIV ID, 전체를 감싸고 있는 DIV ID, 선택된 값 넣어줘야 하는 HIDDEN ID 값)*/
function fnSelectNotValue(value, num, divname, name, content) {
	//Select 박스 Value값 표시
	jQuery("#" + divname).text(num);
	//Select 박스 가리기
	jQuery("#" + name + " ul").slideUp('fast');
	$("" + content + "").value = value;
}


/**
 * textarea 자리수 체크
 * obj = textarea의 onkeyup="return textarea_maxlength(this)"
 */
function textarea_maxlength(obj){
	var maxLength = parseInt(obj.getAttribute("maxlength"));
	if(obj.value.length>maxLength) {
	//alert('글자수가 '+(obj.value.length-1)+'자 이내로 제한됩니다');
	alert('글자수가 200자 이내로 제한됩니다');
	obj.value=obj.value.substring(0,maxLength);
	}
}
