import './App.css';
import './main.css';
import Main from './views/main';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/exercises' element={<Main />}/>
      </Routes>
    </div>
  );
}

export default App;
