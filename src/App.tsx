import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import ContributePage from "./pages/ContributePage";
import ComingSoon from "./pages/ComingSoon";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import EventsPage from "./pages/EventsPage";
import Profile from "./pages/ProfilePage";

function App() {
  console.log("HERE");
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contribute" element={<ContributePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<ComingSoon />} />
        <Route path="/donate" element={<ComingSoon />} />
        <Route path="/join" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}
export default App;
