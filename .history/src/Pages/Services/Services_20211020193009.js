import React from 'react';
import { useState, useEffect } from 'react';

const Services = () => {
    const [services, setServices] = useState({});
    useEffect(() => {
        fetch('./service.json')
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Services;