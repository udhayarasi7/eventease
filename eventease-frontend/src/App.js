import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import ServiceDetail from './pages/ServiceDetail';
import WeddingPhotographyService from './pages/WeddingPhotograpyService';
import EventVideographyService from './pages/EventVideographyService';
import WeddingCateringService from './pages/WeddingCateringService';
import CorporateCateringService from './pages/CorporateCateringService';
import VendorProfile from './pages/VendorProfile';
import SouthIndianSpecialistsService from './pages/SouthIndianSpecialistsService';
import WeddingDecorationsService from './pages/WeddingDecorationsService';
import Chat from './pages/Chat';
import ProviderOnboarding from './pages/ProviderOnboarding';
import ProviderDashboard from './pages/ProviderDashboard';
import FloralArrangementsService from './pages/FloralArrangementsService';
import StageDecorationsService from './pages/StageDecorationsService';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected routes */}
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <Layout>
                  <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="services" element={<Services />} />
                    <Route path="about" element={<About />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="services/1" element={<ServiceDetail />} />
                    <Route path="services/2" element={<WeddingPhotographyService />} />
                    <Route path="services/3" element={<EventVideographyService />} />
                    <Route path="services/4" element={<WeddingCateringService />} />
                    <Route path="services/5" element={<CorporateCateringService />} />
                    <Route path="vendor/:id" element={<VendorProfile />} />
                    <Route path="services/6" element={<SouthIndianSpecialistsService />} />
                    <Route path="services/7" element={<WeddingDecorationsService />} />
                    <Route path="chat/:vendorId" element={<Chat />} />
                    <Route path="provider/onboarding" element={<ProviderOnboarding />} />
                    <Route path="provider/dashboard" element={<ProviderDashboard />} />
                    <Route path="services/8" element={<FloralArrangementsService />} />
                    <Route path="services/9" element={<StageDecorationsService />} />
                  </Routes>
                </Layout>
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
