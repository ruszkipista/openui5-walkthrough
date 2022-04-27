sap.ui.define(
  // load UI control Text
  ["sap/m/Text"],
  function (Text) {
	"use strict";
    // create a new Text UI control
    new Text({ text: "Hello UI5!" })
    // load the Text UI control into index.html
    // by targeting the <body> element via its ID
    .placeAt("body-content");
  }
);