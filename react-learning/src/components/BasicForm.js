import useInput from "../hooks/useInput";

const BasicForm = () => {
  // 1 UŻYCIE HOOKA

  const validateName = (value) => value.trim() !== "";
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput(validateName);

  const {
    value: enteredSurname,
    isValid: surnameIsValid,
    hasError: surnameHasError,
    valueChangeHandler: surnameChangeHandler,
    inputBlurHandler: surnameBlurHandler,
    reset: surnameReset,
  } = useInput(validateName);

  const validateEmail = (value) => value.trim().includes("@");
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(validateEmail);

  // 2 WALIDACJA CAŁEGO FORMULARZA

  let formIsValid = false;
  if (nameIsValid && surnameIsValid && emailIsValid) {
    formIsValid = true;
  }

  // 3. PREWENCJA PRZEŁADOWANIA STRONY Z MOMENTEM SUBMITOWANIA
  // 4. RESET INPUTÓW

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) return;
    nameReset();
    surnameReset();
    emailReset();
  };

  // 5. USTAWIENIE ZALEŻNOŚCI DLA KLAS

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";
  const surnameInputClasses = surnameHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  // 6. USTAWNIENIE WARTOŚCI I OBSŁUGI INPUTÓW

  return (
    <form>
      <div className="control-group" onSubmit={submitFormHandler}>
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
        </div>
        <div className={surnameInputClasses}>
          <label htmlFor="surname">Last Name</label>
          <input
            type="text"
            id="surname"
            value={enteredSurname}
            onChange={surnameChangeHandler}
            onBlur={surnameBlurHandler}
          />
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
