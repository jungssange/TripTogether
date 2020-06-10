<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<html>
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>TripTogether</title>
		<link rel="stylesheet" href="css/main.css">
		<script  src="http://code.jquery.com/jquery-latest.min.js"></script>
		
		<script type="text/javascript">
			function placeSearch() {
				$("#TripForm").submit();
			}
			
			function home() {
				window.location.href="main";
			}
			
			function boardList() {
				window.location.href="boardList";
			}
			function boardListOn() {
				window.location.href="boardListOn";
			}
		</script>
	</head>
	<body>
		<div class="commonDIV">
			<div class="mainIcon">
				<img src="images/common/board.png" style="cursor:pointer;" onClick="boardList()" />
			</div>
			<!-- 로고 --> 
			<div class="logo"><img src="images/common/logo.png" style="width:150px; height:150px; cursor:pointer;" onClick="home()" /></div>
			
			<!-- 경로 -->
			<div class="rootDIV">
				<div class="rootSearchDIV">
					<form id="TripForm" name="TripForm" action="mytrip">
						<input type="text" id="searchKeyword" name="searchKeyword" class="rootSearch" placeholder="검색하실 여행지를 입력하세요." />
						<div class="searchDIV">
							<div class="searchBtn" onClick="placeSearch();">&nbsp;</div>
						</div>
					</form>
					<c:forEach var="tagList" items="${tagList}" varStatus="status">
						<a href="boardView?brdno=<c:out value="${tagList.typeno}"/>">
							<c:out value="${tagList.contents}" />
						</a>
					</c:forEach>
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
				<div class="mainIcon">
					<img src="images/common/board.png" style="cursor:pointer;" onClick="boardListOn()" />
				</div>
			</div>
		</div>
	</body>
</html>