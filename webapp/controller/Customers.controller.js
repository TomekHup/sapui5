sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/Sorter",
    "sap/ui/model/json/JSONModel"
], function (Controller, Filter, FilterOperator, ODataModel, Sorter, JSONModel) {
    "use strict";
    return Controller.extend("toya.controller.Customers", {
        onInit: function () {
            var oModel = new sap.ui.model.odata.v2.ODataModel("http://localhost:8080/https://services.odata.org/V2/Northwind/Northwind.svc/");
            this.getView().setModel(oModel);

            var oViewModel = new JSONModel({
                recordCount: 0
            });
            this.getView().setModel(oViewModel, "view");
        },
        onFilterCity: function (oEvent) {
            var sQuery = oEvent.getParameter("newValue");
            var oTable = this.byId("customerTable");
            var oBinding = oTable.getBinding("items");
            var aFilters = [];
            if (sQuery) {
                aFilters.push(new Filter("City", FilterOperator.Contains, sQuery));
            }
            oBinding.filter(aFilters);
        },
        onSortCompanyName: function () {
            var oTable = this.byId("customerTable");
            var oBinding = oTable.getBinding("items");
            var aSorters = [];
            aSorters.push(new Sorter("CompanyName", this._bDescendingSort));
            this._bDescendingSort = !this._bDescendingSort;
            oBinding.sort(aSorters);
        },
        onUpdateFinished: function (oEvent) {
            var iCount = oEvent.getParameter("total");
            this.getView().getModel("view").setProperty("/recordCount", iCount);
        }
    });
});
