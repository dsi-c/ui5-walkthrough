sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  (Controller, JSONModel, formatter, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.InvoiceList", {
      formatter: formatter,
      onInit() {
        const oViewModel = new JSONModel({
          currency: "EUR",
        });
        this.getView().setModel(oViewModel, "view");
      },
      onFilterInvoices(oEvent) {
        // build filter array
        var aFilter = [];
        var orFilter = [];

        const sQuery = oEvent.getParameter("query");
        if (sQuery) {
          orFilter.push(
            new Filter("ProductName", FilterOperator.Contains, sQuery),
          );
          orFilter.push(new Filter("Quantity", FilterOperator.EQ, sQuery));
          aFilter.push(new Filter(orFilter, false));
        }

        // filter binding
        const oList = this.byId("invoiceList");
        const oBinding = oList.getBinding("items");
        oBinding.filter(aFilter);
      },
    });
  },
);
