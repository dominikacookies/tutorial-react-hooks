import { createContext, useContext, useState } from "react";

const PersonContext = createContext();

export const usePersonContext = () => useContext(PersonContext);

export const PersonProvider = ({ children }) => {
  const [name, setName] = useState();
  const [age, setAge] = useState();

  const value = {
    name,
    setName,
    age,
    setAge,
  };

  return (
    <PersonContext.Provider value={value}>{children}</PersonContext.Provider>
  );
};
