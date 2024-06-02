import axios, {AxiosError} from "axios";

export interface LoginResponse {
  user?: IUser
  token?: string;
  errors?: {
    axios: AxiosError;
  };
}

interface ICheckInResponse extends Omit<LoginResponse, 'token'> {
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
      .catch((error) => resolve({errors: {axios: error}}));
  });
};

export const register = async (
  email: string,
  password: string,
  repeatPassword: string
): Promise<LoginResponse> => {
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
      .catch((error) => resolve({errors: {axios: error}}));
  });
};

export const checkIn = async (): Promise<ICheckInResponse> => {
  return new Promise((resolve) => {
    axios({
      method: "GET",
      url: "http://localhost:3000/auth/check_in",
    })
      .then((result) => resolve(result.data))
      .catch((error) => resolve({errors: {axios: error}}));
  });
}