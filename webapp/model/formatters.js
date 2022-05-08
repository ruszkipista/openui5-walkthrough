sap.ui.define([], function () {
	"use strict";
	return {
		statusText: function (sStatus) {
			let oBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A":
					return oBundle.getText("app.invoice.status.A");
				case "B":
					return oBundle.getText("app.invoice.status.B");
				case "C":
					return oBundle.getText("app.invoice.status.C");
				default:
					return sStatus;
			}
		}
	};
});