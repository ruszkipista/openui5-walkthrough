sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
    ], 
    function (Controller, MessageToast, JSONModel) {
        "use strict";

        return Controller.extend("Quickstart.Pages", {
            // button behaviour
            onPressButtonGo : function () {
                MessageToast.show("Hello UI5!");
                // trigger navigation to 2nd page
                this.byId("twopageapp").to(this.byId("intropage"));
            },
            onPressButtonBack : function () {
                // trigger navigation to 1st page
                this.byId("twopageapp").to(this.byId("startpage"));
            },            
            // lifecycle hook that is called when the controller is initialized
            onInit : function () {
                // defines a simple JSON model with some texts located at the "features" key
                this.getView().setModel(new JSONModel({
                        features: [
                            "Enterprise-Ready Web Toolkit",
                            "Powerful Development Concepts",
                            "Feature-Rich UI Controls",
                            "Consistent User Experience",
                            "Free and Open Source",
                            "Responsive Across Browsers and Devices"
                        ]
                    })
                );
            },

            onChangeOfSwitch: function (oEvent) {
                var bState = oEvent.getParameter("state");
                this.byId("readyLayoutBox").setVisible(bState);
            }
        });
    }
);