<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<html>
	<head>
		<link rel="stylesheet" type="text/css" href="css/wizen_common.css"/>
		<link rel="stylesheet" type="text/css" href="css/jquery-ui.css" />
		<link rel="stylesheet" type="text/css" href="css/jquery.ui.datepicker.css"/>
		<link rel="stylesheet" type="text/css" href="css/DataTables/datatables.css"/>
		
		<script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
		<script type="text/javascript" src="js/jquery-ui.js"></script>
		<script type="text/javascript" src="js/default.js"></script>
		<script type="text/javascript" src="js/jquery-migrate-1.4.1.min.js"></script>
		<script type="text/javascript" src="js/jquery.ui.datepicker.js"></script>
		<script type="text/javascript" src="js/jquery.ui.datepicker-ko.js"></script>
		<script type="text/javascript" src="js/wizenFileDownload.js"></script>
		<script type="text/javascript" src="js/jquery.freezeheader.js"></script>
		
		<script type="text/javascript" src="js/DataTables/datatables.js"></script>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>TripTogether</title>
		<link rel="stylesheet" href="css/main.css">
		
		<script type="text/javascript">
			/* jQuery(function() {
				$('#frdate').datepicker({
					showOn : "button",
					buttonImage : "images/common/calendar.png",
					buttonText : "날짜선택",
					buttonImageOnly : true
				});
			});
			
			jQuery(function() {
				$('#todate').datepicker({
					showOn : "button",
					buttonImage : "images/common/calendar.png",
					buttonText : "날짜선택",
					buttonImageOnly : true
				});
			}); */
			
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
					<%-- 
						<label for="from_date" class="invisible">오는날</label><!-- 시작일 -->
						<input id="frdate" name="frdate" type="text" value="<c:out value="${searchInfo.frdate}"/>" readonly="readonly" style="width:90px; text-indent:0px" title="FromDate" />
							~
						<label for="to_date" class="invisible">가는날</label><!-- 종료일 -->
						<input id="todate" name="todate" type="text" value="<c:out value="${searchInfo.todate}"/>" readonly="readonly" style="width:90px; text-indent:0px" title="ToDate" />
					</div> --%>
					<div class="left">
						가는날
						<div class="mainText" id="frdate"></div>
					</div>
					<div class="center">
						오늘날
						<div class="mainText" id="todate"></div>
					</div>
					
					<div style="display:inline-block; width:32%; text-align:left;">
						좌석 및 인원
						<div class="mainText" style="float:right;"></div>
					</div>
					
					<div class="searchDIV">
						<div class="searchBtn" onClick="placeSearch();">&nbsp;</div>
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
				<%-- <div style="text-align:center; width:100%; padding-top:100px;">
					<div style="display:inline-block; width:23%; height:250px; border:1px solid #000; margin:0px 15px 0px 0px;">
						<ol>
							<c:forEach var="triplist" items="${triplist}" varStatus="status">
									<li>
										<div class="list_wrap" id="tripdiv<c:out value="${status.index}"/>">
											<a href="myTrip">
											</a>
										</div>
									</li>
							</c:forEach>
						</ol>
					</div>
				</div> --%>
			</div>
		</div>
		</div>
	</body>
</html>