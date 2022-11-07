import { useState, createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { indexReducer } from '../Reducers';
export const LightboxContext = createContext();

const LightboxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(indexReducer, {
    index: 0,
  });
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  return (
    <LightboxContext.Provider
      value={{
        state,
        dispatch,
        lightboxDisplay,
        setLightBoxDisplay,
      }}
    >
      {children}
    </LightboxContext.Provider>
  );
};

export { LightboxProvider };

export default LightboxContext;

LightboxProvider.propType = {
  children: PropTypes.node.isRequired,
};
