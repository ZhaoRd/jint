/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-5-b-1.js
 * @description Object.defineProperties - 'descObj' is undefined (8.10.5 step 1)
 */


function testcase() {

        var obj = {};

        try {
            Object.defineProperties(obj, {
                prop: undefined
            });
            return false;
        } catch (e) {
            return e instanceof TypeError && !obj.hasOwnProperty("prop");
        }
    }
runTestCase(testcase);
