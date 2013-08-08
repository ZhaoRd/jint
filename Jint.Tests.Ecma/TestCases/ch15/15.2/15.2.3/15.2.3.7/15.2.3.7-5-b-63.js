/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-5-b-63.js
 * @description Object.defineProperties - 'configurable' property of 'descObj' is own data property that overrides an inherited data property (8.10.5 step 4.a)
 */


function testcase() {

        var obj = {};
        var proto = {
            configurable: true
        };

        var Con = function () { };
        Con.prototype = proto;
        var descObj = new Con();

        Object.defineProperty(descObj, "configurable", {
            value: false
        });

        Object.defineProperties(obj, {
            prop: descObj
        });
        var result1 = obj.hasOwnProperty("prop");
        delete obj.prop;
        var result2 = obj.hasOwnProperty("prop");

        return result1 === true && result2 === true;
    }
runTestCase(testcase);
