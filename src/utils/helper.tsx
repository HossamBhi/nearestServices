export const getUniqueId = () => Math.floor(Math.random() * 1000000);

const EMAIL_REG_EXP =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const Password_REG_EXP =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
export const checkEmailValidation = (email: string) =>
  email.trim().length > 0 ? EMAIL_REG_EXP.test(email) : null;

export const checkPasswordValidation = (password: string) =>
  password.trim().length > 0 ? Password_REG_EXP.test(password) : null;
