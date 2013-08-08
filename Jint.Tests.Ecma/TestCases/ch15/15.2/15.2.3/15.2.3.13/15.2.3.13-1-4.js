/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.13/15.2.3.13-1-4.js
 * @description Object.isExtensible throws TypeError if 'O' is a string
 */


function testcase() {

        try {
            Object.isExtensible("abc");
        } catch (e) {
            return (e instanceof TypeError);
        }
    }
runTestCase(testcase);
