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
			function boardSave() {
				if($("#title").val()=="") {
					alert("제목을 입력하세요.");
					$("#title").focus();
					
					return;
				}
				
				if($("#usernm").val()=="") {
					alert("이름을 입력하세요.");
					$("#usernm").focus();
					
					return;
				}
				
				if($("#password").val()=="") {
					alert("비밀번호를 입력하세요.");
					$("#password").focus();
					
					return;
				}
				
				if($("#contents").val()=="") {
					alert("내용을 입력하세요.");
					$("#contents").focus();
					return;
				}
				
				$("#boardForm").submit();
			}
			
			function list() {
				window.location.href="boardList";
			}
		</script>
	</head>
	<body>
		<div class="commonDIV">
			<div class="logo"><img src="images/common/logo.png" style="width:50px; height:50px; cursor:pointer;" onClick="home()" /></div>
			
			<div style="width:100%; margin-top:20px;">
				<form id="boardForm" action="boardSave" method="post">
					<input type="hidden" id="type" name="type" value="<c:out value="${boardInfo.type}" />" />
					<input type="hidden" id="brdno" name="brdno" value="<c:out value="${boardInfo.brdno}" />" />
					
					<table style="width:100%;">
						<colgroup>
							<col width="20%" />
							<col width="*%" />
						</colgroup>
						<tbody>
							<tr>
								<th>제목</th>
								<td><input type="text" id="title" name="title" value="<c:out value="${boardInfo.title}" />" /></td>
							</tr>
							<tr>
								<th>이름</th>
								<td><input type="text" id="usernm" name="usernm" value="<c:out value="${boardInfo.usernm}" />" /></td>
							</tr>
							<tr>
								<th>비밀번호</th>
								<td><input type="password" id="password" name="password" value="<c:out value="${boardInfo.password}" />" /></td>
							</tr>
							<tr>
								<th>내용</th>
								<td>
									<textarea id="contents" name="contents" style="width:100%; height:250px;"><c:out value="${boardInfo.contents}" /></textarea>
								</td>
							</tr>
							<tr>
								<th>태그</th>
								<td><input type="text" id="tag" name="tag" style="width:100%;" /></td>
							</tr>
						</tbody>
					</table>
				</form>
				<a href="javascript:boardSave();">등록</a>
				<a href="javascript:list();">취소</a>
			</div>
		</div>
	</body>
</html>