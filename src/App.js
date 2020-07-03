import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/configure-store';
import CounterContainer from './containers/counter-container';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <CounterContainer />
        </Provider>
      </header>
    </div>
  );
}

export default App;
