//credentials context
import { Children, createContext } from "react";

export const CredentialsContext = createContext();

function CredentialsContextProvider(props) {
  storedCredentials: {
  }
  setStoredCredentials: () => {};

  return (
    <CredentialsContext.Provider
      value={{ storedCredentials, setStoredCredentials }}
    >
      {props.children}
    </CredentialsContext.Provider>
  );
}
