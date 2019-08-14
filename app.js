import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/redux';
import Appcontainer from './src/navigator/stack-navi.tsx';

if (__DEV__) {
  import('./ReactotronConfig').then(() => {return console.log("Reactotron Configured")});
}

const store = createStore(reducer);

export default App = () => {
  return (
    <Provider store={store}>
      <Appcontainer />
    </Provider>
  );
};
