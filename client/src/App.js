import {Routes, Route} from 'react-router-dom'
import CalendarComponent from './components/CalendarComponent';
import Calendar from './components/Calendar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Calendar/>}/>

      </Routes>
    </div>
  );
}

export default App;
