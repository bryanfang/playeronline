<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html">
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />

<script id="sap-ui-bootstrap" type="text/javascript"
				src="resources/sap-ui-core.js"
				data-sap-ui-libs="sap.m,sap.ui.commons"
				data-sap-ui-theme="sap_bluecrystal">
		</script>
		<!-- only load the mobile lib "sap.m" and the "sap_bluecrystal" theme -->

		<script>
				sap.ui.localResources("UI");
				var app = new sap.m.App({initialPage:"idmain1"});
				var page = sap.ui.view({id:"idmain1", viewName:"UI.login", type:sap.ui.core.mvc.ViewType.JS});
				app.addPage(page);
				app.placeAt("content");
				
				
		</script>
	</head>
	<body class="sapUiBody" role="application">
		<div id="content"></div>
	</body>
</html>


