import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home.js'
import UserDashboard from './pages/UserDashoard'
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import DashboardContent from './components/DashboardContent'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const homeNavLink = document.getElementById("home-nav-item");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="user-dashboard" element={<UserDashboard />} >
          <Route index element={<Navigate replace to="dash-home" />} />
          <Route path="dash-home" element={<DashboardContent content="home" />} />
          <Route path="dash-explore" element={<DashboardContent content="explore" />} />
          <Route path="dash-library" element={<DashboardContent content="library" />} />
          <Route path="dash-premium" element={<DashboardContent content="premium" />} />
          <Route path="dash-setting" element={<DashboardContent content="settings"/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
