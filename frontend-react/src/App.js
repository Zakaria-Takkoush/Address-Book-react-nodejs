import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="user/contacts" element={<Contacts />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// /:id
