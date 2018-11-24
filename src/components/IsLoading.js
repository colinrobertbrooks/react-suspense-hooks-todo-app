import React from 'react';

const IsLoading = ({ resourceName = null }) => (
  <p className="text-center text-muted">
    {resourceName ? `Loading ${resourceName}...` : 'Loading...'}
  </p>
);

export default IsLoading;
