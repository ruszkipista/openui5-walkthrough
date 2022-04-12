// proper XML view to separate the presentation from the controller logic
sap.ui.define([
	"sap/ui/core/mvc/XMLView"
    ], 
    function (XMLView) {
        "use strict";

        XMLView.create({viewName: "Quickstart.App"})
        // the view is loaded asynchronously
        .then(function (oView) {
            // placed in the element with "content" ID after it has finished loading
            oView.placeAt("content");
	    });
});