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
			
			function List(page) {
				//var keyword = $("keyword").val();
				//window.location.href="boardList?keyword=";
				$("#page").val(page);
				$("#ListForm").submit();
			}
			</script>
	</head>
	<body>
		<div class="commonDIV">
			<form id="ListForm" action="boardList" method="post">
			<input type="hidden" name="page" id="page" value="" />
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
					
					<c:if test="${searchInfo.totPage>1}">
				        <div class="paging"> 
				        
						<c:if test="${searchInfo.page>1}">
							<a class="prev2" href="javascript:List(1);">처음</a>
							<a class="prev" href="javascript:List(${searchInfo.page-1});">이전</a>
						</c:if>
						<span class="num">
							<c:forEach var="i" begin="${searchInfo.sPage}" end="${searchInfo.ePage}" step="1" varStatus="status">
					            <c:choose>
					                <c:when test="${i eq searchInfo.page}">
					                	<b><a href="javascript:List(${i})" class="choice"><c:out value="${i}"/></a></b>
					                </c:when>
					                <c:otherwise>
					                	<a href="javascript:List(${i})"><c:out value="${i}"/></a>
					                </c:otherwise>
					            </c:choose>
					            <c:if test="${not status.last}">|</c:if>
					        </c:forEach>
						</span>		
						<c:if test="${searchInfo.totPage > searchInfo.page}">
							<a class="next" href="javascript:List(${searchInfo.page+1});" class="next">다음</a>
							<a class="next2" href="javascript:List(${searchInfo.totPage});">마지막</a>
						</c:if>
						
						</div>
				</c:if>
					
					<div>
						<select id="searchType" name="searchType">
							<%-- 
							<c:forEach var="i" begin="0" end="3">
								<option value="${i}">${i}</option>
							    <p><c:out value="${i}" /></p>
							</c:forEach> 
							--%>
							
							<option value="BRDNO">번호</option>
							<option value="TITLE">제목</option>
							<option value="CONTENTS">내용</option>
						</select>
						<input type="text" id="searchKeyword" name="searchKeyword" value="${searchInfo.searchKeyword}" />
						<a href="javascript:List();" >검색</a>
					</div>
				</div>
			</form>
		</div>
	</body>
</html>