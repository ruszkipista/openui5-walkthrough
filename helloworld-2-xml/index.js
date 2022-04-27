// create a proper XML view to separate the presentation from the controller logic
sap.ui.define([
	"sap/ui/core/mvc/XMLView"
    ], 
    function (XMLView) {
        "use strict";

        // define new namespace: Quickstart.App
        XMLView.create({viewName: "Quickstart.App"})
        // the view is loaded asynchronously
        .then(function (oView) {
            // placed into the <body> element with ID:content
            oView.placeAt("content");
	    });
});