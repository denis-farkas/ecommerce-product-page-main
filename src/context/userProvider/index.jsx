import { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  //simulated connection interface, because only one user in json
  let idUser = 1;

  const getUser = async (idUser) => {
    try {
      const { data } = await axios.get(`data/user${idUser}.json`);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser(idUser);
  }, [idUser]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export { UserProvider };

export default UserContext;

UserProvider.propType = {
  children: PropTypes.node.isRequired,
};
