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
			
			<div style="width:100%; height:500px; border:1px solid #eeeeee; margin-top:10px;">
				<div style="display:inline-block; width:10%; height:100%; border-right:1px solid #eeeeee;">&nbsp;</div>
				<div style="display:inline-block; width:30%; height:100%; border-right:1px solid #eeeeee;">&nbsp;</div>
				<div style="display:inline-block; width:59%; height:100%;">&nbsp;</div>
			</div>
		</div>
	</body>
</html>
