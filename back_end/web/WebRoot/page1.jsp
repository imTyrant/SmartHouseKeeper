<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>  
	
	<%-- <form action="/test_1/age" method="post">
	<input type="submit" value="切换年龄" name="changeage">
	
	<p>
	<% 
	Object a;
	a = request.getAttribute("age"); %>
	<%=a %>
	</p> --%>

	<form action="/web/random" method="post">
	<input type="submit" value="随机触发" name="random">
	<input type="submit" value="随机状态" name="status">
	<p>decision
	<%=request.getAttribute("decision") %>
	</p>
	<p>door
	<%=request.getAttribute("door") %>
	</p>
	<p>light
	<%=request.getAttribute("light") %>
	</p>
	<p>water leakage sensor
	<%=request.getAttribute("water") %>
	</p>
	<p>window
	<%=request.getAttribute("window") %>
	</p>
	<p>alarm
	<%=request.getAttribute("alarm") %>
	</p>
	<p>motion sensor
	<%=request.getAttribute("motion") %>
	</p>
	<p>coffee pot
	<%=request.getAttribute("coffee") %>
	</p>
	<p>AC
	<%=request.getAttribute("AC") %>
	</p>
	<p>heater
	<%=request.getAttribute("heater") %>
	</p>
	</form>
	
	<input type="submit" value="读取进度" name="read" />

</body>
</html>
