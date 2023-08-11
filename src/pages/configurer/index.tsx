import ColorCard from 'colorz/components/ColorCard';
import CardContainer from 'colorz/components/CardContainer';
import Controller from 'colorz/components/Controller';

import { useState, useEffect } from 'react';

const Configurer = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <Controller />
        </div>
    );
};

export default Configurer;
