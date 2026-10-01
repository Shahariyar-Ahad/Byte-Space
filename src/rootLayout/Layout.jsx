import 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/shared/Footer/Footer';
import Navbar from '../pages/shared/Navbar/Navbar';

const Layout = () => {
    return (
        <div> 
            
            <Navbar />
            <Outlet /> 
            <Footer /> 
            
        </div>
    );
};

export default Layout;