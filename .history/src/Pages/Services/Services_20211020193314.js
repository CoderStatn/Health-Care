import React from 'react';
import { useState, useEffect } from 'react';

const Services = () => {
    const [services, setServices] = useState({});
    useEffect(() => {
        fetch('/service.json')
        .then()
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Services;