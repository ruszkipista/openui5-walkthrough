sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    "../model/formatters",
    ], 
    function(Controller, MessageToast, formatters) {
        "use strict";
        return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList.List", {

            formatter: formatters,

            onPressListItem: function (oEvent) {
                let sItemTitle = oEvent.getSource().getTitle();
                let oBundle = this.getView().getModel("i18n").getResourceBundle();
                let sMsg = oBundle.getText("app.list.invoices.toast", [sItemTitle]);        
                MessageToast.show(sMsg);
            }
        });

});