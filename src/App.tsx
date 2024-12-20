import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import ContributePage from './pages/ContributePage';
import ComingSoon from './pages/ComingSoon';

function App() {
  console.log("HERE")
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<ComingSoon />} />
        <Route path="/projects" element={<ComingSoon />} />
        <Route path="/contribute" element={<ContributePage />} />
        <Route path="/events" element={<ComingSoon />} />
        <Route path="/profile" element={<ComingSoon />} />
        <Route path="/contact" element={<ComingSoon />} />
        <Route path="/donate" element={<ComingSoon />} />
        <Route path="/join" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}
export default App;