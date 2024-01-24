sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/m/library",
  ],
  (Controller, MessageToast, JSONModel, library) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.App", {
      onInit() {
        const MdlUser = this.getOwnerComponent().getModel("MdlUser");
        const dUser = MdlUser.getProperty("/user");
        const dLoggedIn = MdlUser.getProperty("/loggedin");
        const yUser = MdlUser.getData();
        console.log(yUser.loggedin);
        // show message
        //MessageToast.show(dLoggedIn);
        MessageToast.show(yUser.user);

        //library.URLHelper.redirect("https://www.office.com", false);
      },
    });
  },
);
