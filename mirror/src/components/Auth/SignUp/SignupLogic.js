const pleaseInputEmail = "please input email";
const pleaseInputPassword = "please input password";
const pleaseInputFirstName = "please input first name";
const pleaseInputLastName = "please input last name";

const incorrectEmail = "invalid @duke.edu email";
const incorrectPassword = "minimum of 6 characters";

const passwordNotMatch = "passwords must match";

const isDukeEmail = (emailAddress) => {
  const dukeTag = "@duke.edu";

  if (emailAddress.includes(dukeTag)) {
    return [null, true, false];
  } else if (!emailAddress) {
    return [pleaseInputEmail, false, false];
  }
  return [incorrectEmail, false, false];
};

const isValidPassword = (password, password1, password2) => {
  // console.log(password1);
  // console.log(password2);
  if (!password) {
    return [pleaseInputPassword, false, false];
  } else if (password.length < 6) {
    return [incorrectPassword, false, false];
  } else if (password1 !== password2) {
    return [passwordNotMatch, false, false];
  }
  console.log("both passwords should be set");
  return [null, true, true];
};

const isValidFirstName = (name) => {
  // console.log(name);
  if (!name) {
    console.log("plase input");
    return [pleaseInputFirstName, false, false];
  }
  // console.log("null");
  return [null, true, false];
};

const isValidLastName = (name) => {
  if (!name) {
    return [pleaseInputLastName, false, false];
  }
  return [null, true, false];
};

const validationAuth = (data, inputIdentifier) => {
  // console.log(inputIdentifier);
  // console.log(data);
  switch (inputIdentifier) {
    case "email":
      return isDukeEmail(data[inputIdentifier].value);
    case "passwordOne":
      return isValidPassword(
        data[inputIdentifier].value,
        data.passwordOne.value,
        data.passwordTwo.value
      );
    case "passwordTwo":
      return isValidPassword(
        data[inputIdentifier].value,
        data.passwordOne.value,
        data.passwordTwo.value
      );
    case "firstName":
      return isValidFirstName(data[inputIdentifier].value);
    case "lastName":
      return isValidLastName(data[inputIdentifier].value);
    default:
      return [null, true, true];
  }
};

export { validationAuth };
