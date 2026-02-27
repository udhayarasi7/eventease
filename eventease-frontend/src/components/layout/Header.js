import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Event as EventIcon,
} from '@mui/icons-material';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Get user from localStorage to determine menu
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const isProvider = user?.userType === 'provider';

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  // Different menu items for users vs providers
  const menuItems = isProvider
    ? [
        { text: 'Dashboard', path: '/provider/dashboard' },
        { text: 'Profile', path: '/profile' },
      ]
    : [
        { text: 'Home', path: '/home' },
        { text: 'Services', path: '/services' },
        { text: 'About', path: '/about' },
        { text: 'Profile', path: '/profile' },
      ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 2 }}>
        <EventIcon sx={{ color: 'primary.main', mr: 1 }} />
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          EventEase
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              color: location.pathname === item.path ? 'primary.main' : 'text.primary',
              '&:hover': { backgroundColor: 'action.hover' },
            }}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}

        {/* Logout in mobile drawer */}
        <ListItem onClick={handleLogout} sx={{ color: 'error.main', '&:hover': { backgroundColor: 'action.hover' } }}>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: 'background.paper',
          color: 'text.primary',
          boxShadow: 1,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo links to home or dashboard based on userType */}
            <Box
              component={Link}
              to={isProvider ? '/provider/dashboard' : '/home'}
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <EventIcon sx={{ color: 'primary.main', mr: 1 }} />
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                EventEase
              </Typography>
            </Box>
          </Box>

          {/* Desktop menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                color={location.pathname === item.path ? 'primary' : 'inherit'}
                sx={{
                  fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                }}
              >
                {item.text}
              </Button>
            ))}

            {/* Logout Button */}
            <Button
              variant="outlined"
              color="error"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
