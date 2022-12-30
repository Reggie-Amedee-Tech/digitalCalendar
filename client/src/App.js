import {Routes, Route} from 'react-router-dom'
import CalendarComponent from './components/CalendarComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<CalendarComponent/>}/>

      </Routes>
    </div>
  );
}

export default App;
