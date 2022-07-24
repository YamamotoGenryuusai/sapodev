sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
 ], function (Controller, JSONModel, Filter, FilterOperator) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.Invoice", {
       /* onInit : function () {
        debugger;
        var oModel=new JSONModel("../Invoices.json");
        this.getView().setModel(oModel);
       }, */
       
       onInit : function () {
        
        var oViewModel = new JSONModel({
            currency: "EUR"
        });
        this.getView().setModel(oViewModel, "view");
    },
    onFilterInvoices : function (oEvent) {

        // build filter array
        var aFilter = [];
        var sQuery = oEvent.getParameter("query");
        if (sQuery) {
            aFilter.push(new Filter("ProductId", FilterOperator.Contains, sQuery));
        }

        // filter binding
        var oList = this.byId("invoiceList");
        var oBinding = oList.getBinding("items");
        oBinding.filter(aFilter);
        }
    });
 });