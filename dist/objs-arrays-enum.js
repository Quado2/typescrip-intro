"use strict";
const person = {
    name: 'quado',
    age: 50,
};
//Array
//array of strings
let favorites;
favorites = ['quado', 'kay', 'amara'];
//array of all data types
let every;
every = ['hoe', 23];
//tuple
//tuple is a fixed length array with fixed data type
let role;
role = [32, 'great man'];
//enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
let human = {
    name: 'edozie',
    stack: 'MERN',
    role: Role.ADMIN
};
if (human.role === Role.ADMIN) {
    console.log('hello admin', Role.USER);
}
//values can be assigned to enum
var levels;
(function (levels) {
    levels[levels["EASY"] = 0] = "EASY";
    levels[levels["MEDIUM"] = 8] = "MEDIUM";
    levels["HARD"] = "HARD";
    levels[levels["EXTRA_HARD"] = 75] = "EXTRA_HARD";
})(levels || (levels = {}));
