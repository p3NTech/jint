// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Function expession inside the "if" expression is allowed
 *
 * @path ch12/12.5/S12.5_A10_T1.js
 * @description Using function expession(function __func(){return 0;}) inside the "if" expression
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#
if(function __func(){return 0;}){
    ;
}else {
    $ERROR('#1: Function expession inside the "if" expression is allowed');
}
//
//////////////////////////////////////////////////////////////////////////////

