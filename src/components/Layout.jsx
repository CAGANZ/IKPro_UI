import React from 'react';
import { Outlet } from 'react-router-dom';  
import SideBarMenu from './SideBarMenu';
import '../assets/style/layout.scss';

const Layout = () => {
    return (
        <div className="layout">
            <div className="side-bar-menu">
                <SideBarMenu /> 
            </div>
            <div className="page-content bg-gray-200">
                <Outlet /> {/* Sayfa içeriği burada gösterilecek */}
            </div>
        </div>
    );
};

export default Layout;
