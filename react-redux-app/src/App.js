import './App.css';
import { Route, Routes } from "react-router-dom";
import DataTable from './components/Home';
import AddStudent from './components/AddStudent';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<DataTable />}/>
        <Route exact path="/addStudent" element={<AddStudent />}/>
      </Routes>
    </div>
  );
}

export default App;
