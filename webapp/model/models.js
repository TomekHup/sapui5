sap.ui.define([
    "sap/ui/model/json/JSONModel",
], function (JSONModel) {
    "use strict";
    return {
        createCustomerModel: function () {
            var oModel = new JSONModel({
                customers: [
                    { companyName: "Company A", address: "Address A", city: "City A", postalCode: "10000", phone: "123456789" },
                    { companyName: "Company B", address: "Address B", city: "City B", postalCode: "20000", phone: "987654321" }
                ]
            });
            return oModel;
        }
    };
});
