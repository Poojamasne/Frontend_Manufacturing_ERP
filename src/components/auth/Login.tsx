import React, { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Avatar,
  Divider,
  InputAdornment,
  IconButton,
  Alert,
  CircularProgress,
  Link
} from '@mui/material';
import {
  Email as EmailIcon,
  Lock as LockIcon,
  Visibility,
  VisibilityOff,
  Dashboard as DashboardIcon,
  Factory as FactoryIcon,
  Inventory as InventoryIcon,
  People as PeopleIcon,
  AdminPanelSettings as AdminIcon
} from '@mui/icons-material';

interface User {
  id: string;
  email: string;
  password: string;
  fullName: string;
  role: string;
  module: string;
  department: string;
}

interface LoginProps {
  onLoginSuccess: (user: User) => void;
  onRegisterClick: () => void;
}

const USERS: User[] = [
  { id: '1', email: 'admin@erp.com', password: 'admin123', fullName: 'Rajesh Sharma', role: 'super_admin', module: 'admin', department: 'IT Administration' },
  { id: '2', email: 'salesmanager@erp.com', password: 'sales123', fullName: 'Priya Mehta', role: 'sales_manager', module: 'sales', department: 'Sales' },
  { id: '3', email: 'salesexec@erp.com', password: 'sales123', fullName: 'Rahul Gupta', role: 'sales_executive', module: 'sales', department: 'Sales' },
  { id: '4', email: 'purchasemanager@erp.com', password: 'purchase123', fullName: 'Vikram Singh', role: 'purchase_manager', module: 'purchase', department: 'Purchase' },
  { id: '5', email: 'inventorymanager@erp.com', password: 'inventory123', fullName: 'Suresh Kumar', role: 'inventory_manager', module: 'inventory', department: 'Inventory' },
  { id: '6', email: 'productionmanager@erp.com', password: 'production123', fullName: 'Deepak Joshi', role: 'production_manager', module: 'production', department: 'Production' },
  { id: '7', email: 'operator@erp.com', password: 'operator123', fullName: 'Ramesh Kumar', role: 'operator', module: 'operator', department: 'Production' },
  { id: '8', email: 'qualitymanager@erp.com', password: 'quality123', fullName: 'Sanjay Mehta', role: 'quality_manager', module: 'quality', department: 'Quality Assurance' },
  { id: '9', email: 'hrmanager@erp.com', password: 'hr123', fullName: 'Kavita Reddy', role: 'hr_manager', module: 'hrms', department: 'Human Resources' },
  { id: '10', email: 'accountant@erp.com', password: 'finance123', fullName: 'Seema Joshi', role: 'accountant', module: 'finance', department: 'Finance' },
];

export const Login: React.FC<LoginProps> = ({ onLoginSuccess, onRegisterClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      const user = USERS.find(u => u.email === email && u.password === password);
      if (user) {
        onLoginSuccess(user);
      } else {
        setError('Invalid email or password');
      }
      setLoading(false);
    }, 500);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 2
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={24}
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }
          }}
        >
          {/* Left Side - Brand Section */}
          <Box
            sx={{
              flex: 1,
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
              padding: { xs: 4, md: 5 },
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Box sx={{ mb: 4 }}>
              <Avatar
              src="/ERP-logo.jpg"
                sx={{
                  width: 80,
                  height: 80,
                  aligncontent: 'center',
                  bgcolor: 'rgba(255,255,255,0.2)',
                  mb: 2,   
                  fontSize: 40
                }}
              >
                
              </Avatar>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Manufacturing ERP
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Refrigerator & Electric Oven Manufacturing
              </Typography>
            </Box>

            <Divider sx={{ my: 3, bgcolor: 'rgba(255,255,255,0.2)' }} />

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <DashboardIcon fontSize="small" /> Complete Manufacturing Solution
              </Typography>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <FactoryIcon fontSize="small" /> Real-time Production Tracking
              </Typography>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <InventoryIcon fontSize="small" /> Smart Inventory Management
              </Typography>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PeopleIcon fontSize="small" /> Employee Management
              </Typography>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AdminIcon fontSize="small" /> Role-based Access Control
              </Typography>
            </Box>
          </Box>

          {/* Right Side - Login Form */}
          <Box
            sx={{
              flex: 1.2,
              padding: { xs: 4, md: 5 },
              backgroundColor: 'white'
            }}
          >
            <Box sx={{ maxWidth: 400, mx: 'auto' }}>
              <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
                Welcome Back
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign="center" mb={4}>
                Sign in to your account
              </Typography>

              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  margin="normal"
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon color="action" />
                      </InputAdornment>
                    )
                  }}
                />

                <TextField
                  fullWidth
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  margin="normal"
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon color="action" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />

                {error && (
                  <Alert severity="error" sx={{ mt: 2, mb: 1 }}>
                    {error}
                  </Alert>
                )}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={loading}
                  sx={{
                    mt: 3,
                    mb: 2,
                    py: 1.5,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)'
                    }
                  }}
                >
                  {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
                </Button>
              </form>

              <Divider sx={{ my: 3 }}>
                <Typography variant="caption" color="text.secondary">
                  OR
                </Typography>
              </Divider>

              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                  Don't have an account?{' '}
                  <Link
                    component="button"
                    onClick={onRegisterClick}
                    sx={{
                      color: '#667eea',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    Register Now
                  </Link>
                </Typography>
              </Box>
              <Divider sx={{ my: 3 }} />

              <Typography variant="caption" color="text.secondary" textAlign="center" display="block">
                 @2026 Manufacturing ERP System
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
