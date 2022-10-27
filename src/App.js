import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shoes from './pages/shoes';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="*" element={<Shoes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
