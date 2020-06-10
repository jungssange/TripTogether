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
			function boardList() {
				window.location.href="boardList";
			}
			
			function home() {
				window.location.href="main";
			}
			
			function boardModify(brdno) {
				window.location.href="boardForm?brdno=" + brdno;
			}
		</script>
	</head>
	<body>
		<div class="commonDIV">
			<div class="logo"><img src="images/common/logo.png" style="width:50px; height:50px; cursor:pointer;" onClick="home()" /></div>
			
			<div style="width:100%; text-align:right;">
				<a href="javascript:boardList();" >목록</a>
				<a href="javascript:boardModify('<c:out value="${boardInfo.brdno}"/>');">수정</a>
			</div>
			<div style="width:100%; margin-top:20px;">
				<table style="width:100%;">
					<colgroup>
						<col width="20%" />
						<col width="*%" />
					</colgroup>
					<tbody>
						<tr>
							<th>제목</th>
							<td><c:out value="${boardInfo.title}" /></td>
						</tr>
						<tr>
							<th>이름</th>
							<td><c:out value="${boardInfo.usernm}" /></td>
						</tr>
						<tr>
							<th>등록일</th>
							<td><c:out value="${boardInfo.entrydate}" /></td>
						</tr>
						<tr>
							<th>내용</th>
							<td><c:out value="${boardInfo.contents}" /></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</body>
</html>