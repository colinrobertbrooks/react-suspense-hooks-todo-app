import React from 'react';

// jared's context pattern
// https://github.com/jaredpalmer/react-conf-2018/blob/master/full-suspense/src/components/PlayerProvider.js

// my context pattern
// https://github.com/colinrcummings/testing-javascript-applications-demo/blob/master/app/assets/javascripts/client/manage_users/context/index.js

// ryan's useReducer example
// https://github.com/ryanflorence/react-conf-2018/blob/476ddf2946fc15010783c8ad1b4770d246d8bdf6/carousel/src/App.final.js#L112

// TODO: store, reducer, actions

export const TodoContext = React.createContext(null);

class TodoProvider extends React.Component {
  render() {
    return (
      <TodoContext.Provider value={this.state}>
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}

const TodoConsumer = TodoContext.Consumer;

export default { TodoProvider, TodoConsumer };
