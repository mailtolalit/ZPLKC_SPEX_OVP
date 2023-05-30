sap.ui.define([
		'sap/m/MessageStrip'
	],
(function (MessageStrip) {
    "use strict";

    /* controller for custom card  */
    // Controller : https://ui5.sap.com/#/topic/121b8e6337d147af9819129e428f1f75
    // controller class name can be like app.ovp.ext.customList.CustomList where app.ovp can be replaced with your application namespace
    sap.ui.controller("kc.plm.spexovp.ZPLKC_SPEX_OVP.ext.AnnouncementsProdSpec.AnnouncementsProdSpec", {
        onInit: function () {
            var oDataModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPLKC_DOC_SEARCH_SRV/");
				var mParameters = {
					success: function (oData, oResponse) {
						var oVC = this.byId("idVerticalLayout");
						if(oData.results.length>0){
						for (var i = 0; i < oData.results.length; i++) {
							var oMsgStrip = new MessageStrip("msgStripAnnProd" + i, {
								text: oData.results[i].TextAnn,
								type: "Success"
							});
							oVC.addContent(oMsgStrip);
						}
						}else{
							var oMsgStrip = new MessageStrip("msgStrip", {
								text: "No Announcements at this time",
								type: "Information"
							});
							oVC.addContent(oMsgStrip);
						}
					}.bind(this),
					error: function (oError) {

					}.bind(this)
				};
				oDataModel.read("/ANNOUCEMENT_SPOTSet", mParameters);
        },

        onAfterRendering: function () {},

        onExit: function () {},
    });
}));