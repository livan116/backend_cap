import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import NewJob from "./components/create_job/NewJob";
import ViewDetails from "./components/ViewDetails/ViewDetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/newjob" element={<NewJob />} />
          <Route path="/editJob/:id" element={<NewJob />} />
          <Route path="/viewJob/:id" element={<ViewDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
