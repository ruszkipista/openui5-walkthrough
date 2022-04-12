sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
    ], 
    function (Controller, MessageToast) {
        "use strict";
        // load the "Controller" base class and extend with behaviour
        return Controller.extend(
            // summon the Quickstart.App controller
            "Quickstart.App",
            { // event handler for button
                onPressButton : function () {
                    MessageToast.show("Hello World!");
                }
            });
    }
);