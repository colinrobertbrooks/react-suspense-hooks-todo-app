import React from 'react';

const HasError = ({ resourceName = null }) => (
  <p className="text-center text-danger">
    {resourceName ? `Error loading ${resourceName}!` : 'Error loading!'}
  </p>
);

export default HasError;
