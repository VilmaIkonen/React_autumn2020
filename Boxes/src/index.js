/* two first lines are mandatory !!! */
import React from 'react'; /* import from package with " " only. */
import ReactDOM from 'react-dom'; /* libraty folder react-dom: renders and shows in HTML. takes component and app and shows here */
import './index.css'; /* */
import App from './App'; /* refers to App.js. App used later in calling. */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
