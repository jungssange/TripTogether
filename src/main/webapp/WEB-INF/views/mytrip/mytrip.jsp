<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>

<html>
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>TripTogether</title>
		<link rel="stylesheet" href="css/mytrip.css">
		<script  src="http://code.jquery.com/jquery-latest.min.js"></script>
		<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=df2c8e01fb0a4bb4c94030d4807a7720&libraries=services,clusterer,drawing"></script>
		<script type="text/javascript">
			var searchKeyword = ''; 
			var places = new kakao.maps.services.Places();
			
		 	$(document).ready(function() {
		    });
		 	
			function home() {
				window.location.href="main";
			}
			
			function fn_mapPosition() {		// 현재위치
				// HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
				if (window.navigator.geolocation) {
				    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
				    window.navigator.geolocation.getCurrentPosition(function(position) {
				        var lat = position.coords.latitude, // 위도
				            lon = position.coords.longitude; // 경도
				        
				        var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
				            message = '<div style="padding:5px; font-family:Nanum;">현재위치</div>'; // 인포윈도우에 표시될 내용입니다
				        
				        // 마커와 인포윈도우를 표시합니다
				        displayMarkerP(locPosition, message);
				            
				      });
				    
				} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
				    
				    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
				        message = 'geolocation을 사용할수 없어요..'
				        
				    displayMarkerP(locPosition, message);
				}
			}
			
			// 지도에 마커와 인포윈도우를 표시하는 함수입니다
			function displayMarkerP(locPosition, message) {
			    // 마커를 생성합니다
			    var marker = new kakao.maps.Marker({  
			        map: map, 
			        position: locPosition
			    }); 
			    
			    var iwContent = message, // 인포윈도우에 표시할 내용
			        iwRemoveable = true;

			    // 인포윈도우를 생성합니다
			    var infowindow = new kakao.maps.InfoWindow({
			        content : iwContent,
			        removable : iwRemoveable
			    });
			    
			    // 인포윈도우를 마커위에 표시합니다 
			    infowindow.open(map, marker);
			    
			    // 지도 중심좌표를 접속위치로 변경합니다
			    map.setCenter(locPosition);      
			}  
			
			function fn_mapSeachPosition(searchKeyword) {
				// 장소 검색 객체를 생성합니다
				var ps = new kakao.maps.services.Places(); 

				// 키워드로 장소를 검색합니다
				ps.keywordSearch(searchKeyword, placesSearchCB); 
				
			}
			
			// 키워드 검색 완료 시 호출되는 콜백함수 입니다
			function placesSearchCB (data, status, pagination) {
			    if (status === kakao.maps.services.Status.OK) {
			        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
			        // LatLngBounds 객체에 좌표를 추가합니다
			        var bounds = new kakao.maps.LatLngBounds();

			        for (var i=0; i<data.length; i++) {
			            displayMarker(data[i]);    
			            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
			        }       

			        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
			        map.setBounds(bounds);
			    } 
			}
			
			// 지도에 마커를 표시하는 함수입니다
			function displayMarker(place) {
			    
			    // 마커를 생성하고 지도에 표시합니다
			    var marker = new kakao.maps.Marker({
			        map: map,
			        position: new kakao.maps.LatLng(place.y, place.x) 
			    });
			    
			    var callback = function(status, result, pagination) {
			    	if (status === kakao.maps.services.Status.OK) {
			    	}
			    };

			    var keyword = '<c:out value="${searchKeyword}"/>';
			    var keywordLastword = keyword.substring(keyword.length-1, keyword.length);
			    
			    if(keywordLastword=="역") {
			    	places.categorySearch('SW8', callback, {
				    	location: new kakao.maps.LatLng(place.y, place.x)
				    });
			    	
			    	var infowindow = new kakao.maps.InfoWindow({
			            content: '<div style="width:150px;text-align:center;padding:6px 0;">' + place.place_name + '</div>'
			        });
			        infowindow.open(map, marker);
			    }
			    
			    // 마커에 클릭이벤트를 등록합니다
			    kakao.maps.event.addListener(marker, 'click', function() {
			        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
			        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
			        infowindow.open(map, marker);
			    });
			}
		</script>
	</head>
	<body>
		<div class="commonDIV">
			<div class="logo"><img src="images/common/logo.png" style="width:50px; height:50px; cursor:pointer;" onClick="home()" /></div>
			
			<div class="tripDIV">
				<div class="tripAreaLeft">
					<div class="menu">검색</div>
					<div class="menu">길찾기</div>
					<div class="menu">즐겨찾기</div>
					<div class="menuL">여행지도</div>
				</div>
				<div class="tripAreaCenter">
					<div class="menuTop">
						<div class="menuTopL">도보</div>
						<div class="menuTopL">대중교통</div>
						<div class="menuTopR">자동차</div>
					</div>
					<div class="roadArea">
						<div class="areaL">
							<input type="text" class="roadAreaTextF" id="" name="" value="<c:out value="${searchKeyword}"/>" />
							<input type="text" class="roadAreaTextL" id="" name="" value="" />
						</div>
						<div class="areaR"><div class="areaRImage">&nbsp;</div></div>
						<div class="areaB">
							<div class="Left">경유지 추가</div>
							<div class="Right">길찾기</div>
						</div>
					</div>
					<div class="root">
						<div class="rootText">
							<div class="rootStar"><span id="starOn" class="">&nbsp;</span></div> 홍대입구역 > 성수역 
						</div>
					</div>
					
					<div class="rootList">
					</div>
				</div>
				<div class="tripAreaRight">
					<div id="map" style="width:100%;height:100%;"></div>
					<script>
						// 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
						var infowindow = new kakao.maps.InfoWindow({zIndex:1});
	
						var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
						    mapOption = {
						        center: new kakao.maps.LatLng(0, 0), // 지도의 중심좌표
						        level: 1 // 지도의 확대 레벨
						    };  
							// mapOption > level은 낮으면 낮을수록 확대가 커짐
	
						// 지도를 생성합니다    
						var map = new kakao.maps.Map(mapContainer, mapOption);
							
						// 메인화면에서 장소검색어에 대한 여부를 통해 map에 위치 표시
						searchKeyword = '<c:out value="${searchKeyword}"/>';	// 장소 검색어
						if(searchKeyword=="" || searchKeyword==null) {	// 장소 검색어가 없을 시
							fn_mapPosition();
						} else {										// 장소 검색어가 있을 시
							fn_mapSeachPosition(searchKeyword);
						}
					</script>
				</div>
			</div>
		</div>
	</body>
</html>
