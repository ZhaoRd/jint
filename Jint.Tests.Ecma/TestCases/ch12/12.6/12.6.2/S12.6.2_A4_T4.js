// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * "break" within a "while" Statement is allowed and performed as described in 12.8
 *
 * @path ch12/12.6/12.6.2/S12.6.2_A4_T4.js
 * @description "break" and VariableDeclaration within a "while" Statement
 */

do_out : while(1===1) {
    if(__in__do__before__break)break;
    var __in__do__before__break="can't";
    do_in : while (1) {
        var __in__do__IN__before__break="get";
        break;
        var __in__do__IN__after__break="no";
    } ;
    var __in__do__after__break="Satisfaction";
} ;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(__in__do__before__break&&__in__do__IN__before__break&&!__in__do__IN__after__break&&__in__do__after__break)) {
	$ERROR('#1: Break inside do-while is allowed as its described at standard');
}
//
//////////////////////////////////////////////////////////////////////////////


