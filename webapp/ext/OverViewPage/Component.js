sap.ui.define(["sap/ovp/cards/custom/Component"], function (Component) {
	"use strict";

	/* component for custom card */
	return Component.extend("kc.plm.spexovp.ZPLKC_SPEX_OVP.ext.OverViewPage.Component", {
		// use inline declaration instead of component.json to save 1 round trip
		metadata: {
			properties: {
				"contentFragment": {
					"type": "string",
					"defaultValue": "kc.plm.spexovp.ZPLKC_SPEX_OVP.ext.OverViewPage.OverViewPage"
				},
				"headerFragment": {
					"type": "string",
					"defaultValue": ""
				},
				"footerFragment": {
					"type": "string",
					"defaultValue": ""
				}
			},

			version: "@version@",

			library: "sap.ovp",

			includes: [],

			dependencies: {
				libs: ["sap.m"],
				components: []
			},
			config: {},
			customizing: {
				"sap.ui.controllerExtensions": {
					"sap.ovp.cards.generic.Card": {
						controllerName: "kc.plm.spexovp.ZPLKC_SPEX_OVP.ext.OverViewPage.OverViewPage"
					}
				}
			}
		}
	});
});