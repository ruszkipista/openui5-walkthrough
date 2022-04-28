// We extend the array of required modules with the fully qualified path to sap.m.MessageToast. 
// Once both modules, Controller and MessageToast, are loaded, the callback function is called
// and we can make use of both objects by accessing the parameters passed on to the function.
// This Asynchronous Module Definition (AMD) syntax allows to clearly separate the module loading
// from the code execution and greatly improves the performance of the application. 
// The browser can decide when and how the resources are loaded prior to code execution.
sap.ui.define(
    // array of required modules
    ["sap/ui/core/mvc/Controller",
     "sap/m/MessageToast",
    ],
    // call back function for after modules loaded
    // Use the name of the artifact to load for naming the function parameters (without namespace)     
    function (Controller, MessageToast) {
      "use strict";

      return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
          // lifecycle method, that is invoked by the framework when the controller is created
          onInit : function () {
          },

          onShowHello: function(){
            // read msg from i18n model
            let oBundle = this.getView().getModel("i18n").getResourceBundle();
            let sRecipient = this.getView().getModel().getProperty("/recipient/name");
            let sMsg = oBundle.getText("app.toast.greet", [sRecipient]);
            // show message
            MessageToast.show(sMsg);
          },

      });
 });