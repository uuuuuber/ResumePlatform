import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';
import './reset-css.less';
import store from './store';
//Provider 的工作任务是：通过 context 向子组件提供 store。
import { Provider } from 'react-redux';


function App() {
  return <>
    <Router></Router>
  </> 
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App></App>
    </Provider>
  </React.StrictMode>
);

