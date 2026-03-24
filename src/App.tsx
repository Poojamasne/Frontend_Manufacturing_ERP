import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { LoginPage } from './pages/LoginPage';

const theme = createTheme({
  palette: {
    primary: { main: '#667eea' },
    secondary: { main: '#764ba2' },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif',
  },
  shape: { borderRadius: 12 },
});

// Dashboard Components
const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold"> Admin Dashboard</Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>Welcome back, {user.fullName}!</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}><Card><CardContent><Typography color="text.secondary">Total Users</Typography><Typography variant="h3" fontWeight="bold">245</Typography></CardContent></Card></Grid>
        <Grid item xs={12} md={4}><Card><CardContent><Typography color="text.secondary">Active Sessions</Typography><Typography variant="h3" fontWeight="bold">128</Typography></CardContent></Card></Grid>
        <Grid item xs={12} md={4}><Card><CardContent><Typography color="text.secondary">System Health</Typography><Typography variant="h3" fontWeight="bold" color="success.main">98%</Typography></CardContent></Card></Grid>
      </Grid>
    </Box>
  );
};

const SalesDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold"> Sales Dashboard</Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>Welcome back, {user.fullName}!</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Today's Orders</Typography><Typography variant="h3" fontWeight="bold">12</Typography></CardContent></Card></Grid>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Pending Orders</Typography><Typography variant="h3" fontWeight="bold">45</Typography></CardContent></Card></Grid>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Ready to Dispatch</Typography><Typography variant="h3" fontWeight="bold">23</Typography></CardContent></Card></Grid>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Delayed Orders</Typography><Typography variant="h3" fontWeight="bold" color="error.main">5</Typography></CardContent></Card></Grid>
      </Grid>
    </Box>
  );
};

const PurchaseDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold"> Purchase Dashboard</Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>Welcome back, {user.fullName}!</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Open POs</Typography><Typography variant="h3" fontWeight="bold">23</Typography></CardContent></Card></Grid>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Overdue POs</Typography><Typography variant="h3" fontWeight="bold" color="error.main">4</Typography></CardContent></Card></Grid>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Pending Approvals</Typography><Typography variant="h3" fontWeight="bold" color="warning.main">7</Typography></CardContent></Card></Grid>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Total Stock Value</Typography><Typography variant="h3" fontWeight="bold" color="success.main">45L</Typography></CardContent></Card></Grid>
      </Grid>
    </Box>
  );
};

const InventoryDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold"> Inventory Dashboard</Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>Welcome back, {user.fullName}!</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Raw Material</Typography><Typography variant="h3" fontWeight="bold">28L</Typography></CardContent></Card></Grid>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">WIP Stock</Typography><Typography variant="h3" fontWeight="bold">8L</Typography></CardContent></Card></Grid>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Finished Goods</Typography><Typography variant="h3" fontWeight="bold">9L</Typography></CardContent></Card></Grid>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Low Stock Items</Typography><Typography variant="h3" fontWeight="bold" color="error.main">8</Typography></CardContent></Card></Grid>
      </Grid>
    </Box>
  );
};

const ProductionDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold"> Production Dashboard</Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>Welcome back, {user.fullName}!</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Today's Target</Typography><Typography variant="h3" fontWeight="bold">100</Typography></CardContent></Card></Grid>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Today's Output</Typography><Typography variant="h3" fontWeight="bold" color="success.main">85</Typography></CardContent></Card></Grid>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Efficiency</Typography><Typography variant="h3" fontWeight="bold">85%</Typography></CardContent></Card></Grid>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Active WOs</Typography><Typography variant="h3" fontWeight="bold">6</Typography></CardContent></Card></Grid>
      </Grid>
    </Box>
  );
};

const OperatorDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold"> Operator Dashboard</Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>Welcome back, {user.fullName}!</Typography>
      <Card><CardContent><Typography variant="h6">Today's Tasks</Typography><Typography>Work Order: WO-2026-001</Typography><Typography>Product: Refrigerator X-100</Typography><Typography>Step: Cabinet Formation</Typography><Typography>Target: 50 units</Typography></CardContent></Card>
    </Box>
  );
};

const QualityDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold"> Quality Dashboard</Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>Welcome back, {user.fullName}!</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Rejection Rate</Typography><Typography variant="h3" fontWeight="bold" color="error.main">4.5%</Typography></CardContent></Card></Grid>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Pass Rate</Typography><Typography variant="h3" fontWeight="bold" color="success.main">95.5%</Typography></CardContent></Card></Grid>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Open NCRs</Typography><Typography variant="h3" fontWeight="bold">12</Typography></CardContent></Card></Grid>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Inspections Today</Typography><Typography variant="h3" fontWeight="bold">45</Typography></CardContent></Card></Grid>
      </Grid>
    </Box>
  );
};

const HRMSDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold"> HRMS Dashboard</Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>Welcome back, {user.fullName}!</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Total Employees</Typography><Typography variant="h3" fontWeight="bold">450</Typography></CardContent></Card></Grid>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Present Today</Typography><Typography variant="h3" fontWeight="bold" color="success.main">412</Typography></CardContent></Card></Grid>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">On Leave</Typography><Typography variant="h3" fontWeight="bold">23</Typography></CardContent></Card></Grid>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Pending Leaves</Typography><Typography variant="h3" fontWeight="bold" color="warning.main">8</Typography></CardContent></Card></Grid>
      </Grid>
    </Box>
  );
};

const FinanceDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold"> Finance Dashboard</Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>Welcome back, {user.fullName}!</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Total Revenue</Typography><Typography variant="h3" fontWeight="bold" color="success.main">45.2L</Typography></CardContent></Card></Grid>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Receivables</Typography><Typography variant="h3" fontWeight="bold">12.5L</Typography></CardContent></Card></Grid>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Payables</Typography><Typography variant="h3" fontWeight="bold">8.2L</Typography></CardContent></Card></Grid>
        <Grid item xs={12} sm={6} md={3}><Card><CardContent><Typography color="text.secondary">Monthly Payroll</Typography><Typography variant="h3" fontWeight="bold">18.5L</Typography></CardContent></Card></Grid>
      </Grid>
    </Box>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/sales" element={<SalesDashboard />} />
          <Route path="/purchase" element={<PurchaseDashboard />} />
          <Route path="/inventory" element={<InventoryDashboard />} />
          <Route path="/production" element={<ProductionDashboard />} />
          <Route path="/operator" element={<OperatorDashboard />} />
          <Route path="/quality" element={<QualityDashboard />} />
          <Route path="/hrms" element={<HRMSDashboard />} />
          <Route path="/finance" element={<FinanceDashboard />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
