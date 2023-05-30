(function () {
	"use strict";

	/* controller for custom card  */

	sap.ui.controller("kc.plm.spexovp.ZPLKC_SPEX_OVP.ext.ContactCard.ContactCard", {

		onInit: function () {

		},

		onAfterRendering: function () {

		},
		fnOpenEmail : function(oEvent){
			var linkId = oEvent.getSource().getId();
			if(linkId === "card04Original--Owner"){
				window.open("mailto:Rebecca.DeSpirito@kcc.com?Subject=Fiori");
			}
			else if(linkId === "card04Original--Support"){
				window.open("mailto:PLMPackaging._Usersupport@kcc.com?subject=Fiori");
			}
			else if(linkId === "card04Original--Questions"){
				window.open("mailto:PLMPackaging._Usersupport@kcc.com?subject=Fiori Question");
			}
			else if(linkId === "card04Original--BCCTeam"){
				window.open("mailto:%20ChangeCoordinationTeam.bcc@kcc.com?subject=The%20Fiori%20Site%20Question");
			}
		},
		onExit: function () {

		}

	});
})();