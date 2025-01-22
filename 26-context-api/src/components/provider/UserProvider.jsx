import { useState } from 'react';
import { UserContext } from '../../context/UserContext';

export default function UserProvider({ children }) {
  const [name, setName] = useState('');

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
}
