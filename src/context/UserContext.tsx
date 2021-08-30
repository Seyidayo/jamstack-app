import React, { createContext } from "react";
import { useLocalStorage } from "../hooks";

interface UserInterface {
  user: string;
  setUser(arg: any): void;
}

interface UserProviderInterface {
  children: React.ReactNode;
}

export const UserContext = createContext<UserInterface>({
  user: "",
  setUser: () => {},
});

const UserProvider = ({ children }: UserProviderInterface) => {
  const [user, setUser] = useLocalStorage("google:token", "");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
