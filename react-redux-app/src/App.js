import './App.css';
import { Route, Routes } from "react-router-dom";
import DataTable from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<DataTable />}/>
      </Routes>
    </div>
  );
}

export default App;
