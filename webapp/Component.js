sap.ui.define(
    ["sap/ui/core/UIComponent",
     "sap/ui/model/json/JSONModel",
     "sap/ui/model/resource/ResourceModel"
    ],
    function (UIComponent, JSONModel, ResourceModel) {
        "use strict";
        // Our component inherits from the base class sap.ui.core.UIComponent    
        return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
            // defines a reference to the root view
            // Instead of displaying the root view directly in the index.js file as we did previously,
            // the component will now manage the display of the app view.
            metadata : {
                "interfaces": ["sap.ui.core.IAsyncContentCreation"],
                "rootView": {
                   "viewName": "sap.ui.demo.walkthrough.view.App",
                   "type": "XML",
                   /*"async": true, // implicitly set via the sap.ui.core.IAsyncContentCreation interface*/
                   "id": "app"
                }
            },

            // override super's init function
            // the init function of the component is automatically invoked by SAPUI5 when the component is instantiated
            init : function () {
                // it is obligatory to call the super.init function
                UIComponent.prototype.init.apply(this, arguments);

                // set data model
                let oData = {
                    recipient : {
                        name : "World"
                    }
                };
                let oModel = new JSONModel(oData);
                // the models are directly set on the component and not on the root view of the component. 
                // However, as nested controls automatically inherit the models from their parent controls,
                // the models will be available on the view as well.
                this.setModel(oModel);

                // set i18n model
                let i18nModel = new ResourceModel({
                    bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
                });
                this.setModel(i18nModel, "i18n");
            }
        });
 });