<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<html>
	<head>
		<title>TripTogether</title>
		<link rel="stylesheet" href="css/common.css">
	</head>
	<body>
		<div class="commonDIV">
			<!-- 로고 -->  
			<div class="logo"><img src="images/common/logo.png" style="width:150px; height:150px;" /></div>
			
			<!-- 경로 -->
			<div class="rootDIV">
				<div class="rootLeft">
					<div class="start">
						출발지
						<div style="margin-top:10px; border:1px solid #000; width:100%; height:40px;"></div>
					</div>
					<div class="end">
						도착지
						<div style="margin-top:10px; border:1px solid #000; width:100%; height:40px;"></div>
					</div>
				</div>
				<div class="rootRight">
					<label for="from_date" class="invisible">오는날</label><!-- 시작일 -->
						<input id="frdate" name="frdate" type="text" value="<c:out value="${searchInfo.frdate}"/>" readonly="readonly" style="width:90px; text-indent:0px" title="FromDate" />
							~
					<label for="to_date" class="invisible">가는날</label><!-- 종료일 -->
						<input id="todate" name="todate" type="text" value="<c:out value="${searchInfo.todate}"/>" readonly="readonly" style="width:90px; text-indent:0px" title="ToDate" />
					<!-- <div style="display:inline-block; width:33%; text-align:left;">
						가는날
						<div style="margin-top:10px; border:1px solid #000; width:100%; height:40px;"></div>
					</div>
					<div style="display:inline-block; width:32%; text-align:left;">
						오늘날
						<div style="margin-top:10px; border:1px solid #000; width:100%; height:40px;"></div>
					</div> -->
					<div style="display:inline-block; width:32%; text-align:left;">
						좌석 및 인원
						<div style="margin-top:10px; border:1px solid #000; width:100%; height:40px;"></div>
					</div>
				</div>
				
				<div style="width:100%; padding:10px 10px 20px 10px;">
					<div style="width:100%; float:right; padding:0px 10px 0px 10px;">
						<div style="border:1px solid #000; width:15%; height:30px; text-align:center; float:right;">검색</div>
					</div>
				</div>
			</div>	
			
			<!-- 여행지 리스트 -->
			<div style="text-align:center; width:100%; padding-top:100px;">
				<div style="display:inline-block; width:23%; height:250px; border:1px solid #000; margin:0px 15px 0px 0px;">1</div>
				<div style="display:inline-block; width:23%; height:250px; border:1px solid #000; margin:0px 15px 0px 0px;">2</div>
				<div style="display:inline-block; width:23%; height:250px; border:1px solid #000; margin:0px 15px 0px 0px;">3</div>
				<div style="display:inline-block; width:23%; height:250px; border:1px solid #000; margin:0px;">4</div>
			</div>
		</div>
	</body>
</html>
