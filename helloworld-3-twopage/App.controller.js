// We extend the array of required modules with the fully qualified path to sap/ui/model/json/JSONModel. 
// Once all modules are loaded, the callback function is called (2nd parameter)
// and we can make use of both objects by accessing the parameters passed on to the function.
// This Asynchronous Module Definition (AMD) syntax allows to clearly separate the module loading
// from the code execution and greatly improves the performance of the application. 
// The browser can decide when and how the resources are loaded prior to code execution.
sap.ui.define(
    // array of required modules
    ["sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"],
    // call back function for after modules loaded
    // Use the name of the artifact to load for naming the function parameters (without namespace)
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