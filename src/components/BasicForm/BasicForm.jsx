import classes from "./BasicForm.module.css";
import useInput from "../../hooks/use-input";

const BasicForm = () => {
  const {
    inputValue: firstName,
    validText: validfirstName,
    hasError: inValidFirstName,
    handleOnChange: firstNameHndler,
    handleOnBlur: firstNameBlur,
    resetInput: resetFirstName,
  } = useInput((nameValue) => nameValue.trim().length >= 3);

  const {
    inputValue: lastName,
    validText: validLastName,
    hasError: inValidLastName,
    handleOnChange: lastNameHandler,
    handleOnBlur: lastNameBlur,
    resetInput: resetLastName,
  } = useInput((nameValue) => nameValue.trim().length >= 3);

  const {
    inputValue: email,
    validText: validEmail,
    hasError: inValidEmail,
    handleOnChange: emailHandler,
    handleOnBlur: emailBlur,
    resetInput: resetEmail,
  } = useInput((mailValue) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(mailValue)
  );
  const {
    inputValue: password,
    validText: validPassword,
    hasError: inValidPassword,
    handleOnChange: passwordHandler,
    handleOnBlur: passwordBlur,
    resetInput: resetPassword,
  } = useInput((passwordValue) =>
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!*?])[A-Za-z\d@#$%^&+=!*?]{8,}$/.test(
      passwordValue
    )
  );

  const {
    inputValue: confirmedPass,
    validText: validConfirmedPass,
    hasError: inValidConfirmedPass,
    handleOnChange: confirmedPassHandler,
    handleOnBlur: confirmedPassBlur,
    resetInput: resetConfirmedPass,
  } = useInput((confirmPassValue) => confirmPassValue === password);

  let isValidForm = false;
  if (
    validfirstName &&
    validLastName &&
    validEmail &&
    validPassword &&
    validConfirmedPass
  )
    isValidForm = true;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidForm) return;

    console.log({ firstName, lastName, email, password, confirmedPass });

    resetFirstName();
    resetLastName();
    resetEmail();
    resetPassword();
    resetConfirmedPass();
  };
  return (
    <section className={classes.container}>
      <form onSubmit={handleSubmit}>
        <div className={classes.field}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            className={inValidFirstName ? classes.error : ""}
            value={firstName}
            onChange={firstNameHndler}
            onBlur={firstNameBlur}
          />
          {inValidFirstName && (
            <p className={classes["error-message"]}>
              This field is required and must be at least 3 characters
            </p>
          )}
        </div>
        <div className={classes.field}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            className={inValidLastName ? classes.error : ""}
            value={lastName}
            onChange={lastNameHandler}
            onBlur={lastNameBlur}
          />
          {inValidLastName && (
            <p className={classes["error-message"]}>
              This field is required and must be at least 3 characters
            </p>
          )}
        </div>
        <div className={classes.field}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className={inValidPassword ? classes.error : ""}
            value={password}
            onChange={passwordHandler}
            onBlur={passwordBlur}
          />
          {inValidPassword && (
            <p className={classes["error-message"]}>
              Password must be at least 8 characters include one capital letter,
              one small letter,one digit, and special character
            </p>
          )}
        </div>
        <div className={classes.field}>
          <label htmlFor="confirmed-pass">Confirm Password</label>
          <input
            type="password"
            id="confirmed-pass"
            className={inValidConfirmedPass ? classes.error : ""}
            value={confirmedPass}
            onChange={confirmedPassHandler}
            onBlur={confirmedPassBlur}
          />
          {inValidConfirmedPass && (
            <p className={classes["error-message"]}>Password didn't match</p>
          )}
        </div>
        <div className={classes.field}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className={inValidEmail ? classes.error : ""}
            value={email}
            onChange={emailHandler}
            onBlur={emailBlur}
          />
          {inValidEmail && (
            <p className={classes["error-message"]}>Invalid email address</p>
          )}
        </div>
        <div>
          <button className={classes.submit} disabled={!isValidForm}>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default BasicForm;
