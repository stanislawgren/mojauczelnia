import axios, { AxiosError } from "axios";

export interface LoginResponse {
  user?: any; // TODO TS
  token?: string;
  errors: {
    axios: AxiosError;
  };
}

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  return new Promise((resolve) => {
    axios({
      method: "POST",
      url: "http://localhost:3000/auth/login",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        email: email,
        password: password,
      },
    })
      .then((result) => resolve(result.data))
      .catch((error) => resolve({ errors: { axios: error } }));
  });
};

export const register = async (
  email: string,
  password: string,
  repeatPassword: string
) => {
  return new Promise((resolve) => {
    axios({
      method: "POST",
      url: "http://localhost:3000/auth/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: email,
        password: password,
        repeatPassword: repeatPassword,
      },
    })
      .then((result) => resolve(result.data))
      .catch((error) => resolve({ errors: { axios: error } }));
  });
};
