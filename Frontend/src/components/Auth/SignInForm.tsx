import { ChangeEvent, useReducer, useState } from "react";
import Input from "../Ui/Input";
import { signInReducer, checkField } from "../../lib/helpers/forms";
import { IStateSignIn } from "../../lib/interfaces";
import SecondaryLoader from "../App/Loaders/SecondaryLoader";
import { Navigate } from "react-router-dom";
import { handleFieldError } from "../../lib/apiCenter/errorHandler";
import { signIn } from "../../lib/apiCenter";

const initialStates = {
  userIdentifier: "",
  signInPassword: "",
};

const SignInForm = () => {
  const [formState, dispatch] = useReducer(signInReducer, initialStates);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const { userIdentifier, signInPassword } = formState as IStateSignIn;
  const [redirectToApp, setRedirectToApp] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const field = e.target.id;
    const value = e.target.value;
    dispatch({ type: "UPDATE_FIELD", field, value });
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (checkField(field, value, signInPassword)) {
        delete newErrors[field];
      }
      if (field === "userIdentifier") {
        delete newErrors[field];
      }

      return newErrors;
    });
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    Object.entries(formState).forEach(([key, value]) => {
      const error = checkField(key, value, signInPassword);
      if (error) {
        newErrors[key] = error;
      }
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      const result = await signIn(formState);
      setIsLoading(false);
      const apiErrors = await handleFieldError(result);
      setErrors(apiErrors);
      if (Object.keys(apiErrors).length === 0) {
        setRedirectToApp(true);
      }
    }
  };

  if (redirectToApp) {
    return <Navigate to="/app" />;
  }
  return (
    <form
      className="bg-third dark:bg-first flex items-center justify-center flex-col p-0 px-[50px] h-full text-center transition-all duration-500 ease-in-out transform"
      onSubmit={handleSubmit}
    >
      <h1 className="font-bold text-3xl mb-4 text-white dark:text-bg">
        Sign in
      </h1>
      <Input
        id="userIdentifier"
        inputType="text"
        label="Email or username or phone"
        value={userIdentifier}
        inputValue={userIdentifier}
        onChange={handleChange}
        err={!!errors.userIdentifier}
        errMsg={errors.userIdentifier}
      />
      <Input
        id="signInPassword"
        inputType="password"
        label="Input your Password"
        value={signInPassword}
        inputValue={signInPassword}
        onChange={handleChange}
        err={!!errors.signInPassword}
        errMsg={errors.signInPassword}
      />
      <a
        href="#"
        className="text-bg dark:text-third dark:hover:text-bg text-sm mb-4 underline hover:text-second transition-all duration-500"
      >
        Forgot your password?
      </a>
      <button
        className="rounded-full bg-first text-white text-xs font-bold py-3 px-11 uppercase tracking-wider transition duration-300 ease-in hover:bg-second dark:bg-fourth dark:hover:bg-third"
        type="submit"
      >
        {isLoading ? <SecondaryLoader /> : "Sign In"}
      </button>
    </form>
  );
};

export default SignInForm;
