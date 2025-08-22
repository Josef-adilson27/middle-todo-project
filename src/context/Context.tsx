import { createContext, useContext, useState, type ReactNode } from "react";

interface StateContextType {
  inputValue: string;
  setInputValue: (value: string) => void;
}

interface ContextProviderProps {
  children: ReactNode;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

export const StatesProvider = ({ children }: ContextProviderProps) => {
  
  const [inputValue, setInputValue] = useState<string>("");

  const value: StateContextType = {
    inputValue,
    setInputValue,
  };

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  );
}

export const useContexState = (): StateContextType => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};