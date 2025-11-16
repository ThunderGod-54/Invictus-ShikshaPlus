import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footter';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import Courses from './pages/Courses';
import Focus from './pages/Focus';
import Todolist from './pages/Todolist';
import Aichatbot from './pages/Aichatbot';
import About from './pages/About';
import MentorDashboard from './pages/MentorDashboard';
import Profile from './pages/Profile';
import OnboardingForm from './components/OnboardingForm';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="app-container" style={{ paddingTop: (location.pathname === '/' || location.pathname === '/auth') ? '0' : '80px' }}>
      {(location.pathname !== '/' && location.pathname !== '/auth' && location.pathname !== '/onboarding') && <Navbar />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/onboarding" element={<OnboardingForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/focus" element={<Focus />} />
          <Route path="/todolist" element={<Todolist />} />
          <Route path="/aichatbot" element={<Aichatbot />} />
          <Route path="/about" element={<About />} />
          <Route path="/mentor-dashboard" element={<MentorDashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
