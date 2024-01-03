import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Property from "./Screens/Property";

function App() {
  return (
    <>
     

      <Router>
        <Routes>
        
          <Route element={<Property />} path="/" /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
