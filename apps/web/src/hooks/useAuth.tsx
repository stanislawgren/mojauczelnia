import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {checkIn, login, LoginResponse, register} from "../services/authService";
import {useLocalStorage} from "./useLocalStorage";
import axios from "axios";

interface IAuthContextType {
  user: IUser | null
  token: string | null;
  signIn: (email: string, password: string) => Promise<LoginResponse | null>;
  signUp: (email: string, password: string, repeatPassword: string) => Promise<LoginResponse | null>;
  signOut: () => void;
}

const AuthContext = createContext<IAuthContextType>(null!);

export const AuthProvider = ({children}: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useLocalStorage("authToken", '');

  const signIn = async (user: string, password: string) => {
    const result = await login(user, password);
    if (result.token && result.user) {
      setUser(result.user);
      setToken(result.token);
      return result;
    }
    return null;
  };

  const signUp = async (email: string, password: string, repeatPassword: string) => {
    const result = await register(email, password, repeatPassword);
    if (result.token && result.user) {
      setUser(result.user);
      setToken(result.token);
      return result;
    }
    return null;
  };

  const signOut = () => {
    setUser(null);
    setToken('');
  };

  useEffect(() => {
    if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }, [token])

  useEffect(() => {
    if (token && !user) {
      checkIn().then(data => {
        if (data.user) setUser(data.user)
      });
    }
  }, [token, user])

  const value = {user, token, signIn, signUp, signOut};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
