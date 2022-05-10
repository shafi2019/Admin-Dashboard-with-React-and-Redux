import './App.css';
import { Route, Routes } from "react-router-dom";
import DataTable from './components/Home';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<DataTable />}/>
        <Route exact path="/addStudent" element={<AddStudent />}/>
        <Route exact path="/editStudent/:id" element={<EditStudent />}/>
      </Routes>
    </div>
  );
}

export default App;
