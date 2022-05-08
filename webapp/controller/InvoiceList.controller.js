sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    "../model/formatters",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
    ], 
    function(Controller, MessageToast, formatters, Filter, FilterOperator) {
        "use strict";
        return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList.List", {

            formatter: formatters,

            onPressListItem: function (oEvent) {
                let sItemTitle = oEvent.getSource().getTitle();
                let oBundle = this.getView().getModel("i18n").getResourceBundle();
                let sMsg = oBundle.getText("app.list.invoices.toast", [sItemTitle]);        
                MessageToast.show(sMsg);
            },

            onChangeInvoicesFilter : function (oEvent) {
    
                // build filter array
                let aFilter = [];
                let sQuery = oEvent.getParameter("query");
                if (sQuery) {
                    // filter operator Contains is not case-sensitive
                    aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
                }
    
                // filter binding
                let oList = this.byId("invoiceList");
                let oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);
            }
        });

});