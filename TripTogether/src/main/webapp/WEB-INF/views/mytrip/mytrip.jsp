<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>

<html>
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>TripTogether</title>
		<link rel="stylesheet" href="css/mytrip.css">
		<script type="text/javascript">	
			function home() {
				window.location.href="main";
			}
		</script>
	</head>
	<body>
		<div class="commonDIV">
			<div class="logo"><img src="images/common/logo.png" style="width:50px; height:50px; cursor:pointer;" onClick="home()" /></div>
			
			<div class="tripDIV">
				<div class="tripAreaLeft">&nbsp;</div>
				<div class="tripAreaCenter">&nbsp;</div>
				<div class="tripAreaRight">&nbsp;</div>
			</div>
		</div>
	</body>
</html>
