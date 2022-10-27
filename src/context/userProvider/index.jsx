import { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  let url = `data/users.json`;

  const getUser = async () => {
    try {
      const { data } = await axios.get(url);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export { UserProvider };

export default UserContext;

UserProvider.propType = {
  children: PropTypes.node.isRequired,
};
