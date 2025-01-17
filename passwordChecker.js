
// Check if the password is valid
function passwordChecker(password) {
    return moreThan8Characters(password) && hasSpecialCharacters(password) && hasNumber(password) && containsNoIPL(password);
}


// Check if the password is more than 8 characters
function moreThan8Characters(password) {
    return password.length >= 8;
}

// Check if the password has special characters
function hasSpecialCharacters(password) {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
}

// Check if the password has Number
function hasNumber(password) {
    return /[0-9]/.test(password);
}

// Check if the password has no IPL in no case sensitive
function containsNoIPL(password) {
    return !password.toLowerCase().includes('ipl');
}


module.exports = {
    passwordChecker,
    moreThan8Characters,
    hasSpecialCharacters,
    hasNumber,
    containsNoIPL
};