import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useMemo,
} from "react";

type DisplayContextType = {
  displayValue: string;
  setDisplayValue: Dispatch<SetStateAction<string>>;
};

const DisplayContext = createContext<DisplayContextType>({
  displayValue: "",
  setDisplayValue: () => {},
});

const useDisplay = () => {
  const context = useContext(DisplayContext);
  if (!context) {
    throw new Error(`useDisplay must be used within a DisplayContextProvider`);
  }
  return context;
};

const DisplayContextProvider = ({ children, value }: any) => {
  const [displayValue, setDisplayValue] = useState(value);
  const valueMemo = useMemo(
    () => ({ displayValue, setDisplayValue }),
    [displayValue]
  );
  return (
    <DisplayContext.Provider value={valueMemo}>
      {children}
    </DisplayContext.Provider>
  );
};

export { DisplayContext, DisplayContextProvider, useDisplay };
