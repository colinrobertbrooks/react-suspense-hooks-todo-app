import React from 'react';

const IsLoading = ({ message = null }) => (
  <p className="text-center text-muted">{message || 'Loading...'}</p>
);

export default IsLoading;
