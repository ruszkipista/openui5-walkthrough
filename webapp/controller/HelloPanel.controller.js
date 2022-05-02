sap.ui.define(
    ["sap/ui/core/mvc/Controller",
     "sap/m/MessageToast",
    ],
    function (Controller, MessageToast) {
      "use strict";

      return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
          onPressShowToast: function(){
            // read msg from i18n model
            let oBundle = this.getView().getModel("i18n").getResourceBundle();
            let sRecipient = this.getView().getModel().getProperty("/recipient/name");
            let sMsg = oBundle.getText("app.toast.hello", [sRecipient]);
            // show message
            MessageToast.show(sMsg);
          },

          onPressOpenDialog: function(){
            // create dialog lazily
            if (!this.pDialog) {
              this.pDialog = this.loadFragment({
                name: "sap.ui.demo.walkthrough.view.HelloDialog"
              });
            }
            this.pDialog.then(oDialog => oDialog.open());
          },

          onPressCloseDialog: function(){
            // note: We don't need to chain to the pDialog promise, since this event-handler
            // is only called from within the loaded dialog itself.
            this.byId("helloDialog").close();       
            // this.pDialog.then(oDialog => oDialog.close());
            // Toast: The dialog has been closed
            this.getView().byId("toastDialogClose").show();
          }
      });
 });