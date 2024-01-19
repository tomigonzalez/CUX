import React, { useState } from 'react';

interface MyContextType {
  mostrarModal: boolean;
  toggleModal: () => void;
  switchStates: { [key: string]: boolean };
  toggleSwitcher: (id: string) => void;
}

export const Context = React.createContext<MyContextType | undefined>(undefined);

interface ContextProviderProps {
  children: React.ReactNode;
}

export default function ContextProvider({ children }: ContextProviderProps) {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [switchStates, setSwitchStates] = useState<{ [key: string]: boolean }>({ '1': false, '2': false, '3': false });


  const toggleModal = () => {
    setMostrarModal(!mostrarModal);
  };

  const toggleSwitcher = (id: string) => {
    setSwitchStates((prev) => ({ ...prev, [id]: !prev[id] }));
    
  };

  return (
    <Context.Provider
      value={{
        mostrarModal,
        toggleModal,
        switchStates,
        toggleSwitcher,
      }}
    >
      {children}
    </Context.Provider>
  );
}
