import { createContext, ReactNode, useContext, useState } from "react";
import { login, LoginResponse } from "../services/authService";
import { useLocalStorage } from "./useLocalStorage";

interface IAuthContextType {
  user: any; // TODO TS
  token: string | null;
  signIn: (email: string, password: string) => Promise<LoginResponse>;
  signOut: () => void;
}

const AuthContext = createContext<IAuthContextType>(null!);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const [token, setToken] = useLocalStorage("authToken", '');

  const signIn = async (user: string, password: string) => {
    const result = await login(user, password);
    if (result.token && result.user) {
      console.log(result.token);
      setUser(result.user);
      setToken(result.token);
      console.log(result.token);
      return result;
    } else {
      throw new Error("Authentication failed!");
    }
  };

  const signOut = () => {
    setUser(null);
    setToken('');
  };

  const value = { user, token, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
