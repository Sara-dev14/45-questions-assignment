let currentUsers: string[] = ['Sara', 'Moeez', 'Hani', 'yumna', 'Daniyal'];
let newUsers: string[] = ['Sara', 'Moeez', 'Hani', 'yumna', 'Daniyal'];

for (let newUser of newUsers) {
    let userExists = false;

    for (let currentUser of currentUsers) {
        if (currentUser.toLowerCase() === newUser.toLowerCase()) {
            userExists = true;
            break;
        }
    }

    if (userExists) {
        console.log(`The username "${newUser}" is already taken. Please enter a new username.`);
    } else {
        console.log(`The username "${newUser}" is available.`);
    }
}
