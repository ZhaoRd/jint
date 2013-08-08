/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-209.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is an array index named property, 'desc' is accessor descriptor, test updating all attribute values of 'name' (15.4.5.1 step 4.c)
 */


function testcase() {
        var arrObj = [];
        var setFunc = function (value) {
            arrObj.setVerifyHelpProp = value;
        };
        var getFunc = function () {
            return 14;
        };

        Object.defineProperty(arrObj, "0", {
            get: function () {
                return 11;
            },
            set: function () { },
            configurable: true,
            enumerable: true
        });

        Object.defineProperty(arrObj, "0", {
            get: getFunc,
            set: setFunc,
            configurable: false,
            enumerable: false
        });

        return accessorPropertyAttributesAreCorrect(arrObj, "0", getFunc, setFunc, "setVerifyHelpProp", false, false);
    }
runTestCase(testcase);
