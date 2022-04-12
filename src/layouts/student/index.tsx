import DashboardNavbar from 'components/Navbars/DashboardNavbar';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from '../../components/LayoutContainers/DashboardLayout';
import AddEditPage from './pages/AddEditPage';
import ListPage from './pages/ListPage';

export default function StudentLayout() {
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
