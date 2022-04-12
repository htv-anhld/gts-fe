import DashboardNavbar from 'components/Navbars/DashboardNavbar';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DashboardLayout from '../../components/LayoutContainers/DashboardLayout';
import AddEditPage from './pages/AddEditPage';
import ListPage from './pages/ListPage';

export default function StudentLayout() {
    const { pathname } = useLocation();
    console.log(pathname);

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Routes>
                <Route path="/" element={<ListPage />} />
                <Route path="/add" element={<AddEditPage />} />
            </Routes>
        </DashboardLayout>
    );
}
