import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Civilian from './pages/Civilian';
import Responder from './pages/Responder';
import Commander from './pages/Commander';
import Unauthorized from './pages/Unauthorized';
import NotFound from './pages/NotFound';
import { Navbar } from './components/Navbar';
import { ProtectedRoute } from './ProtectedRoutes';

function AppContent() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/responder';

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/civilian" element={<ProtectedRoute allowedRoles={["civilian"]}><Civilian /></ProtectedRoute>} />
        <Route path="/responder" element={<ProtectedRoute allowedRoles={["responder"]}><Responder /></ProtectedRoute>} />
        <Route path="/commander" element={<ProtectedRoute allowedRoles={["commander"]}><Commander /></ProtectedRoute>} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;