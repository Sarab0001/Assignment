// import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import Home from "./components/Home";
import Login from "./components/Login";
import Data from "./components/Data";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div
        className="App"
        style={{
          height: "100vh",
          width: "100%",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} exact />
          <Route path="/form" element={<Form />} exact />
          <Route path="/data" element={<Data />} exact />
        </Routes>
        <Outlet /> {/* Render child components of the current route */}
      </div>
    </BrowserRouter>
  );
}

export default App;
