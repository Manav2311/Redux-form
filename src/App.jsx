import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style.css";
import Register from "./Components/Register";
import ViewDetails from "./Components/ViewDetails";
import Header from "./Components/Header";
import UpdateDetailes from "./Components/UpdateDetailes";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/viewEmployees" element={<ViewDetails />} />
          <Route path="/updateDetails/:id" element={<UpdateDetailes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
