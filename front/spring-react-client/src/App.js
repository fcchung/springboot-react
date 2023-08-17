import "./App.css";
import Home from "./Home.js";
import Navbar from "./component/Navbar";
import AddEmployee from "./component/employee/AddEmployee";
import EmployeeView from "./component/employee/EmployeeView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditEmployee from "./component/employee/EditEmployee";

function App() {
  return (
    <main className="container mx-10 mt-10">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/view-employees" element={<EmployeeView />} />
          <Route exact path="/add-employee" element={<AddEmployee />} />
           <Route exact path="/edit-employee/:id" element={<EditEmployee/>}/>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
