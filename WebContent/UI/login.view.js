sap.ui.jsview("UI.login", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf UI.login
	*/ 
	getControllerName : function() {
		return "UI.login";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf UI.login
	*/ 
	createContent : function(oController) {
		var oPanel = new sap.ui.commons.Panel({text:"Login"});
		var oLabel1 = new sap.ui.commons.Label({text:"User ID"});
		var oTextField1 = new sap.ui.commons.TextField();
		var oLabel2 = new sap.ui.commons.Label({text:"Password"});
		var oTextField2 = new sap.ui.commons.TextField();
		var oButton = new sap.ui.commons.Button({text:"Login"});
		
		var oLayout = new sap.ui.commons.layout.VerticalLayout("Layout1",{
			content:[oLabel1, oTextField1, oLabel2, oTextField2, oButton]
		});
		
		oPanel.addContent(oLayout).placeAt("content");
		oButton.attachPress(function(){
			oController.handle();
		})
	}

});
