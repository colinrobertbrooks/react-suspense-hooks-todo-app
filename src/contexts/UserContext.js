import React, { createContext, useState } from 'react';
import { getUserFromLocalStorage, setUserToLocalStorage } from '../api/utils';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage());

  const updateUser = nextUser => {
    setUser(nextUser);
    setUserToLocalStorage(nextUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
