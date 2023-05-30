sap.ui.define([
		'sap/m/MessageStrip'
	],
	(function (MessageStrip) {
		"use strict";

		/* controller for custom card  */

		sap.ui.controller("kc.plm.spexovp.ZPLKC_SPEX_OVP.ext.AnnouncementsInfo.AnnouncementsInfo", {

			onInit: function () {
				var oDataModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPLKC_DOC_SEARCH_SRV/");
				var mParameters = {
					success: function (oData, oResponse) {
						var oVC = this.byId("idVertical");
						if(oData.results.length>0){
						for (var i = 0; i < oData.results.length; i++) {
							var oMsgStrip = new MessageStrip("msgStripAnnPack" + i, {
								text: oData.results[i].TextAnn,
								type: "Success"
							});
							oVC.addContent(oMsgStrip);
						}
						}else{
							var oMsgStrip = new MessageStrip("msgStripAnnPack", {
								text: "No Announcements at this time",
								type: "Information"
							});
							oVC.addContent(oMsgStrip);
						}
					}.bind(this),
					error: function (oError) {

					}.bind(this)
				};
				oDataModel.read("/ANNOUCEMENTSet", mParameters);
			},

			onAfterRendering: function () {

			},

			onExit: function () {

			}

		});
	}));