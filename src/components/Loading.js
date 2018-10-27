import React from 'react';

const Loading = ({ resourceName = null }) => (
  <p className="text-center text-muted">
    {resourceName ? `Loading ${resourceName}...` : 'Loading...'}
  </p>
);

export default Loading;
