import './App.css';
import Dealers from './components/Dealers';

import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="container p-4">
      <div className="row">
        <Dealers/>
      </div>
    <ToastContainer/>
    </div>
  );
}

export default App;
