import { IApiErrorResponse, IApiFeildError } from "../interfaces";

export const handleFieldError = async (res: IApiErrorResponse) => {
  const newErrors: { [key: string]: string } = {};
  if (res.status === "fail") {
    const errs = res.errors;
    errs.forEach((err: IApiFeildError) => {
      newErrors[err.path] = err.msg;
    });
    return newErrors;
  }
  return newErrors;
};
