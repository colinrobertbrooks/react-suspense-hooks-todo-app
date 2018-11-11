import React from 'react';

const HasError = ({ resourceName = null }) => (
  <p className="text-center text-muted">
    {resourceName ? `Error loading ${resourceName}!` : 'Error loading!'}
  </p>
);

export default HasError;
