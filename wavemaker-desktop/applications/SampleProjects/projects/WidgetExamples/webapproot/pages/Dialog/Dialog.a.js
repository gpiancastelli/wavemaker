/*
 *  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
dojo.declare("Dialog", wm.Page, {
"preferredDevice": "desktop",
start: function() {
//	try {
var layerName;
// If layer is specified, go to that layer
/*
if (app instanceof WidgetExamples) {
layerName = app.layerNameVar.getValue('dataValue');
} else {
layerName = '';
}
if (layerName !== '') {
app.layerNameVar.setValue('dataValue','');
var layerArray = ['button','toggle','busy','popup','right'];
if (dojo.indexOf(layerArray, layerName) >=0)
this.tabLayers1.setLayer(layerName);
else
app.toastError("Unrecognized Page parameter in url = "+ layerName);
}
//	} catch(e) {
//		app.toastError(this.name + ".start() Failed: " + e.toString());
//	}
*/
},
_end: 0
});

Dialog.widgets = {
loadingDialog1: ["wm.LoadingDialog", {}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"label1","targetProperty":"widgetToCover"}, {}]
}]
}],
layoutBox1: ["wm.Layout", {"_classes":{"domNode":["MainContent"]},"horizontalAlign":"left","verticalAlign":"top"}, {}, {
panel12: ["wm.MainContentPanel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"770px"}, {}, {
label8: ["wm.Label", {"_classes":{"domNode":["SectionHeader"]},"autoSizeWidth":true,"caption":"Dialog Examples","height":"34px","padding":"4","width":"102px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
tabLayers1: ["wm.TabLayers", {"headerHeight":"28px","manageURL":true}, {}, {
pageDialogLayer: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Page Dialog","horizontalAlign":"left","margin":"2,0,2,0","padding":"","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
pageContainer1: ["wm.PageContainer", {"deferLoad":true,"pageName":"Dialog_PageDialog","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
notificationsLayer: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Notification Services","horizontalAlign":"left","margin":"2,0,2,0","padding":"","verticalAlign":"top"}, {}, {
pageContainer4: ["wm.PageContainer", {"deferLoad":true,"pageName":"Dialog_NotificationServices","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
designableDialogLayer: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Designable Dialog","horizontalAlign":"left","margin":"2,0,2,0","padding":"","verticalAlign":"top"}, {}, {
pageContainer6: ["wm.PageContainer", {"deferLoad":true,"pageName":"Button_TogglePanel","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
toolTipsLayer: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Tooltips","horizontalAlign":"left","margin":"2,0,2,0","padding":"","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
pageContainer3: ["wm.PageContainer", {"deferLoad":true,"pageName":"Button_Popup","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
loadingDialogLayer: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Loading Dialog","horizontalAlign":"left","margin":"2,0,2,0","padding":"","verticalAlign":"top"}, {}, {
pageContainer5: ["wm.PageContainer", {"deferLoad":true,"pageName":"Button_Right","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}]
}]
}]
};

Dialog.prototype._cssText = 'body.tundra .button .wmlayout .button-label8 {\
}\
';
Dialog.prototype._htmlText = '';