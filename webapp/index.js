// bootstrap application logic
// avoid having executable code directly in the HTML file for security reasons
// this script is called by the index.html. We declared there in <script>/data-sap-ui-onInit
sap.ui.define(
  ["sap/ui/core/mvc/XMLView"],
  function (XMLView) {
	  "use strict";
    // the view is loaded asynchronously
    XMLView.create({viewName: "sap.ui.demo.walkthrough.view.App"})
    .then(function (oView) {
      // place into the html element having ID:body-content
      oView.placeAt("body-content");
    });

});