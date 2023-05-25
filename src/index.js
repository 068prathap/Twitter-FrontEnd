import ReactDOM from 'react-dom/client';
import './Index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)