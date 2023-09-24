"use strict";

/**           CONDITION
 on déclare les variables a, b et c comme a = 4, b = 4 et c = 3
 
 avec un switch case utilisant a comme référence on compare les trois variable 

 si a est egal a b alor faire un console log('egal à b')

 si a est egal a c alors faire un console log('egal à b')

 par defaut il y a un console log("egal a rien")
 */
let a =4;
let b=4;
let c=3;

switch(a){
    case b:
        console.log("égal à b");
        break;
    case c:
        console.log("égal à c");
        break;
    default:
        console.log("égal à rien");
}