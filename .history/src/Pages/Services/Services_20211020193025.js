import React from 'react';
import { useState, useEffect } from 'react';

const Services = () => {
    const [services, setServices] = useState({});
    useEffect(() => {
        fetch('/public/')
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Services;