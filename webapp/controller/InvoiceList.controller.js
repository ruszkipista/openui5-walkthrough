sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    ], 
    function(Controller, MessageToast) {
        "use strict";
        return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList.List", {

            onPressListItem: function (oEvent) {
                let sItemTitle = oEvent.getSource().getTitle();
                let oBundle = this.getView().getModel("i18n").getResourceBundle();
                let sMsg = oBundle.getText("app.list.invoices.toast", [sItemTitle]);        
                MessageToast.show(sMsg);
            }
        });

});