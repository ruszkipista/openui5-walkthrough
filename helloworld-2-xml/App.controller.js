sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
    ], 
    function (Controller, MessageToast) {
        "use strict";
        // load the Controller base class and extend with behaviour
        Controller.extend(
            // summon the Quickstart.App controller
            "Quickstart.App",
            { // add event handler for button
                onPressButton : function () {
                    // the MessageToast is also loaded as a dependency
                    MessageToast.show("Hello World!");
                }
            }
        );
    }
);