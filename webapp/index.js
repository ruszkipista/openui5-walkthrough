// bootstrap application logic
// avoid having executable code directly in the HTML file for security reasons
// this script is called by the index.html. We declared there in <script>/data-sap-ui-onInit
sap.ui.define(
  ["sap/ui/core/ComponentContainer"],
  function (ComponentContainer) {
    "use strict";

    // create a component container instead of the view
    // this instantiates the view for us according to the component configuration
    new ComponentContainer({
      name: "sap.ui.demo.walkthrough",
      settings : {
        id : "walkthrough"
      },
      async: true
    })
    // place into the html element having ID:body-content
    .placeAt("body-content");
  }
);