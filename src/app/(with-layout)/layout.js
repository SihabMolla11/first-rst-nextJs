import React from 'react';
import Header from '../header@footer/page';
import FooterPage from '../header@footer/footer/page';
import Navbar from '@/Components/Navbar/Navbar';

const WithLayout = ({ children }) => {
    return (
        <div>
            <Navbar/>
            {children}
            <FooterPage/>


        </div>
    );
};

export default WithLayout;