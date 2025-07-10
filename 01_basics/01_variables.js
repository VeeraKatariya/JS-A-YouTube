const accountId = 12345
let accountEmail = "aanchal@google.com"
var accountPassword = "223466"
accountCity = "Delhi"

// accountId = 23 Not allowed
// VAR - VARIABLE CAN BE REDCLARED AND UPDATED, ITS A GLOBLE SCOPE
// LET - VARIBLE CANNOT BE REDCLARED BUT UPDATED, ITS BLOCK SCOPE
// CONST - VARIABLE CANNOT BE REDCLARED AND UPDATED, ITS ALSO BLOCK SCOPE

accountEmail = "ac@ac.com"
accountPassword = "2121212"
accountCity = "Bangluru"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity]);

