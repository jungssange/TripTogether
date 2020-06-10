<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<%@ page session="false" %>
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<html>
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>TripTogether</title>
		<link rel="stylesheet" href="css/main.css">
		<script  src="http://code.jquery.com/jquery-latest.min.js"></script>
		
		<script type="text/javascript">
			function boardForm() {
				window.location.href="boardForm";
			}

			function home() {
				window.location.href="main";
			}
		</script>
	</head>
	<body>
		<div class="commonDIV">
			<div class="logo"><img src="images/common/logo.png" style="width:50px; height:50px; cursor:pointer;" onClick="home()" /></div>
			
			<div style="width:100%; text-align:right;">
				<a href="javascript:boardForm();" >글쓰기</a>
			</div>
			<div style="width:100%; margin-top:20px;">
				<table style="width:100%;">
					<colgroup>
						<col width="10%" />
						<col width="15%" />
						<col width="*%" />
						<col width="10%" />
						<col width="15%" />
					</colgroup>
					<thead>
						<tr>
							<th style="border-bottom:1px solid #000;">번호</th>
							<th style="border-bottom:1px solid #000;">구분</th>
							<th style="border-bottom:1px solid #000;">제목</th>
							<th style="border-bottom:1px solid #000;">등록자</th>
							<th style="border-bottom:1px solid #000;">등록일</th>
						</tr>
					</thead>
					<tbody>
						<c:forEach var="listview" items="${listview}" varStatus="status">
							<tr>
								<td><c:out value="${listview.brdno}" /></td>
								<td><c:out value="${listview.type}" /></td>
								<td><a href="boardView?brdno=<c:out value="${listview.brdno}"/>"><c:out value="${listview.title}" /></a></td>
								<td><c:out value="${listview.usernm}" /></td>
								<td><c:out value="${listview.entrydate}" /></td>
							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
		</div>
	</body>
</html>