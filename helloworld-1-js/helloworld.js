// this is called as soon as OpenUI5 is loaded and initialized
sap.ui.define([
    // load two UI controls - a button and a message toast    
	"sap/m/Button",
	"sap/m/MessageToast"
    ], 
	function (Button, MessageToast) {
		"use strict";

		new Button({
			text: "Display HelloWorld toast",
			// callback on "press" event (click)
			press: function () {
				MessageToast.show("Hello World!");
			}
		// place the button in the element with "content" ID
		}).placeAt("content");
});