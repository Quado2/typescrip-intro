var person = {
    name: 'quado',
    age: 50
};
//Array
//array of strings
var favorites;
favorites = ['quado', 'kay', 'amara'];
//array of all data types
var every;
every = ['hoe', 23];
//tuple
//tuple is a fixed length array with fixed data type
var role;
role = [32, 'great man'];
//enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var human = {
    name: 'edozie',
    stack: 'MERN',
    role: Role.ADMIN
};
if (human.role === Role.ADMIN) {
    console.log('hello admin', Role.USER);
}
