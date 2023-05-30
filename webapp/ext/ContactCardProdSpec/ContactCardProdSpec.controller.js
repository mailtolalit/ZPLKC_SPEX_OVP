(function () {
    "use strict";

    /* controller for custom card  */
    // Controller : https://ui5.sap.com/#/topic/121b8e6337d147af9819129e428f1f75
    // controller class name can be like app.ovp.ext.customList.CustomList where app.ovp can be replaced with your application namespace
    sap.ui.controller("kc.plm.spexovp.ZPLKC_SPEX_OVP.ext.ContactCardProdSpec.ContactCardProdSpec", {
        onInit: function () {},

        onAfterRendering: function () {},
        fnOpenEmail : function(oEvent){
			var linkId = oEvent.getSource().getId();
			if(linkId === "card06Original--Owner"){
				window.open("mailto:Pat.Birschbach@kcc.com?Subject=Fiori");
			}
			else if(linkId === "card06Original--PLMSystemAccess"){
				window.open("onenote:https://kimberlyclark.sharepoint.com/Sites/f809/Team Documents/SAP PLM Instructions/1.0 Design and Setup.one#PLM%20System%20Access&section-id={99360C45-397D-4867-BF79-BE66D59B5B0D}&page-id={32063FD7-A52A-41B3-A8D3-2FFDCA1656B4}&end");
			}			
			else if(linkId === "card06Original--BCCTeam"){
				window.open("onenote:https://kimberlyclark.sharepoint.com/Sites/f809/Team Documents/SAP PLM Instructions/1.0 Design and Setup.one#PLM%20System%20Access&section-id={99360C45-397D-4867-BF79-BE66D59B5B0D}&page-id={32063FD7-A52A-41B3-A8D3-2FFDCA1656B4}&end");
			}
		},

        onExit: function () {},
    });
})();