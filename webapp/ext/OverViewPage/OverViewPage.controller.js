(function () {
	"use strict";

	/* controller for custom card  */

	sap.ui.controller("kc.plm.spexovp.ZPLKC_SPEX_OVP.ext.OverViewPage.OverViewPage", {

		onInit: function () {
          
			this.getView().byId("mainView--ovpGlobalFilter-btnFilters").setVisible(false);
			this.getView().byId("mainView--ovpGlobalFilter-btnGo").setVisible(true);
			this.getView().byId("mainView--ovpGlobalFilter-btnClear").setVisible(true);
			this.getView().byId("mainView--ovpGlobalFilter").setFilterContainerWidth("18rem");
			// //this.getView().byId("mainView--card02").setVisible(false);
			this.getView().byId("mainView--ovpGlobalFilter").setLiveMode(true);
			this.getView().byId("mainView--ovpGlobalFilter-btnGo").setVisible(true);
		},

		onAfterRendering: function () {

			//this.getView().byId("mainView--ovpGlobalFilter").getControlConfiguration()[0].setHasValueHelpDialog(false);
			this.getView().byId("mainView--ovpGlobalFilter").getControlConfiguration()[1].setHasValueHelpDialog(
				false);
			//this.getView().byId("mainView--card02").setVisible(true);
		},

		doCustomNavigation: function (sCardId, oContext, oNavigationEntry) {
			var oCustomNavigationEntry;
			if (sCardId === "card02") {
				var oEntity = oContext && oContext.getProperty(oContext.sPath);
				oEntity.Content = null;
				oCustomNavigationEntry = {};
				oCustomNavigationEntry.type = "com.sap.vocabularies.UI.v1.DataFieldForIntentBasedNavigation";
				oCustomNavigationEntry.semanticObject = oEntity.Semantic;
				oCustomNavigationEntry.action = "display";
			} else if (sCardId === "card03") {
				var oEntity = oContext && oContext.getProperty(oContext.sPath);
				if (oEntity.UrlText === "Master Specifications" || oEntity.UrlText === "Reserve File Name") {
					oCustomNavigationEntry = {};
					oCustomNavigationEntry.type = "com.sap.vocabularies.UI.v1.DataFieldForIntentBasedNavigation";
					oCustomNavigationEntry.semanticObject = oNavigationEntry.url;
					oCustomNavigationEntry.action = "display";
				}
			}
			return oCustomNavigationEntry;
		},
		onExit: function () {

		}

	});
})();