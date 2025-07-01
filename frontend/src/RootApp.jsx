import { Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout'; // your user layout
import AdminApp from './admin/App';               // your admin dashboard

const RootApp = () => {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminApp />} />
      <Route path="/*" element={<MainLayout />} />
    </Routes>
  );
};

export default RootApp;
