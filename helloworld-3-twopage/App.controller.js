sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
    ], 
    function (Controller, MessageToast, JSONModel) {
        "use strict";

        // summon the Quickstart.App control and extend it with behaviour
        return Controller.extend("Quickstart.App", {

            // add button event handler: handle .onPressButtonGo event
            onPressButtonGo : function () {
                MessageToast.show("Hello UI5!");
                // trigger navigation to 2nd page
                this.byId("twopageapp").to(this.byId("intropage"));
            },

            // add button event handler: handle .onPressButtonBack event
            onPressButtonBack : function () {
                // trigger navigation to 1st page
                this.byId("twopageapp").to(this.byId("startpage"));
            },

            // lifecycle hook that is called when the controller is initialized
            onInit : function () {
                // define a simple JSON model with some texts associated with "features" key
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

            // add Switch event handler: handle .onChangeOfSwitch event
            onChangeOfSwitch: function (oEvent) {
                // get current state of the Switch
                var bState = oEvent.getParameter("state");
                // set the visibility state of HorizontalLayout with ID readyLayoutBox
                this.byId("readyLayoutBox").setVisible(bState);
            }
        });
    }
);