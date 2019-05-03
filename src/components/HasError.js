import React from 'react';

const HasError = ({ message = null }) => (
  <p className="text-center text-danger">{message || 'Error!'}</p>
);

export default HasError;
