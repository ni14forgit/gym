const isDukeEmail = emailAddress => {
  const dukeTag = "@duke.edu";

  if (emailAddress.includes(dukeTag)) {
    return true;
  }
  return false;
};

const isValidPassword = password => {
  if (password.length >= 6) {
    return true;
  }
  return false;
};

const isValid = (data, inputIdentifier) => {
  if (inputIdentifier === "email") {
    return isDukeEmail(data);
  }
  return isValidPassword(data);
};

export { isValid };
