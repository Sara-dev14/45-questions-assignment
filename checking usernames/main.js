var currentUsers = ['Sara', 'Moeez', 'Hani', 'yumna', 'Daniyal'];
var newUsers = ['Sara', 'Moeez', 'Hani', 'yumna', 'Daniyal'];
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    var userExists = false;
    for (var _a = 0, currentUsers_1 = currentUsers; _a < currentUsers_1.length; _a++) {
        var currentUser = currentUsers_1[_a];
        if (currentUser.toLowerCase() === newUser.toLowerCase()) {
            userExists = true;
            break;
        }
    }
    if (userExists) {
        console.log("The username \"".concat(newUser, "\" is already taken. Please enter a new username."));
    }
    else {
        console.log("The username \"".concat(newUser, "\" is available."));
    }
}
