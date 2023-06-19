import React from 'react';
import SightBar from './SightBar';

const layout = ({ children }) => {
    return (
        <div className='container mx-auto'>
            <div className='flex gap-24'>
                <SightBar />
                {children}
            </div>
        </div>
    );
};

export default layout;