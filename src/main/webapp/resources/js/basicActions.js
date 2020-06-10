var stmnLEFT = "50%"; 		//왼쪽 여백
var stmnGAP1 = 150;  		//위쪽여백
var stmnGAP2 = 150; 		//스크롤시 브라우저 위쪽과 떨어지는 거리
var stmnBASE = 150; 		//스크롤 시작위치
var stmnActivateSpeed = 35; //스크롤을 인식하는 딜레이(숫자가 클수록 느리게 인식)
var stmnScrollSpeed = 20; 	//스크롤 속도(클수록 느림)
var stmnTimer;

function Run_BasicAction() {
	$("#gnb li").hover(
		function() {$("ul", this).slideDown("fast");},
		function() {$("ul", this).slideUp("fast");}
	);
	//quick Menu
	if(document.getElementById("STATICMENU") != null){
		document.getElementById("STATICMENU").style.left = stmnLEFT;
		document.getElementById("STATICMENU").style.top = document.body.scrollTop + stmnBASE + "px";
		document.getElementById("STATICMENU").style.display="";
		RefreshStaticMenu();
	}

	if (document.getElementById("myCanvas") != null)
		try { 
			TagCanvas.Start('myCanvas','tags',{textColour: '#330033', outlineColour: '#ff9999', outlineThickness:1, reverse: true, depth: 0.8, maxSpeed: 0.05 });
			document.getElementById("myCanvasContainer").style.display="";
		}catch(e) {
		}
	
	$("input[type=text]").each(function(a, b) { if($(b).prop("readonly")) { $(b).css("cursor", "default") } } ); 
};

function fn_LogOut() {
	if(confirm("로그아웃 하시겠습니까?")) {
		location.href = "memberLogout.dmn"; 
	}
}

//검색 페이지 팝업
function fn_runSearch(){
	if($("#searchWizen").val() == ""){
		alert("검색어를 입력하십시오");
		return;
	}
	location.href="wizenSearch4Ttitle.dmn?searchKeyword="+$("#searchWizen").val();
}

//quick Menu
function RefreshStaticMenu(){
	var stmnStartPoint, stmnEndPoint;
	stmnStartPoint = parseInt(document.getElementById("STATICMENU").style.top,10);
	stmnEndPoint = Math.max(document.documentElement.scrollTop, document.body.scrollTop) + stmnGAP2;
	
	if(stmnEndPoint < stmnGAP1) stmnEndPoint = stmnGAP1;
	if(stmnStartPoint!=stmnEndPoint){
		stmnScrollAmount = Math.ceil(Math.abs(stmnEndPoint - stmnStartPoint)/15);
		document.getElementById("STATICMENU").style.top = parseInt(document.getElementById("STATICMENU").style.top, 10) + ((stmnEndPoint < stmnStartPoint)? -stmnScrollAmount : stmnScrollAmount) + "px";
		stmnRefreshTimer = stmnScrollSpeed;
	}
	stmnTimer = setTimeout("RefreshStaticMenu();", stmnActivateSpeed);	
}
