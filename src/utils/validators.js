export const validateLoginForm = ({ email, password }) => {
  const isMailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

  return isMailValid && isPasswordValid;
};

export const validateRegisterForm = ({ email, password, username }) => {
  return (
    validateEmail(email) &&
    validatePassword(password) &&
    validateUsername(username)
  );
};

const validatePassword = (password) => {
  return password.length > 5 && password.length < 13;
};

export const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

const validateUsername = (username) => {
  return username.length > 2 && username.length < 13;
};
