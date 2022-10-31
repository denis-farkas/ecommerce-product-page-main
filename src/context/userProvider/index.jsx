import { useState, createContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const getUser = async (id) => {
    try {
      const { data } = await axios.get(`data/user${id}.json`);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ user, getUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };

export default UserContext;

UserProvider.propType = {
  children: PropTypes.node.isRequired,
};
