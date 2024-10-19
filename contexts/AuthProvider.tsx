// src/ThemeProvider.js
import React, { createContext, useContext, useState } from 'react';
import { useColorScheme } from 'react-native';
import {brandTheme} from '../constants/theme';



type TAuthContext = {
    userStatus:"authenticated" | "not_authenticated" | "first_time_user" 
    toggleUserStatus: (status: TAuthContext["userStatus"]) => void
}

const AuthContext = createContext<TAuthContext >({
    userStatus:"first_time_user",
    toggleUserStatus: () => {}
});



 const AuthProvider = ({ children }:{children:React.ReactNode}) => {
//   const systemColorScheme = useColorScheme();
//   const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === 'dark');

//   const theme = isDarkMode ? brandTheme.dark : brandTheme.light;

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

  const [userStatus, setUserStatus] = useState<TAuthContext["userStatus"]>("first_time_user");

  const toggleUserStatus = (status: TAuthContext["userStatus"]) => {
    setUserStatus(status);
  };

  return (
    <AuthContext.Provider value={{ userStatus, toggleUserStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

 export const useUser = () => useContext(AuthContext);

export default AuthProvider;
