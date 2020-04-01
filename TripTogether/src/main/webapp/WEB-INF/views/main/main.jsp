<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>

<html>
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>TripTogether</title>
		<link rel="stylesheet" href="css/main.css">
		<script type="text/javascript">	
			function placeSearch() {
				window.location.href="mytrip";
			}
			
			function home() {
				window.location.href="main";
			}
		</script>
	</head>
	<body>
		<div class="commonDIV">
			<!-- 로고 --> 
			<div class="logo"><img src="images/common/logo.png" style="width:150px; height:150px; cursor:pointer;" onClick="home()" /></div>
			
			<!-- 경로 -->
			<div class="rootDIV">
				<div class="rootLeft">
					<div class="left">
						출발지
						<div class="mainText"></div>
					</div>
					<div class="right">
						도착지
						<div class="mainText"></div>
					</div>
				</div>
				<div class="rootRight">
					<div class="left">
						가는날
						<div class="mainText"></div>
					</div>
					<div class="center">
						오늘날
						<div class="mainText"></div>
					</div>
					<div class="right">
						좌석 및 인원
						<div class="mainText" style="float:right;"></div>
					</div>
					<div class="searchDIV">
						<div class="searchBtn" onClick="placeSearch();">&nbsp;</div>
					</div>
				</div>
			</div>	
			
			<!-- 여행지 리스트 -->
			<div class="placeDIV">
				<div class="mainPlace">
					<img src="images/common/seoul.jpg" style="width:100%; height:250px;" />
					<div class="placeIcon">
						<div class="placeTitle">서울</div>
						<div class="placeView"><span class="placeCnt">100</span></div>
						<div class="placeLike"><span class="placeCnt">10</span></div>
						<div class="placeReply"><span class="placeCnt">30</span></div>
					</div>
				</div>
				<div class="mainPlace">
					<img src="images/common/busan.jpg" style="width:100%; height:250px;" />
					<div class="placeIcon">
						<div class="placeTitle">부산</div>
						<div class="placeView"><span class="placeCnt">100</span></div>
						<div class="placeLike"><span class="placeCnt">10</span></div>
						<div class="placeReply"><span class="placeCnt">30</span></div>
					</div>
				</div>
				<div class="mainPlace">
					<img src="images/common/jeju.jpg" style="width:100%; height:250px;" />
					<div class="placeIcon">
						<div class="placeTitle">제주</div>
						<div class="placeView"><span class="placeCnt">100</span></div>
						<div class="placeLike"><span class="placeCnt">10</span></div>
						<div class="placeReply"><span class="placeCnt">30</span></div>
					</div>
				</div>
				<div class="mainPlaceLast">
					<img src="images/common/jeonju.jpg" style="width:100%; height:250px;" />
					<div class="placeIcon">
						<div class="placeTitle">전주</div>
						<div class="placeView"><span class="placeCnt">100</span></div>
						<div class="placeLike"><span class="placeCnt">10</span></div>
						<div class="placeReply"><span class="placeCnt">30</span></div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>
