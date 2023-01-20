// TODO: Add here the function to validate

// verify if gamerta is longer than 8 characters
const gamertagValid = (label) => {
    if (label.length > 8) {
        return true;
    } else {
        return false;
    }
};

exports.gamertagValid = gamertagValid;

const isEmpty = (label) => !label || label.length === 0;

exports.isEmpty = isEmpty;
