import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Yes from './Yes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/yes" element={<Yes />} />
      </Routes>
    </Router>
  );
}

export default App;