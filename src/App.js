import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shoes from './pages/shoes';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Shoes />} />
          <Route path="/collections" element={<Shoes />} />
          <Route path="/men" element={<Shoes />} />
          <Route path="/women" element={<Shoes />} />
          <Route path="/about" element={<Shoes />} />
          <Route path="/contact" element={<Shoes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
