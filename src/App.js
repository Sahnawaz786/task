import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './Components/Container';

function App() {
  return (
    <div className="App">
      <Router>
       <Container/>
        <Routes>
          <Route path="/details" element={<></>} />
          <Route path="/onboard-status" element={<></>} />
          <Route path="/contract-details" element={<></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
