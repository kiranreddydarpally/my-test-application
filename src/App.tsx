import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import AddPost from "./components/add-post/add-post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-post" element={<AddPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
