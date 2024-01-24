sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.App", {
      onInit() {
        const MdlUser = this.getOwnerComponent().getModel("MdlUser");
        const dUser = MdlUser.getProperty("/user");
        const dLoggedIn = MdlUser.getProperty("/loggedin");
        // show message
        MessageToast.show(dLoggedIn);
      },
    });
  },
);
