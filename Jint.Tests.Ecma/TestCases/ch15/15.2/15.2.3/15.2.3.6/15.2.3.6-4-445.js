/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-445.js
 * @description ES5 Attributes - success to update [[Set]] attribute of accessor property ([[Get]] is undefined, [[Set]] is undefined, [[Enumerable]] is false, [[Configurable]] is true) to different value
 */


function testcase() {
        var obj = {};

        var verifySetFunc = "data";
        var setFunc = function (value) {
            verifySetFunc = value;
        };

        Object.defineProperty(obj, "prop", {
            get: undefined,
            set: undefined,
            enumerable: false,
            configurable: true
        });

        var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
        var propertyDefineCorrect = obj.hasOwnProperty("prop");

        Object.defineProperty(obj, "prop", {
            set: setFunc
        });

        obj.prop = "overrideData";
        var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");

        return typeof desc1.set === "undefined" && propertyDefineCorrect && desc2.set === setFunc && verifySetFunc === "overrideData";
    }
runTestCase(testcase);
