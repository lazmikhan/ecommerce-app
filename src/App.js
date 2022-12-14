import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { Routes, Route } from "react-router-dom";
import Inventory from "./components/Inventory/Inventory";
import Manage from "./components/manage/Manage";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/order" element={<Shop></Shop>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/manage" element={<Manage></Manage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
