import React, { createContext, useContext, useState, ReactNode } from "react";

type AuthContextType = {
  phone: string;
  setPhone: (phone: string) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [phone, setPhone] = useState("");

  return (
    <AuthContext.Provider value={{ phone, setPhone }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}