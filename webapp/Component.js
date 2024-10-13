sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "toya/model/models"
], function (UIComponent, Device, models) {
    "use strict";
    return UIComponent.extend("toya.Component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            // init
            UIComponent.prototype.init.apply(this, arguments);

            // initialize models
            this.setModel(models.createCustomerModel(), "customer");

            // turn on routing
            this.getRouter().initialize();
        }
    });
});
