import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ManageTools from "./pages/ManageTools.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/manage-tools" element={<ManageTools />} />
      </Routes>
    </Router>
  );
}

export default App;
