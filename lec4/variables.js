const id = 512345
let accEmail="jitender@gmail.com"
var accountPAss = "lol123"
/* 
    prefer not to use var because of issue in scope
*/
accountCity = "jaipur"
/* 
    not use this too 
*/
let accountState

// id = 2 not allowed
console.log(id);

accEmail = "hc@hc.com"
accountPAss = "321lol"
accountCity = "gorakhpur"
// console.log(accEmail);
console.table([accEmail,accountPAss,accountCity,accountState])
