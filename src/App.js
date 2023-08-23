import "./App.css";
import AllNotes from "./components/AllNotes";
import CreateNotes from "./components/CreateNotes";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="create" element={<CreateNotes />} />
          <Route path="/all-notes" element={<AllNotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
