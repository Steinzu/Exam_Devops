// TODO: Add here the function to validate

// verify if gamerta is longer than 8 characters
const gamertagValid = (label) => {
    // if label is longer than 8 characters and has at least 1 special characters and at least 1 number
    if (label.length > 8 && label.match(/[^a-zA-Z0-9]/) && label.match(/[0-9]/)) {
        return true;
    }
    return false;
};

exports.gamertagValid = gamertagValid;

const isEmpty = (label) => !label || label.length === 0;

exports.isEmpty = isEmpty;
