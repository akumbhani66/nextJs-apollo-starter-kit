import React from 'react';
import PropTypes from 'prop-types';

const App = ({ children }) => <main>{children}</main>;

App.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default App;
