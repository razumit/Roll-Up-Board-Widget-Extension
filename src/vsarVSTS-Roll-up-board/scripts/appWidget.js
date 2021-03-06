//---------------------------------------------------------------------
// <copyright file="appWidget.ts">
//    This code is licensed under the MIT License.
//    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF 
//    ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED 
//    TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
//    PARTICULAR PURPOSE AND NONINFRINGEMENT.
// </copyright>
// <summary>TypeScript file for Roll-up the board widget extension</summary>
//---------------------------------------------------------------------
/// <reference path='../typings/tsd.d.ts' />
/// <reference path='isettings.d.ts' />
"use strict";
define(["require", "exports", "scripts/app"], function (require, exports, RollUpWidget) {
    VSS.require("TFS/Dashboards/WidgetHelpers", function (WidgetHelpers) {
        WidgetHelpers.IncludeWidgetStyles();
        VSS.register("rollupboardwidget", function () {
            var rollupboard = new RollUpWidget.WidgetRollUpBoard(WidgetHelpers);
            return rollupboard;
        });
        VSS.notifyLoadSucceeded();
    });
});
//# sourceMappingURL=appWidget.js.map