// TODO: use hooks
import React, { Component } from 'react';

import IsLoading from './IsLoading';
import HasError from './HasError';

const withLoading = WrappedComponent => {
  class Wrapper extends Component {
    state = {
      isLoading: true,
      hasError: false,
      data: null
    };

    async componentDidMount() {
      try {
        const data = await this.props.fetchData();

        this.setState({ isLoading: false, data });
      } catch (err) {
        this.setState({ isLoading: false, hasError: true });
      }
    }

    render() {
      const { resourceName } = this.props;
      const { isLoading, hasError, data } = this.state;

      if (isLoading) {
        return <IsLoading resourceName={resourceName} />;
      }

      if (hasError) {
        return <HasError resourceName={resourceName} />;
      }

      return <WrappedComponent {...this.props} data={data} />;
    }
  }

  Wrapper.displayName = `withLoading(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  return Wrapper;
};

export default withLoading;
